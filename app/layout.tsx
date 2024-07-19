import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Valorant",
  description: "This website replicate the agent collection screen from the popular game Valorant. It includes a slider effect and pagination to navigate through a list of agents.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="overflow-hidden w-screen h-screen">
        {children}
      </body>
    </html>
  );
}
