interface ComparisonTableProps {
  rows: {
    feature: string;
    cloudways: string;
    competitor: string;
    cloudwaysWins?: boolean;
  }[];
  competitorName: string;
}

const ComparisonTable = ({ rows, competitorName }: ComparisonTableProps) => (
  <div className="overflow-x-auto">
    <table className="w-full border-collapse">
      <thead>
        <tr className="border-b-2 border-border">
          <th className="text-left py-3 px-4 font-display font-semibold text-foreground text-sm">Feature</th>
          <th className="text-left py-3 px-4 font-display font-semibold text-sm">
            <span className="flex items-center gap-2 text-foreground">
              Cloudways
              <span className="text-xs bg-accent text-accent-foreground px-2 py-0.5 rounded-full font-body">Recommended</span>
            </span>
          </th>
          <th className="text-left py-3 px-4 font-display font-semibold text-foreground text-sm">{competitorName}</th>
        </tr>
      </thead>
      <tbody>
        {rows.map((row, i) => (
          <tr key={i} className="border-b border-border hover:bg-secondary/50 transition-colors">
            <td className="py-3 px-4 text-sm font-body text-muted-foreground">{row.feature}</td>
            <td className={`py-3 px-4 text-sm font-body ${row.cloudwaysWins ? "text-foreground font-semibold" : "text-muted-foreground"}`}>
              {row.cloudways}
            </td>
            <td className={`py-3 px-4 text-sm font-body ${!row.cloudwaysWins ? "text-foreground font-semibold" : "text-muted-foreground"}`}>
              {row.competitor}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
);

export default ComparisonTable;
