export const metadata = {
  title: "Privacy Policy | Leadsiology",
  description:
    "Read how Leadsiology collects, uses, and protects personal information for our lead generation platform.",
};

export default function PrivacyPolicyPage() {
  return (
    <main className="bg-white text-gray-900 min-h-screen py-16">
      <div className="mx-auto max-w-4xl px-6 lg:px-8">
        <h1 className="text-4xl font-bold mb-4">Privacy Policy</h1>
        <p className="text-gray-600 mb-10">
          Last updated: April 21, 2026
        </p>

        <div className="space-y-8 text-gray-700 leading-relaxed">
          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-3">
              1. Who We Are
            </h2>
            <p>
              Leadsiology provides lead generation and marketing support services
              for home improvement contractors. This Privacy Policy explains how
              we collect, use, disclose, and protect information when you visit
              our website, submit a form, communicate with us, or use our
              services.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-3">
              2. Information We Collect
            </h2>
            <p className="mb-3">
              We may collect the following categories of information:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>
                Contact details (such as name, email address, phone number,
                company name, and service area).
              </li>
              <li>
                Business information (such as services offered, marketing budget,
                and project preferences).
              </li>
              <li>
                Usage data (such as pages visited, device type, browser type, IP
                address, and referral source).
              </li>
              <li>
                Communication data from calls, emails, forms, and support
                interactions.
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-3">
              3. How We Use Information
            </h2>
            <p className="mb-3">We use information to:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Provide and improve our lead generation services.</li>
              <li>
                Match contractors with relevant homeowner opportunities where
                available.
              </li>
              <li>Deliver leads, notifications, and account updates.</li>
              <li>
                Analyze campaign performance and optimize lead quality and
                targeting.
              </li>
              <li>Respond to inquiries and provide customer support.</li>
              <li>Comply with legal obligations and enforce our terms.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-3">
              4. How We Share Information
            </h2>
            <p>
              We do not sell personal information for money. We may share data
              with trusted service providers (such as CRM, analytics, hosting,
              communication, and payment vendors), with business partners as
              necessary to provide services, and when required by law or to
              protect rights and safety.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-3">
              5. Data Retention
            </h2>
            <p>
              We retain information for as long as reasonably necessary for
              business operations, legal compliance, dispute resolution, and
              contract enforcement. Retention periods vary based on the type of
              data and applicable requirements.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-3">
              6. Your Choices and Rights
            </h2>
            <p className="mb-3">
              Depending on your location, you may have rights to access, correct,
              delete, or restrict certain personal information. You may also opt
              out of marketing communications by using unsubscribe links or
              contacting us directly.
            </p>
            <p>
              To submit a privacy request, email{" "}
              <a
                href="mailto:info@leadsiology.com"
                className="text-blue-600 hover:text-blue-700"
              >
                info@leadsiology.com
              </a>
              .
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-3">
              7. Security
            </h2>
            <p>
              We use commercially reasonable administrative, technical, and
              organizational safeguards to protect personal information. No
              internet transmission or storage system is guaranteed to be fully
              secure, so we cannot guarantee absolute security.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-3">
              8. Third-Party Services and Links
            </h2>
            <p>
              Our website may include links to third-party websites and tools.
              Their privacy practices are governed by their own policies, not
              this Privacy Policy.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-3">
              9. Changes to This Policy
            </h2>
            <p>
              We may update this Privacy Policy from time to time. Updated
              versions will be posted on this page with a revised effective date.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-3">
              10. Contact Us
            </h2>
            <p>
              If you have questions about this Privacy Policy, contact
              Leadsiology at{" "}
              <a
                href="mailto:info@leadsiology.com"
                className="text-blue-600 hover:text-blue-700"
              >
                info@leadsiology.com
              </a>
              .
            </p>
          </section>
        </div>
      </div>
    </main>
  );
}
