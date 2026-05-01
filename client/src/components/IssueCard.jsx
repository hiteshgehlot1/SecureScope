export default function IssueCard({ issue }) {
  const { name, risk, owasp, fix } = issue;

  // Risk-based styling
  const riskStyles = {
    Low: "border-green-500/20 bg-green-500/5 text-green-400",
    Medium: "border-yellow-500/20 bg-yellow-500/5 text-yellow-400",
    High: "border-red-500/20 bg-red-500/5 text-red-400",
  };

  const riskClass =
    riskStyles[risk] || "border-gray-500/20 bg-gray-500/5 text-gray-400";

  return (
    <div
      className={`border rounded-lg p-4 transition-all duration-300 
      hover:shadow-[0_0_20px_rgba(255,255,255,0.05)] ${riskClass}`}
    >
      {/* HEADER */}
      <div className="flex items-start justify-between mb-3">
        
        <div>
          <h3 className="text-sm font-semibold text-white mb-1">
            {name}
          </h3>
          <p className="text-xs text-gray-400">
            {risk} Risk
          </p>
        </div>

        {/* OWASP TAG */}
        <span className="text-xs px-3 py-1 rounded-full border border-cyan-400/30 text-cyan-400 bg-cyan-500/10">
          {owasp}
        </span>
      </div>

      {/* DETAILS GRID */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
        
        {/* OWASP CATEGORY */}
        <div>
          <p className="text-[10px] uppercase tracking-widest text-gray-500 mb-1">
            OWASP Category
          </p>
          <p className="text-gray-300">{owasp}</p>
        </div>

        {/* FIX */}
        <div>
          <p className="text-[10px] uppercase tracking-widest text-gray-500 mb-1">
            Recommended Fix
          </p>
          <p className="text-gray-300">{fix}</p>
        </div>

      </div>
    </div>
  );
}