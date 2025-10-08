"use client";

import Image from "next/image";
import { useState } from "react";
import {
  BuildingOfficeIcon,
  CheckCircleIcon,
  ShieldCheckIcon,
  TrophyIcon,
  HeartIcon,
  PhoneIcon,
  EnvelopeIcon,
  Bars3Icon,
  BoltIcon,
  ChartBarIcon,
} from "@heroicons/react/24/solid";

export default function About() {
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
              className="text-sm font-semibold text-blue-600 transition-colors"
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
                className="block py-2 text-base font-semibold text-blue-600"
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
              <BuildingOfficeIcon className="w-4 h-4" />
              About Leadsiology
            </div>
          </div>

          <h1 className="text-5xl sm:text-6xl font-bold tracking-tight mb-8">
            <span className="block bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">
              About Leadsiology
            </span>
          </h1>

          <p className="text-xl leading-8 text-gray-600 max-w-3xl mx-auto">
            Leadsiology is the growth partner for home improvement contractors
            that expect more from their marketing. We combine performance
            marketing, data science, and human expertise to deliver exclusive,
            high-intent homeowner leads that convert into premium projects.
          </p>
        </div>
      </section>

      {/* Our Mission */}
      <section className="py-24 bg-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Our Mission
              </h2>
              <p className="text-xl text-gray-600 leading-relaxed">
                Empower contractors to grow sustainably with a predictable
                pipeline of exclusive home improvement leads, backed by
                transparent data and hands-on support.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* What We Do */}
      <section className="py-24 bg-gray-50">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              What We Do
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <div className="bg-white rounded-3xl p-8 shadow-lg">
              <CheckCircleIcon className="w-12 h-12 text-blue-600 mb-4" />
              <p className="text-gray-700 leading-relaxed">
                Build hyper-targeted campaigns that reach homeowners ready to
                invest in major renovation projects.
              </p>
            </div>

            <div className="bg-white rounded-3xl p-8 shadow-lg">
              <CheckCircleIcon className="w-12 h-12 text-blue-600 mb-4" />
              <p className="text-gray-700 leading-relaxed">
                Qualify and score every lead to ensure real budget, realistic
                timelines, and decision-making authority.
              </p>
            </div>

            <div className="bg-white rounded-3xl p-8 shadow-lg">
              <CheckCircleIcon className="w-12 h-12 text-blue-600 mb-4" />
              <p className="text-gray-700 leading-relaxed">
                Deliver leads instantly through SMS, email, and CRM integrations
                so contractors can respond first.
              </p>
            </div>

            <div className="bg-white rounded-3xl p-8 shadow-lg">
              <CheckCircleIcon className="w-12 h-12 text-blue-600 mb-4" />
              <p className="text-gray-700 leading-relaxed">
                Provide real-time dashboards, campaign insights, and
                optimization support from lead generation specialists.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Contractors Choose Leadsiology */}
      <section className="py-24 bg-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Why Contractors Choose Leadsiology
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-blue-50 rounded-3xl p-8 text-center">
              <ShieldCheckIcon className="w-12 h-12 text-blue-600 mb-4 mx-auto" />
              <h3 className="text-lg font-bold text-gray-900 mb-3">
                100% Exclusive Leads
              </h3>
              <p className="text-gray-600">
                No bidding wars or shared listings.
              </p>
            </div>

            <div className="bg-blue-50 rounded-3xl p-8 text-center">
              <CheckCircleIcon className="w-12 h-12 text-blue-600 mb-4 mx-auto" />
              <h3 className="text-lg font-bold text-gray-900 mb-3">
                Advanced Lead Scoring
              </h3>
              <p className="text-gray-600">
                Verification to protect your marketing spend.
              </p>
            </div>

            <div className="bg-blue-50 rounded-3xl p-8 text-center">
              <HeartIcon className="w-12 h-12 text-blue-600 mb-4 mx-auto" />
              <h3 className="text-lg font-bold text-gray-900 mb-3">
                Dedicated Success Managers
              </h3>
              <p className="text-gray-600">
                Monitor performance and recommend optimizations.
              </p>
            </div>

            <div className="bg-blue-50 rounded-3xl p-8 text-center">
              <BuildingOfficeIcon className="w-12 h-12 text-blue-600 mb-4 mx-auto" />
              <h3 className="text-lg font-bold text-gray-900 mb-3">
                Flexible Programs
              </h3>
              <p className="text-gray-600">
                For bathroom, roofing, HVAC, solar, windows, and specialty
                trades.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How We Work */}
      <section className="py-24 bg-gray-50">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              How We Work
            </h2>
          </div>

          <div className="max-w-4xl mx-auto space-y-6">
            {[
              {
                step: "1",
                title:
                  "Deep-dive strategy session to understand your ideal projects, service areas, and capacity.",
              },
              {
                step: "2",
                title:
                  "Multi-channel acquisition campaigns across search, social, and premium publishers.",
              },
              {
                step: "3",
                title:
                  "Lead validation using behavioral, demographic, and intent signals.",
              },
              {
                step: "4",
                title:
                  "Real-time delivery with detailed homeowner profiles and recommended follow-up actions.",
              },
              {
                step: "5",
                title:
                  "Continuous optimization driven by conversion data and contractor feedback.",
              },
            ].map((item, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-6 shadow-lg flex items-start gap-6"
              >
                <div className="w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center text-white text-xl font-bold flex-shrink-0">
                  {item.step}
                </div>
                <p className="text-gray-700 text-lg leading-relaxed pt-2">
                  {item.title}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Promise */}
      <section className="py-24 bg-blue-600">
        <div className="mx-auto max-w-4xl px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">Our Promise</h2>
          <p className="text-xl text-blue-50 leading-relaxed">
            We treat every marketing dollar like our own. Leadsiology is
            committed to clarity, partnership, and measurable outcomes. If a
            lead does not meet the agreed quality standards, we work with you to
            make it right.
          </p>
        </div>
      </section>

      {/* Let's Build Your Growth Engine */}
      <section className="py-24 bg-white">
        <div className="mx-auto max-w-4xl px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            Let's Build Your Growth Engine
          </h2>
          <p className="text-xl text-gray-600 leading-relaxed mb-12">
            Whether you are scaling into new markets or strengthening your local
            presence, Leadsiology designs a lead generation system that fits
            your business. Reach our team at{" "}
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
            </a>{" "}
            to kick off a personalized strategy session.
          </p>

          <a
            href="/#contact"
            className="inline-flex items-center gap-2 bg-blue-600 text-white px-8 py-4 rounded-2xl text-lg font-semibold shadow-xl hover:bg-blue-700 hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300"
          >
            <BoltIcon className="w-5 h-5" />
            Get Started Today
          </a>
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

