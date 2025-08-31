import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { useNavigate } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import {
  ArrowRight,
  CheckCircle,
  Star,
  Users,
  CreditCard,
  FileText,
  Smartphone,
  Zap,
  Phone,
  Mail,
  MapPin,
  Clock,
  Shield,
  TrendingUp,
  Award,
} from "lucide-react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

// Custom hook for counter animation
const useCounter = (end, start = 0, duration = 2000) => {
  const [count, setCount] = useState(start);
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    if (!isInView) return;

    let startTime = null;
    const animate = (currentTime) => {
      if (!startTime) startTime = currentTime;
      const progress = Math.min((currentTime - startTime) / duration, 1);

      // Easing function for smooth animation
      const easeOutQuart = 1 - Math.pow(1 - progress, 4);
      const currentCount = Math.floor(easeOutQuart * (end - start) + start);

      setCount(currentCount);

      if (progress < 1) {
        requestAnimationFrame(animate);
      } else {
        setCount(end);
      }
    };

    requestAnimationFrame(animate);
  }, [end, start, duration, isInView]);

  return [count, setIsInView];
};

const ServicesPage = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [activeService, setActiveService] = useState(1);
  const navigate = useNavigate();

  // Counter hooks for stats
  const [serviceCenters, setServiceCentersInView] = useCounter(500);
  const [happyCustomers, setHappyCustomersInView] = useCounter(50000);
  const [supportAvailable, setSupportAvailableInView] = useCounter(24);
  const [secureServices, setSecureServicesInView] = useCounter(100);

  // Services from WeProvideSection
  const services = [
    {
      id: 1,
      title: "Aadhaar Centre",
      subtitle: "UIDAI Services",
      description:
        "Aadhaar Seva Kendra project, UIDAI plans to set up 114 Aadhaar Seva Kendra across 53 cities in India. These include dedicated centres in all metro cities",
      longDescription:
        "Official Aadhaar Centre providing all UIDAI services including new enrollment, updates, corrections, and verification. Serve as an authorized center for Aadhaar-related services in your area.",
      features: [
        "New Aadhaar Enrollment",
        "Biometric Updates",
        "Address Corrections",
        "Mobile Number Updates",
        "Aadhaar Reprint",
        "Verification Services",
      ],
      bannerImage: "/aadhar-banner.jpg",
      logo: "/aadhar.png",
      icon: Shield,
      color: "from-emerald-500 to-emerald-600",
      bgColor: "bg-emerald-50",
      iconColor: "text-emerald-600",
      borderColor: "border-emerald-200",
      price: "Government Rates",
      duration: "Same Day Service",
      benefits: [
        "Official Authorization",
        "Government Rates",
        "Wide Coverage",
        "Instant Services",
      ],
      endpoint: "/services/aadhar",
    },
    {
      id: 2,
      title: "E Mitra",
      subtitle: "Government Services",
      description:
        "E-mitra service has been launched by government of Rajasthan. Provide government services to citizens at their doorstep.",
      longDescription:
        "E-Mitra is Rajasthan's comprehensive e-governance initiative that brings government services closer to citizens. Offer various government services including certificates, payments, and more.",
      features: [
        "Birth & Death Certificates",
        "Income Certificates",
        "Caste Certificates",
        "Property Documents",
        "Government Payments",
        "Utility Bill Payments",
      ],
      bannerImage: "/e-mitra-banner.jpg",
      logo: "/emitra.png",
      icon: TrendingUp,
      color: "from-amber-500 to-amber-600",
      bgColor: "bg-amber-50",
      iconColor: "text-amber-600",
      borderColor: "border-amber-200",
      price: "Government Rates",
      duration: "Same Day to 7 Days",
      benefits: [
        "Government Backed",
        "Wide Service Range",
        "Trusted Platform",
        "Citizen Friendly",
      ],
      endpoint: "/services/emitra",
    },
    {
      id: 3,
      title: "AEPS",
      subtitle: "Aadhaar Enabled Payment System",
      description:
        "Aadhaar Enabled Payment System (AEPS) allows you to provide banking services like cash withdrawal, deposits, balance inquiry, and fund transfers using Aadhaar authentication.",
      longDescription:
        "AEPS is a bank-led model that allows online interoperable financial transactions at PoS through Business Correspondent using Aadhaar authentication. Provide essential banking services to your community using biometric authentication.",
      features: [
        "Cash Withdrawal",
        "Cash Deposit",
        "Balance Inquiry",
        "Mini Statement",
        "Aadhaar to Aadhaar Transfer",
        "Bank Account Linking",
      ],
      bannerImage: "/aeps-banner.jpg",
      logo: "/aeps.png",
      icon: CreditCard,
      color: "from-sky-500 to-sky-600",
      bgColor: "bg-sky-50",
      iconColor: "text-sky-600",
      borderColor: "border-sky-200",
      price: "Commission Based",
      duration: "Instant Transactions",
      benefits: [
        "Secure Transactions",
        "Instant Processing",
        "Wide Coverage",
        "Low Investment",
      ],
      endpoint: "/services/aeps",
    },
    {
      id: 4,
      title: "CSP",
      subtitle: "Bank Mitra Services",
      description:
        "Become Bank Mitra for State Bank of India, Bank of Baroda, Bank of India and Punjab National Bank. Provide banking services to your community.",
      longDescription:
        "CSP (Customer Service Point) allows you to become a Bank Mitra and provide essential banking services including cash deposits, withdrawals, balance inquiries, and more. Partner with major nationalized banks to serve your local community.",
      features: [
        "Cash Deposit & Withdrawal",
        "Balance Inquiry",
        "Mini Statement",
        "Aadhaar Enabled Services",
        "DTH & Mobile Recharge",
        "Insurance Products",
      ],
      bannerImage: "/CSP-banner.png",
      logo: "/csp.png",
      icon: Users,
      color: "from-indigo-500 to-indigo-600",
      bgColor: "bg-indigo-50",
      iconColor: "text-indigo-600",
      borderColor: "border-indigo-200",
      price: "Commission Based",
      duration: "Instant Setup",
      benefits: [
        "High Commission",
        "Trusted Brand",
        "Wide Network",
        "24/7 Support",
      ],
      endpoint: "/services/csp",
    },
    {
      id: 5,
      title: "PAN CENTER",
      subtitle: "UTIITSL Services",
      description:
        "UTI Infrastructure Technology And Services Limited (UTIITSL) is a Government Company under section 2(45) of the Companies Act 2013",
      longDescription:
        "Authorized PAN Center providing PAN card services including new applications, corrections, reprints, and updates. Partner with UTIITSL to offer official PAN services.",
      features: [
        "New PAN Application",
        "PAN Corrections",
        "PAN Reprint",
        "Aadhaar Linking",
        "Status Tracking",
        "Document Verification",
      ],
      bannerImage: "/pen-center-banner.jpg",
      logo: "/uti.png",
      icon: FileText,
      color: "from-violet-500 to-violet-600",
      bgColor: "bg-violet-50",
      iconColor: "text-violet-600",
      borderColor: "border-violet-200",
      price: "Government Rates",
      duration: "7-15 Days",
      benefits: [
        "Official Partner",
        "Fast Processing",
        "Secure Service",
        "Nationwide Network",
      ],
      endpoint: "/services/pan",
    },
    {
      id: 6,
      title: "Utility Service",
      subtitle: "Bill Payment & Recharge",
      description:
        "Bill Payment & Recharge. Recharge your prepaid mobile, DTH account, Pay your electricity, postpaid, landline, broadband, gas, water bills.",
      longDescription:
        "Comprehensive utility services including mobile recharge, DTH recharge, bill payments for electricity, gas, water, and more. One-stop solution for all utility needs.",
      features: [
        "Mobile Recharge",
        "DTH Recharge",
        "Electricity Bills",
        "Gas Bill Payments",
        "Water Bill Payments",
        "Broadband Bills",
      ],
      bannerImage: "/utilityservice-banner.jpg",
      logo: "/utility.png",
      icon: Zap,
      color: "from-rose-500 to-rose-600",
      bgColor: "bg-rose-50",
      iconColor: "text-rose-600",
      borderColor: "border-rose-200",
      price: "No Extra Charges",
      duration: "Instant",
      benefits: [
        "Instant Service",
        "No Hidden Charges",
        "24/7 Availability",
        "Cashback Offers",
      ],
      endpoint: "/services/utility",
    },
  ];

  const testimonials = [
    {
      id: 1,
      name: "Rajesh Kumar",
      company: "Local Business Owner",
      rating: 5,
      comment:
        "CSP services have been a game-changer for my business. The commission structure is excellent and the support team is always helpful.",
    },
    {
      id: 2,
      name: "Sunita Devi",
      company: "Community Leader",
      rating: 5,
      comment:
        "Setting up the Aadhaar Centre was seamless. Now I can serve my community with official UIDAI services right in our neighborhood.",
    },
    {
      id: 3,
      name: "Amit Singh",
      company: "PAN Center Operator",
      rating: 5,
      comment:
        "The PAN Center partnership with UTIITSL has been very profitable. The process is simple and customer satisfaction is high.",
    },
  ];

  const serviceManagers = [
    {
      id: 1,
      name: "Niraj Mali",
      position: "Aadhaar Centre Manager",
      service: "Aadhaar Centre",
      rating: 5,
      experience: "8+ Years",
      specializations: [
        "UIDAI Operations",
        "Biometric Systems",
        "Customer Service",
      ],
      contact: `+91 ${import.meta.env.VITE_MOBILE_NO_niraj}`,
      email: `${import.meta.env.VITE_EMAIL_ID_NIRAJ}`,
      location: "Delhi, India",
      achievements: [
        "1000+ Enrollments",
        "99% Success Rate",
        "Best Performance Award",
      ],
      avatar: "/aadhar.png",
    },
    {
      id: 2,
      name: "Kishan Mali",
      position: "E-Mitra Coordinator",
      service: "E-Mitra Services",
      rating: 5,
      experience: "6+ Years",
      specializations: [
        "Government Services",
        "Digital Literacy",
        "Process Optimization",
      ],
      contact: `+91 ${import.meta.env.VITE_MOBILE_NO_1}`,
      email: `${import.meta.env.VITE_EMAIL_ID}`,
      location: "Rajasthan, India",
      achievements: ["50+ Services", "24/7 Support", "Customer Excellence"],
      avatar: "/emitra.png",
    },
    {
      id: 3,
      name: "Kishan Mali",
      position: "AEPS Banking Specialist",
      service: "AEPS Services",
      rating: 5,
      experience: "7+ Years",
      specializations: [
        "Banking Operations",
        "AEPS Systems",
        "Financial Services",
      ],
      contact: `+91 ${import.meta.env.VITE_MOBILE_NO_1}`,
      email: `${import.meta.env.VITE_EMAIL_ID}`,
      location: "Mumbai, India",
      achievements: [
        "300+ Daily Transactions",
        "Zero Downtime",
        "Security Excellence",
      ],
      avatar: "/aeps.png",
    },
    {
      id: 4,
      name: "Kishan Mali",
      position: "CSP Banking Manager",
      service: "CSP Banking",
      rating: 5,
      experience: "10+ Years",
      specializations: [
        "Multi-Bank Operations",
        "Financial Inclusion",
        "Rural Banking",
      ],
      contact: `+91 ${import.meta.env.VITE_MOBILE_NO_1}`,
      email: `${import.meta.env.VITE_EMAIL_ID}`,
      location: "Punjab, India",
      achievements: [
        "500+ Daily Transactions",
        "Multi-Bank Partner",
        "Rural Outreach",
      ],
      avatar: "/csp.png",
    },
    {
      id: 5,
      name: "Kishan Mali",
      position: "PAN Center Supervisor",
      service: "PAN Center",
      rating: 5,
      experience: "9+ Years",
      specializations: [
        "UTIITSL Operations",
        "Document Processing",
        "Compliance",
      ],
      contact: `+91 ${import.meta.env.VITE_MOBILE_NO_1}`,
      email: `${import.meta.env.VITE_EMAIL_ID}`,
      location: "Hyderabad, India",
      achievements: ["200+ Applications", "Fast Processing", "100% Accuracy"],
      avatar: "/uti.png",
    },
    {
      id: 6,
      name: "Kishan Mali",
      position: "Utility Services Head",
      service: "Utility Services",
      rating: 5,
      experience: "5+ Years",
      specializations: [
        "Bill Payments",
        "Digital Payments",
        "Customer Support",
      ],
      contact: `+91 ${import.meta.env.VITE_MOBILE_NO_1}`,
      email: `${import.meta.env.VITE_EMAIL_ID}`,
      location: "Bangalore, India",
      achievements: [
        "1000+ Daily Payments",
        "All Utilities Covered",
        "Instant Processing",
      ],
      avatar: "/utility.png",
    },
  ];

  const stats = [
    {
      number: serviceCenters,
      label: "Service Centers",
      icon: MapPin,
      suffix: "+",
      setInView: setServiceCentersInView,
    },
    {
      number: happyCustomers,
      label: "Happy Customers",
      icon: Users,
      suffix: "+",
      setInView: setHappyCustomersInView,
    },
    {
      number: supportAvailable,
      label: "Support Available",
      icon: Clock,
      suffix: "/7",
      setInView: setSupportAvailableInView,
    },
    {
      number: secureServices,
      label: "Secure Services",
      icon: Shield,
      suffix: "%",
      setInView: setSecureServicesInView,
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 text-white py-16 sm:py-20 md:py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="container mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 sm:mb-8 leading-tight">
              Our Services
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl text-gray-200 max-w-3xl sm:max-w-4xl mx-auto px-2 sm:px-0 leading-relaxed">
              Comprehensive digital and government services to help your
              business grow and serve your community better.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="mt-8 bg-white text-blue-600 px-8 py-4 rounded-full font-semibold text-lg hover:shadow-xl transition-all duration-300"
            >
              Explore Services
            </motion.button>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-6 sm:px-8 lg:px-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center"
                onViewportEnter={() => stat.setInView(true)}
              >
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <stat.icon className="w-8 h-8 text-blue-600" />
                </div>
                <div className="text-3xl font-bold text-gray-900 mb-2">
                  {stat.number.toLocaleString()}
                  {stat.suffix}
                </div>
                <div className="text-gray-600">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section ref={ref} className="pt-16 sm:pt-20 md:pt-24">
        <div className="container mx-auto px-6 sm:px-8 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
              What We Provide
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Discover our comprehensive range of services designed to empower
              your business and serve your community
            </p>
          </motion.div>

          {/* Service Cards */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
            {services.map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -10 }}
                className={`group cursor-pointer ${service.bgColor} rounded-2xl p-8 border-2 ${service.borderColor} hover:border-gray-300 transition-all duration-300 hover:shadow-2xl`}
                onClick={() => navigate(service.endpoint)}
              >
                <div className="flex items-start space-x-6">
                  {/* Service Logo */}
                  <div className="flex-shrink-0">
                    <div
                      className={`w-20 h-20 bg-gradient-to-r ${service.color} rounded-2xl flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-300`}
                    >
                      <img
                        src={service.logo}
                        alt={`${service.title} logo`}
                        className="w-12 h-12 object-contain"
                      />
                    </div>
                  </div>

                  {/* Service Content */}
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-gray-900 mb-2 group-hover:text-gray-700 transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-gray-600 mb-4 leading-relaxed">
                      {service.description}
                    </p>

                    {/* Price & Duration */}
                    <div className="flex items-center space-x-4 mb-4">
                      <span className="bg-white px-3 py-1 rounded-full text-sm font-semibold text-gray-700 border">
                        {service.price}
                      </span>
                      <span className="bg-white px-3 py-1 rounded-full text-sm font-semibold text-gray-700 border">
                        {service.duration}
                      </span>
                    </div>

                    {/* Features Preview */}
                    <div className="flex flex-wrap gap-2">
                      {service.features
                        .slice(0, 3)
                        .map((feature, featureIndex) => (
                          <span
                            key={featureIndex}
                            className="bg-white px-3 py-1 rounded-full text-xs text-gray-600 border"
                          >
                            {feature}
                          </span>
                        ))}
                      {service.features.length > 3 && (
                        <span className="bg-white px-3 py-1 rounded-full text-xs text-gray-600 border">
                          +{service.features.length - 3} more
                        </span>
                      )}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Active Service Details */}
          {/* {activeService && (
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="bg-white rounded-2xl p-8 shadow-xl border border-gray-200"
            >
              {(() => {
                const service = services.find((s) => s.id === activeService);
                if (!service) return null;

                return (
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-8"> */}
          {/* Left Column - Image and Info */}
          {/* <div>
                      <div className="relative mb-6">
                        <img
                          src={service.bannerImage}
                          alt={`${service.title} banner`}
                          className="w-full h-64 object-cover rounded-xl"
                        />
                        <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-full">
                          <span className="text-sm font-semibold text-gray-700">
                            {service.subtitle}
                          </span>
                        </div>
                      </div>

                      <div className="space-y-4">
                        <div className="flex items-center space-x-3">
                          <div
                            className={`w-12 h-12 bg-gradient-to-r ${service.color} rounded-xl flex items-center justify-center`}
                          >
                            <service.icon className="w-6 h-6 text-white" />
                          </div>
                          <div>
                            <h3 className="text-xl font-bold text-gray-900">
                              {service.title}
                            </h3>
                            <p className="text-gray-600">{service.subtitle}</p>
                          </div>
                        </div>

                        <p className="text-gray-700 leading-relaxed">
                          {service.longDescription}
                        </p>
                      </div>
                    </div> */}

          {/* Right Column - Features and Benefits */}
          {/* <div className="space-y-6"> */}
          {/* Features */}
          {/* <div>
                        <h4 className="text-lg font-semibold text-gray-900 mb-4">
                          What We Offer
                        </h4>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                          {service.features.map((feature, index) => (
                            <div
                              key={index}
                              className="flex items-center space-x-3"
                            >
                              <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                              <span className="text-gray-700">{feature}</span>
                            </div>
                          ))}
                        </div>
                      </div> */}

          {/* Benefits */}
          {/* <div>
                        <h4 className="text-lg font-semibold text-gray-900 mb-4">
                          Key Benefits
                        </h4>
                        <div className="grid grid-cols-2 gap-3">
                          {service.benefits.map((benefit, index) => (
                            <div
                              key={index}
                              className="bg-gray-50 px-4 py-3 rounded-lg border border-gray-200"
                            >
                              <span className="text-sm font-medium text-gray-700">
                                {benefit}
                              </span>
                            </div>
                          ))}
                        </div>
                      </div> */}

          {/* CTA */}
          {/* <div className="pt-4">
                        <motion.button
                          whileHover={{ scale: 1.02 }}
                          whileTap={{ scale: 0.98 }}
                          className={`w-full bg-gradient-to-r ${service.color} text-white py-4 px-6 rounded-xl font-semibold text-lg hover:shadow-lg transition-all duration-300 flex items-center justify-center space-x-2`}
                        >
                          <span>Get Started</span>
                          <ArrowRight className="w-5 h-5" />
                        </motion.button>
                      </div> */}
          {/* </div>
                  </div>
                );
              })()}
            </motion.div>
          )} */}
        </div>
      </section>

      {/* Testimonials Section */}
      {/* <section className="py-16 sm:py-20 md:py-24 bg-white">
        <div className="container mx-auto px-6 sm:px-8 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
              What Our Partners Say
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Don't just take our word for it. Here's what our satisfied service
              partners have to say about working with us.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="bg-gray-50 rounded-2xl p-8 border border-gray-100 hover:shadow-lg transition-all duration-300"
              >
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star
                      key={i}
                      size={20}
                      className="text-yellow-400 fill-current"
                    />
                  ))}
                </div>

                <p className="text-gray-700 mb-6 leading-relaxed text-lg">
                  "{testimonial.comment}"
                </p>

                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                    <span className="text-blue-600 font-semibold text-lg">
                      {testimonial.name.charAt(0)}
                    </span>
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">
                      {testimonial.name}
                    </div>
                    <div className="text-gray-600">{testimonial.company}</div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section> */}

      {/* Service Management Details Section */}
      <section className="py-16 sm:py-20 md:py-24 bg-gray-50">
        <div className="container mx-auto px-6 sm:px-8 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
              Service Management Team
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Meet our expert service managers who ensure smooth operations and
              excellent customer service for each specialized service.
            </p>
          </motion.div>

          {/* Navigation Arrows */}
          <div className="flex gap-5 w-fit mx-auto mb-8">
            <button className="group service-manager-arrow-left arrow bg-transparent active:scale-90 cursor-pointer hover:border-blue-500 duration-300 text-gray-300 hover:text-blue-500 p-2.5 rounded-full border">
              <ArrowRight className="text-[30px] group-hover:border-blue-500 rotate-180" />
            </button>
            <button className="group service-manager-arrow-right arrow bg-transparent active:scale-90 cursor-pointer hover:border-blue-500 duration-300 text-gray-300 hover:text-blue-500 p-2.5 rounded-full border">
              <ArrowRight className="text-[30px] group-hover:border-blue-500" />
            </button>
          </div>

          {/* Service Managers Slider */}
          <div className="relative min-h-[600px]">
            <Swiper
              className="select-none w-full h-full"
              modules={[Navigation, Pagination, Autoplay]}
              spaceBetween={30}
              slidesPerView={1}
              navigation={{
                nextEl: ".service-manager-arrow-right",
                prevEl: ".service-manager-arrow-left",
              }}
              loop={false}
              autoplay={{
                delay: 4000,
                disableOnInteraction: false,
                pauseOnMouseEnter: true,
              }}
              breakpoints={{
                640: {
                  slidesPerView: 2,
                  spaceBetween: 20,
                },
                1024: {
                  slidesPerView: 3,
                  spaceBetween: 30,
                },
              }}
            >
              {serviceManagers.map((manager, index) => (
                <SwiperSlide key={manager.id}>
                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.2 }}
                    className="bg-white rounded-2xl p-8 border border-gray-200 hover:shadow-xl transition-all duration-300 group h-full"
                  >
                    {/* Header with Avatar and Rating */}
                    <div className="flex items-start justify-between mb-6">
                      <div className="flex items-center space-x-4">
                        <div className="w-16 h-16 rounded-full overflow-hidden border-4 border-gray-100 group-hover:border-blue-200 transition-colors">
                          <img
                            src={manager.avatar}
                            alt={manager.name}
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <div>
                          <h3 className="text-xl font-bold text-gray-900">
                            {manager.name}
                          </h3>
                          <p className="text-blue-600 font-semibold">
                            {manager.position}
                          </p>
                          <p className="text-sm text-gray-500">
                            {manager.service}
                          </p>
                        </div>
                      </div>
                      <div className="flex items-center space-x-1">
                        {[...Array(manager.rating)].map((_, i) => (
                          <Star
                            key={i}
                            size={16}
                            className="text-yellow-400 fill-current"
                          />
                        ))}
                      </div>
                    </div>

                    {/* Experience and Location */}
                    <div className="flex items-center justify-between mb-4 text-sm">
                      <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full font-medium">
                        {manager.experience}
                      </span>
                      <span className="text-gray-600 flex items-center">
                        <MapPin className="w-4 h-4 mr-1" />
                        {manager.location}
                      </span>
                    </div>

                    {/* Specializations */}
                    <div className="mb-4">
                      <h4 className="text-sm font-semibold text-gray-700 mb-2">
                        Specializations:
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {manager.specializations.map((spec, idx) => (
                          <span
                            key={idx}
                            className="bg-gray-100 text-gray-700 px-2 py-1 rounded-md text-xs"
                          >
                            {spec}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Achievements */}
                    <div className="mb-6">
                      <h4 className="text-sm font-semibold text-gray-700 mb-2">
                        Key Achievements:
                      </h4>
                      <div className="space-y-1">
                        {manager.achievements.map((achievement, idx) => (
                          <div
                            key={idx}
                            className="flex items-center space-x-2"
                          >
                            <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                            <span className="text-sm text-gray-600">
                              {achievement}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Contact Information */}
                    <div className="border-t border-gray-100 pt-4">
                      <div className="space-y-2 text-sm">
                        <div className="flex items-center space-x-2">
                          <Phone className="w-4 h-4 text-blue-500" />
                          <span className="text-gray-700">
                            {manager.contact}
                          </span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Mail className="w-4 h-4 text-blue-500" />
                          <span className="text-gray-700">{manager.email}</span>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 sm:py-20 md:py-24 bg-gradient-to-r from-blue-600 to-purple-600 relative overflow-hidden">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="container mx-auto px-6 sm:px-8 lg:px-12 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
              Ready to Partner With Us?
            </h2>
            <p className="text-lg sm:text-xl text-blue-100 mb-8 max-w-3xl mx-auto leading-relaxed">
              Join our network of successful service providers and start earning
              while serving your community. Let's create something amazing
              together.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-white text-blue-600 px-8 py-4 rounded-full font-semibold text-lg hover:shadow-xl transition-all duration-300"
              >
                Become a Partner
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-white hover:text-blue-600 transition-all duration-300"
              >
                Contact Us
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact Info Section */}
      <section className="py-16 bg-gray-900 text-white">
        <div className="container mx-auto px-6 sm:px-8 lg:px-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center md:text-left">
              <h3 className="text-2xl font-bold mb-4">Get in Touch</h3>
              <div className="space-y-3">
                <div className="flex items-center justify-center md:justify-start space-x-3">
                  <Phone className="w-5 h-5 text-blue-400" />
                  <a href={`tel:+91${import.meta.env.VITE_MOBILE_NO_1}`}>
                    <span>+91 {import.meta.env.VITE_MOBILE_NO_1},</span>
                  </a>
                </div>
                <div className="flex items-center justify-center md:justify-start space-x-3">
                  <Mail className="w-5 h-5 text-blue-400" />
                  <a href={`mailto:${import.meta.env.VITE_EMAIL_ID}`}>
                    <span>{import.meta.env.VITE_EMAIL_ID}</span>
                  </a>
                </div>
                <div className="flex items-center justify-center md:justify-start space-x-3">
                  <MapPin className="w-5 h-5 text-blue-400" />
                  <span>
                    ATWOZ IT SOLUTIONS PVT LTD,
                    <br />
                    Baba Ramdev Hotel Ke Samne
                    <br />
                    Sirohi Rajsthan - 307001
                  </span>
                </div>
              </div>
            </div>

            <div className="text-center">
              <h3 className="text-2xl font-bold mb-4">Quick Links</h3>
              <div className="space-y-2">
                <div className="hover:text-blue-400 cursor-pointer transition-colors">
                  About Us
                </div>
                <div className="hover:text-blue-400 cursor-pointer transition-colors">
                  Services
                </div>
                <div className="hover:text-blue-400 cursor-pointer transition-colors">
                  Partners
                </div>
                <div className="hover:text-blue-400 cursor-pointer transition-colors">
                  Contact
                </div>
              </div>
            </div>

            <div className="text-center md:text-right">
              <h3 className="text-2xl font-bold mb-4">Why Choose Us</h3>
              <div className="space-y-2">
                <div className="flex items-center justify-center md:justify-end space-x-2">
                  <Award className="w-5 h-5 text-yellow-400" />
                  <span>Trusted Partner</span>
                </div>
                <div className="flex items-center justify-center md:justify-end space-x-2">
                  <Shield className="w-5 h-5 text-green-400" />
                  <span>Secure Services</span>
                </div>
                <div className="flex items-center justify-center md:justify-end space-x-2">
                  <TrendingUp className="w-5 h-5 text-blue-400" />
                  <span>Growing Network</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ServicesPage;
