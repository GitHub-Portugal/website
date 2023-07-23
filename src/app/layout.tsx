import { NonOfficialWarning } from "@/components/NonOfficialWarning";
import { monaSans } from "@/config/fonts";
import { metadata as m } from "@/config/metadata";
import clsx from "clsx";
import "./globals.css";

export const metadata = { ...m };

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR" className="scroll-smooth">
      <body
        className={clsx(
          monaSans.className,
          "grid min-h-screen grid-cols-1 grid-rows-layout bg-light-gray-0 text-light-black"
        )}
      >
        <NonOfficialWarning />

        {children}
      </body>
    </html>
  );
}
