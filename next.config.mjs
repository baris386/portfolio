/** @type {import('next').NextConfig} */
const nextConfig = {
  // --- ADD THIS LINE ---
  output: 'export',
  
  // --- ADD THIS LINE ---
  // The 'portfolio' is your repository name, which acts as the subdirectory
  // for your GitHub Pages URL (https://baris386.github.io/portfolio)
  basePath: '/portfolio', 

  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
}

export default nextConfig
