import { hasLocale } from "next-intl";
import { notFound } from "next/navigation";
import { setRequestLocale } from "next-intl/server";
import { routing } from "@/i18n/routing";
import Hero from "@/components/Hero";
import Ticker from "@/components/Ticker";
import DropGrid from "@/components/DropGrid";
import FabricLab from "@/components/FabricLab";
import FitSystem from "@/components/FitSystem";
import Newsletter from "@/components/Newsletter";

export default async function HomePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }
  setRequestLocale(locale);

  return (
    <>
      <Hero />
      <Ticker />
      <DropGrid />
      <FabricLab />
      <FitSystem />
      <Newsletter />
    </>
  );
}
