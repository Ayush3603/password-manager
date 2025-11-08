import React from "react";
import { useRef, useState, useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";
import { v4 as uuidv4 } from "uuid";

import "react-toastify/dist/ReactToastify.css";
import "../styles/animations.css";

const Manager = () => {
  const ref = useRef();
  const passwordRef = useRef();
  const [form, setform] = useState({ site: "", username: "", password: "" });
  const [passwordArray, setPasswordArray] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    let passwords = localStorage.getItem("passwords");
    if (passwords) {
      setPasswordArray(JSON.parse(passwords));
    }
  }, []);

  const copyText = (text) => {
    toast("Copied to clipboard!", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
    });
    navigator.clipboard.writeText(text);
  };

  const showPassword = () => {
    passwordRef.current.type = "text";
    if (ref.current.src.includes("icons/eyecross.png")) {
      ref.current.src = "icons/eye.png";
      passwordRef.current.type = "password";
    } else {
      passwordRef.current.type = "text";
      ref.current.src = "icons/eyecross.png";
    }
  };

  const savePassword = () => {
    if (
      form.site.length > 3 &&
      form.username.length > 3 &&
      form.password.length > 3
    ) {
      setPasswordArray([...passwordArray, { ...form, id: uuidv4() }]);
      localStorage.setItem(
        "passwords",
        JSON.stringify([...passwordArray, { ...form, id: uuidv4() }])
      );
      setform({ site: "", username: "", password: "" });
      toast("Password saved!", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });
    } else {
      toast("Error: Password not saved!");
    }
  };

  const deletePassword = (id) => {
    let c = confirm("Do you really want to delete this password?");
    if (c) {
      setPasswordArray(passwordArray.filter((item) => item.id !== id));
      localStorage.setItem(
        "passwords",
        JSON.stringify(passwordArray.filter((item) => item.id !== id))
      );
      toast("Password Deleted!", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });
    }
  };

  const editPassword = (id) => {
    setform(passwordArray.filter((i) => i.id === id)[0]);
    setPasswordArray(passwordArray.filter((item) => item.id !== id));
  };

  const handleChange = (e) => {
    setform({ ...form, [e.target.name]: e.target.value });
  };

  return (
    <>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
        transition="Bounce"
      />
      
      <div className="absolute inset-0 -z-10 h-full w-full bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-size-[20px_20px]"></div>
        <div className="absolute left-0 right-0 top-0 -z-10 m-auto h-[400px] w-[400px] rounded-full bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 opacity-20 blur-[120px] animate-pulse"></div>
        <div className="absolute left-1/4 top-1/4 -z-10 h-[200px] w-[200px] rounded-full bg-gradient-to-r from-green-400 to-blue-400 opacity-15 blur-[80px] animate-bounce"></div>
      </div>

      <div className="p-6 mycontainer min-h-[89.1vh]">
        <div className="text-center mb-12 fade-in-up">
          <h1 className="text-6xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent mb-4 gradient-shift neon-glow">
            <span className="text-blue-500 hover:text-blue-400 transition-colors duration-300 inline-block float-animation">
              &lt;
            </span>
            <span className="hover:scale-110 hover:rotate-2 transition-all duration-300 inline-block cursor-pointer">
              Pass
            </span>
            <span className="text-blue-500 hover:text-blue-400 transition-colors duration-300 inline-block float-animation">
              OP/&gt;
            </span>
          </h1>
          
          <div className="space-y-2 mb-6">
            <p className="text-2xl text-gray-700 font-medium hover:text-gray-800 transition-colors duration-300">
              🛡️ Your Ultimate Password Fortress
            </p>
            <p className="text-lg text-gray-600 hover:text-gray-700 transition-colors duration-300">
              🔐 Secure • 🚀 Simple • 🧠 Smart
            </p>
          </div>

          <div className="flex justify-center items-center space-x-6 mb-4">
            <div className="flex space-x-2">
              <div className="w-3 h-3 bg-blue-500 rounded-full animate-bounce pulse-glow"></div>
              <div className="w-3 h-3 bg-purple-500 rounded-full animate-bounce pulse-glow" style={{animationDelay: "0.1s"}}></div>
              <div className="w-3 h-3 bg-pink-500 rounded-full animate-bounce pulse-glow" style={{animationDelay: "0.2s"}}></div>
            </div>
          </div>

          <div className="grid grid-cols-3 gap-4 max-w-md mx-auto text-center">
            <div className="p-3 bg-white/20 backdrop-blur-sm rounded-xl hover-lift">
              <div className="text-2xl font-bold text-blue-600">256-bit</div>
              <div className="text-xs text-gray-600">Encryption</div>
            </div>
            <div className="p-3 bg-white/20 backdrop-blur-sm rounded-xl hover-lift">
              <div className="text-2xl font-bold text-purple-600">100%</div>
              <div className="text-xs text-gray-600">Private</div>
            </div>
            <div className="p-3 bg-white/20 backdrop-blur-sm rounded-xl hover-lift">
              <div className="text-2xl font-bold text-pink-600">∞</div>
              <div className="text-xs text-gray-600">Passwords</div>
            </div>
          </div>
        </div>

        <div className="max-w-4xl mx-auto mb-12">
          <div className="bg-white/80 backdrop-blur-lg rounded-3xl shadow-2xl border border-white/20 p-8 hover:shadow-3xl transition-all duration-500">
            <h2 className="text-3xl font-bold text-center mb-8 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              🔐 Add New Password
            </h2>
            
            <div className="space-y-6">
              <div className="relative group">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-purple-400 rounded-2xl blur opacity-25 group-hover:opacity-40 transition duration-300"></div>
                <input
                  value={form.site}
                  onChange={handleChange}
                  placeholder="🌐 Enter website URL (e.g., https://example.com)"
                  className="relative w-full p-4 rounded-2xl border-2 border-blue-200 focus:border-blue-500 focus:ring-4 focus:ring-blue-200 transition-all duration-300 text-lg bg-white/90 backdrop-blur-sm hover:bg-white focus:bg-white"
                  type="text"
                  name="site"
                  id="site"
                />
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="relative group">
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-400 to-pink-400 rounded-2xl blur opacity-25 group-hover:opacity-40 transition duration-300"></div>
                  <input
                    value={form.username}
                    onChange={handleChange}
                    placeholder="👤 Enter Username"
                    className="relative w-full p-4 rounded-2xl border-2 border-purple-200 focus:border-purple-500 focus:ring-4 focus:ring-purple-200 transition-all duration-300 text-lg bg-white/90 backdrop-blur-sm hover:bg-white focus:bg-white"
                    type="text"
                    name="username"
                    id="username"
                  />
                </div>

                <div className="relative group">
                  <div className="absolute inset-0 bg-gradient-to-r from-pink-400 to-red-400 rounded-2xl blur opacity-25 group-hover:opacity-40 transition duration-300"></div>
                  <input
                    ref={passwordRef}
                    value={form.password}
                    onChange={handleChange}
                    placeholder="🔑 Enter Password"
                    className="relative w-full p-4 pr-12 rounded-2xl border-2 border-pink-200 focus:border-pink-500 focus:ring-4 focus:ring-pink-200 transition-all duration-300 text-lg bg-white/90 backdrop-blur-sm hover:bg-white focus:bg-white"
                    type="password"
                    name="password"
                    id="password"
                  />
                  <button
                    className="absolute right-3 top-1/2 transform -translate-y-1/2 p-2 rounded-full hover:bg-gray-100 transition-colors duration-200"
                    onClick={showPassword}
                  >
                    <img
                      ref={ref}
                      className="w-6 h-6"
                      src="icons/eye.png"
                      alt="toggle visibility"
                    />
                  </button>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
                <button
                  onClick={() => {
                    const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*";
                    let password = "";
                    for (let i = 0; i < 16; i++) {
                      password += chars.charAt(Math.floor(Math.random() * chars.length));
                    }
                    setform({...form, password: password});
                    toast("🎲 Strong password generated!", {
                      position: "top-right",
                      autoClose: 3000,
                      theme: "dark",
                    });
                  }}
                  className="group relative px-8 py-3 bg-gradient-to-r from-emerald-500 to-teal-500 text-white font-bold rounded-2xl shadow-lg hover:shadow-2xl transform hover:scale-105 transition-all duration-300 overflow-hidden"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-emerald-600 to-teal-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="relative flex items-center gap-2">
                    <span className="text-xl">🎲</span>
                    <span>Generate</span>
                  </div>
                </button>

                <button
                  onClick={savePassword}
                  className="group relative px-12 py-4 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-white font-bold text-lg rounded-2xl shadow-lg hover:shadow-2xl transform hover:scale-105 transition-all duration-300 overflow-hidden"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="relative flex items-center gap-3">
                    <lord-icon
                      src="https://cdn.lordicon.com/jgnvfzqg.json"
                      trigger="hover"
                      style={{width: "24px", height: "24px"}}
                    ></lord-icon>
                    <span>Save Password</span>
                  </div>
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-8">
            <h2 className="text-4xl font-bold bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 bg-clip-text text-transparent mb-2">
              🔒 Your Saved Passwords
            </h2>
            <p className="text-gray-600 text-lg mb-6">Manage and access your secure credentials</p>
            
            {passwordArray.length > 0 && (
              <div className="max-w-md mx-auto">
                <div className="relative">
                  <input
                    type="text"
                    placeholder="🔍 Search passwords by website or username..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full p-4 pr-12 rounded-2xl border-2 border-indigo-200 focus:border-indigo-500 focus:ring-4 focus:ring-indigo-200 transition-all duration-300 text-lg bg-white/90 backdrop-blur-sm"
                  />
                  <div className="absolute right-4 top-1/2 transform -translate-y-1/2 text-indigo-400">
                    <span className="text-2xl">🔍</span>
                  </div>
                </div>
              </div>
            )}
          </div>

          {passwordArray.length === 0 && (
            <div className="text-center py-16">
              <div className="bg-white/80 backdrop-blur-lg rounded-3xl shadow-xl border border-white/20 p-12 max-w-md mx-auto">
                <div className="text-6xl mb-4">🔐</div>
                <h3 className="text-2xl font-bold text-gray-700 mb-2">No Passwords Yet</h3>
                <p className="text-gray-500">Add your first password above to get started!</p>
              </div>
            </div>
          )}

          {passwordArray.length !== 0 && (
            <div className="bg-white/80 backdrop-blur-lg rounded-3xl shadow-2xl border border-white/20 overflow-hidden">
              <table className="table-auto w-full">
                <thead className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 text-white">
                  <tr>
                    <th className="py-4 px-6 text-left font-semibold">🌐 Website</th>
                    <th className="py-4 px-6 text-left font-semibold">👤 Username</th>
                    <th className="py-4 px-6 text-left font-semibold">🔑 Password</th>
                    <th className="py-4 px-6 text-center font-semibold">⚡ Actions</th>
                  </tr>
                </thead>
                <tbody className="bg-gradient-to-b from-white to-gray-50">
                  {passwordArray
                    .filter(item =>
                      item.site.toLowerCase().includes(searchTerm.toLowerCase()) ||
                      item.username.toLowerCase().includes(searchTerm.toLowerCase())
                    )
                    .map((item, index) => {
                      return (
                      <tr key={index} className="hover:bg-gradient-to-r hover:from-blue-50 hover:to-purple-50 transition-all duration-300 border-b border-gray-100">
                        <td className="py-4 px-6">
                          <div className="flex items-center gap-3">
                            <a
                              href={item.site}
                              target="_blank"
                              className="text-blue-600 hover:text-blue-800 font-medium truncate max-w-xs hover:underline transition-colors duration-200"
                            >
                              {item.site}
                            </a>
                            <button
                              className="p-2 rounded-full hover:bg-blue-100 transition-colors duration-200 group"
                              onClick={() => copyText(item.site)}
                              title="Copy website URL"
                            >
                              <lord-icon
                                style={{
                                  width: "20px",
                                  height: "20px",
                                }}
                                src="https://cdn.lordicon.com/iykgtsbt.json"
                                trigger="hover"
                                colors="primary:#3b82f6,secondary:#1e40af"
                              ></lord-icon>
                            </button>
                          </div>
                        </td>
                        <td className="py-4 px-6">
                          <div className="flex items-center gap-3">
                            <span className="text-gray-700 font-medium truncate max-w-xs">
                              {item.username}
                            </span>
                            <button
                              className="p-2 rounded-full hover:bg-purple-100 transition-colors duration-200"
                              onClick={() => copyText(item.username)}
                              title="Copy username"
                            >
                              <lord-icon
                                style={{
                                  width: "20px",
                                  height: "20px",
                                }}
                                src="https://cdn.lordicon.com/iykgtsbt.json"
                                trigger="hover"
                                colors="primary:#8b5cf6,secondary:#6d28d9"
                              ></lord-icon>
                            </button>
                          </div>
                        </td>
                        <td className="py-4 px-6">
                          <div className="flex items-center gap-3">
                            <span className="text-gray-700 font-mono text-sm bg-gray-100 px-3 py-1 rounded-lg truncate max-w-xs">
                              {"•".repeat(Math.min(item.password.length, 12))}
                            </span>
                            <button
                              className="p-2 rounded-full hover:bg-pink-100 transition-colors duration-200"
                              onClick={() => copyText(item.password)}
                              title="Copy password"
                            >
                              <lord-icon
                                style={{
                                  width: "20px",
                                  height: "20px",
                                }}
                                src="https://cdn.lordicon.com/iykgtsbt.json"
                                trigger="hover"
                                colors="primary:#ec4899,secondary:#be185d"
                              ></lord-icon>
                            </button>
                          </div>
                        </td>
                        <td className="py-4 px-6 text-center">
                          <div className="flex justify-center gap-2">
                            <button
                              className="p-2 rounded-full hover:bg-green-100 transition-colors duration-200"
                              onClick={() => editPassword(item.id)}
                              title="Edit password"
                            >
                              <lord-icon
                                src="https://cdn.lordicon.com/gwlusjdu.json"
                                trigger="hover"
                                style={{ width: "20px", height: "20px" }}
                              ></lord-icon>
                            </button>
                            <button
                              className="p-2 rounded-full hover:bg-red-100 transition-colors duration-200"
                              onClick={() => deletePassword(item.id)}
                              title="Delete password"
                            >
                              <lord-icon
                                src="https://cdn.lordicon.com/skkahier.json"
                                trigger="hover"
                                style={{ width: "20px", height: "20px" }}
                              ></lord-icon>
                            </button>
                          </div>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Manager;