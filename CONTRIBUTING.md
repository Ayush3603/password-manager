# 🤝 Contributing to PassOP

First off, thank you for considering contributing to PassOP! 🎉 It's people like you that make PassOP such a great tool.

Following these guidelines helps to communicate that you respect the time of the developers managing and developing this open source project. In return, they should reciprocate that respect in addressing your issue, assessing changes, and helping you finalize your pull requests.

---

## 📋 Table of Contents

- [Code of Conduct](#-code-of-conduct)
- [Getting Started](#-getting-started)
- [How Can I Contribute?](#-how-can-i-contribute)
- [Step-by-Step Contribution Guide](#-step-by-step-contribution-guide)
- [Development Workflow](#-development-workflow)
- [Coding Guidelines](#-coding-guidelines)
- [Commit Message Guidelines](#-commit-message-guidelines)
- [Pull Request Process](#-pull-request-process)
- [Community](#-community)

---

## 📜 Code of Conduct

This project and everyone participating in it is governed by our Code of Conduct. By participating, you are expected to uphold this code. Please report unacceptable behavior to [shatrughanm485@gmail.com](mailto:shatrughanm485@gmail.com).

### Our Pledge

We pledge to make participation in our project a harassment-free experience for everyone, regardless of:
- Age, body size, disability, ethnicity
- Gender identity and expression
- Level of experience, education
- Nationality, personal appearance, race, religion
- Sexual identity and orientation

### Our Standards

**Positive behavior includes:**
- ✅ Using welcoming and inclusive language
- ✅ Being respectful of differing viewpoints
- ✅ Gracefully accepting constructive criticism
- ✅ Focusing on what is best for the community
- ✅ Showing empathy towards others

**Unacceptable behavior includes:**
- ❌ Trolling, insulting/derogatory comments
- ❌ Public or private harassment
- ❌ Publishing others' private information
- ❌ Other conduct which could reasonably be considered inappropriate

---

## 🚀 Getting Started

### Prerequisites

Before you begin, ensure you have:

- **Git** installed ([Download Git](https://git-scm.com/downloads))
- **Node.js** 18.0+ ([Download Node.js](https://nodejs.org/))
- **npm** 8.0+ (comes with Node.js)
- **GitHub Account** ([Sign up](https://github.com/join))
- **Code Editor** (VS Code recommended)

### First Time Setup

1. **Fork the Repository**
   - Go to [PassOP Repository](https://github.com/shatrughantwt/password-manager)
   - Click the "Fork" button in the top-right corner
   - This creates your own copy of the repository

2. **Clone Your Fork**
   ```bash
   # Replace YOUR_USERNAME with your GitHub username
   git clone https://github.com/YOUR_USERNAME/password-manager.git
   cd password-manager
   ```

3. **Add Upstream Remote**
   ```bash
   # This connects your local repo to the original repository
   git remote add upstream https://github.com/shatrughantwt/password-manager.git
   
   # Verify remotes
   git remote -v
   # You should see:
   # origin    https://github.com/YOUR_USERNAME/password-manager.git (fetch)
   # origin    https://github.com/YOUR_USERNAME/password-manager.git (push)
   # upstream  https://github.com/shatrughantwt/password-manager.git (fetch)
   # upstream  https://github.com/shatrughantwt/password-manager.git (push)
   ```

4. **Install Dependencies**
   ```bash
   npm install
   ```

5. **Start Development Server**
   ```bash
   npm run dev
   ```

---

## 💡 How Can I Contribute?

### 🐛 Reporting Bugs

Before creating bug reports, please check the [issue tracker](https://github.com/shatrughantwt/password-manager/issues) to avoid duplicates.

**When filing a bug report, include:**

- **Clear title** - Descriptive and specific
- **Description** - Detailed explanation of the issue
- **Steps to reproduce** - Numbered list of exact steps
- **Expected behavior** - What should happen
- **Actual behavior** - What actually happens
- **Screenshots** - If applicable
- **Environment details**:
  - OS: [e.g., Windows 11, macOS 13, Ubuntu 22.04]
  - Browser: [e.g., Chrome 120, Firefox 121]
  - Node version: [e.g., 18.17.0]
  - npm version: [e.g., 9.6.7]

**Bug Report Template:**
```markdown
## Bug Description
A clear and concise description of the bug.

## Steps to Reproduce
1. Go to '...'
2. Click on '...'
3. Scroll down to '...'
4. See error

## Expected Behavior
What you expected to happen.

## Actual Behavior
What actually happened.

## Screenshots
If applicable, add screenshots.

## Environment
- OS: [e.g., Windows 11]
- Browser: [e.g., Chrome 120]
- Node: [e.g., 18.17.0]
- npm: [e.g., 9.6.7]

## Additional Context
Any other context about the problem.
```

### ✨ Suggesting Features

Feature suggestions are welcome! Before suggesting:

1. **Check the [roadmap](README.md#-roadmap)** - Your idea might already be planned
2. **Search existing issues** - Someone might have suggested it already
3. **Consider the scope** - Does it align with PassOP's goals?

**Feature Request Template:**
```markdown
## Feature Description
A clear and concise description of the feature.

## Problem it Solves
Explain the problem this feature would solve.

## Proposed Solution
Describe how you envision this feature working.

## Alternatives Considered
Any alternative solutions you've thought about.

## Additional Context
Mockups, examples, or any other context.

## Would you like to implement this?
- [ ] Yes, I'd like to work on this
- [ ] No, just suggesting
```

### 📝 Improving Documentation

Documentation improvements are always welcome:

- Fix typos or grammatical errors
- Clarify confusing sections
- Add missing information
- Improve code examples
- Add diagrams or screenshots

### 💻 Contributing Code

See the [Step-by-Step Guide](#-step-by-step-contribution-guide) below for detailed instructions.

---

## 📖 Step-by-Step Contribution Guide

### Complete Workflow from Start to Finish

#### Step 1: Sync Your Fork with Upstream

**Always start by syncing your fork to get the latest changes:**

```bash
# 1. Switch to main branch
git checkout main

# 2. Fetch latest changes from upstream
git fetch upstream

# 3. Merge upstream changes into your local main
git merge upstream/main

# 4. Push updates to your fork on GitHub
git push origin main
```

**Why?** This ensures you're working with the latest code and reduces merge conflicts.

#### Step 2: Create a Feature Branch

**Never work directly on the main branch. Always create a new branch:**

```bash
# Create and switch to a new branch
# Use descriptive names: feature/*, bugfix/*, docs/*, refactor/*
git checkout -b feature/add-dark-mode

# Verify you're on the new branch
git branch
# The current branch will have an asterisk (*)
```

**Branch Naming Conventions:**
- `feature/description` - New features (e.g., `feature/add-dark-mode`)
- `bugfix/description` - Bug fixes (e.g., `bugfix/fix-password-copy`)
- `docs/description` - Documentation (e.g., `docs/update-readme`)
- `refactor/description` - Code refactoring (e.g., `refactor/optimize-storage`)
- `style/description` - UI/styling changes (e.g., `style/improve-buttons`)
- `test/description` - Adding tests (e.g., `test/add-unit-tests`)

#### Step 3: Make Your Changes

**Now you can start coding:**

```bash
# 1. Open your code editor
code .

# 2. Make your changes
# - Follow the coding guidelines below
# - Add comments where necessary
# - Test your changes thoroughly

# 3. Test your changes
npm run dev
# Open http://localhost:5173 and test

# 4. Run linter
npm run lint
# Fix any linting errors
```

**Testing Checklist:**
- [ ] Feature works as expected
- [ ] No console errors
- [ ] Responsive on mobile/tablet/desktop
- [ ] Works in Chrome, Firefox, Safari, Edge
- [ ] No breaking changes to existing features
- [ ] Code follows project style

#### Step 4: Stage Your Changes

**Review and stage your changes:**

```bash
# 1. Check what files changed
git status
# Shows modified, added, and deleted files

# 2. Review your changes
git diff
# Shows line-by-line changes

# 3. Stage specific files
git add src/components/Manager.jsx
git add src/styles/animations.css

# OR stage all changes (use carefully)
git add .

# 4. Verify staged files
git status
# Staged files appear in green
```

**Pro Tips:**
- Review each file before staging
- Don't stage unnecessary files (node_modules, .env, etc.)
- Use `.gitignore` to exclude files automatically

#### Step 5: Commit Your Changes

**Write a meaningful commit message:**

```bash
# Commit with a descriptive message
git commit -m "feat: add dark mode toggle with theme persistence"

# For longer commits with description
git commit -m "feat: add dark mode toggle

- Add theme context for state management
- Implement toggle button in navbar
- Persist theme preference in localStorage
- Update all components to support dark mode
- Add smooth transition animations"
```

**Commit Message Format:**
```
<type>(<scope>): <subject>

<body>

<footer>
```

**Types:**
- `feat` - New feature
- `fix` - Bug fix
- `docs` - Documentation changes
- `style` - Code style changes (formatting, semicolons, etc.)
- `refactor` - Code refactoring
- `perf` - Performance improvements
- `test` - Adding tests
- `chore` - Maintenance tasks

**Examples:**
```bash
git commit -m "feat: add password strength indicator"
git commit -m "fix: resolve copy to clipboard issue in Firefox"
git commit -m "docs: update installation instructions"
git commit -m "style: improve button hover effects"
git commit -m "refactor: optimize password generation algorithm"
git commit -m "perf: reduce bundle size by lazy loading components"
```

#### Step 6: Push to Your Fork

**Push your branch to your GitHub fork:**

```bash
# Push your feature branch to origin (your fork)
git push origin feature/add-dark-mode

# If this is the first push, you might see:
# "The current branch has no upstream branch"
# Use the suggested command:
git push --set-upstream origin feature/add-dark-mode
```

**What happens:**
- Your changes are uploaded to your GitHub fork
- A new branch is created on GitHub
- You can now create a Pull Request

#### Step 7: Create a Pull Request

**On GitHub:**

1. **Go to your fork** on GitHub
   - Navigate to `https://github.com/YOUR_USERNAME/password-manager`

2. **You'll see a banner** saying "Compare & pull request"
   - Click the green "Compare & pull request" button

3. **Fill out the PR template:**

   ```markdown
   ## Description
   Brief description of what this PR does.
   
   ## Type of Change
   - [ ] Bug fix (non-breaking change which fixes an issue)
   - [ ] New feature (non-breaking change which adds functionality)
   - [ ] Breaking change (fix or feature that would cause existing functionality to not work as expected)
   - [ ] Documentation update
   
   ## Changes Made
   - Added dark mode toggle button in navbar
   - Created theme context for state management
   - Updated all components to support dark/light themes
   - Added theme persistence using localStorage
   
   ## Screenshots
   [Add screenshots showing before/after or new feature]
   
   ## Testing
   - [ ] Tested on Chrome
   - [ ] Tested on Firefox
   - [ ] Tested on Safari
   - [ ] Tested on mobile devices
   - [ ] No console errors
   - [ ] Follows code style guidelines
   
   ## Related Issues
   Closes #123
   Related to #456
   
   ## Additional Notes
   Any additional information or context.
   ```

4. **Click "Create pull request"**

#### Step 8: Respond to Review Feedback

**After creating the PR:**

1. **Wait for review** - Maintainers will review your code
2. **Address feedback** - Make requested changes
3. **Update your PR:**

   ```bash
   # Make the requested changes in your local branch
   # Then stage and commit
   git add .
   git commit -m "fix: address review feedback"
   
   # Push to the same branch
   git push origin feature/add-dark-mode
   # The PR will automatically update!
   ```

4. **Respond to comments** - Engage in discussion if needed

#### Step 9: After PR is Merged

**Once your PR is merged:**

```bash
# 1. Switch back to main branch
git checkout main

# 2. Pull the latest changes (including your merged PR)
git pull upstream main

# 3. Update your fork on GitHub
git push origin main

# 4. Delete your feature branch (optional but recommended)
git branch -d feature/add-dark-mode
git push origin --delete feature/add-dark-mode
```

**Congratulations! 🎉 You've successfully contributed to PassOP!**

---

## 🔄 Development Workflow

### Daily Development Routine

```bash
# Morning: Start your day
git checkout main
git pull upstream main
git checkout -b feature/my-new-feature

# During the day: Make changes
# ... code, code, code ...
git add .
git commit -m "feat: add awesome feature"

# End of day: Push your work
git push origin feature/my-new-feature

# Next day: Continue working
git checkout feature/my-new-feature
# ... more coding ...
git add .
git commit -m "feat: complete awesome feature"
git push origin feature/my-new-feature

# When ready: Create PR on GitHub
```

### Working on Multiple Features

```bash
# Feature 1
git checkout -b feature/dark-mode
# ... work on dark mode ...
git push origin feature/dark-mode

# Switch to Feature 2
git checkout main
git checkout -b feature/password-strength
# ... work on password strength ...
git push origin feature/password-strength

# Switch back to Feature 1
git checkout feature/dark-mode
# ... continue dark mode work ...
```

### Keeping Your Branch Updated

**If main branch gets updated while you're working:**

```bash
# 1. Commit your current work
git add .
git commit -m "wip: work in progress"

# 2. Fetch latest from upstream
git fetch upstream

# 3. Rebase your branch on top of latest main
git rebase upstream/main

# 4. If conflicts occur, resolve them
# Edit conflicting files, then:
git add .
git rebase --continue

# 5. Force push to your fork (rebase rewrites history)
git push origin feature/my-feature --force-with-lease
```

---

## 📝 Coding Guidelines

### JavaScript/React Standards

```javascript
// ✅ DO: Use functional components with hooks
const MyComponent = () => {
  const [state, setState] = useState(initialValue);
  return <div>Component</div>;
};

// ❌ DON'T: Use class components
class MyComponent extends React.Component {
  render() {
    return <div>Component</div>;
  }
}

// ✅ DO: Use descriptive variable names
const isPasswordVisible = true;
const handlePasswordToggle = () => {};

// ❌ DON'T: Use unclear abbreviations
const isPwdVis = true;
const hndlPwdTgl = () => {};

// ✅ DO: Add comments for complex logic
// Calculate password strength based on length and character variety
const calculateStrength = (password) => {
  // Implementation
};

// ❌ DON'T: Leave complex code uncommented
const calcStr = (p) => {
  // Complex logic without explanation
};
```

### File Organization

```javascript
// ✅ DO: Organize imports properly
// 1. External libraries
import React, { useState, useEffect } from 'react';
import { toast } from 'react-toastify';

// 2. Internal utilities
import { validatePassword } from '../utils/helpers';

// 3. Components
import Button from '../components/Button';

// 4. Styles
import './styles.css';

// ❌ DON'T: Mix import order randomly
import './styles.css';
import { validatePassword } from '../utils/helpers';
import React from 'react';
```

### Tailwind CSS Guidelines

```jsx
// ✅ DO: Group related classes logically
<div className="
  flex items-center justify-center
  p-4 m-2
  bg-white border border-gray-200
  rounded-lg shadow-md
  hover:shadow-lg transition-shadow duration-300
">

// ❌ DON'T: Random class order
<div className="hover:shadow-lg bg-white m-2 flex rounded-lg p-4 border-gray-200 items-center shadow-md border transition-shadow justify-center duration-300">

// ✅ DO: Use responsive prefixes
<div className="w-full md:w-1/2 lg:w-1/3">

// ✅ DO: Use Tailwind utilities instead of custom CSS when possible
<button className="bg-blue-500 hover:bg-blue-600 px-4 py-2 rounded">

// ❌ DON'T: Create custom CSS for simple styles
<button className="custom-button">
```

### Component Structure

```jsx
// ✅ DO: Follow this structure
import React, { useState, useEffect } from 'react';

const ComponentName = ({ prop1, prop2 }) => {
  // 1. State declarations
  const [state, setState] = useState(initialValue);
  
  // 2. Effect hooks
  useEffect(() => {
    // Side effects
  }, [dependencies]);
  
  // 3. Event handlers
  const handleEvent = () => {
    // Logic
  };
  
  // 4. Render
  return (
    <div>
      {/* JSX */}
    </div>
  );
};

export default ComponentName;
```

### Code Quality Checklist

- [ ] **No console.log** in production code (use proper logging)
- [ ] **No commented-out code** (delete it, Git remembers)
- [ ] **No TODO comments** (create issues instead)
- [ ] **Proper error handling** (try-catch where needed)
- [ ] **Meaningful variable names** (no single letters except loops)
- [ ] **DRY principle** (Don't Repeat Yourself)
- [ ] **KISS principle** (Keep It Simple, Stupid)
- [ ] **Comments explain WHY, not WHAT** (code shows what)

---

## 💬 Commit Message Guidelines

### Conventional Commits Format

```
<type>(<scope>): <subject>

<body>

<footer>
```

### Types

| Type | Description | Example |
|------|-------------|---------|
| `feat` | New feature | `feat: add password export functionality` |
| `fix` | Bug fix | `fix: resolve clipboard copy issue in Safari` |
| `docs` | Documentation | `docs: update contributing guidelines` |
| `style` | Code style/formatting | `style: format code with prettier` |
| `refactor` | Code refactoring | `refactor: simplify password validation logic` |
| `perf` | Performance improvement | `perf: optimize password search algorithm` |
| `test` | Adding tests | `test: add unit tests for password generator` |
| `chore` | Maintenance | `chore: update dependencies` |
| `ci` | CI/CD changes | `ci: add GitHub Actions workflow` |
| `build` | Build system | `build: update vite config` |
| `revert` | Revert previous commit | `revert: revert "feat: add dark mode"` |

### Scope (Optional)

Indicates which part of the codebase is affected:

- `manager` - Password manager component
- `navbar` - Navigation component
- `footer` - Footer component
- `ui` - UI components
- `utils` - Utility functions
- `config` - Configuration
- `deps` - Dependencies

### Subject

- Use imperative mood ("add" not "added" or "adds")
- Don't capitalize first letter
- No period at the end
- Maximum 50 characters

### Body (Optional)

- Explain WHAT and WHY, not HOW
- Wrap at 72 characters
- Separate from subject with blank line

### Footer (Optional)

- Reference issues: `Closes #123`, `Fixes #456`
- Breaking changes: `BREAKING CHANGE: description`

### Examples

```bash
# Simple commit
git commit -m "feat: add password strength indicator"

# With scope
git commit -m "fix(manager): resolve password copy issue"

# With body
git commit -m "feat: add dark mode support

- Add theme context for state management
- Implement toggle in navbar
- Persist preference in localStorage
- Update all components for dark mode"

# With footer
git commit -m "fix: resolve search filter bug

The search was case-sensitive causing issues.
Changed to case-insensitive comparison.

Closes #42"

# Breaking change
git commit -m "refactor!: change localStorage structure

BREAKING CHANGE: Password data structure changed.
Users need to re-import their passwords."
```

---

## 🔍 Pull Request Process

### Before Creating a PR

- [ ] **Code is tested** - Manually test all changes
- [ ] **Linter passes** - Run `npm run lint`
- [ ] **No console errors** - Check browser console
- [ ] **Responsive design** - Test on different screen sizes
- [ ] **Browser compatibility** - Test on Chrome, Firefox, Safari
- [ ] **Documentation updated** - Update README if needed
- [ ] **Commits are clean** - Follow commit guidelines

### PR Title Format

Use the same format as commit messages:

```
feat: add password export functionality
fix: resolve clipboard issue in Safari
docs: update installation instructions
```

### PR Description Template

```markdown
## 📝 Description
Brief description of changes made.

## 🔧 Type of Change
- [ ] 🐛 Bug fix (non-breaking change which fixes an issue)
- [ ] ✨ New feature (non-breaking change which adds functionality)
- [ ] 💥 Breaking change (fix or feature that would cause existing functionality to not work as expected)
- [ ] 📚 Documentation update
- [ ] 🎨 Style/UI update
- [ ] ♻️ Code refactoring
- [ ] ⚡ Performance improvement

## 🎯 Changes Made
- Change 1
- Change 2
- Change 3

## 📸 Screenshots
[If applicable, add screenshots showing before/after or new feature]

## ✅ Testing Checklist
- [ ] Tested on Chrome
- [ ] Tested on Firefox
- [ ] Tested on Safari
- [ ] Tested on Edge
- [ ] Tested on mobile devices
- [ ] No console errors
- [ ] Linter passes
- [ ] Follows code style guidelines

## 🔗 Related Issues
Closes #123
Related to #456

## 📋 Additional Notes
Any additional information or context.
```

### Review Process

1. **Automated Checks** - CI/CD runs automatically
2. **Code Review** - Maintainers review your code
3. **Feedback** - You may receive change requests
4. **Updates** - Make requested changes
5. **Approval** - Once approved, PR will be merged
6. **Merge** - Maintainer merges your PR

### After PR is Merged

```bash
# Sync your fork
git checkout main
git pull upstream main
git push origin main

# Delete feature branch
git branch -d feature/my-feature
git push origin --delete feature/my-feature

# Celebrate! 🎉
```

---

## 🌟 Community

### Communication Channels

- **GitHub Issues** - Bug reports and feature requests
- **GitHub Discussions** - General discussions and questions
- **Pull Requests** - Code contributions and reviews
- **Email** - [shatrughanm485@gmail.com](mailto:shatrughanm485@gmail.com)

### Getting Help

**Stuck? Here's how to get help:**

1. **Check Documentation** - README, DEVELOPMENT.md, SECURITY.md
2. **Search Issues** - Someone might have had the same problem
3. **Ask in Discussions** - Community can help
4. **Create an Issue** - Describe your problem clearly

### Recognition

Contributors will be:
- Listed in CONTRIBUTORS.md
- Mentioned in release notes
- Credited in the project

---

## 🎓 Learning Resources

### Git & GitHub
- [Git Documentation](https://git-scm.com/doc)
- [GitHub Guides](https://guides.github.com/)
- [Git Branching Tutorial](https://learngitbranching.js.org/)
- [Conventional Commits](https://www.conventionalcommits.org/)

### React
- [React Documentation](https://react.dev/)
- [React Hooks](https://react.dev/reference/react)
- [React Best Practices](https://react.dev/learn)

### Tailwind CSS
- [Tailwind Documentation](https://tailwindcss.com/docs)
- [Tailwind UI Components](https://tailwindui.com/)

### JavaScript
- [MDN JavaScript](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
- [JavaScript.info](https://javascript.info/)

---

## 📜 License

By contributing to PassOP, you agree that your contributions will be licensed under the MIT License.

---

## 🙏 Thank You!

Thank you for taking the time to contribute to PassOP! Every contribution, no matter how small, makes a difference.

**Happy Contributing! 🚀**

---

<div align="center">

**Questions?** Feel free to reach out!

[![Email](https://img.shields.io/badge/Email-shatrughanm485%40gmail.com-red?style=flat-square&logo=gmail&logoColor=white)](mailto:shatrughanm485@gmail.com)
[![GitHub](https://img.shields.io/badge/GitHub-shatrughantwt-181717?style=flat-square&logo=github&logoColor=white)](https://github.com/shatrughantwt)

Made with ❤️ by the PassOP community

</div>