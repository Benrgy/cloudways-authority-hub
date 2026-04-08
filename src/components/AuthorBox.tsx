import { Link } from "react-router-dom";

interface AuthorBoxProps {
  variant?: "mini" | "full";
  date?: string;
}

const AuthorBox = ({ variant = "mini", date }: AuthorBoxProps) => {
  if (variant === "mini") {
    return (
      <div className="flex items-center gap-3">
        <div className="w-10 h-10 rounded-full bg-accent flex items-center justify-center font-display font-bold text-accent-foreground text-sm">
          LB
        </div>
        <div>
          <Link to="/my-cloudways-story" className="font-display font-semibold text-foreground hover:text-accent transition-colors text-sm">
            La Bee
          </Link>
          <p className="text-muted-foreground text-xs">2+ years Cloudways user{date && ` · ${date}`}</p>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-card border rounded-lg p-6 flex flex-col sm:flex-row gap-4 items-start">
      <div className="w-16 h-16 rounded-full bg-accent flex items-center justify-center font-display font-bold text-accent-foreground text-xl flex-shrink-0">
        LB
      </div>
      <div>
        <Link to="/my-cloudways-story" className="font-display font-semibold text-lg text-foreground hover:text-accent transition-colors">
          La Bee
        </Link>
        <p className="text-muted-foreground text-sm mt-1">Web Performance Specialist & Cloud Hosting Expert</p>
        <p className="text-muted-foreground text-sm mt-2">
          Independent digital entrepreneur with 2+ years of hands-on Cloudways experience managing multiple web properties. 
          Founder of <a href="https://spineye.com" target="_blank" rel="noopener noreferrer" className="text-accent hover:underline">spineye.com</a>.
        </p>
      </div>
    </div>
  );
};

export default AuthorBox;
