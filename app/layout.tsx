import "./globals.css";
import { Outfit, Rajdhani } from "next/font/google";
import localFont from "next/font/local";
import ReactLenis from "lenis/react";
const myFont = localFont({
  src: "./ClashGrotesk-Variable.ttf",
  variable: "--font-Clash", // define the CSS variable
  display: "swap",
  weight: "100 900",
});

const outfit = Outfit({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-outfit",
});

const rajdhani = Rajdhani({
  weight: ["300", "400", "500", "600", "700"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-rajdhani",
});

export const metadata = {
  title: "Steady core ?",
  description: "Meaw",
  icons: {
    icon: "/dark-nb.svg", // Path relative to the public directory
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={myFont.className}>
      <body
        className={`bg-background ${myFont.className} ${rajdhani.variable} ${outfit.variable} antialiased`}
      >
        {" "}
        <ReactLenis root>
          {/* Sticky background */}

          {children}
        </ReactLenis>{" "}
      </body>
    </html>
  );
}
