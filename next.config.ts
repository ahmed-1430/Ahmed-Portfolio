/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "skillicons.dev",
        port: "",
        pathname: "/icons**",
      },
      {
        protocol: "https",
        hostname: "api.iconify.design",
        port: "",
        pathname: "/**",
      }
    ],
  },
};

module.exports = nextConfig;
