import type { NextConfig } from "next"; 
 
const nextConfig: NextConfig = { 
  async rewrites() { 
    return { 
      beforeFiles: [{ source: "/", destination: "/index.html" }], 
    }; 
  }, 
}; 
 
export default nextConfig; 
