import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Shailesh Sainee | MERN Stack Developer Portfolio",
  description: "I'm Shailesh Sainee, a MERN Stack Developer with experience in React, Node.js, and MongoDB. Explore my portfolio, projects, and skills.",
  keywords: [
    "Shailesh Sainee",
    "MERN Stack Developer",
    "React Developer",
    "Node.js",
    "MongoDB",
    "JavaScript",
    "Full Stack Developer",
    "Portfolio"
  ],
  authors: [{ name: "Shailesh Sainee" }],
  creator: "Shailesh Sainee",
  openGraph: {
    title: "Shailesh Sainee | MERN Stack Developer Portfolio",
    description: "Check out my latest projects, skills, and experience as a full-stack developer.",
    icons: {
      icon: [
        { url: "/favicon.ico" },
        { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
        { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" }
      ],
      apple: "/apple-touch-icon.png"
    },
    url: "https://saineeshailesh1007.vercel.app/",
    siteName: "Shailesh Sainee Portfolio",
    locale: "en_US",
    type: "website",
  },
};


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
