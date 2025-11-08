// EDIT: Main App component - Root component that sets up routing and layout
import './App.css' // EDIT: Global styles - add custom CSS imports here
import Navbar from './components/Navbar' // EDIT: Navigation component
import Home from './pages/Home' // EDIT: Home page with password manager
import About from './pages/About' // EDIT: About page with project information
import Contact from './pages/Contact' // EDIT: Contact page with developer info
import Footer from './components/Footer' // EDIT: Footer component
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"; // EDIT: React Router for navigation

function App() {
  // EDIT: Add global state management here if needed
  // Example: const [theme, setTheme] = useState('light');
  // Example: const [user, setUser] = useState(null);

  return (
    <>
    {/* 
     * EDIT: Router setup - Handles all page navigation
     * - BrowserRouter enables client-side routing
     * - Add basename prop if deploying to subdirectory: <Router basename="/myapp">
     * - Switch to HashRouter if needed for GitHub Pages deployment
     */}
    <Router>
      {/* 
       * EDIT: Navigation bar - Always visible at top
       * - Appears on all pages
       * - Contains logo and navigation links
       * - You can make it conditional: {showNavbar && <Navbar/>}
       */}
      <Navbar/>
      
      {/* 
       * EDIT: Main content area - Page routing
       * - Add new routes here for additional pages
       * - Example: <Route path="/settings" element={<Settings/>} />
       * - Example: <Route path="/help" element={<Help/>} />
       * - Add 404 page: <Route path="*" element={<NotFound/>} />
       */}
      <Routes>
        {/* EDIT: Home route - Main password manager page */}
        <Route path="/" element={<Home/>} />
        
        {/* EDIT: About route - Project information and features */}
        <Route path="/about" element={<About/>} />
        
        {/* EDIT: Contact route - Developer contact information */}
        <Route path="/contact" element={<Contact/>} />
        
        {/* EDIT: Add more routes here */}
        {/* <Route path="/settings" element={<Settings/>} /> */}
        {/* <Route path="/help" element={<Help/>} /> */}
        {/* <Route path="/privacy" element={<Privacy/>} /> */}
        {/* <Route path="*" element={<NotFound/>} /> */}
      </Routes>
      
      {/* 
       * EDIT: Footer - Always visible at bottom
       * - Appears on all pages
       * - Contains copyright and additional links
       * - You can make it conditional: {showFooter && <Footer/>}
       */}
        <Footer/>
    </Router>
    </>
  )
}

export default App
