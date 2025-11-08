import React from 'react';

const Contact = () => {
  return (
    <section className="flex justify-center items-center min-h-[89vh] px-4">
      {/* Main container - change min-h-[89vh] to adjust page height */}
      {/* Background with grid pattern - change bg-slate-50 to modify background color */}
      <div className="absolute inset-0 -z-10 h-full w-full bg-slate-50 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-size-[14px_24px]">
        {/* Glowing circle effect - change bg-blue-400 to modify glow color */}
        <div className="absolute left-0 right-0 top-0 -z-10 m-auto h-[310px] w-[310px] rounded-full bg-blue-400 opacity-20 blur-[100px]"></div>
      </div>
      {/* Contact card - change border-blue-400 to modify border color */}
      <div className="bg-white shadow-lg rounded-xl p-8 text-center max-w-lg border border-blue-400">
        {/* Main heading - change text-3xl for size, text-gray-800 for color */}
        <h2 className="text-3xl font-bold text-gray-800 mb-4 font-serif">
          Contact Me
        </h2>
        {/* Description text - change text-lg for size, text-gray-700 for color */}
        <p className="text-lg text-gray-700 mb-6 font-semibold">
          Feel free to reach out for collaboration, questions, or just to say
          hello
        </p>

        <p className="text-gray-800 font-semibold mb-4">
          Email: {/* Change email address and link colors here */}
          <a
            href="mailto:shatrughanm485@gmail.com"
            className="text-blue-500 hover:text-blue-600"
            target="_blank"
            rel="noopener noreferrer"
          >
            shatrughanm485@gmail.com
          </a>
        </p>

        {/* Social media icons container - change gap-6 to adjust spacing */}
        {/* EDIT: Enhanced social media section with more platforms */}
        <div className="space-y-6">
          
          {/* Contact methods grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
            
            {/* Email contact card */}
            <div className="p-4 bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl border border-blue-200 hover:shadow-lg transition-all duration-300 group">
              <div className="flex items-center space-x-3">
                <div className="text-2xl group-hover:scale-110 transition-transform duration-300">📧</div>
                <div>
                  <h4 className="font-semibold text-blue-800">Email</h4>
                  <p className="text-sm text-blue-600">Quick response</p>
                </div>
              </div>
            </div>

            {/* GitHub contact card */}
            <div className="p-4 bg-gradient-to-br from-gray-50 to-gray-100 rounded-xl border border-gray-200 hover:shadow-lg transition-all duration-300 group">
              <div className="flex items-center space-x-3">
                <div className="text-2xl group-hover:scale-110 transition-transform duration-300">⭐</div>
                <div>
                  <h4 className="font-semibold text-gray-800">GitHub</h4>
                  <p className="text-sm text-gray-600">Code & Issues</p>
                </div>
              </div>
            </div>
          </div>

          {/* Social media icons - EDIT: Add/remove social platforms */}
          <div className="flex justify-center gap-6">
            
            {/* LinkedIn - EDIT: Change href to update profile link */}
            <a
              href="https://linkedin.com/in/shatrughantwt"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn Profile"
              className="p-3 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full hover:shadow-lg transform hover:scale-110 transition-all duration-300 group"
            >
              <lord-icon
                src="https://cdn.lordicon.com/fgctxlnd.json"
                trigger="hover"
                colors="primary:#ffffff,secondary:#ffffff"
                style={{ width: "32px", height: "32px" }}
              ></lord-icon>
            </a>

            {/* Twitter/X - EDIT: Change href to update profile link */}
            <a
              href="https://x.com/shatrughantwt"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Twitter Profile"
              className="p-3 bg-gradient-to-br from-gray-800 to-black rounded-full hover:shadow-lg transform hover:scale-110 transition-all duration-300 group"
            >
              <lord-icon
                src="https://cdn.lordicon.com/guvfanks.json"
                trigger="hover"
                colors="primary:#ffffff,secondary:#ffffff"
                style={{ width: "32px", height: "32px" }}
              ></lord-icon>
            </a>

            {/* GitHub - EDIT: Add GitHub profile link */}
            <a
              href="https://github.com/shatrughantwt"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub Profile"
              className="p-3 bg-gradient-to-br from-purple-500 to-purple-600 rounded-full hover:shadow-lg transform hover:scale-110 transition-all duration-300 group"
            >
              <div className="text-white text-2xl">⭐</div>
            </a>

            {/* Discord - EDIT: Add Discord server link */}
            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Discord Server"
              className="p-3 bg-gradient-to-br from-indigo-500 to-indigo-600 rounded-full hover:shadow-lg transform hover:scale-110 transition-all duration-300 group"
            >
              <div className="text-white text-2xl">💬</div>
            </a>
          </div>

          {/* EDIT: Response time indicator */}
          <div className="mt-6 p-4 bg-gradient-to-r from-green-50 to-emerald-50 rounded-xl border border-green-200">
            <div className="flex items-center justify-center space-x-2">
              <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
              <span className="text-green-700 font-medium">Usually responds within 24 hours</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;