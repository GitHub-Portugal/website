import type { MDXComponents } from "mdx/types";

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    h2: ({ children }) => (
      <h2 className="border-b border-b-light-gray-2 py-2 text-xl font-extrabold first:pt-0 sm:text-2xl md:text-3xl">
        {children}
      </h2>
    ),
    a: ({ children, href }) => (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="font-bold hover:underline focus:underline"
      >
        {children}
      </a>
    ),
    p: ({ children }) => <p className="text-base sm:text-lg">{children}</p>,
    ...components,
  };
}
