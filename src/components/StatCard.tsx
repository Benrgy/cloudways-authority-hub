import { useRef, useEffect, useState } from "react";

interface StatCardProps {
  value: string;
  label: string;
}

const StatCard = ({ value, label }: StatCardProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.3 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`bg-card rounded-lg p-6 border-l-4 border-l-accent shadow-sm transition-all duration-600 ${
        visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
      }`}
    >
      <div className="font-mono text-4xl md:text-5xl font-bold text-foreground">{value}</div>
      <div className="text-muted-foreground font-body mt-2 text-sm">{label}</div>
    </div>
  );
};

export default StatCard;
