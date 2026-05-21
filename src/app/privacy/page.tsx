import React from "react";

export default function PrivacyPolicyPage() {
  return (
    <div className="bg-black text-zinc-300 min-h-screen font-sans selection:bg-zinc-800 overflow-x-hidden">
      
      {/* Header Banner */}
      <header className="max-w-4xl w-full mx-auto px-6 py-5 md:py-16 border-b border-zinc-900">
        <a 
          href="/" 
          className="inline-flex items-center text-xs font-mono uppercase tracking-wider text-zinc-500 hover:text-amber-400 transition-colors gap-2 mb-6"
        >
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-3 h-3">
            <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
          </svg>
          Back to home
        </a>
        <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-white mb-3">
          Privacy Policy
        </h1>
        <p className="text-zinc-500 text-sm font-mono">
          Last Updated: May 21, 2026
        </p>
      </header>

      {/* Policy Content Body */}
      <main className="max-w-4xl w-full mx-auto px-6 py-5 md:py-16 space-y-12">
        
        {/* Introduction */}
        <section className="space-y-4">
          <p className="text-zinc-400 leading-relaxed">
            Your privacy is of paramount importance to our studio. This Privacy Policy outlines how we collect, utilize, and safeguard the data you provide when customizing trophies, booking studio photography sessions, commissioning bespoke frames, or using our automated communication links.
          </p>
        </section>

        {/* Section 1 */}
        <section className="space-y-3">
          <h2 className="text-xl font-bold text-white tracking-wide flex items-center gap-3">
            <span className="text-xs font-mono text-amber-500">01</span> Information We Collect
          </h2>
          <div className="h-[1px] bg-zinc-900 w-full" />
          <p className="text-sm text-zinc-400 leading-relaxed">
            We collect personal information necessary to execute your custom manufacturing orders and bookings. This includes:
          </p>
          <ul className="list-disc pl-5 text-sm text-zinc-400 space-y-1">
            <li><strong className="text-zinc-200">Identity Data:</strong> Full name, company names, and title variations.</li>
            <li><strong className="text-zinc-200">Contact Details:</strong> Email addresses, telephone numbers, and shipping/billing addresses.</li>
            <li><strong className="text-zinc-200">Custom Content:</strong> Specific text configurations, corporate logos, dates, and spelling templates intended for trophy engraving or custom gift frames.</li>
          </ul>
        </section>

        {/* Section 2 */}
        <section className="space-y-3">
          <h2 className="text-xl font-bold text-white tracking-wide flex items-center gap-3">
            <span className="text-xs font-mono text-amber-500">02</span> Photography Assets & Media Storage
          </h2>
          <div className="h-[1px] bg-zinc-900 w-full" />
          <p className="text-sm text-zinc-400 leading-relaxed">
            Digital images captured during private studio portraits, corporate galas, or sports podium events are classified as sensitive client assets. We securely archive high-resolution master copies within localized, encrypted data banks to facilitate future print requests or frame adjustments. We never sell, distribute, or leverage client imagery for marketing displays without explicit written consent.
          </p>
        </section>

        {/* Section 3 */}
        <section className="space-y-3">
          <h2 className="text-xl font-bold text-white tracking-wide flex items-center gap-3">
            <span className="text-xs font-mono text-amber-500">03</span> WhatsApp & Data Redirection
          </h2>
          <div className="h-[1px] bg-zinc-900 w-full" />
          <p className="text-sm text-zinc-400 leading-relaxed">
            When you interact with our inquiry inputs, your form text strings are bundled and routed directly to WhatsApp via an external URL. Once on WhatsApp, your chat communication falls under the distinct security protocols managed by Meta Platforms, Inc. We utilize this text transit pipeline strictly to fulfill design consultations and complete processing orders efficiently.
          </p>
        </section>

        {/* Section 4 */}
        <section className="space-y-3">
          <h2 className="text-xl font-bold text-white tracking-wide flex items-center gap-3">
            <span className="text-xs font-mono text-amber-500">04</span> Third-Party Disclosure
          </h2>
          <div className="h-[1px] bg-zinc-900 w-full" />
          <p className="text-sm text-zinc-400 leading-relaxed">
            We do not sell, trade, or transfer your personal metrics or design properties to outside marketing aggregators. This excludes verified, trusted logistics partners (such as courier services delivering physical award packages) who agree to keep your destination endpoints strictly confidential.
          </p>
        </section>

        {/* Section 5 */}
        <section className="space-y-3">
          <h2 className="text-xl font-bold text-white tracking-wide flex items-center gap-3">
            <span className="text-xs font-mono text-amber-500">05</span> Data Preservation & Retention
          </h2>
          <div className="h-[1px] bg-zinc-900 w-full" />
          <p className="text-sm text-zinc-400 leading-relaxed">
            We retain your invoice histories, custom engraving measurements, and frame sizes for as long as required to handle ongoing repeat orders and client consultations. You possess the legal right to request complete erasure of your electronic contact profiles from our database at any time by messaging our support portal.
          </p>
        </section>

        {/* Footer Note */}
        <footer className="pt-8 border-t border-zinc-900 text-xs text-zinc-600 text-center">
          For precise inquiries regarding data protections or digital image storage, please submit a direct support message.
        </footer>

      </main>

    </div>
  );
}