// EDIT: Error Handling Utilities for PassOP
// This file contains comprehensive error handling and logging functions

import { toast } from 'react-toastify';
import { DEV_CONFIG } from '../config/app.config.js';

/* 
 * EDIT: Error Types Enumeration
 * Define different types of errors for better categorization
 */
export const ERROR_TYPES = {
  VALIDATION: 'VALIDATION_ERROR',
  STORAGE: 'STORAGE_ERROR',
  NETWORK: 'NETWORK_ERROR',
  PERMISSION: 'PERMISSION_ERROR',
  UNKNOWN: 'UNKNOWN_ERROR'
};

/* 
 * EDIT: Error Severity Levels
 * Categorize errors by their impact level
 */
export const ERROR_SEVERITY = {
  LOW: 'low',       // Minor issues, app continues normally
  MEDIUM: 'medium', // Some functionality affected
  HIGH: 'high',     // Major functionality broken
  CRITICAL: 'critical' // App unusable
};

/* 
 * EDIT: Custom Error Class
 * Enhanced error object with additional context
 */
export class PassOPError extends Error {
  constructor(message, type = ERROR_TYPES.UNKNOWN, severity = ERROR_SEVERITY.MEDIUM, context = {}) {
    super(message);
    this.name = 'PassOPError';
    this.type = type;
    this.severity = severity;
    this.context = context;
    this.timestamp = new Date().toISOString();
    
    // EDIT: Capture stack trace in development
    if (DEV_CONFIG.ENABLE_LOGGING && Error.captureStackTrace) {
      Error.captureStackTrace(this, PassOPError);
    }
  }
}

/* 
 * EDIT: Error Logger
 * Centralized logging with different levels
 */
export const errorLogger = {
  // EDIT: Log debug information (development only)
  debug: (message, data = {}) => {
    if (DEV_CONFIG.ENABLE_LOGGING && DEV_CONFIG.LOG_LEVEL === 'debug') {
      console.debug('[PassOP Debug]', message, data);
    }
  },
  
  // EDIT: Log general information
  info: (message, data = {}) => {
    if (DEV_CONFIG.ENABLE_LOGGING && ['debug', 'info'].includes(DEV_CONFIG.LOG_LEVEL)) {
      console.info('[PassOP Info]', message, data);
    }
  },
  
  // EDIT: Log warnings
  warn: (message, data = {}) => {
    if (DEV_CONFIG.ENABLE_LOGGING && ['debug', 'info', 'warn'].includes(DEV_CONFIG.LOG_LEVEL)) {
      console.warn('[PassOP Warning]', message, data);
    }
  },
  
  // EDIT: Log errors (always logged)
  error: (message, error = null, data = {}) => {
    console.error('[PassOP Error]', message, error, data);
    
    // EDIT: In development, also log stack trace
    if (DEV_CONFIG.ENABLE_LOGGING && error && error.stack) {
      console.error('Stack trace:', error.stack);
    }
  }
};

/* 
 * EDIT: Storage Error Handler
 * Handle localStorage and storage-related errors
 */
export const handleStorageError = (error, operation = 'unknown') => {
  let userMessage = 'Storage operation failed';
  let errorType = ERROR_TYPES.STORAGE;
  let severity = ERROR_SEVERITY.HIGH;
  
  // EDIT: Specific error handling based on error type
  if (error.name === 'QuotaExceededError') {
    userMessage = 'Storage quota exceeded. Please clear some data or use a different browser.';
    severity = ERROR_SEVERITY.CRITICAL;
  } else if (error.name === 'SecurityError') {
    userMessage = 'Storage access denied. Please check your browser settings.';
    errorType = ERROR_TYPES.PERMISSION;
    severity = ERROR_SEVERITY.CRITICAL;
  } else if (error.name === 'InvalidStateError') {
    userMessage = 'Storage is not available. Please try refreshing the page.';
    severity = ERROR_SEVERITY.HIGH;
  }
  
  // EDIT: Log the error
  errorLogger.error(`Storage error during ${operation}`, error, {
    operation,
    errorType,
    severity
  });
  
  // EDIT: Show user-friendly message
  toast.error(userMessage, {
    position: 'top-right',
    autoClose: 8000, // Longer for critical errors
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true
  });
  
  return new PassOPError(userMessage, errorType, severity, { operation, originalError: error });
};

/* 
 * EDIT: Validation Error Handler
 * Handle form validation and input errors
 */
export const handleValidationError = (field, message, value = null) => {
  const errorMessage = `Validation failed for ${field}: ${message}`;
  
  // EDIT: Log validation error
  errorLogger.warn(errorMessage, { field, value, message });
  
  // EDIT: Show user-friendly validation message
  toast.warn(message, {
    position: 'top-right',
    autoClose: 4000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true
  });
  
  return new PassOPError(message, ERROR_TYPES.VALIDATION, ERROR_SEVERITY.LOW, { 
    field, 
    value,
    originalMessage: message 
  });
};

/* 
 * EDIT: Network Error Handler
 * Handle network and API-related errors (for future features)
 */
export const handleNetworkError = (error, endpoint = 'unknown') => {
  let userMessage = 'Network request failed';
  let severity = ERROR_SEVERITY.MEDIUM;
  
  // EDIT: Specific network error handling
  if (error.name === 'TypeError' && error.message.includes('fetch')) {
    userMessage = 'Unable to connect to server. Please check your internet connection.';
    severity = ERROR_SEVERITY.HIGH;
  } else if (error.status === 404) {
    userMessage = 'Requested resource not found.';
    severity = ERROR_SEVERITY.MEDIUM;
  } else if (error.status === 500) {
    userMessage = 'Server error occurred. Please try again later.';
    severity = ERROR_SEVERITY.HIGH;
  } else if (error.status === 403) {
    userMessage = 'Access denied. Please check your permissions.';
    severity = ERROR_SEVERITY.HIGH;
  }
  
  // EDIT: Log network error
  errorLogger.error(`Network error for endpoint ${endpoint}`, error, {
    endpoint,
    status: error.status,
    severity
  });
  
  // EDIT: Show user-friendly message
  toast.error(userMessage, {
    position: 'top-right',
    autoClose: 6000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true
  });
  
  return new PassOPError(userMessage, ERROR_TYPES.NETWORK, severity, { 
    endpoint, 
    status: error.status,
    originalError: error 
  });
};

/* 
 * EDIT: Generic Error Handler
 * Handle any unexpected errors with fallback behavior
 */
export const handleGenericError = (error, context = 'Unknown operation') => {
  const errorMessage = error.message || 'An unexpected error occurred';
  
  // EDIT: Log generic error
  errorLogger.error(`Generic error in ${context}`, error, {
    context,
    errorName: error.name,
    errorMessage
  });
  
  // EDIT: Show generic error message
  toast.error('Something went wrong. Please try again.', {
    position: 'top-right',
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true
  });
  
  return new PassOPError(errorMessage, ERROR_TYPES.UNKNOWN, ERROR_SEVERITY.MEDIUM, { 
    context,
    originalError: error 
  });
};

/* 
 * EDIT: Success Message Handler
 * Centralized success message display
 */
export const showSuccessMessage = (message, options = {}) => {
  // EDIT: Log success action
  errorLogger.info(`Success: ${message}`);
  
  // EDIT: Show success toast
  toast.success(message, {
    position: 'top-right',
    autoClose: 3000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    ...options // EDIT: Allow custom options override
  });
};

/* 
 * EDIT: Info Message Handler
 * Display informational messages to users
 */
export const showInfoMessage = (message, options = {}) => {
  // EDIT: Log info message
  errorLogger.info(`Info: ${message}`);
  
  // EDIT: Show info toast
  toast.info(message, {
    position: 'top-right',
    autoClose: 4000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    ...options // EDIT: Allow custom options override
  });
};

/* 
 * EDIT: Error Boundary Helper
 * Helper function for React Error Boundaries
 */
export const logErrorBoundaryError = (error, errorInfo) => {
  errorLogger.error('React Error Boundary caught an error', error, {
    componentStack: errorInfo.componentStack,
    errorBoundary: true
  });
  
  // EDIT: In production, you might want to send this to an error reporting service
  if (process.env.NODE_ENV === 'production') {
    // Example: sendToErrorReportingService(error, errorInfo);
  }
};

/* 
 * EDIT: Performance Error Handler
 * Handle performance-related issues
 */
export const handlePerformanceError = (operation, duration, threshold = 1000) => {
  if (duration > threshold) {
    const message = `Performance warning: ${operation} took ${duration}ms (threshold: ${threshold}ms)`;
    
    errorLogger.warn(message, {
      operation,
      duration,
      threshold,
      performance: true
    });
    
    // EDIT: In development, show performance warnings
    if (DEV_CONFIG.SHOW_PERFORMANCE_METRICS) {
      console.warn(`⚠️ ${message}`);
    }
  }
};

/* 
 * EDIT: Clipboard Error Handler
 * Handle clipboard API errors
 */
export const handleClipboardError = (error) => {
  let userMessage = 'Failed to copy to clipboard';
  
  // EDIT: Specific clipboard error handling
  if (error.name === 'NotAllowedError') {
    userMessage = 'Clipboard access denied. Please copy manually or check browser permissions.';
  } else if (error.name === 'NotSupportedError') {
    userMessage = 'Clipboard not supported in this browser. Please copy manually.';
  }
  
  errorLogger.warn('Clipboard operation failed', error);
  
  toast.warn(userMessage, {
    position: 'top-right',
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true
  });
  
  return new PassOPError(userMessage, ERROR_TYPES.PERMISSION, ERROR_SEVERITY.LOW, { 
    originalError: error 
  });
};

/* 
 * EDIT: Export all error handling utilities
 * Import specific handlers as needed throughout the app
 */
export default {
  PassOPError,
  ERROR_TYPES,
  ERROR_SEVERITY,
  errorLogger,
  handleStorageError,
  handleValidationError,
  handleNetworkError,
  handleGenericError,
  showSuccessMessage,
  showInfoMessage,
  logErrorBoundaryError,
  handlePerformanceError,
  handleClipboardError
};