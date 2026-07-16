import { getTranslations } from "next-intl/server";
import Reveal from "./Reveal";

const FITS = [
  { code: "FIT / RELAXED", h: "fit1_h", p: "fit1_p" },
  { code: "FIT / OVER", h: "fit2_h", p: "fit2_p" },
  { code: "FIT / HEAVY", h: "fit3_h", p: "fit3_p" },
] as const;

export default async function FitSystem() {
  const t = await getTranslations();

  return (
    <section id="fit" className="py-[clamp(72px,11vh,130px)]">
      <div className="mx-auto max-w-[1240px] px-5 sm:px-8">
        <Reveal className="mb-10 sm:mb-14">
          <div className="mb-3 font-mono text-xs tracking-[0.14em] text-accent">
            FIT SYSTEM
          </div>
          <h2 className="font-display text-[clamp(32px,4.6vw,58px)] font-black uppercase leading-none tracking-[-0.01em]">
            {t("fit_title")}
          </h2>
        </Reveal>
        <div className="grid grid-cols-1 gap-5.5 md:grid-cols-3">
          {FITS.map((fit) => (
            <Reveal
              key={fit.code}
              className="rounded-brand border border-line bg-[linear-gradient(180deg,var(--surface),transparent)] p-7"
            >
              <div className="font-mono text-xs tracking-[0.1em] text-accent">
                {fit.code}
              </div>
              <h3 className="mt-3.5 mb-2.5 font-display text-xl font-extrabold uppercase tracking-[0.01em]">
                {t(fit.h)}
              </h3>
              <p className="text-[14.5px] text-muted">{t(fit.p)}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
