import { ArrowRightIcon } from "@primer/octicons-react";
import Link from "next/link";

export function NonOfficialWarning() {
  return (
    <div className="border-b border-b-light-yellow-1 bg-light-yellow-0 px-6 py-4 text-center text-light-yellow-9">
      Este projeto <span className="font-bold uppercase">não</span> é oficial do{" "}
      <a
        href="http://github.com"
        target="_blank"
        rel="noopener noreferrer"
        className="font-bold hover:underline"
      >
        GitHub!
      </a>{" "}
      <Link
        href="/sobre"
        className="group inline-flex items-center font-medium"
      >
        Saiba mais
        <ArrowRightIcon
          className="ml-1 w-3 fill-light-yellow-9 delay-75 duration-100 ease-in-out group-hover:translate-x-0.5"
          verticalAlign="middle"
        />
      </Link>
    </div>
  );
}
