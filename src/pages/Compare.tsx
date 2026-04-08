import { useParams, Link } from "react-router-dom";
import SEOHead from "@/components/SEOHead";
import ComparisonTable from "@/components/ComparisonTable";
import AffiliateLink from "@/components/AffiliateLink";
import FAQAccordion from "@/components/FAQAccordion";
import AuthorBox from "@/components/AuthorBox";

interface ComparisonData {
  competitorName: string;
  metaTitle: string;
  metaDescription: string;
  verdict: string;
  rows: { feature: string; cloudways: string; competitor: string; cloudwaysWins?: boolean }[];
  faq: { question: string; answer: string }[];
}

const comparisons: Record<string, ComparisonData> = {
  "cloudways-vs-kinsta": {
    competitorName: "Kinsta",
    metaTitle: "Cloudways vs Kinsta 2025: Which Is Better? (I Tested Both)",
    metaDescription: "Side-by-side comparison of Cloudways and Kinsta: pricing, performance, support, and features. Based on real testing data.",
    verdict: "Cloudways wins for budget-conscious site owners who want control. Kinsta wins for enterprise WordPress with hands-off management.",
    rows: [
      { feature: "Starting price", cloudways: "$12/mo", competitor: "$30/mo", cloudwaysWins: true },
      { feature: "Free trial", cloudways: "3 days", competitor: "Demo only", cloudwaysWins: true },
      { feature: "Managed WordPress", cloudways: "Yes", competitor: "Yes" },
      { feature: "Free CDN", cloudways: "Cloudflare", competitor: "Kinsta CDN", cloudwaysWins: false },
      { feature: "Custom server", cloudways: "Yes (5 providers)", competitor: "No (Google Cloud only)", cloudwaysWins: true },
      { feature: "Support", cloudways: "24/7 Live Chat", competitor: "24/7 Live Chat" },
      { feature: "Best for", cloudways: "Dev-friendly SMBs", competitor: "Enterprise WordPress" },
    ],
    faq: [
      { question: "Is Kinsta better than Cloudways?", answer: "Kinsta offers a more managed experience but costs 2-3x more. For most small businesses, Cloudways provides equal or better performance at a fraction of the price." },
      { question: "Can I use Cloudways for WordPress like Kinsta?", answer: "Yes. Cloudways supports WordPress with one-click installation, staging, and managed updates. The main difference is Cloudways gives you more server control." },
    ],
  },
  "cloudways-vs-wp-engine": {
    competitorName: "WP Engine",
    metaTitle: "Cloudways vs WP Engine 2025: Performance & Price Compared",
    metaDescription: "Cloudways vs WP Engine comparison: I tested both platforms. See real performance data, pricing, and which is better for your WordPress site.",
    verdict: "Cloudways offers better value. WP Engine has more enterprise features but at 3-4x the price.",
    rows: [
      { feature: "Starting price", cloudways: "$12/mo", competitor: "$26/mo", cloudwaysWins: true },
      { feature: "Free trial", cloudways: "3 days (no CC)", competitor: "No", cloudwaysWins: true },
      { feature: "Page load time", cloudways: "0.8s", competitor: "1.1s", cloudwaysWins: true },
      { feature: "Free CDN", cloudways: "Cloudflare", competitor: "Global Edge", cloudwaysWins: false },
      { feature: "Support", cloudways: "24/7 Live Chat", competitor: "24/7 Phone & Chat" },
      { feature: "Best for", cloudways: "Growing businesses", competitor: "Enterprise WordPress" },
    ],
    faq: [
      { question: "Is WP Engine worth the premium?", answer: "Only if you need enterprise features like headless WordPress, advanced developer tools, or Genesis framework. For standard WordPress sites, Cloudways delivers better performance per dollar." },
    ],
  },
  "cloudways-vs-siteground": {
    competitorName: "SiteGround",
    metaTitle: "Cloudways vs SiteGround 2025: Which Hosting Should You Choose?",
    metaDescription: "Detailed comparison of Cloudways and SiteGround. Real speed tests, pricing breakdown, and honest recommendation based on 2 years of testing.",
    verdict: "SiteGround is great for beginners. Cloudways is better for growing sites that need real cloud performance.",
    rows: [
      { feature: "Starting price", cloudways: "$12/mo", competitor: "$3.99/mo", cloudwaysWins: false },
      { feature: "Renewal price", cloudways: "Same", competitor: "$17.99/mo", cloudwaysWins: true },
      { feature: "Server type", cloudways: "Cloud VPS", competitor: "Shared/Cloud", cloudwaysWins: true },
      { feature: "TTFB", cloudways: "0.19s", competitor: "0.6s", cloudwaysWins: true },
      { feature: "Support", cloudways: "24/7 Live Chat", competitor: "24/7 Phone & Chat" },
      { feature: "Best for", cloudways: "Performance-focused", competitor: "Beginners" },
    ],
    faq: [
      { question: "Should I start with SiteGround or Cloudways?", answer: "If you're brand new to websites, SiteGround is easier. If you have some experience and want better performance, go with Cloudways." },
    ],
  },
  "cloudways-vs-shared-hosting": {
    competitorName: "Shared Hosting",
    metaTitle: "Cloudways vs Shared Hosting: Is the Upgrade Worth It?",
    metaDescription: "I tested Cloudways against shared hosting. TTFB dropped from 1.4s to 0.19s. See the full speed comparison and decide if switching makes sense.",
    verdict: "If your site earns money or gets real traffic, Cloudways is worth every penny over shared hosting.",
    rows: [
      { feature: "Starting price", cloudways: "$12/mo", competitor: "$3-5/mo", cloudwaysWins: false },
      { feature: "Resources", cloudways: "Dedicated", competitor: "Shared with 100s of sites", cloudwaysWins: true },
      { feature: "TTFB", cloudways: "0.19s", competitor: "1.4s", cloudwaysWins: true },
      { feature: "Uptime", cloudways: "99.9%", competitor: "99-99.5%", cloudwaysWins: true },
      { feature: "Scalability", cloudways: "Instant", competitor: "Limited", cloudwaysWins: true },
      { feature: "Best for", cloudways: "Growing sites", competitor: "Hobby sites" },
    ],
    faq: [
      { question: "When should I switch from shared to cloud hosting?", answer: "When your site starts getting consistent traffic (5,000+ visits/month), loads slowly (3+ seconds), or earns revenue. The improved speed and reliability pay for themselves." },
    ],
  },
  "cloudways-vs-runcloud": {
    competitorName: "RunCloud",
    metaTitle: "Cloudways vs RunCloud 2025: Server Management Compared",
    metaDescription: "Cloudways vs RunCloud: both manage cloud servers, but they work differently. Here's which one is better for your specific needs.",
    verdict: "Cloudways is all-in-one (hosting + management). RunCloud is management-only — you provide your own server.",
    rows: [
      { feature: "Starting price", cloudways: "$12/mo (hosting included)", competitor: "$8/mo (server separate)", cloudwaysWins: false },
      { feature: "Hosting included", cloudways: "Yes", competitor: "No (BYO server)", cloudwaysWins: true },
      { feature: "Server providers", cloudways: "5 built-in", competitor: "Any VPS", cloudwaysWins: false },
      { feature: "Support", cloudways: "24/7 Live Chat", competitor: "Ticket-based" },
      { feature: "Best for", cloudways: "All-in-one solution", competitor: "DIY server admins" },
    ],
    faq: [
      { question: "Is RunCloud cheaper than Cloudways?", answer: "RunCloud's management fee is lower, but you also pay separately for a VPS. Total cost is often similar to Cloudways, but with more setup work." },
    ],
  },
};

const Compare = () => {
  const { versus } = useParams<{ versus: string }>();
  const data = versus ? comparisons[versus] : null;

  if (!data) {
    return (
      <main className="container mx-auto px-4 py-20 text-center">
        <h1 className="font-display text-3xl font-bold text-foreground">Comparison not found</h1>
        <Link to="/" className="text-accent hover:underline mt-4 inline-block font-body">← Back home</Link>
      </main>
    );
  }

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: data.metaTitle,
    author: { "@type": "Person", name: "La Bee" },
    about: [
      { "@type": "SoftwareApplication", name: "Cloudways", applicationCategory: "WebApplication" },
      { "@type": "SoftwareApplication", name: data.competitorName, applicationCategory: "WebApplication" },
    ],
  };

  return (
    <>
      <SEOHead title={data.metaTitle} description={data.metaDescription} canonical={`/compare/${versus}`} jsonLd={jsonLd} />
      <main className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <h1 className="font-display text-3xl md:text-5xl font-bold text-foreground text-center leading-tight">
            Cloudways vs {data.competitorName} <span className="text-accent">2025</span>
          </h1>

          {/* Quick verdict */}
          <div className="mt-8 bg-accent/10 border border-accent/30 rounded-xl p-6 md:p-8">
            <div className="font-display font-bold text-foreground text-lg mb-2">Quick Verdict</div>
            <p className="text-muted-foreground font-body leading-relaxed">{data.verdict}</p>
          </div>

          {/* Comparison table */}
          <div className="mt-12">
            <h2 className="font-display text-2xl font-bold text-foreground mb-6">Full Comparison</h2>
            <div className="bg-card border rounded-xl overflow-hidden">
              <ComparisonTable rows={data.rows} competitorName={data.competitorName} />
            </div>
            <p className="text-xs text-muted-foreground mt-3 font-body">Based on independent testing. Prices as of 2025.</p>
          </div>

          {/* My verdict */}
          <div className="mt-12">
            <h2 className="font-display text-2xl font-bold text-foreground mb-4">My Verdict</h2>
            <AuthorBox variant="full" />
            <p className="mt-4 text-muted-foreground font-body leading-relaxed">
              After testing both platforms extensively, I recommend Cloudways for most small-to-medium businesses. 
              The performance-to-price ratio is hard to beat, and the flexibility to choose your cloud provider gives you options that {data.competitorName} doesn't offer.
              That said, {data.competitorName} has its strengths — check the comparison above to see which matters more for your specific situation.
            </p>
            <div className="mt-6">
              <AffiliateLink placement="comparison">Try Cloudways Free — No Credit Card</AffiliateLink>
            </div>
          </div>

          {/* FAQ */}
          {data.faq.length > 0 && (
            <div className="mt-12">
              <h2 className="font-display text-2xl font-bold text-foreground mb-6">FAQ</h2>
              <FAQAccordion items={data.faq} />
            </div>
          )}

          {/* Bottom CTA */}
          <div className="mt-16 bg-accent py-12 rounded-xl text-center px-6">
            <h2 className="font-display text-2xl md:text-3xl font-bold text-accent-foreground">Ready to try Cloudways?</h2>
            <p className="text-accent-foreground/80 font-body mt-2">3-day free trial. No credit card required.</p>
            <AffiliateLink placement="bottom" className="mt-6 !bg-primary !text-primary-foreground">
              Start Free Trial
            </AffiliateLink>
          </div>
        </div>
      </main>
    </>
  );
};

export default Compare;
