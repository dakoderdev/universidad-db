"use client"

import Link from "next/link"
import { useState } from "react"
import { Menu, X, LogOut, Mail, GraduationCap, FileText, ClipboardList, BookOpen, CalendarDays, ChevronRight } from "lucide-react"

const navGroups = [
  {
    label: "Académico",
    items: [
      { name: "Materias del plan", href: "#materias" },
      { name: "Estado académico", href: "#estado" },
      { name: "Exámenes", href: "#examenes" },
      { name: "Cursado y parciales", href: "#cursado" },
    ],
  },
  {
    label: "Correlatividades",
    items: [
      { name: "Para cursar", href: "#correlatividad-cursado" },
      { name: "Para rendir", href: "#correlatividad-examen" },
    ],
  },
  {
    label: "Trámites",
    items: [
      { name: "Certificados", href: "#certificados" },
      { name: "Inscripción a examen", href: "#inscripcion-examen" },
      { name: "Inscripción a cursado", href: "#inscripcion-cursado" },
    ],
  },
  {
    label: "Cuenta",
    items: [
      { name: "Avisos", href: "#avisos" },
      { name: "Cambiar contraseña", href: "#password" },
    ],
  },
]

const quickActions = [
  { title: "Inscripción a cursado", desc: "Inscribite a las materias del cuatrimestre", href: "#inscripcion-cursado", icon: ClipboardList },
  { title: "Inscripción a examen", desc: "Anotate para rendir finales", href: "#inscripcion-examen", icon: CalendarDays },
  { title: "Descargar certificados", desc: "Certificado de alumno regular y más", href: "#certificados", icon: FileText },
  { title: "Estado académico", desc: "Consultá tu situación académica", href: "#estado", icon: GraduationCap },
  { title: "Exámenes", desc: "Ver calendario y resultados", href: "#examenes", icon: BookOpen },
  { title: "Notas de parciales", desc: "Consultá tus notas y encuestas", href: "#cursado", icon: ChevronRight },
]

export default function StudentPortal() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <div className="min-h-screen">
      {/* Mobile menu button */}
      <button
        onClick={() => setMenuOpen(!menuOpen)}
        className={`fixed top-4 ${menuOpen ? "left-[calc(100%-1rem)] -translate-x-full min-[400px]:translate-x-0  min-[400px]:left-76" : "left-4"} z-50 flex size-10 items-center justify-center rounded-lg bg-sidebar text-sidebar-foreground lg:hidden transition-all`}
        aria-label="Toggle menu"
      >
        {menuOpen ? <X className="size-5" /> : <Menu className="size-5" />}
      </button>

      {/* Overlay */}
      {menuOpen && (
        <div className="fixed inset-0 z-40 bg-black/50 lg:hidden" onClick={() => setMenuOpen(false)} />
      )}

      {/* Sidebar */}
      <aside
        className={`fixed inset-y-0 left-0 z-40 flex w-72 flex-col bg-sidebar text-sidebar-foreground transition-transform duration-300 lg:translate-x-0 ${
          menuOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex items-center gap-3 border-b border-sidebar-border px-6 py-6">
          <div className="flex size-10 items-center justify-center rounded-xl bg-orange-600 text-sidebar-primary-foreground">
            <GraduationCap className="size-5" />
          </div>
          <div>
            <p className="text-sm text-sidebar-foreground/60">Bienvenido/a</p>
            <p className="font-medium">Konevky, David</p>
          </div>
        </div>

        <nav className="flex-1 overflow-y-auto px-4 py-4">
          {navGroups.map((group) => (
            <div key={group.label} className="mb-6">
              <p className="mb-2 px-2 text-xs font-medium uppercase tracking-wider text-sidebar-foreground/50">
                {group.label}
              </p>
              <ul className="space-y-1">
                {group.items.map((item) => (
                  <li key={item.name}>
                    <Link
                      href={item.href}
                      onClick={() => setMenuOpen(false)}
                      className="flex items-center rounded-lg px-3 py-2 text-sm text-sidebar-foreground/80 transition-colors hover:bg-sidebar-accent hover:text-sidebar-accent-foreground"
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </nav>

        <div className="border-t border-sidebar-border px-4 py-4">
          <Link
            href="#logout"
            className="flex items-center gap-2 rounded-lg px-3 py-2 text-sm text-sidebar-foreground/80 transition-colors hover:bg-destructive/20 hover:text-destructive"
          >
            <LogOut className="size-4" />
            Cerrar sesión
          </Link>
        </div>
      </aside>

      {/* Main Content */}
      <main className="lg:pl-72">
        <div className="mx-auto max-w-5xl px-6 py-8 lg:px-8 lg:py-12">
          {/* Header */}
          <header className="mb-8 pt-12 lg:pt-0">
            <h1 className="text-4xl font-semibold tracking-tighter text-foreground lg:text-6xl text-balance">
              UniversidadDB
            </h1>
            <p className="text-muted-foreground">
              Sistema Académico
            </p>
          </header>

          {/* Announcements */}
          <section className="mb-10">
            <h2 className="mb-4 text-lg font-semibold text-foreground">Avisos importantes</h2>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="rounded-xl border border-orange-500/20 bg-orange-500/5 p-5">
                <div className="mb-3 flex items-start justify-between gap-4">
                  <h3 className="font-semibold text-foreground">Inscripción 1er Cuatrimestre 2026</h3>
                  <span className="text-xs text-muted-foreground">Marzo 2026</span>
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Inscripción a todas las especialidades de grado del 1er cuatrimestre disponible a partir del{" "}
                  <strong className="text-foreground">lunes 23 de marzo</strong>.
                </p>
              </div>

              <div className="rounded-xl border border-primary/20 bg-primary/5 p-5">
                <h3 className="mb-3 font-semibold text-foreground">Certificados disponibles</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Ya podés descargar tu <strong className="text-foreground">Certificado de Alumno Regular</strong> y{" "}
                  <strong className="text-foreground">Actividad Académica</strong> con validación por código QR desde
                  el menú &quot;Descarga de certificados&quot;.
                </p>
              </div>
            </div>
          </section>

          {/* Quick Actions */}
          <section className="mb-10">
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {quickActions.map((action) => {
                const Icon = action.icon
                return (
                  <Link
                    key={action.title}
                    href={action.href}
                    className={`group flex flex-col min-h-32 gap-3 rounded-xl border bg-card p-5 transition-all hover:shadow-md border-border hover:border-primary/30`}
                  >
                    <div className="flex items-center gap-3">
                      <Icon className="size-5 text-muted-foreground group-hover:text-primary transition-colors" />
                      <h3 className="font-medium text-card-foreground">{action.title}</h3>
                    </div>
                    <p className="text-sm text-muted-foreground">{action.desc}</p>
                  </Link>
                )
              })}
            </div>
          </section>

          {/* Contact */}
          <section className="mb-10">
            <h2 className="mb-4 text-lg font-semibold text-foreground">Contacto y ayuda</h2>
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="rounded-xl border border-border bg-card p-5">
                <h3 className="font-semibold text-card-foreground">Consultas académicas</h3>
                <p className="mt-1 text-sm text-muted-foreground">
                  Para cuestiones relacionadas con cursado y exámenes.
                </p>
                <div className="mt-4 space-y-2">
                  <a
                    href="mailto:dptoalumnos@frt.utn.edu.ar"
                    className="flex items-center gap-2 rounded-lg border border-border px-3 py-2 text-sm hover:bg-muted transition-colors"
                  >
                    <Mail className="size-4 text-muted-foreground" />
                    dptoalumnos@frt.utn.edu.ar
                  </a>
                  <a
                    href="mailto:legajosyactas@frt.utn.edu.ar"
                    className="flex items-center gap-2 rounded-lg border border-border px-3 py-2 text-sm hover:bg-muted transition-colors"
                  >
                    <Mail className="size-4 text-muted-foreground" />
                    legajosyactas@frt.utn.edu.ar
                  </a>
                </div>
              </div>
              <div className="rounded-xl border border-border bg-card p-5">
                <h3 className="font-semibold text-card-foreground">Resetear contraseña</h3>
                <p className="mt-1 text-sm text-muted-foreground">
                  Enviá tu nombre, legajo y/o DNI para recuperar acceso.
                </p>
                <div className="mt-4">
                  <a
                    href="mailto:dptoalumnos@frt.utn.edu.ar"
                    className="flex items-center gap-2 rounded-lg border border-border px-3 py-2 text-sm hover:bg-muted transition-colors"
                  >
                    <Mail className="size-4 text-muted-foreground" />
                    dptoalumnos@frt.utn.edu.ar
                  </a>
                </div>
              </div>
            </div>
          </section>

          {/* Footer */}
          <footer className="border-t border-border pt-6 text-center text-sm text-muted-foreground">
            <p>Ciclo Lectivo 2026 — Dirección de TIC&apos;s</p>
            <p className="mt-1">Universidad Tecnológica Nacional — Facultad Regional Tucumán</p>
          </footer>
        </div>
      </main>
    </div>
  )
}
