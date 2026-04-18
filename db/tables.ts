const materias = [
  { id: 1, anio: 1, dictado: "1C", nombre: "Base de Datos I", cursa: true, rinde: false },
  { id: 2, anio: 1, dictado: "2C", nombre: "Programación I", cursa: true, rinde: true },
];

const estado_academico = [
  { id: 1, anio: "1", materia: "Programación I", estado: "Regular", nota: 9, tomo: 1, folio: 100, plan: 2025 },
  { id: 2, anio: "1", materia: "Base de Datos I", estado: "En Curso", nota: 8, tomo: 2, folio: 200, plan: 2025 },
];

const examenes = [
  { id: 1, fecha: "15/05/2024", materia: "Base de Datos I", nota: 8, aula: "A-101", especialidad: "Ingeniería en Sistemas", plan: 2025, codigo: 104 },
  { id: 2, fecha: "20/05/2024", materia: "Programación I", nota: 9, aula: "B-204", especialidad: "Ingeniería en Sistemas", plan: 2025, codigo: 105 },
];

const cursado_parciales = [
  { id: 1, año: "1", materia: "Programación I", comisión: "1TPCC1", aula: "Casa Central" },
  { id: 2, año: "1", materia: "Base de Datos I", comisión: "1TPCC2", aula: "Casa Central" },
];

const correlatividad_cursado = [
  {
    id: 1,
    año: "2",
    materia: "Algoritmos II",
    correlativa: [
      { materia: "Programación I", cumplida: true },
      { materia: "Base de Datos I", cumplida: false },
    ],
    plan: 2024,
  },
  { id: 2, año: "2", materia: "Estructuras de Datos", correlativa: [{ materia: "Programación I", cumplida: true }], plan: 2024 },
];

const correlatividad_examen = [
  { id: 1, año: "1", materia: "Legislación I", correlativa: [{ materia: "Programación I", cumplida: true }], plan: 2024 },
  {
    id: 2,
    año: "2",
    materia: "Sistemas Operativos I",
    correlativa: [
      { materia: "Base de Datos I", cumplida: false },
      { materia: "Estructura de Datos", cumplida: true },
    ],
    plan: 2024,
  },
];

const avisos = [
  { id: 1, titulo: "Cambio de horario", fecha: "18/04/2024", leido: false },
  { id: 2, titulo: "Nuevo reglamento académico", fecha: "10/04/2024", leido: true },
];

export { materias, estado_academico, examenes, cursado_parciales, correlatividad_cursado, correlatividad_examen, avisos };
