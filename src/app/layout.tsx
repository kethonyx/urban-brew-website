import type { Metadata } from "next";
import "./globals.css";
import { Inter, Playfair_Display } from "next/font/google";
import Script from "next/script";
import { ReactNode } from "react";
import { ThemeProvider } from "@/components/theme/ThemeProvider";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap"
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap"
});

export const metadata: Metadata = {
  title: "Urban Brew | Modern Café in the Heart of the City",
  description:
    "Urban Brew is a modern café serving specialty coffee, artisanal pastries, and all-day brunch in a warm, minimal space.",
  metadataBase: new URL("https://www.urbanbrew.example"),
  openGraph: {
    title: "Urban Brew | Modern Café",
    description:
      "Specialty coffee, slow mornings, and warm interiors. Visit Urban Brew in the heart of the city.",
    url: "https://www.urbanbrew.example",
    siteName: "Urban Brew",
    images: [
      {
        url: "/images/og-urban-brew.jpg",
        width: 1200,
        height: 630,
        alt: "Interior of Urban Brew café with warm lighting and modern design"
      }
    ],
    locale: "en_US",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "Urban Brew | Modern Café",
    description:
      "Specialty coffee, slow mornings, and warm interiors. Visit Urban Brew in the heart of the city.",
    images: ["/images/og-urban-brew.jpg"]
  }
};

export default function RootLayout({ children }: { children: ReactNode }) {
  const localBusinessJsonLd = {
    "@context": "https://schema.org",
    "@type": "CafeOrCoffeeShop",
    name: "Urban Brew",
    image: "https://www.urbanbrew.example/images/og-urban-brew.jpg",
    "@id": "https://www.urbanbrew.example",
    url: "https://www.urbanbrew.example",
    telephone: "+1-555-0123-456",
    address: {
      "@type": "PostalAddress",
      streetAddress: "123 Brew Lane",
      addressLocality: "Urbanville",
      addressRegion: "CA",
      postalCode: "94110",
      addressCountry: "US"
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 37.7749,
      longitude: -122.4194
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
          "Sunday"
        ],
        opens: "07:30",
        closes: "20:00"
      }
    ],
    servesCuisine: ["Coffee", "Brunch", "Bakery"],
    priceRange: "$$"
  };

  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <Script
          id="urban-brew-jsonld"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessJsonLd) }}
        />
      </head>
      <body className={`${inter.variable} ${playfair.variable} font-sans`}>
        <ThemeProvider>
          <div className="flex min-h-screen flex-col bg-gradient-to-b from-cream-50 via-cream-100 to-cream-200 dark:from-black dark:via-black dark:to-black">
            <Navbar />
            <main className="flex-1">{children}</main>
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}

