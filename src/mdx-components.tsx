import type { MDXComponents } from "mdx/types";

import CodeBlock from "@/components/code-block";

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    ...components,
    h1: ({ children }) => (
      <h1 className="mb-8 text-4xl leading-tight font-extrabold text-white md:text-5xl">
        {children}
      </h1>
    ),
    h2: ({ children }) => (
      <h2 className="text-ft-primary border-ft-surface-variant mt-12 mb-6 border-b pb-2 text-2xl font-bold">
        {children}
      </h2>
    ),
    h3: ({ children }) => (
      <h3 className="mt-8 mb-4 text-xl font-bold text-white">{children}</h3>
    ),

    h4: ({ children }) => (
      <h4 className="mt-6 mb-3 text-lg font-semibold text-white">{children}</h4>
    ),
    p: ({ children }) => (
      <p className="text-ft-text-secondary mb-6 text-base leading-relaxed">
        {children}
      </p>
    ),

    ul: ({ children }) => (
      <ul className="text-ft-text-secondary mb-6 ml-6 list-outside list-disc space-y-2 text-base">
        {children}
      </ul>
    ),
    ol: ({ children }) => (
      <ol className="text-ft-text-secondary mb-6 ml-6 list-outside list-decimal space-y-2 text-base">
        {children}
      </ol>
    ),

    li: ({ children }) => <li className="pl-1 leading-relaxed">{children}</li>,
    strong: ({ children }) => (
      <strong className="font-bold text-white">{children}</strong>
    ),
    a: ({ href, children }) => (
      <a
        href={href}
        className="text-ft-primary underline-offset-4 hover:underline"
      >
        {children}
      </a>
    ),
    blockquote: ({ children }) => (
      <blockquote className="border-ft-warning bg-ft-surface text-ft-text-secondary my-6 rounded-r-lg border-l-4 p-4 italic">
        {children}
      </blockquote>
    ),

    code: ({ children }) => (
      <code className="text-ft-primary font-mono text-[0.9em]">{children}</code>
    ),

    pre: ({ children, ...props }) => (
      <CodeBlock {...props}>{children}</CodeBlock>
    ),
  };
}
