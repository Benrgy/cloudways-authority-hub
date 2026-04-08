import SEOHead from "@/components/SEOHead";
import AffiliateLink from "@/components/AffiliateLink";
import FAQAccordion from "@/components/FAQAccordion";
import { Link } from "react-router-dom";

const guideFaq = [
  { question: "What's the difference between managed and unmanaged hosting?", answer: "Managed hosting handles server maintenance, security updates, backups, and optimization for you. Unmanaged gives you a raw server — you handle everything yourself. Cloudways sits in the sweet spot: managed platform on cloud infrastructure you choose." },
  { question: "How much should I budget for hosting?", answer: "For a growing business website: $12-50/month for cloud hosting. The hidden costs of cheap hosting (downtime, slow speeds, lost customers) typically cost more than the savings." },
  { question: "Can I migrate my existing site to cloud hosting?", answer: "Yes. Most managed cloud hosts offer free migration. Cloudways includes one free expert migration. The process typically takes 24-48 hours with minimal downtime." },
];

const HostingGuide = () => {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Complete Managed Cloud Hosting Guide 2025",
    author: { "@type": "Person", name: "La Bee" },
    about: { "@type": "Thing", name: "Managed Cloud Hosting" },
  };

  return (
    <>
      <SEOHead
        title="Complete Managed Cloud Hosting Guide 2025: Small Business Edition"
        description="Everything you need to know about managed cloud hosting: what it is, what it costs, which providers to consider, and how to migrate. Free guide."
        canonical="/hosting-guide"
        jsonLd={jsonLd}
      />
      <main className="container mx-auto px-4 py-16">
        <div className="max-w-3xl mx-auto">
          <h1 className="font-display text-3xl md:text-5xl font-bold text-foreground leading-tight">
            Complete Managed Cloud Hosting Guide <span className="text-accent">2025</span>
          </h1>
          <p className="mt-4 text-lg text-muted-foreground font-body">The small business edition — everything you need to know, without the jargon.</p>

          <article className="mt-12 space-y-10">
            <section>
              <h2 className="font-display text-2xl font-bold text-foreground mb-4">What Is Managed Cloud Hosting?</h2>
              <div className="space-y-4 text-muted-foreground font-body leading-relaxed">
                <p>Managed cloud hosting combines cloud infrastructure (servers from providers like DigitalOcean, AWS, or Google Cloud) with a management layer that handles the technical complexity. Instead of configuring Nginx, managing security patches, and setting up backup scripts yourself, the hosting platform does it for you.</p>
                <p>Think of it as renting a high-performance apartment vs. building a house. You get enterprise-grade infrastructure without the engineering team to maintain it. Companies like Cloudways, Kinsta, and WP Engine offer managed cloud hosting — each with different trade-offs between price, control, and features.</p>
              </div>
            </section>

            <section>
              <h2 className="font-display text-2xl font-bold text-foreground mb-4">Managed vs Shared vs VPS vs Dedicated</h2>
              <div className="overflow-x-auto">
                <table className="w-full border-collapse border border-border rounded-lg overflow-hidden">
                  <thead>
                    <tr className="bg-secondary">
                      <th className="py-3 px-4 text-left font-display text-sm text-foreground">Type</th>
                      <th className="py-3 px-4 text-left font-display text-sm text-foreground">Price</th>
                      <th className="py-3 px-4 text-left font-display text-sm text-foreground">Performance</th>
                      <th className="py-3 px-4 text-left font-display text-sm text-foreground">Best For</th>
                    </tr>
                  </thead>
                  <tbody className="font-body text-sm text-muted-foreground">
                    <tr className="border-t border-border"><td className="py-3 px-4">Shared</td><td className="py-3 px-4">$3-15/mo</td><td className="py-3 px-4">Low</td><td className="py-3 px-4">Hobby sites</td></tr>
                    <tr className="border-t border-border"><td className="py-3 px-4">VPS</td><td className="py-3 px-4">$5-80/mo</td><td className="py-3 px-4">Medium-High</td><td className="py-3 px-4">Developers</td></tr>
                    <tr className="border-t border-border bg-accent/5"><td className="py-3 px-4 font-semibold text-foreground">Managed Cloud</td><td className="py-3 px-4">$12-100/mo</td><td className="py-3 px-4">High</td><td className="py-3 px-4">Growing businesses</td></tr>
                    <tr className="border-t border-border"><td className="py-3 px-4">Dedicated</td><td className="py-3 px-4">$80-500+/mo</td><td className="py-3 px-4">Highest</td><td className="py-3 px-4">Enterprise</td></tr>
                  </tbody>
                </table>
              </div>
            </section>

            <section>
              <h2 className="font-display text-2xl font-bold text-foreground mb-4">The True Cost of Cheap Hosting</h2>
              <div className="space-y-4 text-muted-foreground font-body leading-relaxed">
                <p>A $3/month hosting plan seems like a bargain until you calculate the hidden costs:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li><strong className="text-foreground">Slow load times → lost revenue.</strong> Google reports 53% of mobile visitors leave if a page takes over 3 seconds to load. If your site earns $1,000/month, slow hosting could cost you $530/month in lost visitors.</li>
                  <li><strong className="text-foreground">Downtime → lost trust.</strong> Shared hosting uptime averages 99.0-99.5%. That's 4-8 hours of downtime per month. On managed cloud hosting (99.9%), you get under 45 minutes per month.</li>
                  <li><strong className="text-foreground">Renewal pricing.</strong> Many shared hosts advertise $3/month but renew at $15-20/month. Cloudways is transparent: $12/month stays $12/month.</li>
                  <li><strong className="text-foreground">Security incidents.</strong> Shared environments are shared attack surfaces. One compromised site on the server can affect yours.</li>
                </ul>
              </div>
            </section>

            <section>
              <h2 className="font-display text-2xl font-bold text-foreground mb-4">How to Choose the Right Plan</h2>
              <div className="space-y-4 text-muted-foreground font-body leading-relaxed">
                <p>Match your plan to your actual needs:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li><strong className="text-foreground">Under 10,000 visitors/month:</strong> DigitalOcean 1GB ($12/mo) handles this comfortably</li>
                  <li><strong className="text-foreground">10,000-50,000 visitors/month:</strong> DigitalOcean 2GB ($26/mo) gives headroom for traffic spikes</li>
                  <li><strong className="text-foreground">50,000+ visitors/month:</strong> Consider 4GB+ servers or AWS/Google Cloud backends ($40-80/mo)</li>
                  <li><strong className="text-foreground">WooCommerce stores:</strong> Start at 2GB minimum. Database-heavy sites need more RAM.</li>
                </ul>
                <p>My personal recommendation: start with the 2GB DigitalOcean plan at $26/month. It handles most growing sites perfectly, and you can scale up instantly if needed.</p>
              </div>
            </section>

            <section>
              <h2 className="font-display text-2xl font-bold text-foreground mb-4">Migration Checklist</h2>
              <div className="bg-card border rounded-xl p-6">
                <ol className="space-y-3 text-muted-foreground font-body list-decimal pl-5">
                  <li>Back up your current site (files + database)</li>
                  <li>Sign up for Cloudways free trial (no credit card needed)</li>
                  <li>Launch a server and install WordPress</li>
                  <li>Submit free migration request with old host credentials</li>
                  <li>Test everything on the staging URL</li>
                  <li>Update DNS records to point to new server</li>
                  <li>Install free SSL certificate</li>
                  <li>Run speed tests and verify performance</li>
                  <li>Monitor for 48 hours</li>
                  <li>Cancel old hosting</li>
                </ol>
              </div>
            </section>

            <section>
              <h2 className="font-display text-2xl font-bold text-foreground mb-4">My Cloudways Setup Walkthrough</h2>
              <div className="space-y-4 text-muted-foreground font-body leading-relaxed">
                <p>Here's my exact Cloudways configuration that delivers 0.8s load times at $39/month:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li><strong className="text-foreground">Cloud provider:</strong> DigitalOcean</li>
                  <li><strong className="text-foreground">Server size:</strong> 2GB RAM / 1 vCPU</li>
                  <li><strong className="text-foreground">Data center:</strong> Amsterdam (closest to majority of visitors)</li>
                  <li><strong className="text-foreground">PHP version:</strong> 8.2 (latest stable)</li>
                  <li><strong className="text-foreground">Caching:</strong> Breeze + Varnish + Redis (all enabled)</li>
                  <li><strong className="text-foreground">CDN:</strong> Cloudflare (free plan, DNS-level)</li>
                  <li><strong className="text-foreground">Backups:</strong> Daily automated, kept for 7 days</li>
                </ul>
                <p>This setup runs multiple WordPress sites simultaneously without breaking a sweat. For detailed setup instructions, check out my <Link to="/my-cloudways-story" className="text-accent hover:underline">full Cloudways story</Link>.</p>
              </div>
            </section>

            <section>
              <h2 className="font-display text-2xl font-bold text-foreground mb-4">Frequently Asked Questions</h2>
              <FAQAccordion items={guideFaq} />
            </section>
          </article>

          {/* CTA */}
          <div className="mt-16 bg-accent py-12 rounded-xl text-center px-6">
            <h2 className="font-display text-2xl md:text-3xl font-bold text-accent-foreground">Ready to upgrade your hosting?</h2>
            <p className="text-accent-foreground/80 font-body mt-2">Start with Cloudways. 3-day free trial, no credit card.</p>
            <AffiliateLink placement="bottom" className="mt-6 !bg-primary !text-primary-foreground">
              Start Free Trial
            </AffiliateLink>
          </div>

          <div className="mt-12 flex flex-wrap gap-4 justify-center text-sm font-body">
            <Link to="/blog" className="text-accent hover:underline">Read the Blog →</Link>
            <Link to="/my-cloudways-story" className="text-accent hover:underline">My Story →</Link>
            <Link to="/compare/cloudways-vs-kinsta" className="text-accent hover:underline">Compare Hosting →</Link>
          </div>
        </div>
      </main>
    </>
  );
};

export default HostingGuide;
