import SEOHead from "@/components/SEOHead";
import { Link } from "react-router-dom";

const samplePosts = [
  {
    slug: "is-cloudways-het-waard",
    title: "Is Cloudways Het Waard voor Kleine Bedrijven? (Mijn Eerlijk Antwoord Na 2 Jaar)",
    category: "Reviews",
    excerpt: "Na 2 jaar op Cloudways voor $39/maand, hier is mijn eerlijke oordeel: wie moet overstappen en wie kan beter bij shared hosting blijven.",
    date: "2025-01-15",
    readTime: 8,
  },
  {
    slug: "cloudways-vs-shared-hosting-snelheid",
    title: "Cloudways vs Shared Hosting: Ik Testte Beide en het Snelheidsverschil is Schokkend",
    category: "Vergelijkingen",
    excerpt: "Mijn TTFB ging van 1.4 seconden op shared hosting naar 0.19 seconden op Cloudways. Hier is de volledige snelheidstest.",
    date: "2025-01-10",
    readTime: 12,
  },
];

const NlBlog = () => {
  return (
    <>
      <SEOHead
        title="Cloud Hosting Blog — Tips, Reviews & Tutorials | AI Hosting Advisor"
        description="Praktische gidsen over Cloudways, WordPress performance, managed hosting vergelijkingen, en cloud server optimalisatie."
        canonical="/nl/blog"
        hreflangEn="https://aimanagedcloudhostingadvisor.online/blog"
        hreflangNl="https://aimanagedcloudhostingadvisor.online/nl/blog"
      />
      <main className="container mx-auto px-4 py-16">
        <h1 className="font-display text-4xl md:text-5xl font-bold text-foreground text-center">Cloud Hosting Blog</h1>
        <p className="text-center text-muted-foreground font-body mt-4 text-lg">Tips, reviews en tutorials gebaseerd op echte tests</p>

        <div className="grid md:grid-cols-2 gap-6 mt-12 max-w-4xl mx-auto">
          {samplePosts.map((post) => (
            <article key={post.slug} className="bg-card rounded-xl border overflow-hidden hover:shadow-md transition-shadow group">
              <div className="h-48 bg-secondary flex items-center justify-center">
                <span className="text-muted-foreground/40 font-display text-sm">Uitgelichte Afbeelding</span>
              </div>
              <div className="p-6">
                <span className="inline-block px-3 py-1 rounded-full text-xs font-body font-medium bg-blue-100 text-blue-800">
                  {post.category}
                </span>
                <h2 className="font-display font-bold text-lg mt-3 text-foreground group-hover:text-accent transition-colors leading-tight">
                  {post.title}
                </h2>
                <p className="text-muted-foreground font-body text-sm mt-2 line-clamp-3">{post.excerpt}</p>
                <div className="flex items-center justify-between mt-4 text-xs text-muted-foreground font-body">
                  <span>La Bee</span>
                  <span>{post.date} · {post.readTime} min lezen</span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </main>
    </>
  );
};

export default NlBlog;
