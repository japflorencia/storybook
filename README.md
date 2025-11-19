# 🎨 japflorencia Component Library

A comprehensive Vue 3 component library showcasing reusable, responsive, and beautifully designed UI components built with modern web standards.

## 📋 Table of Contents

- [Overview](#overview)
- [Features](#features)
- [Components](#components)
- [Getting Started](#getting-started)
- [Development](#development)
- [Contributing](#contributing)
- [License](#license)

## 🌟 Overview

This project is a **Storybook-powered component library** featuring a curated collection of production-ready Vue 3 components. It serves as both a living documentation and development environment for building consistent, accessible, and maintainable user interfaces.

## ✨ Features

- **Vue 3 Components** - Built with the latest Vue 3 composition API
- **Storybook Integration** - Interactive component showcase with hot reloading
- **Responsive Design** - Mobile-first, fully responsive components
- **Accessible** - WCAG-compliant components with proper ARIA attributes
- **Icon Library** - Integrated RPG Awesome icon library with 100+ gaming-themed icons
- **CSS Modules** - Scoped styling for component isolation
- **Documentation** - Auto-generated docs with Storybook Docs addon
- **Dark Mode Ready** - Components styled for multiple color schemes

## 📦 Components

### Core Components

- **Button** - Primary, secondary, and tertiary button variants with various sizes
- **Header** - Responsive header component with navigation and user info
- **Page** - Page layout wrapper component

### UI Components

- **Icon** - Flexible icon component with RPG Awesome integration (100+ icons)
- **Badge** - Versatile badge component for labels and status indicators
- **Card** - Container component for organized content display
- **Alert** - Notification component for alerts and messages
- **Input** - Text input component with validation states

## 🚀 Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn

### Installation

```bash
# Clone the repository
git clone https://github.com/japflorencia/storybook.git
cd storybook

# Install dependencies
npm install
```

### Running Storybook

```bash
# Start Storybook in development mode
npm run storybook

# Build Storybook for production
npm run build-storybook
```

Storybook will open at `http://localhost:6006`

## 🛠️ Development

### Creating a New Component

1. Create a new `.vue` file in the `stories/` directory
2. Create a corresponding `.stories.js` file for Storybook documentation
3. Export component stories following the CSF (Component Story Format) standard
4. Add component CSS in a separate `.css` file with the same name

### Component Structure Example

```
stories/
├── MyComponent.vue
├── MyComponent.stories.js
└── my-component.css
```

### Storybook Features Used

- **Autodocs** - Automatic documentation generation
- **Controls** - Interactive UI for component prop exploration
- **Essentials** - Actions, backgrounds, measure, outline, and viewport tools
- **Interactions** - Test component interactions

## 📚 Icon Library

The Icon component integrates the [RPG Awesome Icon Library](https://github.com/nagoshiashumari/Rpg-Awesome) featuring 100+ gaming-themed icons perfect for RPGs, games, and fantasy-themed applications.

### Icon Usage

```vue
<Icon name="hearts" size="large" />
<Icon name="sword" color="#ff6b6b" />
<Icon name="shield" size="small" />
```

## 🎯 Project Structure

```
.
├── stories/                 # Component source files
│   ├── components/         # Reusable UI components
│   ├── *.vue              # Vue component files
│   ├── *.stories.js       # Storybook story files
│   ├── *.css              # Component styles
│   └── assets/            # Static assets
├── storybook-static/       # Built Storybook output
├── package.json           # Dependencies and scripts
├── README.md              # This file
└── LICENSE                # MIT License
```

## 📖 Storybook Addons

This library includes several powerful Storybook addons:

- **Essentials** - Core tools for development (Actions, Backgrounds, Controls, Measure, Outline, Toolbars, Viewport)
- **Interactions** - Test and debug component interactions
- **Links** - Easy component linking

## 🌐 Live Demo

View the live component library: [japflorencia.github.io/storybook](https://japflorencia.github.io/storybook)

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](./LICENSE) file for details.

## 👤 Author

**japflorencia** - [GitHub](https://github.com/japflorencia)

---

**Happy coding!** 🚀 Feel free to use these components in your projects or contribute improvements.
