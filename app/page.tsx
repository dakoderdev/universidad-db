import Link from 'next/link';

export function Input({ label, id, name, type, required }: { label: string; id: string; name: string; type: string; required: boolean }) {
  return (
    <div className="flex flex-col gap-1">
      <label htmlFor={id}>{label}</label>
      <input className="px-4 py-2 border border-foreground/10 rounded-lg" type={type} id={id} name={name} required={required} />
    </div>
  );
}


export default function StudentPortal() {
  return (
    <div className="min-h-screen fondo flex items-center justify-center">
      <form action="/login" method="POST" className="flex flex-col items-stretch gap-3 bg-background w-full max-w-sm p-7 rounded-2xl">
        <h1 className="text-3xl pb-2">Iniciar Sesión</h1>
        <Input label="Legajo" id="studentcode" name="username" type="text" required={true} />
        <Input label="Contraseña" id="password" name="password" type="password" required={true} />
        <Link href="/dashboard" type="submit" className='w-fit self-center px-4 py-2 bg-yellow-700 mt-4 rounded-lg'>Ingresar</Link>
      </form>
    </div>);
}
