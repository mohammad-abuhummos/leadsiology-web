"use client";

import Image from "next/image";
import { useState, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import {
  ShieldCheckIcon,
  ClockIcon,
  UserGroupIcon,
  PhoneIcon,
  EnvelopeIcon,
  MapPinIcon,
  XMarkIcon,
  CheckCircleIcon,
  CogIcon,
  HomeIcon,
  BoltIcon,
  ChatBubbleLeftRightIcon,
  DocumentCheckIcon,
  SparklesIcon,
  TrophyIcon,
  StarIcon,
  BuildingOfficeIcon,
  WrenchScrewdriverIcon,
} from "@heroicons/react/24/solid";
import {
  CursorArrowRaysIcon,
  CheckBadgeIcon,
  HeartIcon,
  ArrowRightIcon,
  ChartBarIcon,
  GlobeAltIcon,
  Bars3Icon,
} from "@heroicons/react/24/outline";

// Register GSAP plugins
gsap.registerPlugin(ScrollTrigger);

export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [selectedService, setSelectedService] = useState(null);
  const heroRef = useRef();
  const featuresRef = useRef();

  // Comprehensive service details
  const services = [
    {
      id: "bathroom",
      name: "Bathroom Remodeling",
      image: "/assets/bathroom.webp",
      description:
        "Premium bathroom renovation leads with high-value projects averaging $25,000+",
      icon: HomeIcon,
      details: {
        averageValue: "$25,000",
        conversionRate: "18%",
        demandLevel: "Very High",
        features: [
          "Complete bathroom renovations ($15K-$50K projects)",
          "Walk-in shower and tub installations",
          "Vanity and cabinet replacements",
          "Tile and flooring installations",
          "Plumbing fixture upgrades",
          "ADA compliance modifications",
        ],
        targetCustomers: [
          "Homeowners planning major renovations",
          "Aging-in-place modifications",
          "Luxury upgrade seekers",
          "Investment property owners",
        ],
        leadTypes: [
          "Full bathroom remodels",
          "Shower-to-tub conversions",
          "Accessibility modifications",
          "Luxury upgrades",
        ],
      },
    },
    {
      id: "roofing",
      name: "Roofing Services",
      image: "/assets/roofing.webp",
      description:
        "High-converting roofing leads for storm damage, repairs, and replacements",
      icon: HomeIcon,
      details: {
        averageValue: "$18,000",
        conversionRate: "22%",
        demandLevel: "High",
        features: [
          "Roof replacement projects ($12K-$30K average)",
          "Storm damage restoration",
          "Insurance claim assistance",
          "Emergency roof repairs",
          "Gutter installation and repair",
          "Siding replacement projects",
        ],
        targetCustomers: [
          "Storm-affected homeowners",
          "Aging roof replacements (15+ years)",
          "Insurance claim recipients",
          "New construction projects",
        ],
        leadTypes: [
          "Storm damage claims",
          "Roof replacements",
          "Repair services",
          "Preventive maintenance",
        ],
      },
    },
    {
      id: "hvac",
      name: "HVAC Services",
      image: "/assets/hvac.webp",
      description:
        "Year-round HVAC leads for installations, repairs, and maintenance contracts",
      icon: CogIcon,
      details: {
        averageValue: "$8,500",
        conversionRate: "25%",
        demandLevel: "High",
        features: [
          "HVAC system replacements ($5K-$15K projects)",
          "Emergency repair services",
          "Maintenance contract opportunities",
          "Energy efficiency upgrades",
          "Ductwork installations",
          "Smart thermostat integrations",
        ],
        targetCustomers: [
          "System replacement needs (10+ year old units)",
          "Emergency repair situations",
          "Energy efficiency seekers",
          "New construction projects",
        ],
        leadTypes: [
          "System replacements",
          "Emergency repairs",
          "Maintenance contracts",
          "Energy upgrades",
        ],
      },
    },
    {
      id: "solar",
      name: "Solar Installation",
      image: "/assets/solar.webp",
      description:
        "Qualified solar installation leads with strong ROI potential",
      icon: BoltIcon,
      details: {
        averageValue: "$28,000",
        conversionRate: "15%",
        demandLevel: "Growing",
        features: [
          "Residential solar installations ($20K-$50K projects)",
          "Battery storage systems",
          "Federal and state rebate assistance",
          "Financing option consultations",
          "Energy audit services",
          "Grid-tie system installations",
        ],
        targetCustomers: [
          "Environmentally conscious homeowners",
          "High electricity bill households",
          "Energy independence seekers",
          "Investment-minded property owners",
        ],
        leadTypes: [
          "Full home solar systems",
          "Battery storage additions",
          "Solar + storage bundles",
          "Commercial installations",
        ],
      },
    },
    {
      id: "windows",
      name: "Windows & Doors",
      image: "/assets/windows.webp",
      description: "Energy-efficient window and door replacement leads",
      icon: BuildingOfficeIcon,
      details: {
        averageValue: "$12,000",
        conversionRate: "20%",
        demandLevel: "Steady",
        features: [
          "Energy-efficient window replacements",
          "Entry door installations",
          "Patio door upgrades",
          "Storm door installations",
          "Custom window solutions",
          "Energy rebate assistance",
        ],
        targetCustomers: [
          "Energy efficiency upgrade seekers",
          "Home value improvement projects",
          "Noise reduction needs",
          "Security enhancement requests",
        ],
        leadTypes: [
          "Full home window replacement",
          "Single window replacements",
          "Door installations",
          "Energy efficiency upgrades",
        ],
      },
    },
  ];

  useGSAP(() => {
    // Advanced animations with GSAP
    const heroTl = gsap.timeline({ delay: 0.5 });

    heroTl
      .fromTo(
        ".hero-badge",
        { opacity: 0, scale: 0.8, y: -20 },
        { opacity: 1, scale: 1, y: 0, duration: 0.8, ease: "back.out(1.7)" }
      )
      .fromTo(
        ".hero-title .word",
        { opacity: 0, y: 100, rotationX: -90 },
        {
          opacity: 1,
          y: 0,
          rotationX: 0,
          duration: 1.2,
          stagger: 0.1,
          ease: "power3.out",
        },
        "-=0.3"
      )
      .fromTo(
        ".hero-subtitle",
        { opacity: 0, y: 50 },
        { opacity: 1, y: 0, duration: 1, ease: "power2.out" },
        "-=0.8"
      )
      .fromTo(
        ".hero-stats",
        { opacity: 0, scale: 0.9 },
        { opacity: 1, scale: 1, duration: 0.8, ease: "back.out(1.7)" },
        "-=0.5"
      )
      .fromTo(
        ".hero-cta",
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 0.8, ease: "power2.out" },
        "-=0.6"
      );

    // Service cards animation
    gsap.fromTo(
      ".service-card",
      {
        opacity: 0,
        y: 100,
        scale: 0.8,
      },
      {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 1,
        stagger: 0.15,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".services-section",
          start: "top 75%",
        },
      }
    );

    // Feature cards animation
    gsap.fromTo(
      ".feature-card",
      {
        opacity: 0,
        y: 80,
        scale: 0.9,
      },
      {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 1.2,
        stagger: 0.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: featuresRef.current,
          start: "top 80%",
        },
      }
    );
  });

  return (
    <div className="bg-white text-black">
      {/* Service Detail Modal */}
      {selectedService && (
        <div className="fixed inset-0 z-50 overflow-y-auto">
          <div className="flex items-center justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
            <div
              className="fixed inset-0 transition-opacity"
              onClick={() => setSelectedService(null)}
            >
              <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
            </div>

            <div className="inline-block align-bottom bg-white rounded-3xl text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-4xl sm:w-full">
              {(() => {
                const service = services.find((s) => s.id === selectedService);
                if (!service) return null;

                return (
                  <div className="bg-white">
                    {/* Header */}
                    <div className="relative">
                      <Image
                        src={service.image}
                        alt={service.name}
                        width={800}
                        height={300}
                        className="w-full h-64 object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                      <button
                        onClick={() => setSelectedService(null)}
                        className="absolute top-4 right-4 w-10 h-10 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center"
                      >
                        <XMarkIcon className="w-6 h-6 text-gray-600" />
                      </button>
                      <div className="absolute bottom-6 left-6 text-white">
                        <h2 className="text-3xl font-bold mb-2">
                          {service.name}
                        </h2>
                        <p className="text-lg opacity-90">
                          {service.description}
                        </p>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="p-8">
                      {/* Key Metrics */}
                      <div className="grid grid-cols-3 gap-6 mb-8 p-6 bg-blue-50 rounded-2xl">
                        <div className="text-center">
                          <div className="text-2xl font-bold text-blue-600">
                            {service.details.averageValue}
                          </div>
                          <div className="text-sm text-gray-600">
                            Average Project Value
                          </div>
                        </div>
                        <div className="text-center">
                          <div className="text-2xl font-bold text-blue-600">
                            {service.details.conversionRate}
                          </div>
                          <div className="text-sm text-gray-600">
                            Conversion Rate
                          </div>
                        </div>
                        <div className="text-center">
                          <div className="text-2xl font-bold text-blue-600">
                            {service.details.demandLevel}
                          </div>
                          <div className="text-sm text-gray-600">
                            Market Demand
                          </div>
                        </div>
                      </div>

                      <div className="grid md:grid-cols-2 gap-8">
                        {/* Service Features */}
                        <div>
                          <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                            <SparklesIcon className="w-5 h-5 text-blue-600" />
                            Service Features
                          </h3>
                          <ul className="space-y-3">
                            {service.details.features.map((feature, idx) => (
                              <li key={idx} className="flex items-start gap-3">
                                <CheckCircleIcon className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
                                <span className="text-gray-700">{feature}</span>
                              </li>
                            ))}
                          </ul>
                        </div>

                        {/* Target Customers */}
                        <div>
                          <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                            <UserGroupIcon className="w-5 h-5 text-blue-600" />
                            Target Customers
                          </h3>
                          <ul className="space-y-3">
                            {service.details.targetCustomers.map(
                              (customer, idx) => (
                                <li
                                  key={idx}
                                  className="flex items-start gap-3"
                                >
                                  <ArrowRightIcon className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
                                  <span className="text-gray-700">
                                    {customer}
                                  </span>
                                </li>
                              )
                            )}
                          </ul>
                        </div>
                      </div>

                      {/* CTA */}
                      <div className="mt-8 pt-6 border-t border-gray-200 text-center">
                        <a
                          href="#contact"
                          onClick={() => setSelectedService(null)}
                          className="inline-flex items-center gap-2 bg-blue-600 text-white px-8 py-4 rounded-2xl font-semibold hover:bg-blue-700 transition-colors"
                        >
                          <BoltIcon className="w-5 h-5" />
                          Start Receiving {service.name} Leads
                        </a>
                      </div>
                    </div>
                  </div>
                );
              })()}
            </div>
          </div>
        </div>
      )}

      {/* Navigation */}
      <header className="absolute inset-x-0 top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-100">
        <nav className="flex items-center justify-between p-6 lg:px-8">
          <div className="flex lg:flex-1">
            <a href="#" className="-m-1.5 p-1.5">
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
              href="#services"
              className="text-sm font-semibold text-gray-900 hover:text-blue-600 transition-colors"
            >
              Services
            </a>
            <a
              href="#features"
              className="text-sm font-semibold text-gray-900 hover:text-blue-600 transition-colors"
            >
              Why Choose Us
            </a>
            <a
              href="#process"
              className="text-sm font-semibold text-gray-900 hover:text-blue-600 transition-colors"
            >
              How It Works
            </a>
            <a
              href="#contact"
              className="text-sm font-semibold text-gray-900 hover:text-blue-600 transition-colors"
            >
              Contact
            </a>
          </div>

          <div className="hidden lg:flex lg:flex-1 lg:justify-end">
            <a
              href="#contact"
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
      </header>

      {/* Hero Section */}
      <section
        ref={heroRef}
        className="relative px-6 pt-20 lg:px-8 min-h-screen flex items-center bg-gradient-to-br from-blue-50/30 via-white to-blue-50/20"
      >
        <div className="mx-auto max-w-4xl py-20 text-center">
          <div className="hero-badge mb-8">
            <div className="inline-flex items-center gap-2 bg-blue-50 border border-blue-200 text-blue-700 px-6 py-3 rounded-full text-sm font-semibold shadow-sm">
              <TrophyIcon className="w-4 h-4" />
              #1 Lead Generation Platform for Home Improvement
            </div>
          </div>

          <h1 className="hero-title text-5xl sm:text-7xl font-bold tracking-tight mb-8">
            <span className="word block text-gray-900">Premium</span>
            <span className="word block bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">
              Leads
            </span>
            <span className="word block text-2xl sm:text-4xl font-semibold mt-2 text-gray-700">
              for Home Improvement Contractors
            </span>
          </h1>

          <p className="hero-subtitle text-xl leading-8 text-gray-600 max-w-3xl mx-auto mb-12">
            Connect with qualified homeowners ready to invest in premium home
            improvement projects.
            <span className="font-semibold text-gray-800">
              Grow your business
            </span>{" "}
            with exclusive, pre-screened leads delivered in real-time.
          </p>

          <div className="hero-stats grid grid-cols-3 gap-6 max-w-2xl mx-auto mb-12">
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-4 shadow-lg border border-gray-100">
              <div className="text-3xl font-bold text-blue-600">500+</div>
              <div className="text-sm text-gray-600 font-medium">
                Active Contractors
              </div>
            </div>
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-4 shadow-lg border border-gray-100">
              <div className="text-3xl font-bold text-blue-600">15k+</div>
              <div className="text-sm text-gray-600 font-medium">
                Leads Generated
              </div>
            </div>
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-4 shadow-lg border border-gray-100">
              <div className="text-3xl font-bold text-blue-600">92%</div>
              <div className="text-sm text-gray-600 font-medium">
                Success Rate
              </div>
            </div>
          </div>

          <div className="hero-cta flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="#contact"
              className="inline-flex items-center gap-2 bg-blue-600 text-white px-8 py-4 rounded-2xl text-lg font-semibold shadow-xl hover:bg-blue-700 hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300"
            >
              <BoltIcon className="w-5 h-5" />
              Get Started Today
            </a>
            <a
              href="#services"
              className="inline-flex items-center gap-2 bg-white text-gray-700 px-6 py-3 rounded-xl text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200"
            >
              View Services
              <ArrowRightIcon className="w-5 h-5" />
            </a>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="services-section py-24 bg-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-blue-50 border border-blue-200 text-blue-700 px-6 py-3 rounded-full text-sm font-semibold mb-8">
              <WrenchScrewdriverIcon className="w-4 h-4" />
              Premium Lead Generation Services
            </div>
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Specialized Leads for Every Home Improvement Niche
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We generate high-converting leads across all major home
              improvement categories. Click on any service below to see detailed
              information about lead types, target customers, and conversion
              rates.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.slice(0, 6).map((service, index) => (
              <div
                key={service.id}
                className="service-card group relative cursor-pointer"
                onClick={() => setSelectedService(service.id)}
              >
                <div className="bg-white rounded-3xl shadow-xl ring-1 ring-gray-100 overflow-hidden transition-all duration-300 hover:shadow-2xl hover:-translate-y-2">
                  <div className="aspect-[4/3] relative overflow-hidden">
                    <Image
                      src={service.image}
                      alt={service.name}
                      width={400}
                      height={300}
                      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                    <div className="absolute top-4 right-4 w-12 h-12 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center">
                      <service.icon className="w-6 h-6 text-blue-600" />
                    </div>
                  </div>

                  <div className="p-8">
                    <h3 className="text-2xl font-bold text-gray-900 mb-3">
                      {service.name}
                    </h3>
                    <p className="text-gray-600 mb-6 leading-relaxed">
                      {service.description}
                    </p>

                    <div className="flex items-center justify-between">
                      <div className="text-blue-600 font-semibold group-hover:text-blue-700">
                        View Details
                      </div>
                      <ArrowRightIcon className="w-5 h-5 text-blue-600 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us - Content-Rich Features Section */}
      <section id="features" ref={featuresRef} className="py-24 bg-gray-50">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center mb-20">
            <div className="inline-flex items-center gap-2 bg-blue-50 border border-blue-200 text-blue-700 px-6 py-3 rounded-full text-sm font-semibold mb-8">
              <TrophyIcon className="w-4 h-4" />
              Why Top Contractors Choose Leadsiology
            </div>
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              The Complete Lead Generation Solution
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto">
              We&apos;ve built the most advanced lead generation system in the
              home improvement industry. Our technology, combined with rigorous
              qualification processes, delivers results that transform
              businesses.
            </p>
          </div>

          {/* Main Value Propositions */}
          <div className="grid lg:grid-cols-2 gap-12 mb-20">
            <div className="feature-card bg-white rounded-3xl p-8 shadow-xl">
              <div className="flex items-start gap-6 mb-8">
                <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center">
                  <ShieldCheckIcon className="w-8 h-8 text-blue-600" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">
                    100% Exclusive Leads
                  </h3>
                  <p className="text-blue-600 font-semibold">
                    Zero Competition Guarantee
                  </p>
                </div>
              </div>

              <p className="text-gray-600 text-lg leading-relaxed mb-8">
                Every lead we deliver is exclusively yours. No bidding wars, no
                shared contacts, no competitors calling the same prospect. When
                a homeowner expresses interest, you&apos;re the only contractor
                they&apos;ll hear from, giving you a massive competitive
                advantage.
              </p>

              <div className="space-y-4 mb-8">
                <div className="flex items-center gap-3">
                  <CheckCircleIcon className="w-5 h-5 text-blue-600" />
                  <span className="text-gray-700 font-medium">
                    Never shared with competitors
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircleIcon className="w-5 h-5 text-blue-600" />
                  <span className="text-gray-700 font-medium">
                    Higher conversion rates (3x industry average)
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircleIcon className="w-5 h-5 text-blue-600" />
                  <span className="text-gray-700 font-medium">
                    Build stronger customer relationships
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircleIcon className="w-5 h-5 text-blue-600" />
                  <span className="text-gray-700 font-medium">
                    Complete prospect contact information
                  </span>
                </div>
              </div>

              <div className="bg-blue-50 rounded-2xl p-6">
                <div className="grid grid-cols-2 gap-6 text-center">
                  <div>
                    <div className="text-3xl font-bold text-blue-600">3x</div>
                    <div className="text-sm text-gray-600">
                      Higher Conversion
                    </div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-blue-600">94%</div>
                    <div className="text-sm text-gray-600">
                      Client Satisfaction
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="feature-card bg-white rounded-3xl p-8 shadow-xl">
              <div className="flex items-start gap-6 mb-8">
                <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center">
                  <BoltIcon className="w-8 h-8 text-blue-600" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">
                    Real-Time Lead Delivery
                  </h3>
                  <p className="text-blue-600 font-semibold">
                    Strike While the Iron is Hot
                  </p>
                </div>
              </div>

              <p className="text-gray-600 text-lg leading-relaxed mb-8">
                Speed is everything in lead conversion. Our advanced system
                delivers leads within 60 seconds through multiple channels,
                ensuring you&apos;re always first to respond. Studies show that
                contacting leads within the first hour increases conversion by
                7x.
              </p>

              <div className="space-y-4 mb-8">
                <div className="flex items-center gap-3">
                  <CheckCircleIcon className="w-5 h-5 text-blue-600" />
                  <span className="text-gray-700 font-medium">
                    Instant SMS and email notifications
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircleIcon className="w-5 h-5 text-blue-600" />
                  <span className="text-gray-700 font-medium">
                    Mobile app push notifications
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircleIcon className="w-5 h-5 text-blue-600" />
                  <span className="text-gray-700 font-medium">
                    Direct CRM integration available
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircleIcon className="w-5 h-5 text-blue-600" />
                  <span className="text-gray-700 font-medium">
                    Phone call alerts for urgent leads
                  </span>
                </div>
              </div>

              <div className="bg-blue-50 rounded-2xl p-6">
                <div className="grid grid-cols-2 gap-6 text-center">
                  <div>
                    <div className="text-3xl font-bold text-blue-600">
                      &lt;60s
                    </div>
                    <div className="text-sm text-gray-600">Delivery Time</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-blue-600">7x</div>
                    <div className="text-sm text-gray-600">
                      Higher Close Rate
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Additional Features Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: CheckBadgeIcon,
                title: "Pre-Qualified Prospects",
                description:
                  "Every lead is thoroughly screened for budget ($10K+ projects), timeline (ready within 6 months), and decision-making authority.",
                stat: "91% qualification rate",
              },
              {
                icon: ChartBarIcon,
                title: "Advanced Lead Scoring",
                description:
                  "AI-powered system analyzes 50+ data points to rank leads by conversion probability and estimated project value.",
                stat: "40% higher close rates",
              },
              {
                icon: UserGroupIcon,
                title: "Dedicated Success Manager",
                description:
                  "Personal account manager monitors your campaigns, optimizes targeting, and provides strategic guidance.",
                stat: "24/7 support available",
              },
              {
                icon: DocumentCheckIcon,
                title: "Comprehensive Analytics",
                description:
                  "Real-time dashboard tracks lead quality, conversion rates, ROI, and campaign performance with detailed insights.",
                stat: "Live reporting",
              },
            ].map((feature, index) => (
              <div
                key={index}
                className="feature-card bg-white rounded-2xl p-6 shadow-lg"
              >
                <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mb-6">
                  <feature.icon className="w-6 h-6 text-blue-600" />
                </div>
                <h4 className="text-lg font-bold text-gray-900 mb-4">
                  {feature.title}
                </h4>
                <p className="text-gray-600 mb-4 leading-relaxed">
                  {feature.description}
                </p>
                <div className="text-blue-600 font-semibold text-sm">
                  {feature.stat}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works Section - Comprehensive 4-Step Process */}
      <section id="process" className="py-24 bg-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center mb-20">
            <div className="inline-flex items-center gap-2 bg-blue-50 border border-blue-200 text-blue-700 px-6 py-3 rounded-full text-sm font-semibold mb-8">
              <CogIcon className="w-4 h-4" />
              Our Proven Lead Generation Process
            </div>
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              From Prospect to Paying Customer in 4 Simple Steps
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto">
              Our systematic approach combines cutting-edge marketing technology
              with proven qualification processes to deliver the highest quality
              leads in the home improvement industry.
            </p>
          </div>

          <div className="space-y-16">
            {[
              {
                step: "01",
                title: "Advanced Targeting & Campaign Setup",
                subtitle: "Precision Marketing That Finds Your Ideal Customers",
                description:
                  "We create highly targeted marketing campaigns using advanced demographic, psychographic, and behavioral data. Our campaigns reach homeowners who match your exact ideal customer profile, ensuring every lead has genuine intent and budget.",
                features: [
                  "Geographic targeting within your service area",
                  "Income-based qualification ($50K+ household income)",
                  "Homeownership verification and property value analysis",
                  "Interest-based targeting (recent home searches, renovation content)",
                  "Competitor analysis and market positioning",
                ],
                icon: CursorArrowRaysIcon,
                metrics: {
                  reach: "10M+ homeowners",
                  targeting: "99% accuracy",
                },
              },
              {
                step: "02",
                title: "Multi-Channel Lead Capture",
                subtitle: "Meeting Prospects Where They Are",
                description:
                  "We engage potential customers across multiple digital touchpoints using proven conversion tactics. Our omnichannel approach includes search marketing, social media advertising, content marketing, and strategic partnerships.",
                features: [
                  "Google Ads and search engine marketing",
                  "Facebook and Instagram advertising campaigns",
                  "Content marketing and SEO-driven traffic",
                  "Partner network and referral programs",
                  "Retargeting campaigns for warm prospects",
                ],
                icon: GlobeAltIcon,
                metrics: {
                  channels: "15+ platforms",
                  conversion: "12% avg rate",
                },
              },
              {
                step: "03",
                title: "Rigorous Qualification Process",
                subtitle: "Ensuring Every Lead Meets Your Standards",
                description:
                  "Every prospect goes through our comprehensive 5-point qualification system before being passed to you. We verify budget, timeline, decision-making authority, property ownership, and project scope to ensure maximum conversion potential.",
                features: [
                  "Budget verification ($10K+ minimum project size)",
                  "Timeline qualification (ready within 6 months)",
                  "Decision maker identification and contact",
                  "Property ownership and improvement eligibility",
                  "Project scope and complexity assessment",
                ],
                icon: CheckBadgeIcon,
                metrics: {
                  qualification: "91% pass rate",
                  quality: "8.7/10 rating",
                },
              },
              {
                step: "04",
                title: "Instant Lead Delivery & Support",
                subtitle: "Real-Time Delivery With Ongoing Optimization",
                description:
                  "Qualified leads are delivered to you within 60 seconds through your preferred communication channels. Our team provides ongoing campaign optimization and performance analysis to continuously improve lead quality and conversion rates.",
                features: [
                  "Real-time SMS, email, and phone notifications",
                  "Detailed lead profiles with all contact information",
                  "CRM integration and automated follow-up sequences",
                  "Performance tracking and analytics dashboard",
                  "Ongoing campaign optimization and A/B testing",
                ],
                icon: BoltIcon,
                metrics: {
                  delivery: "<60 seconds",
                  support: "24/7 availability",
                },
              },
            ].map((step, index) => (
              <div key={index} className="relative">
                <div className="lg:grid lg:grid-cols-12 lg:gap-16">
                  <div className="lg:col-span-5">
                    <div className="flex items-center gap-4 mb-6">
                      <div className="w-16 h-16 bg-blue-600 rounded-2xl flex items-center justify-center text-white text-xl font-bold">
                        {step.step}
                      </div>
                      <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center">
                        <step.icon className="w-6 h-6 text-blue-600" />
                      </div>
                    </div>

                    <h3 className="text-3xl font-bold text-gray-900 mb-3">
                      {step.title}
                    </h3>
                    <p className="text-blue-600 font-semibold text-lg mb-6">
                      {step.subtitle}
                    </p>
                    <p className="text-gray-600 text-lg leading-relaxed mb-8">
                      {step.description}
                    </p>

                    <div className="grid grid-cols-2 gap-6 bg-blue-50 rounded-2xl p-6">
                      {Object.entries(step.metrics).map(([key, value], idx) => (
                        <div key={idx} className="text-center">
                          <div className="text-2xl font-bold text-blue-600 mb-1">
                            {value}
                          </div>
                          <div className="text-sm text-gray-600 capitalize">
                            {key}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="mt-8 lg:mt-0 lg:col-span-7">
                    <div className="bg-white rounded-3xl p-8 shadow-xl">
                      <h4 className="text-xl font-bold text-gray-900 mb-6">
                        Key Process Elements
                      </h4>
                      <div className="space-y-4">
                        {step.features.map((feature, idx) => (
                          <div key={idx} className="flex items-start gap-3">
                            <CheckCircleIcon className="w-6 h-6 text-blue-600 mt-0.5 flex-shrink-0" />
                            <span className="text-gray-700 font-medium">
                              {feature}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                {/* {index < 3 && (
                   <div className="hidden lg:block absolute left-8 top-20 w-0.5 h-32 bg-blue-200" />
                 )} */}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Success Stories Section */}
      <section className="py-24 bg-gray-50">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-blue-50 border border-blue-200 text-blue-700 px-6 py-3 rounded-full text-sm font-semibold mb-8">
              <StarIcon className="w-4 h-4" />
              Success Stories & Testimonials
            </div>
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Real Results From Real Contractors
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              See how contractors across the country have transformed their
              businesses with our exclusive lead generation system.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8 mb-16">
            {[
              {
                name: "Mike Rodriguez",
                company: "Elite Bathroom Renovations",
                location: "Austin, TX",
                service: "Bathroom Remodeling",
                revenue: "$2.3M annually",
                growth: "340% increase",
                testimonial:
                  "Leadsiology completely transformed our business. We went from struggling to find quality leads to having a consistent pipeline of high-value bathroom renovation projects. The leads are exclusive and pre-qualified, which means our close rate jumped from 15% to over 45%.",
                image: "/api/placeholder/100/100",
              },
              {
                name: "Sarah Thompson",
                company: "Apex Roofing Solutions",
                location: "Denver, CO",
                service: "Roofing",
                revenue: "$1.8M annually",
                growth: "280% increase",
                testimonial:
                  "The real-time lead delivery is a game-changer. We receive leads within minutes and can respond while homeowners are still actively looking for contractors. Our conversion rate improved dramatically, and we&apos;ve expanded our team from 3 to 15 employees.",
                image: "/api/placeholder/100/100",
              },
              {
                name: "David Chen",
                company: "Premier Solar Installations",
                location: "Phoenix, AZ",
                service: "Solar Installation",
                revenue: "$3.1M annually",
                growth: "425% increase",
                testimonial:
                  "The quality of leads is outstanding. Every homeowner we speak with has genuine interest and the budget for solar installations. We&apos;ve closed over $850K in projects just in the last quarter, and our ROI on lead costs is consistently over 400%.",
                image: "/api/placeholder/100/100",
              },
            ].map((story, index) => (
              <div key={index} className="bg-white rounded-3xl p-8 shadow-xl">
                <div className="flex items-start gap-4 mb-6">
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center text-2xl font-bold text-blue-600">
                    {story.name
                      .split(" ")
                      .map((n) => n[0])
                      .join("")}
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-gray-900">
                      {story.name}
                    </h3>
                    <p className="text-blue-600 font-medium">{story.company}</p>
                    <p className="text-sm text-gray-500">{story.location}</p>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4 mb-6 p-4 bg-blue-50 rounded-2xl">
                  <div className="text-center">
                    <div className="text-lg font-bold text-blue-600">
                      {story.revenue}
                    </div>
                    <div className="text-xs text-gray-600">Annual Revenue</div>
                  </div>
                  <div className="text-center">
                    <div className="text-lg font-bold text-blue-600">
                      {story.growth}
                    </div>
                    <div className="text-xs text-gray-600">Growth Rate</div>
                  </div>
                </div>

                <p className="text-gray-600 leading-relaxed mb-6 italic">
                  &ldquo;{story.testimonial}&rdquo;
                </p>

                <div className="flex items-center gap-1 mb-2">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <StarIcon key={star} className="w-4 h-4 text-yellow-400" />
                  ))}
                </div>
                <p className="text-sm text-gray-500">
                  {story.service} Specialist
                </p>
              </div>
            ))}
          </div>

          {/* Stats Section */}
          <div className="bg-blue-600 rounded-3xl p-8 text-white">
            <h3 className="text-3xl font-bold text-center mb-12">
              Our Track Record Speaks for Itself
            </h3>
            <div className="grid md:grid-cols-4 gap-8">
              {[
                {
                  number: "500+",
                  label: "Active Contractors",
                  description: "Trusted partners nationwide",
                },
                {
                  number: "15,000+",
                  label: "Leads Generated",
                  description: "High-quality prospects delivered",
                },
                {
                  number: "$2.8B+",
                  label: "Revenue Generated",
                  description: "For our contractor partners",
                },
                {
                  number: "92%",
                  label: "Client Retention",
                  description: "Long-term partnerships",
                },
              ].map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-4xl font-bold mb-2">{stat.number}</div>
                  <div className="text-xl font-semibold mb-2">{stat.label}</div>
                  <div className="text-blue-100 text-sm">
                    {stat.description}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      {/* <section className="py-24 bg-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-blue-50 border border-blue-200 text-blue-700 px-6 py-3 rounded-full text-sm font-semibold mb-8">
              <ChatBubbleLeftRightIcon className="w-4 h-4" />
              Transparent Pricing Plans
            </div>
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Choose the Perfect Plan for Your Business
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              No hidden fees, no long-term contracts. Pay only for the
              high-quality leads you receive. All plans include our exclusive
              lead guarantee and 24/7 support.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8 mb-12">
            {[
              {
                name: "Starter",
                price: "$150",
                period: "per lead",
                description:
                  "Perfect for new contractors or those testing our service",
                features: [
                  "5-10 exclusive leads per month",
                  "Real-time lead delivery",
                  "Basic lead qualification",
                  "Email and SMS notifications",
                  "Standard customer support",
                  "30-day money-back guarantee",
                ],
                popular: false,
                cta: "Start Free Trial",
              },
              {
                name: "Professional",
                price: "$125",
                period: "per lead",
                description: "Most popular choice for established contractors",
                features: [
                  "15-25 exclusive leads per month",
                  "Priority lead delivery (<30 seconds)",
                  "Advanced lead qualification",
                  "Multi-channel notifications",
                  "Dedicated success manager",
                  "CRM integration available",
                  "Performance analytics dashboard",
                  "60-day money-back guarantee",
                ],
                popular: true,
                cta: "Get Started Now",
              },
              {
                name: "Enterprise",
                price: "$100",
                period: "per lead",
                description:
                  "For high-volume contractors and growing businesses",
                features: [
                  "30+ exclusive leads per month",
                  "Instant lead delivery (<15 seconds)",
                  "Premium lead qualification",
                  "Custom notification preferences",
                  "Personal account manager",
                  "Full CRM integration",
                  "Advanced analytics & reporting",
                  "Custom campaign optimization",
                  "90-day money-back guarantee",
                ],
                popular: false,
                cta: "Contact Sales",
              },
            ].map((plan, index) => (
              <div
                key={index}
                className={`relative rounded-3xl p-8 shadow-xl ${
                  plan.popular ? "ring-2 ring-blue-600 bg-blue-50" : "bg-white"
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <div className="bg-blue-600 text-white px-4 py-2 rounded-full text-sm font-semibold">
                      Most Popular
                    </div>
                  </div>
                )}

                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">
                    {plan.name}
                  </h3>
                  <div className="flex items-center justify-center gap-1 mb-2">
                    <span className="text-4xl font-bold text-blue-600">
                      {plan.price}
                    </span>
                    <span className="text-gray-500">/{plan.period}</span>
                  </div>
                  <p className="text-gray-600">{plan.description}</p>
                </div>

                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <CheckCircleIcon className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>

                <button
                  className={`w-full py-4 px-6 rounded-2xl font-semibold transition-colors ${
                    plan.popular
                      ? "bg-blue-600 text-white hover:bg-blue-700"
                      : "bg-gray-100 text-gray-900 hover:bg-gray-200"
                  }`}
                >
                  {plan.cta}
                </button>
              </div>
            ))}
          </div>

          <div className="text-center">
            <p className="text-gray-600 mb-6">
              All plans include our Lead Quality Guarantee. If a lead
              doesn&apos;t meet our qualification standards, we&apos;ll replace
              it for free or provide a full refund.
            </p>
            <div className="inline-flex items-center gap-2 bg-green-50 border border-green-200 text-green-700 px-6 py-3 rounded-full text-sm font-semibold">
              <CheckCircleIcon className="w-4 h-4" />
              No Setup Fees • No Long-term Contracts • Cancel Anytime
            </div>
          </div>
        </div>
      </section> */}

      {/* FAQ Section */}
      <section className="py-24 bg-gray-50">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-blue-50 border border-blue-200 text-blue-700 px-6 py-3 rounded-full text-sm font-semibold mb-8">
              <ChatBubbleLeftRightIcon className="w-4 h-4" />
              Frequently Asked Questions
            </div>
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Everything You Need to Know
            </h2>
            <p className="text-xl text-gray-600">
              Get answers to the most common questions about our lead generation
              service and how it works.
            </p>
          </div>

          <div className="space-y-6">
            {[
              {
                question:
                  "How are your leads different from other lead generation companies?",
                answer:
                  "Our leads are 100% exclusive, meaning they're never shared with your competitors. Unlike other companies that sell the same lead to multiple contractors, when you receive a lead from us, you're the only contractor contacting that homeowner. This dramatically increases your conversion rates and eliminates bidding wars.",
              },
              {
                question: "What is your lead qualification process?",
                answer:
                  "Every lead goes through our rigorous 5-point qualification system: (1) Budget verification with $10K+ minimum project size, (2) Timeline qualification ensuring they're ready within 6 months, (3) Decision maker identification, (4) Property ownership verification, and (5) Project scope assessment. Only leads that pass all criteria are delivered to you.",
              },
              {
                question: "How quickly will I receive leads after signing up?",
                answer:
                  "Most contractors receive their first qualified lead within 48-72 hours of campaign setup. Our team works quickly to configure your targeting parameters and launch campaigns across our network of marketing channels. Lead delivery is typically within 60 seconds of qualification.",
              },
              {
                question:
                  "What happens if a lead doesn't meet your qualification standards?",
                answer:
                  "We stand behind our Lead Quality Guarantee. If any lead fails to meet our stated qualification criteria, we'll either replace it with a qualified lead at no charge or provide a full refund. We track all lead interactions and continuously improve our qualification process.",
              },
              {
                question: "Can I target specific geographic areas?",
                answer:
                  "Yes, we provide precise geographic targeting down to the zip code level. You can specify your exact service areas, exclude certain regions, and even adjust lead volume by location based on your capacity and preferences. Our system ensures leads only come from areas you actively service.",
              },
              {
                question: "Do you offer CRM integration?",
                answer:
                  "Yes, we integrate with all major CRM systems including Salesforce, HubSpot, Pipedrive, ServiceTitan, and many others. We can automatically import lead data into your existing workflow, set up automated follow-up sequences, and sync lead status updates bidirectionally.",
              },
              {
                question: "What is your pricing model?",
                answer:
                  "We use a pay-per-lead model with no setup fees or long-term contracts. Pricing ranges from $100-$150 per qualified lead depending on your service type and volume. You only pay for leads that meet our qualification standards, and you can pause or cancel anytime without penalties.",
              },
              {
                question: "How do you generate leads?",
                answer:
                  "We use a multi-channel approach including Google Ads, Facebook/Instagram advertising, SEO-optimized content marketing, strategic partnerships, and retargeting campaigns. Our proprietary technology analyzes 50+ data points to identify and target homeowners most likely to convert into paying customers.",
              },
            ].map((faq, index) => (
              <div key={index} className="bg-white rounded-2xl p-8 shadow-lg">
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  {faq.question}
                </h3>
                <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <p className="text-gray-600 mb-6">
              Still have questions? Our team is here to help.
            </p>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 bg-blue-600 text-white px-8 py-4 rounded-2xl font-semibold hover:bg-blue-700 transition-colors"
            >
              <ChatBubbleLeftRightIcon className="w-5 h-5" />
              Contact Our Team
            </a>
          </div>
        </div>
      </section>

      {/* About Us Section */}
      <section className="py-24 bg-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center mb-20">
            <div className="inline-flex items-center gap-2 bg-blue-50 border border-blue-200 text-blue-700 px-6 py-3 rounded-full text-sm font-semibold mb-8">
              <BuildingOfficeIcon className="w-4 h-4" />
              About Leadsiology
            </div>
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Transforming Home Improvement Businesses Since 2025
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto">
              We started with a simple mission: help skilled contractors focus
              on their craft while we handle the complex world of digital
              marketing and lead generation.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 mb-20">
            <div>
              <h3 className="text-3xl font-bold text-gray-900 mb-6">
                Our Story
              </h3>
              <div className="space-y-6 text-lg text-gray-600 leading-relaxed">
                <p>
                  Founded in 2025 by a team of digital marketing veterans and
                  former contractors, Leadsiology was born from the frustration
                  of seeing talented professionals struggle to grow their
                  businesses due to inconsistent lead flow.
                </p>
                <p>
                  After spending years in the trenches with contractors across
                  the country, we realized the fundamental problem: most lead
                  generation companies prioritize quantity over quality, selling
                  the same leads to multiple contractors and creating a race to
                  the bottom.
                </p>
                <p>
                  We built Leadsiology on a different philosophy: exclusive,
                  high-quality leads that give our partners the best possible
                  chance of converting prospects into customers. Today, we work
                  with over 500 contractors nationwide and have generated over
                  $2.8 billion in revenue for our partners.
                </p>
              </div>
            </div>

            <div className="bg-blue-50 rounded-3xl p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                Our Mission
              </h3>
              <p className="text-lg text-gray-600 leading-relaxed mb-8">
                To empower home improvement contractors with the highest quality
                leads and marketing technology, enabling them to build thriving
                businesses while focusing on delivering exceptional
                craftsmanship to homeowners.
              </p>

              <div className="space-y-6">
                <div className="flex items-start gap-3">
                  <CheckCircleIcon className="w-6 h-6 text-blue-600 mt-0.5 flex-shrink-0" />
                  <div>
                    <h4 className="font-bold text-gray-900 mb-1">
                      Quality Over Quantity
                    </h4>
                    <p className="text-gray-600">
                      We believe one exclusive, qualified lead is worth more
                      than ten shared leads.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircleIcon className="w-6 h-6 text-blue-600 mt-0.5 flex-shrink-0" />
                  <div>
                    <h4 className="font-bold text-gray-900 mb-1">
                      Partnership Approach
                    </h4>
                    <p className="text-gray-600">
                      Your success is our success. We work as partners, not just
                      vendors.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircleIcon className="w-6 h-6 text-blue-600 mt-0.5 flex-shrink-0" />
                  <div>
                    <h4 className="font-bold text-gray-900 mb-1">
                      Continuous Innovation
                    </h4>
                    <p className="text-gray-600">
                      We constantly improve our technology and processes to stay
                      ahead of the competition.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Team Stats */}
          <div className="grid md:grid-cols-4 gap-8 mb-16">
            {[
              {
                number: "2025",
                label: "Company Founded",
                description: "Years of experience",
              },
              {
                number: "50+",
                label: "Team Members",
                description: "Marketing & tech experts",
              },
              {
                number: "500+",
                label: "Partner Contractors",
                description: "Across the United States",
              },
              {
                number: "$2.8B+",
                label: "Revenue Generated",
                description: "For our partners",
              },
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl font-bold text-blue-600 mb-2">
                  {stat.number}
                </div>
                <div className="text-xl font-semibold text-gray-900 mb-2">
                  {stat.label}
                </div>
                <div className="text-gray-600 text-sm">{stat.description}</div>
              </div>
            ))}
          </div>

          {/* Values */}
          <div className="bg-gray-50 rounded-3xl p-12">
            <h3 className="text-3xl font-bold text-gray-900 text-center mb-12">
              Our Core Values
            </h3>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  icon: ShieldCheckIcon,
                  title: "Integrity",
                  description:
                    "We operate with complete transparency, providing honest reporting and never overselling our capabilities.",
                },
                {
                  icon: TrophyIcon,
                  title: "Excellence",
                  description:
                    "We maintain the highest standards in everything we do, from lead quality to customer service.",
                },
                {
                  icon: HeartIcon,
                  title: "Partnership",
                  description:
                    "We genuinely care about our contractors' success and work tirelessly to help them achieve their goals.",
                },
              ].map((value, index) => (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
                    <value.icon className="w-8 h-8 text-blue-600" />
                  </div>
                  <h4 className="text-xl font-bold text-gray-900 mb-4">
                    {value.title}
                  </h4>
                  <p className="text-gray-600 leading-relaxed">
                    {value.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact Us Section */}
      <section
        id="contact"
        className="py-24 bg-gradient-to-br from-blue-50 to-white"
      >
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center mb-16">
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

            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Start Receiving Premium Leads Today
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Join over 500 successful contractors who have transformed their
              businesses with our exclusive lead generation system.
              <span className="font-semibold text-gray-800">
                Get started in less than 24 hours.
              </span>
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Contact Information */}
            <div className="bg-white rounded-3xl p-8 shadow-xl">
              <h3 className="text-2xl font-bold text-gray-900 mb-8 flex items-center gap-3">
                <PhoneIcon className="w-6 h-6 text-blue-600" />
                Get In Touch
              </h3>

              <div className="space-y-6 mb-8">
                {/* <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center">
                    <PhoneIcon className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">Phone</div>
                    <div className="text-blue-600">(555) 123-LEAD</div>
                  </div>
                </div> */}

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
            <div className="lg:col-span-2 bg-white rounded-3xl p-8 shadow-xl">
              <h3 className="text-2xl font-bold text-gray-900 mb-2">
                Start Your Free Consultation
              </h3>
              <p className="text-gray-600 mb-8">
                Tell us about your business and we&apos;ll create a customized
                lead generation strategy for you.
              </p>

              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-semibold text-gray-900 mb-2">
                      Full Name
                    </label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      placeholder="John Smith"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-900 mb-2">
                      Company Name
                    </label>
                    <input
                      type="text"
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
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      placeholder="john@abchome.com"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-900 mb-2">
                      Phone Number
                    </label>
                    <input
                      type="tel"
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
                    <select className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500">
                      <option value="">Select your primary service</option>
                      <option value="bathroom">Bathroom Remodeling</option>
                      <option value="roofing">Roofing</option>
                      <option value="hvac">HVAC</option>
                      <option value="solar">Solar Installation</option>
                      <option value="windows">Windows & Doors</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-900 mb-2">
                      Monthly Budget
                    </label>
                    <select className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500">
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
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    placeholder="Tell us about your experience, team size, current marketing challenges, and goals..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-blue-600 text-white px-8 py-4 rounded-2xl text-lg font-semibold hover:bg-blue-700 transition-colors shadow-xl hover:shadow-2xl"
                >
                  Get My Free Lead Generation Strategy
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
                  <a href="#" className="hover:text-white transition-colors">
                    Bathroom Remodeling Leads
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Roofing Contractor Leads
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    HVAC Service Leads
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Solar Installation Leads
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Windows & Doors Leads
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-white font-bold mb-6">Company</h4>
              <ul className="space-y-3 text-gray-300">
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    About Us
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    How It Works
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Success Stories
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Pricing
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    FAQ
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Support
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Contact
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
                <a href="#" className="hover:text-white transition-colors">
                  Privacy Policy
                </a>
                <a href="#" className="hover:text-white transition-colors">
                  Terms of Service
                </a>
                <a href="#" className="hover:text-white transition-colors">
                  Cookie Policy
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
