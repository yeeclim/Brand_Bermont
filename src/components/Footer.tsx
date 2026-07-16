import { getTranslations } from "next-intl/server";

export default async function Footer() {
  const t = await getTranslations();

  return (
    <footer className="border-t border-line py-11 text-[13px] text-muted">
      <div className="mx-auto flex max-w-[1240px] flex-wrap items-center justify-between gap-6 px-5 sm:px-8">
        <span className="font-display text-base font-black tracking-[0.06em] text-text">
          BERM<span className="text-accent">O</span>NT
        </span>
        <nav className="flex gap-5.5">
          <a href="#" className="transition-colors hover:text-text">
            {t("f_terms")}
          </a>
          <a href="#" className="transition-colors hover:text-text">
            {t("f_privacy")}
          </a>
          <a href="#" className="transition-colors hover:text-text">
            {t("f_contact")}
          </a>
        </nav>
        <span className="font-mono text-[11.5px] tracking-[0.08em]">
          © 2026 BERMONT — SEOUL / INCHEON
        </span>
      </div>
    </footer>
  );
}
