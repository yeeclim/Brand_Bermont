import { getTranslations } from "next-intl/server";
import { Link } from "@/i18n/navigation";

type Product = {
  slug: string;
  name: string;
  priceKRW: number;
  visualNum: string;
  tag: string | null;
  specs: string[];
};

export default async function ProductCard({ product }: { product: Product }) {
  const t = await getTranslations();
  const price = new Intl.NumberFormat("ko-KR").format(product.priceKRW);

  return (
    <article className="group overflow-hidden rounded-brand border border-line bg-surface transition-all hover:-translate-y-1 hover:border-[#3a3a3e]">
      <div className="relative flex aspect-[4/4.6] items-center justify-center overflow-hidden bg-[linear-gradient(180deg,#121214,#0D0D0F)]">
        <div
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse 90% 60% at 50% 110%, var(--accent-dim), transparent 60%)",
          }}
        />
        {product.tag && (
          <span className="absolute left-3.5 top-3.5 rounded-[5px] bg-accent px-2.5 py-1 font-mono text-[10.5px] font-medium tracking-[0.08em] text-bg">
            {t(product.tag)}
          </span>
        )}
        <span className="brand-card-num relative">{product.visualNum}</span>
      </div>
      <div className="border-t border-line p-4.5 pb-5">
        <div className="text-[15px] font-semibold">{product.name}</div>
        <div className="mt-2.5 flex flex-wrap gap-1.5">
          {product.specs.map((spec) => (
            <span
              key={spec}
              className="rounded-[5px] border border-line px-2 py-0.5 font-mono text-[10.5px] text-muted"
            >
              {spec}
            </span>
          ))}
        </div>
        <div className="mt-3.5 flex items-center justify-between">
          <span className="font-mono text-sm text-text">₩{price}</span>
          <Link href={`/apparel/${product.slug}`} className="font-mono text-xs text-accent">
            {t("card_cta")}
          </Link>
        </div>
      </div>
    </article>
  );
}
