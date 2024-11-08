// components/SessionProviderWrapper.tsx
"use client"; // Menandakan ini adalah komponen klien

import { SessionProvider } from "next-auth/react";

export default function SessionProviderWrapper({ children ,session}) {
  return <SessionProvider session={session}>{children}</SessionProvider>;
}
