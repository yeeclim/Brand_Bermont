"use client";

import { useState } from "react";

export default function NewsletterForm({
  placeholder,
  cta,
}: {
  placeholder: string;
  cta: string;
}) {
  const [submitted, setSubmitted] = useState(false);

  return (
    <form
      className="mx-auto mt-8 flex max-w-[460px] flex-col gap-2.5 sm:flex-row"
      onSubmit={(e) => {
        e.preventDefault();
        setSubmitted(true);
      }}
    >
      <input
        type="email"
        required
        placeholder={placeholder}
        aria-label="Email"
        className="flex-1 rounded-brand border border-line bg-surface px-4.5 py-4 font-mono text-[13px] text-text placeholder:text-muted focus:border-accent focus:outline-none"
      />
      <button
        type="submit"
        className="whitespace-nowrap rounded-brand border border-accent bg-accent px-7 py-4 font-mono text-[13px] font-medium tracking-[0.06em] text-bg transition-all hover:-translate-y-0.5 hover:shadow-[0_0_32px_rgba(198,243,58,0.35)]"
      >
        {submitted ? "✓" : cta}
      </button>
    </form>
  );
}
