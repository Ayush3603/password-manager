// EDIT: Home page component - Main landing page for the password manager
import React from 'react'
import Manager from '../components/Manager' // EDIT: Import the main Manager component

const Home = () => {
  return (
    /* 
     * EDIT: Home page container - clean wrapper without background
     * - Manager component has its own background styling
     * - Add additional components here if needed
     */
    <div>
      {/* 
       * EDIT: Main password manager component
       * - This renders the complete password management interface
       * - All functionality is contained within the Manager component
       * - You can add additional components here like announcements, help sections, etc.
       */}
      <Manager/>
      
      {/* EDIT: Add additional home page content here */}
      {/* Example: <WelcomeBanner />, <FeatureHighlights />, <UserStats /> */}
    </div>
  )
}

export default Home
