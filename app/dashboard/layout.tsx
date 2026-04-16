"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import SidebarMenu from "@/components/SidebarMenu";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    const session = localStorage.getItem("session");

    if (!session) {
      router.replace("/");
      return;
    }

    setLoading(false);
  }, []);

  if (loading) return null;

  return (
    <div className="min-h-screen">
      <SidebarMenu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />

      <main className="lg:pl-72">
        {children}
      </main>
    </div>
  );
}