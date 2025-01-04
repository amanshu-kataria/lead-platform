import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn.prod.website-files.com",
        port: "",
        pathname:
          "/656ddb1f77f5af1d193d7150/656ddd16e17e0d8eed192bed_Group%2037.png",
        search: "",
      },
    ],
  },
  async redirects() {
    return [
      {
        source: "/",
        destination: "/new-lead",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
