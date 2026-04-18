"use client";

import { Download } from "lucide-react";

export default function CertificadosPage() {
  const certificadosData = [
    { id: 1, tipo: "Certificado de Alumno Regular", descripcion: "Constancia de condición de alumno regular en la carrera" },
    { id: 2, tipo: "Actividad Académica", descripcion: "Detalle completo de actividades académicas realizadas" },
  ];

  return (
    <div className="min-h-screen">
      <div className="mx-auto max-w-5xl px-6 py-8 lg:px-8 lg:py-12">
        <header className="mb-8">
          <h1 className="text-4xl font-semibold tracking-tight text-foreground">Descargar Certificados</h1>
        </header>

        <div className="grid gap-4 max-w-3xl">
          {certificadosData.map((cert) => (
            <div key={cert.id} className="rounded-2xl border border-white/10 bg-neutral-900/20 p-6 hover:bg-neutral-900/30 transition-colors">
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-foreground">{cert.tipo}</h3>
                  <p className="text-foreground/60 text-sm mt-1">{cert.descripcion}</p>
                </div>
                <button
                  onClick={() => {
                    // Download functionality would go here
                    console.log(`Downloading ${cert.tipo}`);
                  }}
                  className="ml-4 flex items-center gap-2 px-4 py-2 rounded-lg bg-yellow-700 text-neutral-100 hover:bg-yellow-600 transition-colors whitespace-nowrap"
                >
                  <Download className="size-4" />
                  Descargar
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
