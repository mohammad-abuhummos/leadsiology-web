"use client";

import Image from "next/image";
import { useState } from "react";
import {
  DocumentTextIcon,
  Bars3Icon,
  BoltIcon,
  TrophyIcon,
  ChartBarIcon,
  ScaleIcon,
} from "@heroicons/react/24/solid";

export default function TermsConditions() {
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
              <ScaleIcon className="w-4 h-4" />
              Legal Terms
            </div>
          </div>

          <h1 className="text-5xl sm:text-6xl font-bold tracking-tight mb-8">
            <span className="block bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">
              Terms & Conditions
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
              <p className="text-gray-600 leading-relaxed">
                These Terms & Conditions (the "Agreement") govern your access to
                and use of the lead generation services, website, and related
                offerings provided by Leadsiology ("Leadsiology," "we," "us," or
                "our"). By accessing leadsiology.com, requesting leads, or
                otherwise engaging with our Services, you agree to be bound by
                this Agreement. If you do not agree, you may not use the
                Services.
              </p>
            </div>

            {/* 1. Lead Delivery */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                1. Lead Delivery
              </h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                Leadsiology delivers exclusive homeowner leads to approved
                contractor partners through one or more of the following
                methods:
              </p>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-start gap-3">
                  <span className="text-blue-600 mt-1">•</span>
                  <span>Secure API and CRM integrations.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-blue-600 mt-1">•</span>
                  <span>Email delivery to your designated mailboxes.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-blue-600 mt-1">•</span>
                  <span>SMS notifications to approved contacts.</span>
                </li>
              </ul>
              <p className="text-gray-600 leading-relaxed mt-4">
                You are responsible for maintaining updated contact destinations
                so that leads can be delivered without delay.
              </p>
            </div>

            {/* 2. Lead Quality Assurance and Returns */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                2. Lead Quality Assurance and Returns
              </h2>
              <p className="text-gray-600 leading-relaxed">
                We validate every lead against jointly defined qualification
                criteria. If a delivered lead does not meet those criteria, you
                may request a review within seven (7) calendar days of delivery.
                Provide supporting details so our quality team can investigate
                and, when appropriate, credit or replace the lead. Duplicate
                submissions, invalid contact information, and leads outside of
                the agreed service area are generally eligible for review.
              </p>
            </div>

            {/* 3. Billing and Refunds */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                3. Billing and Refunds
              </h2>
              <p className="text-gray-600 leading-relaxed">
                Lead fees are charged according to the pricing schedule or
                campaign agreement signed at onboarding. Approved credits are
                applied to future invoices unless otherwise agreed in writing.
                Refunds, when warranted, are processed using the original
                payment method within a reasonable timeframe.
              </p>
            </div>

            {/* 4. Cancellation */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                4. Cancellation
              </h2>
              <p className="text-gray-600 leading-relaxed">
                You may pause or cancel your lead program by providing a minimum
                of twenty-four (24) hours notice before the next billing cycle.
                Requests must be submitted through your account manager or
                support channel. Charges already incurred remain payable.
              </p>
            </div>

            {/* 5. Customer Support */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                5. Customer Support
              </h2>
              <p className="text-gray-600 leading-relaxed">
                Our support team is available to address account questions,
                performance reviews, and quality investigations. Contact us at{" "}
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
                . We aim to respond to inquiries within one business day.
              </p>
            </div>

            {/* 6. Acceptable Use */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                6. Acceptable Use
              </h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                You agree to use the Services solely for lawful business
                purposes. You will not:
              </p>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-start gap-3">
                  <span className="text-blue-600 mt-1">•</span>
                  <span>
                    Resell, share, or redistribute leads to third parties
                    without Leadsiology's consent.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-blue-600 mt-1">•</span>
                  <span>
                    Use leads to send unsolicited or unlawful communications.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-blue-600 mt-1">•</span>
                  <span>
                    Attempt to interfere with or disrupt the Service
                    infrastructure.
                  </span>
                </li>
              </ul>
              <p className="text-gray-600 leading-relaxed mt-4">
                We may suspend or terminate access if we believe you have
                violated these obligations.
              </p>
            </div>

            {/* 7. Modifications to the Agreement */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                7. Modifications to the Agreement
              </h2>
              <p className="text-gray-600 leading-relaxed">
                We may update this Agreement from time to time. Material changes
                will be communicated via email or a notice on our website.
                Continued use of the Services after modifications become
                effective constitutes acceptance of the revised terms.
              </p>
            </div>

            {/* 8. Intellectual Property */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                8. Intellectual Property
              </h2>
              <p className="text-gray-600 leading-relaxed">
                All content, branding, and technology associated with the
                Services are owned by Leadsiology or its licensors. You may not
                reproduce, copy, or exploit any portion of the Services without
                our prior written permission.
              </p>
            </div>

            {/* 9. Disclaimers */}
            <div className="mb-12 bg-gray-50 rounded-3xl p-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                9. Disclaimers
              </h2>
              <p className="text-gray-700 leading-relaxed font-medium">
                THE SERVICES ARE PROVIDED ON AN "AS IS" AND "AS AVAILABLE"
                BASIS. TO THE MAXIMUM EXTENT PERMITTED BY LAW, LEADSIOLOGY
                DISCLAIMS ALL WARRANTIES, WHETHER EXPRESS, IMPLIED, OR
                STATUTORY, INCLUDING IMPLIED WARRANTIES OF MERCHANTABILITY,
                FITNESS FOR A PARTICULAR PURPOSE, AND NON-INFRINGEMENT.
              </p>
            </div>

            {/* 10. Limitation of Liability */}
            <div className="mb-12 bg-gray-50 rounded-3xl p-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                10. Limitation of Liability
              </h2>
              <p className="text-gray-700 leading-relaxed font-medium">
                TO THE MAXIMUM EXTENT PERMITTED BY LAW, LEADSIOLOGY IS NOT
                LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR
                EXEMPLARY DAMAGES ARISING FROM OR RELATED TO YOUR USE OF THE
                SERVICES. OUR TOTAL LIABILITY FOR ANY CLAIM ARISING UNDER THIS
                AGREEMENT WILL NOT EXCEED THE AMOUNT PAID BY YOU TO LEADSIOLOGY
                FOR THE LEAD OR SERVICE AT ISSUE DURING THE SIX (6) MONTHS
                PRECEDING THE CLAIM.
              </p>
            </div>

            {/* 11. Indemnification */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                11. Indemnification
              </h2>
              <p className="text-gray-600 leading-relaxed">
                You agree to indemnify, defend, and hold harmless Leadsiology
                and its affiliates, officers, directors, employees, and agents
                from any claims, damages, liabilities, or expenses arising out
                of or related to your use of the Services, your breach of this
                Agreement, or your violation of any law or third-party rights.
              </p>
            </div>

            {/* 12. Governing Law */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                12. Governing Law
              </h2>
              <p className="text-gray-600 leading-relaxed">
                This Agreement is governed by the laws of the State in which
                Leadsiology is headquartered, without regard to conflict of law
                principles. Any disputes will be resolved through good-faith
                negotiations, and if necessary, binding arbitration conducted in
                that jurisdiction. Class action lawsuits and jury trials are
                waived to the fullest extent permitted by law.
              </p>
            </div>

            {/* 13. Severability */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                13. Severability
              </h2>
              <p className="text-gray-600 leading-relaxed">
                If any provision of this Agreement is found unenforceable, the
                remaining provisions will remain in full effect.
              </p>
            </div>

            {/* 14. Entire Agreement */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                14. Entire Agreement
              </h2>
              <p className="text-gray-600 leading-relaxed">
                This Agreement, together with any supplemental terms referenced
                herein, constitutes the entire understanding between you and
                Leadsiology regarding the Services and supersedes all prior
                communications.
              </p>
            </div>

            {/* Contact Leadsiology */}
            <div className="mb-12 bg-blue-50 rounded-3xl p-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Contact Leadsiology
              </h2>
              <p className="text-gray-600 leading-relaxed mb-6">
                Questions about these Terms & Conditions may be directed to:
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
                We appreciate the opportunity to support your growth.
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

