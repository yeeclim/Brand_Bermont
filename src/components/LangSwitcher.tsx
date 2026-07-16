"use client";

import { useLocale } from "next-intl";
import { usePathname, useRouter } from "@/i18n/navigation";
import { routing } from "@/i18n/routing";

const LABELS: Record<string, string> = {
  ko: "KO",
  en: "EN",
  ru: "RU",
  es: "ES",
  ja: "JA",
};

export default function LangSwitcher() {
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();

  return (
    <div className="flex gap-0.5 rounded-lg border border-line bg-surface p-[3px]" role="group" aria-label="Language">
      {routing.locales.map((code) => (
        <button
          key={code}
          type="button"
          onClick={() => router.replace(pathname, { locale: code })}
          className={`rounded-[5px] px-2 py-1.5 font-mono text-[11px] tracking-[0.04em] transition-colors ${
            code === locale
              ? "bg-accent font-medium text-bg"
              : "text-muted hover:text-text"
          }`}
          aria-pressed={code === locale}
        >
          {LABELS[code]}
        </button>
      ))}
    </div>
  );
}
