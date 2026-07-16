import { getTranslations } from "next-intl/server";
import Reveal from "./Reveal";
import ProductCard from "./ProductCard";
import products from "@/data/products.json";

export default async function DropGrid() {
  const t = await getTranslations();

  return (
    <section id="drop" className="py-[clamp(72px,11vh,130px)]">
      <div className="mx-auto max-w-[1240px] px-5 sm:px-8">
        <Reveal className="mb-10 flex flex-wrap items-end justify-between gap-6 sm:mb-14">
          <div>
            <div className="mb-3 font-mono text-xs tracking-[0.14em] text-accent">
              DROP 001 — SS26
            </div>
            <h2 className="font-display text-[clamp(32px,4.6vw,58px)] font-black uppercase leading-none tracking-[-0.01em]">
              {t("drop_title")}
            </h2>
          </div>
          <a href="#" className="whitespace-nowrap font-mono text-[13px] text-muted transition-colors hover:text-accent">
            {t("view_all")}
          </a>
        </Reveal>
        <div className="grid grid-cols-1 gap-5.5 sm:grid-cols-2 lg:grid-cols-3">
          {products.map((product) => (
            <ProductCard key={product.slug} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
}
