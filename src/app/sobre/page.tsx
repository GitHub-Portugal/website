import { ArrowLeftIcon, MarkGithubIcon } from "@primer/octicons-react";
import { Metadata } from "next";
import Link from "next/link";
import { RiDiscordFill } from "react-icons/ri";
import AboutContent from "./about.mdx";

export const metadata: Metadata = {
  title: "Sobre",
};

const buttonClassName =
  "flex w-fit items-center justify-center rounded p-2 hover:bg-light-gray-1 focus:bg-light-gray-1 active:bg-light-gray-2 md:p-3";
const iconClassName = "h-5 w-5 fill-light-black md:h-6 md:w-6";

export default function About() {
  return (
    <main className="m-auto max-w-lg p-4 pb-8 sm:max-w-xl sm:px-6 md:max-w-2xl lg:max-w-3xl xl:max-w-4xl 2xl:max-w-5xl">
      <nav className="mb-2 sm:mb-3 md:mb-4">
        <Link href="/" className={buttonClassName}>
          <ArrowLeftIcon verticalAlign="middle" className={iconClassName} />
          <span className="sr-only">Retornar à página principal</span>
        </Link>
      </nav>

      <header className="mb-4 flex flex-wrap items-center justify-between gap-1 sm:mb-5 sm:gap-2 md:mb-6">
        <h1 className="text-3xl font-black sm:text-4xl md:text-5xl">
          GitHub Portugal
        </h1>

        <ul className="flex items-center justify-center gap-2">
          <li>
            <a
              href="https://discord.gg/HQJttJmbvm"
              target="_blank"
              rel="noopener noreferrer"
              className={buttonClassName}
            >
              <RiDiscordFill className={iconClassName} />
              <span className="sr-only">Juntar-se à comunidade no Discord</span>
            </a>
          </li>
          <li>
            <a
              href="https://github.com/GitHub-Portugal/website"
              target="_blank"
              rel="noopener noreferrer"
              className={buttonClassName}
            >
              <MarkGithubIcon
                verticalAlign="middle"
                className={iconClassName}
              />
              <span className="sr-only">Abrir repositório no GitHub</span>
            </a>
          </li>
        </ul>
      </header>

      <section className="space-y-3 sm:space-y-4">
        <AboutContent />
      </section>
    </main>
  );
}
