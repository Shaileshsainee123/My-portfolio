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

  // ✅ New Added
  robots: { index: true, follow: true },
  alternates: {
    canonical: "https://saineeshailesh1007.vercel.app/",
  },

  openGraph: {
    title: "Shailesh Sainee | MERN Stack Developer Portfolio",
    description: "Check out my latest projects, skills, and experience as a full-stack developer.",
    verification: {
      google: "f8DG0hSmxg-b5YQngZZ5HZ5_u5wSnz3J3GPEsqWzCWc",
    },
    url: "https://saineeshailesh1007.vercel.app/",
    siteName: "Shailesh Sainee Portfolio",
    locale: "en_US",
    type: "website",
    images: ["/favicon/apple-touch-icon.png"],
  },

  twitter: {
    card: "summary_large_image",
    title: "Shailesh Sainee | MERN Stack Developer Portfolio",
    description: "I'm Shailesh Sainee, a MERN Stack Developer. Explore my projects, skills, and experience.",
    creator: "@shailesh", // optional
    images: ["/favicon/apple-touch-icon.png"],
  },

  icons: {
    icon: [
      { url: "/favicon/favicon.ico" },
      { url: "/favicon/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon/favicon-16x16.png", sizes: "16x16", type: "image/png" }
    ],
    apple: "/favicon/apple-touch-icon.png"
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
