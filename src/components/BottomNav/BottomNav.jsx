import React from 'react'
import { motion } from 'framer-motion'
import { Link, useLocation } from 'react-router-dom'
import { 
  Home, 
  Heart, 
  User,
  ShoppingCart,
  Menu
} from 'lucide-react'

const BottomNav = ({ onSidebarToggle }) => {
  const location = useLocation()

  return (
    <>
      {/* Bottom Navigation Bar */}
      <motion.nav
        initial={{ y: 100 }}
        animate={{ y: 0 }}
        transition={{ type: 'spring', damping: 25, stiffness: 200 }}
        className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 shadow-lg z-40 lg:hidden"
      >
        <div className="flex items-center justify-around px-2 py-3">
          {/* 1. Sidebar Toggle */}
          <button
            onClick={onSidebarToggle}
            className="flex flex-col items-center space-y-1 p-2 rounded-lg text-gray-600 hover:text-blue-600 hover:bg-blue-50 transition-all duration-200"
          >
            <Menu size={28} />
            <span className="text-xs font-medium">Menu</span>
          </button>

          {/* 2. Cart */}
          <Link
            to="/"
            className="flex flex-col items-center space-y-1 p-2 rounded-lg text-gray-600 hover:text-green-600 hover:bg-green-50 transition-all duration-200 relative"
          >
            <ShoppingCart size={28} />
            <span className="text-xs font-medium">Cart</span>
            <span className="absolute -top-[6px] -right-[10px] bg-green-500 text-white text-xs font-bold h-5 w-5 flex items-center justify-center rounded-full min-w-[18px] text-center">
              24
            </span>
          </Link>

          {/* 3. Home */}
          <Link
            to="/"
            className={`flex flex-col items-center space-y-1 p-2 rounded-lg transition-all duration-200 ${
              location.pathname === '/'
                ? 'text-blue-600 bg-blue-50'
                : 'text-gray-600 hover:text-blue-600 hover:bg-blue-50'
            }`}
          >
            <Home size={28} />
            <span className="text-xs font-medium">Home</span>
          </Link>

          {/* 4. Favorites */}
          <Link
            to="/"
            className="flex flex-col items-center space-y-1 p-2 rounded-lg text-gray-600 hover:text-red-600 hover:bg-red-50 transition-all duration-200 relative"
          >
            <Heart size={28} />
            <span className="text-xs font-medium">Favorites</span>
            <span className="absolute -top-[6px] right-[1px] bg-red-500 text-white text-xs font-bold h-5 w-5 flex items-center justify-center rounded-full min-w-[18px] text-center">
              4
            </span>
          </Link>

          {/* 5. User Profile */}
          <Link
            to="/"
            className="flex flex-col items-center space-y-1 p-2 rounded-lg text-gray-600 hover:text-blue-600 hover:bg-blue-50 transition-all duration-200"
          >
            <User size={28} />
            <span className="text-xs font-medium">Profile</span>
          </Link>
        </div>
      </motion.nav>

      {/* Bottom Spacing for Mobile */}
      <div className="h-20 lg:hidden"></div>
    </>
  )
}

export default BottomNav
