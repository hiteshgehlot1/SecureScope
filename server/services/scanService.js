const axios = require("axios");
const httpsCheck = require("./httpsCheck");
const headerCheck = require("./headerCheck");

async function runScan(url) {
  let issues = [];

  if (!url.startsWith("http")) {
    url = "https://" + url;
  }

  let response;

  try {
    response = await axios.get(url, {
      timeout: 5000,
      validateStatus: () => true
    });
  } catch {
    return {
      score: 0,
      riskLevel: "High",
      issues: [{
        name: "Website not reachable",
        risk: "High",
        owasp: "A05: Security Misconfiguration",
        fix: "Ensure website is accessible"
      }]
    };
  }

  const headers = response.headers;

  issues.push(...httpsCheck(url));
  issues.push(...headerCheck(headers));

  // scoring
  let score = 100;

  issues.forEach(issue => {
    if (issue.risk === "High") score -= 30;
    if (issue.risk === "Medium") score -= 15;
    if (issue.risk === "Low") score -= 5;
  });

  score = Math.max(score, 0);

  let riskLevel =
    score > 80 ? "Low" :
    score > 50 ? "Medium" : "High";

  return { score, riskLevel, issues };
}

module.exports = { runScan };
