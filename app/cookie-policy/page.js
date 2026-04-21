export const metadata = {
  title: "Cookie Policy | Leadsiology",
  description:
    "Learn how Leadsiology uses cookies and similar technologies on our website.",
};

export default function CookiePolicyPage() {
  return (
    <main className="bg-white text-gray-900 min-h-screen py-16">
      <div className="mx-auto max-w-4xl px-6 lg:px-8">
        <h1 className="text-4xl font-bold mb-4">Cookie Policy</h1>
        <p className="text-gray-600 mb-10">
          Last updated: April 21, 2026
        </p>

        <div className="space-y-8 text-gray-700 leading-relaxed">
          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-3">
              1. What Are Cookies
            </h2>
            <p>
              Cookies are small text files stored on your device when you visit
              a website. They help websites function, remember preferences,
              improve performance, and provide analytics.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-3">
              2. How Leadsiology Uses Cookies
            </h2>
            <p className="mb-3">
              We use cookies and similar technologies to operate and improve our
              website and services for contractors and prospective clients.
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>
                <span className="font-semibold text-gray-900">
                  Essential cookies:
                </span>{" "}
                Required for core website functionality and security.
              </li>
              <li>
                <span className="font-semibold text-gray-900">
                  Performance cookies:
                </span>{" "}
                Help us understand site usage and improve user experience.
              </li>
              <li>
                <span className="font-semibold text-gray-900">
                  Functional cookies:
                </span>{" "}
                Remember user preferences and form settings.
              </li>
              <li>
                <span className="font-semibold text-gray-900">
                  Marketing cookies:
                </span>{" "}
                Measure campaign effectiveness and support relevant advertising.
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-3">
              3. Third-Party Cookies
            </h2>
            <p>
              Some cookies may be set by trusted third-party providers we use for
              analytics, communications, advertising, and performance monitoring.
              These third parties manage their cookies under their own policies.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-3">
              4. Your Cookie Choices
            </h2>
            <p>
              You can manage cookie settings in your browser, including blocking
              or deleting cookies. If you disable certain cookies, some website
              features may not function properly.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-3">
              5. Do Not Track
            </h2>
            <p>
              Browser &quot;Do Not Track&quot; signals are not currently applied
              consistently across all technologies we use. We continue to monitor
              industry standards and may update our approach as standards evolve.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-3">
              6. Updates to This Policy
            </h2>
            <p>
              We may update this Cookie Policy periodically to reflect changes in
              technology, law, or our services. Updates will be posted on this
              page with a revised date.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-3">
              7. Contact
            </h2>
            <p>
              If you have questions about our use of cookies, contact us at{" "}
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
