import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import {
  ArrowLeft,
  Download,
  CheckCircle,
  FileText,
  Users,
  Shield,
  TrendingUp,
  Award,
  Phone,
  Mail,
  MapPin,
  Clock,
  Star,
  ArrowRight,
  ExternalLink,
  Info,
  AlertCircle,
  Zap,
} from "lucide-react";

const ServiceDetailPage = () => {
  const { serviceId } = useParams();
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState("overview");

  // Services data with detailed information
  const services = [
    {
      id: 1,
      title: "CSP",
      subtitle: "Bank Mitra Services",
      description:
        "Become Bank Mitra for State Bank of India, Bank of Baroda, Bank of India and Punjab National Bank.",
      longDescription:
        "CSP (Customer Service Point) allows you to become a Bank Mitra and provide essential banking services including cash deposits, withdrawals, balance inquiries, and more.",
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
      color: "from-blue-500 to-blue-600",
      bgColor: "bg-blue-50",
      iconColor: "text-blue-600",
      borderColor: "border-blue-200",
      price: "Commission Based",
      duration: "Instant Setup",
      benefits: [
        "High Commission",
        "Trusted Brand",
        "Wide Network",
        "24/7 Support",
      ],
      commission: {
        "Cash Deposit": "₹5 per transaction",
        "Cash Withdrawal": "₹5 per transaction",
        "Balance Inquiry": "₹2 per transaction",
        "Mini Statement": "₹2 per transaction",
        "DTH Recharge": "₹10 per transaction",
        "Mobile Recharge": "₹5 per transaction",
      },
      requirements: [
        "Valid PAN Card",
        "Aadhaar Card",
        "Bank Account",
        "Minimum Balance: ₹10,000",
        "Shop/Office Space (100 sq ft)",
        "Computer with Internet",
        "Biometric Device",
        "Printer",
      ],
      documents: [
        "PAN Card Copy",
        "Aadhaar Card Copy",
        "Address Proof",
        "Bank Statement (6 months)",
        "Passport Size Photos (4)",
        "Shop/Office Rent Agreement",
        "Electricity Bill",
        "GST Registration (if applicable)",
      ],
      process: [
        "Submit Application Form",
        "Document Verification",
        "Site Inspection",
        "Training Completion",
        "Device Installation",
        "Account Activation",
        "Start Operations",
      ],
      training:
        "3-day comprehensive training program covering banking operations, security protocols, and customer service.",
      support:
        "24/7 technical support, dedicated relationship manager, and regular training updates.",
      faq: [
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
      ],
    },
    {
      id: 2,
      title: "Aadhaar Centre",
      subtitle: "UIDAI Services",
      description:
        "Aadhaar Seva Kendra project, UIDAI plans to set up 114 Aadhaar Seva Kendra across 53 cities in India.",
      longDescription:
        "Official Aadhaar Centre providing all UIDAI services including new enrollment, updates, corrections, and verification.",
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
      color: "from-green-500 to-green-600",
      bgColor: "bg-green-50",
      iconColor: "text-green-600",
      borderColor: "border-green-200",
      price: "Government Rates",
      duration: "Same Day Service",
      benefits: [
        "Official Authorization",
        "Government Rates",
        "Wide Coverage",
        "Instant Services",
      ],
      commission: {
        "New Enrollment": "₹50 per enrollment",
        "Biometric Update": "₹100 per update",
        "Address Update": "₹50 per update",
        "Mobile Update": "₹50 per update",
        "Aadhaar Reprint": "₹50 per print",
        Verification: "₹20 per verification",
      },
      requirements: [
        "Valid PAN Card",
        "Aadhaar Card",
        "Bank Account",
        "Minimum Balance: ₹15,000",
        "Shop/Office Space (150 sq ft)",
        "Computer with Internet",
        "Biometric Device",
        "Printer",
        "Camera",
        "Fingerprint Scanner",
      ],
      documents: [
        "PAN Card Copy",
        "Aadhaar Card Copy",
        "Address Proof",
        "Bank Statement (6 months)",
        "Passport Size Photos (6)",
        "Shop/Office Rent Agreement",
        "Electricity Bill",
        "GST Registration",
        "UIDAI Authorization Letter",
      ],
      process: [
        "Submit Application Form",
        "Document Verification",
        "UIDAI Approval",
        "Site Inspection",
        "Training Completion",
        "Device Installation",
        "Center Activation",
        "Start Operations",
      ],
      training:
        "5-day intensive training program covering UIDAI protocols, biometric operations, and security measures.",
      support:
        "Dedicated UIDAI support team, regular updates, and compliance assistance.",
      faq: [
        {
          question: "What is the investment required?",
          answer:
            "Total investment is ₹35,000 including UIDAI fees, equipment, and setup costs.",
        },
        {
          question: "How long does UIDAI approval take?",
          answer:
            "UIDAI approval typically takes 15-20 working days after document submission.",
        },
        {
          question: "What are the operating hours?",
          answer:
            "Standard operating hours are 9 AM to 6 PM, Monday to Saturday.",
        },
        {
          question: "Is training mandatory?",
          answer:
            "Yes, UIDAI training is mandatory and must be completed before center activation.",
        },
      ],
    },
    {
      id: 3,
      title: "PAN CENTER",
      subtitle: "UTIITSL Services",
      description:
        "UTI Infrastructure Technology And Services Limited (UTIITSL) is a Government Company under section 2(45) of the Companies Act 2013",
      longDescription:
        "Authorized PAN Center providing PAN card services including new applications, corrections, reprints, and updates.",
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
      color: "from-purple-500 to-purple-600",
      bgColor: "bg-purple-50",
      iconColor: "text-purple-600",
      borderColor: "border-purple-200",
      price: "Government Rates",
      duration: "7-15 Days",
      benefits: [
        "Official Partner",
        "Fast Processing",
        "Secure Service",
        "Nationwide Network",
      ],
      commission: {
        "New PAN Application": "₹107 per application",
        "PAN Correction": "₹107 per correction",
        "PAN Reprint": "₹107 per reprint",
        "Aadhaar Linking": "₹50 per linking",
        "Status Tracking": "₹20 per tracking",
        "Document Verification": "₹30 per verification",
      },
      requirements: [
        "Valid PAN Card",
        "Aadhaar Card",
        "Bank Account",
        "Minimum Balance: ₹20,000",
        "Shop/Office Space (120 sq ft)",
        "Computer with Internet",
        "Scanner",
        "Printer",
        "Digital Camera",
      ],
      documents: [
        "PAN Card Copy",
        "Aadhaar Card Copy",
        "Address Proof",
        "Bank Statement (6 months)",
        "Passport Size Photos (4)",
        "Shop/Office Rent Agreement",
        "Electricity Bill",
        "GST Registration",
        "UTIITSL Partnership Agreement",
      ],
      process: [
        "Submit Application Form",
        "Document Verification",
        "UTIITSL Approval",
        "Partnership Agreement",
        "Training Completion",
        "Software Installation",
        "Center Activation",
        "Start Operations",
      ],
      training:
        "3-day training program covering PAN application process, document verification, and UTIITSL software.",
      support:
        "UTIITSL technical support, regular updates, and partnership benefits.",
      faq: [
        {
          question: "What is the investment required?",
          answer:
            "Total investment is ₹30,000 including UTIITSL partnership fees and equipment.",
        },
        {
          question: "How long does approval take?",
          answer:
            "UTIITSL approval takes 10-15 working days after document submission.",
        },
        {
          question: "What are the operating hours?",
          answer:
            "Flexible operating hours from 9 AM to 7 PM, Monday to Saturday.",
        },
        {
          question: "Is there any monthly target?",
          answer:
            "No mandatory targets, but we recommend minimum 50 applications per month.",
        },
      ],
    },
    {
      id: 4,
      title: "E Mitra",
      subtitle: "Government Services",
      description:
        "E-mitra service has been launched by government of Rajasthan. Provide government services to citizens at their doorstep.",
      longDescription:
        "E-Mitra is Rajasthan's comprehensive e-governance initiative that brings government services closer to citizens.",
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
      color: "from-orange-500 to-orange-600",
      bgColor: "bg-orange-50",
      iconColor: "text-orange-600",
      borderColor: "border-orange-200",
      price: "Government Rates",
      duration: "Same Day to 7 Days",
      benefits: [
        "Government Backed",
        "Wide Service Range",
        "Trusted Platform",
        "Citizen Friendly",
      ],
      commission: {
        "Birth Certificate": "₹50 per certificate",
        "Death Certificate": "₹50 per certificate",
        "Income Certificate": "₹100 per certificate",
        "Caste Certificate": "₹100 per certificate",
        "Property Documents": "₹150 per document",
        "Government Payments": "₹20 per transaction",
        "Utility Bills": "₹10 per bill",
      },
      requirements: [
        "Valid PAN Card",
        "Aadhaar Card",
        "Bank Account",
        "Minimum Balance: ₹25,000",
        "Shop/Office Space (100 sq ft)",
        "Computer with Internet",
        "Printer",
        "Scanner",
        "Biometric Device",
      ],
      documents: [
        "PAN Card Copy",
        "Aadhaar Card Copy",
        "Address Proof",
        "Bank Statement (6 months)",
        "Passport Size Photos (4)",
        "Shop/Office Rent Agreement",
        "Electricity Bill",
        "GST Registration",
        "E-Mitra Authorization",
      ],
      process: [
        "Submit Application Form",
        "Document Verification",
        "E-Mitra Approval",
        "Training Completion",
        "Software Installation",
        "Center Activation",
        "Start Operations",
      ],
      training:
        "4-day training program covering e-governance services, document processing, and citizen services.",
      support:
        "E-Mitra support team, regular updates, and government liaison assistance.",
      faq: [
        {
          question: "What is the investment required?",
          answer:
            "Total investment is ₹40,000 including E-Mitra fees, equipment, and setup costs.",
        },
        {
          question: "How long does approval take?",
          answer:
            "E-Mitra approval takes 20-25 working days after document submission.",
        },
        {
          question: "What are the operating hours?",
          answer:
            "Standard operating hours are 8 AM to 8 PM, Monday to Saturday.",
        },
        {
          question: "Is training mandatory?",
          answer:
            "Yes, E-Mitra training is mandatory and must be completed before center activation.",
        },
      ],
    },
    {
      id: 5,
      title: "Utility Service",
      subtitle: "Bill Payment & Recharge",
      description:
        "Bill Payment & Recharge. Recharge your prepaid mobile, DTH account, Pay your electricity, postpaid, landline, broadband, gas, water bills.",
      longDescription:
        "Comprehensive utility services including mobile recharge, DTH recharge, bill payments for electricity, gas, water, and more.",
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
      color: "from-red-500 to-red-600",
      bgColor: "bg-red-50",
      iconColor: "text-red-600",
      borderColor: "border-red-200",
      price: "No Extra Charges",
      duration: "Instant",
      benefits: [
        "Instant Service",
        "No Hidden Charges",
        "24/7 Availability",
        "Cashback Offers",
      ],
      commission: {
        "Mobile Recharge": "₹2-5 per recharge",
        "DTH Recharge": "₹5-10 per recharge",
        "Electricity Bills": "₹10-20 per bill",
        "Gas Bills": "₹10-15 per bill",
        "Water Bills": "₹10-15 per bill",
        "Broadband Bills": "₹15-25 per bill",
      },
      requirements: [
        "Valid PAN Card",
        "Aadhaar Card",
        "Bank Account",
        "Minimum Balance: ₹15,000",
        "Shop/Office Space (80 sq ft)",
        "Computer with Internet",
        "Printer",
        "Payment Device",
      ],
      documents: [
        "PAN Card Copy",
        "Aadhaar Card Copy",
        "Address Proof",
        "Bank Statement (6 months)",
        "Passport Size Photos (4)",
        "Shop/Office Rent Agreement",
        "Electricity Bill",
        "GST Registration",
        "Payment Gateway Agreement",
      ],
      process: [
        "Submit Application Form",
        "Document Verification",
        "Payment Gateway Setup",
        "Training Completion",
        "Software Installation",
        "Account Activation",
        "Start Operations",
      ],
      training:
        "2-day training program covering payment systems, customer service, and transaction management.",
      support:
        "24/7 technical support, payment gateway assistance, and customer service training.",
      faq: [
        {
          question: "What is the investment required?",
          answer:
            "Total investment is ₹20,000 including setup costs, training, and working capital.",
        },
        {
          question: "How long does setup take?",
          answer:
            "Complete setup takes 5-7 working days from application submission.",
        },
        {
          question: "What are the operating hours?",
          answer:
            "You can operate 24/7 as per your convenience and customer demand.",
        },
        {
          question: "Is there any monthly target?",
          answer:
            "No mandatory targets, but we recommend minimum 200 transactions per month.",
        },
      ],
    },
  ];

  const currentService = services.find(
    (service) => service.id === parseInt(serviceId)
  );

  useEffect(() => {
    if (!currentService) {
      navigate("/services");
    }
  }, [currentService, navigate]);

  if (!currentService) {
    return null;
  }

  const tabs = [
    { id: "overview", label: "Overview", icon: Info },
    { id: "benefits", label: "Benefits & Commission", icon: Award },
    { id: "requirements", label: "Requirements", icon: CheckCircle },
    { id: "documents", label: "Documents", icon: FileText },
    { id: "process", label: "Process", icon: TrendingUp },
    { id: "faq", label: "FAQ", icon: AlertCircle },
  ];

  const downloadForm = () => {
    const formContent = `
APPLICATION FORM FOR ${currentService.title.toUpperCase()} SERVICES

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
    a.download = `${currentService.title}_Application_Form.txt`;
    document.body.appendChild(a);
    a.click();
    window.URL.revokeObjectURL(url);
    document.body.removeChild(a);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow-sm border-b">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <button
              onClick={() => navigate("/services")}
              className="flex items-center space-x-2 text-gray-600 hover:text-gray-900 transition-colors"
            >
              <ArrowLeft className="w-5 h-5" />
              <span>Back to Services</span>
            </button>
            <div className="flex items-center space-x-3">
              <div
                className={`w-10 h-10 bg-gradient-to-r ${currentService.color} rounded-lg flex items-center justify-center`}
              >
                <img
                  src={currentService.logo}
                  alt={`${currentService.title} logo`}
                  className="w-6 h-6 object-contain"
                />
              </div>
              <div>
                <h1 className="text-xl font-bold text-gray-900">
                  {currentService.title}
                </h1>
                <p className="text-sm text-gray-600">
                  {currentService.subtitle}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <section className="relative py-16 bg-gradient-to-r from-gray-900 to-gray-800 text-white">
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="container mx-auto px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="text-4xl lg:text-5xl font-bold mb-6 leading-tight"
              >
                {currentService.title}
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="text-lg text-gray-300 mb-8 leading-relaxed"
              >
                {currentService.longDescription}
              </motion.p>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="flex flex-col sm:flex-row gap-4"
              >
                <button
                  onClick={downloadForm}
                  className="bg-white text-gray-900 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors flex items-center justify-center space-x-2"
                >
                  <Download className="w-5 h-5" />
                  <span>Download Application Form</span>
                </button>
                <button className="border-2 border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-gray-900 transition-colors flex items-center justify-center space-x-2">
                  <Phone className="w-5 h-5" />
                  <span>Contact Us</span>
                </button>
              </motion.div>
            </div>
            <div className="relative">
              <motion.img
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                src={currentService.bannerImage}
                alt={`${currentService.title} banner`}
                className="w-full h-80 object-cover rounded-2xl shadow-2xl"
              />
              <div className="absolute -bottom-6 -right-6 bg-white rounded-2xl p-6 shadow-xl">
                <div className="text-center">
                  <div className="text-2xl font-bold text-gray-900">
                    {currentService.price}
                  </div>
                  <div className="text-sm text-gray-600">
                    Setup Time: {currentService.duration}
                  </div>
                </div>
              </div>
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
              <div className="bg-white rounded-2xl shadow-lg border border-gray-200 p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4 border-b pb-3">
                  {currentService.title} Services
                </h3>
                <div className="space-y-2">
                  {tabs.map((tab) => (
                    <button
                      key={tab.id}
                      onClick={() => setActiveTab(tab.id)}
                      className={`w-full flex items-center space-x-3 py-3 px-4 rounded-lg transition-all duration-200 text-left ${
                        activeTab === tab.id
                          ? `bg-${
                              currentService.iconColor.split("-")[1]
                            }-50 border-l-4 border-${
                              currentService.iconColor.split("-")[1]
                            }-500 text-${
                              currentService.iconColor.split("-")[1]
                            }-700`
                          : "text-gray-600 hover:bg-gray-50 hover:text-gray-800"
                      }`}
                    >
                      <tab.icon
                        className={`w-5 h-5 ${
                          activeTab === tab.id
                            ? `text-${
                                currentService.iconColor.split("-")[1]
                              }-600`
                            : "text-gray-400"
                        }`}
                      />
                      <span className="font-medium">{tab.label}</span>
                    </button>
                  ))}
                </div>

                {/* Contact Section */}
                <div className="mt-8 p-4 bg-gray-50 rounded-xl border border-gray-200">
                  <div className="flex items-center space-x-3 mb-3">
                    <div className="w-10 h-10 bg-orange-500 rounded-full flex items-center justify-center">
                      <Phone className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">
                        Get Expert Help
                      </h4>
                      <p className="text-sm text-gray-600">
                        Consult with our team
                      </p>
                    </div>
                  </div>
                  <div className="space-y-2 text-sm text-gray-700">
                    <div className="flex items-center space-x-2">
                      <Phone className="w-4 h-4 text-orange-500" />
                      <span>+91 9587892989</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Mail className="w-4 h-4 text-orange-500" />
                      <span>emitra_support@drkjodhpur.com</span>
                    </div>
                  </div>
                  <button className="w-full mt-3 bg-orange-500 text-white py-2 px-4 rounded-lg font-medium hover:bg-orange-600 transition-colors flex items-center justify-center space-x-2">
                    <span>Make Appointment</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>

                {/* Download Section */}
                <div className="mt-4">
                  <button
                    onClick={downloadForm}
                    className="w-full bg-blue-600 text-white py-3 px-4 rounded-lg font-medium hover:bg-blue-700 transition-colors flex items-center justify-center space-x-2"
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
                  className="max-w-4xl mx-auto"
                >
                  <div className="bg-white rounded-2xl p-8 shadow-lg">
                    <h2 className="text-3xl font-bold text-gray-900 mb-6">
                      Service Overview
                    </h2>
                    <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                      {currentService.longDescription}
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                      <div>
                        <h3 className="text-xl font-semibold text-gray-900 mb-4">
                          What We Offer
                        </h3>
                        <div className="space-y-3">
                          {currentService.features.map((feature, index) => (
                            <div
                              key={index}
                              className="flex items-center space-x-3"
                            >
                              <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                              <span className="text-gray-700">{feature}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold text-gray-900 mb-4">
                          Key Benefits
                        </h3>
                        <div className="space-y-3">
                          {currentService.benefits.map((benefit, index) => (
                            <div
                              key={index}
                              className="flex items-center space-x-3"
                            >
                              <Award className="w-5 h-5 text-blue-500 flex-shrink-0" />
                              <span className="text-gray-700">{benefit}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>

                    <div className="bg-gray-50 rounded-xl p-6">
                      <h3 className="text-xl font-semibold text-gray-900 mb-4">
                        Training & Support
                      </h3>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                          <h4 className="font-semibold text-gray-800 mb-2">
                            Training Program
                          </h4>
                          <p className="text-gray-700">
                            {currentService.training}
                          </p>
                        </div>
                        <div>
                          <h4 className="font-semibold text-gray-800 mb-2">
                            Support
                          </h4>
                          <p className="text-gray-700">
                            {currentService.support}
                          </p>
                        </div>
                      </div>
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
                  className="max-w-4xl mx-auto"
                >
                  <div className="bg-white rounded-2xl p-8 shadow-lg">
                    <h2 className="text-3xl font-bold text-gray-900 mb-6">
                      Benefits & Commission Structure
                    </h2>

                    <div className="mb-8">
                      <h3 className="text-xl font-semibold text-gray-900 mb-4">
                        Commission Structure
                      </h3>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {Object.entries(currentService.commission).map(
                          ([service, commission]) => (
                            <div
                              key={service}
                              className="bg-gray-50 rounded-lg p-4 border border-gray-200"
                            >
                              <div className="font-semibold text-gray-800">
                                {service}
                              </div>
                              <div className="text-lg font-bold text-green-600">
                                {commission}
                              </div>
                            </div>
                          )
                        )}
                      </div>
                    </div>

                    <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl p-6 border border-blue-200">
                      <h3 className="text-xl font-semibold text-gray-900 mb-4">
                        Why Choose This Service?
                      </h3>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {currentService.benefits.map((benefit, index) => (
                          <div
                            key={index}
                            className="flex items-center space-x-3"
                          >
                            <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
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
                  className="max-w-4xl mx-auto"
                >
                  <div className="bg-white rounded-2xl p-8 shadow-lg">
                    <h2 className="text-3xl font-bold text-gray-900 mb-6">
                      Requirements & Eligibility
                    </h2>

                    <div className="mb-8">
                      <h3 className="text-xl font-semibold text-gray-900 mb-4">
                        Basic Requirements
                      </h3>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {currentService.requirements.map(
                          (requirement, index) => (
                            <div
                              key={index}
                              className="flex items-center space-x-3 bg-gray-50 rounded-lg p-4"
                            >
                              <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                              <span className="text-gray-700">
                                {requirement}
                              </span>
                            </div>
                          )
                        )}
                      </div>
                    </div>

                    <div className="bg-yellow-50 rounded-xl p-6 border border-yellow-200">
                      <h3 className="text-xl font-semibold text-gray-900 mb-4">
                        Important Notes
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
                  className="max-w-4xl mx-auto"
                >
                  <div className="bg-white rounded-2xl p-8 shadow-lg">
                    <h2 className="text-3xl font-bold text-gray-900 mb-6">
                      Required Documents
                    </h2>

                    <div className="mb-8">
                      <h3 className="text-xl font-semibold text-gray-900 mb-4">
                        Document Checklist
                      </h3>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {currentService.documents.map((document, index) => (
                          <div
                            key={index}
                            className="flex items-center space-x-3 bg-gray-50 rounded-lg p-4 border border-gray-200"
                          >
                            <FileText className="w-5 h-5 text-blue-500 flex-shrink-0" />
                            <span className="text-gray-700">{document}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="bg-blue-50 rounded-xl p-6 border border-blue-200">
                      <h3 className="text-xl font-semibold text-gray-900 mb-4">
                        Document Guidelines
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
                  className="max-w-4xl mx-auto"
                >
                  <div className="bg-white rounded-2xl p-8 shadow-lg">
                    <h2 className="text-3xl font-bold text-gray-900 mb-6">
                      Application Process
                    </h2>

                    <div className="mb-8">
                      <h3 className="text-xl font-semibold text-gray-900 mb-4">
                        Step-by-Step Process
                      </h3>
                      <div className="space-y-4">
                        {currentService.process.map((step, index) => (
                          <div
                            key={index}
                            className="flex items-start space-x-4"
                          >
                            <div className="w-8 h-8 bg-blue-500 text-white rounded-full flex items-center justify-center font-bold text-sm flex-shrink-0">
                              {index + 1}
                            </div>
                            <div className="flex-1 bg-gray-50 rounded-lg p-4 border border-gray-200">
                              <span className="text-gray-700 font-medium">
                                {step}
                              </span>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="bg-green-50 rounded-xl p-6 border border-green-200">
                      <h3 className="text-xl font-semibold text-gray-900 mb-4">
                        Timeline
                      </h3>
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center">
                        <div>
                          <div className="text-2xl font-bold text-green-600">
                            1-3 Days
                          </div>
                          <div className="text-gray-600">
                            Document Verification
                          </div>
                        </div>
                        <div>
                          <div className="text-2xl font-bold text-green-600">
                            5-10 Days
                          </div>
                          <div className="text-gray-600">Approval Process</div>
                        </div>
                        <div>
                          <div className="text-2xl font-bold text-green-600">
                            2-3 Days
                          </div>
                          <div className="text-gray-600">Training & Setup</div>
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
                  className="max-w-4xl mx-auto"
                >
                  <div className="bg-white rounded-2xl p-8 shadow-lg">
                    <h2 className="text-3xl font-bold text-gray-900 mb-6">
                      Frequently Asked Questions
                    </h2>

                    <div className="space-y-6">
                      {currentService.faq.map((faq, index) => (
                        <div
                          key={index}
                          className="border border-gray-200 rounded-lg p-6"
                        >
                          <h3 className="text-lg font-semibold text-gray-900 mb-3">
                            {faq.question}
                          </h3>
                          <p className="text-gray-700 leading-relaxed">
                            {faq.answer}
                          </p>
                        </div>
                      ))}
                    </div>

                    <div className="mt-8 bg-blue-50 rounded-xl p-6 border border-blue-200">
                      <h3 className="text-xl font-semibold text-gray-900 mb-4">
                        Still Have Questions?
                      </h3>
                      <p className="text-gray-700 mb-4">
                        Our team is here to help you with any additional
                        questions or concerns.
                      </p>
                      <div className="flex flex-col sm:flex-row gap-4">
                        <button className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors flex items-center justify-center space-x-2">
                          <Phone className="w-5 h-5" />
                          <span>Call Us</span>
                        </button>
                        <button className="border-2 border-blue-600 text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-blue-600 hover:text-white transition-colors flex items-center justify-center space-x-2">
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
      <section className="py-16 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="container mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Get Started with {currentService.title}?
            </h2>
            <p className="text-lg text-blue-100 mb-8 max-w-2xl mx-auto">
              Join our network of successful service providers and start earning
              while serving your community.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={downloadForm}
                className="bg-white text-blue-600 px-8 py-4 rounded-full font-semibold text-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center space-x-2"
              >
                <Download className="w-5 h-5" />
                <span>Download Application Form</span>
              </button>
              <button className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-blue-600 transition-colors flex items-center justify-center space-x-2">
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

export default ServiceDetailPage;
