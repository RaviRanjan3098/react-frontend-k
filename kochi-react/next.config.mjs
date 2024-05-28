/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
          {
            protocol: "https",
            hostname: "upload.wikimedia.org",
            port: "",
          },
          {
            protocol: "https",
            hostname: "img.freepik.com",
            port: "",
          },
          {
            protocol: "https",
            hostname: "media.gettyimages.com",
            port: "",
          },
          {
            protocol: "https",
            hostname: "previews.123rf.com",
            port: "",
          },
          {
            protocol: "https",
            hostname: "cdn-icons-png.flaticon.com",
            port: "",
          },
          {
            protocol: "https",
            hostname: "static.vecteezy.com",
            port: "",
          },
          {
            protocol: "https",
            hostname: "cdn.icon-icons.com",
            port: "",
          },
          {
            protocol: "https",
            hostname: "cdn3.iconfinder.com",
            port: "",
          },
          
        ],
      },
};

export default nextConfig;
