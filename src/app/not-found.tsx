import { ChevronRightIcon } from "@primer/octicons-react";
import Link from "next/link";

export default function NotFound() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-light-gray-0 px-6 py-4 text-light-black">
      <h1 className="mb-2 text-center text-5xl font-black sm:mb-3 sm:text-6xl md:mb-4 md:text-7xl lg:text-8xl">
        404
      </h1>

      <p className="mb-4 max-w-sm text-center text-lg sm:mb-5 sm:max-w-md sm:text-xl md:mb-6 md:max-w-lg md:text-2xl lg:max-w-xl">
        Oops... parece que esta página não existe 🤔
      </p>

      <Link
        href="/"
        className="group flex items-center justify-center gap-2 rounded bg-light-gray-9 px-6 py-3 text-sm font-bold text-white sm:text-base md:text-lg"
      >
        Voltar à página principal
        <ChevronRightIcon className="fill-white delay-75 duration-100 ease-in-out group-hover:translate-x-0.5" />
      </Link>
    </main>
  );
}
