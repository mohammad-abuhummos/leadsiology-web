"use client";

import Image from "next/image";
import { useState, useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

// Register GSAP plugins
gsap.registerPlugin(ScrollTrigger);

export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const heroRef = useRef();
  const featuresRef = useRef();

  useGSAP(() => {
    // Hero animations
    const tl = gsap.timeline();
    tl.fromTo(
      ".hero-title",
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration: 1 }
    )
      .fromTo(
        ".hero-subtitle",
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 1 },
        "-=0.5"
      )
      .fromTo(
        ".hero-cta",
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 1 },
        "-=0.5"
      );

    // Feature cards animation on scroll
    gsap.fromTo(
      ".feature-card",
      { opacity: 0, y: 60 },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        stagger: 0.2,
        scrollTrigger: {
          trigger: featuresRef.current,
          start: "top 80%",
        },
      }
    );
  });

  return (
    <div className="bg-white text-black">
      {/* Navigation */}
      <header className="absolute inset-x-0 top-0 z-50 bg-white/90 backdrop-blur-sm">
        <nav
          className="flex items-center justify-between p-6 lg:px-8"
          aria-label="Global"
        >
          <div className="flex lg:flex-1">
            <a href="#" className="-m-1.5 p-1.5">
              <span className="sr-only">Leadsiology</span>
              <Image
                src="/logo-icon.svg"
                alt="Leadsiology"
                width={60}
                height={60}
                className="h-12 w-auto"
              />
            </a>
          </div>

          <div className="hidden lg:flex lg:gap-x-8">
            <a
              href="#services"
              className="text-sm font-semibold leading-6 text-gray-900 hover:text-blue-600 transition-colors"
            >
              Services
            </a>
            <a
              href="#features"
              className="text-sm font-semibold leading-6 text-gray-900 hover:text-blue-600 transition-colors"
            >
              Features
            </a>
            <a
              href="#how-it-works"
              className="text-sm font-semibold leading-6 text-gray-900 hover:text-blue-600 transition-colors"
            >
              How It Works
            </a>
            <a
              href="#contact"
              className="text-sm font-semibold leading-6 text-gray-900 hover:text-blue-600 transition-colors"
            >
              Contact
            </a>
          </div>

          <div className="hidden lg:flex lg:flex-1 lg:justify-end">
            <a
              href="#contact"
              className="rounded-lg bg-blue-600 px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-blue-700 transition-colors"
            >
              Get Started <span aria-hidden="true">→</span>
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="flex lg:hidden">
            <button
              type="button"
              className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              <span className="sr-only">Open main menu</span>
              {mobileMenuOpen ? (
                <svg
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                  />
                </svg>
              )}
            </button>
          </div>
        </nav>

        {/* Mobile menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden">
            <div className="fixed inset-0 z-50" />
            <div className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
              <div className="flex items-center justify-between">
                <a href="#" className="-m-1.5 p-1.5">
                  <span className="sr-only">Leadsiology</span>
                  <Image
                    src="/logo-icon.svg"
                    alt="Leadsiology"
                    width={40}
                    height={40}
                  />
                </a>
                <button
                  type="button"
                  className="-m-2.5 rounded-md p-2.5 text-gray-700"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <span className="sr-only">Close menu</span>
                  <svg
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>
              </div>
              <div className="mt-6 flow-root">
                <div className="-my-6 divide-y divide-gray-500/10">
                  <div className="space-y-2 py-6">
                    <a
                      href="#services"
                      className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      Services
                    </a>
                    <a
                      href="#features"
                      className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      Features
                    </a>
                    <a
                      href="#how-it-works"
                      className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      How It Works
                    </a>
                    <a
                      href="#contact"
                      className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      Contact
                    </a>
                  </div>
                  <div className="py-6">
                    <a
                      href="#contact"
                      className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-white bg-blue-600 hover:bg-blue-700"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      Get Started
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </header>

      {/* Hero Section */}
      <section
        ref={heroRef}
        className="relative isolate px-6 pt-14 lg:px-8 min-h-screen flex items-center"
      >
        <div className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80">
          <div className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-blue-100 to-blue-300 opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]" />
        </div>

        <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">
          <div className="hidden sm:mb-8 sm:flex sm:justify-center">
            <div className="relative rounded-full px-3 py-1 text-sm leading-6 text-gray-600 ring-1 ring-gray-900/10 hover:ring-gray-900/20">
              Exclusive leads for home improvement contractors.{" "}
              <a href="#contact" className="font-semibold text-blue-600">
                <span className="absolute inset-0" aria-hidden="true" />
                Get started <span aria-hidden="true">→</span>
              </a>
            </div>
          </div>

          <div className="text-center">
            <h1 className="hero-title text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
              Premium Leads for Home Improvement Contractors
            </h1>
            <p className="hero-subtitle mt-6 text-lg leading-8 text-gray-600">
              Connect with qualified homeowners ready to invest in roofing,
              HVAC, solar, bathroom remodeling, and more. Grow your business
              with exclusive, pre-screened leads delivered in real-time.
            </p>
            <div className="hero-cta mt-10 flex items-center justify-center gap-x-6">
              <a
                href="#contact"
                className="rounded-md bg-blue-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-blue-500 transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
              >
                Get Started Today
              </a>
              <a
                href="#how-it-works"
                className="text-sm font-semibold leading-6 text-gray-900 hover:text-blue-600 transition-colors"
              >
                Learn more <span aria-hidden="true">→</span>
              </a>
            </div>
          </div>
        </div>

        <div className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]">
          <div className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-blue-100 to-blue-300 opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]" />
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-24 sm:py-32 bg-gray-50">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Home Improvement Lead Generation Services
            </h2>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              We specialize in generating high-quality leads for all major home
              improvement sectors.
            </p>
          </div>

          <div className="mt-16">
            <Swiper
              modules={[Navigation, Pagination, Autoplay]}
              spaceBetween={30}
              slidesPerView={1}
              navigation
              pagination={{ clickable: true }}
              autoplay={{ delay: 4000, disableOnInteraction: false }}
              breakpoints={{
                640: { slidesPerView: 2 },
                1024: { slidesPerView: 3 },
              }}
              className="pb-12 services-swiper"
            >
              {[
                {
                  name: "Bathroom Remodeling",
                  image: "/assets/bathroom.webp",
                  description: "Premium bathroom renovation leads",
                },
                {
                  name: "Roofing",
                  image: "/assets/roofing.webp",
                  description: "High-quality roofing contractor leads",
                },
                {
                  name: "HVAC",
                  image: "/assets/hvac.webp",
                  description: "Heating & cooling service leads",
                },
                {
                  name: "Solar Installation",
                  image: "/assets/solar.webp",
                  description: "Solar panel installation leads",
                },
                {
                  name: "Windows & Doors",
                  image: "/assets/windows.webp",
                  description: "Window replacement leads",
                },
                {
                  name: "Gutter Services",
                  image: "/assets/gutters.webp",
                  description: "Gutter installation and repair leads",
                },
                {
                  name: "Walk-in Tubs",
                  image: "/assets/walk-in-tub.webp",
                  description: "Walk-in tub installation leads",
                },
                {
                  name: "Security Systems",
                  image: "/assets/security.webp",
                  description: "Home security system leads",
                },
                {
                  name: "Pest Control",
                  image: "/assets/pest.webp",
                  description: "Pest control service leads",
                },
              ].map((service, index) => (
                <SwiperSlide key={index}>
                  <div className="group relative overflow-hidden rounded-2xl bg-white shadow-lg transition-all duration-300 hover:shadow-xl hover:-translate-y-1 h-full">
                    <div className="aspect-[4/3] overflow-hidden">
                      <Image
                        src={service.image}
                        alt={service.name}
                        width={400}
                        height={300}
                        className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                      />
                    </div>
                    <div className="p-6">
                      <h3 className="text-xl font-semibold text-gray-900 mb-2">
                        {service.name}
                      </h3>
                      <p className="text-gray-600">{service.description}</p>
                      <div className="mt-4 flex items-center text-blue-600">
                        <span className="text-sm font-medium">Learn more</span>
                        <svg
                          className="ml-2 h-4 w-4"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth="1.5"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
                          />
                        </svg>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" ref={featuresRef} className="py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Why Choose Leadsiology?
            </h2>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              We deliver the highest quality leads with features that set us
              apart from the competition.
            </p>
          </div>

          <div className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {[
              {
                title: "Exclusive Leads",
                description:
                  "Get leads that are sent only to you - no sharing with competitors",
                icon: "🎯",
              },
              {
                title: "Real-Time Delivery",
                description: "Receive leads instantly via phone, email, or SMS",
                icon: "⚡",
              },
              {
                title: "Pre-Qualified",
                description:
                  "Every lead is pre-screened for budget, timeline, and intent",
                icon: "✅",
              },
              {
                title: "24/7 Support",
                description:
                  "Our team is always here to help optimize your lead flow",
                icon: "🛟",
              },
            ].map((feature, index) => (
              <div key={index} className="feature-card group">
                <div className="rounded-2xl bg-white p-8 shadow-lg ring-1 ring-gray-200 transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
                  <div className="text-4xl mb-4">{feature.icon}</div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section id="how-it-works" className="py-24 sm:py-32 bg-gray-50">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              How It Works
            </h2>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Get started with our simple 3-step process and start receiving
              quality leads today.
            </p>
          </div>

          <div className="mt-16 grid grid-cols-1 gap-8 lg:grid-cols-3">
            <div className="relative text-center">
              <div className="mx-auto h-16 w-16 rounded-full bg-blue-600 flex items-center justify-center text-2xl font-bold text-white mb-6">
                1
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Set Your Criteria
              </h3>
              <p className="text-gray-600">
                Tell us about your service area, budget requirements, and target
                customer profile.
              </p>
              <div className="absolute top-8 left-full w-full h-0.5 bg-blue-200 hidden lg:block lg:-translate-x-8"></div>
            </div>

            <div className="relative text-center">
              <div className="mx-auto h-16 w-16 rounded-full bg-blue-600 flex items-center justify-center text-2xl font-bold text-white mb-6">
                2
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                We Generate Leads
              </h3>
              <p className="text-gray-600">
                Our marketing team works to attract and pre-qualify homeowners
                looking for your services.
              </p>
              <div className="absolute top-8 left-full w-full h-0.5 bg-blue-200 hidden lg:block lg:-translate-x-8"></div>
            </div>

            <div className="text-center">
              <div className="mx-auto h-16 w-16 rounded-full bg-blue-600 flex items-center justify-center text-2xl font-bold text-white mb-6">
                3
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Receive & Convert
              </h3>
              <p className="text-gray-600">
                Get exclusive leads delivered instantly to your phone, email, or
                CRM system.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <Image
              src="/logo-dark.svg"
              alt="Leadsiology"
              width={300}
              height={120}
              className="mx-auto mb-8 h-auto"
            />
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Ready to Grow Your Business?
            </h2>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Get started with premium leads for your home improvement business.
              Contact us today for a free consultation.
            </p>
          </div>

          <div className="mt-16 grid grid-cols-1 gap-8 lg:grid-cols-2">
            <div className="rounded-2xl bg-white p-8 shadow-lg ring-1 ring-gray-200">
              <h3 className="text-xl font-semibold text-gray-900 mb-6">
                Contact Information
              </h3>
              <div className="space-y-4">
                <div className="flex items-center">
                  <svg
                    className="h-6 w-6 text-blue-600 mr-3"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"
                    />
                  </svg>
                  <span className="text-gray-900">+1 (555) 123-LEAD</span>
                </div>
                <div className="flex items-center">
                  <svg
                    className="h-6 w-6 text-blue-600 mr-3"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
                    />
                  </svg>
                  <span className="text-gray-900">info@leadsiology.com</span>
                </div>
                <div className="flex items-center">
                  <svg
                    className="h-6 w-6 text-blue-600 mr-3"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
                    />
                  </svg>
                  <span className="text-gray-900">Nationwide Service</span>
                </div>
              </div>

              <div className="mt-8">
                <h4 className="text-lg font-medium text-gray-900 mb-4">
                  Quick Stats
                </h4>
                <div className="grid grid-cols-2 gap-4">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-blue-600">500+</div>
                    <div className="text-sm text-gray-600">
                      Active Contractors
                    </div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-blue-600">10k+</div>
                    <div className="text-sm text-gray-600">Leads Generated</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="rounded-2xl bg-blue-600 p-8 text-white">
              <h3 className="text-xl font-semibold mb-6">Get Started Today</h3>
              <form className="space-y-4">
                <div>
                  <input
                    type="text"
                    placeholder="Your Name"
                    className="w-full rounded-md border-0 bg-white/10 px-3.5 py-2 text-white placeholder:text-white/70 focus:ring-2 focus:ring-white/50"
                  />
                </div>
                <div>
                  <input
                    type="email"
                    placeholder="Email Address"
                    className="w-full rounded-md border-0 bg-white/10 px-3.5 py-2 text-white placeholder:text-white/70 focus:ring-2 focus:ring-white/50"
                  />
                </div>
                <div>
                  <input
                    type="tel"
                    placeholder="Phone Number"
                    className="w-full rounded-md border-0 bg-white/10 px-3.5 py-2 text-white placeholder:text-white/70 focus:ring-2 focus:ring-white/50"
                  />
                </div>
                <div>
                  <select className="w-full rounded-md border-0 bg-white/10 px-3.5 py-2 text-white focus:ring-2 focus:ring-white/50">
                    <option value="" className="text-gray-900">
                      Select Service Type
                    </option>
                    <option value="roofing" className="text-gray-900">
                      Roofing
                    </option>
                    <option value="hvac" className="text-gray-900">
                      HVAC
                    </option>
                    <option value="solar" className="text-gray-900">
                      Solar
                    </option>
                    <option value="bathroom" className="text-gray-900">
                      Bathroom Remodeling
                    </option>
                    <option value="windows" className="text-gray-900">
                      Windows & Doors
                    </option>
                    <option value="other" className="text-gray-900">
                      Other
                    </option>
                  </select>
                </div>
                <button
                  type="submit"
                  className="w-full rounded-md bg-white px-3.5 py-2.5 text-sm font-semibold text-blue-600 shadow-sm hover:bg-gray-100 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white transition-colors"
                >
                  Start Receiving Leads
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 py-12">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="flex flex-col items-center">
            <Image
              src="/logo-light.svg"
              alt="Leadsiology"
              width={200}
              height={80}
              className="mb-6 h-auto"
            />
            <p className="text-center text-gray-400">
              © 2024 Leadsiology. Premium lead generation for home improvement
              contractors.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
