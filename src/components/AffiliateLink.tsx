import { cn } from "@/lib/utils";

const AFFILIATE_BASE = "https://www.cloudways.com/en/?id=1384181";

const utmParams: Record<string, string> = {
  hero: "utm_source=site&utm_medium=hero_cta&utm_campaign=hosting_advisor",
  sidebar: "utm_source=site&utm_medium=sidebar&utm_campaign=hosting_advisor",
  "mid-article": "utm_source=site&utm_medium=mid_article&utm_campaign=hosting_advisor",
  bottom: "utm_source=site&utm_medium=bottom_cta&utm_campaign=hosting_advisor",
  comparison: "utm_source=site&utm_medium=comparison&utm_campaign=hosting_advisor",
  faq: "utm_source=site&utm_medium=faq&utm_campaign=hosting_advisor",
};

interface AffiliateLinkProps {
  placement: keyof typeof utmParams;
  variant?: "button" | "text" | "ghost";
  children: React.ReactNode;
  className?: string;
}

const AffiliateLink = ({ placement, variant = "button", children, className }: AffiliateLinkProps) => {
  const href = `${AFFILIATE_BASE}&${utmParams[placement]}`;

  const baseStyles = "inline-flex items-center justify-center gap-2 font-display font-semibold transition-all duration-150 rounded-lg";
  const variants = {
    button: "bg-accent text-accent-foreground px-8 py-4 text-lg hover:brightness-110 shadow-lg shadow-accent/25",
    ghost: "border-2 border-primary text-primary px-8 py-4 text-lg hover:bg-primary hover:text-primary-foreground",
    text: "text-accent underline underline-offset-4 hover:brightness-110",
  };

  return (
    <a
      href={href}
      target="_blank"
      rel="nofollow sponsored noopener noreferrer"
      className={cn(baseStyles, variants[variant], className)}
    >
      {children}
    </a>
  );
};

export default AffiliateLink;
