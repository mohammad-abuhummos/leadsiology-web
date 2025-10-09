import { Geist, Geist_Mono, Poppins } from "next/font/google";
import { PhoneIcon } from "@heroicons/react/24/solid";
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
  title:
    "Leadsiology - Premium Lead Generation for Home Improvement Contractors",
  description:
    "Get exclusive, high-converting leads for your home improvement business. 100% exclusive leads, real-time delivery, 92% success rate. Trusted by 500+ contractors nationwide.",
  keywords: [
    "home improvement leads",
    "contractor leads",
    "bathroom remodeling leads",
    "roofing contractor leads",
    "HVAC leads",
    "solar installation leads",
    "exclusive leads",
    "lead generation",
    "home improvement marketing",
    "contractor marketing",
    "qualified leads",
    "real-time leads",
  ].join(", "),
  authors: [{ name: "Leadsiology" }],
  creator: "Leadsiology",
  publisher: "Leadsiology",
  robots: "index, follow",
  canonical: "https://leadsiology.com",

  // Open Graph / Facebook
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://leadsiology.com",
    title:
      "Leadsiology - Premium Lead Generation for Home Improvement Contractors",
    description:
      "Get exclusive, high-converting leads for your home improvement business. 100% exclusive leads delivered in real-time with 92% success rate.",
    siteName: "Leadsiology",
    images: [
      {
        url: "/logo-dark.svg",
        width: 1200,
        height: 630,
        alt: "Leadsiology - Premium Lead Generation",
      },
    ],
  },

  // Twitter
  twitter: {
    card: "summary_large_image",
    title:
      "Leadsiology - Premium Lead Generation for Home Improvement Contractors",
    description:
      "Get exclusive, high-converting leads for your home improvement business. 100% exclusive leads delivered in real-time.",
    images: ["/logo-dark.svg"],
    creator: "@leadsiology",
    site: "@leadsiology",
  },

  // Additional meta tags
  other: {
    "theme-color": "#0062FF",
    "color-scheme": "light",
    "apple-mobile-web-app-capable": "yes",
    "apple-mobile-web-app-status-bar-style": "default",
    "apple-mobile-web-app-title": "Leadsiology",
    "application-name": "Leadsiology",
    "msapplication-TileColor": "#0062FF",
    "msapplication-config": "/browserconfig.xml",
  },

  // Verification tags (you can add these when you get them)
  verification: {
    google: "your-google-site-verification-code",
    yandex: "your-yandex-verification-code",
    yahoo: "your-yahoo-site-verification-code",
    other: {
      "facebook-domain-verification": "your-facebook-domain-verification-code",
    },
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
        {/* Floating Call Button - visible on all pages */}
        <a
          href="tel:+18108670991"
          aria-label="Call +1 (810) 867-0991"
          className="fixed bottom-6 right-6 z-50 inline-flex items-center justify-center w-14 h-14 rounded-full bg-blue-600 text-white shadow-xl hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-600"
        >
          <PhoneIcon className="w-6 h-6" />
        </a>
      </body>
    </html>
  );
}
