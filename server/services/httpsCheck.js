function httpsCheck(url) {
  let issues = [];

  if (!url.startsWith("https")) {
    issues.push({
      name: "HTTPS not enabled",
      risk: "High",
      owasp: "A02: Cryptographic Failures",
      fix: "Enable HTTPS with SSL certificate"
    });
  }

  return issues;
}

module.exports = httpsCheck;


