import React from "react";

const Contact = () => {
  return (
    
    <section className="flex justify-center items-center min-h-[89vh] px-4">
      <div className="absolute inset-0 -z-10 h-full w-full bg-green-50 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-size-[14px_24px]">
        <div className="absolute left-0 right-0 top-0 -z-10 m-auto h-[310px] w-[310px] rounded-full bg-green-400 opacity-20 blur-[100px]"></div>
      </div>
      <div className="bg-white shadow-lg rounded-xl p-8 text-center max-w-lg border border-green-400">
        <h2 className="text-3xl font-bold text-gray-800 mb-4 font-serif">
          Contact Me
        </h2>
        <p className="text-lg text-gray-700 mb-6 font-semibold">
          Feel free to reach out for collaboration, questions, or just to say
          hello
        </p>

        <p className="text-gray-800 font-semibold mb-4">
          Email:{" "}
          <a
            href="mailto:shatrughanm485@gmail.com"
            className="text-green-500 hover:text-green-600"
            target="_blank"
            rel="noopener noreferrer"
          >
            shatrughanm485@gmail.com
          </a>
        </p>

        <div className="flex justify-center gap-6 mt-4">
          {/* LinkedIn */}
          <a
            href="https://linkedin.com/in/shatrughantwt"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn Profile"
          >
            <lord-icon
              src="https://cdn.lordicon.com/fgctxlnd.json"
              trigger="hover"
              colors="primary:#818589,secondary:#000000"
              style={{ width: "40px", height: "40px" }}
            ></lord-icon>
          </a>

          {/* X (Twitter) */}
          <a
            href="https://x.com/shatrughantwt"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Twitter Profile"
          >
            <lord-icon
              src="https://cdn.lordicon.com/guvfanks.json"
              trigger="hover"
              style={{ width: "40px", height: "40px" }}
            ></lord-icon>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
