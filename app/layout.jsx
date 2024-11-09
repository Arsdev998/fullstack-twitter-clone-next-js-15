import localFont from "next/font/local";
import "./globals.css";
import QueryProvider from "../providers/queryProvider";
import SessionProviderWrapper from "../providers/sessionProvider";
import { getServerSession } from "next-auth";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata = {
  title: "X Clone",
  description: "Created by Arsdev",
};

export default function RootLayout({ children }) {

  const session =  getServerSession();
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <SessionProviderWrapper session={session}>
          <QueryProvider>{children}</QueryProvider>
        </SessionProviderWrapper>
      </body>
    </html>
  );
}
