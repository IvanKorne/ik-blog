import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import Header from "@/components/Header";
import { ThemeProvider } from "@/components/ThemeProvider";

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });

export const metadata: Metadata = {
  title: "IK Blog",
  description: "Ivan Korneychuk's personal blog page",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-pt-[3.5rem]">
      <ThemeProvider
        attribute="class"
        defaultTheme="system"
        enableSystem
        disableTransitionOnChange
      >
        <body
          className={cn(
            "min-h-screen bg-background font-sans antialiased",
            inter.variable
          )}
        >
          <div className="relative min-h-dvh flex flex-col bg-background">
            <Header />
            <main className="flex-1">{children}</main>
          </div>
        </body>
      </ThemeProvider>
    </html>
  );
}
