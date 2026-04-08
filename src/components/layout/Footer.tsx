import { Link } from "react-router-dom";

const Footer = () => (
  <footer className="bg-primary text-primary-foreground mt-20">
    <div className="container mx-auto py-12 px-4">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
        <div>
          <div className="font-display font-bold text-lg mb-2">
            <span className="text-accent">AI</span> Hosting Advisor
          </div>
          <p className="text-primary-foreground/70 text-sm font-body">
            Independent reviews and recommendations for managed cloud hosting.
          </p>
        </div>
        <div>
          <h4 className="font-display font-semibold mb-3 text-sm">Pages</h4>
          <nav className="flex flex-col gap-2 text-sm font-body text-primary-foreground/70">
            <Link to="/" className="hover:text-accent transition-colors">Home</Link>
            <Link to="/blog" className="hover:text-accent transition-colors">Blog</Link>
            <Link to="/hosting-guide" className="hover:text-accent transition-colors">Hosting Guide</Link>
            <Link to="/my-cloudways-story" className="hover:text-accent transition-colors">My Cloudways Story</Link>
          </nav>
        </div>
        <div>
          <h4 className="font-display font-semibold mb-3 text-sm">Compare</h4>
          <nav className="flex flex-col gap-2 text-sm font-body text-primary-foreground/70">
            <Link to="/compare/cloudways-vs-kinsta" className="hover:text-accent transition-colors">vs Kinsta</Link>
            <Link to="/compare/cloudways-vs-wp-engine" className="hover:text-accent transition-colors">vs WP Engine</Link>
            <Link to="/compare/cloudways-vs-siteground" className="hover:text-accent transition-colors">vs SiteGround</Link>
            <Link to="/compare/cloudways-vs-shared-hosting" className="hover:text-accent transition-colors">vs Shared Hosting</Link>
          </nav>
        </div>
        <div>
          <h4 className="font-display font-semibold mb-3 text-sm">Language</h4>
          <div className="flex gap-3 text-sm font-body text-primary-foreground/70">
            <Link to="/" className="hover:text-accent transition-colors">English</Link>
            <Link to="/nl" className="hover:text-accent transition-colors">Nederlands</Link>
          </div>
        </div>
      </div>
      <div className="border-t border-primary-foreground/10 mt-10 pt-6">
        <p className="text-xs text-primary-foreground/50 font-body leading-relaxed">
          Affiliate disclosure: This site contains affiliate links. I may earn a commission if you purchase through my links, at no extra cost to you. I only recommend products I personally use.
        </p>
        <p className="text-xs text-primary-foreground/40 font-body mt-2">
          © {new Date().getFullYear()} AI Managed Cloud Hosting Advisor · <a href="https://spineye.com" target="_blank" rel="noopener noreferrer" className="hover:text-accent">spineye.com</a>
        </p>
      </div>
    </div>
  </footer>
);

export default Footer;
