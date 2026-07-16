import { getTranslations } from "next-intl/server";
import Reveal from "./Reveal";

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
        <Reveal
          className="brand-hangtag relative w-full max-w-[440px] justify-self-start rounded-2xl border border-line bg-[#101012] p-7.5 shadow-[0_30px_80px_rgba(0,0,0,0.5)] md:justify-self-end"
        >
          <div
            role="figure"
            aria-label="Fabric spec sheet"
          >
            <div className="mt-3.5 border-b border-dashed border-line pb-4 font-mono text-[11px] tracking-[0.12em] text-accent">
              BERMONT FABRIC SPEC — HM-320
            </div>
            <div className="flex items-baseline justify-between border-b border-dashed border-line py-3.5 font-mono text-[13px]">
              <span className="text-[11.5px] tracking-[0.06em] text-muted">{t("sp_weight")}</span>
              <span className="text-text">
                <em className="not-italic text-accent">320</em> g/m²
              </span>
            </div>
            <div className="flex items-baseline justify-between border-b border-dashed border-line py-3.5 font-mono text-[13px]">
              <span className="text-[11.5px] tracking-[0.06em] text-muted">{t("sp_comp")}</span>
              <span className="text-text">POLY 88 / SPAN 12</span>
            </div>
            <div className="flex items-baseline justify-between border-b border-dashed border-line py-3.5 font-mono text-[13px]">
              <span className="text-[11.5px] tracking-[0.06em] text-muted">{t("sp_shrink")}</span>
              <span className="text-text">
                &lt; <em className="not-italic text-accent">1.5</em>%
              </span>
            </div>
            <div className="flex items-baseline justify-between border-b border-dashed border-line py-3.5 font-mono text-[13px]">
              <span className="text-[11.5px] tracking-[0.06em] text-muted">{t("sp_finish")}</span>
              <span className="text-text">GLOW THREAD RIB</span>
            </div>
            <div className="mt-4.5">
              <span className="flex justify-between font-mono text-[11px] tracking-[0.06em] text-muted">
                <span>{t("sp_dur")}</span>
                <span>86/100</span>
              </span>
              <div className="brand-meter mt-2 h-[5px] overflow-hidden rounded-full bg-line">
                <i style={{ width: "86%" }} />
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
