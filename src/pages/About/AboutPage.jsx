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
  Play,
  Heart,
  Zap,
  Shield,
  Globe,
  Lightbulb
} from 'lucide-react'

const AboutPage = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const stats = [
    { icon: Users, number: "500+", label: "Happy Clients", color: "text-blue-600" },
    { icon: Award, number: "50+", label: "Awards Won", color: "text-purple-600" },
    { icon: Clock, number: "5+", label: "Years Experience", color: "text-green-600" },
    { icon: Target, number: "100%", label: "Success Rate", color: "text-orange-600" }
  ]

  const values = [
    {
      icon: Heart,
      title: "Passion",
      description: "We are passionate about creating innovative solutions that make a difference.",
      color: "from-red-500 to-pink-500"
    },
    {
      icon: Zap,
      title: "Innovation",
      description: "Constantly pushing boundaries and exploring new technologies to deliver cutting-edge solutions.",
      color: "from-yellow-500 to-orange-500"
    },
    {
      icon: Shield,
      title: "Quality",
      description: "Committed to delivering the highest quality work that exceeds client expectations.",
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: Globe,
      title: "Global Reach",
      description: "Serving clients worldwide with our expertise and dedication to excellence.",
      color: "from-green-500 to-emerald-500"
    },
    {
      icon: Lightbulb,
      title: "Creativity",
      description: "Bringing creative ideas to life with unique and innovative approaches.",
      color: "from-purple-500 to-pink-500"
    },
    {
      icon: Users,
      title: "Teamwork",
      description: "Collaborating effectively to achieve common goals and deliver outstanding results.",
      color: "from-indigo-500 to-blue-500"
    }
  ]

  const team = [
    {
      name: "Rahul Sharma",
      position: "CEO & Founder",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80",
      description: "Visionary leader with 10+ years of experience in digital transformation."
    },
    {
      name: "Priya Patel",
      position: "CTO",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80",
      description: "Technology expert specializing in scalable architecture and innovation."
    },
    {
      name: "Amit Kumar",
      position: "Lead Designer",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
      description: "Creative designer with a passion for user-centered design solutions."
    },
    {
      name: "Neha Singh",
      position: "Marketing Director",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
      description: "Strategic marketing professional driving growth and brand awareness."
    }
  ]

  const timeline = [
    {
      year: "2019",
      title: "Company Founded",
      description: "Atwoz was established with a vision to transform businesses through digital innovation."
    },
    {
      year: "2020",
      title: "First 100 Clients",
      description: "Reached our first milestone of serving 100 satisfied clients across various industries."
    },
    {
      year: "2021",
      title: "Team Expansion",
      description: "Grew our team to 25+ professionals and opened our second office location."
    },
    {
      year: "2022",
      title: "Award Recognition",
      description: "Received multiple industry awards for excellence in digital services."
    },
    {
      year: "2023",
      title: "Global Expansion",
      description: "Expanded our services to international markets and served 500+ clients."
    },
    {
      year: "2024",
      title: "Future Ready",
      description: "Continuing to innovate and lead the digital transformation industry."
    }
  ]

  return (
    <div className="min-h-screen bg-gray-50 overflow-x-hidden">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 text-white py-20">
        <div className="container mx-auto px-6 sm:px-8 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
              About Atwoz
            </h1>
            <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto">
              We are passionate about creating innovative digital solutions that help businesses thrive in the modern world.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="container mx-auto px-6 sm:px-8 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                Our Story
              </h2>
              <p className="text-lg sm:text-xl text-gray-600 mb-6 leading-relaxed">
                Founded in 2019, Atwoz began with a simple mission: to help businesses succeed in the digital age. 
                What started as a small team of passionate developers has grown into a comprehensive digital agency 
                serving clients worldwide.
              </p>
              <p className="text-lg sm:text-xl text-gray-600 mb-8 leading-relaxed">
                Today, we are proud to have helped over 500 businesses transform their digital presence and achieve 
                remarkable growth. Our commitment to innovation, quality, and client success remains at the heart 
                of everything we do.
              </p>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full font-semibold text-base sm:text-lg flex items-center space-x-2 hover:shadow-lg transition-all duration-300"
              >
                <span>Learn More</span>
                <ArrowRight size={20} />
              </motion.button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="w-full h-80 sm:h-96 lg:h-[500px] bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl overflow-hidden">
                <div className="w-full h-full bg-gradient-to-br from-blue-400/20 to-purple-400/20 flex items-center justify-center">
                  <div className="text-center text-white">
                    <div className="text-4xl sm:text-6xl font-bold mb-4">Atwoz</div>
                    <div className="text-lg sm:text-xl opacity-80">Digital Excellence</div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 sm:py-20 bg-gray-50">
        <div className="container mx-auto px-6 sm:px-8 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
                className="bg-white rounded-xl p-6 sm:p-8 text-center border border-gray-100 hover:border-gray-200 transition-all duration-300 shadow-sm hover:shadow-lg"
              >
                <div className={`w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-r ${stat.color.replace('text-', 'bg-')} rounded-lg flex items-center justify-center mx-auto mb-4`}>
                  <stat.icon size={24} className="text-white sm:w-8 sm:h-8" />
                </div>
                <div className="text-2xl sm:text-4xl font-bold text-gray-900 mb-2">{stat.number}</div>
                <div className="text-xs sm:text-sm text-gray-600">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="container mx-auto px-6 sm:px-8 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12 sm:mb-16"
          >
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Our Values
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
              The principles that guide our work and relationships with clients and partners.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -10 }}
                className="group relative"
              >
                <div className="bg-gray-50 rounded-2xl p-6 sm:p-8 h-full border border-gray-100 hover:border-gray-200 transition-all duration-300 hover:shadow-xl">
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    className={`w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-r ${value.color} rounded-xl flex items-center justify-center mb-6 group-hover:shadow-lg transition-all duration-300`}
                  >
                    <value.icon size={24} className="text-white sm:w-8 sm:h-8" />
                  </motion.div>

                  <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4 group-hover:text-gray-700 transition-colors">
                    {value.title}
                  </h3>
                  
                  <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                    {value.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 sm:py-20 bg-gray-50">
        <div className="container mx-auto px-6 sm:px-8 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12 sm:mb-16"
          >
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Meet Our Team
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
              The talented individuals who make Atwoz a success story.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {team.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -10 }}
                className="group"
              >
                <div className="bg-white rounded-2xl p-4 sm:p-6 border border-gray-100 hover:border-gray-200 transition-all duration-300 hover:shadow-xl">
                  <div className="w-full h-40 sm:h-48 bg-gray-200 rounded-xl mb-4 sm:mb-6 overflow-hidden">
                    <img 
                      src={member.image} 
                      alt={member.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                  </div>
                  
                  <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2">{member.name}</h3>
                  <div className="text-blue-600 font-semibold mb-3">{member.position}</div>
                  <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">{member.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-16 sm:py-20 bg-white overflow-hidden">
        <div className="container mx-auto px-6 sm:px-8 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12 sm:mb-16"
          >
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Our Journey
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
              Key milestones in our company's growth and success story.
            </p>
          </motion.div>

          <div className="relative max-w-6xl mx-auto">
            {/* Timeline Line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-blue-500 to-purple-500 hidden lg:block"></div>
            
            <div className="space-y-8 sm:space-y-12">
              {timeline.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className={`flex items-center ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}
                >
                  {/* Mobile Layout - Stacked */}
                  <div className="w-full lg:hidden mb-4">
                    <div className="bg-white p-4 sm:p-6 rounded-2xl border border-gray-100 shadow-sm hover:shadow-lg transition-all duration-300">
                      <div className="text-xl sm:text-2xl font-bold text-blue-600 mb-2">{item.year}</div>
                      <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2">{item.title}</h3>
                      <p className="text-sm sm:text-base text-gray-600">{item.description}</p>
                    </div>
                  </div>

                  {/* Desktop Layout - Side by Side */}
                  <div className={`hidden lg:block w-1/2 ${index % 2 === 0 ? 'pr-8 text-right' : 'pl-8 text-left'}`}>
                    <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm hover:shadow-lg transition-all duration-300">
                      <div className="text-2xl font-bold text-blue-600 mb-2">{item.year}</div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2">{item.title}</h3>
                      <p className="text-gray-600">{item.description}</p>
                    </div>
                  </div>
                  
                  {/* Timeline Dot - Desktop Only */}
                  <div className="hidden lg:block w-4 h-4 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full border-4 border-white shadow-lg"></div>
                  
                  <div className="hidden lg:block w-1/2"></div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 sm:py-20 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="container mx-auto px-6 sm:px-8 lg:px-12 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
              Ready to Work Together?
            </h2>
            <p className="text-lg sm:text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              Let's discuss your project and see how we can help bring your vision to life.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-white text-blue-600 px-6 sm:px-8 py-3 sm:py-4 rounded-full font-semibold text-base sm:text-lg hover:shadow-lg transition-all duration-300"
            >
              Get Started Today
            </motion.button>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default AboutPage
