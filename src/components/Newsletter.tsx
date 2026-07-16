import { getTranslations } from "next-intl/server";
import Reveal from "./Reveal";
import NewsletterForm from "./NewsletterForm";

export default async function Newsletter() {
  const t = await getTranslations();

  return (
    <section className="py-[clamp(72px,11vh,130px)] text-center">
      <Reveal className="mx-auto max-w-[1240px] px-5 sm:px-8">
        <div className="mb-3 font-mono text-xs tracking-[0.14em] text-accent">
          DROP ALERT
        </div>
        <h2 className="mb-4 font-display text-[clamp(32px,4.6vw,58px)] font-black uppercase leading-none tracking-[-0.01em]">
          {t("news_title")}
        </h2>
        <p className="mx-auto max-w-[440px] text-muted">{t("news_sub")}</p>
        <NewsletterForm placeholder={t("news_ph")} cta={t("news_cta")} />
      </Reveal>
    </section>
  );
}
