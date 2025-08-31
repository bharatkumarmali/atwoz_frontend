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

            {/* Contact Information */}
            <div className="text-center mt-4 mb-8">
              <div className="flex flex-col sm:flex-row justify-center items-center gap-4 text-sm text-gray-600">
                <div className="flex items-center gap-2">
                  <svg
                    className="w-4 h-4 text-blue-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                    />
                  </svg>
                  <a
                    href={`tel:+91${import.meta.env.VITE_DEVELOPER_MOBILE_NO}`}
                  >
                    <span>+91 {import.meta.env.VITE_DEVELOPER_MOBILE_NO}</span>
                  </a>{" "}
                </div>
                <div className="flex items-center gap-2">
                  <svg
                    className="w-4 h-4 text-blue-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>

                  <a href={`mailto:${import.meta.env.VITE_DEVELOPER_EMAIL_ID}`}>
                    <span>{import.meta.env.VITE_DEVELOPER_EMAIL_ID}</span>
                  </a>
                </div>
              </div>

              {/* Social Media Links */}
              <div className="flex justify-center gap-5 mt-3">
                {/* twitter new (X) */}
                <a
                  href="https://x.com/sbharat2143"
                  target="_blank"
                  className="text-gray-400 hover:text-blue-600 transition-colors"
                >
                  <svg
                    className="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M18.244 2.25h3.308l-7.227 8.26L22.5 21.75h-6.484l-5.092-6.647-5.823 6.647H1.793l7.73-8.821L1.5 2.25h6.633l4.546 5.995 5.565-5.995z" />
                  </svg>
                </a>

                {/* instagram */}
                <a
                  href="https://www.instagram.com/cutemarwadiboy"
                  className="text-gray-400 hover:text-blue-600 transition-colors"
                  target="_blank"
                >
                  <svg
                    className="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                  </svg>
                </a>

                {/* whatsapp */}
                <a
                  href={`https://wa.me/91${
                    import.meta.env.VITE_DEVELOPER_MOBILE_NO
                  }`}
                  target="_blank"
                  className="text-gray-400 hover:text-blue-600 transition-colors"
                >
                  <svg
                    className="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 32 32"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M16 .395c-8.837 0-16 7.163-16 16 0 2.821.734 5.588 2.131 8.032L.057 32l7.757-2.02A15.9 15.9 0 0 0 16 32c8.837 0 16-7.163 16-16s-7.163-15.605-16-15.605zm0 29.217a13.18 13.18 0 0 1-6.736-1.845l-.483-.286-4.598 1.198 1.228-4.482-.314-.498a13.157 13.157 0 0 1-2.009-6.979c0-7.263 5.913-13.177 13.177-13.177 3.52 0 6.828 1.372 9.317 3.861a13.1 13.1 0 0 1 3.861 9.317c0 7.264-5.914 13.177-13.177 13.177zm7.241-9.943c-.397-.199-2.348-1.159-2.711-1.29-.364-.134-.63-.198-.897.199s-1.027 1.29-1.259 1.555c-.231.265-.464.298-.861.099-.397-.199-1.677-.617-3.193-1.966-1.18-1.054-1.977-2.354-2.208-2.751-.231-.397-.024-.611.174-.81.179-.178.397-.464.596-.695.199-.232.265-.398.397-.663.132-.265.066-.497-.033-.696-.099-.198-.897-2.159-1.229-2.959-.324-.781-.655-.676-.897-.69-.231-.012-.497-.015-.763-.015s-.696.1-1.063.497c-.364.397-1.396 1.363-1.396 3.323s1.429 3.858 1.627 4.125c.199.265 2.811 4.293 6.812 6.018.952.41 1.694.654 2.272.837.955.304 1.825.261 2.513.158.766-.114 2.348-.957 2.68-1.881.331-.924.331-1.715.232-1.881-.1-.165-.364-.265-.762-.464z" />
                  </svg>
                </a>
              </div>
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
