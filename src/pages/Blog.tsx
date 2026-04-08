import SEOHead from "@/components/SEOHead";
import { Link } from "react-router-dom";

const categories = ["All", "Reviews", "Tutorials", "Comparisons", "WordPress", "Speed"];

const samplePosts = [
  {
    slug: "is-cloudways-worth-it-small-business",
    title: "Is Cloudways Worth It for Small Businesses? (My Honest Answer After 2 Years)",
    category: "Reviews",
    excerpt: "After 2 years on Cloudways paying $39/month, here's my honest verdict: who should switch and who should stick with shared hosting.",
    date: "2025-01-15",
    readTime: 8,
  },
  {
    slug: "cloudways-vs-shared-hosting-speed-comparison",
    title: "Cloudways vs Shared Hosting: I Tested Both and the Speed Difference Is Shocking",
    category: "Comparisons",
    excerpt: "My TTFB went from 1.4 seconds on shared hosting to 0.19 seconds on Cloudways. Here's the full speed test breakdown.",
    date: "2025-01-10",
    readTime: 12,
  },
  {
    slug: "cloudways-free-trial-what-to-expect",
    title: "Cloudways Free Trial: What Happens After 3 Days? (Everything You Need to Know)",
    category: "Tutorials",
    excerpt: "Everything about the Cloudways 3-day free trial: what's included, what happens after, and whether you need a credit card to start.",
    date: "2025-01-05",
    readTime: 6,
  },
];

const categoryColors: Record<string, string> = {
  Reviews: "bg-blue-100 text-blue-800",
  Tutorials: "bg-emerald-100 text-emerald-800",
  Comparisons: "bg-amber-100 text-amber-800",
  WordPress: "bg-purple-100 text-purple-800",
  Speed: "bg-rose-100 text-rose-800",
};

const Blog = () => {
  return (
    <>
      <SEOHead
        title="Cloud Hosting Blog — Tips, Reviews & Tutorials | AI Hosting Advisor"
        description="Practical guides on Cloudways, WordPress performance, managed hosting comparisons, and cloud server optimization. Based on real-world testing."
        canonical="/blog"
      />
      <main className="container mx-auto px-4 py-16">
        <h1 className="font-display text-4xl md:text-5xl font-bold text-foreground text-center">Cloud Hosting Blog</h1>
        <p className="text-center text-muted-foreground font-body mt-4 text-lg">Tips, reviews, and tutorials based on real-world testing</p>

        <div className="flex flex-wrap justify-center gap-2 mt-10">
          {categories.map((cat) => (
            <button key={cat} className="px-4 py-2 rounded-full text-sm font-body border border-border text-muted-foreground hover:border-accent hover:text-accent transition-colors">
              {cat}
            </button>
          ))}
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12 max-w-6xl mx-auto">
          {samplePosts.map((post) => (
            <article key={post.slug} className="bg-card rounded-xl border overflow-hidden hover:shadow-md transition-shadow group">
              <div className="h-48 bg-secondary flex items-center justify-center">
                <span className="text-muted-foreground/40 font-display text-sm">Featured Image</span>
              </div>
              <div className="p-6">
                <span className={`inline-block px-3 py-1 rounded-full text-xs font-body font-medium ${categoryColors[post.category] || "bg-secondary text-secondary-foreground"}`}>
                  {post.category}
                </span>
                <h2 className="font-display font-bold text-lg mt-3 text-foreground group-hover:text-accent transition-colors leading-tight">
                  <Link to={`/blog/${post.slug}`}>{post.title}</Link>
                </h2>
                <p className="text-muted-foreground font-body text-sm mt-2 line-clamp-3">{post.excerpt}</p>
                <div className="flex items-center justify-between mt-4 text-xs text-muted-foreground font-body">
                  <Link to="/my-cloudways-story" className="hover:text-accent transition-colors">La Bee</Link>
                  <span>{post.date} · {post.readTime} min read</span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </main>
    </>
  );
};

export default Blog;
