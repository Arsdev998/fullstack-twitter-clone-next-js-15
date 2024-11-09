/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        hostname: "i.pinimg.com",
      },
      {
        hostname: "avdgliwzexqzqmdphhul.supabase.co",
      },
    ],
  },
};


export default nextConfig;
