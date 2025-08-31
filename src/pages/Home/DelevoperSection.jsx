import React from "react";

const DelevoperSection = () => {
  return (
    <div className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Top - Rounded Image */}
          <div className="flex justify-center mb-8">
            <div className="w-20 h-20 rounded-full overflow-hidden border-4 border-white shadow-lg">
              <img
                src="/logo.png"
                alt="Developer"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Center - Content */}
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">
              Meet Our Developer  
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              We are passionate developers dedicated to creating innovative
              digital solutions that transform businesses and enhance user
              experiences.
            </p>
          </div>

          {/* Bottom - Description */}
          <div className="bg-white rounded-lg p-8 border border-gray-200 shadow-md">
            {/* Developer Image Section */}
            <div className="flex justify-center mb-4">
              <div className="w-40 h-40 rounded-full overflow-hidden shadow-xl">
                <img
                  src="/developer.jpg"
                  alt="Developer Working"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            <div className="w-fit mx-auto bg-blue-600 text-white px-8 py-2 rounded-full text-sm font-medium">
              Bharat Kumar Mali
            </div>
            <div className="grid md:grid-cols-2 gap-8 max-w-2xl mx-auto mt-10">
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-3">
                  <svg
                    className="w-8 h-8 text-blue-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                </div>
                <h4 className="font-medium text-gray-800 mb-2">
                  Web Development
                </h4>
                <p className="text-sm text-gray-600">
                  Modern, responsive websites and web applications
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-3">
                  <svg
                    className="w-8 h-8 text-purple-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01"
                    />
                  </svg>
                </div>
                <h4 className="font-medium text-gray-800 mb-2">
                  Database (Server) Management
                </h4>
                <p className="text-sm text-gray-600">
                  Database management and server administration
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DelevoperSection;
