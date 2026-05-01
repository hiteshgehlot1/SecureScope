import { useState } from "react";

export default function ScanForm({ setResult }) {
  const [targetUrl, setTargetUrl] = useState("");
  const [isScanning, setIsScanning] = useState(false);
  const [scanError, setScanError] = useState("");

  const handleScan = async () => {
    if (!targetUrl.trim()) {
      setScanError("Please enter a URL.");
      return;
    }

    setScanError("");
    setIsScanning(true);
    setResult(null);

    try {
      const res = await fetch("http://localhost:5000/api/scan", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ url: targetUrl }),
      });

      const data = await res.json();
      if (!res.ok) {
        const message = data?.error || "Scan failed. Please try again.";
        setScanError(message);
      } else {
        setResult(data);
      }
    } catch (error) {
      console.error("Scan error:", error);
      setScanError("Scan failed. Check backend server or network.");
    }

    setIsScanning(false);
  };

  return (
    <div className="flex flex-col gap-5">

      {/* INPUT */}
      <div className="flex flex-col gap-2">
        <label className="text-xs uppercase tracking-widest text-green-400">
          Target URL
        </label>

        <input
          type="text"
          placeholder="https://example.com"
          value={targetUrl}
          onChange={(e) => setTargetUrl(e.target.value)}
          className="bg-[#020617] border border-green-500/20 rounded-lg px-4 py-3 text-sm text-gray-200 
                     placeholder-gray-500 outline-none
                     focus:border-green-400 focus:ring-1 focus:ring-green-400
                     transition-all duration-200"
        />
      </div>

      {/* BUTTON */}
      <button
        onClick={handleScan}
        disabled={isScanning}
        className={`relative overflow-hidden rounded-lg px-4 py-3 text-sm font-medium transition-all duration-300
        ${
          isScanning
            ? "bg-green-500/20 text-green-300 cursor-not-allowed"
            : "bg-green-500/10 text-green-400 border border-green-400/30 hover:bg-green-500/20 hover:shadow-[0_0_15px_rgba(34,197,94,0.4)]"
        }`}
      >
        {isScanning ? (
          <span className="flex items-center justify-center gap-2">
            
            {/* SPINNER */}
            <span className="w-4 h-4 border-2 border-green-400 border-t-transparent rounded-full animate-spin"></span>
            
            Scanning...
          </span>
        ) : (
          "Start Security Scan"
        )}
      </button>

      {/* STATUS TEXT */}
      {isScanning && (
        <p className="text-xs text-green-400 animate-pulse">
          Analysing target security layers...
        </p>
      )}

      {/* ERROR */}
      {scanError && (
        <p className="text-xs text-red-400 bg-red-500/10 border border-red-500/20 rounded-md px-3 py-2">
          {scanError}
        </p>
      )}
    </div>
  );
}