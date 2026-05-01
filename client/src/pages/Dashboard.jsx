import { useState } from "react";
import ScanForm from "../components/ScanForm";
import ResultCard from "../components/ResultCard";

export default function Dashboard() {
  const [result, setResult] = useState(null);

  return (
    <div className="min-h-screen bg-[#0a0f14] text-gray-200 px-6 py-8">
      
      {/* HEADER */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 mb-10">
        
        {/* LEFT */}
        <div>
          <p className="text-2xl font-bold  tracking-widest text-green-400 uppercase mb-2">
            Secure Scope
          </p>

          <h1 className="text-3xl md:text-4xl font-bold text-white mb-3">
            OWASP Security Scanner
          </h1>

          <p className="text-gray-400 max-w-xl">
            Scan web endpoints and uncover vulnerabilities with layered,
            real-time insights.
          </p>
        </div>

        {/* RIGHT STAT PANEL */}
        <div className="bg-[#0f1720] border border-green-500/20 rounded-xl p-6 shadow-[0_0_20px_rgba(34,197,94,0.1)]">
          <p className="text-xs text-gray-400 mb-1">
            Personal Security Lab
          </p>
          <p className="text-3xl font-bold text-green-400">ACTIVE</p>
          <span className="text-xs text-gray-500">
            Monitoring targets in real-time
          </span>
        </div>
      </div>

      {/* MAIN GRID */}
      <div className="grid md:grid-cols-1 gap-6">

        {/* SCAN PANEL */}
        <div className="bg-[#0f1720] border border-green-500/20 rounded-xl p-6 shadow-[0_0_25px_rgba(34,197,94,0.08)] backdrop-blur">
          
          <div className="mb-6">
            <p className="text-xs tracking-widest text-green-400 uppercase mb-2">
              Security Scanner
            </p>

            <h2 className="text-xl font-semibold text-white mb-1">
              Start Your Scan
            </h2>

            <p className="text-gray-400 text-sm">
              Enter your target URL and initiate deep security analysis.
            </p>
          </div>

          <ScanForm setResult={setResult} />
        </div>

        {/* RESULT PANEL */}
        <div className="bg-[#0f1720] border border-cyan-500/20 rounded-xl p-6 shadow-[0_0_25px_rgba(6,182,212,0.08)] backdrop-blur">
          
          {result ? (
            <ResultCard data={result} />
          ) : (
            <div className="flex flex-col items-center justify-center h-full text-center py-10">
              
              <p className="text-xs tracking-widest text-cyan-400 uppercase mb-2">
                No Data
              </p>

              <h3 className="text-lg font-semibold text-white mb-2">
                Awaiting Scan Results
              </h3>

              <p className="text-gray-500 text-sm max-w-sm">
                Run a scan to visualize detected vulnerabilities and risk levels.
              </p>
            </div>
          )}
        </div>

      </div>
    </div>
  );
}