"use client";

import Image from "next/image";
import { useState } from "react";
import {
  ShieldCheckIcon,
  Bars3Icon,
  BoltIcon,
  TrophyIcon,
  ChartBarIcon,
  DocumentTextIcon,
} from "@heroicons/react/24/solid";

export default function PrivacyPolicy() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="bg-white text-black">
      {/* Navigation */}
      <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-100">
        <nav className="flex items-center justify-between p-6 lg:px-8 max-w-7xl mx-auto">
          <div className="flex lg:flex-1">
            <a href="/" className="-m-1.5 p-1.5">
              <Image
                src="/logo-icon.svg"
                alt="Leadsiology"
                width={50}
                height={50}
                className="h-10 w-auto"
              />
            </a>
          </div>

          <div className="hidden lg:flex lg:gap-x-8">
            <a
              href="/#services"
              className="text-sm font-semibold text-gray-900 hover:text-blue-600 transition-colors"
            >
              Services
            </a>
            <a
              href="/#features"
              className="text-sm font-semibold text-gray-900 hover:text-blue-600 transition-colors"
            >
              Why Choose Us
            </a>
            <a
              href="/#process"
              className="text-sm font-semibold text-gray-900 hover:text-blue-600 transition-colors"
            >
              How It Works
            </a>
            <a
              href="/about"
              className="text-sm font-semibold text-gray-900 hover:text-blue-600 transition-colors"
            >
              About
            </a>
            <a
              href="/#contact"
              className="text-sm font-semibold text-gray-900 hover:text-blue-600 transition-colors"
            >
              Contact
            </a>
          </div>

          <div className="hidden lg:flex lg:flex-1 lg:justify-end">
            <a
              href="/#contact"
              className="bg-blue-600 text-white px-4 py-2 rounded-lg text-sm font-semibold hover:bg-blue-700 transition-colors"
            >
              Get Started
            </a>
          </div>

          <div className="flex lg:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2.5 text-gray-700"
            >
              <Bars3Icon className="h-6 w-6" />
            </button>
          </div>
        </nav>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden border-t border-gray-100">
            <div className="space-y-1 px-6 py-4">
              <a
                href="/#services"
                className="block py-2 text-base font-semibold text-gray-900 hover:text-blue-600"
              >
                Services
              </a>
              <a
                href="/#features"
                className="block py-2 text-base font-semibold text-gray-900 hover:text-blue-600"
              >
                Why Choose Us
              </a>
              <a
                href="/#process"
                className="block py-2 text-base font-semibold text-gray-900 hover:text-blue-600"
              >
                How It Works
              </a>
              <a
                href="/about"
                className="block py-2 text-base font-semibold text-gray-900 hover:text-blue-600"
              >
                About
              </a>
              <a
                href="/#contact"
                className="block py-2 text-base font-semibold text-gray-900 hover:text-blue-600"
              >
                Contact
              </a>
              <a
                href="/#contact"
                className="block mt-4 bg-blue-600 text-white px-4 py-2 rounded-lg text-sm font-semibold hover:bg-blue-700 transition-colors text-center"
              >
                Get Started
              </a>
            </div>
          </div>
        )}
      </header>

      {/* Hero Section */}
      <section className="relative px-6 pt-20 lg:px-8 bg-gradient-to-br from-blue-50/30 via-white to-blue-50/20">
        <div className="mx-auto max-w-4xl py-20 text-center">
          <div className="mb-8">
            <div className="inline-flex items-center gap-2 bg-blue-50 border border-blue-200 text-blue-700 px-6 py-3 rounded-full text-sm font-semibold shadow-sm">
              <ShieldCheckIcon className="w-4 h-4" />
              Privacy & Data Protection
            </div>
          </div>

          <h1 className="text-5xl sm:text-6xl font-bold tracking-tight mb-8">
            <span className="block bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">
              Privacy Policy
            </span>
          </h1>

          <p className="text-lg text-gray-600">
            Last updated: October 7, 2025
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-24 bg-white">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          <div className="prose prose-lg max-w-none">
            {/* Introduction */}
            <div className="mb-12">
              <p className="text-gray-600 leading-relaxed mb-6">
                Leadsiology ("Leadsiology," "we," "us," or "our") respects your
                privacy and is committed to protecting the personal information
                that you share with us. This Privacy Policy explains how we
                collect, use, disclose, and safeguard your information when you
                visit our website, engage with our marketing, or use our lead
                generation services (collectively, the "Services").
              </p>
              <p className="text-gray-600 leading-relaxed">
                By accessing or using the Services, you agree to the practices
                described in this Privacy Policy. If you do not agree, please
                discontinue use of the Services.
              </p>
            </div>

            {/* Scope */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Scope</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                This Privacy Policy applies to:
              </p>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-start gap-3">
                  <span className="text-blue-600 mt-1">•</span>
                  <span>
                    Visitors to leadsiology.com and any subdomains we operate.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-blue-600 mt-1">•</span>
                  <span>
                    Contractors and business partners who request or receive
                    lead generation services from Leadsiology.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-blue-600 mt-1">•</span>
                  <span>
                    Prospective customers and homeowners who request information
                    about our partners.
                  </span>
                </li>
              </ul>
            </div>

            {/* Information We Collect */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Information We Collect
              </h2>
              <p className="text-gray-600 leading-relaxed mb-6">
                We collect the following categories of information:
              </p>

              <div className="mb-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  Information You Provide
                </h3>
                <ul className="space-y-3 text-gray-600">
                  <li className="flex items-start gap-3">
                    <span className="text-blue-600 mt-1">•</span>
                    <span>
                      Contact details such as name, email address, and phone
                      number.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-blue-600 mt-1">•</span>
                    <span>
                      Business information including company name, trade focus,
                      service areas, budgets, and marketing goals.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-blue-600 mt-1">•</span>
                    <span>
                      Payment and billing preferences processed through
                      compliant third-party providers.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-blue-600 mt-1">•</span>
                    <span>
                      Communications you send to us, including emails, forms,
                      and recorded calls when you consent.
                    </span>
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  Information Collected Automatically
                </h3>
                <ul className="space-y-3 text-gray-600">
                  <li className="flex items-start gap-3">
                    <span className="text-blue-600 mt-1">•</span>
                    <span>
                      Device and usage data such as IP address, browser type,
                      operating system, referral URLs, and pages viewed.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-blue-600 mt-1">•</span>
                    <span>
                      Analytics data gathered through cookies, pixels, or
                      similar technologies to understand how visitors interact
                      with the Services.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-blue-600 mt-1">•</span>
                    <span>
                      Conversion metrics that help us measure campaign
                      effectiveness and deliver qualified leads.
                    </span>
                  </li>
                </ul>
              </div>
            </div>

            {/* How We Use Information */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                How We Use Information
              </h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                We use the information we collect to:
              </p>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-start gap-3">
                  <span className="text-blue-600 mt-1">•</span>
                  <span>Provide, personalize, and improve our Services.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-blue-600 mt-1">•</span>
                  <span>
                    Deliver exclusive homeowner leads to contractor partners.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-blue-600 mt-1">•</span>
                  <span>
                    Verify the accuracy and quality of the leads we generate.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-blue-600 mt-1">•</span>
                  <span>
                    Communicate with you about account updates, campaign
                    performance, and support requests.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-blue-600 mt-1">•</span>
                  <span>
                    Send marketing communications when you opt in, with the
                    ability to opt out at any time.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-blue-600 mt-1">•</span>
                  <span>
                    Detect and prevent fraud, abuse, or misuse of our Services.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-blue-600 mt-1">•</span>
                  <span>
                    Comply with legal obligations and enforce our agreements.
                  </span>
                </li>
              </ul>
            </div>

            {/* How We Share Information */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                How We Share Information
              </h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                We may share your information with:
              </p>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-start gap-3">
                  <span className="text-blue-600 mt-1">•</span>
                  <span>
                    Service providers who assist with marketing, analytics,
                    communications, payment processing, and platform operations.
                    These partners are contractually required to safeguard your
                    data.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-blue-600 mt-1">•</span>
                  <span>
                    Contractor partners when you request to be matched with a
                    professional through our Services.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-blue-600 mt-1">•</span>
                  <span>
                    Professional advisors, regulators, or law enforcement when
                    disclosure is necessary to comply with the law, protect our
                    rights, or respond to valid requests.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-blue-600 mt-1">•</span>
                  <span>
                    Successors in the event of a merger, acquisition,
                    restructuring, or sale of assets, subject to confidentiality
                    safeguards.
                  </span>
                </li>
              </ul>
              <p className="text-gray-600 leading-relaxed mt-6">
                We do not sell your personal information for monetary
                consideration. We also do not knowingly allow third parties to
                use your data for their own marketing without your consent.
              </p>
            </div>

            {/* Cookies & Tracking Technologies */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Cookies & Tracking Technologies
              </h2>
              <p className="text-gray-600 leading-relaxed">
                Leadsiology uses cookies and similar technologies to remember
                your preferences, measure campaign performance, and improve the
                way our Services operate. You can adjust your browser settings
                to refuse cookies or to alert you when cookies are being sent.
                If you disable cookies, some features of the Services may not
                function as intended. We honor browser-based "Do Not Track"
                signals where required by law.
              </p>
            </div>

            {/* Data Security */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Data Security
              </h2>
              <p className="text-gray-600 leading-relaxed">
                Leadsiology implements technical and organizational measures
                designed to protect your information. While no system is
                completely secure, we use encryption, access controls, and
                routine monitoring to reduce the risk of unauthorized access,
                disclosure, or misuse.
              </p>
            </div>

            {/* Data Retention */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Data Retention
              </h2>
              <p className="text-gray-600 leading-relaxed">
                We retain personal information for as long as needed to provide
                the Services, comply with legal obligations, resolve disputes,
                and enforce agreements. When data is no longer required, we
                delete or anonymize it in accordance with our retention
                policies.
              </p>
            </div>

            {/* Your Rights and Choices */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Your Rights and Choices
              </h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                Depending on your location, you may have the right to request
                access, correction, deletion, or restriction of your personal
                information. You may also object to certain processing or
                request portability of your data.
              </p>
              <p className="text-gray-600 leading-relaxed mb-4">
                To exercise these rights or update your preferences, contact us
                at{" "}
                <a
                  href="mailto:info@leadsiology.com"
                  className="text-blue-600 font-semibold hover:underline"
                >
                  info@leadsiology.com
                </a>{" "}
                or call{" "}
                <a
                  href="tel:5551234532"
                  className="text-blue-600 font-semibold hover:underline"
                >
                  (555) 123-LEAD
                </a>
                . We will verify your request and respond as required by
                applicable law.
              </p>
              <p className="text-gray-600 leading-relaxed">
                You may opt out of marketing emails by following the unsubscribe
                instructions in our messages. Even if you opt out, we may still
                send transactional or service-related communications.
              </p>
            </div>

            {/* State Privacy Notices */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                State Privacy Notices
              </h2>
              <p className="text-gray-600 leading-relaxed">
                Residents of certain U.S. states, including California and
                Nevada, may have additional rights such as the right to limit or
                opt out of data sharing. We honor applicable state privacy laws
                and provide dedicated workflows to fulfill eligible requests.
              </p>
            </div>

            {/* Children's Privacy */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Children's Privacy
              </h2>
              <p className="text-gray-600 leading-relaxed">
                The Services are not directed to individuals under the age of
                18. We do not knowingly collect personal information from
                minors. If we learn that a child under 18 has provided personal
                information, we will delete it promptly.
              </p>
            </div>

            {/* Changes to This Policy */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Changes to This Policy
              </h2>
              <p className="text-gray-600 leading-relaxed">
                We may update this Privacy Policy to reflect operational, legal,
                or regulatory changes. If we make material updates, we will post
                a notice on our website or contact you using the email address
                associated with your account. The "Last updated" date at the top
                of this policy indicates the most recent revision.
              </p>
            </div>

            {/* Contact Us */}
            <div className="mb-12 bg-blue-50 rounded-3xl p-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Contact Us
              </h2>
              <p className="text-gray-600 leading-relaxed mb-6">
                If you have questions about this Privacy Policy or our privacy
                practices, contact Leadsiology at:
              </p>
              <div className="space-y-3 text-gray-700">
                <p>
                  <strong>Email:</strong>{" "}
                  <a
                    href="mailto:info@leadsiology.com"
                    className="text-blue-600 hover:underline"
                  >
                    info@leadsiology.com
                  </a>
                </p>
                <p>
                  <strong>Phone:</strong>{" "}
                  <a
                    href="tel:5551234532"
                    className="text-blue-600 hover:underline"
                  >
                    (555) 123-LEAD
                  </a>
                </p>
              </div>
              <p className="text-gray-600 leading-relaxed mt-6">
                We are here to help you understand how your data is used and
                protected.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 py-16">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8 mb-12">
            <div className="md:col-span-2">
              <Image
                src="/logo-light.svg"
                alt="Leadsiology"
                width={200}
                height={80}
                className="mb-6"
              />
              <p className="text-gray-300 text-lg leading-relaxed mb-6">
                The leading lead generation platform for home improvement
                contractors. We help businesses grow with exclusive,
                high-converting leads delivered in real-time.
              </p>
              <div className="flex flex-col gap-2 text-sm text-gray-400 mb-6">
                <span className="flex items-center gap-2">
                  <TrophyIcon className="w-4 h-4" /> Trusted by 500+ Contractors
                </span>
                <span className="flex items-center gap-2">
                  <BoltIcon className="w-4 h-4" /> 15k+ Leads Generated
                </span>
                <span className="flex items-center gap-2">
                  <ChartBarIcon className="w-4 h-4" /> 92% Success Rate
                </span>
              </div>
            </div>

            <div>
              <h4 className="text-white font-bold mb-6">Services</h4>
              <ul className="space-y-3 text-gray-300">
                <li>
                  <a
                    href="/#services"
                    className="hover:text-white transition-colors"
                  >
                    Bathroom Remodeling Leads
                  </a>
                </li>
                <li>
                  <a
                    href="/#services"
                    className="hover:text-white transition-colors"
                  >
                    Roofing Contractor Leads
                  </a>
                </li>
                <li>
                  <a
                    href="/#services"
                    className="hover:text-white transition-colors"
                  >
                    HVAC Service Leads
                  </a>
                </li>
                <li>
                  <a
                    href="/#services"
                    className="hover:text-white transition-colors"
                  >
                    Solar Installation Leads
                  </a>
                </li>
                <li>
                  <a
                    href="/#services"
                    className="hover:text-white transition-colors"
                  >
                    Windows & Doors Leads
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-white font-bold mb-6">Company</h4>
              <ul className="space-y-3 text-gray-300">
                <li>
                  <a href="/about" className="hover:text-white transition-colors">
                    About Us
                  </a>
                </li>
                <li>
                  <a href="/contact" className="hover:text-white transition-colors">
                    Contact
                  </a>
                </li>
                <li>
                  <a
                    href="/#features"
                    className="hover:text-white transition-colors"
                  >
                    Why Choose Us
                  </a>
                </li>
                <li>
                  <a
                    href="/privacy-policy"
                    className="hover:text-white transition-colors"
                  >
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a
                    href="/terms-conditions"
                    className="hover:text-white transition-colors"
                  >
                    Terms & Conditions
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <p className="text-gray-400">
                © 2024 Leadsiology. All rights reserved. Premium lead generation
                for home improvement contractors.
              </p>
              <div className="flex items-center gap-6 text-gray-400 text-sm">
                <a
                  href="/privacy-policy"
                  className="hover:text-white transition-colors"
                >
                  Privacy Policy
                </a>
                <a
                  href="/terms-conditions"
                  className="hover:text-white transition-colors"
                >
                  Terms & Conditions
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

