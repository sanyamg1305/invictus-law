export default function DisclaimerPage() {
  return (
    <>
      <section className="bg-[#02334E] text-white py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <p className="text-[#C8A065] text-xs font-semibold uppercase tracking-widest mb-3">Legal</p>
          <h1 className="text-4xl font-black">Disclaimer</h1>
          <p className="text-white/60 mt-2 text-sm">Last updated: June 2025</p>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="max-w-4xl mx-auto space-y-8 text-gray-600 text-sm leading-relaxed">
          <div className="bg-amber-50 border border-amber-200 rounded-xl p-6">
            <p className="font-semibold text-amber-800 text-sm">Important Notice</p>
            <p className="text-amber-700 text-sm mt-1">The information on this website does not constitute legal advice and should not be relied upon as such.</p>
          </div>
          <div>
            <h2 className="text-[#02334E] font-bold text-lg mb-3">1. No Legal Advice</h2>
            <p>The content published on the Invictus Law Practice website is for general informational and educational purposes only. Nothing on this Site constitutes legal advice, legal opinion, or any kind of professional advice. The information provided may not reflect the most current legal developments and may vary by jurisdiction.</p>
          </div>
          <div>
            <h2 className="text-[#02334E] font-bold text-lg mb-3">2. No Attorney-Client Relationship</h2>
            <p>Visiting this website, reading its content, submitting an inquiry form, or communicating via email does not create an attorney-client relationship between you and Invictus Law Practice. An attorney-client relationship is only established through a formal engagement letter signed by both parties.</p>
          </div>
          <div>
            <h2 className="text-[#02334E] font-bold text-lg mb-3">3. Confidentiality of Communications</h2>
            <p>Unsolicited communications sent to this firm via the website or email — prior to the establishment of an attorney-client relationship — are not protected by attorney-client privilege. Do not send confidential or sensitive information until you have formally engaged our services.</p>
          </div>
          <div>
            <h2 className="text-[#02334E] font-bold text-lg mb-3">4. Accuracy of Information</h2>
            <p>While we strive to keep the content on this Site accurate and up to date, Invictus Law Practice makes no representations or warranties of any kind regarding the accuracy, completeness, or suitability of the information for any particular purpose. Laws and regulations change frequently, and the content may not reflect recent developments.</p>
          </div>
          <div>
            <h2 className="text-[#02334E] font-bold text-lg mb-3">5. Limitation of Liability</h2>
            <p>Invictus Law Practice expressly disclaims all liability for any actions taken or not taken based on information contained on this website. We shall not be liable for any direct, indirect, incidental, or consequential damages arising from reliance on content on this Site.</p>
          </div>
          <div>
            <h2 className="text-[#02334E] font-bold text-lg mb-3">6. Past Results Not Indicative of Future Outcomes</h2>
            <p>Any reference to past case results or client testimonials on this Site is for informational purposes only. Past results do not guarantee or predict similar outcomes in future matters, as each case is unique and subject to its own facts, law, and circumstances.</p>
          </div>
          <div>
            <h2 className="text-[#02334E] font-bold text-lg mb-3">7. Regulatory Compliance</h2>
            <p>Invictus Law Practice is a registered law firm governed by the Bar Council of India Rules. This communication is in compliance with the Bar Council of India Rules, which prohibit law firms from soliciting work or advertising in a manner that is inconsistent with professional standards.</p>
          </div>
          <div>
            <h2 className="text-[#02334E] font-bold text-lg mb-3">8. Contact</h2>
            <p>For specific legal advice tailored to your situation, please contact us at <a href="mailto:info@invictuslaw.in" className="text-[#C8A065] hover:underline">info@invictuslaw.in</a> to schedule a consultation.</p>
          </div>
        </div>
      </section>
    </>
  );
}
