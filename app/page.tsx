"use client";

import Link from "next/link";
import { useState } from "react";
import { Mail, FileText, ClipboardList, BookOpen, CalendarDays, ChevronRight, GraduationCap } from "lucide-react";
import SidebarMenu from "../components/SidebarMenu";

const quickActions = [
  { title: "Inscripción a cursado", desc: "Inscribite a las materias del cuatrimestre", href: "#inscripcion-cursado", icon: ClipboardList },
  { title: "Inscripción a examen", desc: "Anotate para rendir finales", href: "#inscripcion-examen", icon: CalendarDays },
  { title: "Descargar certificados", desc: "Certificado de alumno regular y más", href: "#certificados", icon: FileText },
  { title: "Estado académico", desc: "Consultá tu situación académica", href: "#estado", icon: GraduationCap },
  { title: "Exámenes", desc: "Ver calendario y resultados", href: "#examenes", icon: BookOpen },
  { title: "Notas de parciales", desc: "Consultá tus notas y encuestas", href: "#cursado", icon: ChevronRight },
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
            <h1 className="text-4xl font-semibold tracking-tighter text-foreground lg:text-6xl text-balance">UniversidadDB</h1>
            <p className="text-foreground/60">Sistema Académico</p>
          </header>

          {/* Announcements */}
          <section className="mb-10">
            <h2 className="mb-4 text-lg font-semibold text-foreground">Avisos importantes</h2>
            <div className="grid md:grid-cols-2 gap-2">
              <div className="rounded-2xl border bg-yellow-700 p-5 text-background/60">
                <div className="mb-3 flex items-start justify-between gap-4">
                  <h3 className="font-semibold text-background/75">Inscripción 1er Cuatrimestre 2026</h3>
                  <span className="text-xs">Marzo 2026</span>
                </div>
                <p className="text-sm leading-relaxed">
                  Inscripción a todas las especialidades de grado del 1er cuatrimestre disponible a partir del <strong className="text-background/75">lunes 23 de marzo</strong>.
                </p>
              </div>

              <div className="rounded-2xl border bg-turquoise text-background/75 p-5">
                <h3 className="mb-3 font-semibold">Certificados disponibles</h3>
                <p className="text-sm leading-relaxed">
                  Ya podés descargar tu <strong>Certificado de Alumno Regular</strong> y <strong>Actividad Académica </strong>con validación por código QR desde el menú &quot;Descarga de certificados&quot;.
                </p>
              </div>
            </div>
          </section>

          {/* Quick Actions */}
          <section className="mb-10">
            <div className="grid gap-2 sm:grid-cols-2 lg:grid-cols-3">
              {quickActions.map((action) => {
                const Icon = action.icon;
                return (
                  <Link key={action.title} href={action.href} className={`group flex flex-col min-h-32 gap-3 rounded-2xl border bg-neutral-900/20 p-5 transition-all duration-400 hover:shadow-md border-white/10 hover:bg-white/90 hover:border-transparent text-foreground hover:text-background/75`}>
                    <div className="flex items-center gap-3">
                      <Icon className="size-5 text-foreground/60 group-hover:text-inherit transition-colors duration-400" />
                      <h3 className="font-medium transition-colors duration-400">{action.title}</h3>
                    </div>
                    <p className="text-sm text-foreground/60 group-hover:text-background/60 transition-colors duration-400">{action.desc}</p>
                  </Link>
                );
              })}
            </div>
          </section>

          {/* Contact */}
          <section className="mb-10">
            <h2 className="mb-4 text-lg font-semibold text-foreground">Contacto y ayuda</h2>
            <div className="grid gap-2 sm:grid-cols-2">
              <div className="rounded-2xl border border-white/10 bg-neutral-900/20 p-5">
                <h3 className="font-semibold text-card-white">Consultas académicas</h3>
                <p className="mt-1 text-sm text-foreground/60">Para cuestiones relacionadas con cursado y exámenes.</p>
                <div className="mt-4 space-y-2">
                  <a href="mailto:dptoalumnos@frt.utn.edu.ar" className="flex items-center gap-2 rounded-lg border border-white/10 px-3 py-2 text-sm hover:bg-neutral-900/60 transition-colors">
                    <Mail className="size-4 text-foreground/60" />
                    dptoalumnos@frt.utn.edu.ar
                  </a>
                  <a href="mailto:legajosyactas@frt.utn.edu.ar" className="flex items-center gap-2 rounded-lg border border-white/10 px-3 py-2 text-sm hover:bg-neutral-900/60 transition-colors">
                    <Mail className="size-4 text-foreground/60" />
                    legajosyactas@frt.utn.edu.ar
                  </a>
                </div>
              </div>
              <div className="rounded-2xl border border-white/10 bg-neutral-900/20 p-5">
                <h3 className="font-semibold text-card-white">Resetear contraseña</h3>
                <p className="mt-1 text-sm text-foreground/60">Enviá tu nombre, legajo y/o DNI para recuperar acceso.</p>
                <div className="mt-4">
                  <a href="mailto:dptoalumnos@frt.utn.edu.ar" className="flex items-center gap-2 rounded-lg border border-white/10 px-3 py-2 text-sm hover:bg-neutral-900/60 transition-colors">
                    <Mail className="size-4 text-foreground/60" />
                    dptoalumnos@frt.utn.edu.ar
                  </a>
                </div>
              </div>
            </div>
          </section>

          {/* Footer */}
          <footer className="border-t border-white/10 pt-6 text-center text-sm text-foreground/60">
            <p>Ciclo Lectivo 2026 — Dirección de TIC&apos;s</p>
            <p className="mt-1">Universidad Tecnológica Nacional — Facultad Regional Tucumán</p>
          </footer>
        </div>
      </main>
    </div>
  );
}
