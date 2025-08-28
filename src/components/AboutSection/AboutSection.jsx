import React from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { 
  Users, 
  Award, 
  Clock, 
  Target,
  CheckCircle,
  ArrowRight,
  Play
} from 'lucide-react'

const AboutSection = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const stats = [
    { icon: Users, number: "500+", label: "Happy Clients", color: "text-blue-600" },
    { icon: Award, number: "50+", label: "Awards Won", color: "text-purple-600" },
    { icon: Clock, number: "5+", label: "Years Experience", color: "text-green-600" },
    { icon: Target, number: "100%", label: "Success Rate", color: "text-orange-600" }
  ]

  const features = [
    "Expert team of developers and designers",
    "Cutting-edge technology stack",
    "24/7 customer support",
    "Agile development methodology",
    "Quality assurance and testing",
    "Post-launch maintenance and updates"
  ]

  return (
    <section id="about" ref={ref} className="py-20 bg-white">
              <div className="container mx-auto px-6 sm:px-8 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="inline-flex items-center space-x-2 bg-blue-100 text-blue-600 px-4 py-2 rounded-full text-sm font-medium mb-6"
            >
              <span>About Us</span>
            </motion.div>

            {/* Title */}
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight"
            >
              We Create Digital
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600"> Experiences</span>
              That Matter
            </motion.h2>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-xl text-gray-600 mb-8 leading-relaxed"
            >
              At Atwoz, we are passionate about creating innovative digital solutions that help businesses 
              thrive in the modern world. Our team of experts combines creativity with technical excellence 
              to deliver outstanding results.
            </motion.p>

            {/* Features List */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="space-y-4 mb-8"
            >
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
                  className="flex items-center space-x-3"
                >
                  <CheckCircle size={20} className="text-green-500 flex-shrink-0" />
                  <span className="text-gray-700">{feature}</span>
                </motion.div>
              ))}
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.7 }}
              className="flex flex-wrap gap-4"
            >
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-full font-semibold text-lg flex items-center space-x-2 hover:shadow-lg transition-all duration-300"
              >
                <span>Learn More</span>
                <ArrowRight size={20} />
              </motion.button>
              
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-white border-2 border-gray-300 text-gray-700 px-8 py-4 rounded-full font-semibold text-lg flex items-center space-x-2 hover:border-blue-600 hover:text-blue-600 transition-all duration-300"
              >
                <Play size={20} />
                <span>Watch Video</span>
              </motion.button>
            </motion.div>
          </motion.div>

          {/* Right Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative"
          >
            {/* Main Image */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="relative"
            >
              <div className="w-full h-96 lg:h-[500px] bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl overflow-hidden">
                <div className="w-full h-full bg-gradient-to-br from-blue-400/20 to-purple-400/20 flex items-center justify-center">
                  <div className="text-center text-white">
                    <div className="text-6xl font-bold mb-4">Atwoz</div>
                    <div className="text-xl opacity-80">Digital Excellence</div>
                  </div>
                </div>
              </div>
              
              {/* Floating Elements */}
              <motion.div
                animate={{
                  y: [0, -20, 0],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                className="absolute -top-6 -left-6 w-24 h-24 bg-yellow-400 rounded-full flex items-center justify-center shadow-lg"
              >
                <span className="text-white font-bold text-lg">🚀</span>
              </motion.div>
              
              <motion.div
                animate={{
                  y: [0, 20, 0],
                }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                className="absolute -bottom-6 -right-6 w-20 h-20 bg-green-400 rounded-full flex items-center justify-center shadow-lg"
              >
                <span className="text-white font-bold text-lg">💡</span>
              </motion.div>
            </motion.div>

            {/* Stats Grid */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.7 }}
              className="grid grid-cols-2 gap-6 mt-8"
            >
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.6, delay: 0.8 + index * 0.1 }}
                  whileHover={{ scale: 1.05 }}
                  className="bg-gray-50 rounded-xl p-6 text-center border border-gray-100 hover:border-gray-200 transition-all duration-300"
                >
                  <div className={`w-12 h-12 bg-gradient-to-r ${stat.color.replace('text-', 'bg-')} rounded-lg flex items-center justify-center mx-auto mb-4`}>
                    <stat.icon size={24} className="text-white" />
                  </div>
                  <div className="text-3xl font-bold text-gray-900 mb-2">{stat.number}</div>
                  <div className="text-sm text-gray-600">{stat.label}</div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default AboutSection
