import IssueCard from "./IssueCard";

export default function ResultCard({ data }) {
  const { riskLevel, score, issues } = data;

  // Dynamic risk styling
  const riskStyles = {
    Low: "text-green-400 border-green-400/30 bg-green-500/10",
    Medium: "text-yellow-400 border-yellow-400/30 bg-yellow-500/10",
    High: "text-red-400 border-red-400/30 bg-red-500/10",
  };

  const riskClass =
    riskStyles[riskLevel] || "text-gray-400 border-gray-400/20 bg-gray-500/10";

  return (
    <div className="flex flex-col gap-6">

      {/* HEADER */}
      <div className="flex items-center justify-between">
        
        <div>
          <p className="text-xs uppercase tracking-widest text-cyan-400 mb-1">
            Scan Results
          </p>

          <h2 className="text-xl font-semibold text-white">
            Vulnerability Assessment
          </h2>

          <p className="text-sm text-gray-400 mt-1">
            Risk level detected:{" "}
            <span className="text-white font-medium">{riskLevel}</span>
          </p>
        </div>

        {/* RISK BADGE */}
        <div
          className={`px-4 py-2 rounded-full text-xs font-semibold border ${riskClass}`}
        >
          {riskLevel}
        </div>
      </div>

      {/* STATS */}
      <div className="grid grid-cols-2 gap-4">
        
        {/* SCORE */}
        <div className="bg-[#020617] border border-cyan-500/20 rounded-lg p-4 
                        shadow-[0_0_15px_rgba(6,182,212,0.08)]">
          <p className="text-xs text-gray-400 mb-1">Security Score</p>
          <p className="text-2xl font-bold text-cyan-400">{score}</p>
          <p className="text-xs text-gray-500">out of 100</p>
        </div>

        {/* ISSUES */}
        <div className="bg-[#020617] border border-red-500/20 rounded-lg p-4 
                        shadow-[0_0_15px_rgba(239,68,68,0.08)]">
          <p className="text-xs text-gray-400 mb-1">Detected Issues</p>
          <p className="text-2xl font-bold text-red-400">{issues.length}</p>
          <p className="text-xs text-gray-500">vulnerabilities found</p>
        </div>
      </div>

      {/* ISSUES LIST */}
      <div>
        <h3 className="text-sm font-semibold text-white mb-3 border-b border-gray-700 pb-2">
          Vulnerability Details
        </h3>

        <div className="flex flex-col gap-5  overflow-y-auto pr-2
                        scrollbar-thin scrollbar-thumb-gray-700 scrollbar-track-transparent">
          {issues.length > 0 ? (
            issues.map((issue, index) => (
              <IssueCard key={index} issue={issue} />
            ))
          ) : (
            <p className="text-sm text-green-400">
              No vulnerabilities detected. System looks clean.
            </p>
          )}
        </div>
      </div>
    </div>
  );
}