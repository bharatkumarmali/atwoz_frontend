import React from "react";
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
  const heroSlides = [
    {
      id: 1,
      title: "Innovative Digital Solutions",
      subtitle: "Transform your business with cutting-edge technology",
      description:
        "We help businesses grow and succeed in the digital age with our comprehensive web development, mobile apps, and digital marketing services.",
      image:
        "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2015&q=80",
      cta: "Get Started",
      stats: [
        { number: "500+", label: "Projects Completed" },
        { number: "50+", label: "Happy Clients" },
        { number: "5+", label: "Years Experience" },
      ],
    },
    {
      id: 2,
      title: "Creative Web Design",
      subtitle: "Beautiful websites that convert",
      description:
        "Our team of expert designers and developers create stunning, responsive websites that not only look great but also drive results for your business.",
      image:
        "https://images.unsplash.com/photo-1547658719-da2b51169166?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1964&q=80",
      cta: "View Portfolio",
      stats: [
        { number: "100%", label: "Client Satisfaction" },
        { number: "24/7", label: "Support Available" },
        { number: "Fast", label: "Delivery Time" },
      ],
    },
    {
      id: 3,
      title: "Mobile App Development",
      subtitle: "Native & Cross-platform Solutions",
      description:
        "From concept to launch, we build powerful mobile applications that engage users and drive business growth across all platforms.",
      image:
        "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80",
      cta: "Learn More",
      stats: [
        { number: "100+", label: "Apps Developed" },
        { number: "4.8★", label: "App Store Rating" },
        { number: "1M+", label: "Downloads" },
      ],
    },
  ];

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
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.6 }}
                        className="text-5xl lg:text-7xl font-bold mb-6 leading-tight"
                      >
                        {slide.title}
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
