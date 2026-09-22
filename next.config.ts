import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactCompiler: true,
  async redirects() {
    return [
      {
        source: "/:path*",
        has: [{ type: "host", value: "www.symbiosischile.com" }],
        destination: "https://symbiosischile.com/:path*",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
