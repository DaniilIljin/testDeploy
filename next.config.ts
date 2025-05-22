import type { NextConfig } from "next";

const isGithubPages = process.env.NODE_ENV === "production";

const nextConfig: NextConfig = {
  output: "export",
  basePath: isGithubPages ? "/testDeploy" : "",
  trailingSlash: true,
};

export default nextConfig;