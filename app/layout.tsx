import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

import Navbar from "./components/Navbar";
import { ThemeProvider } from "./components/theme-provider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

/* ---------------------------------------------
   SEO METADATA
----------------------------------------------*/
export const metadata: Metadata = {
  metadataBase: new URL("https://mysteelindia.in"),

  title: {
    default: "MySteel India – Trusted Steel & Scrap Supplier",
    template: "%s | MySteel India",
  },

  description:
    "MySteel India is a trusted buyer and supplier of iron, copper, aluminium, steel and plastic scrap across India. Reliable logistics, competitive pricing and consistent quality.",

 keywords: [
  "steel scrap supplier india",
  "steel scrap supplier kerala",
  "scrap metal supplier india",
  "scrap metal supplier kerala",
  "metal scrap buyer india",
  "metal scrap buyer kerala",
  "iron scrap supplier india",
  "iron scrap supplier kerala",
  "copper scrap buyer india",
  "copper scrap buyer kerala",
  "aluminium scrap supplier india",
  "aluminium scrap supplier kerala",
  "plastic scrap supplier india",
  "plastic scrap supplier kerala",
  "steel scrap dealer india",
  "steel scrap dealer kerala",
  "industrial scrap supplier india",
  "industrial scrap supplier kerala",
  "scrap metal recycling india",
  "scrap metal recycling kerala",
  "mysteel india",
  "steel scrap supplier kochi",
  "scrap metal buyer kochi",
  "metal scrap supplier kochi"
],

  openGraph: {
    title: "MySteel India – Steel & Scrap Supplier",
    description:
      "Trusted supplier of iron, copper, aluminium, steel and plastic scrap across India.",
    url: "https://mysteelindia.in",
    siteName: "MySteel India",
    images: [
      {
        url: "https://mysteelindia.in/og-image.png",
        width: 1200,
        height: 630,
        alt: "MySteel India Scrap Supplier",
      },
    ],
    locale: "en_IN",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "MySteel India – Steel Scrap Supplier",
    description:
      "Reliable supplier of steel, copper, aluminium and plastic scrap across India.",
    images: ["https://mysteelindia.in/og-image.png"],
  },

  alternates: {
    canonical: "https://mysteelindia.in",
  },

  robots: {
    index: true,
    follow: true,
  },
};

/* ---------------------------------------------
   ROOT LAYOUT
----------------------------------------------*/

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {/* Favicon */}
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="shortcut icon" href="/favicon.ico" />
         <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />

        {/* Structured Data */}

        {/* Website */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              name: "MySteel India",
              url: "https://mysteelindia.in",
              description:
                "Trusted buyer and supplier of steel, copper, aluminium and plastic scrap in India.",
            }),
          }}
        />

        {/* Organization */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "MySteel India",
              url: "https://mysteelindia.in",
              logo: "https://mysteelindia.in/logo.png",
              sameAs: [
                "https://www.instagram.com/",
                "https://www.linkedin.com/",
              ],
            }),
          }}
        />

        {/* Local Business */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              name: "MySteel India",
              image: "https://mysteelindia.in/logo.png",
              url: "https://mysteelindia.in",
              telephone: "+91-9895122441 ",
              address: {
                "@type": "PostalAddress",
                addressCountry: "IN",
                addressLocality: "Kochi",
                addressRegion: "Kerala",
 
              },
              description:
                "Supplier and buyer of steel, iron, copper, aluminium and plastic scrap across India.",
            }),
          }}
        />

        {/* FAQ Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "FAQPage",
              mainEntity: [
                {
                  "@type": "Question",
                  name: "What materials does MySteel India supply?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "We supply iron, copper, aluminium, plastic and steel scrap across India.",
                  },
                },
                {
                  "@type": "Question",
                  name: "Do you supply scrap materials across India?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Yes, MySteel India provides scrap materials with reliable logistics across India.",
                  },
                },
                {
                  "@type": "Question",
                  name: "Does MySteel India buy scrap materials?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Yes, we buy industrial and commercial scrap materials at competitive prices.",
                  },
                },
              ],
            }),
          }}
        />
      </head>

      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          <Navbar />
          <main>{children}</main>
        </ThemeProvider>
      </body>
    </html>
  );
}