import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider, TooltipProvider, Toaster } from "@rocketmind/ui";

export const metadata: Metadata = {
  title: "План работ — Rocketmind",
  description: "Диаграмма Ганта плана работ по проекту Rocketmind MVP 1.1",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru" suppressHydrationWarning>
      <body className="antialiased">
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem={false}
          disableTransitionOnChange
        >
          <TooltipProvider>
            {children}
          </TooltipProvider>
          <Toaster position="bottom-center" />
        </ThemeProvider>
      </body>
    </html>
  );
}
