// EDIT: Application entry point - This file initializes the React app
import { StrictMode } from 'react' // EDIT: React's StrictMode for development warnings
import { createRoot } from 'react-dom/client' // EDIT: React 18's new root API
import './index.css' // EDIT: Global CSS styles - Tailwind and custom styles
import App from './App.jsx' // EDIT: Main App component

// EDIT: Additional global imports can be added here
// Example: import './styles/animations.css'
// Example: import { Provider } from 'react-redux'
// Example: import store from './store'

/* 
 * EDIT: Root rendering - Mounts the React app to the DOM
 * - document.getElementById('root') targets the div in index.html
 * - createRoot is React 18's new rendering method
 * - StrictMode enables additional development checks and warnings
 */
createRoot(document.getElementById('root')).render(
  /* 
   * EDIT: StrictMode wrapper
   * - Enables strict mode for development
   * - Helps identify unsafe lifecycles and deprecated APIs
   * - Remove <StrictMode> wrapper if it causes issues with third-party libraries
   */
  <StrictMode>
    {/* 
     * EDIT: Main App component
     * - This is where your entire application starts
     * - You can wrap App with additional providers here:
     * Example: <Provider store={store}><App /></Provider>
     * Example: <ThemeProvider><App /></ThemeProvider>
     */}
    <App />
  </StrictMode>,
)
