/**
 * @type {import('next').NextConfig}
 */
const { imageOptimizer } = require("next/dist/server/image-optimizer");
const path = require("path");
const nextConfig = {
  output: "export",
  distDir: "dist",
  images: {
    unoptimized: true,
  },
  webpack(config) {
    config.resolve.alias["@components"] = path.join(__dirname, "components");
    return config;
  },
};

module.exports = nextConfig;
