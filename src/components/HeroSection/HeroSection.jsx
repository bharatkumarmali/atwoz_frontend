import React, { useState } from "react";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay, EffectFade } from "swiper/modules";
import { ChevronRight, Play, ArrowRight } from "lucide-react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-fade";

const HeroSection = () => {
  const [activeSlideIndex, setActiveSlideIndex] = useState(0);

  const heroSlides = [
    {
      id: 1,
      title: "Aadhaar Services",
      subtitle: "Complete Aadhaar Solutions",
      description:
        "Get your Aadhaar enrollment, biometric updates, address corrections, and other Aadhaar-related services done quickly and efficiently. We provide comprehensive Aadhaar services with expert guidance.",
      image: "/aadhar-banner.jpg",
      cta: "Get Aadhaar Services",
      stats: [
        { number: "1000+", label: "Aadhaar Enrollments" },
        { number: "24/7", label: "Support Available" },
        { number: "Fast", label: "Processing Time" },
      ],
    },
    {
      id: 2,
      title: "E-mitra Services",
      subtitle: "Government Services Made Easy",
      description:
        "Access all government services through our E-mitra center. From certificates to licenses, we help you navigate government processes with ease and efficiency.",
      image: "/e-mitra-banner.jpg",
      cta: "View E-mitra Services",
      stats: [
        { number: "50+", label: "Government Services" },
        { number: "Expert", label: "Guidance" },
        { number: "Quick", label: "Processing" },
      ],
    },
    {
      id: 3,
      title: "AEPS Banking Services",
      subtitle: "Aadhaar Enabled Payment System",
      description:
        "Provide banking services like cash withdrawal, deposits, balance inquiry, and fund transfers using Aadhaar authentication. Serve your community with secure biometric banking solutions.",
      image: "/aeps-banner.jpg",
      cta: "Get AEPS Services",
      stats: [
        { number: "300+", label: "Daily Transactions" },
        { number: "Secure", label: "Biometric Auth" },
        { number: "Instant", label: "Banking Services" },
      ],
    },
    {
      id: 4,
      title: "PAN Center Services",
      subtitle: "PAN Card Solutions",
      description:
        "Apply for new PAN cards, make corrections, and get duplicate PAN cards through our authorized PAN center. Fast, reliable, and secure PAN card services.",
      image: "/pen-center-banner.jpg",
      cta: "Get PAN Services",
      stats: [
        { number: "200+", label: "PAN Applications" },
        { number: "Authorized", label: "Center" },
        { number: "Quick", label: "Processing" },
      ],
    },
    {
      id: 5,
      title: "CSP Banking Services",
      subtitle: "Banking at Your Doorstep",
      description:
        "Access banking services like cash deposits, withdrawals, balance inquiries, mini statements, and more through our Customer Service Point (CSP). Bring banking convenience to your community.",
      image: "/CSP-banner.png",
      cta: "Explore Banking Services",
      stats: [
        { number: "500+", label: "Daily Transactions" },
        { number: "100%", label: "Secure Banking" },
        { number: "Instant", label: "Service Delivery" },
      ],
    },
    {
      id: 6,
      title: "Utility Bill Payments",
      subtitle: "Pay All Your Bills",
      description:
        "Pay electricity, water, gas, mobile, DTH, and other utility bills through our platform. Convenient, secure, and instant bill payment services for all your needs.",
      image: "/utilityservice-banner.jpg",
      cta: "Pay Bills Now",
      stats: [
        { number: "1000+", label: "Daily Payments" },
        { number: "Instant", label: "Confirmation" },
        { number: "All", label: "Utilities Covered" },
      ],
    },
  ];

  const handleSlideChange = (swiper) => {
    setActiveSlideIndex(swiper.realIndex);
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center">
      {/* Custom CSS for Swiper navigation */}
      <style
        dangerouslySetInnerHTML={{
          __html: `
        .swiper-button-next,
        .swiper-button-prev {
          color: white !important;
          background: linear-gradient(135deg, rgba(255, 255, 255, 0), rgba(255, 255, 255, 0.03)) !important;
          backdrop-filter: blur(0px) !important;
          border-radius: 4px !important;
          width: 52px !important;
          height: 100px !important;
          display: flex !important;
          align-items: center !important;
          justify-content: center !important;
          transition: all 0.3s ease !important;
          border: 1px solid rgba(255, 255, 255, 0.2) !important;
          opacity: 0.3 !important;
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.15) !important;
          cursor: pointer !important;
        }

        .swiper-button-next:hover,
        .swiper-button-prev:hover {
          background: linear-gradient(135deg, rgba(255, 255, 255, 0.25), rgba(255, 255, 255, 0.15)) !important;
          border-color: rgba(255, 255, 255, 0.184) !important;
          opacity: 1 !important;
          transform: scale(1.05) !important;
          box-shadow: 0 8px 30px rgba(0, 0, 0, 0.133) !important;
        }

        .swiper-button-next:active,
        .swiper-button-prev:active {
          transform: scale(0.98) !important;
          transition: all 0.1s ease !important;
        }

        .swiper-button-next {
          right: 32px !important;
        }

        .swiper-button-prev {
          left: 32px !important;
        }

        .swiper-button-next::after,
        .swiper-button-prev::after {
          display: none !important;
        }

        .swiper-pagination {
          bottom: 32px !important;
        }

        .swiper-pagination-bullet {
          background: white !important;
          opacity: 0.6 !important;
        }

        .swiper-pagination-bullet-active {
          opacity: 1 !important;
        }
      `,
        }}
      />

      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900"></div>

      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute -top-40 -right-40 w-80 h-80 bg-blue-500/20 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1.2, 1, 1.2],
            rotate: [360, 180, 0],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute -bottom-40 -left-40 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl"
        />
      </div>

      {/* Swiper Container */}
      <div className="relative w-full">
        <Swiper
          modules={[Navigation, Pagination, Autoplay, EffectFade]}
          effect="fade"
          navigation={{
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
          }}
          pagination={{
            clickable: true,
            el: ".swiper-pagination",
          }}
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
          }}
          loop={true}
          className="h-screen"
          onSlideChange={handleSlideChange}
        >
          {heroSlides.map((slide, index) => (
            <SwiperSlide key={slide.id}>
              <div className="relative h-screen flex items-center">
                {/* Background Image */}
                <div
                  className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                  style={{ backgroundImage: `url(${slide.image})` }}
                >
                  <div className="absolute inset-0 bg-black/50"></div>
                </div>

                {/* Content */}
                <div className="container mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
                  <div className="grid lg:grid-cols-2 gap-12 items-center">
                    {/* Text Content */}
                    <motion.div
                      initial={{ opacity: 0, x: -100 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 1, delay: 0.2 }}
                      className="text-white"
                    >
                      {/* <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                        className="text-blue-400 font-semibold text-lg mb-4"
                      >
                        {slide.subtitle}
                      </motion.div> */}

                      <motion.h1
                        key={`${slide.id}-${activeSlideIndex}`} // Key changes when slide becomes active
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.6 }}
                        className="text-5xl lg:text-7xl font-bold mb-6 leading-tight"
                        style={{
                          wordBreak: "keep-all",
                          whiteSpace: "normal",
                          overflowWrap: "break-word",
                        }}
                      >
                        {slide.title.split(" ").map((word, wordIndex) => (
                          <motion.span
                            key={`${slide.id}-${activeSlideIndex}-word-${wordIndex}`}
                            className="inline-block mr-2"
                            style={{ wordBreak: "keep-all" }}
                          >
                            {word.split("").map((char, charIndex) => (
                              <motion.span
                                key={`${slide.id}-${activeSlideIndex}-${wordIndex}-${charIndex}`} // Unique key that changes with active slide
                                initial={{ opacity: 0, y: 50, scale: 0.5 }}
                                animate={{ opacity: 1, y: 0, scale: 1 }}
                                transition={{
                                  duration: 0.6,
                                  delay:
                                    0.8 +
                                    (wordIndex * word.length + charIndex) *
                                      0.08,
                                  ease: "easeOut",
                                }}
                                className="inline-block"
                                style={{ wordBreak: "keep-all" }}
                                whileHover={{
                                  scale: 1.2,
                                  color: "#60A5FA",
                                  textShadow:
                                    "0 0 20px rgba(96, 165, 250, 0.8)",
                                }}
                              >
                                {char}
                              </motion.span>
                            ))}
                          </motion.span>
                        ))}
                      </motion.h1>

                      <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.8 }}
                        className="text-xl text-gray-300 mb-8 leading-relaxed"
                      >
                        {slide.description}
                      </motion.p>

                      {/* CTA Buttons */}
                      {/* <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 1 }}
                        className="flex flex-wrap gap-4 mb-8"
                      >
                        <motion.button
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                          className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-full font-semibold text-lg flex items-center space-x-2 hover:shadow-lg transition-all duration-300"
                        >
                          <span>{slide.cta}</span>
                          <ArrowRight size={20} />
                        </motion.button>
                        
                        <motion.button
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                          className="bg-white/10 backdrop-blur-sm text-white px-8 py-4 rounded-full font-semibold text-lg flex items-center space-x-2 hover:bg-white/20 transition-all duration-300"
                        >
                          <Play size={20} />
                          <span>Watch Demo</span>
                        </motion.button>
                      </motion.div> */}

                      {/* Stats */}
                      {/* <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 1.2 }}
                        className="grid grid-cols-3 gap-6"
                      >
                        {slide.stats.map((stat, statIndex) => (
                          <div key={statIndex} className="text-center">
                            <div className="text-3xl font-bold text-blue-400 mb-1">
                              {stat.number}
                            </div>
                            <div className="text-sm text-gray-300">
                              {stat.label}
                            </div>
                          </div>
                        ))}
                      </motion.div> */}
                    </motion.div>

                    {/* Visual Element */}
                    <motion.div
                      initial={{ opacity: 0, x: 100 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 1, delay: 0.4 }}
                      className="hidden lg:block"
                    >
                      <div className="relative">
                        <motion.div
                          animate={{
                            y: [0, -20, 0],
                          }}
                          transition={{
                            duration: 4,
                            repeat: Infinity,
                            ease: "easeInOut",
                          }}
                          className="w-96 h-96 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-full blur-3xl"
                        />
                        {/* <div className="absolute inset-0 flex items-center justify-center">
                          <div className="w-64 h-64 bg-white/10 backdrop-blur-sm rounded-full border border-white/20 flex items-center justify-center">
                            <div className="text-white text-center">
                              <div className="text-4xl font-bold mb-2">Atwoz</div>
                              <div className="text-sm text-gray-300">Digital Excellence</div>
                            </div>
                          </div>
                        </div> */}
                      </div>
                    </motion.div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Custom Navigation */}
        <div className="swiper-button-prev !text-white !bg-white/10 backdrop-blur-sm !left-8">
          <ChevronRight className="rotate-180" size={24} />
        </div>
        <div className="swiper-button-next !text-white !bg-white/10 backdrop-blur-sm !right-8">
          <ChevronRight size={24} />
        </div>

        {/* Custom Pagination */}
        <div className="swiper-pagination !bottom-8"></div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white"
      >
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/60 rounded-full mt-2"></div>
        </div>
        <div className="text-sm text-white/60 mt-2">Scroll Down</div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
