import SEOHead from "@/components/SEOHead";
import StatCard from "@/components/StatCard";
import AffiliateLink from "@/components/AffiliateLink";
import AuthorBox from "@/components/AuthorBox";
import { Link } from "react-router-dom";

const MyStory = () => {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "My Honest Cloudways Experience: 2 Years, Real Data, Real Results",
    author: { "@type": "Person", name: "La Bee", url: "https://spineye.com" },
    about: { "@type": "SoftwareApplication", name: "Cloudways" },
  };

  return (
    <>
      <SEOHead
        title="My Cloudways Story: How I Cut Hosting Costs by $181/Month | AI Hosting Advisor"
        description="The real story of how I migrated to Cloudways, what went wrong, what went right, and the exact performance data from 2+ years of use."
        canonical="/my-cloudways-story"
        jsonLd={jsonLd}
      />
      <main className="container mx-auto px-4 py-16">
        <div className="max-w-3xl mx-auto">
          <h1 className="font-display text-3xl md:text-5xl font-bold text-foreground leading-tight">
            My Cloudways Story: <span className="text-accent">2 Years of Real Data</span>
          </h1>

          <div className="mt-6">
            <AuthorBox variant="full" />
          </div>

          {/* Performance Dashboard */}
          <div className="grid grid-cols-2 gap-4 mt-10">
            <StatCard value="0.8s" label="Average Load Time" />
            <StatCard value="99.9%" label="Uptime (12 months)" />
            <StatCard value="95+" label="PageSpeed Score" />
            <StatCard value="$39/mo" label="Monthly Cost" />
          </div>

          {/* Content */}
          <article className="mt-12 space-y-10">
            <section>
              <h2 className="font-display text-2xl font-bold text-foreground mb-4">Why I Switched</h2>
              <div className="space-y-4 text-muted-foreground font-body leading-relaxed">
                <p>Two years ago, I was running my portfolio of sites on a well-known managed WordPress host. On paper, it was a premium service — $220/month for "enterprise-grade" hosting. In reality, my main site (spineye.com) was loading in 3.2 seconds, and I'd experience random downtime that cost me traffic and revenue.</p>
                <p>The breaking point was a traffic spike from a Reddit post. My site went down for 4 hours. The support team's response? "Upgrade to a higher plan." I was already on their second-highest tier.</p>
                <p>That weekend, I started researching alternatives. After testing free trials of Cloudways, Kinsta, WP Engine, and RunCloud, I picked Cloudways. Here's why.</p>
              </div>
            </section>

            <section>
              <h2 className="font-display text-2xl font-bold text-foreground mb-4">The Migration</h2>
              <div className="space-y-4 text-muted-foreground font-body leading-relaxed">
                <p>Cloudways offers one free migration with their expert team. I submitted a ticket on Monday morning, and by Tuesday evening, my main site was running on a DigitalOcean 2GB server in Amsterdam. Total downtime during migration: about 15 minutes for DNS propagation.</p>
                <p>The process was smoother than I expected. They handled the WordPress database, files, plugins, and even the SSL certificate. The only hiccup was a caching plugin conflict, which their support resolved in under 10 minutes via live chat.</p>
              </div>
            </section>

            <section>
              <h2 className="font-display text-2xl font-bold text-foreground mb-4">What Surprised Me</h2>
              <div className="space-y-4 text-muted-foreground font-body leading-relaxed">
                <p><strong className="text-foreground">The caching stack is remarkable.</strong> Cloudways layers Breeze (their WordPress plugin), Varnish (HTTP accelerator), and Redis (object caching) together. Without touching any settings, my TTFB dropped from 1.4 seconds to 0.19 seconds.</p>
                <p><strong className="text-foreground">Support is genuinely helpful.</strong> I've contacted them maybe 30 times over two years. Average response time: under 3 minutes. They've helped with server optimization, plugin conflicts, and even DNS issues that weren't technically their responsibility.</p>
                <p><strong className="text-foreground">The staging feature saves hours.</strong> One-click staging environments for testing updates before pushing to production. I broke my site once on staging instead of live — that feature paid for itself immediately.</p>
              </div>
            </section>

            <section>
              <h2 className="font-display text-2xl font-bold text-foreground mb-4">The Numbers After 2 Years</h2>
              <div className="overflow-x-auto">
                <table className="w-full border-collapse border border-border rounded-lg overflow-hidden">
                  <thead>
                    <tr className="bg-secondary">
                      <th className="py-3 px-4 text-left font-display text-sm text-foreground">Metric</th>
                      <th className="py-3 px-4 text-left font-display text-sm text-foreground">Before (Old Host)</th>
                      <th className="py-3 px-4 text-left font-display text-sm text-foreground">After (Cloudways)</th>
                    </tr>
                  </thead>
                  <tbody className="font-body text-sm text-muted-foreground">
                    <tr className="border-t border-border"><td className="py-3 px-4">Page Load Time</td><td className="py-3 px-4">3.2s</td><td className="py-3 px-4 text-foreground font-semibold">0.8s</td></tr>
                    <tr className="border-t border-border"><td className="py-3 px-4">TTFB</td><td className="py-3 px-4">1.4s</td><td className="py-3 px-4 text-foreground font-semibold">0.19s</td></tr>
                    <tr className="border-t border-border"><td className="py-3 px-4">PageSpeed Score</td><td className="py-3 px-4">61</td><td className="py-3 px-4 text-foreground font-semibold">95+</td></tr>
                    <tr className="border-t border-border"><td className="py-3 px-4">Monthly Uptime</td><td className="py-3 px-4">99.2%</td><td className="py-3 px-4 text-foreground font-semibold">99.9%</td></tr>
                    <tr className="border-t border-border"><td className="py-3 px-4">Monthly Cost</td><td className="py-3 px-4">$220</td><td className="py-3 px-4 text-foreground font-semibold">$39</td></tr>
                    <tr className="border-t border-border"><td className="py-3 px-4">Monthly Savings</td><td className="py-3 px-4">—</td><td className="py-3 px-4 text-foreground font-semibold">$181</td></tr>
                  </tbody>
                </table>
              </div>
            </section>

            <section>
              <h2 className="font-display text-2xl font-bold text-foreground mb-4">Who Should Switch to Cloudways</h2>
              <ul className="space-y-2 text-muted-foreground font-body list-disc pl-6">
                <li>Site owners currently on shared hosting with slow load times</li>
                <li>WordPress users paying $50+/month for managed hosting</li>
                <li>Developers who want server control without full sysadmin work</li>
                <li>WooCommerce store owners who need reliable uptime</li>
                <li>Agencies managing multiple client sites</li>
              </ul>
            </section>

            <section>
              <h2 className="font-display text-2xl font-bold text-foreground mb-4">Who Should NOT Use Cloudways</h2>
              <div className="space-y-4 text-muted-foreground font-body leading-relaxed">
                <p>I want to be honest about the limitations:</p>
                <ul className="space-y-2 list-disc pl-6">
                  <li><strong className="text-foreground">Complete beginners:</strong> If you've never managed a website, the Cloudways interface can be overwhelming. SiteGround or shared hosting is more beginner-friendly.</li>
                  <li><strong className="text-foreground">Email hosting needs:</strong> Cloudways doesn't include email. You'll need a separate service like Google Workspace or Zoho Mail.</li>
                  <li><strong className="text-foreground">Very small personal sites:</strong> If you get under 1,000 visitors/month and don't monetize, a $5/month shared plan is perfectly fine.</li>
                  <li><strong className="text-foreground">cPanel-dependent users:</strong> Cloudways uses their own panel, not cPanel. If your workflow depends on cPanel, the switch requires adjustment.</li>
                </ul>
              </div>
            </section>
          </article>

          {/* CTA */}
          <div className="mt-16 bg-accent py-12 rounded-xl text-center px-6">
            <h2 className="font-display text-2xl md:text-3xl font-bold text-accent-foreground">Ready to try Cloudways?</h2>
            <p className="text-accent-foreground/80 font-body mt-2">Same hosting that powers spineye.com. 3-day free trial.</p>
            <AffiliateLink placement="bottom" className="mt-6 !bg-primary !text-primary-foreground">
              Start Free Trial
            </AffiliateLink>
          </div>

          {/* Internal links */}
          <div className="mt-12 flex flex-wrap gap-4 justify-center text-sm font-body">
            <Link to="/blog" className="text-accent hover:underline">Read the Blog →</Link>
            <Link to="/hosting-guide" className="text-accent hover:underline">Hosting Guide →</Link>
            <Link to="/compare/cloudways-vs-kinsta" className="text-accent hover:underline">Compare Hosting →</Link>
          </div>
        </div>
      </main>
    </>
  );
};

export default MyStory;
