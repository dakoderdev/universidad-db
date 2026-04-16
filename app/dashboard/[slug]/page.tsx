import { materias } from "@/db/tables";

type PageProps = {
  params: { slug: string };
};

export default function Page({ params }: PageProps) {
  const { slug } = params;

  return (
    <div className="min-h-screen">
        <div className="mx-auto max-w-5xl px-6 py-8 lg:px-8 lg:py-12">
        {/* Header */}
        <header className="mb-8">
          <h1 className="text-4xl font-semibold tracking-tight text-foreground">Materias de Plan</h1>
          <p className="text-foreground/60">Vista: {slug}</p>
        </header>

        {/* Table */}
        <div className="rounded-2xl border border-white/10 bg-neutral-900/20 overflow-hidden max-w-3xl">
          <table className="w-full text-sm">
            {/* Head */}
            <thead className="bg-white/5 text-foreground/70">
              <tr>
                <th className="text-left px-4 py-3 font-medium">Año</th>
                <th className="text-left px-4 py-3 font-medium">Dictado</th>
                <th className="text-left px-4 py-3 font-medium">Materia</th>
                <th className="text-left px-4 py-3 font-medium">Cursa</th>
                <th className="text-left px-4 py-3 font-medium">Rinde</th>
              </tr>
            </thead>

            {/* Body */}
            <tbody>
              {materias.map((m, i) => (
                <tr key={m.id} className={`border-t border-white/10 ${i % 2 === 0 ? "bg-white/[0.02]" : ""} hover:bg-white/[0.04] transition-colors`}>
                  <td className="px-4 py-3">{m.anio}</td>
                  <td className="px-4 py-3 text-foreground/70">{m.dictado}</td>
                  <td className="px-4 py-3 font-medium">{m.nombre}</td>

                  <td className="px-4 py-3">
                    <span className={`px-3 py-1 rounded-full text-xs ${m.cursa ? "bg-emerald-500/20 text-emerald-400" : "bg-neutral-700/30 text-foreground/50"}`}>{m.cursa ? "Sí" : "No"}</span>
                  </td>

                  <td className="px-4 py-3">
                    <span className={`px-3 py-1 rounded-full text-xs ${m.rinde ? "bg-yellow-500/20 text-yellow-400" : "bg-neutral-700/30 text-foreground/50"}`}>{m.rinde ? "Sí" : "No"}</span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
