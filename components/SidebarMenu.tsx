"use client";

import Link from "next/link";
import { Dispatch, SetStateAction } from "react";
import { Menu, X, LogOut, GraduationCap, BookOpen, BookCheck, Megaphone, GitCompare, FileText, ClipboardList, CalendarDays, RectangleEllipsis } from "lucide-react";

type NavItem = {
  name: string;
  href: string;
  icon: React.ComponentType<{ className?: string }>;
};

type NavGroup = {
  label: string;
  items: NavItem[];
};

const navGroups: NavGroup[] = [
  {
    label: "Académico",
    items: [
      { name: "Materias del plan", href: "#materias", icon: FileText },
      { name: "Estado académico", href: "#estado", icon: GraduationCap },
      { name: "Exámenes", href: "#examenes", icon: BookOpen },
      { name: "Cursado y parciales", href: "#cursado", icon: BookCheck },
    ],
  },
  {
    label: "Correlatividades",
    items: [
      { name: "Para cursar", href: "#correlatividad-cursado", icon: GitCompare },
      { name: "Para rendir", href: "#correlatividad-examen", icon: GitCompare },
    ],
  },
  {
    label: "Trámites",
    items: [
      { name: "Descargar certificados", href: "#certificados", icon: FileText },
      { name: "Inscripción a examen", href: "#inscripcion-examen", icon: CalendarDays },
      { name: "Inscripción a cursado", href: "#inscripcion-cursado", icon: ClipboardList },
    ],
  },
  {
    label: "Cuenta",
    items: [
      { name: "Avisos", href: "#avisos", icon: Megaphone },
      { name: "Cambiar contraseña", href: "#password", icon: RectangleEllipsis },
    ],
  },
];

type SidebarMenuProps = {
  menuOpen: boolean;
  setMenuOpen: Dispatch<SetStateAction<boolean>>;
};

export default function SidebarMenu({ menuOpen, setMenuOpen }: SidebarMenuProps) {
  return (
    <>
      <button onClick={() => setMenuOpen(!menuOpen)} className={`fixed top-3 ${menuOpen ? "left-[calc(100%-0.75rem)] -translate-x-full min-[400px]:translate-x-0  min-[400px]:left-76" : "left-3"} z-50 flex size-10 items-center justify-center rounded-lg bg-yellow-700 text-background lg:hidden transition-all duration-300`} aria-label="Toggle menu">
        {menuOpen ? <X className="size-5" /> : <Menu className="size-5" />}
      </button>

      {menuOpen && <div className="fixed inset-0 z-40 lg:hidden" onClick={() => setMenuOpen(false)} />}

      <aside className={`fixed inset-y-0 z-40 flex w-full max-w-72 flex-col m-2 rounded-lg bg-neutral-100 text-background transition-transform duration-300 lg:translate-x-0 ${menuOpen ? "translate-x-0 left-0" : "-translate-x-full -left-2 lg:left-0"}`}>
        <div className="flex items-center gap-3 border-b border-background/20 px-6 py-3">
          <div className="flex size-10 items-center justify-center rounded-2xl bg-yellow-700 text-neutral-100">
            <GraduationCap className="size-5" />
          </div>
          <div>
            <p className="text-sm text-background/60">Bienvenido/a</p>
            <p className="font-medium">Konevky, David</p>
          </div>
        </div>

        <nav className="flex-1 overflow-y-auto px-4 py-3 scrollbar-custom">
          {navGroups.map((group) => (
            <div key={group.label} className="mb-6">
              <p className="mb-2 px-2 text-xs font-medium uppercase tracking-wider text-background/50">{group.label}</p>
              <ul className="space-y-1">
                {group.items.map((item) => {
                  const Icon = item.icon;
                  return (
                    <li key={item.name}>
                      <Link href={item.href} onClick={() => setMenuOpen(false)} className="flex items-center rounded-xl px-3 py-2 text-sm text-background/80 transition-colors hover:bg-yellow-700 hover:text-neutral-100">
                        <Icon className="size-4 mr-2" />
                        {item.name}
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </div>
          ))}
        </nav>

        <div className="border-t border-background/20 px-4 py-3">
          <Link href="#logout" className="flex items-center gap-2 rounded-lg px-3 py-2 text-sm text-background/80 transition-colors hover:bg-destructive/20 hover:text-destructive">
            <LogOut className="size-4" />
            Cerrar sesión
          </Link>
        </div>
      </aside>
    </>
  );
}
