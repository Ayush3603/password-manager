// EDIT: Application constants and configuration
// This file contains all configurable values used throughout the app

/* 
 * EDIT: Password Generation Configuration
 * Modify these values to change password generation behavior
 */
export const PASSWORD_CONFIG = {
  // EDIT: Default password length - change number for different length
  DEFAULT_LENGTH: 16,
  
  // EDIT: Minimum password length - prevents too short passwords
  MIN_LENGTH: 8,
  
  // EDIT: Maximum password length - prevents too long passwords
  MAX_LENGTH: 128,
  
  // EDIT: Character sets for password generation
  CHARACTERS: {
    UPPERCASE: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ',
    LOWERCASE: 'abcdefghijklmnopqrstuvwxyz', 
    NUMBERS: '0123456789',
    SYMBOLS: '!@#$%^&*()_+-=[]{}|;:,.<>?'
  }
};

/* 
 * EDIT: Form Validation Rules
 * Change these values to modify input validation
 */
export const VALIDATION = {
  // EDIT: Minimum field lengths - increase for stricter validation
  MIN_SITE_LENGTH: 3,
  MIN_USERNAME_LENGTH: 3,
  MIN_PASSWORD_LENGTH: 3,
  
  // EDIT: Maximum field lengths - prevent overly long inputs
  MAX_SITE_LENGTH: 200,
  MAX_USERNAME_LENGTH: 100,
  MAX_PASSWORD_LENGTH: 200
};

/* 
 * EDIT: Toast Notification Settings
 * Customize notification appearance and behavior
 */
export const TOAST_CONFIG = {
  // EDIT: Default position - change to move notifications
  POSITION: 'top-right',
  
  // EDIT: Auto close timing in milliseconds
  AUTO_CLOSE: 5000,
  
  // EDIT: Theme options: 'light', 'dark', 'colored'
  THEME: 'dark'
};

/* 
 * EDIT: Local Storage Keys
 * Change these if you need different storage keys
 */
export const STORAGE_KEYS = {
  PASSWORDS: 'passwords',
  SETTINGS: 'passop_settings',
  THEME: 'passop_theme'
};