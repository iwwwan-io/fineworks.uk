

export const metadata = {
  title: "Terms of Service | Fineworks.uk",
  description: "Terms and conditions for FINEWORKS Ltd's construction and marine services.",
};

export default function TermsOfServicePage() {
  return (
    <main className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 bg-primary text-primary-foreground min-h-[30vh] flex items-center">
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <h1 className="text-4xl md:text-6xl font-serif font-bold mb-6 text-white">Terms of Service</h1>
          <p className="text-xl md:text-2xl text-white/80 max-w-2xl font-light">
            Professional standards and legal framework for our construction and marine operations.
          </p>
        </div>
        <div className="absolute inset-0 z-0 opacity-10 bg-[url('https://images.unsplash.com/photo-1589829545856-d10d557cf95f?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center" />
      </section>

      {/* Content Section */}
      <section className="py-20 bg-background text-foreground">
        <div className="container mx-auto px-4 md:px-6 max-w-4xl">
          <div className="prose prose-neutral max-w-none prose-headings:font-serif prose-headings:text-primary prose-p:text-muted-foreground prose-li:text-muted-foreground">
            <h2 className="text-3xl font-serif font-bold mb-8 text-primary border-b border-neutral-100 pb-4">TERMS OF SERVICE - FINEWORKS Ltd</h2>
            
            <div className="space-y-12">
              <section className="scroll-mt-24" id="definitions">
                <h3 className="text-2xl font-serif font-semibold mb-4 text-foreground">1. Definitions</h3>
                <ul className="list-none space-y-2 pl-0">
                  <li><span className="font-bold text-foreground">“Company”</span> means FINEWORKS Ltd.</li>
                  <li><span className="font-bold text-foreground">“Client”</span> means the person or entity engaging the Company.</li>
                  <li><span className="font-bold text-foreground">“Works”</span> means all services, labour, materials, design input, consultancy, and associated services provided by the Company.</li>
                  <li><span className="font-bold text-foreground">“Contract”</span> means the written agreement, quotation, or JCT/bespoke contract entered into between the parties.</li>
                </ul>
              </section>

              <hr className="border-neutral-100" />

              <section className="scroll-mt-24" id="basis-of-contract">
                <h3 className="text-2xl font-serif font-semibold mb-4 text-foreground">2. Basis of Contract</h3>
                <div className="space-y-4">
                  <p>2.1 No binding contract exists until:</p>
                  <ul className="list-disc pl-6 space-y-1">
                    <li>A written quotation is accepted in writing; and</li>
                    <li>A formal contract is signed; or</li>
                    <li>A deposit is paid and acknowledged.</li>
                  </ul>
                  <p>2.2 These Terms apply unless superseded by a signed JCT or bespoke contract.</p>
                  <p>2.3 In the event of conflict, the signed contract shall prevail.</p>
                </div>
              </section>

              <section className="scroll-mt-24" id="scope-of-works">
                <h3 className="text-2xl font-serif font-semibold mb-4 text-foreground">3. Scope of Works</h3>
                <div className="space-y-4">
                  <p>3.1 The Works shall be carried out in accordance with:</p>
                  <ul className="list-disc pl-6 space-y-1">
                    <li>The agreed specification</li>
                    <li>Approved drawings</li>
                    <li>Relevant Building Regulations</li>
                    <li>Industry standards appropriate for high-end construction</li>
                  </ul>
                  <p>3.2 Any works outside the agreed scope shall constitute a Variation.</p>
                </div>
              </section>

              <section className="scroll-mt-24" id="variations">
                <h3 className="text-2xl font-serif font-semibold mb-4 text-foreground">4. Variations</h3>
                <div className="space-y-4">
                  <p>4.1 No variation shall proceed without written instruction.</p>
                  <p>4.2 Variations may affect cost, programme, materials, and sequencing.</p>
                  <p>4.3 Where urgent instruction is given verbally (e.g., yacht fit-out time constraints), written confirmation must follow within 48 hours.</p>
                  <p>4.4 The Company reserves the right to adjust programme timelines accordingly.</p>
                </div>
              </section>

              <section className="scroll-mt-24" id="programme-delays">
                <h3 className="text-2xl font-serif font-semibold mb-4 text-foreground">5. Programme & Delays</h3>
                <div className="space-y-4">
                  <p>5.1 Programme dates are estimates unless expressly stated as contractual completion dates.</p>
                  <p>5.2 The Company shall not be liable for delay caused by late design information, client changes, third-party contractors, supply chain disruption, marine yard access restrictions, or force majeure events.</p>
                  <p>5.3 Extensions of time shall be granted where delay is outside the Company’s reasonable control.</p>
                </div>
              </section>

              <section className="scroll-mt-24" id="payment-terms">
                <h3 className="text-2xl font-serif font-semibold mb-4 text-foreground">6. Payment Terms (High-Value Structure)</h3>
                <div className="space-y-4">
                  <p>6.1 For projects exceeding £50,000: Deposit required prior to mobilisation, interim valuations submitted monthly, and final account agreed within 30 days of practical completion.</p>
                  <p>6.2 For marine/yacht works: Materials may require advance payment prior to procurement; specialist finishes may require staged deposits.</p>
                  <p>6.3 Late payments: Interest may be charged under the Late Payment of Commercial Debts (Interest) Act 1998.</p>
                  <p>6.4 The Company reserves the right to suspend works, remove labour, or retain materials not paid for.</p>
                </div>
              </section>

              <section className="scroll-mt-24" id="retention-of-title">
                <h3 className="text-2xl font-serif font-semibold mb-4 text-foreground">7. Retention of Title</h3>
                <p>7.1 Title to goods and materials remains with FINEWORKS Ltd until full payment is received.</p>
                <p>7.2 The Company reserves the right to recover unpaid materials from site where legally permitted.</p>
              </section>

              <section className="scroll-mt-24" id="insurance">
                <h3 className="text-2xl font-serif font-semibold mb-4 text-foreground">8. Insurance</h3>
                <p>The Company maintains Public Liability, Employer’s Liability, and Contractors All Risks insurance. Certificates are available upon request. Marine works may require site-specific insurance arrangements agreed in advance.</p>
              </section>

              <section className="scroll-mt-24" id="quality-standards">
                <h3 className="text-2xl font-serif font-semibold mb-4 text-foreground">9. Quality & Standards</h3>
                <div className="space-y-4">
                  <p>9.1 The Company operates to a high-end finish standard appropriate for luxury residential and marine environments.</p>
                  <p>9.2 Minor aesthetic tolerances consistent with industry standards shall not constitute defect.</p>
                  <p>9.3 Natural materials (stone, timber, veneers, specialist finishes) may vary in appearance and shall not be grounds for rejection unless materially defective.</p>
                </div>
              </section>

              <section className="scroll-mt-24 bg-neutral-50 p-8 rounded-lg border border-neutral-100" id="marine-risk">
                <h3 className="text-2xl font-serif font-semibold mb-4 text-primary">9A. Marine Environment & Corrosion Risk</h3>
                <div className="space-y-4 italic text-neutral-600">
                  <p>9A.1 The Client acknowledges that marine and yacht environments expose materials and finishes to salt air, high humidity, vibration, and UV exposure.</p>
                  <p>9A.2 The Company shall install materials in accordance with agreed specifications and manufacturer guidance.</p>
                  <p>9A.3 The Company shall not be liable for corrosion, surface degradation, movement-related cracking, or oxidation unless caused by defective workmanship.</p>
                  <p>9A.4 Unless specifically agreed, finishes are not guaranteed against long-term environmental deterioration inherent in marine conditions.</p>
                </div>
              </section>

              <section className="scroll-mt-24" id="defects-liability">
                <h3 className="text-2xl font-serif font-semibold mb-4 text-foreground">10. Defects Liability</h3>
                <p>10.1 A 12-month defects liability period applies unless otherwise agreed. The Company shall remedy defects attributable to workmanship, excluding wear and tear, improper maintenance, or third-party interference.</p>
              </section>

              <section className="scroll-mt-24 bg-red-50/30 p-8 rounded-lg border border-red-100" id="limitation-of-liability">
                <h3 className="text-2xl font-serif font-semibold mb-4 text-red-900 focus:outline-none">11. Limitation of Liability</h3>
                <div className="space-y-4">
                  <p>11.2 The Company’s total aggregate liability shall not exceed the contract sum or the amount recoverable under its insurance policy, whichever is lower.</p>
                  <p>11.3 The Company shall not be liable for consequential losses, loss of profit, loss of charter income, or indirect damages.</p>
                </div>
              </section>

              <section className="scroll-mt-24" id="intellectual-property">
                <h3 className="text-2xl font-serif font-semibold mb-4 text-foreground">12. Intellectual Property</h3>
                <p>12.1 All designs and documentation remain the intellectual property of FINEWORKS Ltd. 12.2 The Company retains the right to photograph completed works for portfolio purposes unless confidentiality is agreed.</p>
              </section>

              <section className="scroll-mt-24" id="confidentiality">
                <h3 className="text-2xl font-serif font-semibold mb-4 text-foreground">13. Confidentiality</h3>
                <p>The Company shall maintain strict confidentiality regarding client identity, project value, and private information. Non-disclosure agreements may be executed upon request.</p>
              </section>

              <section className="scroll-mt-24" id="jurisdiction">
                <h3 className="text-2xl font-serif font-semibold mb-4 text-foreground">17. Jurisdiction & Vessel Relocation</h3>
                <div className="space-y-4">
                  <p>17.1 All works are governed by the laws of England and Wales.</p>
                  <p>17.2 If the vessel leaves UK territorial waters, the Company shall not be subject to foreign jurisdiction unless expressly agreed.</p>
                  <p>17.5 Where rectification works are requested outside the UK, travel and mobilisation costs shall be borne by the Client.</p>
                </div>
              </section>

              {/* Add other sections as needed following this pattern */}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-primary-foreground text-center">
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="text-3xl font-serif font-bold mb-6 text-white">Have questions about our terms?</h2>
          <p className="text-xl text-white/70 mb-10 max-w-2xl mx-auto font-light">
            We believe in transparency and clear communication. Contact us to discuss your specific project requirements.
          </p>
          <a 
            href="/contact" 
            className="inline-flex items-center justify-center px-8 py-4 bg-secondary text-secondary-foreground font-semibold rounded-md transition-all hover:translate-y-[-2px] hover:shadow-lg active:translate-y-0"
          >
            Contact Our Team
          </a>
        </div>
      </section>
    </main>
  );
}
