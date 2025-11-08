// EDIT: Testing Utilities for PassOP
// This file contains helper functions and mock data for testing

/* 
 * EDIT: Mock Password Data
 * Sample data for testing and development
 */
export const MOCK_PASSWORDS = [
  {
    id: '1',
    site: 'https://github.com',
    username: 'developer@example.com',
    password: 'SecurePass123!',
    createdAt: '2024-01-15T10:30:00Z',
    updatedAt: '2024-01-15T10:30:00Z'
  },
  {
    id: '2', 
    site: 'https://gmail.com',
    username: 'user@gmail.com',
    password: 'MyEmail2024#',
    createdAt: '2024-01-16T14:20:00Z',
    updatedAt: '2024-01-16T14:20:00Z'
  },
  {
    id: '3',
    site: 'https://linkedin.com',
    username: 'professional@example.com', 
    password: 'Career$trong456',
    createdAt: '2024-01-17T09:15:00Z',
    updatedAt: '2024-01-17T09:15:00Z'
  },
  {
    id: '4',
    site: 'https://netflix.com',
    username: 'moviefan@example.com',
    password: 'StreamTime789&',
    createdAt: '2024-01-18T20:45:00Z',
    updatedAt: '2024-01-18T20:45:00Z'
  },
  {
    id: '5',
    site: 'https://amazon.com',
    username: 'shopper@example.com',
    password: 'BuyStuff2024!',
    createdAt: '2024-01-19T16:30:00Z',
    updatedAt: '2024-01-19T16:30:00Z'
  }
];

/* 
 * EDIT: Test Data Generators
 * Functions to generate test data dynamically
 */

// EDIT: Generate random password entry
export const generateMockPassword = (overrides = {}) => {
  const sites = [
    'https://facebook.com',
    'https://twitter.com', 
    'https://instagram.com',
    'https://discord.com',
    'https://spotify.com',
    'https://youtube.com',
    'https://reddit.com',
    'https://stackoverflow.com'
  ];
  
  const usernames = [
    'testuser@example.com',
    'developer@test.com',
    'user123@demo.com',
    'sample@testing.com'
  ];
  
  const passwords = [
    'TestPass123!',
    'SecureDemo456#',
    'MockData789$',
    'SamplePass2024&'
  ];
  
  return {
    id: Math.random().toString(36).substr(2, 9),
    site: sites[Math.floor(Math.random() * sites.length)],
    username: usernames[Math.floor(Math.random() * usernames.length)],
    password: passwords[Math.floor(Math.random() * passwords.length)],
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
    ...overrides // EDIT: Allow custom overrides
  };
};

// EDIT: Generate multiple mock passwords
export const generateMockPasswords = (count = 5) => {
  return Array.from({ length: count }, () => generateMockPassword());
};

/* 
 * EDIT: Local Storage Mock
 * Mock localStorage for testing environments
 */
export const createLocalStorageMock = () => {
  let store = {};
  
  return {
    // EDIT: Mock getItem
    getItem: (key) => {
      return store[key] || null;
    },
    
    // EDIT: Mock setItem
    setItem: (key, value) => {
      store[key] = value.toString();
    },
    
    // EDIT: Mock removeItem
    removeItem: (key) => {
      delete store[key];
    },
    
    // EDIT: Mock clear
    clear: () => {
      store = {};
    },
    
    // EDIT: Get all stored data (for testing)
    getAllData: () => ({ ...store })
  };
};

/* 
 * EDIT: DOM Testing Utilities
 * Helper functions for DOM manipulation in tests
 */

// EDIT: Wait for element to appear
export const waitForElement = (selector, timeout = 5000) => {
  return new Promise((resolve, reject) => {
    const element = document.querySelector(selector);
    if (element) {
      resolve(element);
      return;
    }
    
    const observer = new MutationObserver(() => {
      const element = document.querySelector(selector);
      if (element) {
        observer.disconnect();
        resolve(element);
      }
    });
    
    observer.observe(document.body, {
      childList: true,
      subtree: true
    });
    
    setTimeout(() => {
      observer.disconnect();
      reject(new Error(`Element ${selector} not found within ${timeout}ms`));
    }, timeout);
  });
};

// EDIT: Simulate user input
export const simulateUserInput = (element, value) => {
  element.value = value;
  element.dispatchEvent(new Event('input', { bubbles: true }));
  element.dispatchEvent(new Event('change', { bubbles: true }));
};

// EDIT: Simulate click event
export const simulateClick = (element) => {
  element.dispatchEvent(new MouseEvent('click', {
    bubbles: true,
    cancelable: true,
    view: window
  }));
};

/* 
 * EDIT: Performance Testing Utilities
 * Functions to measure and test performance
 */

// EDIT: Measure function execution time
export const measurePerformance = async (fn, label = 'Operation') => {
  const start = performance.now();
  const result = await fn();
  const end = performance.now();
  const duration = end - start;
  
  console.log(`${label} took ${duration.toFixed(2)}ms`);
  
  return {
    result,
    duration,
    start,
    end
  };
};

// EDIT: Memory usage tracker
export const trackMemoryUsage = (label = 'Memory Check') => {
  if (performance.memory) {
    const memory = performance.memory;
    console.log(`${label}:`, {
      used: `${(memory.usedJSHeapSize / 1024 / 1024).toFixed(2)} MB`,
      total: `${(memory.totalJSHeapSize / 1024 / 1024).toFixed(2)} MB`,
      limit: `${(memory.jsHeapSizeLimit / 1024 / 1024).toFixed(2)} MB`
    });
    return memory;
  } else {
    console.warn('Performance.memory not available');
    return null;
  }
};

/* 
 * EDIT: Accessibility Testing Utilities
 * Functions to test accessibility features
 */

// EDIT: Check if element has proper ARIA labels
export const checkAriaLabels = (element) => {
  const issues = [];
  
  // Check for aria-label or aria-labelledby
  if (!element.getAttribute('aria-label') && !element.getAttribute('aria-labelledby')) {
    issues.push('Missing aria-label or aria-labelledby');
  }
  
  // Check for proper role
  if (element.tagName === 'BUTTON' && !element.getAttribute('role')) {
    // Buttons have implicit role, this is fine
  } else if (!element.getAttribute('role')) {
    issues.push('Missing role attribute');
  }
  
  return issues;
};

// EDIT: Check keyboard navigation
export const testKeyboardNavigation = (container) => {
  const focusableElements = container.querySelectorAll(
    'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
  );
  
  const issues = [];
  
  focusableElements.forEach((element, index) => {
    // Check if element is focusable
    element.focus();
    if (document.activeElement !== element) {
      issues.push(`Element ${index} is not focusable: ${element.tagName}`);
    }
  });
  
  return {
    focusableCount: focusableElements.length,
    issues
  };
};

/* 
 * EDIT: Visual Testing Utilities
 * Functions for visual regression testing
 */

// EDIT: Capture element screenshot (requires additional setup)
export const captureElementScreenshot = async (element, filename) => {
  // This would require a library like html2canvas or puppeteer
  // For now, just log the intention
  console.log(`Would capture screenshot of element for ${filename}`);
  
  // EDIT: Implement actual screenshot logic here
  // Example with html2canvas:
  // const canvas = await html2canvas(element);
  // return canvas.toDataURL();
  
  return Promise.resolve('mock-screenshot-data');
};

/* 
 * EDIT: Error Testing Utilities
 * Functions to test error handling
 */

// EDIT: Simulate storage quota exceeded error
export const simulateStorageQuotaError = () => {
  const originalSetItem = localStorage.setItem;
  localStorage.setItem = () => {
    throw new DOMException('QuotaExceededError');
  };
  
  // Return cleanup function
  return () => {
    localStorage.setItem = originalSetItem;
  };
};

// EDIT: Simulate network error
export const simulateNetworkError = () => {
  const originalFetch = window.fetch;
  window.fetch = () => {
    return Promise.reject(new TypeError('Network request failed'));
  };
  
  // Return cleanup function
  return () => {
    window.fetch = originalFetch;
  };
};

/* 
 * EDIT: Test Environment Setup
 * Functions to set up test environments
 */

// EDIT: Setup test environment with mocks
export const setupTestEnvironment = (options = {}) => {
  const {
    mockLocalStorage = true,
    mockClipboard = true,
    mockConsole = false
  } = options;
  
  const cleanupFunctions = [];
  
  // EDIT: Mock localStorage if requested
  if (mockLocalStorage) {
    const mockStorage = createLocalStorageMock();
    Object.defineProperty(window, 'localStorage', {
      value: mockStorage,
      writable: true
    });
  }
  
  // EDIT: Mock clipboard API if requested
  if (mockClipboard) {
    const mockClipboard = {
      writeText: jest.fn().mockResolvedValue(),
      readText: jest.fn().mockResolvedValue('mock-clipboard-content')
    };
    
    Object.defineProperty(navigator, 'clipboard', {
      value: mockClipboard,
      writable: true
    });
  }
  
  // EDIT: Mock console if requested (useful for testing error logging)
  if (mockConsole) {
    const originalConsole = { ...console };
    console.log = jest.fn();
    console.warn = jest.fn();
    console.error = jest.fn();
    console.info = jest.fn();
    
    cleanupFunctions.push(() => {
      Object.assign(console, originalConsole);
    });
  }
  
  // Return cleanup function
  return () => {
    cleanupFunctions.forEach(cleanup => cleanup());
  };
};

/* 
 * EDIT: Test Assertions
 * Custom assertion functions for testing
 */

// EDIT: Assert element is visible
export const assertElementVisible = (element, message = 'Element should be visible') => {
  const rect = element.getBoundingClientRect();
  const isVisible = rect.width > 0 && rect.height > 0 && 
                   window.getComputedStyle(element).visibility !== 'hidden' &&
                   window.getComputedStyle(element).display !== 'none';
  
  if (!isVisible) {
    throw new Error(message);
  }
  
  return true;
};

// EDIT: Assert password strength
export const assertPasswordStrength = (password, minLength = 8) => {
  const issues = [];
  
  if (password.length < minLength) {
    issues.push(`Password too short (${password.length} < ${minLength})`);
  }
  
  if (!/[A-Z]/.test(password)) {
    issues.push('Password missing uppercase letter');
  }
  
  if (!/[a-z]/.test(password)) {
    issues.push('Password missing lowercase letter');
  }
  
  if (!/[0-9]/.test(password)) {
    issues.push('Password missing number');
  }
  
  if (!/[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/.test(password)) {
    issues.push('Password missing special character');
  }
  
  if (issues.length > 0) {
    throw new Error(`Password strength issues: ${issues.join(', ')}`);
  }
  
  return true;
};

/* 
 * EDIT: Export all testing utilities
 * Import specific utilities as needed in test files
 */
export default {
  MOCK_PASSWORDS,
  generateMockPassword,
  generateMockPasswords,
  createLocalStorageMock,
  waitForElement,
  simulateUserInput,
  simulateClick,
  measurePerformance,
  trackMemoryUsage,
  checkAriaLabels,
  testKeyboardNavigation,
  captureElementScreenshot,
  simulateStorageQuotaError,
  simulateNetworkError,
  setupTestEnvironment,
  assertElementVisible,
  assertPasswordStrength
};