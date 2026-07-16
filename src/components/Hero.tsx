import { getTranslations } from "next-intl/server";

export default async function Hero() {
  const t = await getTranslations();

  return (
    <div className="relative flex min-h-[100svh] flex-col justify-end overflow-hidden pt-16">
      <div className="brand-hero-88" aria-hidden="true">
        88
        <span>88</span>
      </div>
      <div className="relative z-10 mx-auto w-full max-w-[1240px] px-5 pb-12 sm:px-8 sm:pb-16 md:pb-24">
        <div className="mb-5 flex items-center gap-2.5 font-mono text-xs tracking-[0.14em] text-accent before:h-px before:w-[34px] before:bg-accent before:content-['']">
          {t("hero_eyebrow")}
        </div>
        <h1 className="font-display text-[clamp(52px,9.5vw,138px)] font-black uppercase leading-[0.92] tracking-[-0.015em]">
          FABRIC
          <br />
          <span className="brand-hollow">FIRST</span>
        </h1>
        <p className="mt-6 max-w-[520px] text-[clamp(15px,1.6vw,18px)] text-muted">
          {t("hero_sub")}
        </p>
        <div className="mt-9 flex flex-wrap gap-3.5">
          <a
            href="#drop"
            className="inline-flex items-center gap-2.5 rounded-brand border border-accent bg-accent px-7 py-4 font-mono text-[13px] font-medium tracking-[0.06em] text-bg transition-all hover:-translate-y-0.5 hover:shadow-[0_0_32px_rgba(198,243,58,0.35)]"
          >
            {t("cta_shop")} →
          </a>
          <a
            href="#lab"
            className="inline-flex items-center gap-2.5 rounded-brand border border-line px-7 py-4 font-mono text-[13px] tracking-[0.06em] text-text transition-colors hover:border-accent hover:text-accent"
          >
            {t("cta_lab")}
          </a>
        </div>
      </div>
    </div>
  );
}
