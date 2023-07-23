import { ArrowLeftIcon, MarkGithubIcon } from "@primer/octicons-react";
import { Metadata } from "next";
import Link from "next/link";
import { RiDiscordFill } from "react-icons/ri";

export const metadata: Metadata = {
  title: "Sobre",
};

export default function About() {
  return (
    <div className="flex justify-center">
      <main className="max-w-lg p-4 sm:max-w-xl sm:px-6 md:max-w-2xl lg:max-w-3xl xl:max-w-4xl 2xl:max-w-5xl [&_p]:sm:text-lg">
        <nav className="mb-2 sm:mb-3 md:mb-4">
          <Link
            href="/"
            className="flex w-fit items-center justify-center rounded p-2 hover:bg-light-gray-1 focus:bg-light-gray-1 active:bg-light-gray-2 md:p-3"
          >
            <ArrowLeftIcon
              verticalAlign="middle"
              className="h-5 w-5 fill-light-black md:h-6 md:w-6"
            />
          </Link>
        </nav>

        <header className="mb-4 flex flex-wrap items-center justify-between gap-1 sm:mb-5 sm:gap-2 md:mb-6">
          <h1 className="text-3xl font-black sm:text-4xl md:text-5xl">
            GitHub Portugal
          </h1>

          <ul className="flex items-center justify-center gap-2">
            <li>
              <a
                href="https://discord.gg/rzAB2xtzBc"
                target="_blank"
                rel="noopener noreferrer"
                className="flex w-fit items-center justify-center rounded p-2 hover:bg-light-gray-1 focus:bg-light-gray-1 active:bg-light-gray-2 md:p-3"
              >
                <RiDiscordFill className="h-5 w-5 fill-light-black md:h-6 md:w-6" />
              </a>
            </li>
            <li>
              <a
                href="https://github.com/mmroch4/githubportugal"
                target="_blank"
                rel="noopener noreferrer"
                className="flex w-fit items-center justify-center rounded p-2 hover:bg-light-gray-1 focus:bg-light-gray-1 active:bg-light-gray-2 md:p-3"
              >
                <MarkGithubIcon
                  verticalAlign="middle"
                  className="h-5 w-5 fill-light-black md:h-6 md:w-6"
                />
              </a>
            </li>
          </ul>
        </header>

        <section className="space-y-3 sm:space-y-4">
          <h2 className="border-b border-b-light-gray-2 pb-2 text-xl font-extrabold sm:text-2xl md:text-3xl">
            Sobre
          </h2>

          <p>
            GitHub Portugal é uma{" "}
            <strong>comunidade portuguesa de desenvolvimento</strong> e de{" "}
            <strong>projetos open-source</strong> no{" "}
            <a
              href="http://github.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="font-bold hover:underline focus:underline"
            >
              GitHub
            </a>
            .
          </p>

          <p>
            O website GitHub Portugal{" "}
            <span className="font-black uppercase">não</span> é <b>oficial</b>{" "}
            do{" "}
            <a
              href="http://github.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline focus:underline"
            >
              GitHub
            </a>{" "}
            e <span className="font-black uppercase">não</span> possui{" "}
            <b>fins lucrativos</b>.
          </p>

          <p>
            O objetivo do GitHub Portugal é{" "}
            <strong>
              promover a comunidade de desenvolvedores em Portugal
            </strong>
            , país onde a área de TI (Tecnologia da Informação) está em
            constante crescimento.
          </p>

          <p>
            O website GitHub Portugal foi inspirado no website{" "}
            <a
              href="http://githubbrasil.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="font-bold hover:underline focus:underline"
            >
              GitHub Brasil
            </a>
            , do{" "}
            <a
              href="http://github.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline focus:underline"
            >
              GitHub
            </a>
            .
          </p>

          <p>
            Todas os recursos da empresa{" "}
            <a
              href="http://github.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="font-bold hover:underline focus:underline"
            >
              GitHub
            </a>{" "}
            utilizados neste projeto{" "}
            <span className="font-black uppercase">não</span> tem o intuito de
            se apropriar da marca e sim, construir uma comunidade em benefício
            daqueles que utilizam a plataforma{" "}
            <a
              href="http://github.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline focus:underline"
            >
              GitHub
            </a>
            .
          </p>

          <p>
            Todos os recursos estão{" "}
            <b>devidamente identificados e referenciados</b> os respectivos
            proprietários dos direitos.
          </p>
        </section>
      </main>
    </div>
  );
}
