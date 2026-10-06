const { version } = require("./package.json");

/** @type {import('next').NextConfig} */

const nextConfig = {
  output: "standalone",

  env: {
    NEXT_PUBLIC_APP_VERSION: version,
    NEXT_PUBLIC_RECAPTCHA_SITE_KEY:
    process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY ||
    process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY_TEST,
    NEXT_PUBLIC_GA_ID: process.env.NEXT_PUBLIC_GA_ID,
    NEXT_PUBLIC_GOOGLE_MAPS_API_KEY:
      process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY,
    NEXT_PUBLIC_ADPLUGG_ACCESS_CODE:
      process.env.NEXT_PUBLIC_ADPLUGG_ACCESS_CODE,
  },

  productionBrowserSourceMaps: false,
  reactStrictMode: false,

  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**",
      },
      {
        protocol: "http",
        hostname: "**",
      },
    ],
  },
};

module.exports = nextConfig;
