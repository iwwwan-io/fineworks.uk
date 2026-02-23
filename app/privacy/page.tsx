

export const metadata = {
  title: "Privacy Policy | Fineworks.uk",
  description: "Privacy Policy, Terms of Use, and Cookie Policy for Fineworks.uk.",
};

const sections = [
  { id: "privacy", title: "Privacy Policy" },
  { id: "terms-of-use", title: "Website Terms of Use" },
  { id: "cookies", title: "Cookie Policy" },
  { id: "disclaimer", title: "Website Disclaimer" },
];

export default function PrivacyPolicyPage() {
  return (
    <main className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 bg-primary text-primary-foreground min-h-[30vh] flex items-center">
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <h1 className="text-4xl md:text-6xl font-serif font-bold mb-6 text-white">Privacy & Legal</h1>
          <p className="text-xl md:text-2xl text-white/80 max-w-2xl font-light">
            How we manage your data and the terms governing our digital presence.
          </p>
        </div>
        <div className="absolute inset-0 z-0 opacity-10 bg-[url('https://images.unsplash.com/photo-1557597774-9d2739f85a76?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center" />
      </section>

      {/* Main Content with Navigation */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col lg:flex-row gap-16">
            
            {/* Sticky Sidebar Navigation */}
            <aside className="lg:w-1/4">
              <div className="sticky top-32 space-y-4">
                <h3 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground mb-6">Legal Documents</h3>
                <nav className="flex flex-col space-y-2">
                  {sections.map((section) => (
                    <a 
                      key={section.id} 
                      href={`#${section.id}`}
                      className="text-foreground/70 hover:text-primary hover:translate-x-1 transition-all py-2 border-l-2 border-transparent hover:border-primary pl-4 font-medium"
                    >
                      {section.title}
                    </a>
                  ))}
                </nav>
              </div>
            </aside>

            {/* Content Area */}
            <div className="lg:w-3/4 max-w-3xl prose prose-neutral max-w-none prose-headings:font-serif prose-headings:text-primary prose-p:text-muted-foreground prose-li:text-muted-foreground">
              
              {/* 1. PRIVACY POLICY */}
              <section id="privacy" className="scroll-mt-32 mb-24">
                <h2 className="text-3xl font-serif font-bold mb-8 text-primary border-b border-neutral-100 pb-4">1. Privacy Policy</h2>
                <div className="space-y-8">
                  <div>
                    <h3 className="text-xl font-serif font-semibold mb-4 text-foreground">1.1 Who We Are</h3>
                    <p>
                      FINEWORKS Ltd (“we”, “us”, “our”) is a company registered in England and Wales.
                    </p>
                    <ul className="list-none pl-0 space-y-1">
                      <li><span className="font-semibold text-foreground">Registered Office:</span> Unit 29, J B J Business Park Northampton Road, Blisworth, Northampton, United Kingdom, NN7 3DW</li>
                      <li><span className="font-semibold text-foreground">Company Number:</span> 17044028</li>
                      <li><span className="font-semibold text-foreground">Email:</span> info@fineworks.uk</li>
                    </ul>
                    <p className="mt-4">We are the data controller for the purposes of the UK GDPR and the Data Protection Act 2018.</p>
                  </div>

                  <div>
                    <h3 className="text-xl font-serif font-semibold mb-4 text-foreground">1.2 What Personal Data We Collect</h3>
                    <p>We may collect:</p>
                    <ul className="list-disc pl-6 grid md:grid-cols-2 gap-2">
                      <li>Name</li>
                      <li>Email address</li>
                      <li>Telephone number</li>
                      <li>Project address</li>
                      <li>Budget information</li>
                      <li>Architectural drawings</li>
                      <li>Contract documents</li>
                      <li>IP address</li>
                      <li>Website usage data</li>
                    </ul>
                    <p className="mt-4 font-medium text-primary italic">We do not sell personal data.</p>
                  </div>

                  <div>
                    <h3 className="text-xl font-serif font-semibold mb-4 text-foreground">1.3 How We Collect Data</h3>
                    <p>We collect data when you:</p>
                    <ul className="list-disc pl-6 space-y-1">
                      <li>Submit a contact form</li>
                      <li>Request a quotation</li>
                      <li>Enter into a contract</li>
                      <li>Browse our website</li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-xl font-serif font-semibold mb-4 text-foreground">1.4 Data Retention</h3>
                    <ul className="list-disc pl-6 space-y-1">
                      <li><span className="font-semibold text-foreground">Project data:</span> 6 years</li>
                      <li><span className="font-semibold text-foreground">Financial records:</span> 6 years</li>
                      <li><span className="font-semibold text-foreground">Insurance-related data:</span> up to 12 years</li>
                      <li><span className="font-semibold text-foreground">Marketing data:</span> until consent withdrawn</li>
                    </ul>
                  </div>
                </div>
              </section>

              {/* 2. WEBSITE TERMS OF USE */}
              <section id="terms-of-use" className="scroll-mt-32 mb-24">
                <h2 className="text-3xl font-serif font-bold mb-8 text-primary border-b border-neutral-100 pb-4">2. Website Terms of Use</h2>
                <div className="space-y-8">
                  <div>
                    <h3 className="text-xl font-serif font-semibold mb-4 text-foreground">2.1 Acceptance of Terms</h3>
                    <p>By using this website, you agree to these Terms of Use. If you do not agree, you must not use this website.</p>
                  </div>

                  <div>
                    <h3 className="text-xl font-serif font-semibold mb-4 text-foreground">2.2 Intellectual Property</h3>
                    <p>All content on this website, including text, images, logos, project photography, and designs, is the property of FINEWORKS Ltd unless otherwise stated.</p>
                    <p className="bg-neutral-50 p-4 border-l-4 border-primary italic">No content may be copied, reproduced, or distributed without written permission.</p>
                  </div>

                  <div>
                    <h3 className="text-xl font-serif font-semibold mb-4 text-foreground">2.3 Limitation of Liability</h3>
                    <p>To the extent permitted by law, our liability shall not exceed £10,000 in relation to website use. We are not liable for indirect or consequential loss or reliance placed on website information.</p>
                  </div>
                </div>
              </section>

              {/* 3. COOKIE POLICY */}
              <section id="cookies" className="scroll-mt-32 mb-24">
                <h2 className="text-3xl font-serif font-bold mb-8 text-primary border-b border-neutral-100 pb-4">3. Cookie Policy</h2>
                <div className="space-y-8">
                  <div>
                    <p>Cookies are small text files stored on your device when you visit a website.</p>
                  </div>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="p-6 bg-neutral-50 rounded-lg border border-neutral-100">
                      <h4 className="font-bold mb-2">Essential Cookies</h4>
                      <p className="text-sm">Required for fundamental website functionality. No consent required.</p>
                    </div>
                    <div className="p-6 bg-neutral-50 rounded-lg border border-neutral-100">
                      <h4 className="font-bold mb-2">Analytics & Marketing</h4>
                      <p className="text-sm">Used to analyse traffic and improve experience. Requires user consent.</p>
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-serif font-semibold mb-4 text-foreground">3.1 Managing Cookies</h3>
                    <p>You can manage cookie preferences through your browser settings or our cookie consent banner.</p>
                  </div>
                </div>
              </section>

              {/* 4. WEBSITE DISCLAIMER */}
              <section id="disclaimer" className="scroll-mt-32">
                <h2 className="text-3xl font-serif font-bold mb-8 text-primary border-b border-neutral-100 pb-4">4. Website Disclaimer</h2>
                <div className="space-y-8">
                  <div className="p-8 bg-amber-50 rounded-lg border border-amber-100">
                    <h3 className="text-xl font-serif font-semibold mb-4 text-amber-900">General Information Only</h3>
                    <p className="text-amber-800/80">
                      The content on this website is for general informational purposes only. It does not constitute legal, financial, architectural, engineering, or construction advice.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-xl font-serif font-semibold mb-4 text-foreground">4.1 No Guarantee of Results</h3>
                    <p>Project outcomes depend on site conditions, client specifications, and material availability. We do not guarantee specific results unless stated in a written contract.</p>
                  </div>

                  <div className="bg-neutral-900 text-white p-8 rounded-lg">
                    <h3 className="text-xl font-serif font-semibold mb-4 text-white">4.2 Marine / Yacht Projects</h3>
                    <p className="text-white/70">
                      Marine environments expose materials to salt, humidity, movement, and UV. Website content does not constitute a durability guarantee. Specific project warranties are governed by written contracts.
                    </p>
                  </div>
                </div>
              </section>

            </div>
          </div>
        </div>
      </section>

      {/* Contact Link */}
      <section className="py-20 bg-neutral-100 border-t border-neutral-200">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <h2 className="text-2xl font-serif font-bold mb-4">Questions about your data?</h2>
          <p className="text-muted-foreground mb-8">Contact us at <a href="mailto:info@fineworks.uk" className="text-primary font-semibold hover:underline">info@fineworks.uk</a> for any privacy-related enquiries.</p>
        </div>
      </section>
    </main>
  );
}
