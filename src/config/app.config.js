// EDIT: Application Configuration - Central configuration for PassOP
// This file contains all configurable settings for the application

/* 
 * EDIT: Application Metadata
 * Change these values to customize app information
 */
export const APP_CONFIG = {
  // EDIT: Basic app information
  NAME: 'PassOP',
  FULL_NAME: 'PassOP - Ultimate Password Manager',
  VERSION: '1.0.0',
  DESCRIPTION: 'Your Ultimate Password Fortress - Where Security Meets Simplicity',

  // EDIT: App URLs and links
  URLS: {
    HOMEPAGE: 'https://your-domain.com',
    GITHUB: 'https://github.com/your-username/passop',
    DEMO: 'https://your-demo-url.com',
    DOCS: 'https://your-docs-url.com'
  },

  // EDIT: Author information
  AUTHOR: {
    NAME: 'Shatrughan',
    EMAIL: 'shatrughanm485@gmail.com',
    GITHUB: 'https://github.com/shatrughantwt',
    LINKEDIN: 'https://linkedin.com/in/shatrughantwt',
    TWITTER: 'https://x.com/shatrughantwt'
  }
};

/* 
 * EDIT: Feature Flags
 * Enable/disable features throughout the app
 */
export const FEATURES = {
  // EDIT: Core features - set to false to disable
  PASSWORD_GENERATOR: true,
  SEARCH_FUNCTIONALITY: true,
  EXPORT_IMPORT: false, // Coming in v2.0
  DARK_MODE: false, // Coming in v2.0

  // EDIT: UI features
  ANIMATIONS: true,
  SOUND_EFFECTS: false,
  KEYBOARD_SHORTCUTS: false,

  // EDIT: Advanced features
  PASSWORD_STRENGTH_METER: false,
  AUTO_BACKUP: false,
  MASTER_PASSWORD: false
};

/* 
 * EDIT: UI Theme Configuration
 * Customize the visual appearance of the app
 */
export const THEME_CONFIG = {
  // EDIT: Color scheme - modify these hex values
  COLORS: {
    PRIMARY: '#3b82f6',      // Blue
    SECONDARY: '#8b5cf6',    // Purple  
    ACCENT: '#ec4899',       // Pink
    SUCCESS: '#10b981',      // Green
    WARNING: '#f59e0b',      // Amber
    ERROR: '#ef4444',        // Red

    // EDIT: Neutral colors
    GRAY_50: '#f9fafb',
    GRAY_100: '#f3f4f6',
    GRAY_500: '#6b7280',
    GRAY_800: '#1f2937',
    GRAY_900: '#111827'
  },

  // EDIT: Typography settings
  FONTS: {
    PRIMARY: 'Inter, -apple-system, BlinkMacSystemFont, sans-serif',
    MONO: 'JetBrains Mono, Consolas, Monaco, monospace'
  },

  // EDIT: Animation settings
  ANIMATIONS: {
    DURATION_FAST: '0.15s',
    DURATION_NORMAL: '0.3s',
    DURATION_SLOW: '0.5s',
    EASING: 'cubic-bezier(0.4, 0, 0.2, 1)'
  },

  // EDIT: Layout settings
  LAYOUT: {
    MAX_WIDTH: '1200px',
    CONTAINER_PADDING: '1rem',
    BORDER_RADIUS: '0.75rem',
    SHADOW: '0 10px 15px -3px rgba(0, 0, 0, 0.1)'
  }
};

/* 
 * EDIT: Performance Configuration
 * Settings that affect app performance
 */
export const PERFORMANCE_CONFIG = {
  // EDIT: Debounce delays in milliseconds
  SEARCH_DEBOUNCE: 300,
  INPUT_DEBOUNCE: 150,

  // EDIT: Animation performance
  REDUCE_MOTION: false, // Auto-detect user preference
  LAZY_LOAD_IMAGES: true,

  // EDIT: Storage limits
  MAX_PASSWORDS: 1000,
  MAX_STORAGE_SIZE: 5 * 1024 * 1024, // 5MB

  // EDIT: Cache settings
  CACHE_DURATION: 24 * 60 * 60 * 1000, // 24 hours
  CLEAR_CACHE_ON_UPDATE: true
};

/* 
 * EDIT: Security Configuration
 * Security-related settings and policies
 */
export const SECURITY_CONFIG = {
  // EDIT: Password generation defaults
  PASSWORD_GENERATION: {
    DEFAULT_LENGTH: 16,
    MIN_LENGTH: 8,
    MAX_LENGTH: 128,
    INCLUDE_UPPERCASE: true,
    INCLUDE_LOWERCASE: true,
    INCLUDE_NUMBERS: true,
    INCLUDE_SYMBOLS: true,
    EXCLUDE_AMBIGUOUS: false // Exclude 0, O, l, I, etc.
  },

  // EDIT: Input validation
  VALIDATION: {
    MAX_FIELD_LENGTH: 500,
    SANITIZE_INPUT: true,
    PREVENT_XSS: true
  },

  // EDIT: Storage security
  STORAGE: {
    ENCRYPT_DATA: false, // Future feature
    CLEAR_ON_CLOSE: false,
    SESSION_TIMEOUT: 0 // 0 = no timeout
  }
};

/* 
 * EDIT: Development Configuration
 * Settings for development environment
 */
export const DEV_CONFIG = {
  // EDIT: Debug settings
  ENABLE_LOGGING: process.env.NODE_ENV === 'development',
  LOG_LEVEL: 'info', // 'debug', 'info', 'warn', 'error'

  // EDIT: Development tools
  SHOW_PERFORMANCE_METRICS: false,
  ENABLE_REACT_DEVTOOLS: true,

  // EDIT: Mock data for testing
  USE_MOCK_DATA: false,
  MOCK_PASSWORD_COUNT: 5
};

/* 
 * EDIT: API Configuration (for future features)
 * Settings for external API integrations
 */
export const API_CONFIG = {
  // EDIT: Base URLs
  BASE_URL: process.env.VITE_API_URL || 'https://api.passop.com',
  TIMEOUT: 10000, // 10 seconds

  // EDIT: Endpoints (for future cloud features)
  ENDPOINTS: {
    SYNC: '/api/sync',
    BACKUP: '/api/backup',
    RESTORE: '/api/restore'
  },

  // EDIT: Request settings
  RETRY_ATTEMPTS: 3,
  RETRY_DELAY: 1000
};

/* 
 * EDIT: Analytics Configuration (privacy-focused)
 * Settings for optional usage analytics
 */
export const ANALYTICS_CONFIG = {
  // EDIT: Enable/disable analytics
  ENABLED: false,

  // EDIT: What to track (all privacy-focused, no personal data)
  TRACK_EVENTS: {
    PASSWORD_GENERATED: false,
    PASSWORD_SAVED: false,
    SEARCH_USED: false,
    FEATURE_USED: false
  },

  // EDIT: Privacy settings
  ANONYMIZE_DATA: true,
  RESPECT_DNT: true, // Respect Do Not Track header
  LOCAL_ONLY: true // Keep analytics local, don't send to servers
};

/* 
 * EDIT: Accessibility Configuration
 * Settings to improve accessibility
 */
export const A11Y_CONFIG = {
  // EDIT: Screen reader support
  ANNOUNCE_ACTIONS: true,
  DESCRIPTIVE_LABELS: true,

  // EDIT: Keyboard navigation
  KEYBOARD_SHORTCUTS: {
    SAVE_PASSWORD: 'Ctrl+S',
    GENERATE_PASSWORD: 'Ctrl+G',
    SEARCH: 'Ctrl+F',
    COPY_PASSWORD: 'Ctrl+C'
  },

  // EDIT: Visual accessibility
  HIGH_CONTRAST_MODE: false,
  LARGE_TEXT_MODE: false,
  REDUCE_MOTION: false // Auto-detect user preference
};

/* 
 * EDIT: Export all configurations
 * Import specific configs as needed: import { APP_CONFIG, THEME_CONFIG } from './config/app.config.js'
 */
export default {
  APP_CONFIG,
  FEATURES,
  THEME_CONFIG,
  PERFORMANCE_CONFIG,
  SECURITY_CONFIG,
  DEV_CONFIG,
  API_CONFIG,
  ANALYTICS_CONFIG,
  A11Y_CONFIG
};