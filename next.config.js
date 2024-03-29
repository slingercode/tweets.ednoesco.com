/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["pbs.twimg.com"],
  },
  headers: async () => [
    {
      source: "/(.*)",
      headers: [
        // https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Strict-Transport-Security
        {
          key: "Strict-Transport-Security",
          value: "max-age=63072000; includeSubDomains; preload",
        },
        // https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Feature-Policy
        // Opt-out of Google FLoC: https://amifloced.org/
        {
          key: "Permissions-Policy",
          value: "camera=(), microphone=(), geolocation=(), interest-cohort=()",
        },
      ],
    },
  ],
};

module.exports = nextConfig;
