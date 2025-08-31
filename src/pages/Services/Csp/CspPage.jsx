import React, { useState } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import {
  ArrowLeft,
  Download,
  CheckCircle,
  FileText,
  Users,
  Award,
  Phone,
  Mail,
  MapPin,
  Clock,
  Star,
  ArrowRight,
  Info,
  AlertCircle,
  CreditCard,
  Building,
  Calendar,
  Settings,
  HelpCircle,
  BookOpen,
  Zap,
  TrendingUp,
  DollarSign,
  Shield,
  Activity,
  Smartphone,
} from "lucide-react";

const CspPage = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState("overview");

  const tabs = [
    {
      id: "overview",
      label: "Overview",
      icon: Info,
      color: "from-blue-500 to-blue-600",
    },
    {
      id: "services",
      label: "Banking Services",
      icon: CreditCard,
      color: "from-green-500 to-green-600",
    },
    {
      id: "benefits",
      label: "Benefits & Commission",
      icon: Award,
      color: "from-purple-500 to-purple-600",
    },
    {
      id: "requirements",
      label: "Requirements",
      icon: CheckCircle,
      color: "from-orange-500 to-orange-600",
    },
    {
      id: "documents",
      label: "Documents",
      icon: FileText,
      color: "from-red-500 to-red-600",
    },
    {
      id: "process",
      label: "Application Process",
      icon: TrendingUp,
      color: "from-indigo-500 to-indigo-600",
    },
    {
      id: "training",
      label: "Training & Support",
      icon: BookOpen,
      color: "from-teal-500 to-teal-600",
    },
    {
      id: "faq",
      label: "FAQ",
      icon: HelpCircle,
      color: "from-pink-500 to-pink-600",
    },
  ];

  const bankingServices = [
    {
      name: "Cash Deposit & Withdrawal",
      icon: DollarSign,
      description: "Handle cash transactions for customers",
    },
    {
      name: "Balance Inquiry",
      icon: Activity,
      description: "Check account balances instantly",
    },
    {
      name: "Mini Statement",
      icon: FileText,
      description: "Generate account statements",
    },
    {
      name: "Aadhaar Enabled Services",
      icon: Shield,
      description: "Biometric authentication services",
    },
    {
      name: "DTH & Mobile Recharge",
      icon: Smartphone,
      description: "Utility bill payments and recharges",
    },
    {
      name: "Insurance Products",
      icon: Shield,
      description: "Sell insurance policies",
    },
  ];

  const commission = {
    "Cash Deposit": "₹5 per transaction",
    "Cash Withdrawal": "₹5 per transaction",
    "Balance Inquiry": "₹2 per transaction",
    "Mini Statement": "₹2 per transaction",
    "DTH Recharge": "₹10 per transaction",
    "Mobile Recharge": "₹5 per transaction",
  };

  const requirements = [
    "Valid PAN Card",
    "Aadhaar Card",
    "Bank Account",
    "Minimum Balance: ₹10,000",
    "Shop/Office Space (100 sq ft)",
    "Computer with Internet",
    "Biometric Device",
    "Printer",
  ];

  const documents = [
    "PAN Card Copy",
    "Aadhaar Card Copy",
    "Address Proof",
    "Bank Statement (6 months)",
    "Passport Size Photos (4)",
    "Shop/Office Rent Agreement",
    "Electricity Bill",
    "GST Registration (if applicable)",
  ];

  const process = [
    "Submit Application Form",
    "Document Verification",
    "Site Inspection",
    "Training Completion",
    "Device Installation",
    "Account Activation",
    "Start Operations",
  ];

  const faq = [
    {
      question: "What is the minimum investment required?",
      answer:
        "Minimum investment is ₹25,000 which includes setup costs, training, and initial working capital.",
    },
    {
      question: "How long does the approval process take?",
      answer:
        "The complete process takes 7-10 working days from application submission to operational setup.",
    },
    {
      question: "What are the operating hours?",
      answer:
        "You can operate from 8 AM to 8 PM as per your convenience, 7 days a week.",
    },
    {
      question: "Is there any monthly target?",
      answer:
        "No mandatory monthly targets, but we recommend minimum 100 transactions for optimal profitability.",
    },
  ];

  const downloadForm = () => {
    const formContent = `
CSP (BANK MITRA) APPLICATION FORM

Personal Information:
Name: _________________________
PAN Number: ___________________
Aadhaar Number: _______________
Mobile Number: ________________
Email: ________________________

Address:
Street: ________________________
City: _________________________
State: ________________________
Pincode: ______________________

Business Information:
Business Name: _________________
Business Type: _________________
Shop/Office Address: ___________
Space Available: _______________

Documents Attached:
□ PAN Card Copy
□ Aadhaar Card Copy
□ Address Proof
□ Bank Statement
□ Passport Size Photos
□ Shop/Office Agreement
□ Electricity Bill
□ GST Registration

Declaration:
I hereby declare that all information provided above is true and correct to the best of my knowledge.

Signature: ____________________
Date: ________________________

For Office Use:
Application Received: ___________
Documents Verified: ____________
Approved/Rejected: ____________
Remarks: _____________________
    `;

    const blob = new Blob([formContent], { type: "text/plain" });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "CSP_Bank_Mitra_Application_Form.txt";
    document.body.appendChild(a);
    a.click();
    window.URL.revokeObjectURL(url);
    document.body.removeChild(a);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-green-50 to-purple-50">
      {/* Header */}
      {/* <div className="bg-white shadow-lg border-b border-blue-200">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <button
              onClick={() => navigate("/services")}
              className="flex items-center space-x-2 text-gray-600 hover:text-blue-600 transition-colors"
            >
              <ArrowLeft className="w-5 h-5" />
              <span>Back to Services</span>
            </button>
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-blue-600 rounded-xl flex items-center justify-center shadow-lg">
                <Users className="w-7 h-7 text-white" />
              </div>
              <div>
                <h1 className="text-2xl font-bold text-gray-900">CSP</h1>
                <p className="text-sm text-blue-600 font-medium">
                  Bank Mitra Services
                </p>
              </div>
            </div>
          </div>
        </div>
      </div> */}

      {/* Hero Section */}
      <section className="relative pt-20 pb-16 bg-gradient-to-r from-blue-600 via-green-600 to-purple-600 text-white overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full -translate-y-48 translate-x-48"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-white/10 rounded-full translate-y-32 -translate-x-32"></div>
        <div className="container mx-auto px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="text-4xl lg:text-5xl font-bold mb-6 leading-tight"
              >
                Become a Bank Mitra
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="text-lg text-blue-100 mb-8 leading-relaxed"
              >
                Partner with major nationalized banks including State Bank of
                India, Bank of Baroda, Bank of India and Punjab National Bank.
                Provide essential banking services to your community.
              </motion.p>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="flex flex-col sm:flex-row gap-4"
              >
                <button
                  // onClick={downloadForm}
                  className="bg-white text-blue-600 px-6 py-3 rounded-xl font-semibold hover:bg-blue-50 transition-colors flex items-center justify-center space-x-2 shadow-lg"
                >
                  <Download className="w-5 h-5" />
                  <span>Download Application Form</span>
                </button>
                <button className="border-2 border-white text-white px-6 py-3 rounded-xl font-semibold hover:bg-white hover:text-blue-600 transition-colors flex items-center justify-center space-x-2">
                  <Phone className="w-5 h-5" />
                  <span>Contact Us</span>
                </button>
              </motion.div>
            </div>
            <div className="relative">
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="relative"
              >
                <img
                  src="/CSP-banner.png"
                  alt="CSP Bank Mitra banner"
                  className="w-full h-80 object-cover rounded-2xl shadow-2xl"
                />
                <div className="absolute -bottom-6 -right-6 bg-white rounded-2xl p-6 shadow-xl">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-blue-600">
                      Commission Based
                    </div>
                    <div className="text-sm text-gray-600">Instant Setup</div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content with Sidebar */}
      <section className="py-8">
        <div className="container mx-auto px-6">
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Left Sidebar Navigation */}
            <div className="lg:w-80 flex-shrink-0">
              <div className="bg-white rounded-2xl shadow-xl border border-blue-200 p-6 sticky top-8">
                <h3 className="text-xl font-bold text-gray-900 mb-6 border-b border-blue-200 pb-4">
                  CSP Services
                </h3>
                <div className="space-y-3">
                  {tabs.map((tab) => (
                    <button
                      key={tab.id}
                      onClick={() => setActiveTab(tab.id)}
                      className={`w-full flex items-center space-x-3 py-4 px-4 rounded-xl transition-all duration-300 text-left group ${
                        activeTab === tab.id
                          ? `bg-gradient-to-r ${tab.color} text-white shadow-lg transform scale-105`
                          : "text-gray-600 hover:bg-blue-50 hover:text-blue-700 hover:shadow-md"
                      }`}
                    >
                      <div
                        className={`p-2 rounded-lg ${
                          activeTab === tab.id
                            ? "bg-white/20"
                            : "bg-blue-100 group-hover:bg-blue-200"
                        }`}
                      >
                        <tab.icon
                          className={`w-5 h-5 ${
                            activeTab === tab.id
                              ? "text-white"
                              : "text-blue-600"
                          }`}
                        />
                      </div>
                      <span className="font-medium">{tab.label}</span>
                    </button>
                  ))}
                </div>

                {/* Contact Section */}
                <div className="mt-8 p-6 bg-gradient-to-r from-blue-50 to-green-50 rounded-xl border border-blue-200">
                  <div className="flex items-center space-x-3 mb-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-green-500 rounded-full flex items-center justify-center">
                      <Phone className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900">
                        Get Expert Help
                      </h4>
                      <p className="text-sm text-gray-600">
                        24/7 Support Available
                      </p>
                    </div>
                  </div>
                  <div className="space-y-3 text-sm text-gray-700">
                    <div className="flex items-center space-x-3">
                      <Phone className="w-4 h-4 text-blue-500" />
                      <span>+91 {import.meta.env.VITE_MOBILE_NO_1}</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Mail className="w-4 h-4 text-blue-500" />
                      <span>{import.meta.env.VITE_HELP_SPPORT_EMAIL_ID}</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Clock className="w-4 h-4 text-blue-500" />
                      <span>Mon-Sat: 9AM-6PM</span>
                    </div>
                  </div>
                  <button className="w-full mt-4 bg-gradient-to-r from-blue-500 to-green-500 text-white py-3 px-4 rounded-xl font-semibold hover:from-blue-600 hover:to-green-600 transition-all duration-300 flex items-center justify-center space-x-2 shadow-lg">
                    <span>Make Appointment</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>

                {/* Download Section */}
                <div className="mt-4">
                  <button
                    // onClick={downloadForm}
                    className="w-full bg-gradient-to-r from-purple-500 to-pink-500 text-white py-4 px-4 rounded-xl font-semibold hover:from-purple-600 hover:to-pink-600 transition-all duration-300 flex items-center justify-center space-x-2 shadow-lg"
                  >
                    <Download className="w-5 h-5" />
                    <span>Download Application Form</span>
                  </button>
                </div>
              </div>
            </div>

            {/* Right Content Area */}
            <div className="flex-1">
              {/* Overview Tab */}
              {activeTab === "overview" && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                  className="space-y-8"
                >
                  <div className="bg-white rounded-2xl p-8 shadow-xl border border-blue-200">
                    <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center space-x-3">
                      <Users className="w-8 h-8 text-blue-600" />
                      <span>Service Overview</span>
                    </h2>
                    <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                      CSP (Customer Service Point) allows you to become a Bank
                      Mitra and provide essential banking services including
                      cash deposits, withdrawals, balance inquiries, and more.
                      Partner with major nationalized banks to serve your local
                      community.
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                      <div className="bg-gradient-to-r from-blue-50 to-green-50 rounded-xl p-6 border border-blue-200">
                        <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center space-x-2">
                          <CreditCard className="w-6 h-6 text-blue-600" />
                          <span>What We Offer</span>
                        </h3>
                        <div className="space-y-3">
                          {bankingServices.map((service, index) => (
                            <div
                              key={index}
                              className="flex items-center space-x-3"
                            >
                              <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                              <div>
                                <span className="text-gray-700 font-medium">
                                  {service.name}
                                </span>
                                <p className="text-sm text-gray-500">
                                  {service.description}
                                </p>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                      <div className="bg-gradient-to-r from-green-50 to-purple-50 rounded-xl p-6 border border-green-200">
                        <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center space-x-2">
                          <Award className="w-6 h-6 text-green-600" />
                          <span>Key Benefits</span>
                        </h3>
                        <div className="space-y-3">
                          {[
                            "High Commission",
                            "Trusted Brand",
                            "Wide Network",
                            "24/7 Support",
                          ].map((benefit, index) => (
                            <div
                              key={index}
                              className="flex items-center space-x-3"
                            >
                              <Star className="w-5 h-5 text-green-500 flex-shrink-0" />
                              <span className="text-gray-700">{benefit}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>

                    <div className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-xl p-6 border border-purple-200">
                      <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center space-x-2">
                        <BookOpen className="w-6 h-6 text-purple-600" />
                        <span>Training & Support</span>
                      </h3>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                          <h4 className="font-semibold text-gray-800 mb-2">
                            Training Program
                          </h4>
                          <p className="text-gray-700">
                            3-day comprehensive training program covering
                            banking operations, security protocols, and customer
                            service.
                          </p>
                        </div>
                        <div>
                          <h4 className="font-semibold text-gray-800 mb-2">
                            Support
                          </h4>
                          <p className="text-gray-700">
                            24/7 technical support, dedicated relationship
                            manager, and regular training updates.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              )}

              {/* Services Tab */}
              {activeTab === "services" && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                  className="space-y-8"
                >
                  <div className="bg-white rounded-2xl p-8 shadow-xl border border-blue-200">
                    <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center space-x-3">
                      <CreditCard className="w-8 h-8 text-blue-600" />
                      <span>Banking Services</span>
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      {bankingServices.map((service, index) => (
                        <motion.div
                          key={index}
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.6, delay: index * 0.1 }}
                          className="bg-gradient-to-r from-blue-50 to-green-50 rounded-xl p-6 border border-blue-200 hover:shadow-lg transition-all duration-300 group"
                        >
                          <div className="flex items-center space-x-4">
                            <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-green-500 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                              <service.icon className="w-6 h-6 text-white" />
                            </div>
                            <div>
                              <h3 className="text-lg font-semibold text-gray-900 mb-1">
                                {service.name}
                              </h3>
                              <p className="text-gray-600">
                                {service.description}
                              </p>
                            </div>
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </motion.div>
              )}

              {/* Benefits Tab */}
              {activeTab === "benefits" && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                  className="space-y-8"
                >
                  <div className="bg-white rounded-2xl p-8 shadow-xl border border-blue-200">
                    <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center space-x-3">
                      <Award className="w-8 h-8 text-purple-600" />
                      <span>Benefits & Commission Structure</span>
                    </h2>

                    <div className="mb-8">
                      <h3 className="text-xl font-semibold text-gray-900 mb-6 flex items-center space-x-2">
                        <DollarSign className="w-6 h-6 text-blue-600" />
                        <span>Commission Structure</span>
                      </h3>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {Object.entries(commission).map(
                          ([service, commission], index) => (
                            <motion.div
                              key={service}
                              initial={{ opacity: 0, x: -20 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ duration: 0.6, delay: index * 0.1 }}
                              className="bg-gradient-to-r from-blue-50 to-green-50 rounded-xl p-4 border border-blue-200 hover:shadow-lg transition-all duration-300"
                            >
                              <div className="font-semibold text-gray-800 mb-1">
                                {service}
                              </div>
                              <div className="text-lg font-bold text-green-600">
                                {commission}
                              </div>
                            </motion.div>
                          )
                        )}
                      </div>
                    </div>

                    <div className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-xl p-6 border border-purple-200">
                      <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center space-x-2">
                        <Star className="w-6 h-6 text-purple-600" />
                        <span>Why Choose CSP?</span>
                      </h3>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {[
                          "High Commission",
                          "Trusted Brand",
                          "Wide Network",
                          "24/7 Support",
                        ].map((benefit, index) => (
                          <div
                            key={index}
                            className="flex items-center space-x-3"
                          >
                            <div className="w-3 h-3 bg-purple-500 rounded-full"></div>
                            <span className="text-gray-700">{benefit}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>
              )}

              {/* Requirements Tab */}
              {activeTab === "requirements" && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                  className="space-y-8"
                >
                  <div className="bg-white rounded-2xl p-8 shadow-xl border border-blue-200">
                    <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center space-x-3">
                      <CheckCircle className="w-8 h-8 text-orange-600" />
                      <span>Requirements & Eligibility</span>
                    </h2>

                    <div className="mb-8">
                      <h3 className="text-xl font-semibold text-gray-900 mb-6 flex items-center space-x-2">
                        <Settings className="w-6 h-6 text-blue-600" />
                        <span>Basic Requirements</span>
                      </h3>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {requirements.map((requirement, index) => (
                          <motion.div
                            key={index}
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                            className="flex items-center space-x-3 bg-gradient-to-r from-orange-50 to-yellow-50 rounded-xl p-4 border border-orange-200"
                          >
                            <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                            <span className="text-gray-700">{requirement}</span>
                          </motion.div>
                        ))}
                      </div>
                    </div>

                    <div className="bg-gradient-to-r from-yellow-50 to-orange-50 rounded-xl p-6 border border-yellow-200">
                      <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center space-x-2">
                        <AlertCircle className="w-6 h-6 text-orange-600" />
                        <span>Important Notes</span>
                      </h3>
                      <ul className="space-y-2 text-gray-700">
                        <li>• All documents must be valid and not expired</li>
                        <li>
                          • Minimum balance must be maintained in the bank
                          account
                        </li>
                        <li>
                          • Shop/office space must be easily accessible to
                          customers
                        </li>
                        <li>
                          • Internet connection must be stable and reliable
                        </li>
                        <li>
                          • Training completion is mandatory before operations
                        </li>
                      </ul>
                    </div>
                  </div>
                </motion.div>
              )}

              {/* Documents Tab */}
              {activeTab === "documents" && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                  className="space-y-8"
                >
                  <div className="bg-white rounded-2xl p-8 shadow-xl border border-blue-200">
                    <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center space-x-3">
                      <FileText className="w-8 h-8 text-red-600" />
                      <span>Required Documents</span>
                    </h2>

                    <div className="mb-8">
                      <h3 className="text-xl font-semibold text-gray-900 mb-6 flex items-center space-x-2">
                        <FileText className="w-6 h-6 text-blue-600" />
                        <span>Document Checklist</span>
                      </h3>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {documents.map((document, index) => (
                          <motion.div
                            key={index}
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                            className="flex items-center space-x-3 bg-gradient-to-r from-red-50 to-pink-50 rounded-xl p-4 border border-red-200"
                          >
                            <FileText className="w-5 h-5 text-red-500 flex-shrink-0" />
                            <span className="text-gray-700">{document}</span>
                          </motion.div>
                        ))}
                      </div>
                    </div>

                    <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl p-6 border border-blue-200">
                      <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center space-x-2">
                        <Info className="w-6 h-6 text-blue-600" />
                        <span>Document Guidelines</span>
                      </h3>
                      <ul className="space-y-2 text-gray-700">
                        <li>• All copies must be clear and legible</li>
                        <li>• PAN and Aadhaar must be linked</li>
                        <li>• Address proof should match current residence</li>
                        <li>
                          • Bank statement should show regular transactions
                        </li>
                        <li>
                          • Photos should be recent (not older than 6 months)
                        </li>
                      </ul>
                    </div>
                  </div>
                </motion.div>
              )}

              {/* Process Tab */}
              {activeTab === "process" && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                  className="space-y-8"
                >
                  <div className="bg-white rounded-2xl p-8 shadow-xl border border-blue-200">
                    <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center space-x-3">
                      <TrendingUp className="w-8 h-8 text-indigo-600" />
                      <span>Application Process</span>
                    </h2>

                    <div className="mb-8">
                      <h3 className="text-xl font-semibold text-gray-900 mb-6 flex items-center space-x-2">
                        <Calendar className="w-6 h-6 text-blue-600" />
                        <span>Step-by-Step Process</span>
                      </h3>
                      <div className="space-y-4">
                        {process.map((step, index) => (
                          <motion.div
                            key={index}
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                            className="flex items-start space-x-4"
                          >
                            <div className="w-10 h-10 bg-gradient-to-r from-indigo-500 to-purple-500 text-white rounded-full flex items-center justify-center font-bold text-sm flex-shrink-0 shadow-lg">
                              {index + 1}
                            </div>
                            <div className="flex-1 bg-gradient-to-r from-indigo-50 to-purple-50 rounded-xl p-4 border border-indigo-200">
                              <span className="text-gray-700 font-medium">
                                {step}
                              </span>
                            </div>
                          </motion.div>
                        ))}
                      </div>
                    </div>

                    <div className="bg-gradient-to-r from-blue-50 to-green-50 rounded-xl p-6 border border-blue-200">
                      <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center space-x-2">
                        <Clock className="w-6 h-6 text-blue-600" />
                        <span>Timeline</span>
                      </h3>
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center">
                        <div className="bg-white rounded-xl p-4 border border-blue-200">
                          <div className="text-2xl font-bold text-blue-600">
                            1-3 Days
                          </div>
                          <div className="text-gray-600">
                            Document Verification
                          </div>
                        </div>
                        <div className="bg-white rounded-xl p-4 border border-blue-200">
                          <div className="text-2xl font-bold text-blue-600">
                            5-10 Days
                          </div>
                          <div className="text-gray-600">Approval Process</div>
                        </div>
                        <div className="bg-white rounded-xl p-4 border border-blue-200">
                          <div className="text-2xl font-bold text-blue-600">
                            2-3 Days
                          </div>
                          <div className="text-gray-600">Training & Setup</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              )}

              {/* Training Tab */}
              {activeTab === "training" && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                  className="space-y-8"
                >
                  <div className="bg-white rounded-2xl p-8 shadow-xl border border-blue-200">
                    <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center space-x-3">
                      <BookOpen className="w-8 h-8 text-teal-600" />
                      <span>Training & Support</span>
                    </h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                      <div className="bg-gradient-to-r from-teal-50 to-cyan-50 rounded-xl p-6 border border-teal-200">
                        <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center space-x-2">
                          <BookOpen className="w-6 h-6 text-teal-600" />
                          <span>Training Program</span>
                        </h3>
                        <div className="space-y-4">
                          <div className="bg-white rounded-lg p-4 border border-teal-200">
                            <h4 className="font-semibold text-gray-800 mb-2">
                              Duration
                            </h4>
                            <p className="text-gray-700">
                              3-day comprehensive training program
                            </p>
                          </div>
                          <div className="bg-white rounded-lg p-4 border border-teal-200">
                            <h4 className="font-semibold text-gray-800 mb-2">
                              Coverage
                            </h4>
                            <p className="text-gray-700">
                              Banking operations, security protocols, and
                              customer service
                            </p>
                          </div>
                          <div className="bg-white rounded-lg p-4 border border-teal-200">
                            <h4 className="font-semibold text-gray-800 mb-2">
                              Certification
                            </h4>
                            <p className="text-gray-700">
                              Official bank certification upon completion
                            </p>
                          </div>
                        </div>
                      </div>

                      <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl p-6 border border-blue-200">
                        <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center space-x-2">
                          <Zap className="w-6 h-6 text-blue-600" />
                          <span>Support Services</span>
                        </h3>
                        <div className="space-y-4">
                          <div className="bg-white rounded-lg p-4 border border-blue-200">
                            <h4 className="font-semibold text-gray-800 mb-2">
                              Technical Support
                            </h4>
                            <p className="text-gray-700">
                              24/7 technical support and assistance
                            </p>
                          </div>
                          <div className="bg-white rounded-lg p-4 border border-blue-200">
                            <h4 className="font-semibold text-gray-800 mb-2">
                              Updates
                            </h4>
                            <p className="text-gray-700">
                              Regular software and protocol updates
                            </p>
                          </div>
                          <div className="bg-white rounded-lg p-4 border border-blue-200">
                            <h4 className="font-semibold text-gray-800 mb-2">
                              Relationship Manager
                            </h4>
                            <p className="text-gray-700">
                              Dedicated relationship manager for ongoing support
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              )}

              {/* FAQ Tab */}
              {activeTab === "faq" && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                  className="space-y-8"
                >
                  <div className="bg-white rounded-2xl p-8 shadow-xl border border-blue-200">
                    <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center space-x-3">
                      <HelpCircle className="w-8 h-8 text-pink-600" />
                      <span>Frequently Asked Questions</span>
                    </h2>

                    <div className="space-y-6">
                      {faq.map((faq, index) => (
                        <motion.div
                          key={index}
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.6, delay: index * 0.1 }}
                          className="bg-gradient-to-r from-pink-50 to-purple-50 rounded-xl p-6 border border-pink-200 hover:shadow-lg transition-all duration-300"
                        >
                          <h3 className="text-lg font-semibold text-gray-900 mb-3 flex items-center space-x-2">
                            <HelpCircle className="w-5 h-5 text-pink-600" />
                            <span>{faq.question}</span>
                          </h3>
                          <p className="text-gray-700 leading-relaxed">
                            {faq.answer}
                          </p>
                        </motion.div>
                      ))}
                    </div>

                    <div className="mt-8 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl p-6 border border-blue-200">
                      <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center space-x-2">
                        <Phone className="w-6 h-6 text-blue-600" />
                        <span>Still Have Questions?</span>
                      </h3>
                      <p className="text-gray-700 mb-4">
                        Our team is here to help you with any additional
                        questions or concerns.
                      </p>
                      <div className="flex flex-col sm:flex-row gap-4">
                        <button className="bg-gradient-to-r from-blue-500 to-green-500 text-white px-6 py-3 rounded-xl font-semibold hover:from-blue-600 hover:to-green-600 transition-all duration-300 flex items-center justify-center space-x-2 shadow-lg">
                          <Phone className="w-5 h-5" />
                          <span>Call Us</span>
                        </button>
                        <button className="border-2 border-blue-600 text-blue-600 px-6 py-3 rounded-xl font-semibold hover:bg-blue-600 hover:text-white transition-all duration-300 flex items-center justify-center space-x-2">
                          <Mail className="w-5 h-5" />
                          <span>Email Us</span>
                        </button>
                      </div>
                    </div>
                  </div>
                </motion.div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-blue-600 via-green-600 to-purple-600 relative overflow-hidden">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="container mx-auto px-6 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Become a Bank Mitra?
            </h2>
            <p className="text-lg text-blue-100 mb-8 max-w-2xl mx-auto">
              Join our network of successful CSP operators and start earning
              while serving your community.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                // onClick={downloadForm}
                className="bg-white text-blue-600 px-8 py-4 rounded-full font-semibold text-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center space-x-2"
              >
                <Download className="w-5 h-5" />
                <span>Download Application Form</span>
              </button>
              <button className="border-2 border-white text-white px-8 py-4 rounded-xl font-semibold text-lg hover:bg-white hover:text-blue-600 transition-all duration-300 flex items-center justify-center space-x-2">
                <Phone className="w-5 h-5" />
                <span>Speak to Our Team</span>
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default CspPage;
