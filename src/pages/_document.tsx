import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en" className="scroll-smooth">
      <Head>
        {/* Favicon */}
        <link rel="icon" href="/favicon/favicon.ico" />
        <link rel="icon" href="/favicon/favicon.svg" type="image/svg+xml" />
        <link rel="icon" href="/favicon/favicon-96x96.png" type="image/png" sizes="96x96" />
        
        {/* Apple Touch Icon */}
        <link rel="apple-touch-icon" href="/favicon/apple-touch-icon.png" />
        
        {/* Web App Manifest */}
        <link rel="manifest" href="/favicon/site.webmanifest" />
        
        {/* Meta tags for PWA */}
        <meta name="theme-color" content="#18181b" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
        <meta name="apple-mobile-web-app-title" content="The Startup" />
        <meta name="mobile-web-app-capable" content="yes" />
        
        {/* SEO Meta Tags */}
        <meta name="description" content="The ultimate landing page template for your startup. A modern, responsive landing page built with Next.js, Tailwind CSS, and Framer Motion." />
        <meta name="keywords" content="startup, landing page, nextjs, tailwindcss, framer motion, react, template" />
        <meta name="author" content="Halim Putra" />
        
        {/* Open Graph */}
        <meta property="og:type" content="website" />
        <meta property="og:title" content="The Startup - Landing Page Template" />
        <meta property="og:description" content="The ultimate landing page template for your startup. A modern, responsive landing page built with Next.js, Tailwind CSS, and Framer Motion." />
        <meta property="og:image" content="/favicon/web-app-manifest-512x512.png" />
        
        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="The Startup - Landing Page Template" />
        <meta name="twitter:description" content="The ultimate landing page template for your startup. A modern, responsive landing page built with Next.js, Tailwind CSS, and Framer Motion." />
        <meta name="twitter:image" content="/favicon/web-app-manifest-512x512.png" />
      </Head>
      <body className="bg-zinc-950 text-zinc-200 selection:bg-zinc-600">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
