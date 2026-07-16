import type { Metadata } from "next";
import { hasLocale } from "next-intl";
import { notFound } from "next/navigation";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { routing } from "@/i18n/routing";
import { Link } from "@/i18n/navigation";
import Reveal from "@/components/Reveal";
import HangTagSpec from "@/components/HangTagSpec";
import productsData from "@/data/products.json";

type FabricSpec = {
  code: string;
  weight: number;
  composition: string;
  shrinkage: number;
  finish: string;
  durability: number;
};

type Product = {
  slug: string;
  name: string;
  priceKRW: number;
  visualNum: string;
  tag: string | null;
  specs: string[];
  fabricSpec?: FabricSpec;
};

const products = productsData as Product[];

export function generateStaticParams() {
  return routing.locales.flatMap((locale) =>
    products.map((product) => ({ locale, slug: product.slug }))
  );
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}): Promise<Metadata> {
  const { locale, slug } = await params;
  const product = products.find((p) => p.slug === slug);
  if (!product) return {};
  const t = await getTranslations({ locale });
  return {
    title: `${product.name} — BERMONT`,
    description: t("hero_sub"),
  };
}

export default async function ProductDetailPage({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}) {
  const { locale, slug } = await params;
  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }
  setRequestLocale(locale);

  const product = products.find((p) => p.slug === slug);
  if (!product) {
    notFound();
  }

  const t = await getTranslations();
  const price = new Intl.NumberFormat("ko-KR").format(product.priceKRW);

  return (
    <div className="pt-16">
      <div className="mx-auto max-w-[1240px] px-5 py-[clamp(48px,7vh,88px)] sm:px-8">
        <Link
          href="/#drop"
          className="mb-8 inline-flex items-center gap-2 font-mono text-xs tracking-[0.08em] text-muted transition-colors hover:text-accent"
        >
          ← {t("pdp_back")}
        </Link>

        <div className="grid grid-cols-1 gap-10 md:grid-cols-2 md:gap-14 lg:gap-[72px]">
          <Reveal className="relative flex aspect-[4/4.6] items-center justify-center overflow-hidden rounded-brand border border-line bg-[linear-gradient(180deg,#121214,#0D0D0F)]">
            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-0"
              style={{
                background:
                  "radial-gradient(ellipse 90% 60% at 50% 110%, var(--accent-dim), transparent 60%)",
              }}
            />
            {product.tag && (
              <span className="absolute left-4 top-4 rounded-[5px] bg-accent px-2.5 py-1 font-mono text-[10.5px] font-medium tracking-[0.08em] text-bg">
                {t(product.tag)}
              </span>
            )}
            <span
              aria-hidden="true"
              className="relative font-display text-[clamp(140px,22vw,220px)] font-black leading-none [-webkit-text-stroke:1.5px_#2c2c30] [font-stretch:62%] text-transparent"
            >
              {product.visualNum}
            </span>
            <span className="absolute bottom-4 right-4 font-mono text-[10px] tracking-[0.1em] text-muted">
              {t("pdp_photo_pending")}
            </span>
          </Reveal>

          <Reveal>
            <h1 className="font-display text-[clamp(28px,3.4vw,44px)] font-black uppercase leading-[1.02] tracking-[-0.01em]">
              {product.name}
            </h1>
            <div className="mt-4 font-mono text-2xl text-text">₩{price}</div>

            <div className="mt-5 flex flex-wrap gap-1.5">
              {product.specs.map((spec) => (
                <span
                  key={spec}
                  className="rounded-[5px] border border-line px-2.5 py-1 font-mono text-[11px] text-muted"
                >
                  {spec}
                </span>
              ))}
            </div>

            <div className="mt-6 font-mono text-xs tracking-[0.08em] text-accent">
              FIT / OVER
            </div>

            <button
              type="button"
              className="mt-8 inline-flex items-center gap-2.5 rounded-brand border border-accent bg-accent px-7 py-4 font-mono text-[13px] font-medium tracking-[0.06em] text-bg transition-all hover:-translate-y-0.5 hover:shadow-[0_0_32px_rgba(198,243,58,0.35)]"
            >
              {t("pdp_add_to_cart")}
            </button>
          </Reveal>
        </div>

        {product.fabricSpec && (
          <Reveal className="mt-16 max-w-[440px] sm:mt-20">
            <HangTagSpec
              code={product.fabricSpec.code}
              weight={product.fabricSpec.weight}
              composition={product.fabricSpec.composition}
              shrinkage={product.fabricSpec.shrinkage}
              finish={product.fabricSpec.finish}
              durability={product.fabricSpec.durability}
            />
          </Reveal>
        )}
      </div>
    </div>
  );
}
