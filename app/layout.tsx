// this is the root layout, you can change fontFamily globally here.

import localFont from "next/font/local";
import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";
import type { Metadata } from "next";
import "./globals.css";

const outfit = localFont({
  src: "../public/fonts/Outfit-Regular.ttf",
  variable: "--font-outfit",
});

const ArchiaBold = localFont({
  src: "../public/fonts/archia-bold-webfont.woff2",
  variable: "--font-archia-bold",
});

export const metadata: Metadata = {
  title: "Mohammad S.",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const menu = [
    {
      name: "Home",
      offsetY: 0,
    },
    {
      name: "About",
      offsetY: 600,
    },
    {
      name: "Experience",
      offsetY: 1600,
    },
    {
      name: "Projects",
      offsetY: 2400,
    },
  ];

  return (
    <html lang="en">
      <body
        className={`${outfit.variable} ${ArchiaBold.variable}`}
        suppressHydrationWarning
      >
        <Navbar
          title="Ibnu batutah."
          data={menu}
        />
        <div className="">{children}</div>
        <Footer
          sm={[
            {
              icon: "mdi:github",
              link: "https://github.com/mohammad-sahrullah",
            },
            {
              icon: "mdi:linkedin",
              link: "https://www.linkedin.com/in/mohammad-sahrullah/",
            },
            {
              icon: "mdi:instagram",
              link: "https://www.instagram.com/mohammad_sahrullah/",
            },
            {
              icon: "mdi:gmail",
              link: "https://www.facebook.com/mohammad.sahrullah.9/",
            },
          ]}
        />
      </body>
    </html>
  );
}
