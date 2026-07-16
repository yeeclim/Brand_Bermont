import { getTranslations } from "next-intl/server";

type HangTagSpecProps = {
  code: string;
  weight: number;
  composition: string;
  shrinkage: number;
  finish: string;
  durability: number;
  className?: string;
};

export default async function HangTagSpec({
  code,
  weight,
  composition,
  shrinkage,
  finish,
  durability,
  className = "",
}: HangTagSpecProps) {
  const t = await getTranslations();

  return (
    <div
      role="figure"
      aria-label="Fabric spec sheet"
      className={`brand-hangtag relative rounded-2xl border border-line bg-[#101012] p-7.5 shadow-[0_30px_80px_rgba(0,0,0,0.5)] ${className}`}
    >
      <div className="mt-3.5 border-b border-dashed border-line pb-4 font-mono text-[11px] tracking-[0.12em] text-accent">
        BERMONT FABRIC SPEC — {code}
      </div>
      <div className="flex items-baseline justify-between border-b border-dashed border-line py-3.5 font-mono text-[13px]">
        <span className="text-[11.5px] tracking-[0.06em] text-muted">{t("sp_weight")}</span>
        <span className="text-text">
          <em className="not-italic text-accent">{weight}</em> g/m²
        </span>
      </div>
      <div className="flex items-baseline justify-between border-b border-dashed border-line py-3.5 font-mono text-[13px]">
        <span className="text-[11.5px] tracking-[0.06em] text-muted">{t("sp_comp")}</span>
        <span className="text-text">{composition}</span>
      </div>
      <div className="flex items-baseline justify-between border-b border-dashed border-line py-3.5 font-mono text-[13px]">
        <span className="text-[11.5px] tracking-[0.06em] text-muted">{t("sp_shrink")}</span>
        <span className="text-text">
          &lt; <em className="not-italic text-accent">{shrinkage}</em>%
        </span>
      </div>
      <div className="flex items-baseline justify-between border-b border-dashed border-line py-3.5 font-mono text-[13px]">
        <span className="text-[11.5px] tracking-[0.06em] text-muted">{t("sp_finish")}</span>
        <span className="text-text">{finish}</span>
      </div>
      <div className="mt-4.5">
        <span className="flex justify-between font-mono text-[11px] tracking-[0.06em] text-muted">
          <span>{t("sp_dur")}</span>
          <span>{durability}/100</span>
        </span>
        <div className="brand-meter mt-2 h-[5px] overflow-hidden rounded-full bg-line">
          <i style={{ width: `${durability}%` }} />
        </div>
      </div>
    </div>
  );
}
