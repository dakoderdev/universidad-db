"use client";

import { Bell } from "lucide-react";

export default function AvisosPage() {
  const avisosData = [
    { id: 1, titulo: "Cambio de horario", fecha: "18/04/2024", contenido: "Se ha modificado el horario de la clase de Base de Datos I. La nueva sesión será los miércoles de 14:00 a 16:00 en el aula A-101." },
  ];

  return (
    <div className="min-h-screen">
      <div className="mx-auto max-w-5xl px-6 py-8 lg:px-8 lg:py-12">
        <header className="mb-8">
          <h1 className="text-4xl font-semibold tracking-tight text-foreground">Avisos</h1>
        </header>

        <div className="grid gap-4 max-w-3xl">
          {avisosData.map((aviso) => (
            <div key={aviso.id} className="rounded-2xl border border-white/10 bg-neutral-900/20 p-6 hover:bg-neutral-900/30 transition-colors">
              <div className="flex items-start gap-4">
                <div className="flex-1">
                  <div className="flex items-start justify-between">
                    <div>
                      <h3 className="text-lg font-semibold text-foreground">{aviso.titulo}</h3>
                      <p className="text-foreground/50 text-sm mt-1">{aviso.fecha}</p>
                    </div>
                  </div>
                  <p className="text-foreground/70 text-sm mt-3">{aviso.contenido}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
