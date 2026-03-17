function headerCheck(headers) {
  let issues = [];

  if (!headers["x-frame-options"]) {
    issues.push({
      name: "Missing X-Frame-Options",
      risk: "Medium",
      owasp: "A05: Security Misconfiguration",
      fix: "Add X-Frame-Options header"
    });
  }

  if (!headers["x-content-type-options"]) {
    issues.push({
      name: "Missing X-Content-Type-Options",
      risk: "Low",
      owasp: "A05: Security Misconfiguration",
      fix: "Add X-Content-Type-Options: nosniff"
    });
  }

  if (!headers["strict-transport-security"]) {
    issues.push({
      name: "Missing HSTS Header",
      risk: "Medium",
      owasp: "A02: Cryptographic Failures",
      fix: "Enable Strict-Transport-Security header"
    });
  }

  if (headers["server"]) {
    issues.push({
      name: "Server Information Disclosure",
      risk: "Low",
      owasp: "A05: Security Misconfiguration",
      fix: "Hide or mask server header"
    });
  }

  return issues;
}

module.exports = headerCheck;
