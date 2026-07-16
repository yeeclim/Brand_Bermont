import { getTranslations } from "next-intl/server";

export default async function Ticker() {
  const t = await getTranslations();
  const items = t.raw("ticker") as string[];
  const looped = [...items, ...items, ...items, ...items];

  return (
    <div
      className="overflow-hidden border-y border-line bg-surface"
      aria-hidden="true"
    >
      <div className="brand-ticker-track">
        {looped.map((item, i) => (
          <span
            key={i}
            className="whitespace-nowrap py-3.5 font-mono text-[12.5px] tracking-[0.1em] text-muted after:mx-7 after:text-line after:content-['//']"
            dangerouslySetInnerHTML={{ __html: item }}
          />
        ))}
      </div>
    </div>
  );
}
