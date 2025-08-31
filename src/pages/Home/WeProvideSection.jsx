import React, { useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import { HiArrowLongRight } from "react-icons/hi2";
import { GoArrowRight } from "react-icons/go";
import { Link } from "react-router-dom";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const WeProvideSection = () => {
  // Custom CSS for individual group hover effects
  useEffect(() => {
    const style = document.createElement("style");
    style.textContent = `
      .group-1:hover .scale-110-1 { transform: scale(1.1); }
      .group-1:hover .border-blue-1 { border-color: #3b82f6; }
      .group-1:hover .bg-blue-1 { background-color: #3b82f6; }
      .group-1:hover .text-white-1 { color: #ffffff; }
      
      .group-2:hover .scale-110-2 { transform: scale(1.1); }
      .group-2:hover .border-blue-2 { border-color: #3b82f6; }
      .group-2:hover .bg-blue-2 { background-color: #3b82f6; }
      .group-2:hover .text-white-2 { color: #ffffff; }
      
      .group-3:hover .scale-110-3 { transform: scale(1.1); }
      .group-3:hover .border-blue-3 { border-color: #3b82f6; }
      .group-3:hover .bg-blue-3 { background-color: #3b82f6; }
      .group-3:hover .text-white-3 { color: #ffffff; }
      
       .group-4:hover .scale-110-4 { transform: scale(1.1); }
       .group-4:hover .border-blue-4 { border-color: #3b82f6; }
       .group-4:hover .bg-blue-4 { background-color: #3b82f6; }
       .group-4:hover .text-white-4 { color: #ffffff; }
       
       .group-5:hover .scale-110-5 { transform: scale(1.1); }
       .group-5:hover .border-blue-5 { border-color: #3b82f6; }
       .group-5:hover .bg-blue-5 { background-color: #3b82f6; }
       .group-5:hover .text-white-5 { color: #ffffff; }
    `;
    document.head.appendChild(style);

    return () => {
      document.head.removeChild(style);
    };
  }, []);

  const services = [
    {
      id: 1,
      title: "Aadhaar Centre",
      description:
        "Aadhaar Seva Kendra project, UIDAI plans to set up 114 Aadhaar Seva Kendra across 53 cities in India. These include dedicated centres in all metro cities",
      bannerImage: "/aadhar-banner.jpg",
      logo: "/aadhar.png",
      endpoint: "/services/aadhar",
      buttonColor: "bg-gray-100",
    },
    {
      id: 2,
      title: "E Mitra",
      description:
        "E-mitra service has been launched by government of  Rajasthan.",
      bannerImage: "/e-mitra-banner.jpg",
      logo: "/emitra.png",
      endpoint: "/services/emitra",
      buttonColor: "bg-gray-100",
    },
    {
      id: 3,
      title: "CSP",
      description:
        "become Bank Mitra for State Bank of India, Bank of Baroda, Bank of India and Punjab National Bank.",
      bannerImage: "CSP-banner.png",
      logo: "/csp.png",
      endpoint: "/services/csp",
      buttonColor: "bg-gray-100",
    },
    {
      id: 4,
      title: "PAN CENTER",
      description:
        "UTI Infrastructure Technology And Services Limited (UTIITSL) is a Government Company under section 2(45) of the Companies Act 2013,",
      bannerImage: "/pen-center-banner.jpg",
      logo: "/uti.png",
      endpoint: "/services/pan",
      buttonColor: "bg-gray-100",
    },
    {
      id: 5,
      title: "Utility Service",
      description:
        "Bill Payment & Recharge. Recharge your prepaid mobile, DTH account, Pay your electricity, postpaid, landline, broadband, gas, water bills.",
      bannerImage: "/utilityservice-banner.jpg",
      logo: "/utility.png",
      endpoint: "/services/utility",
      buttonColor: "bg-gray-100",
    },
  ];

  return (
    <section className="py-28 bg-white group" id="we-provide group">
      <div className="container mx-auto px-5 xl:px-20 2xl:px-40">
        {/* Section Header */}
        <div className="mb-12">
          <div className="title text-center">
            <h3 className="text-[15px] text-orange-500 font-bold uppercase mb-2">
              We Provide
            </h3>
            <p className="text-[40px] uppercase font-bold text-gray-800">
              Services
            </p>
          </div>

          {/* Navigation Arrows */}
          <div className="flex gap-5 w-fit mx-auto mt-8">
            <button className="group service-arrow-left arrow bg-transparent active:scale-90 cursor-pointer hover:border-blue-500 duration-300 text-gray-300 hover:text-blue-500 p-2.5 rounded-full border">
              <GoArrowRight className="text-[30px] group-hover:border-blue-500 rotate-180" />
            </button>
            <button className="group service-arrow-right arrow bg-transparent active:scale-90 cursor-pointer hover:border-blue-500 duration-300 text-gray-300 hover:text-blue-500 p-2.5 rounded-full border">
              <GoArrowRight className="text-[30px] group-hover:border-blue-500" />
            </button>
          </div>
        </div>

        {/* Service Cards Slider */}
        <div className="relative min-h-[500px]">
          <Swiper
            className="select-none w-full h-full"
            modules={[Navigation, Pagination, Autoplay]}
            spaceBetween={30}
            slidesPerView={1}
            navigation={{
              nextEl: ".service-arrow-right",
              prevEl: ".service-arrow-left",
            }}
            loop={false}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
            }}
            // autoplay={false}
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
            {services.map((service, index) => (
              <SwiperSlide key={service.id}>
                <Link to={service.endpoint}>
                  <div
                    className={`group-${service.id} h-[500px] cursor-pointer relative border border-gray-200 bg-white rounded-lg hover:shadow-xl transition-all duration-300 flex flex-col`}
                  >
                    <div className="relative">
                      {/* Banner Image */}
                      <div className="card-images h-[176px] overflow-hidden rounded-t-lg">
                        <img
                          src={service.bannerImage}
                          alt={`${service.title}-image`}
                          className={`h-[100%] w-[100%] object-cover scale-110-${service.id} duration-500`}
                        />
                      </div>

                      {/* Service Logo */}
                      <div
                        className={`service-logo h-[100px] w-[100px] absolute top-full -translate-y-2/4 left-2/4 -translate-x-2/4 rounded-full p-0.5 border-[4px] border-dotted border-gray-400 border-blue-${service.id} duration-500 bg-white shadow-lg`}
                      >
                        <img
                          src={service.logo}
                          alt={`${service.title}-logo`}
                          className="h-[100%] w-[100%] object-cover rounded-full"
                        />
                      </div>
                    </div>

                    {/* Content */}
                    <div className="content-list mt-[70px] space-y-5 px-6 flex-1 flex flex-col justify-center">
                      <h3 className="capitalize text-[20px] font-semibold text-center text-gray-800">
                        {service.title}
                      </h3>
                      <div className="text">
                        <p className="text-center text-gray-600 line-clamp-3 leading-relaxed">
                          {service.description}
                        </p>
                      </div>
                    </div>

                    {/* Read More Button */}
                    <div className="read-more w-full px-6 pb-4 mt-auto">
                      <button
                        className={`cursor-pointer capitalize ${service.buttonColor} bg-blue-${service.id} text-white-${service.id} duration-260 w-[100%] py-3 text-[17px] rounded-sm flex justify-center items-center gap-3 font-semibold transition-all active:scale-90`}
                      >
                        read more <HiArrowLongRight className="text-[25px]" />
                      </button>
                    </div>
                  </div>
                </Link>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default WeProvideSection;
