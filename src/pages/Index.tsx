import SEOHead from "@/components/SEOHead";
import AffiliateLink from "@/components/AffiliateLink";
import StatCard from "@/components/StatCard";
import AuthorBox from "@/components/AuthorBox";
import ComparisonTable from "@/components/ComparisonTable";
import FAQAccordion from "@/components/FAQAccordion";
import { Link } from "react-router-dom";

const faqItems = [
  {
    question: "Is Cloudways worth it for small businesses?",
    answer: "Yes. After 2 years on Cloudways, my site loads in 0.8 seconds, maintains 99.9% uptime, and costs $39/month — saving me $181/month compared to my previous managed host. For small businesses that need reliability without DevOps complexity, Cloudways offers the best value in the market.",
  },
  {
    question: "How much does Cloudways cost per month?",
    answer: "Cloudways pricing starts at $12/month for a 1GB DigitalOcean server. My setup runs at $39/month on a 2GB DigitalOcean server, which handles multiple WordPress sites with ease.",
  },
  {
    question: "Does Cloudways include free SSL and CDN?",
    answer: "Yes. Cloudways includes free Let's Encrypt SSL certificates, Cloudflare Enterprise CDN integration (on higher plans), automated backups, and a built-in caching stack.",
  },
  {
    question: "What happens after the Cloudways 3-day free trial?",
    answer: "After the 3-day free trial, you are charged for the server you selected. No credit card is required to start the trial. You can cancel before the trial ends with no charges.",
  },
  {
    question: "Is Cloudways better than shared hosting?",
    answer: "For growing websites, yes — significantly. My site's TTFB dropped from 1.4 seconds on shared hosting to 0.19 seconds on Cloudways, and my Google PageSpeed score jumped from 61 to 95+.",
  },
];

const homepageJsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebSite",
      "@id": "https://aimanagedcloudhostingadvisor.online/#website",
      url: "https://aimanagedcloudhostingadvisor.online",
      name: "AI Managed Cloud Hosting Advisor",
      description: "Independent reviews and recommendations for managed cloud hosting, powered by 2+ years of real Cloudways experience.",
      publisher: { "@id": "https://aimanagedcloudhostingadvisor.online/#person" },
    },
    {
      "@type": "Person",
      "@id": "https://aimanagedcloudhostingadvisor.online/#person",
      name: "La Bee",
      url: "https://spineye.com",
      sameAs: ["https://spineye.com", "https://dev.to/spineye"],
      jobTitle: "Web Performance Specialist & Cloud Hosting Expert",
    },
    {
      "@type": "FAQPage",
      mainEntity: faqItems.map((item) => ({
        "@type": "Question",
        name: item.question,
        acceptedAnswer: { "@type": "Answer", text: item.answer },
      })),
    },
  ],
};

const comparisonRows = [
  { feature: "Price/month", cloudways: "From $12", competitor: "$30+", cloudwaysWins: true },
  { feature: "Load Time", cloudways: "0.8s avg", competitor: "1.2–2s", cloudwaysWins: true },
  { feature: "Managed", cloudways: "Yes", competitor: "Varies", cloudwaysWins: true },
  { feature: "Free CDN", cloudways: "Cloudflare", competitor: "Some", cloudwaysWins: true },
  { feature: "Support", cloudways: "24/7 Live Chat", competitor: "Email/Ticket", cloudwaysWins: true },
  { feature: "Best For", cloudways: "Growing sites", competitor: "Beginners", cloudwaysWins: false },
];

const Index = () => {
  return (
    <>
      <SEOHead
        title="Cloudways Review 2026: My Honest Experience After 2 Years | AI Hosting Advisor"
        description="I switched to Cloudways 2 years ago and saved $181/month while making my site 75% faster. Real performance data, honest pros/cons, and a free AI tool to see if it's right for you."
        canonical="/"
        hreflangEn="https://aimanagedcloudhostingadvisor.online/"
        hreflangNl="https://aimanagedcloudhostingadvisor.online/nl/"
        jsonLd={homepageJsonLd}
      />

      {/* HERO */}
      <section className="container mx-auto px-4 pt-16 pb-20 md:pt-24 md:pb-28">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="font-display text-4xl md:text-6xl font-bold text-foreground leading-tight">
            Cloudways Review 2026: <br className="hidden md:block" />
            <span className="text-accent">The Honest Truth</span> After 2 Years
          </h1>
          <p className="mt-6 text-lg md:text-xl text-muted-foreground font-body max-w-3xl mx-auto leading-relaxed">
            I switched to Cloudways and cut my hosting bill by <strong className="text-foreground">$181/month</strong> while making my site <strong className="text-foreground">75% faster</strong>. Here's everything I learned — plus a free AI tool to find your perfect hosting.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <AffiliateLink placement="hero">
              Try Cloudways Free (3 Days, No Credit Card)
            </AffiliateLink>
            <a href="https://chatgpt.com" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 border-2 border-foreground text-foreground px-8 py-4 rounded-lg font-display font-semibold text-lg hover:bg-foreground hover:text-background transition-all duration-150">
              Get AI Recommendation →
            </a>
          </div>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-6 text-sm text-muted-foreground font-body">
            <span>✓ No credit card required</span>
            <span>✓ Same hosting that powers this site</span>
            <span>✓ Cancel anytime</span>
          </div>
        </div>
      </section>

      {/* STATS */}
      <section className="container mx-auto px-4 pb-20">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 max-w-5xl mx-auto">
          <StatCard value="0.8s" label="Average Load Time" />
          <StatCard value="99.9%" label="Uptime (12 months)" />
          <StatCard value="95+" label="Google PageSpeed Score" />
          <StatCard value="$39/mo" label="My Monthly Cost" />
        </div>
        <p className="text-center text-xs text-muted-foreground mt-4 font-body">
          Real data from spineye.com running on Cloudways DigitalOcean 2GB server
        </p>
      </section>

      {/* PERSONAL RECOMMENDATION */}
      <section className="container mx-auto px-4 pb-20">
        <div className="max-w-3xl mx-auto bg-card rounded-xl border p-8 md:p-10">
          <AuthorBox variant="full" />
          <h2 className="font-display text-2xl font-bold mt-6 text-foreground">Why I personally recommend Cloudways</h2>
          <div className="mt-4 space-y-4 text-muted-foreground font-body leading-relaxed">
            <p>
              Two years ago, I was paying $220/month for managed WordPress hosting that gave me mediocre performance. My site loaded in 3+ seconds, and I'd get random downtimes that cost me traffic and revenue.
            </p>
            <p>
              After migrating to Cloudways, my load time dropped to <strong className="text-foreground">0.8 seconds</strong>, my uptime has been <strong className="text-foreground">99.9%</strong> for 12 consecutive months, and I'm paying <strong className="text-foreground">$39/month</strong>. The Breeze cache plugin, Varnish layer, and Redis object caching work together beautifully.
            </p>
            <p>
              The 24/7 live chat support has saved me multiple times — average response time under 3 minutes. Is it perfect? No. There's a learning curve if you've never used a cloud server. But for anyone running a serious website, the performance-to-price ratio is unbeatable.
            </p>
          </div>
          <div className="mt-6">
            <AffiliateLink placement="mid-article">
              Try Cloudways Free →
            </AffiliateLink>
          </div>
        </div>
      </section>

      {/* COMPARISON TABLE */}
      <section className="container mx-auto px-4 pb-20">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-display text-3xl font-bold text-center text-foreground mb-2">How Cloudways Compares</h2>
          <p className="text-center text-muted-foreground font-body mb-8">Based on independent testing. Prices as of 2025.</p>
          <div className="bg-card rounded-xl border overflow-hidden">
            <ComparisonTable rows={comparisonRows} competitorName="Shared Hosting" />
          </div>
          <div className="text-center mt-6">
            <Link to="/compare/cloudways-vs-kinsta" className="text-accent font-display font-semibold hover:underline text-sm">
              See all comparisons →
            </Link>
          </div>
        </div>
      </section>

      {/* AI TOOL */}
      <section className="container mx-auto px-4 pb-20">
        <div className="max-w-3xl mx-auto bg-secondary rounded-xl p-8 md:p-10 text-center">
          <h2 className="font-display text-3xl font-bold text-foreground">Not sure if Cloudways is right for you?</h2>
          <p className="mt-4 text-muted-foreground font-body text-lg leading-relaxed">
            Answer 5 quick questions and our AI advisor will tell you exactly which hosting fits your needs — even if it's not Cloudways.
          </p>
          <a href="https://chatgpt.com" target="_blank" rel="noopener noreferrer" className="mt-6 inline-flex items-center gap-2 bg-accent text-accent-foreground px-8 py-4 rounded-lg font-display font-semibold text-lg hover:brightness-110 transition-all shadow-lg shadow-accent/25">
            Get AI Recommendation
          </a>
          <div className="mt-4 flex flex-wrap items-center justify-center gap-4 text-sm text-muted-foreground font-body">
            <span>⏱ 2–3 minutes</span>
            <span>🔒 No signup</span>
            <span>✅ Instant results</span>
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="container mx-auto px-4 pb-20">
        <h2 className="font-display text-3xl font-bold text-center text-foreground mb-12">How It Works</h2>
        <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          {[
            { step: "1", title: "Answer quick questions", desc: "Tell us about your site: type, traffic, budget, and technical needs." },
            { step: "2", title: "AI analyzes your needs", desc: "Our advisor compares your requirements against all major hosting providers." },
            { step: "3", title: "Get tailored options", desc: "Receive 2–3 personalized hosting recommendations with real pricing." },
          ].map((item) => (
            <div key={item.step} className="text-center">
              <div className="w-12 h-12 rounded-full bg-accent text-accent-foreground flex items-center justify-center font-display font-bold text-lg mx-auto">
                {item.step}
              </div>
              <h3 className="font-display font-semibold text-lg mt-4 text-foreground">{item.title}</h3>
              <p className="mt-2 text-muted-foreground font-body text-sm">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* FAQ */}
      <section className="container mx-auto px-4 pb-20">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-display text-3xl font-bold text-center text-foreground mb-8">Frequently Asked Questions</h2>
          <FAQAccordion items={faqItems} />
        </div>
      </section>

      {/* BOTTOM CTA */}
      <section className="bg-accent py-16 md:py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-accent-foreground">Ready to make your site faster?</h2>
          <p className="mt-4 text-accent-foreground/80 font-body text-lg">Join thousands of site owners who've switched to Cloudways</p>
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
            <AffiliateLink placement="bottom" className="!bg-primary !text-primary-foreground !shadow-none hover:!brightness-110">
              Try Cloudways Free
            </AffiliateLink>
            <Link to="/my-cloudways-story" className="inline-flex items-center gap-2 border-2 border-accent-foreground text-accent-foreground px-8 py-4 rounded-lg font-display font-semibold text-lg hover:bg-accent-foreground hover:text-accent transition-all duration-150">
              Read My Full Story
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default Index;
