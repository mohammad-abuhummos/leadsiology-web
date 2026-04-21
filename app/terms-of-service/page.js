export const metadata = {
  title: "Terms of Service | Leadsiology",
  description:
    "Read the terms governing your use of Leadsiology's lead generation platform and website.",
};

export default function TermsOfServicePage() {
  return (
    <main className="bg-white text-gray-900 min-h-screen py-16">
      <div className="mx-auto max-w-4xl px-6 lg:px-8">
        <h1 className="text-4xl font-bold mb-4">Terms of Service</h1>
        <p className="text-gray-600 mb-10">
          Effective date: April 21, 2026
        </p>

        <div className="space-y-8 text-gray-700 leading-relaxed">
          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-3">
              1. Agreement to Terms
            </h2>
            <p>
              These Terms of Service govern access to and use of the
              Leadsiology website, platform, and services. By using our services,
              you agree to be bound by these terms.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-3">
              2. Services
            </h2>
            <p>
              Leadsiology provides lead generation and related marketing services
              primarily for home improvement contractors. Service scope, delivery
              channels, pricing, and campaign details may be defined in separate
              proposals, order forms, or written agreements.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-3">
              3. Account and Use Requirements
            </h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>
                You must provide accurate, current, and complete business
                information.
              </li>
              <li>
                You are responsible for maintaining the confidentiality of your
                account credentials.
              </li>
              <li>
                You agree to use leads and platform data in compliance with
                applicable laws and regulations.
              </li>
              <li>
                You may not misuse, scrape, reverse engineer, or interfere with
                platform operations.
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-3">
              4. Leads and Performance
            </h2>
            <p>
              Leadsiology works to provide high-quality leads using proprietary
              targeting and qualification methods. However, lead volume,
              conversion, and revenue outcomes vary by market, response time,
              pricing, sales process, seasonality, and other external factors.
              Unless explicitly stated in writing, no guarantee of specific
              business outcomes is made.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-3">
              5. Fees and Payment
            </h2>
            <p>
              You agree to pay all fees described in your active service
              agreement. Fees may include per-lead charges, campaign fees, or
              subscription charges. Late or failed payments may result in service
              suspension. All fees are non-refundable except where required by
              law or explicitly agreed in writing.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-3">
              6. Intellectual Property
            </h2>
            <p>
              All platform software, branding, content, and proprietary
              methodologies are owned by Leadsiology or its licensors and are
              protected by intellectual property laws. No rights are granted
              except limited use rights necessary to use our services.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-3">
              7. Confidentiality
            </h2>
            <p>
              Each party agrees to protect confidential information received from
              the other party and use it only for legitimate business purposes
              related to the services.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-3">
              8. Disclaimer of Warranties
            </h2>
            <p>
              Services are provided on an &quot;as is&quot; and &quot;as
              available&quot; basis to the fullest extent allowed by law.
              Leadsiology disclaims all implied warranties, including warranties
              of merchantability, fitness for a particular purpose, and
              non-infringement.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-3">
              9. Limitation of Liability
            </h2>
            <p>
              To the maximum extent permitted by law, Leadsiology is not liable
              for indirect, incidental, special, consequential, or punitive
              damages, or lost profits, revenue, data, or goodwill arising from
              or related to service use.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-3">
              10. Termination
            </h2>
            <p>
              We may suspend or terminate access for non-payment, breach of
              these terms, misuse of services, or legal risk. You may stop using
              services at any time, subject to active contract obligations.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-3">
              11. Changes to Terms
            </h2>
            <p>
              We may update these Terms of Service periodically. Updated terms
              are effective upon posting unless otherwise stated.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-3">
              12. Contact
            </h2>
            <p>
              For questions about these terms, contact us at{" "}
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
