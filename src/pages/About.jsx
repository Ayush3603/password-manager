import React from "react";

const About = () => {
  return (
    <section className="flex justify-center items-center min-h-[89vh] px-4 relative">
      {/* Background grid and glow */}
      <div className="absolute inset-0 -z-10 h-full w-full bg-green-50 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-size-[14px_24px]">
        <div className="absolute left-0 right-0 top-0 -z-10 m-auto h-[310px] w-[310px] rounded-full bg-green-400 opacity-20 blur-[100px]" />
      </div>

      {/* Card */}
      <div className="bg-white shadow-lg rounded-xl p-8 text-center max-w-2xl border border-green-400">
        <h2 className="text-3xl font-bold text-gray-800 mb-6 font-serif">
          About This Project
        </h2>

        <p className="text-gray-700 text-lg font-medium mb-4">
          <span className="font-semibold">Password Manager</span> is an{" "}
          <span className="text-green-600 font-semibold">open-source</span>{" "}
          project built using <strong>Vite</strong>, <strong>React</strong>, and{" "}
          <strong>Tailwind CSS</strong>. It helps users securely store and manage
          their passwords locally in their browser using{" "}
          <strong>Local Storage</strong>, ensuring complete privacy and data
          control.
        </p>

        <h3 className="text-2xl font-semibold text-gray-800 mt-6 mb-2">
          🌍 Open Source Contribution
        </h3>
        <p className="text-gray-700 mb-4">
          This project is completely open source and welcomes community
          contributions! If you’re a developer and want to improve the app, feel
          free to:
        </p>

        <ul className="text-left list-disc list-inside text-gray-700 mb-4">
          <li>🧠 Fix bugs or improve existing features</li>
          <li>🎨 Enhance the UI/UX</li>
          <li>⚡ Optimize performance or add new functionality</li>
          <li>📚 Improve documentation</li>
        </ul>

        <p className="text-gray-700 mb-6">
          You can explore the source code, open issues, or submit pull requests
          on GitHub to help make this project better for everyone.
        </p>

        <h3 className="text-2xl font-semibold text-gray-800 mb-2">💡 Tech Stack</h3>
        <ul className="text-left list-disc list-inside text-gray-700 mb-6">
          <li>React – Frontend framework</li>
          <li>Vite – Fast build tool</li>
          <li>Tailwind CSS – Styling and responsiveness</li>
          <li>Local Storage – Secure data handling on the client side</li>
        </ul>

        <h3 className="text-2xl font-semibold text-gray-800 mb-2">
          👨‍💻 Developer’s Note
        </h3>
        <p className="text-gray-700">
          This project was created to learn, build, and share. By keeping it
          open source, I hope others can contribute, learn, and grow together in
          the developer community.
        </p>
      </div>
    </section>
  );
};

export default About;
