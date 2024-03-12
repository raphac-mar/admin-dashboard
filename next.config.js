/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "standalone",
  env: {
    NEXT_PUBLIC_VERSION_ENV: process.env.VERSION_ENV,
    NEXT_PUBLIC_BRANCH_ENV: process.env.BRANCH_ENV,
  },
};

module.exports = nextConfig;
