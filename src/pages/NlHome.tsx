import SEOHead from "@/components/SEOHead";
import AffiliateLink from "@/components/AffiliateLink";
import StatCard from "@/components/StatCard";
import AuthorBox from "@/components/AuthorBox";
import FAQAccordion from "@/components/FAQAccordion";
import { Link } from "react-router-dom";

const faqItems = [
  {
    question: "Is Cloudways het waard voor kleine bedrijven?",
    answer: "Ja. Na 2 jaar op Cloudways laadt mijn site in 0.8 seconden, heeft 99.9% uptime, en kost $39/maand — dat bespaart me $181/maand vergeleken met mijn vorige host.",
  },
  {
    question: "Hoeveel kost Cloudways per maand?",
    answer: "Cloudways begint bij $12/maand voor een 1GB DigitalOcean server. Mijn setup draait op $39/maand op een 2GB DigitalOcean server.",
  },
  {
    question: "Heeft Cloudways gratis SSL en CDN?",
    answer: "Ja. Cloudways heeft gratis Let's Encrypt SSL-certificaten, Cloudflare Enterprise CDN-integratie (op hogere plannen), geautomatiseerde backups, en een ingebouwde caching stack.",
  },
  {
    question: "Wat gebeurt er na de Cloudways 3-daagse proefperiode?",
    answer: "Na de 3-daagse gratis proefperiode betaal je voor de server die je hebt gekozen. Geen creditcard nodig om te starten. Je kunt voor het einde annuleren zonder kosten.",
  },
];

const NlHome = () => {
  return (
    <>
      <SEOHead
        title="Cloudways Review 2025: Mijn Eerlijke Ervaring Na 2 Jaar | AI Hosting Advisor"
        description="Ik switchte 2 jaar geleden naar Cloudways en bespaar $181/maand terwijl mijn site 75% sneller is. Echte performance data, eerlijke voor- en nadelen."
        canonical="/nl"
        hreflangEn="https://aimanagedcloudhostingadvisor.online/"
        hreflangNl="https://aimanagedcloudhostingadvisor.online/nl/"
      />

      {/* Hero */}
      <section className="container mx-auto px-4 pt-16 pb-20 md:pt-24 md:pb-28">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="font-display text-4xl md:text-6xl font-bold text-foreground leading-tight">
            Cloudways Review 2025: <br className="hidden md:block" />
            <span className="text-accent">De Eerlijke Waarheid</span> Na 2 Jaar
          </h1>
          <p className="mt-6 text-lg md:text-xl text-muted-foreground font-body max-w-3xl mx-auto leading-relaxed">
            Ik switchte naar Cloudways en bespaar <strong className="text-foreground">$181/maand</strong> terwijl mijn site <strong className="text-foreground">75% sneller</strong> werd. Hier is alles wat ik heb geleerd.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <AffiliateLink placement="hero">
              Probeer Cloudways Gratis (3 Dagen, Geen Creditcard)
            </AffiliateLink>
          </div>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-6 text-sm text-muted-foreground font-body">
            <span>✓ Geen creditcard nodig</span>
            <span>✓ Dezelfde hosting als deze site</span>
            <span>✓ Altijd opzegbaar</span>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="container mx-auto px-4 pb-20">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 max-w-5xl mx-auto">
          <StatCard value="0.8s" label="Gemiddelde Laadtijd" />
          <StatCard value="99.9%" label="Uptime (12 maanden)" />
          <StatCard value="95+" label="Google PageSpeed Score" />
          <StatCard value="$39/mnd" label="Mijn Maandelijkse Kosten" />
        </div>
        <p className="text-center text-xs text-muted-foreground mt-4 font-body">
          Echte data van spineye.com op Cloudways DigitalOcean 2GB server
        </p>
      </section>

      {/* Personal Recommendation */}
      <section className="container mx-auto px-4 pb-20">
        <div className="max-w-3xl mx-auto bg-card rounded-xl border p-8 md:p-10">
          <AuthorBox variant="full" />
          <h2 className="font-display text-2xl font-bold mt-6 text-foreground">Waarom ik Cloudways persoonlijk aanbeveel</h2>
          <div className="mt-4 space-y-4 text-muted-foreground font-body leading-relaxed">
            <p>
              Twee jaar geleden betaalde ik $220/maand voor managed WordPress hosting met matige prestaties. Mijn site laadde in 3+ seconden, en ik had willekeurige downtimes die me verkeer en omzet kostten.
            </p>
            <p>
              Na de migratie naar Cloudways daalde mijn laadtijd naar <strong className="text-foreground">0.8 seconden</strong>, mijn uptime is al <strong className="text-foreground">99.9%</strong> voor 12 maanden op rij, en ik betaal <strong className="text-foreground">$39/maand</strong>.
            </p>
          </div>
          <div className="mt-6">
            <AffiliateLink placement="mid-article">
              Probeer Cloudways Gratis →
            </AffiliateLink>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="container mx-auto px-4 pb-20">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-display text-3xl font-bold text-center text-foreground mb-8">Veelgestelde Vragen</h2>
          <FAQAccordion items={faqItems} />
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="bg-accent py-16 md:py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-accent-foreground">Klaar om je site sneller te maken?</h2>
          <p className="mt-4 text-accent-foreground/80 font-body text-lg">Sluit je aan bij duizenden site-eigenaren die zijn overgestapt naar Cloudways</p>
          <div className="mt-8">
            <AffiliateLink placement="bottom" className="!bg-primary !text-primary-foreground !shadow-none">
              Probeer Cloudways Gratis
            </AffiliateLink>
          </div>
        </div>
      </section>
    </>
  );
};

export default NlHome;
