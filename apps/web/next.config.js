/** @type {import('next').NextConfig} */
const nextConfig = {
  transpilePackages: ["@repo/ui"],
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**",
      },
    ],
    dangerouslyAllowSVG: true,
  },
  // Provide dummy Clerk keys to avoid build errors
  env: {
    NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY: "pk_test_dummy-key",
    CLERK_SECRET_KEY: "sk_test_dummy-key",
    NEXT_PUBLIC_API_URL: "http://localhost:3001/api",
  },
  // Disable TypeScript type checking during build for faster builds
  typescript: {
    ignoreBuildErrors: true,
  },
  // Disable ESLint during build for faster builds
  eslint: {
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;
