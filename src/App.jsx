import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Sidebar from "./components/Sidebar/Sidebar";
import BottomNav from "./components/BottomNav/BottomNav";
import HomePage from "./pages/Home/HomePage";
import AboutPage from "./pages/About/AboutPage";
import ContactPage from "./pages/Contact/ContactPage";
import PortfolioPage from "./pages/Portfolio/PortfolioPage";
import ServicesPage from "./pages/Services/ServiceMain/ServicesPage";
import ServiceDetailPage from "./pages/Services/ServiceDetailPage";
import AadharPage from "./pages/Services/Aadhar/AadharPage";
import CspPage from "./pages/Services/Csp/CspPage";
import PanCenterPage from "./pages/Services/PanCenter/PanCenterPage";
import EmitraPage from "./pages/Services/Emitra/EmitraPage";
import UtilityServicePage from "./pages/Services/UtilityService/UtilityServicePage";

// Separate component that uses useLocation inside Router context
const AppContent = () => {
  const location = useLocation();
  const pathname = location.pathname;

  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const handleSidebarToggle = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const handleSidebarClose = () => {
    setIsSidebarOpen(false);
  };

  React.useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [pathname]);

  return (
    <div className="min-h-screen flex flex-col relative">
      {/* Global Backdrop - Covers entire application */}
      <AnimatePresence>
        {isSidebarOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/60 z-55"
            onClick={handleSidebarClose}
            style={{
              position: "fixed",
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              width: "100vw",
              height: "100vh",
              cursor: "pointer",
            }}
          />
        )}
      </AnimatePresence>

      <Header onSidebarToggle={handleSidebarToggle} />

      {/* Sidebar */}
      <Sidebar isOpen={isSidebarOpen} onClose={handleSidebarClose} />

      <main className="flex-1">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/services/:serviceId" element={<ServiceDetailPage />} />
          <Route path="/services/aadhar" element={<AadharPage />} />
          <Route path="/services/csp" element={<CspPage />} />
          <Route path="/services/pan" element={<PanCenterPage />} />
          <Route path="/services/emitra" element={<EmitraPage />} />
          <Route path="/services/utility" element={<UtilityServicePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/portfolio" element={<PortfolioPage />} />
        </Routes>
      </main>

      <Footer />

      {/* Bottom Navigation (Mobile Only) */}
      <BottomNav onSidebarToggle={handleSidebarToggle} />
    </div>
  );
};

const App = () => {
  return (
    <Router>
      <AppContent />
    </Router>
  );
};

export default App;
