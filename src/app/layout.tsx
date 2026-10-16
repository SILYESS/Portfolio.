import type { Metadata } from "next";
import { Inter, Space_Grotesk, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { identity, SITE_URL } from "@/data/portfolio";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Ilyes Ahmed — Unity Game Programmer & VR/XR Developer",
    template: "%s | Ilyes Ahmed",
  },
  description:
    "Portfolio of Ilyes Ahmed, Unity game developer specializing in VR/XR, serious games, and multiplayer experiences. 20+ projects across medical VR therapy, cultural heritage, mobile games, and editor tooling. Open to Unity Development and Game Design roles worldwide.",
  keywords: [
    "Ilyes Ahmed",
    "Unity Developer",
    "Unity Programmer",
    "VR Developer",
    "XR Developer",
    "Game Programmer",
    "Serious Games",
    "Medical VR",
    "Multiplayer Unity",
    "Netcode for GameObjects",
    "Game Designer",
    "Tunisia game developer",
    "Portfolio",
  ],
  authors: [{ name: identity.name, url: SITE_URL }],
  creator: identity.name,
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Ilyes Ahmed — Unity Game Programmer & VR/XR Developer",
    description:
      "Unity game developer specializing in VR/XR, serious games, and multiplayer experiences — 20+ shipped projects across medical VR, cultural heritage, and mobile.",
    url: SITE_URL,
    siteName: "Ilyes Ahmed Portfolio",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Ilyes Ahmed — Unity Game Programmer & VR/XR Developer",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Ilyes Ahmed — Unity Game Programmer & VR/XR Developer",
    description:
      "Unity game developer specializing in VR/XR, serious games, and multiplayer experiences — 20+ shipped projects.",
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: identity.name,
  url: SITE_URL,
  image: `${SITE_URL}/assets/photos/ilyes_home_photo2.jpg`,
  email: `mailto:${identity.email}`,
  telephone: "+21629246536",
  jobTitle: "Unity Game Programmer & VR/XR Developer",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Hammam Sousse",
    addressCountry: "TN",
  },
  sameAs: [identity.linkedin, identity.github, identity.itch],
  knowsAbout: [
    "Unity 3D",
    "C#",
    "VR/XR Development",
    "Serious Games",
    "Multiplayer Game Development",
    "Game Design",
    "Netcode for GameObjects",
  ],
  knowsLanguage: ["Arabic", "French", "English"],
  alumniOf: [
    {
      "@type": "CollegeOrUniversity",
      name: "University of Carthage — ENSTAB",
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark" suppressHydrationWarning>
      <body
        className={`${inter.variable} ${spaceGrotesk.variable} ${jetbrainsMono.variable} font-sans antialiased bg-background text-foreground`}
      >
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
        />
        {children}
      </body>
    </html>
  );
}
