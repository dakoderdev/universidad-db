"use client";

import Link from "next/link";
import { useState } from "react";
import { Mail, FileText, ClipboardList, BookOpen, CalendarDays, BookCheck, GraduationCap } from "lucide-react";
import SidebarMenu from "../components/SidebarMenu";

const quickActions = [
  { title: "Inscripción a cursado", desc: "Inscribite a las materias del cuatrimestre", href: "#inscripcion-cursado", icon: ClipboardList },
  { title: "Inscripción a examen", desc: "Anotate para rendir finales", href: "#inscripcion-examen", icon: CalendarDays },
  { title: "Descargar certificados", desc: "Certificado de alumno regular y más", href: "#certificados", icon: FileText },
  { title: "Estado académico", desc: "Consultá tu situación académica", href: "#estado", icon: GraduationCap },
  { title: "Exámenes", desc: "Ver calendario y resultados", href: "#examenes", icon: BookOpen },
  { title: "Notas de parciales", desc: "Consultá tus notas y encuestas", href: "#cursado", icon: BookCheck },
];

export default function StudentPortal() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="min-h-screen">
      <SidebarMenu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />

      {/* Main Content */}
      <main className="lg:pl-72">
        <div className="mx-auto max-w-5xl px-6 py-8 lg:px-8 lg:py-12">
          {/* Header */}
          <header className="mb-8 pt-12 lg:pt-0">
            <h1 className="text-5xl font-semibold tracking-tighter text-foreground lg:text-6xl text-balance">UniversidadDB</h1>
            <p className="text-foreground/60">Sistema Académico</p>
          </header>

          {/* Announcements */}
          <section className="pb-6 mb-4 border-b border-white/30">
            <h2 className="mb-4 text-lg font-semibold text-foreground">Avisos importantes</h2>
            <div className="grid md:grid-cols-2 gap-2">
              <div className="rounded-2xl bg-terracota p-5 pb-7 text-background/60">
                <div className="mb-3 flex items-start justify-between gap-4">
                  <h3 className="font-semibold text-background/75">Inscripción 1er Cuatrimestre 2026</h3>
                  <span className="text-xs text-nowrap">Marzo 2026</span>
                </div>
                <p className="text-sm leading-relaxed">
                  Inscripción a todas las especialidades de grado del 1er cuatrimestre disponible a partir del <strong className="text-background/75">lunes 23 de marzo</strong>.
                </p>
              </div>

              <div className="rounded-2xl bg-turquoise text-background/60 p-5 pb-7">
                <div className="mb-3 flex items-start justify-between gap-4">
                  <h3 className="font-semibold text-background/75">Certificados disponibles</h3>
                  <span className="text-xs text-nowrap">Ahora</span>
                </div>
                <p className="text-sm leading-relaxed">
                  Ya podés descargar tu <strong>Certificado de Alumno Regular</strong> y <strong>Actividad Académica </strong>con validación por código QR desde el menú &quot;Descarga de certificados&quot;.
                </p>
              </div>
            </div>
          </section>

          {/* Quick Actions */}
          <section className="@container pb-6 mb-4 border-b border-white/30">
            <h2 className="mb-4 text-lg font-semibold text-foreground">Acciones Recomendadas</h2>
            <div className="grid gap-2 @xl:grid-cols-2 @min-[50rem]:grid-cols-3">
              {quickActions.map((action) => {
                const Icon = action.icon;
                return (
                  <Link key={action.title} href={action.href} className="group flex flex-col min-h-32 gap-2 rounded-2xl bg-neutral-900/30 p-4 transition-all duration-300 min-h-38 hover:-translate-y-0.5 hover:bg-yellow-700">
                    <div className="flex items-center gap-3">
                      <Icon className="size-5 text-foreground/70 transition-colors duration-300 group-hover:text-background/85" />
                      <h3 className="font-medium text-lg text-foreground transition-colors duration-300 group-hover:text-background/85">{action.title}</h3>
                    </div>
                    <p className="text-[0.9rem] text-pretty text-foreground/60 group-hover:text-background/70 leading-relaxed  transition-colors duration-300">{action.desc}</p>
                  </Link>
                );
              })}
            </div>
          </section>

          {/* Contact */}
          <section className="pb-10">
            <h2 className="mb-4 text-lg font-semibold text-foreground">Contacto y ayuda</h2>
            <div className="grid gap-2 sm:grid-cols-2">
              <div className="rounded-2xl border border-white/10 bg-neutral-900/20 p-5">
                <h3 className="font-semibold text-card-white">Consultas académicas</h3>
                <p className="mt-1 text-sm text-foreground/60">Para cuestiones relacionadas con cursado y exámenes.</p>
                <div className="mt-4 space-y-2">
                  <a href="mailto:dptoalumnos@unidb.edu.ar" className="flex items-center gap-2 rounded-lg border border-white/10 px-3 py-2 text-sm hover:bg-neutral-900/60 transition-colors">
                    <Mail className="size-4 text-foreground/60" />
                    dptoalumnos@unidb.edu.ar
                  </a>
                  <a href="mailto:legajosyactas@unidb.edu.ar" className="flex items-center gap-2 rounded-lg border border-white/10 px-3 py-2 text-sm hover:bg-neutral-900/60 transition-colors">
                    <Mail className="size-4 text-foreground/60" />
                    legajosyactas@unidb.edu.ar
                  </a>
                </div>
              </div>
              <div className="rounded-2xl border border-white/10 bg-neutral-900/20 p-5">
                <h3 className="font-semibold text-card-white">Resetear contraseña</h3>
                <p className="mt-1 text-sm text-foreground/60">Enviá tu nombre, legajo y/o DNI para recuperar acceso.</p>
                <div className="mt-4">
                  <a href="mailto:dptoalumnos@unidb.edu.ar" className="flex items-center gap-2 rounded-lg border border-white/10 px-3 py-2 text-sm hover:bg-neutral-900/60 transition-colors">
                    <Mail className="size-4 text-foreground/60" />
                    dptoalumnos@unidb.edu.ar
                  </a>
                </div>
              </div>
            </div>
          </section>

          {/* Footer */}
          <footer className="border-t border-white/10 pt-6 text-center text-sm text-foreground/60">
            <p>Ciclo Lectivo 2026 — Dirección de TIC&apos;s</p>
            <p className="mt-1">UniversidadDB</p>
          </footer>
        </div>
      </main>
    </div>
  );
}
