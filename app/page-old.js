"use client";

import Image from "next/image";
import { useState, useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
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
  StarIcon
} from '@heroicons/react/24/solid';
import { 
  CursorArrowRaysIcon, 
  CheckBadgeIcon, 
  HeartIcon,
  ArrowRightIcon,
  ChartBarIcon,
  GlobeAltIcon
} from '@heroicons/react/24/outline';

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

// Register GSAP plugins
gsap.registerPlugin(ScrollTrigger);

export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [selectedService, setSelectedService] = useState(null);
  const heroRef = useRef();
  const featuresRef = useRef();

  // Service details data
  const serviceDetails = {
    'bathroom': {
      title: 'Bathroom Remodeling Leads',
      icon: HomeIcon,
      color: 'blue',
      features: [
        'Complete bathroom renovation projects ($15K-$50K average)',
        'Walk-in shower and tub installations',
        'Vanity and cabinet replacements',
        'Tile and flooring installations',
        'Plumbing fixture upgrades',
        'Accessibility modifications'
      ],
      targetCustomers: [
        'Homeowners planning major renovations',
        'Aging in place modifications',
        'Luxury upgrade seekers',
        'Investment property owners'
      ],
      averageValue: '$25,000',
      conversionRate: '18%',
      demandLevel: 'Very High'
    },
    'roofing': {
      title: 'Roofing Contractor Leads',
      icon: HomeIcon,
      color: 'red',
      features: [
        'Roof replacement and repairs',
        'Storm damage restoration',
        'Gutter installation and repair',
        'Siding replacement projects',
        'Insurance claim assistance',
        'Emergency roof repairs'
      ],
      targetCustomers: [
        'Storm-affected homeowners',
        'Aging roof replacements',
        'Insurance claim recipients',
        'New construction projects'
      ],
      averageValue: '$18,000',
      conversionRate: '22%',
      demandLevel: 'High'
    }
    // Add more service details as needed
  };

  useGSAP(() => {
    // Advanced hero animations with stagger effect
    const heroTl = gsap.timeline({ delay: 0.5 });

    // Animate hero elements with sophisticated timing
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

    // Floating animation for hero elements
    gsap.to(".hero-float", {
      y: -20,
      duration: 2,
      ease: "power1.inOut",
      yoyo: true,
      repeat: -1,
    });

    // Services cards scroll animation
    gsap.fromTo(
      ".service-card",
      {
        opacity: 0,
        y: 100,
        scale: 0.8,
        rotation: 5,
      },
      {
        opacity: 1,
        y: 0,
        scale: 1,
        rotation: 0,
        duration: 1,
        stagger: 0.15,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".services-section",
          start: "top 75%",
          end: "bottom 25%",
          toggleActions: "play none none reverse",
        },
      }
    );

    // Feature cards with advanced animations
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
          end: "bottom 20%",
          toggleActions: "play none none reverse",
        },
      }
    );

    // Stats counter animation
    gsap.fromTo(
      ".stat-number",
      {
        textContent: 0,
      },
      {
        textContent: (i, target) => target.getAttribute("data-count"),
        duration: 2,
        ease: "power2.out",
        snap: { textContent: 1 },
        stagger: 0.2,
        scrollTrigger: {
          trigger: ".stats-section",
          start: "top 80%",
        },
      }
    );

    // How it works section animation
    gsap.fromTo(
      ".step-card",
      {
        opacity: 0,
        x: (i) => (i % 2 === 0 ? -100 : 100),
        rotation: (i) => (i % 2 === 0 ? -5 : 5),
      },
      {
        opacity: 1,
        x: 0,
        rotation: 0,
        duration: 1,
        stagger: 0.3,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".how-it-works-section",
          start: "top 70%",
        },
      }
    );

    // Contact section animation
    gsap.fromTo(
      ".contact-card",
      {
        opacity: 0,
        y: 50,
        scale: 0.95,
      },
      {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 1,
        stagger: 0.2,
        ease: "power2.out",
        scrollTrigger: {
          trigger: ".contact-section",
          start: "top 80%",
        },
      }
    );

    // Parallax effect for background elements
    gsap.to(".parallax-slow", {
      yPercent: -50,
      ease: "none",
      scrollTrigger: {
        trigger: "body",
        start: "top bottom",
        end: "bottom top",
        scrub: true,
      },
    });

    gsap.to(".parallax-fast", {
      yPercent: -100,
      ease: "none",
      scrollTrigger: {
        trigger: "body",
        start: "top bottom",
        end: "bottom top",
        scrub: true,
      },
    });
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
        className="relative isolate px-6 pt-14 lg:px-8 min-h-screen flex items-center overflow-hidden"
      >
        {/* Advanced Background Elements */}
        <div className="absolute inset-0 -z-10">
          {/* Animated gradient mesh */}
          <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-indigo-50" />

          {/* Floating geometric shapes */}
          <div className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-r from-blue-400/20 to-purple-400/20 rounded-full blur-3xl parallax-slow" />
          <div className="absolute top-40 right-20 w-96 h-96 bg-gradient-to-r from-indigo-400/15 to-blue-400/15 rounded-full blur-3xl parallax-fast" />
          <div className="absolute bottom-20 left-1/3 w-64 h-64 bg-gradient-to-r from-purple-400/10 to-pink-400/10 rounded-full blur-3xl parallax-slow" />

          {/* Grid pattern overlay */}
          <div className="absolute inset-0 bg-[linear-gradient(rgba(59,130,246,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(59,130,246,0.03)_1px,transparent_1px)] bg-[size:100px_100px]" />
        </div>

        <div className="mx-auto max-w-4xl py-32 sm:py-48 lg:py-56 relative z-10">
          {/* Hero Badge */}
          <div className="hero-badge flex justify-center mb-8">
            <div className="inline-flex items-center gap-2 rounded-full bg-white/80 backdrop-blur-sm px-6 py-3 ring-1 ring-gray-900/5 shadow-lg">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
              <span className="text-sm font-medium text-gray-700">
                🎯 Exclusive leads for home improvement contractors
              </span>
              <a
                href="#contact"
                className="font-semibold text-blue-600 hover:text-blue-700 transition-colors"
              >
                Get started →
              </a>
            </div>
          </div>

          <div className="text-center">
            {/* Advanced Title with Word Animation */}
            <h1 className="hero-title text-5xl sm:text-7xl font-extrabold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-gray-900 via-blue-900 to-gray-900 mb-8 leading-tight">
              <span className="word block">Premium</span>
              <span className="word block bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">
                Leads
              </span>
              <span className="word block text-2xl sm:text-4xl font-semibold mt-2 text-gray-700">
                for Home Improvement Contractors
              </span>
            </h1>

            <p className="hero-subtitle text-xl leading-relaxed text-gray-600 max-w-3xl mx-auto mb-8">
              Connect with qualified homeowners ready to invest in roofing,
              HVAC, solar, bathroom remodeling, and more.
              <span className="font-semibold text-gray-800">
                Grow your business
              </span>{" "}
              with exclusive, pre-screened leads delivered in real-time.
            </p>

            {/* Stats Cards */}
            <div className="hero-stats grid grid-cols-3 gap-6 max-w-2xl mx-auto mb-12 stats-section">
              <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-4 shadow-lg ring-1 ring-gray-900/5 hero-float">
                <div
                  className="stat-number text-2xl font-bold text-blue-600"
                  data-count="500"
                >
                  0
                </div>
                <div className="text-sm text-gray-600 font-medium">
                  Active Contractors
                </div>
              </div>
              <div
                className="bg-white/70 backdrop-blur-sm rounded-2xl p-4 shadow-lg ring-1 ring-gray-900/5 hero-float"
                style={{ animationDelay: "0.5s" }}
              >
                <div
                  className="stat-number text-2xl font-bold text-purple-600"
                  data-count="10000"
                >
                  0
                </div>
                <div className="text-sm text-gray-600 font-medium">
                  Leads Generated
                </div>
              </div>
              <div
                className="bg-white/70 backdrop-blur-sm rounded-2xl p-4 shadow-lg ring-1 ring-gray-900/5 hero-float"
                style={{ animationDelay: "1s" }}
              >
                <div
                  className="stat-number text-2xl font-bold text-green-600"
                  data-count="95"
                >
                  0
                </div>
                <div className="text-sm text-gray-600 font-medium">
                  Success Rate %
                </div>
              </div>
            </div>

            {/* Enhanced CTA Buttons */}
            <div className="hero-cta flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="#contact"
                className="group relative inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-white bg-gradient-to-r from-blue-600 to-blue-700 rounded-2xl shadow-xl hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600 overflow-hidden"
              >
                <span className="absolute inset-0 bg-gradient-to-r from-blue-700 to-blue-800 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <span className="relative flex items-center gap-2">
                  <BoltIcon className="w-5 h-5" />
                  Get Started Today
                </span>
              </a>
              <a
                href="#how-it-works"
                className="group inline-flex items-center gap-2 px-6 py-3 text-lg font-semibold text-gray-700 bg-white/80 backdrop-blur-sm rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 ring-1 ring-gray-900/5 hover:ring-blue-500/20"
              >
                <span>Learn more</span>
                <svg
                  className="w-5 h-5 group-hover:translate-x-1 transition-transform"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 7l5 5m0 0l-5 5m5-5H6"
                  />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section
        id="services"
        className="services-section relative py-24 sm:py-32 bg-gradient-to-b from-white to-gray-50 overflow-hidden"
      >
        {/* Background decoration */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(59,130,246,0.05),transparent_50%)] parallax-slow" />

        <div className="mx-auto max-w-7xl px-6 lg:px-8 relative z-10">
          <div className="mx-auto max-w-3xl text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-blue-50 text-blue-700 px-4 py-2 rounded-full text-sm font-medium mb-6">
              ⚡ Premium Services
            </div>
            <h2 className="text-4xl sm:text-5xl font-bold tracking-tight bg-gradient-to-r from-gray-900 to-blue-900 bg-clip-text text-transparent mb-6">
              Home Improvement Lead Generation Services
            </h2>
            <p className="text-xl leading-8 text-gray-600">
              We specialize in generating high-quality leads for all major home
              improvement sectors.
              <span className="font-semibold text-gray-800">
                Transform your business
              </span>{" "}
              with our proven system.
            </p>
          </div>

          {/* Modern Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">
            {[
              {
                name: "Bathroom Remodeling",
                image: "/assets/bathroom.webp",
                description: "Premium bathroom renovation leads",
                icon: "🛁",
                color: "from-blue-500 to-cyan-500",
              },
              {
                name: "Roofing",
                image: "/assets/roofing.webp",
                description: "High-quality roofing contractor leads",
                icon: "🏠",
                color: "from-red-500 to-orange-500",
              },
              {
                name: "HVAC",
                image: "/assets/hvac.webp",
                description: "Heating & cooling service leads",
                icon: "❄️",
                color: "from-green-500 to-teal-500",
              },
              {
                name: "Solar Installation",
                image: "/assets/solar.webp",
                description: "Solar panel installation leads",
                icon: "☀️",
                color: "from-yellow-500 to-orange-500",
              },
              {
                name: "Windows & Doors",
                image: "/assets/windows.webp",
                description: "Window replacement leads",
                icon: "🚪",
                color: "from-purple-500 to-pink-500",
              },
              {
                name: "Gutter Services",
                image: "/assets/gutters.webp",
                description: "Gutter installation and repair leads",
                icon: "🌧️",
                color: "from-indigo-500 to-blue-500",
              },
              {
                name: "Walk-in Tubs",
                image: "/assets/walk-in-tub.webp",
                description: "Walk-in tub installation leads",
                icon: "♿",
                color: "from-teal-500 to-cyan-500",
              },
              {
                name: "Security Systems",
                image: "/assets/security.webp",
                description: "Home security system leads",
                icon: "🔒",
                color: "from-gray-600 to-gray-800",
              },
              {
                name: "Pest Control",
                image: "/assets/pest.webp",
                description: "Pest control service leads",
                icon: "🐜",
                color: "from-green-600 to-lime-500",
              },
            ].map((service, index) => (
              <div key={index} className="service-card group relative">
                <div className="relative overflow-hidden rounded-3xl bg-white shadow-xl ring-1 ring-gray-900/5 transition-all duration-500 hover:shadow-2xl hover:-translate-y-2">
                  {/* Gradient overlay */}
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300 z-10`}
                  />

                  {/* Image with overlay */}
                  <div className="aspect-[4/3] overflow-hidden relative">
                    <Image
                      src={service.image}
                      alt={service.name}
                      width={400}
                      height={300}
                      className="h-full w-full object-cover transition-all duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />

                    {/* Icon badge */}
                    <div className="absolute top-4 right-4 w-12 h-12 rounded-full bg-white/90 backdrop-blur-sm flex items-center justify-center shadow-lg">
                      <service.icon className="w-6 h-6 text-blue-600" />
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-8 relative z-20">
                    <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                      {service.name}
                    </h3>
                    <p className="text-gray-600 mb-6 leading-relaxed">
                      {service.description}
                    </p>

                    {/* CTA Button */}
                    <div className="flex items-center justify-between">
                      <div className="flex items-center text-blue-600 font-semibold group-hover:text-blue-700 transition-colors">
                        <span>Learn more</span>
                        <svg
                          className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M13 7l5 5m0 0l-5 5m5-5H6"
                          />
                        </svg>
                      </div>
                      <div
                        className={`w-8 h-1 rounded-full bg-gradient-to-r ${service.color} opacity-0 group-hover:opacity-100 transition-opacity duration-300`}
                      />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section
        id="features"
        ref={featuresRef}
        className="relative py-24 sm:py-32 bg-gradient-to-b from-gray-50 to-white overflow-hidden"
      >
        {/* Animated background */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(139,69,19,0.05),transparent_50%)] parallax-fast" />

        <div className="mx-auto max-w-7xl px-6 lg:px-8 relative z-10">
          <div className="mx-auto max-w-3xl text-center mb-20">
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-50 to-purple-50 text-blue-700 px-6 py-3 rounded-full text-sm font-medium mb-8 shadow-lg">
              ✨ Why Choose Us
            </div>
            <h2 className="text-4xl sm:text-5xl font-bold tracking-tight bg-gradient-to-r from-gray-900 via-blue-900 to-purple-900 bg-clip-text text-transparent mb-6">
              Why Choose Leadsiology?
            </h2>
            <p className="text-xl leading-8 text-gray-600">
              We deliver the highest quality leads with features that set us
              apart from the competition.
              <span className="font-semibold text-gray-800">
                Experience the difference
              </span>{" "}
              that premium leads can make.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {[
              {
                title: "Exclusive Leads",
                description:
                  "Get leads that are sent only to you - no sharing with competitors",
                icon: "🎯",
                gradient: "from-blue-500 to-cyan-500",
                bgColor: "bg-blue-50",
              },
              {
                title: "Real-Time Delivery",
                description: "Receive leads instantly via phone, email, or SMS",
                icon: "⚡",
                gradient: "from-yellow-500 to-orange-500",
                bgColor: "bg-orange-50",
              },
              {
                title: "Pre-Qualified",
                description:
                  "Every lead is pre-screened for budget, timeline, and intent",
                icon: "✅",
                gradient: "from-green-500 to-emerald-500",
                bgColor: "bg-green-50",
              },
              {
                title: "24/7 Support",
                description:
                  "Our team is always here to help optimize your lead flow",
                icon: "🛟",
                gradient: "from-purple-500 to-pink-500",
                bgColor: "bg-purple-50",
              },
            ].map((feature, index) => (
              <div key={index} className="feature-card group relative">
                <div className="relative rounded-3xl bg-white p-8 shadow-xl ring-1 ring-gray-900/5 transition-all duration-500 hover:shadow-2xl hover:-translate-y-3 overflow-hidden">
                  {/* Animated background gradient */}
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} opacity-0 group-hover:opacity-5 transition-all duration-500`}
                  />

                  {/* Icon container */}
                  <div
                    className={`relative mb-6 w-16 h-16 ${feature.bgColor} rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300`}
                  >
                    <span className="text-3xl filter group-hover:drop-shadow-lg transition-all duration-300">
                      {feature.icon}
                    </span>
                  </div>

                  <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:${feature.gradient} transition-all duration-300">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed group-hover:text-gray-700 transition-colors duration-300">
                    {feature.description}
                  </p>

                  {/* Decorative line */}
                  <div
                    className={`absolute bottom-0 left-0 h-1 bg-gradient-to-r ${feature.gradient} w-0 group-hover:w-full transition-all duration-500`}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section
        id="how-it-works"
        className="how-it-works-section relative py-24 sm:py-32 bg-gradient-to-b from-white via-blue-50/30 to-white overflow-hidden"
      >
        {/* Decorative elements */}
        <div className="absolute top-10 left-10 w-40 h-40 bg-gradient-to-r from-blue-400/10 to-purple-400/10 rounded-full blur-2xl parallax-slow" />
        <div className="absolute bottom-10 right-10 w-32 h-32 bg-gradient-to-r from-green-400/10 to-blue-400/10 rounded-full blur-2xl parallax-fast" />

        <div className="mx-auto max-w-7xl px-6 lg:px-8 relative z-10">
          <div className="mx-auto max-w-3xl text-center mb-20">
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-green-50 to-blue-50 text-green-700 px-6 py-3 rounded-full text-sm font-medium mb-8 shadow-lg">
              🔄 Simple Process
            </div>
            <h2 className="text-4xl sm:text-5xl font-bold tracking-tight bg-gradient-to-r from-gray-900 to-blue-900 bg-clip-text text-transparent mb-6">
              How It Works
            </h2>
            <p className="text-xl leading-8 text-gray-600">
              Get started with our simple 3-step process and start receiving
              quality leads today.
              <span className="font-semibold text-gray-800">
                It&apos;s that easy!
              </span>
            </p>
          </div>

          <div className="grid grid-cols-1 gap-12 lg:gap-8 lg:grid-cols-3 relative">
            {/* Connection lines for desktop */}
            <div className="hidden lg:block absolute top-20 left-1/3 w-1/3 h-0.5 bg-gradient-to-r from-blue-200 via-purple-200 to-green-200" />
            <div className="hidden lg:block absolute top-20 right-0 w-1/3 h-0.5 bg-gradient-to-r from-purple-200 via-green-200 to-blue-200" />

            {[
              {
                step: "01",
                title: "Set Your Criteria",
                description:
                  "Tell us about your service area, budget requirements, and target customer profile.",
                icon: "🎯",
                gradient: "from-blue-500 to-cyan-500",
                bgGradient: "from-blue-50 to-cyan-50",
              },
              {
                step: "02",
                title: "We Generate Leads",
                description:
                  "Our marketing team works to attract and pre-qualify homeowners looking for your services.",
                icon: "⚡",
                gradient: "from-purple-500 to-pink-500",
                bgGradient: "from-purple-50 to-pink-50",
              },
              {
                step: "03",
                title: "Receive & Convert",
                description:
                  "Get exclusive leads delivered instantly to your phone, email, or CRM system.",
                icon: "🚀",
                gradient: "from-green-500 to-emerald-500",
                bgGradient: "from-green-50 to-emerald-50",
              },
            ].map((step, index) => (
              <div key={index} className="step-card relative">
                <div
                  className={`relative rounded-3xl bg-gradient-to-br ${step.bgGradient} p-8 shadow-xl ring-1 ring-gray-900/5 transition-all duration-500 hover:shadow-2xl hover:-translate-y-2 overflow-hidden`}
                >
                  {/* Step number badge */}
                  <div
                    className={`absolute top-4 right-4 w-12 h-12 bg-gradient-to-r ${step.gradient} rounded-full flex items-center justify-center shadow-lg`}
                  >
                    <span className="text-white font-bold text-sm">
                      {step.step}
                    </span>
                  </div>

                  {/* Icon */}
                  <div className="mb-6">
                    <div
                      className={`w-16 h-16 bg-gradient-to-r ${step.gradient} rounded-2xl flex items-center justify-center shadow-lg mb-4`}
                    >
                      <span className="text-2xl">{step.icon}</span>
                    </div>
                  </div>

                  <h3 className="text-2xl font-bold text-gray-900 mb-4">
                    {step.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed text-lg">
                    {step.description}
                  </p>

                  {/* Decorative gradient line */}
                  <div
                    className={`absolute bottom-0 left-0 h-1 bg-gradient-to-r ${step.gradient} w-full`}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section
        id="contact"
        className="contact-section relative py-24 sm:py-32 bg-gradient-to-b from-white to-gray-50 overflow-hidden"
      >
        {/* Background decorations */}
        <div className="absolute top-20 left-20 w-64 h-64 bg-gradient-to-r from-blue-400/10 to-purple-400/10 rounded-full blur-3xl parallax-slow" />
        <div className="absolute bottom-20 right-20 w-48 h-48 bg-gradient-to-r from-green-400/10 to-blue-400/10 rounded-full blur-3xl parallax-fast" />

        <div className="mx-auto max-w-7xl px-6 lg:px-8 relative z-10">
          <div className="mx-auto max-w-3xl text-center mb-16">
            <div className="mb-8 transform hover:scale-105 transition-transform duration-300">
              <Image
                src="/logo-dark.svg"
                alt="Leadsiology"
                width={300}
                height={120}
                className="mx-auto h-auto filter drop-shadow-lg"
              />
            </div>

            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-green-50 to-blue-50 text-green-700 px-6 py-3 rounded-full text-sm font-medium mb-8 shadow-lg">
              🚀 Ready to Start?
            </div>

            <h2 className="text-4xl sm:text-5xl font-bold tracking-tight bg-gradient-to-r from-gray-900 via-blue-900 to-purple-900 bg-clip-text text-transparent mb-6">
              Ready to Grow Your Business?
            </h2>
            <p className="text-xl leading-8 text-gray-600">
              Get started with premium leads for your home improvement business.
              <span className="font-semibold text-gray-800">
                Contact us today
              </span>{" "}
              for a free consultation and see the difference quality leads can
              make.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 lg:gap-12 lg:grid-cols-2">
            {/* Contact Information Card */}
            <div className="contact-card relative">
              <div className="rounded-3xl bg-white/80 backdrop-blur-sm p-8 shadow-2xl ring-1 ring-gray-900/5 transition-all duration-300 hover:shadow-3xl hover:-translate-y-1 overflow-hidden">
                {/* Gradient overlay */}
                <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-blue-500 via-purple-500 to-green-500" />

                <div className="flex items-center gap-3 mb-8">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center">
                    <span className="text-white text-xl">📞</span>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900">
                    Contact Information
                  </h3>
                </div>

                <div className="space-y-6 mb-8">
                  {[
                    {
                      icon: "📱",
                      label: "+1 (555) 123-LEAD",
                      color: "from-blue-500 to-cyan-500",
                    },
                    {
                      icon: "✉️",
                      label: "info@leadsiology.com",
                      color: "from-purple-500 to-pink-500",
                    },
                    {
                      icon: "🌎",
                      label: "Nationwide Service",
                      color: "from-green-500 to-emerald-500",
                    },
                  ].map((contact, index) => (
                    <div
                      key={index}
                      className="flex items-center gap-4 p-4 rounded-2xl bg-gray-50/50 hover:bg-gray-50 transition-colors"
                    >
                      <div
                        className={`w-10 h-10 bg-gradient-to-r ${contact.color} rounded-full flex items-center justify-center shadow-lg`}
                      >
                        <span className="text-white">{contact.icon}</span>
                      </div>
                      <span className="text-gray-900 font-medium text-lg">
                        {contact.label}
                      </span>
                    </div>
                  ))}
                </div>

                {/* Enhanced Stats */}
                <div className="border-t border-gray-200 pt-8">
                  <h4 className="text-lg font-bold text-gray-900 mb-6 flex items-center gap-2">
                    📊 Our Track Record
                  </h4>
                  <div className="grid grid-cols-3 gap-6">
                    {[
                      {
                        number: "500+",
                        label: "Active Contractors",
                        color: "text-blue-600",
                        bg: "bg-blue-50",
                      },
                      {
                        number: "10k+",
                        label: "Leads Generated",
                        color: "text-purple-600",
                        bg: "bg-purple-50",
                      },
                      {
                        number: "95%",
                        label: "Success Rate",
                        color: "text-green-600",
                        bg: "bg-green-50",
                      },
                    ].map((stat, index) => (
                      <div
                        key={index}
                        className={`text-center p-4 rounded-2xl ${stat.bg} transform hover:scale-105 transition-transform`}
                      >
                        <div className={`text-2xl font-bold ${stat.color}`}>
                          {stat.number}
                        </div>
                        <div className="text-sm text-gray-600 font-medium mt-1">
                          {stat.label}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form Card */}
            <div className="contact-card relative">
              <div className="rounded-3xl bg-gradient-to-br from-blue-600 via-purple-600 to-blue-700 p-8 text-white shadow-2xl overflow-hidden">
                {/* Animated background pattern */}
                <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent opacity-50" />
                <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full blur-2xl" />
                <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/5 rounded-full blur-2xl" />

                <div className="relative z-10">
                  <div className="flex items-center gap-3 mb-8">
                    <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
                      <span className="text-2xl">🚀</span>
                    </div>
                    <h3 className="text-2xl font-bold">Get Started Today</h3>
                  </div>

                  <form className="space-y-6">
                    <div className="space-y-4">
                      {[
                        { type: "text", placeholder: "Your Name", icon: "👤" },
                        {
                          type: "email",
                          placeholder: "Email Address",
                          icon: "✉️",
                        },
                        {
                          type: "tel",
                          placeholder: "Phone Number",
                          icon: "📱",
                        },
                      ].map((field, index) => (
                        <div key={index} className="relative">
                          <div className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white/70">
                            {field.icon}
                          </div>
                          <input
                            type={field.type}
                            placeholder={field.placeholder}
                            className="w-full rounded-2xl border-0 bg-white/10 backdrop-blur-sm pl-12 pr-4 py-4 text-white placeholder:text-white/70 focus:ring-2 focus:ring-white/50 focus:bg-white/20 transition-all"
                          />
                        </div>
                      ))}
                    </div>

                    <div className="relative">
                      <div className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white/70">
                        🏠
                      </div>
                      <select className="w-full rounded-2xl border-0 bg-white/10 backdrop-blur-sm pl-12 pr-4 py-4 text-white focus:ring-2 focus:ring-white/50 focus:bg-white/20 transition-all appearance-none">
                        <option value="" className="text-gray-900">
                          Select Service Type
                        </option>
                        <option value="roofing" className="text-gray-900">
                          🏠 Roofing
                        </option>
                        <option value="hvac" className="text-gray-900">
                          ❄️ HVAC
                        </option>
                        <option value="solar" className="text-gray-900">
                          ☀️ Solar
                        </option>
                        <option value="bathroom" className="text-gray-900">
                          🛁 Bathroom Remodeling
                        </option>
                        <option value="windows" className="text-gray-900">
                          🪟 Windows & Doors
                        </option>
                        <option value="other" className="text-gray-900">
                          🔧 Other
                        </option>
                      </select>
                    </div>

                    <button
                      type="submit"
                      className="group w-full rounded-2xl bg-white px-8 py-4 text-lg font-bold text-blue-600 shadow-xl hover:shadow-2xl hover:bg-gray-50 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white transition-all duration-300 transform hover:-translate-y-1"
                    >
                      <span className="flex items-center justify-center gap-2">
                        Start Receiving Leads
                        <svg
                          className="w-5 h-5 group-hover:translate-x-1 transition-transform"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M13 7l5 5m0 0l-5 5m5-5H6"
                          />
                        </svg>
                      </span>
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 py-16 overflow-hidden">
        {/* Background effects */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_40%,rgba(59,130,246,0.1),transparent_70%)]" />
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-blue-500/50 to-transparent" />

        <div className="mx-auto max-w-7xl px-6 lg:px-8 relative z-10">
          <div className="text-center">
            <div className="transform hover:scale-105 transition-transform duration-300 mb-8">
              <Image
                src="/logo-light.svg"
                alt="Leadsiology"
                width={240}
                height={96}
                className="mx-auto h-auto filter drop-shadow-lg"
              />
            </div>

            <div className="flex justify-center space-x-8 mb-8">
              {[
                { name: "Services", href: "#services" },
                { name: "Features", href: "#features" },
                { name: "How It Works", href: "#how-it-works" },
                { name: "Contact", href: "#contact" },
              ].map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-gray-300 hover:text-white transition-colors duration-300 font-medium"
                >
                  {link.name}
                </a>
              ))}
            </div>

            <div className="border-t border-gray-700/50 pt-8">
              <p className="text-gray-400 text-lg">
                © 2024 Leadsiology. Premium lead generation for home improvement
                contractors.
              </p>
              <p className="text-gray-500 mt-2">
                🚀 Transforming businesses with quality leads since 2020
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
