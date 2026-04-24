"use client";

import Link from "next/link";
import { Dispatch, SetStateAction } from "react";
import { useRouter, usePathname } from "next/navigation";
import { Menu, X, LogOut, GraduationCap, BookOpen, BookCheck, Megaphone, GitCompare, FileText, ClipboardList, CalendarDays, RectangleEllipsis } from "lucide-react";
import React from "react";

type NavItem = {
  name: string;
  href: string;
  icon: React.ComponentType<{ className?: string }>;
  disabled?: boolean;
};

type NavGroup = {
  label: string;
  items: NavItem[];
};

const navGroups: NavGroup[] = [
  {
    label: "Académico",
    items: [
      { name: "Materias del plan", href: "/dashboard/materias", icon: FileText },
      { name: "Estado académico", href: "/dashboard/estado", icon: GraduationCap },
      { name: "Exámenes", href: "/dashboard/examenes", icon: BookOpen },
      { name: "Cursado y parciales", href: "/dashboard/cursado", icon: BookCheck },
    ],
  },
  {
    label: "Correlatividades",
    items: [
      { name: "Para cursar", href: "/dashboard/correlatividad-cursado", icon: GitCompare },
      { name: "Para rendir", href: "/dashboard/correlatividad-examen", icon: GitCompare },
    ],
  },
  {
    label: "Trámites",
    items: [
      { name: "Descargar certificados", href: "/dashboard/certificados", icon: FileText },
      { name: "Inscripción a examen", href: "#inscripcion-examen", icon: CalendarDays, disabled: true },
      { name: "Inscripción a cursado", href: "#inscripcion-cursado", icon: ClipboardList, disabled: true },
    ],
  },
  {
    label: "Cuenta",
    items: [
      { name: "Avisos", href: "/dashboard/avisos", icon: Megaphone },
      { name: "Cambiar contraseña", href: "#password", icon: RectangleEllipsis },
    ],
  },
];

type SidebarMenuProps = {
  menuOpen: boolean;
  setMenuOpen: Dispatch<SetStateAction<boolean>>;
};

export default function SidebarMenu({ menuOpen, setMenuOpen }: SidebarMenuProps) {
  const router = useRouter();
  const pathname = usePathname()

  const handleLogout = () => {
    localStorage.removeItem("session");
    router.replace("/");
  };
  return (
    <React.Fragment>
      <button onClick={() => setMenuOpen(!menuOpen)} className={`fixed top-3 ${menuOpen ? "left-[calc(100%-0.75rem)] -translate-x-full min-[400px]:translate-x-0  min-[400px]:left-76" : "left-3"} z-50 flex size-10 items-center justify-center rounded-lg bg-yellow-700 text-background lg:hidden transition-all duration-300`} aria-label="Toggle menu">
        {menuOpen ? <X className="size-5" /> : <Menu className="size-5" />}
      </button>

      {menuOpen && <div className="fixed inset-0 z-40 lg:hidden" onClick={() => setMenuOpen(false)} />}

      <aside className={`fixed inset-y-0 z-40 flex w-full max-w-72 flex-col m-2 rounded-lg bg-neutral-950 border border-foreground/10 text-foreground transition-transform duration-300 lg:translate-x-0 ${menuOpen ? "translate-x-0 left-0" : "-translate-x-full -left-2 lg:left-0"}`}>
        <Link href="/dashboard" className="group flex items-center gap-3 border-b border-foreground/20 px-6 py-3">
          <div className="flex size-10 items-center justify-center rounded-2xl bg-yellow-700 text-neutral-100">
            <GraduationCap className="size-5 group-hover:scale-105 transition-transform" />
          </div>
          <div>
            <p className="text-sm text-foreground/60">{ pathname === "/dashboard" ? "Bienvenido/a" : "Volver a Inicio"}</p>
            <p className="font-medium">Konevky, David</p>
          </div>
        </Link>

        <nav className="flex-1 overflow-y-auto px-4 py-3 scrollbar-custom">
          {navGroups.map((group) => (
            <div key={group.label} className="mb-6">
              <p className="mb-2 px-2 text-xs font-medium uppercase tracking-wider text-foreground/50">{group.label}</p>
              <ul className="space-y-1">
                {group.items.map((item) => {
                  const Icon = item.icon;
                  return (
                    <li key={item.name}>
                      <Link href={item.href} onClick={() => setMenuOpen(false)} className={`${item.disabled === true ? "opacity-50 cursor-default" : "hover:bg-yellow-700 hover:text-neutral-100"} flex items-center rounded-xl px-3 py-2 text-sm text-foreground/80 transition-colors`}>
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

        <div className="border-t border-foreground/20 px-4 py-3">
          <button onClick={handleLogout} className="cursor-pointer w-full flex items-center gap-2 rounded-lg px-3 py-2 text-sm text-foreground/80 transition-colors hover:bg-destructive/20 hover:text-destructive">
            <LogOut className="size-4" />
            Cerrar sesión
          </button>
        </div>
      </aside>
    </React.Fragment>
  );
}
