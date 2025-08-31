import React from 'react';
import { HiArrowLongRight } from 'react-icons/hi2';
import { Link } from 'react-router-dom';

const ServiceCards = () => {
  const services = [
    {
      id: 1,
      title: "CSP",
      description: "become Bank Mitra for State Bank of India, Bank of Baroda, Bank of India and Punjab National Bank.",
      bannerImage: "https://www.drkjodhpur.com/ver3/images/services/v2-3.jpg",
      logo: "https://www.drkjodhpur.com/ver3/images/services/csp-logo.png",
      endpoint: "/csp",
      buttonColor: "bg-gray-100 hover:bg-blue-500"
    },
    {
      id: 2,
      title: "Aadhaar Centre",
      description: "Aadhaar Seva Kendra project, UIDAI plans to set up 114 Aadhaar Seva Kendra across 53 cities in India. These include dedicated centres in all metro cities",
      bannerImage: "https://www.drkjodhpur.com/ver3/images/services/v2-3.jpg",
      logo: "https://www.drkjodhpur.com/ver3/images/services/aadhar.png",
      endpoint: "/aadhaar",
      buttonColor: "bg-gray-100 hover:bg-blue-500"
    },
    {
      id: 3,
      title: "PAN CENTER",
      description: "UTI Infrastructure Technology And Services Limited (UTIITSL) is a Government Company under section 2(45) of the Companies Act 2013,",
      bannerImage: "https://www.drkjodhpur.com/ver3/images/services/v2-3.jpg",
      logo: "https://www.drkjodhpur.com/ver3/images/services/pan-logo.png",
      endpoint: "/pan",
      buttonColor: "bg-orange-500 hover:bg-orange-600 text-white"
    }
  ];

  return (
    <div className="px-5 xl:px-20 2xl:px-40 py-28" id="services">
      <div className="mb-12">
        <div className="title">
          <h3 className="text-[15px] text-orange-500 font-bold text-center uppercase">We Provide</h3>
          <p className="text-center text-[40px] uppercase">Services</p>
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((service) => (
          <Link key={service.id} to={service.endpoint}>
            <div className="group h-[100%] cursor-pointer relative">
              <div className="relative">
                <div className="card-images h-[176px] overflow-hidden">
                  <img
                    src={service.bannerImage}
                    alt={`${service.title}-image`}
                    className="h-[100%] w-[100%] object-cover group-hover:scale-110 duration-500"
                  />
                </div>
                <div className="service-logo h-[100px] w-[100px] absolute top-full -translate-y-2/4 left-2/4 -translate-x-2/4 rounded-full p-0.5 border-[4px] border-dotted border-gray-400 group-hover:border-blue-500 duration-500 bg-white">
                  <img
                    src={service.logo}
                    alt={`${service.title}-logo`}
                    className="h-[100%] w-[100%] object-cover rounded-full"
                  />
                </div>
              </div>
              <div className="content-list mt-[70px] space-y-5">
                <h3 className="capitalize text-[20px] font-semibold text-center">
                  {service.title}
                </h3>
                <div className="text">
                  <p className="text-center px-2 text-gray-600 line-clamp-3">
                    {service.description}
                  </p>
                </div>
              </div>
              <div className="read-more w-full absolute bottom-2 mt-[32px]">
                <button className={`capitalize ${service.buttonColor} text-black group-hover:text-white duration-500 delay-200 w-[100%] py-3 text-[17px] rounded-sm flex justify-center items-center gap-3 font-semibold`}>
                  read more <HiArrowLongRight className="text-[25px]" />
                </button>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default ServiceCards;
