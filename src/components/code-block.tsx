"use client";

import { useState, useRef, ReactNode } from "react";

export default function CodeBlock({
  children,
  ...props
}: {
  children: ReactNode;
}) {
  const [copied, setCopied] = useState(false);
  const textRef = useRef<HTMLPreElement>(null);

  const handleCopy = () => {
    if (textRef.current) {
      const text = textRef.current.innerText;
      navigator.clipboard.writeText(text);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  return (
    <div className="group relative my-6">
      <div className="absolute top-3 right-3 z-10 flex items-center justify-center rounded bg-white/10 opacity-0 backdrop-blur-sm transition-opacity group-hover:opacity-100">
        <button
          onClick={handleCopy}
          className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-gray-300 transition-colors hover:text-white"
        >
          {copied ? (
            <>
              <svg
                width="14"
                height="14"
                fill="currentColor"
                viewBox="0 0 16 16"
              >
                <path d="M10.97 4.97a.75.75 0 0 1 1.07 1.05l-3.99 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.267.267 0 0 1 .02-.022z" />
              </svg>
              <span>Copied</span>
            </>
          ) : (
            <>
              <svg
                width="14"
                height="14"
                fill="currentColor"
                viewBox="0 0 16 16"
              >
                <path d="M4 1.5H3a2 2 0 0 0-2 2V14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V3.5a2 2 0 0 0-2-2h-1v1h1a1 1 0 0 1 1 1V14a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V3.5a1 1 0 0 1 1-1h1v-1z" />
                <path d="M9.5 1h-3a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h3a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5z" />
              </svg>
              <span>Copy</span>
            </>
          )}
        </button>
      </div>

      <pre
        ref={textRef}
        className="overflow-x-auto rounded-xl border border-white/5 bg-[#16161a] p-4 font-mono text-sm text-gray-300 shadow-lg"
        {...props}
      >
        {children}
      </pre>
    </div>
  );
}
