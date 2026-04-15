"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";

type InputProps = {
  label: string;
  id: string;
  name: string;
  type: string;
  required?: boolean;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

export function Input({ label, id, name, type, required, value, onChange }: InputProps) {
  return (
    <div className="flex flex-col gap-1.5">
      <label htmlFor={id} className="pl-0.5">
        {label}
      </label>
      <input className="px-4 py-2 bg-neutral-950/10 border border-foreground/10 rounded-xl" type={type} id={id} name={name} required={required} value={value} onChange={onChange} />
    </div>
  );
}

const USERS = [
  { user_id: 1, legajo: "55555", password: "admin" },
  { user_id: 2, legajo: "12345", password: "user" },
];

export default function StudentPortal() {
  const router = useRouter();

  const [legajo, setLegajo] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const user = USERS.find((u) => u.legajo === legajo.trim() && u.password === password.trim());

    if (!user) {
      alert("Credenciales incorrectas");
      return;
    }

    localStorage.setItem(
      "session",
      JSON.stringify({
        user_id: user.user_id,
        legajo: user.legajo,
      }),
    );

    router.push("/dashboard");
  };

  return (
    <div className="min-h-screen fondo flex items-center justify-center">
      <span className="absolute top-4 left-4 py-2 px-5 text-xl rounded-full bg-background/60 backdrop-blur-xs">UniversityDB</span>

      <form onSubmit={handleSubmit} className="flex flex-col items-stretch gap-3 bg-background border border-foreground/10 shadow-md shadow-black/70 w-full max-w-sm p-7 rounded-2xl">
        <h1 className="text-3xl pb-2">Iniciar Sesión</h1>

        <Input label="Legajo" id="studentcode" name="legajo" type="text" value={legajo} onChange={(e) => setLegajo(e.target.value)} required />

        <Input label="Contraseña" id="password" name="password" type="password" value={password} onChange={(e) => setPassword(e.target.value)} required />

        <button type="submit" className="w-fit self-end px-6 py-2 bg-yellow-700/60 mt-4 rounded-full">
          Ingresar
        </button>
      </form>
    </div>
  );
}
