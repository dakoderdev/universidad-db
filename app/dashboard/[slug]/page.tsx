import { materias, estado_academico, examenes, cursado_parciales, correlatividad_cursado, correlatividad_examen } from "@/db/tables";

type PageProps = {
  params: { slug: string };
};

type TableConfig = {
  title: string;
  headers: string[];
  data: any[];
  renderRow: (row: any, i: number) => React.ReactNode;
};

const tableConfigs: Record<string, TableConfig> = {
  materias: {
    title: "Materias de Plan",
    headers: ["Año", "Dictado", "Materia", "Cursa", "Rinde"],
    data: materias,
    renderRow: (m, i) => (
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
    ),
  },
  estado: {
    title: "Estado Académico",
    headers: ["Año", "Materia", "Estado", "Tomo", "Folio", "Plan"],
    data: estado_academico,
    renderRow: (row, i) => (
      <tr key={row.id} className={`border-t border-white/10 ${i % 2 === 0 ? "bg-white/[0.02]" : ""} hover:bg-white/[0.04] transition-colors`}>
        <td className="px-4 py-3">{row.anio}</td>
        <td className="px-4 py-3 font-medium">{row.materia}</td>
        <td className="px-4 py-3 font-medium">
          <span className={`rounded-full ${row.estado === "Regular" ? "bg-emerald-500/20 px-3 py-1 text-emerald-400" : ""}`}>{row.estado === "Regular" ? `Regular con ${row.nota}` : "-"}</span>
        </td>
        <td className="px-4 py-3 font-medium">{row.estado != "En Curso" ? row.tomo : "-"}</td>
        <td className="px-4 py-3 font-medium">{row.estado != "En Curso" ? row.folio : "-"}</td>
        <td className="px-4 py-3">{row.plan}</td>
      </tr>
    ),
  },
  examenes: {
    title: "Exámenes",
    headers: ["Fecha", "Materia", "Nota", "Especialidad", "Plan", "Codigo"],
    data: examenes,
    renderRow: (row, i) => (
      <tr key={row.id} className={`border-t border-white/10 ${i % 2 === 0 ? "bg-white/[0.02]" : ""} hover:bg-white/[0.04] transition-colors`}>
        <td className="px-4 py-3">{row.fecha}</td>
        <td className="px-4 py-3 font-medium">{row.materia}</td>
        <td className="px-4 py-3">
          <span className="rounded-full bg-neutral-500/20 px-3 py-1 text-neutral-400">{row.nota}</span>
        </td>
        <td className="px-4 py-3">{row.especialidad}</td>
        <td className="px-4 py-3">{row.plan}</td>
        <td className="px-4 py-3">{row.codigo}</td>
      </tr>
    ),
  },
  cursado: {
    title: "Cursado y Parciales",
    headers: ["Año", "Materia", "Comisión", "Aula"],
    data: cursado_parciales,
    renderRow: (row, i) => (
      <tr key={row.id} className={`border-t border-white/10 ${i % 2 === 0 ? "bg-white/[0.02]" : ""} hover:bg-white/[0.04] transition-colors`}>
        <td className="px-4 py-3 font-medium">{row.año}</td>
        <td className="px-4 py-3">{row.materia}</td>
        <td className="px-4 py-3">{row.comisión}</td>
        <td className="px-4 py-3">{row.aula}</td>
      </tr>
    ),
  },
  "correlatividad-cursado": {
    title: "Correlatividades para Cursar",
    headers: ["Año", "Materia", "Correlativa", "Plan"],
    data: correlatividad_cursado,
    renderRow: (row, i) => {
      const allCumplida = row.correlativa.every((c: any) => c.cumplida);
      return (
        <tr key={row.id} className={`border-t border-white/10 ${i % 2 === 0 ? "bg-white/[0.02]" : ""} hover:bg-white/[0.04] transition-colors`}>
          <td className="px-4 py-3 font-medium">{row.año}</td>
          <td className="px-4 py-3">{row.materia}</td>
          <td className="px-4 py-3 grid gap-1">
            {allCumplida ? (
              <span className="inline-block px-3 py-1 rounded-full w-fit bg-emerald-500/20 text-emerald-400">Se puede cursar</span>
            ) : (
              row.correlativa.map(
                (c: any, idx: number) =>
                  !c.cumplida && (
                    <div>
                      <span className="pr-0.5">No regularizo </span>
                      <span key={idx} className="inline-block px-3 py-1 w-fit rounded-full bg-yellow-500/20 text-yellow-400">
                        {c.materia}
                      </span>
                    </div>
                  ),
              )
            )}
          </td>
          <td className="px-4 py-3">{row.plan}</td>
        </tr>
      );
    },
  },
  "correlatividad-examen": {
    title: "Correlatividades para Rendir",
    headers: ["Año", "Materia", "Correlativa", "Plan"],
    data: correlatividad_examen,
    renderRow: (row, i) => {
      const allCumplida = row.correlativa.every((c: any) => c.cumplida);
      return (
        <tr key={row.id} className={`border-t border-white/10 ${i % 2 === 0 ? "bg-white/[0.02]" : ""} hover:bg-white/[0.04] transition-colors`}>
          <td className="px-4 py-3 font-medium">{row.año}</td>
          <td className="px-4 py-3">{row.materia}</td>
          <td className="px-4 py-3 grid gap-1">
            {allCumplida ? (
              <span className="px-3 py-1 rounded-full w-fit bg-emerald-500/20 text-emerald-400">Se puede rendir</span>
            ) : (
              row.correlativa.map(
                (c: any, idx: number) =>
                  !c.cumplida && (
                    <div>
                      <span className="pr-0.5">No regularizo </span>
                      <span key={idx} className="px-3 w-fit py-1 rounded-full bg-yellow-500/20 text-yellow-400">
                        {c.materia}
                      </span>
                    </div>
                  ),
              )
            )}
          </td>
          <td className="px-4 py-3">{row.plan}</td>
        </tr>
      );
    },
  },
};

export default async function Page({ params }: PageProps) {
  const { slug } = await params;
  const config = tableConfigs[slug];

  if (!config) {
    return (
      <div className="min-h-screen">
        <div className="mx-auto max-w-5xl px-6 py-8 lg:px-8 lg:py-12">
          <h1 className="text-4xl font-semibold tracking-tight text-foreground">Página no encontrada</h1>
          <p className="text-foreground/60 mt-2">El slug "{slug}" no está configurado.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      <div className="mx-auto max-w-5xl px-6 py-8 lg:px-8 lg:py-12">
        {/* Header */}
        <header className="mb-8">
          <h1 className="text-4xl font-semibold tracking-tight text-foreground">{config.title}</h1>
        </header>

        {/* Table */}
        <div className="rounded-2xl border border-white/10 bg-neutral-900/20 overflow-hidden max-w-3xl">
          <table className="w-full text-sm">
            {/* Head */}
            <thead className="bg-white/5 text-foreground/70">
              <tr>
                {config.headers.map((header) => (
                  <th key={header} className="text-left px-4 py-3 font-medium">
                    {header}
                  </th>
                ))}
              </tr>
            </thead>

            {/* Body */}
            <tbody>{config.data.map((row, i) => config.renderRow(row, i))}</tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
