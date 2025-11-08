// EDIT: About page imports - Add new libraries here if needed
import React from "react";

const About = () => {
  return (
    /* EDIT: Main container - change min-h-[89vh] to adjust page height */
    <section className="flex justify-center items-center min-h-[89vh] px-4 relative">
      {/* EDIT: Enhanced background with multiple effects */}
      <div className="absolute inset-0 -z-10 h-full w-full bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
        {/* EDIT: Grid pattern - change bg-size-[14px_24px] to adjust grid size */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-size-[14px_24px]"></div>
        {/* EDIT: Main glow effect - change bg-gradient colors to modify glow */}
        <div className="absolute left-0 right-0 top-0 -z-10 m-auto h-[400px] w-[400px] rounded-full bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 opacity-20 blur-[120px] animate-pulse"></div>
        {/* EDIT: Secondary glow - change position and colors */}
        <div className="absolute left-1/4 top-1/4 -z-10 h-[200px] w-[200px] rounded-full bg-gradient-to-r from-green-400 to-blue-400 opacity-15 blur-[80px] animate-bounce"></div>
      </div>

      {/* EDIT: About card container - change max-w-4xl to adjust width */}
      <div className="bg-white/90 backdrop-blur-lg shadow-2xl rounded-3xl p-10 text-center max-w-4xl border border-white/20 hover:shadow-3xl transition-all duration-500">
        
        {/* EDIT: Main heading - change text and gradient colors */}
        <h2 className="text-5xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent mb-8 animate-pulse">
          🚀 About PassOP
        </h2>

        {/* EDIT: Project description with enhanced styling */}
        <div className="mb-8 p-6 bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl border border-blue-200">
          <p className="text-xl text-gray-700 font-medium leading-relaxed">
            <span className="font-bold text-2xl bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">PassOP</span> is a 
            <span className="text-blue-600 font-semibold mx-2">cutting-edge</span>
            password manager built with modern web technologies. 
            Store and manage your passwords locally with 
            <span className="text-purple-600 font-semibold mx-2">complete privacy</span>
            and security.
          </p>
        </div>

        {/* EDIT: Features grid - Add/remove/modify features */}
        <div className="grid md:grid-cols-2 gap-6 mb-8">
          
          {/* Security Feature */}
          <div className="p-6 bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl border border-blue-200 hover:shadow-lg transition-all duration-300 group">
            <div className="text-4xl mb-3 group-hover:scale-110 transition-transform duration-300">🔐</div>
            <h3 className="text-xl font-bold text-blue-800 mb-2">Bank-Level Security</h3>
            <p className="text-blue-700">Advanced encryption keeps your passwords safe and secure</p>
          </div>

          {/* Privacy Feature */}
          <div className="p-6 bg-gradient-to-br from-purple-50 to-purple-100 rounded-2xl border border-purple-200 hover:shadow-lg transition-all duration-300 group">
            <div className="text-4xl mb-3 group-hover:scale-110 transition-transform duration-300">🛡️</div>
            <h3 className="text-xl font-bold text-purple-800 mb-2">Complete Privacy</h3>
            <p className="text-purple-700">All data stored locally - no cloud, no tracking</p>
          </div>

          {/* Open Source Feature */}
          <div className="p-6 bg-gradient-to-br from-green-50 to-green-100 rounded-2xl border border-green-200 hover:shadow-lg transition-all duration-300 group">
            <div className="text-4xl mb-3 group-hover:scale-110 transition-transform duration-300">🌍</div>
            <h3 className="text-xl font-bold text-green-800 mb-2">Open Source</h3>
            <p className="text-green-700">Transparent code that you can inspect and contribute to</p>
          </div>

          {/* Modern Tech Feature */}
          <div className="p-6 bg-gradient-to-br from-pink-50 to-pink-100 rounded-2xl border border-pink-200 hover:shadow-lg transition-all duration-300 group">
            <div className="text-4xl mb-3 group-hover:scale-110 transition-transform duration-300">⚡</div>
            <h3 className="text-xl font-bold text-pink-800 mb-2">Lightning Fast</h3>
            <p className="text-pink-700">Built with modern React and Vite for optimal performance</p>
          </div>
        </div>

        {/* EDIT: Tech Stack section with interactive cards */}
        <div className="mb-8">
          <h3 className="text-3xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent mb-6">
            💡 Powered By Modern Tech
          </h3>
          <div className="flex flex-wrap justify-center gap-4">
            {/* EDIT: Add/remove tech stack items */}
            <div className="px-6 py-3 bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-full font-semibold hover:scale-105 transition-transform duration-300 shadow-lg">
              ⚛️ React
            </div>
            <div className="px-6 py-3 bg-gradient-to-r from-purple-500 to-purple-600 text-white rounded-full font-semibold hover:scale-105 transition-transform duration-300 shadow-lg">
              ⚡ Vite
            </div>
            <div className="px-6 py-3 bg-gradient-to-r from-teal-500 to-teal-600 text-white rounded-full font-semibold hover:scale-105 transition-transform duration-300 shadow-lg">
              🎨 Tailwind CSS
            </div>
            <div className="px-6 py-3 bg-gradient-to-r from-orange-500 to-orange-600 text-white rounded-full font-semibold hover:scale-105 transition-transform duration-300 shadow-lg">
              💾 Local Storage
            </div>
          </div>
        </div>

        {/* EDIT: Enhanced call to action section with statistics */}
        <div className="space-y-6">
          
          {/* Statistics section - EDIT: Update with real stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
            <div className="text-center p-4 bg-white/50 rounded-xl hover:bg-white/70 transition-all duration-300">
              <div className="text-2xl font-bold text-blue-600">256-bit</div>
              <div className="text-sm text-gray-600">Encryption</div>
            </div>
            <div className="text-center p-4 bg-white/50 rounded-xl hover:bg-white/70 transition-all duration-300">
              <div className="text-2xl font-bold text-purple-600">100%</div>
              <div className="text-sm text-gray-600">Private</div>
            </div>
            <div className="text-center p-4 bg-white/50 rounded-xl hover:bg-white/70 transition-all duration-300">
              <div className="text-2xl font-bold text-pink-600">∞</div>
              <div className="text-sm text-gray-600">Passwords</div>
            </div>
            <div className="text-center p-4 bg-white/50 rounded-xl hover:bg-white/70 transition-all duration-300">
              <div className="text-2xl font-bold text-green-600">0</div>
              <div className="text-sm text-gray-600">Cloud Data</div>
            </div>
          </div>

          {/* Main CTA section */}
          <div className="p-6 bg-gradient-to-r from-indigo-50 to-purple-50 rounded-2xl border border-indigo-200">
            <h3 className="text-2xl font-bold text-gray-800 mb-4">
              🚀 Ready to Secure Your Digital Life?
            </h3>
            <p className="text-gray-700 mb-6">
              Join thousands of users who trust PassOP to keep their passwords safe and organized.
            </p>
            
            {/* EDIT: Enhanced action buttons with hover effects */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button 
                onClick={() => window.location.href = '/'}
                className="group px-8 py-3 bg-gradient-to-r from-blue-500 to-purple-500 text-white font-bold rounded-2xl hover:shadow-lg transform hover:scale-105 transition-all duration-300 relative overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <span className="relative flex items-center justify-center gap-2">
                  🏠 Start Using PassOP
                </span>
              </button>
              
              <button 
                onClick={() => window.open('https://github.com/shatrughantwt', '_blank')}
                className="group px-8 py-3 bg-gradient-to-r from-gray-600 to-gray-700 text-white font-bold rounded-2xl hover:shadow-lg transform hover:scale-105 transition-all duration-300 relative overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-gray-700 to-gray-800 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <span className="relative flex items-center justify-center gap-2">
                  ⭐ View on GitHub
                </span>
              </button>
            </div>
          </div>
        </div>

        {/* EDIT: Developer note with personal touch */}
        <div className="mt-8 p-4 bg-gradient-to-r from-yellow-50 to-orange-50 rounded-xl border border-yellow-200">
          <p className="text-gray-700 italic">
            "Built with ❤️ by developers, for developers. This project represents our commitment to 
            privacy, security, and open-source collaboration."
          </p>
          <p className="text-sm text-gray-600 mt-2">- The PassOP Team</p>
        </div>
      </div>
    </section>
  );
};

export default About;