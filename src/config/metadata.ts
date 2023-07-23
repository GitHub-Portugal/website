import type { Metadata } from "next";

export const metadata: Metadata = {
  applicationName: "GitHub Portugal",
  title: {
    default: "GitHub Portugal",
    template: "%s | GitHub Portugal",
  },
  description:
    "Comunidade portuguesa de desenvolvedores e projetos open-source no GitHub.",
  authors: [{ name: "Miguel Rocha", url: "https://github.com/mmroch4" }],
  creator: "Miguel Rocha",
  generator: "Next.js 13",
  keywords: [
    "Comunidade",
    "Projetos open-source",
    "open-source",
    "Desenvolvimento",
    "Desenvolvedores",
    "Portugal",
    "Repositórios GitHub",
    "GitHub Portugal",
  ],
  category: "Tecnologia",
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#1a1e23" },
    { media: "(prefers-color-scheme: dark)", color: "#0d1117" },
  ],
};
