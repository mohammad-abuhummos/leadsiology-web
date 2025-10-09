"use client";

import Image from "next/image";
import { useState } from "react";
import { XMarkIcon, CheckCircleIcon } from "@heroicons/react/24/solid";
import {
  PhoneIcon,
  EnvelopeIcon,
  MapPinIcon,
  Bars3Icon,
  BoltIcon,
  TrophyIcon,
  ChartBarIcon,
} from "@heroicons/react/24/solid";

export default function Contact() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    email: "",
    phone: "",
    service: "",
    budget: "",
    area: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);
  const [submitMessage, setSubmitMessage] = useState("");

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      setSubmitStatus("error");
      setSubmitMessage("Please fill in your name, email, and message.");
      return;
    }
    setIsSubmitting(true);
    setSubmitStatus(null);
    setSubmitMessage("");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      const result = await res.json();
      if (!res.ok) throw new Error(result?.error || "Failed to send message");
      setSubmitStatus("success");
      setSubmitMessage(
        "Thank you! Your message has been sent successfully. We'll get back to you soon."
      );
      setFormData({
        name: "",
        company: "",
        email: "",
        phone: "",
        service: "",
        budget: "",
        area: "",
        message: "",
      });
    } catch (err) {
      setSubmitStatus("error");
      setSubmitMessage(
        err?.message || "Network error. Please check your connection and try again."
      );
    } finally {
      setIsSubmitting(false);
    }
  };

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
              href="/contact"
              className="text-sm font-semibold text-blue-600 transition-colors"
            >
              Contact
            </a>
          </div>

          <div className="hidden lg:flex lg:flex-1 lg:justify-end">
            <a
              href="/contact"
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
                href="/contact"
                className="block py-2 text-base font-semibold text-blue-600"
              >
                Contact
              </a>
              <a
                href="/contact"
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
          <Image
            src="/logo-dark.svg"
            alt="Leadsiology"
            width={300}
            height={120}
            className="mx-auto mb-8"
          />

          <div className="inline-flex items-center gap-2 bg-blue-50 border border-blue-200 text-blue-700 px-6 py-3 rounded-full text-sm font-semibold mb-8">
            <BoltIcon className="w-4 h-4" />
            Ready to Transform Your Business?
          </div>

          <h1 className="text-5xl sm:text-6xl font-bold tracking-tight mb-8">
            <span className="block bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">
              Start Receiving Premium Leads Today
            </span>
          </h1>

          <p className="text-xl leading-8 text-gray-600 max-w-3xl mx-auto">
            Join over 500 successful contractors who have transformed their
            businesses with our exclusive lead generation system.{" "}
            <span className="font-semibold text-gray-800">
              Get started in less than 24 hours.
            </span>
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-24 bg-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Contact Information */}
            <div className="bg-white rounded-3xl p-8 shadow-xl border border-gray-100">
              <h3 className="text-2xl font-bold text-gray-900 mb-8 flex items-center gap-3">
                <PhoneIcon className="w-6 h-6 text-blue-600" />
                Get In Touch
              </h3>

              <div className="space-y-6 mb-8">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center">
                    <EnvelopeIcon className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">Email</div>
                    <div className="text-blue-600">info@leadsiology.com</div>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center">
                    <MapPinIcon className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">
                      Service Area
                    </div>
                    <div className="text-blue-600">Nationwide Coverage</div>
                  </div>
                </div>
              </div>

              <div className="border-t border-gray-200 pt-8">
                <h4 className="font-bold text-gray-900 mb-6">Business Hours</h4>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Monday - Friday</span>
                    <span className="font-medium">8:00 AM - 8:00 PM EST</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Saturday</span>
                    <span className="font-medium">9:00 AM - 5:00 PM EST</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Sunday</span>
                    <span className="font-medium">Closed</span>
                  </div>
                  <div className="mt-4 p-3 bg-blue-50 rounded-lg">
                    <span className="text-blue-800 text-xs font-semibold">
                      Emergency support available 24/7 for active clients
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2 bg-white rounded-3xl p-8 shadow-xl border border-gray-100">
              <h3 className="text-2xl font-bold text-gray-900 mb-2">
                Start Your Free Consultation
              </h3>
              <p className="text-gray-600 mb-8">
                Tell us about your business and we&apos;ll create a customized
                lead generation strategy for you.
              </p>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-semibold text-gray-900 mb-2">
                      Full Name
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      placeholder="John Smith"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-900 mb-2">
                      Company Name
                    </label>
                    <input
                      type="text"
                      name="company"
                      value={formData.company}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      placeholder="ABC Home Improvements"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-semibold text-gray-900 mb-2">
                      Email Address
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      placeholder="john@abchome.com"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-900 mb-2">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      placeholder="(555) 123-4567"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-semibold text-gray-900 mb-2">
                      Primary Service
                    </label>
                    <select
                      name="service"
                      value={formData.service}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    >
                      <option value="">Select your primary service</option>
                      <option value="bathroom">Bathroom Remodeling</option>
                      <option value="roofing">Roofing</option>
                      <option value="hvac">HVAC</option>
                      <option value="solar">Solar Installation</option>
                      <option value="windows">Windows</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-900 mb-2">
                      Monthly Budget
                    </label>
                    <select
                      name="budget"
                      value={formData.budget}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    >
                      <option value="">Select budget range</option>
                      <option value="1000-2500">$1,000 - $2,500</option>
                      <option value="2500-5000">$2,500 - $5,000</option>
                      <option value="5000-10000">$5,000 - $10,000</option>
                      <option value="10000+">$10,000+</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-900 mb-2">
                    Service Area (Cities/States)
                  </label>
                  <input
                    type="text"
                    name="area"
                    value={formData.area}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    placeholder="e.g., Atlanta, GA; Birmingham, AL; Nashville, TN"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-900 mb-2">
                    Tell Us About Your Business
                  </label>
                  <textarea
                    rows={4}
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    placeholder="Tell us about your experience, team size, current marketing challenges, and goals..."
                    required
                  />
                </div>

                {submitStatus && (
                  <div
                    className={`p-4 rounded-xl flex items-center gap-3 ${
                      submitStatus === "success"
                        ? "bg-green-50 border border-green-200 text-green-800"
                        : "bg-red-50 border border-red-200 text-red-800"
                    }`}
                  >
                    <CheckCircleIcon
                      className={`w-5 h-5 ${
                        submitStatus === "success" ? "text-green-600" : "text-red-600"
                      }`}
                    />
                    <span className="font-medium">{submitMessage}</span>
                    {submitStatus === "error" && (
                      <button
                        type="button"
                        onClick={() => setSubmitStatus(null)}
                        className="ml-auto text-red-600 hover:text-red-800"
                      >
                        <XMarkIcon className="w-4 h-4" />
                      </button>
                    )}
                  </div>
                )}

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`w-full px-8 py-4 rounded-2xl text-lg font-semibold transition-all duration-300 shadow-xl hover:shadow-2xl ${
                    isSubmitting
                      ? "bg-gray-400 text-gray-600 cursor-not-allowed"
                      : "bg-blue-600 text-white hover:bg-blue-700 transform hover:-translate-y-0.5"
                  }`}
                >
                  {isSubmitting ? (
                    <span className="flex items-center justify-center gap-2">
                      <span className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></span>
                      Sending Message...
                    </span>
                  ) : (
                    "Get My Free Lead Generation Strategy"
                  )}
                </button>

                <p className="text-sm text-gray-500 text-center">
                  By submitting this form, you agree to receive communications
                  from Leadsiology. We respect your privacy and will never share
                  your information.
                </p>
              </form>
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
                © {new Date().getFullYear()} Leadsiology. All rights reserved. Premium lead generation
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



