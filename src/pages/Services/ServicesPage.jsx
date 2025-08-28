import React from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { 
  Code, 
  Smartphone, 
  Palette, 
  Search, 
  BarChart3, 
  Shield,
  ArrowRight,
  CheckCircle,
  Star
} from 'lucide-react'

const ServicesPage = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const services = [
    {
      id: 1,
      icon: Code,
      title: "Web Development",
      description: "Custom websites and web applications built with modern technologies and best practices.",
      features: ["React & Next.js", "Node.js & Express", "Database Design", "API Development", "E-commerce Solutions", "CMS Development"],
      color: "from-blue-500 to-cyan-500",
      bgColor: "bg-blue-50",
      iconColor: "text-blue-600",
      price: "Starting from ₹50,000",
      duration: "4-8 weeks"
    },
    {
      id: 2,
      icon: Smartphone,
      title: "Mobile Development",
      description: "Native and cross-platform mobile applications for iOS and Android platforms.",
      features: ["React Native", "Flutter", "Native iOS/Android", "App Store Publishing", "Push Notifications", "Offline Support"],
      color: "from-purple-500 to-pink-500",
      bgColor: "bg-purple-50",
      iconColor: "text-purple-600",
      price: "Starting from ₹75,000",
      duration: "6-12 weeks"
    },
    {
      id: 3,
      icon: Palette,
      title: "UI/UX Design",
      description: "Beautiful and intuitive user interfaces that enhance user experience and engagement.",
      features: ["Wireframing", "Prototyping", "User Research", "Design Systems", "Responsive Design", "Brand Identity"],
      color: "from-green-500 to-emerald-500",
      bgColor: "bg-green-50",
      iconColor: "text-green-600",
      price: "Starting from ₹30,000",
      duration: "2-4 weeks"
    },
    {
      id: 4,
      icon: Search,
      title: "SEO & Marketing",
      description: "Digital marketing strategies to improve your online presence and drive growth.",
      features: ["Search Engine Optimization", "Content Marketing", "Social Media", "Analytics", "PPC Campaigns", "Email Marketing"],
      color: "from-orange-500 to-red-500",
      bgColor: "bg-orange-50",
      iconColor: "text-orange-600",
      price: "Starting from ₹25,000/month",
      duration: "Ongoing"
    },
    {
      id: 5,
      icon: BarChart3,
      title: "Business Analytics",
      description: "Data-driven insights to help you make informed business decisions.",
      features: ["Data Visualization", "Performance Tracking", "KPI Monitoring", "Reports", "Predictive Analytics", "Dashboard Creation"],
      color: "from-indigo-500 to-blue-500",
      bgColor: "bg-indigo-50",
      iconColor: "text-indigo-600",
      price: "Starting from ₹40,000",
      duration: "3-6 weeks"
    },
    {
      id: 6,
      icon: Shield,
      title: "Cybersecurity",
      description: "Protect your digital assets with comprehensive security solutions.",
      features: ["Security Audits", "Penetration Testing", "Compliance", "Incident Response", "Security Training", "24/7 Monitoring"],
      color: "from-red-500 to-pink-500",
      bgColor: "bg-red-50",
      iconColor: "text-red-600",
      price: "Starting from ₹60,000",
      duration: "2-4 weeks"
    }
  ]

  const testimonials = [
    {
      id: 1,
      name: "Rahul Sharma",
      company: "TechStart India",
      rating: 5,
      comment: "Atwoz delivered an exceptional website that exceeded our expectations. The team was professional and responsive throughout the project."
    },
    {
      id: 2,
      name: "Priya Patel",
      company: "Digital Solutions",
      rating: 5,
      comment: "Their mobile app development service is top-notch. The app is fast, user-friendly, and has received great feedback from our users."
    },
    {
      id: 3,
      name: "Amit Kumar",
      company: "E-commerce Pro",
      rating: 5,
      comment: "The SEO services helped us increase our organic traffic by 300% in just 6 months. Highly recommended!"
    }
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 text-white py-12 sm:py-16 md:py-20">
        <div className="container mx-auto px-6 sm:px-8 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 leading-tight">
              Our Services
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-gray-300 max-w-2xl sm:max-w-3xl mx-auto px-2 sm:px-0 leading-relaxed">
              Comprehensive digital solutions to help your business grow and succeed in the modern world.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section ref={ref} className="py-12 sm:py-16 md:py-20">
        <div className="container mx-auto px-6 sm:px-8 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8"
          >
            {services.map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -10 }}
                className="group relative"
              >
                <div className={`${service.bgColor} rounded-xl sm:rounded-2xl p-6 sm:p-8 h-full border border-gray-100 hover:border-gray-200 transition-all duration-300 hover:shadow-xl`}>
                  {/* Icon */}
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    className={`w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-r ${service.color} rounded-lg sm:rounded-xl flex items-center justify-center mb-4 sm:mb-6 group-hover:shadow-lg transition-all duration-300`}
                  >
                    <service.icon size={24} className="sm:w-8 sm:h-8 text-white" />
                  </motion.div>

                  {/* Content */}
                  <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-900 mb-3 sm:mb-4 group-hover:text-gray-700 transition-colors leading-tight">
                    {service.title}
                  </h3>
                  
                  <p className="text-sm sm:text-base text-gray-600 mb-4 sm:mb-6 leading-relaxed">
                    {service.description}
                  </p>

                  {/* Price & Duration */}
                  <div className="mb-4 sm:mb-6 p-3 sm:p-4 bg-white rounded-lg border border-gray-200">
                    <div className="text-base sm:text-lg font-semibold text-gray-900 mb-1">{service.price}</div>
                    <div className="text-xs sm:text-sm text-gray-600">Duration: {service.duration}</div>
                  </div>

                  {/* Features */}
                  <ul className="space-y-2 mb-4 sm:mb-6">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start text-xs sm:text-sm text-gray-600">
                        <CheckCircle size={14} className="text-green-500 mr-2 sm:mr-3 mt-0.5 flex-shrink-0" />
                        <span className="leading-relaxed">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  {/* CTA */}
                  <motion.button
                    whileHover={{ x: 5 }}
                    whileTap={{ scale: 0.95 }}
                    className={`inline-flex items-center space-x-2 text-xs sm:text-sm font-semibold ${service.iconColor} hover:${service.iconColor} transition-colors w-full sm:w-auto justify-center sm:justify-start py-2 sm:py-0`}
                  >
                    <span>Get Quote</span>
                    <ArrowRight size={14} className="sm:w-4 sm:h-4" />
                  </motion.button>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-12 sm:py-16 md:py-20 bg-white">
        <div className="container mx-auto px-6 sm:px-8 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12 sm:mb-16"
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 sm:mb-6 leading-tight">
              What Our Clients Say
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-2xl sm:max-w-3xl mx-auto px-2 sm:px-0 leading-relaxed">
              Don't just take our word for it. Here's what our satisfied clients have to say about our services.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="bg-gray-50 rounded-xl sm:rounded-2xl p-6 sm:p-8 border border-gray-100"
              >
                {/* Rating */}
                <div className="flex items-center mb-3 sm:mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} size={18} className="sm:w-5 sm:h-5 text-yellow-400 fill-current" />
                  ))}
                </div>

                {/* Comment */}
                <p className="text-sm sm:text-base text-gray-700 mb-4 sm:mb-6 leading-relaxed">
                  "{testimonial.comment}"
                </p>

                {/* Author */}
                <div>
                  <div className="font-semibold text-gray-900 text-sm sm:text-base">{testimonial.name}</div>
                  <div className="text-xs sm:text-sm text-gray-600">{testimonial.company}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 sm:py-16 md:py-20 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="container mx-auto px-6 sm:px-8 lg:px-12 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 sm:mb-6 leading-tight">
              Ready to Get Started?
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-blue-100 mb-6 sm:mb-8 max-w-2xl mx-auto px-2 sm:px-0 leading-relaxed">
              Let's discuss your project requirements and create something amazing together.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-white text-blue-600 px-6 sm:px-8 py-3 sm:py-4 rounded-full font-semibold text-base sm:text-lg hover:shadow-lg transition-all duration-300 w-full sm:w-auto max-w-xs sm:max-w-none"
            >
              Contact Us Today
            </motion.button>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default ServicesPage 