import { Roboto, Poppins, Oswald } from "next/font/google";
import "./globals.css";
import LayoutWrapper from "@/components/LayoutWrapper";
// import Social from "@/components/Landingpage/Social";

import Script from "next/script";
import WhatsAppSticky from "@/components/Landingpage/WhatsAppSticky";

// Roboto
const roboto = Roboto({
  variable: "--font-roboto",
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"],
});

// Poppins
const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"],
});

// Oswald
const oswald = Oswald({
  variable: "--font-oswald",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata = {
  title: "Airless Painting Machine Manufacturer | Vands Engineering",
  description:
    "Buy from a reliable airless painting machine manufacturer. Vands Engineering Solutions offers advanced technology, durability, and wholesale pricing.",
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.webp",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <Script
          id="gtm-init-k633jt9p"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());`,
          }}
        />
        <Script
          id="gtm-k633jt9p"
          src="https://www.googletagmanager.com/gtm.js?id=GTM-K633JT9P"
          strategy="afterInteractive"
        />
        <Script
          id="gtm-init-ps67rng3"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());`,
          }}
        />
        <Script
          id="gtm-ps67rng3"
          src="https://www.googletagmanager.com/gtm.js?id=GTM-PS67RNG3"
          strategy="afterInteractive"
        />
        <Script
          id="gtm-init-aw-17642911536"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());`,
          }}
        />
        <Script
          id="gtm-aw-17642911536"
          src="https://www.googletagmanager.com/gtm.js?id=AW-17642911536"
          strategy="afterInteractive"
        />
      </head>

      <body className={`${roboto.variable} ${poppins.variable} ${oswald.variable} antialiased`}>
        <LayoutWrapper>

          {children}
          <WhatsAppSticky />
        </LayoutWrapper>
      </body>

    </html>
  );
}