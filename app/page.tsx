"use client";
import {useRouter } from "next/navigation";

export function Input({ label, id, name, type, required }: { label: string; id: string; name: string; type: string; required: boolean }) {
  return (
    <div className="flex flex-col gap-1.5">
      <label htmlFor={id} className='pl-0.5'>{label}</label>
      <input className="px-4 py-2 bg-neutral-950/10 border border-foreground/10 rounded-xl" type={type} id={id} name={name} required={required} />
    </div>
  );
}


export default function StudentPortal() {
  const router = useRouter();
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);
    const username = formData.get('username');
    const password = formData.get('password');

    if (username === '55555' && password === 'admin') {
      router.push('/dashboard');
    } else {
      alert("Credenciales incorrectas");
    }
  }

  return (
    <div className="min-h-screen fondo flex items-center justify-center">
      <span className='absolute top-4 left-4 py-2 px-5 text-xl rounded-full bg-background/60 backdrop-blur-xs '>UniversityDB</span>
      <form onSubmit={handleSubmit} action="/login" method="POST" className="flex flex-col items-stretch gap-3 bg-background border border-foreground/10 shadow-md shadow-black/70 w-full max-w-sm p-7 rounded-2xl">
        <h1 className="text-3xl pb-2">Iniciar Sesión</h1>
        <Input label="Legajo" id="studentcode" name="username" type="text" required={true} />
        <Input label="Contraseña" id="password" name="password" type="password" required={true} />
        <button type="submit" className='w-fit self-end px-6 py-2 bg-yellow-700/60 mt-4 rounded-full'>Ingresar</button>
      </form>
    </div>);
}
