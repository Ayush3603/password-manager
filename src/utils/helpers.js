// EDIT: Utility helper functions for PassOP
// This file contains reusable functions used throughout the application

import { PASSWORD_CONFIG, VALIDATION } from './constants.js';

/* 
 * EDIT: Password Generation Function
 * Generates secure passwords with customizable options
 * 
 * @param {number} length - Password length (default from config)
 * @param {object} options - Character set options
 * @returns {string} Generated password
 */
export const generatePassword = (
  length = PASSWORD_CONFIG.DEFAULT_LENGTH,
  options = {
    uppercase: true,
    lowercase: true, 
    numbers: true,
    symbols: true
  }
) => {
  // EDIT: Build character set based on options
  let charset = '';
  
  if (options.uppercase) charset += PASSWORD_CONFIG.CHARACTERS.UPPERCASE;
  if (options.lowercase) charset += PASSWORD_CONFIG.CHARACTERS.LOWERCASE;
  if (options.numbers) charset += PASSWORD_CONFIG.CHARACTERS.NUMBERS;
  if (options.symbols) charset += PASSWORD_CONFIG.CHARACTERS.SYMBOLS;
  
  // EDIT: Ensure at least one character set is selected
  if (charset === '') {
    charset = PASSWORD_CONFIG.CHARACTERS.LOWERCASE; // Fallback
  }
  
  // EDIT: Generate password
  let password = '';
  for (let i = 0; i < length; i++) {
    password += charset.charAt(Math.floor(Math.random() * charset.length));
  }
  
  return password;
};

/* 
 * EDIT: Form Validation Functions
 * Validates user input according to defined rules
 */

// EDIT: Validate website URL
export const validateSite = (site) => {
  if (!site || site.length < VALIDATION.MIN_SITE_LENGTH) {
    return `Site must be at least ${VALIDATION.MIN_SITE_LENGTH} characters`;
  }
  if (site.length > VALIDATION.MAX_SITE_LENGTH) {
    return `Site must be less than ${VALIDATION.MAX_SITE_LENGTH} characters`;
  }
  return null; // Valid
};

// EDIT: Validate username
export const validateUsername = (username) => {
  if (!username || username.length < VALIDATION.MIN_USERNAME_LENGTH) {
    return `Username must be at least ${VALIDATION.MIN_USERNAME_LENGTH} characters`;
  }
  if (username.length > VALIDATION.MAX_USERNAME_LENGTH) {
    return `Username must be less than ${VALIDATION.MAX_USERNAME_LENGTH} characters`;
  }
  return null; // Valid
};