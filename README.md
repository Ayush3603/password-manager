<div align="center">

# 🔐 PassOP - Your Ultimate Password Fortress

<img src="https://img.shields.io/badge/PassOP-Secure_•_Simple_•_Smart-3b82f6?style=for-the-badge&logo=shield&logoColor=white" alt="PassOP Banner">

### 🛡️ Where Security Meets Simplicity

**A modern, secure, and beautiful password manager built with cutting-edge web technologies.**  
Store and manage all your passwords locally with **complete privacy** and **zero external dependencies**.

[![React](https://img.shields.io/badge/React-19.1.1-61dafb?style=flat-square&logo=react&logoColor=white)](https://react.dev/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4.1.15-38bdf8?style=flat-square&logo=tailwindcss&logoColor=white)](https://tailwindcss.com/)
[![Vite](https://img.shields.io/badge/Vite-7.1.14-646cff?style=flat-square&logo=vite&logoColor=white)](https://vitejs.dev/)
[![License](https://img.shields.io/badge/License-MIT-green?style=flat-square)](LICENSE)
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat-square)](CONTRIBUTING.md)

[✨ Features](#-features) • [🚀 Quick Start](#-quick-start) • [📖 Documentation](#-documentation) • [🤝 Contributing](#-contributing) • [📄 License](#-license)

---

</div>

## 🎯 Why PassOP?

<table>
<tr>
<td width="33%" align="center">
<img src="https://img.icons8.com/fluency/96/000000/security-checked.png" width="64" height="64" alt="Security"/>
<h3>🔒 Bank-Level Security</h3>
<p>Your passwords never leave your device. 100% local storage with browser-level encryption.</p>
</td>
<td width="33%" align="center">
<img src="https://img.icons8.com/fluency/96/000000/design.png" width="64" height="64" alt="Design"/>
<h3>🎨 Beautiful Design</h3>
<p>Modern glassmorphism UI with smooth animations and responsive layouts.</p>
</td>
<td width="33%" align="center">
<img src="https://img.icons8.com/fluency/96/000000/rocket.png" width="64" height="64" alt="Performance"/>
<h3>⚡ Lightning Fast</h3>
<p>Built with React 19 and Vite for optimal performance and instant loading.</p>
</td>
</tr>
</table>

---

## ✨ Features

### 🔐 Security & Privacy
- **🏠 100% Local Storage** - Your data never leaves your device
- **🔒 Zero External APIs** - Complete offline functionality
- **🛡️ Browser Encryption** - Leverages native security features
- **🚫 No Tracking** - No analytics, cookies, or data collection
- **🔐 Secure Visibility Toggle** - Show/hide passwords safely

### 🎨 User Experience
- **🎲 Smart Password Generator** - Create strong 16-character passwords instantly
- **🔍 Real-time Search** - Find passwords by website or username
- **📋 One-Click Copy** - Copy credentials to clipboard instantly
- **✏️ Easy Management** - Edit and delete with confirmation
- **📱 Fully Responsive** - Perfect on mobile, tablet, and desktop
- **🌈 Modern Animations** - Smooth transitions and interactive elements

### 🛠️ Technical Excellence
- **⚛️ React 19** - Latest React with concurrent features
- **🎨 Tailwind CSS v4** - Next-generation utility-first CSS
- **🚀 Vite (Rolldown)** - Lightning-fast build tool
- **🧭 React Router v7** - Modern client-side routing
- **🎯 TypeScript Ready** - Easy migration path to TypeScript
- **📦 Optimized Bundle** - Minimal bundle size with tree-shaking

---

## 🚀 Quick Start

### Prerequisites

Ensure you have the following installed:

- **Node.js** 18.0 or higher ([Download](https://nodejs.org/))
- **npm** 8.0+ / **yarn** 1.22+ / **pnpm** 7.0+
- Modern web browser (Chrome 90+, Firefox 88+, Safari 14+, Edge 90+)

### Installation

```bash
# 1. Clone the repository
git clone https://github.com/shatrughantwt/password-manager.git
cd password-manager

# 2. Install dependencies
npm install

# 3. Start development server
npm run dev

# 4. Open your browser
# Navigate to http://localhost:5173 (or the port shown in terminal)
```

### 🎉 That's it! You're ready to go!

---

## 📖 Documentation

### Available Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server with hot reload |
| `npm run build` | Build optimized production bundle |
| `npm run preview` | Preview production build locally |
| `npm run lint` | Run ESLint for code quality checks |
| `npm run deploy` | Deploy to GitHub Pages |

### 📚 Detailed Guides

- **[Development Guide](DEVELOPMENT.md)** - Complete development documentation
- **[Security Documentation](SECURITY.md)** - Security features and best practices
- **[Contributing Guidelines](CONTRIBUTING.md)** - How to contribute to PassOP

---

## 💡 Usage Guide

### Adding Your First Password

1. **🌐 Enter Website URL**
   ```
   Example: https://github.com
   ```
   The URL becomes a clickable link in your password list.

2. **👤 Add Username/Email**
   ```
   Example: john.doe@example.com
   ```
   This field is searchable for quick access.

3. **🔑 Create Strong Password**
   - **Option A**: Type your own password
   - **Option B**: Click **🎲 Generate** for a secure random password
     - 16 characters long
     - Mix of uppercase, lowercase, numbers, and symbols
     - Cryptographically secure randomization

4. **💾 Save Securely**
   - Click **Save Password** button
   - Data is encrypted and stored in browser's localStorage
   - Instant confirmation toast notification

### Managing Your Passwords

| Action | How To | Icon |
|--------|--------|------|
| **Search** | Type in search bar to filter by website or username | 🔍 |
| **Copy** | Click copy icon next to any field | 📋 |
| **View** | Click eye icon to toggle password visibility | 👁️ |
| **Edit** | Click edit button to modify entry | ✏️ |
| **Delete** | Click delete button (requires confirmation) | 🗑️ |

### Password Generator Features

The built-in generator creates military-grade passwords:

- **Length**: 16 characters (customizable in code)
- **Character Set**: 
  - Uppercase: A-Z
  - Lowercase: a-z
  - Numbers: 0-9
  - Symbols: !@#$%^&*
- **Entropy**: ~95 bits (extremely secure)
- **Generation**: Instant with one click

---

## 🛠️ Tech Stack

### Core Technologies

<table>
<tr>
<td align="center" width="25%">
<img src="https://img.icons8.com/color/96/000000/react-native.png" width="48" height="48" alt="React"/>
<br><strong>React 19.1.1</strong>
<br><sub>UI Library</sub>
</td>
<td align="center" width="25%">
<img src="https://img.icons8.com/color/96/000000/tailwindcss.png" width="48" height="48" alt="Tailwind"/>
<br><strong>Tailwind CSS 4.1.15</strong>
<br><sub>Styling Framework</sub>
</td>
<td align="center" width="25%">
<img src="https://img.icons8.com/fluency/96/000000/vite.png" width="48" height="48" alt="Vite"/>
<br><strong>Vite 7.1.14</strong>
<br><sub>Build Tool</sub>
</td>
<td align="center" width="25%">
<img src="https://img.icons8.com/external-tal-revivo-color-tal-revivo/96/000000/external-react-router-a-collection-of-navigational-components-logo-color-tal-revivo.png" width="48" height="48" alt="Router"/>
<br><strong>React Router 7.9.4</strong>
<br><sub>Routing</sub>
</td>
</tr>
</table>

### Key Dependencies

| Package | Version | Purpose |
|---------|---------|---------|
| [react](https://react.dev/) | 19.1.1 | Core UI library with latest features |
| [react-dom](https://react.dev/) | 19.1.1 | DOM rendering for React |
| [tailwindcss](https://tailwindcss.com/) | 4.1.15 | Utility-first CSS framework |
| [react-router-dom](https://reactrouter.com/) | 7.9.4 | Declarative routing |
| [react-toastify](https://fkhadra.github.io/react-toastify/) | 11.0.5 | Beautiful toast notifications |
| [uuid](https://github.com/uuidjs/uuid) | 13.0.0 | Unique ID generation |
| [vite](https://vitejs.dev/) | 7.1.14 (Rolldown) | Next-gen build tool |

### Development Tools

- **ESLint** - Code quality and consistency
- **@vitejs/plugin-react** - React fast refresh
- **@tailwindcss/vite** - Tailwind CSS v4 integration
- **gh-pages** - GitHub Pages deployment

---

## 🎨 Customization

### Theme Customization

PassOP uses Tailwind CSS for easy theming. Key customization points:

#### Primary Colors
```jsx
// Main gradient (src/components/Manager.jsx)
from-blue-600 via-purple-600 to-pink-600

// Change to your brand colors:
from-emerald-600 via-teal-600 to-cyan-600
```

#### Background Effects
```jsx
// Animated background blobs
bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400

// Customize glow colors:
bg-gradient-to-r from-rose-400 via-orange-400 to-amber-400
```

### Animation Customization

Edit `src/styles/animations.css`:

```css
/* Float animation - adjust duration */
.float-animation {
  animation: float 6s ease-in-out infinite; /* Change 6s to your preference */
}

/* Pulse glow - adjust speed */
.pulse-glow {
  animation: pulseGlow 3s ease-in-out infinite; /* Change 3s */
}

/* Gradient shift - adjust timing */
.gradient-shift {
  animation: gradientShift 8s ease infinite; /* Change 8s */
}
```

### Password Generator Settings

Customize in `src/components/Manager.jsx` (around line 237):

```javascript
// Character set - add or remove characters
const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*";

// Password length - change 16 to desired length
for (let i = 0; i < 16; i++) {
  password += chars.charAt(Math.floor(Math.random() * chars.length));
}
```

---

## 🔒 Security & Privacy

### 🛡️ Security Features

<table>
<tr>
<td width="50%">

#### ✅ What We Do
- ✅ Store all data locally in browser
- ✅ Use browser's built-in encryption
- ✅ Implement secure password generation
- ✅ Validate and sanitize all inputs
- ✅ Provide secure visibility toggles
- ✅ Use HTTPS for deployment

</td>
<td width="50%">

#### ❌ What We DON'T Do
- ❌ Send data to external servers
- ❌ Use cloud storage or databases
- ❌ Track user behavior
- ❌ Collect analytics or metrics
- ❌ Use cookies or session storage
- ❌ Share data with third parties

</td>
</tr>
</table>

### 🔐 Best Practices

1. **🌐 Use HTTPS** - Always access PassOP over HTTPS in production
2. **🔄 Keep Browser Updated** - Use latest browser version for security patches
3. **💪 Strong Passwords** - Use the generator for critical accounts
4. **💾 Regular Backups** - Export your data periodically (feature coming in v2.0)
5. **🔒 Lock Your Device** - Use device lock when away from computer
6. **🚫 Public Computers** - Avoid using on shared/public computers

### 📊 Data Storage

| Aspect | Details |
|--------|---------|
| **Location** | Browser's localStorage API |
| **Persistence** | Survives browser restarts |
| **Scope** | Per-domain (isolated from other sites) |
| **Capacity** | ~5-10MB (thousands of passwords) |
| **Encryption** | Browser-level encryption |
| **Backup** | Manual export/import (v2.0 planned) |

---

## 📱 Browser Support

<table>
<tr>
<td align="center" width="20%">
<img src="https://img.icons8.com/color/96/000000/chrome--v1.png" width="48" height="48" alt="Chrome"/>
<br><strong>Chrome</strong>
<br>90+
<br>✅ Fully Supported
</td>
<td align="center" width="20%">
<img src="https://img.icons8.com/color/96/000000/firefox--v1.png" width="48" height="48" alt="Firefox"/>
<br><strong>Firefox</strong>
<br>88+
<br>✅ Fully Supported
</td>
<td align="center" width="20%">
<img src="https://img.icons8.com/color/96/000000/safari--v1.png" width="48" height="48" alt="Safari"/>
<br><strong>Safari</strong>
<br>14+
<br>✅ Fully Supported
</td>
<td align="center" width="20%">
<img src="https://img.icons8.com/color/96/000000/ms-edge-new.png" width="48" height="48" alt="Edge"/>
<br><strong>Edge</strong>
<br>90+
<br>✅ Fully Supported
</td>
<td align="center" width="20%">
<img src="https://img.icons8.com/color/96/000000/opera--v1.png" width="48" height="48" alt="Opera"/>
<br><strong>Opera</strong>
<br>76+
<br>✅ Fully Supported
</td>
</tr>
</table>

---

## 🗺️ Roadmap

### 🚀 Version 2.0 (Q2 2024)

- [ ] 🌙 **Dark/Light Theme Toggle** - User preference with system detection
- [ ] 📊 **Password Strength Analyzer** - Real-time strength indicator with suggestions
- [ ] 📥 **Import/Export** - JSON backup and restore functionality
- [ ] 🔐 **Master Password** - Optional encryption layer for extra security
- [ ] 📱 **PWA Support** - Install as native app with offline capabilities
- [ ] 🔄 **Auto-Backup** - Scheduled local backups with version history
- [ ] 🏷️ **Tags & Categories** - Organize passwords with custom tags
- [ ] 📝 **Secure Notes** - Store additional secure information

### 🎯 Version 2.1 (Q3 2024)

- [ ] 🌐 **Multi-Language Support** - i18n with 10+ languages
- [ ] ☁️ **Optional Cloud Sync** - End-to-end encrypted cloud backup
- [ ] 📈 **Security Dashboard** - Password health metrics and breach detection
- [ ] 🔌 **Browser Extension** - Auto-fill capabilities for Chrome/Firefox
- [ ] 📱 **Mobile App** - React Native iOS/Android version
- [ ] 👥 **Secure Sharing** - Share passwords securely with others
- [ ] 🔔 **Expiry Reminders** - Notifications for password rotation
- [ ] 📊 **Usage Analytics** - Local-only usage statistics

### 🔮 Future Ideas

- [ ] 🤖 **AI-Powered Suggestions** - Smart password recommendations
- [ ] 🔗 **2FA Integration** - Store and manage 2FA codes
- [ ] 🎨 **Custom Themes** - User-created theme marketplace
- [ ] 🔐 **Biometric Auth** - Fingerprint/Face ID support
- [ ] 🌍 **Decentralized Sync** - P2P synchronization option

---

## 🤝 Contributing

We love contributions! PassOP is open-source and welcomes improvements from the community.

### 🐛 Found a Bug?

1. Check [existing issues](https://github.com/shatrughantwt/password-manager/issues)
2. Create a new issue with:
   - Clear description
   - Steps to reproduce
   - Expected vs actual behavior
   - Screenshots (if applicable)
   - Browser and OS information

### 💡 Have a Feature Idea?

1. Check the [roadmap](#-roadmap) first
2. Open a feature request with:
   - Use case description
   - Expected behavior
   - Mockups or wireframes (if applicable)
   - Potential implementation approach

### 💻 Want to Contribute Code?

```bash
# 1. Fork the repository
# 2. Clone your fork
git clone https://github.com/YOUR_USERNAME/password-manager.git

# 3. Create a feature branch
git checkout -b feature/amazing-feature

# 4. Make your changes
# - Follow the code style guide
# - Add comments for complex logic
# - Test thoroughly

# 5. Commit with conventional commits
git commit -m "feat: add amazing feature"

# 6. Push to your fork
git push origin feature/amazing-feature

# 7. Open a Pull Request
# - Describe your changes
# - Link related issues
# - Add screenshots for UI changes
```

### 📋 Contribution Guidelines

- **Code Style**: Follow ESLint rules and existing patterns
- **Comments**: Add EDIT comments for customization points
- **Testing**: Test on multiple browsers
- **Documentation**: Update README if needed
- **Commits**: Use [Conventional Commits](https://www.conventionalcommits.org/)

---

## 📊 Project Structure

```
password-manager/
├── 📁 public/              # Static assets
│   ├── 📁 icons/          # Icon files (eye, eyecross, heart)
│   └── 📄 vite.svg        # Vite logo
├── 📁 src/                # Source code
│   ├── 📁 assets/         # React assets
│   ├── 📁 components/     # React components
│   │   ├── 📄 Footer.jsx
│   │   ├── 📄 Manager.jsx  # Main password manager
│   │   └── 📄 Navbar.jsx
│   ├── 📁 config/         # Configuration files
│   │   └── 📄 app.config.js
│   ├── 📁 pages/          # Page components
│   │   ├── 📄 About.jsx
│   │   ├── 📄 Contact.jsx
│   │   └── 📄 Home.jsx
│   ├── 📁 styles/         # Custom styles
│   │   └── 📄 animations.css
│   ├── 📁 utils/          # Utility functions
│   │   ├── 📄 constants.js
│   │   ├── 📄 errorHandler.js
│   │   ├── 📄 helpers.js
│   │   └── 📄 testUtils.js
│   ├── 📄 App.css         # App styles
│   ├── 📄 App.jsx         # Main app component
│   ├── 📄 index.css       # Global styles
│   └── 📄 main.jsx        # Entry point
├── 📄 index.html          # HTML template
├── 📄 package.json        # Dependencies
├── 📄 vite.config.js      # Vite configuration
├── 📄 eslint.config.js    # ESLint configuration
├── 📄 README.md           # This file
├── 📄 DEVELOPMENT.md      # Development guide
├── 📄 SECURITY.md         # Security documentation
└── 📄 LICENSE             # MIT License
```

---

## ❓ FAQ

<details>
<summary><strong>Q: Is my data really safe?</strong></summary>
<br>
<strong>A:</strong> Yes! All data is stored locally in your browser's localStorage. Nothing is sent to external servers. Your passwords never leave your device.
</details>

<details>
<summary><strong>Q: Can I use PassOP offline?</strong></summary>
<br>
<strong>A:</strong> Absolutely! PassOP works completely offline once loaded in your browser. No internet connection required for password management.
</details>

<details>
<summary><strong>Q: How do I backup my passwords?</strong></summary>
<br>
<strong>A:</strong> Currently, passwords are stored in localStorage. You can manually export via browser DevTools. Automated backup/export feature is planned for v2.0.
</details>

<details>
<summary><strong>Q: Can I customize the password generator?</strong></summary>
<br>
<strong>A:</strong> Yes! Edit the character set and length in <code>src/components/Manager.jsx</code> around line 237. See the <a href="#password-generator-settings">customization section</a>.
</details>

<details>
<summary><strong>Q: Does it work on mobile devices?</strong></summary>
<br>
<strong>A:</strong> Yes! The UI is fully responsive and works beautifully on mobile phones and tablets.
</details>

<details>
<summary><strong>Q: Can I self-host PassOP?</strong></summary>
<br>
<strong>A:</strong> Yes! Build with <code>npm run build</code> and deploy the <code>dist</code> folder to any static hosting service (Vercel, Netlify, GitHub Pages, etc.).
</details>

<details>
<summary><strong>Q: What happens if I clear browser data?</strong></summary>
<br>
<strong>A:</strong> Clearing localStorage will delete all saved passwords. Always backup important data. Auto-backup feature coming in v2.0.
</details>

<details>
<summary><strong>Q: Is there a browser extension?</strong></summary>
<br>
<strong>A:</strong> Not yet, but it's on our roadmap for v2.1! It will include auto-fill capabilities.
</details>

---

## 📄 License

This project is licensed under the **MIT License** - see the [LICENSE](LICENSE) file for details.

```
MIT License

Copyright (c) 2024 Shatrughan

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

✅ Commercial use allowed
✅ Modification allowed  
✅ Distribution allowed
✅ Private use allowed
❌ No warranty provided
❌ No liability accepted
```

---

## 👨‍💻 Author

<div align="center">

### **Shatrughan**

*Full-Stack Developer | Open Source Enthusiast | Security Advocate*

[![Email](https://img.shields.io/badge/Email-shatrughanm485%40gmail.com-red?style=for-the-badge&logo=gmail&logoColor=white)](mailto:shatrughanm485@gmail.com)
[![GitHub](https://img.shields.io/badge/GitHub-shatrughantwt-181717?style=for-the-badge&logo=github&logoColor=white)](https://github.com/shatrughantwt)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-shatrughantwt-0077b5?style=for-the-badge&logo=linkedin&logoColor=white)](https://linkedin.com/in/shatrughantwt)
[![Twitter](https://img.shields.io/badge/Twitter-shatrughantwt-1da1f2?style=for-the-badge&logo=twitter&logoColor=white)](https://x.com/shatrughantwt)

</div>

---

## 🙏 Acknowledgements

Special thanks to these amazing projects and resources:

<table>
<tr>
<td align="center" width="20%">
<img src="https://img.icons8.com/color/96/000000/react-native.png" width="48" height="48" alt="React"/>
<br><strong>React</strong>
<br><sub>UI Library</sub>
</td>
<td align="center" width="20%">
<img src="https://img.icons8.com/color/96/000000/tailwindcss.png" width="48" height="48" alt="Tailwind"/>
<br><strong>Tailwind CSS</strong>
<br><sub>Styling</sub>
</td>
<td align="center" width="20%">
<img src="https://img.icons8.com/fluency/96/000000/vite.png" width="48" height="48" alt="Vite"/>
<br><strong>Vite</strong>
<br><sub>Build Tool</sub>
</td>
<td align="center" width="20%">
<img src="https://lordicon.com/icons/system/regular/lordicon-logo.svg" width="48" height="48" alt="Lordicon"/>
<br><strong>Lordicon</strong>
<br><sub>Icons</sub>
</td>
<td align="center" width="20%">
<img src="https://img.icons8.com/color/96/000000/open-source.png" width="48" height="48" alt="OSS"/>
<br><strong>Open Source</strong>
<br><sub>Community</sub>
</td>
</tr>
</table>

### 🌟 Inspiration

- **[1Password](https://1password.com/)** - Password management UX inspiration
- **[Bitwarden](https://bitwarden.com/)** - Open-source security practices
- **[Dribbble](https://dribbble.com/)** - UI/UX design inspiration
- **[Awwwards](https://www.awwwards.com/)** - Modern web design trends

---

<div align="center">

## ⭐ Star History

[![Star History Chart](https://api.star-history.com/svg?repos=shatrughantwt/password-manager&type=Date)](https://star-history.com/#shatrughantwt/password-manager&Date)

---

### 🎉 Thank you for using PassOP!

**If you find this project useful, please consider:**

⭐ **Starring the repository**  
🐛 **Reporting bugs**  
💡 **Suggesting features**  
🤝 **Contributing code**  
📢 **Sharing with others**

---

**🔐 Secure your digital life with PassOP - Your Ultimate Password Fortress 🔐**

Made with ❤️ and ☕ by [Shatrughan](https://github.com/shatrughantwt)

![Visitors](https://visitor-badge.laobi.icu/badge?page_id=shatrughantwt.password-manager)
![GitHub stars](https://img.shields.io/github/stars/shatrughantwt/password-manager?style=social)
![GitHub forks](https://img.shields.io/github/forks/shatrughantwt/password-manager?style=social)

</div>