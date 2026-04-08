import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import AffiliateLink from "@/components/AffiliateLink";

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();
  const isNl = location.pathname.startsWith("/nl");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => setMenuOpen(false), [location]);

  const navLinks = isNl
    ? [
        { to: "/nl", label: "Home" },
        { to: "/nl/blog", label: "Blog" },
        { to: "/hosting-guide", label: "Hosting Gids" },
        { to: "/my-cloudways-story", label: "Mijn Verhaal" },
      ]
    : [
        { to: "/", label: "Home" },
        { to: "/blog", label: "Blog" },
        { to: "/hosting-guide", label: "Hosting Guide" },
        { to: "/my-cloudways-story", label: "My Story" },
        { to: "/compare/cloudways-vs-kinsta", label: "Compare" },
      ];

  return (
    <header className={`sticky top-0 z-50 transition-all duration-200 ${scrolled ? "bg-card/95 backdrop-blur-md shadow-sm" : "bg-transparent"}`}>
      <div className="container mx-auto flex items-center justify-between py-4">
        <Link to={isNl ? "/nl" : "/"} className="font-display font-bold text-lg text-foreground">
          <span className="text-accent">AI</span> Hosting Advisor
        </Link>

        <nav className="hidden md:flex items-center gap-6">
          {navLinks.map(link => (
            <Link key={link.to} to={link.to} className="text-sm font-body text-muted-foreground hover:text-foreground transition-colors">
              {link.label}
            </Link>
          ))}
          <div className="flex items-center gap-2 text-xs text-muted-foreground border-l pl-4 border-border">
            <Link to="/" className={`hover:text-foreground ${!isNl ? "text-foreground font-semibold" : ""}`}>EN</Link>
            <span>/</span>
            <Link to="/nl" className={`hover:text-foreground ${isNl ? "text-foreground font-semibold" : ""}`}>NL</Link>
          </div>
          <AffiliateLink placement="hero" variant="button" className="!px-5 !py-2.5 !text-sm">
            Try Cloudways Free
          </AffiliateLink>
        </nav>

        <button onClick={() => setMenuOpen(!menuOpen)} className="md:hidden text-foreground p-2" aria-label="Toggle menu">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            {menuOpen ? <path d="M18 6L6 18M6 6l12 12" /> : <path d="M3 12h18M3 6h18M3 18h18" />}
          </svg>
        </button>
      </div>

      {menuOpen && (
        <div className="md:hidden bg-card border-t border-border px-6 py-4 space-y-3">
          {navLinks.map(link => (
            <Link key={link.to} to={link.to} className="block text-sm font-body text-muted-foreground hover:text-foreground">
              {link.label}
            </Link>
          ))}
          <AffiliateLink placement="hero" variant="button" className="!w-full !text-sm !py-3 mt-3">
            Try Cloudways Free
          </AffiliateLink>
        </div>
      )}
    </header>
  );
};

export default Header;
