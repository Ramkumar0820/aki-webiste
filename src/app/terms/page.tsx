import React from "react";

export default function TermsPage() {
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
          Terms & Conditions
        </h1>
        <p className="text-zinc-500 text-sm font-mono">
          Last Updated: May 21, 2026
        </p>
      </header>

      {/* Terms Content Body */}
      <main className="max-w-4xl w-full mx-auto px-6 py-5 md:py-16 space-y-12">
        
        {/* Introduction */}
        <section className="space-y-4">
          <p className="text-zinc-400 leading-relaxed">
            Welcome to our studio website. These Terms and Conditions (&quot;Terms&quot;) govern your use of our digital platforms, custom product commissions, studio bookings, and workshop production services. By placing an order, initiating a consultation, or checking out via our automated channels, you agree to be bound by the protocols detailed below.
          </p>
        </section>

        {/* Section 1 */}
        <section className="space-y-3">
          <h2 className="text-xl font-bold text-white tracking-wide flex items-center gap-3">
            <span className="text-xs font-mono text-amber-500">01</span> Custom Trophy & Award Orders
          </h2>
          <div className="h-[1px] bg-zinc-900 w-full" />
          <p className="text-sm text-zinc-400 leading-relaxed">
            <strong className="text-zinc-200">Text Proofing Responsibility:</strong> We render text layouts, custom name logs, and graphic engravings exactly as they are submitted via our digital form entries or chat configurations. The ordering client assumes total liability for spelling inaccuracies, formatting design, date mismatches, and grammatical structural slips submitted in the project inquiry.
          </p>
          <p className="text-sm text-zinc-400 leading-relaxed">
            <strong className="text-zinc-200">Production Timeframes:</strong> Manufacturing speeds remain variable depending on design material availability (crystals, custom woods, polymers) and order volume. Estimated completion estimates represent targets and do not serve as legally binding delivery deadlines.
          </p>
        </section>

        {/* Section 2 */}
        <section className="space-y-3">
          <h2 className="text-xl font-bold text-white tracking-wide flex items-center gap-3">
            <span className="text-xs font-mono text-amber-500">02</span> Studio & Event Photography
          </h2>
          <div className="h-[1px] bg-zinc-900 w-full" />
          <p className="text-sm text-zinc-400 leading-relaxed">
            <strong className="text-zinc-200">Retainers and Booking Windows:</strong> Reserving private session times, live podium shoots, or operational tournament coverage requires a non-refundable upfront retainer fee to cleanly secure scheduling windows. Cancellations made less than 48 hours prior to live events forfeit this scheduling asset.
          </p>
          <p className="text-sm text-zinc-400 leading-relaxed">
            <strong className="text-zinc-200">Copyright & Asset Ownership:</strong> Unless explicitly restructured under a distinct commercial title release signed by our management, our studio retains the underlying primary copyrights to all captured visual raw media. Clients receive standard personal exhibition distribution licenses.
          </p>
        </section>

        {/* Section 3 */}
        <section className="space-y-3">
          <h2 className="text-xl font-bold text-white tracking-wide flex items-center gap-3">
            <span className="text-xs font-mono text-amber-500">03</span> Bespoke Custom Framing
          </h2>
          <div className="h-[1px] bg-zinc-900 w-full" />
          <p className="text-sm text-zinc-400 leading-relaxed">
            <strong className="text-zinc-200">Client Memorabilia Risk:</strong> While historical items, winning uniform pieces, professional jerseys, certificates, and unique artwork are curated with strict security guidelines, third-party routing and manual workshop handlings bear minimal inherent risks. Studio liability for any physical degradation occurring inside assembly zones remains bounded to the production cost of the standalone display frame.
          </p>
          <p className="text-sm text-zinc-400 leading-relaxed">
            <strong className="text-zinc-200">Textural Variance:</strong> Because framing inventories utilize handcrafted wood components and natural grains, subtle dimensional line shifts or variance anomalies are standard features of custom production.
          </p>
        </section>

        {/* Section 4 */}
        <section className="space-y-3">
          <h2 className="text-xl font-bold text-white tracking-wide flex items-center gap-3">
            <span className="text-xs font-mono text-amber-500">04</span> Checkout Routes & WhatsApp
          </h2>
          <div className="h-[1px] bg-zinc-900 w-full" />
          <p className="text-sm text-zinc-400 leading-relaxed">
            Submitting our data input grids instantly strings text values into external communication links. Final design acceptances, customized material pricing metrics, and explicit work confirmations logged inside WhatsApp chat configurations possess identical legal binding force as native store operations.
          </p>
        </section>

        {/* Section 5 */}
        <section className="space-y-3">
          <h2 className="text-xl font-bold text-white tracking-wide flex items-center gap-3">
            <span className="text-xs font-mono text-amber-500">05</span> Return Parameters & Exchanges
          </h2>
          <div className="h-[1px] bg-zinc-900 w-full" />
          <p className="text-sm text-zinc-400 leading-relaxed">
            Because our production relies entirely on custom measurements, permanent physical text engravings, and single-session event media assets, <strong className="text-zinc-200">all bespoke sales are strictly non-refundable</strong>. Store adjustments or manual remakes are executed exclusively when manufacturing defects deviate from confirmed specifications.
          </p>
        </section>

        {/* Footer Note inside the main block */}
        <footer className="pt-8 border-t border-zinc-900 text-xs text-zinc-600 text-center">
          If you have structural questions concerning these operational guidelines, please query our support desk before launching project builds.
        </footer>

      </main>

    </div>
  );
}