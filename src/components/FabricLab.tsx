import { getTranslations } from "next-intl/server";
import Reveal from "./Reveal";
import HangTagSpec from "./HangTagSpec";

export default async function FabricLab() {
  const t = await getTranslations();

  return (
    <section
      id="lab"
      className="border-y border-line bg-surface py-[clamp(72px,11vh,130px)]"
    >
      <div className="mx-auto grid max-w-[1240px] grid-cols-1 items-center gap-8 px-5 sm:px-8 md:grid-cols-2 md:gap-14 lg:gap-[72px]">
        <Reveal>
          <div className="mb-3 font-mono text-xs tracking-[0.14em] text-accent">
            FABRIC LAB
          </div>
          <h2
            className="font-display text-[clamp(32px,4.6vw,58px)] font-black uppercase leading-none tracking-[-0.01em]"
            dangerouslySetInnerHTML={{ __html: t.raw("lab_title") }}
          />
          <p className="mt-4.5 max-w-[460px] text-muted">{t("lab_sub")}</p>
          <div className="mt-7.5">
            <a
              href="#"
              className="inline-flex items-center gap-2.5 rounded-brand border border-line px-7 py-4 font-mono text-[13px] tracking-[0.06em] text-text transition-colors hover:border-accent hover:text-accent"
            >
              {t("lab_cta")}
            </a>
          </div>
        </Reveal>
        <Reveal className="w-full max-w-[440px] justify-self-start md:justify-self-end">
          <HangTagSpec
            code="HM-320"
            weight={320}
            composition="POLY 88 / SPAN 12"
            shrinkage={1.5}
            finish="GLOW THREAD RIB"
            durability={86}
          />
        </Reveal>
      </div>
    </section>
  );
}
