import { getTranslations } from "next-intl/server";
import LangSwitcher from "./LangSwitcher";

export default async function Header() {
  const t = await getTranslations();

  return (
    <header className="fixed inset-x-0 top-0 z-[100] border-b border-line bg-bg/78 backdrop-blur-[14px]">
      <div className="mx-auto flex h-16 max-w-[1240px] items-center justify-between px-5 sm:px-8">
        <a href="#" className="font-display text-[20px] font-black tracking-[0.06em]">
          BERM<span className="text-accent">O</span>NT
        </a>
        <nav className="hidden gap-4 text-[13.5px] font-medium text-muted sm:flex sm:gap-6 md:gap-9">
          <a href="#drop" className="transition-colors hover:text-text">
            {t("nav_shop")}
          </a>
          <a href="#lab" className="transition-colors hover:text-text">
            {t("nav_lab")}
          </a>
          <a href="#fit" className="transition-colors hover:text-text">
            {t("nav_fit")}
          </a>
          <a href="#" className="transition-colors hover:text-text">
            {t("nav_journal")}
          </a>
        </nav>
        <div className="flex items-center gap-3.5">
          <LangSwitcher />
          <button
            type="button"
            className="hidden rounded-lg border border-line px-3 py-2 font-mono text-xs text-muted transition-colors hover:border-accent hover:text-accent sm:block"
          >
            {t("cart")}
          </button>
        </div>
      </div>
    </header>
  );
}
