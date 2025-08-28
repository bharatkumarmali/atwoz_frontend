import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, User, Heart, ShoppingCart, LogIn } from "lucide-react";

const Header = ({ onSidebarToggle }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { name: "Home", href: "/" },
    { name: "Services", href: "/services" },
    { name: "About", href: "/about" },
    { name: "Portfolio", href: "/portfolio" },
    { name: "Contact", href: "/contact" },
  ];

  const userActions = [
    { name: "Profile", href: "/profile", icon: User },
    { name: "Favorites", href: "/favorites", icon: Heart, badge: 4 },
    { name: "Cart", href: "/cart", icon: ShoppingCart, badge: 2 },
    // { name: "Login", href: "/login", icon: LogIn },
  ];

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-white/95 backdrop-blur-md shadow-lg" : "bg-transparent"
      }`}
    >
      {/* Main Navigation */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link to="/">
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="flex items-center space-x-2"
            >
              <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">A</span>
              </div>
              <span
                className={`text-2xl font-bold ${
                  scrolled ? "text-gray-800" : "text-white"
                }`}
              >
                Atwoz
              </span>
            </motion.div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navItems.map((item, index) => (
              <motion.div
                key={item.name}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -2 }}
              >
                <Link
                  to={item.href}
                  className={`font-medium transition-colors duration-300 ${
                    scrolled
                      ? "text-gray-700 hover:text-blue-600"
                      : "text-white hover:text-blue-200"
                  } ${location.pathname === item.href ? "text-blue-400" : ""}`}
                >
                  {item.name}
                </Link>
              </motion.div>
            ))}
          </nav>

          {/* Desktop User Actions */}
          <div className="hidden lg:flex items-center space-x-4">
            {userActions.map((action) => (
              <Link
                key={action.name}
                to={action.href}
                className={`relative p-2 transition-colors duration-300 ${
                  scrolled
                    ? "text-gray-600 hover:text-blue-600"
                    : "text-white hover:text-blue-200"
                }`}
              >
                <action.icon size={20} />
                {action.badge && (
                  <span
                    className={`absolute -top-1 -right-1 text-xs font-bold px-1.5 py-0.5 rounded-full min-w-[18px] text-center ${
                      action.name === "Favorites"
                        ? "bg-red-500 text-white"
                        : "bg-green-500 text-white"
                    }`}
                  >
                    {action.badge}
                  </span>
                )}
              </Link>
            ))}

            {/* CTA Button */}
            <motion.button
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="hidden cursor-pointer ml-10 lg:block bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-2 rounded-full font-medium hover:shadow-lg transition-all duration-300"
            >
              Login
            </motion.button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={onSidebarToggle}
            className={`lg:hidden p-2 rounded-lg transition-all duration-300 ${
              scrolled
                ? "bg-gray-100 hover:bg-gray-200"
                : "bg-white/10 backdrop-blur-sm hover:bg-white/20"
            }`}
          >
            <Menu
              size={24}
              className={`transition-colors duration-300 ${
                scrolled ? "text-gray-700" : "text-white"
              }`}
            />
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <motion.div
        initial={{ opacity: 0, height: 0 }}
        animate={{
          opacity: isOpen ? 1 : 0,
          height: isOpen ? "auto" : 0,
        }}
        transition={{ duration: 0.3 }}
        className="lg:hidden bg-white/95 backdrop-blur-md"
      >
        <div className="container mx-auto px-6 sm:px-8 lg:px-12 py-4">
          <nav className="flex flex-col space-y-4">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                onClick={() => setIsOpen(false)}
                className={`font-medium py-2 border-b border-gray-100 transition-colors ${
                  location.pathname === item.href
                    ? "text-blue-600"
                    : "text-gray-700 hover:text-blue-600"
                }`}
              >
                {item.name}
              </Link>
            ))}
            <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-full font-medium mt-4">
              Get Started
            </button>
          </nav>
        </div>
      </motion.div>
    </motion.header>
  );
};

export default Header;
