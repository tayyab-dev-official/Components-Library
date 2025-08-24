# React UI Components Library

A **modern React component library** built with **Vite** featuring responsive **Badge, Banner, Card, Testimonial, Tooltip & Toast** components. Includes **CSS Modules**, **WCAG AAA accessibility**, **mobile-first design**, and **professional styling**. Perfect for building consistent, scalable web interfaces.

## 🔗 Live Demo

**[View Live Demo](https://keshf-react-components.netlify.app/)**

## 🚀 Features

- **7 Core Components**: Badge, Banner, Card, Testimonial, Tooltip, TooltipLight, Toast
- **Modern React Patterns**: Hooks (useState, useEffect, useRef), Functional Components, React Portals
- **State Management**: Local state with useState, side effects with useEffect
- **Memory Management**: useRef for timer references, proper cleanup functions
- **Component Composition**: Flexible prop-based configuration and children support
- **React Portals**: Toast notifications render outside component tree for true overlay behavior
- **Responsive Design**: Mobile-first approach with tablet and desktop breakpoints
- **Accessibility**: WCAG AAA color contrast compliance
- **CSS Modules**: Scoped styling preventing style conflicts
- **Auto-Dismiss Logic**: Smart timer management with React hooks
- **Fast Development**: Vite for lightning-fast HMR

## 📱 Responsive Design

All components are built with a mobile-first approach and include responsive breakpoints:

- **Mobile**: Optimized layouts for small screens
- **Tablet**: Adjusted spacing and typography
- **Desktop**: Full-featured layouts with enhanced visual hierarchy

## ♿ Accessibility

- WCAG AAA color contrast compliance
- Semantic HTML structure
- Keyboard navigation support
- Screen reader compatible

## 🧠 React Best Practices Demonstrated

### State Management

- **Local State**: useState for component-specific data
- **State Updates**: Functional updates with `prevState => !prevState`
- **State Lifting**: Proper state placement at component level

### Side Effects & Cleanup

- **useEffect**: Timer management and auto-dismiss functionality
- **Cleanup Functions**: Preventing memory leaks with timer cleanup
- **Dependency Arrays**: Optimized re-renders with proper dependencies

### Performance Optimization

- **useRef**: Persistent values without triggering re-renders
- **Conditional Rendering**: Efficient DOM updates with `&&` operator
- **Event Handler Optimization**: Preventing unnecessary re-renders

### Component Design

- **Single Responsibility**: Each component has a focused purpose
- **Prop Interface**: Clear and predictable component APIs
- **Composition**: Flexible components using children prop
- **Default Props**: Fallback values for better developer experience

### Modern React Patterns

- **Functional Components**: No class components, hooks-based approach
- **Custom Hooks**: Reusable logic extraction (useScreenSize)
- **Controlled Components**: Props-driven component behavior
- **Event Handling**: Modern event handler patterns

## 🎨 Design System

- **Typography**: Inter font family
- **Breakpoints**:
  - Mobile: ≤768px
  - Tablet: 769-991px
  - Desktop: ≥992px
- **Color Scheme**: Professional palette with semantic colors
- **Spacing**: Consistent spacing scale (8px, 16px, 24px)

## ⚛️ React Concepts Demonstrated

### Hooks Implementation

- **useState**: State management for component visibility, timer status, and user interactions
- **useEffect**: Side effects handling for auto-dismiss timers and cleanup
- **useRef**: Persistent timer references across re-renders without triggering updates
- **createPortal**: Rendering components outside the normal component tree hierarchy

### Component Patterns

- **Functional Components**: Modern React approach with hooks
- **Controlled Components**: Prop-driven configuration and state management
- **Conditional Rendering**: Dynamic content display based on state
- **Event Handling**: onClick, onHover, and custom event callbacks

### Advanced React Features

- **React Portals**: Toast component uses `createPortal` to render outside component tree
- **Custom Hooks**: useScreenSize for responsive behavior
- **Component Composition**: Flexible children prop usage
- **Props Destructuring**: Clean component interfaces
- **Default Props**: Fallback values for component properties
- **Dynamic Styling**: Conditional CSS classes and inline styles
- **DOM Escape Hatches**: Portal rendering to specific DOM nodes for overlay components

## 📦 Components & React Concepts

### Badge

**React Concepts**: Props destructuring, conditional CSS classes

- **Implementation**: Functional component with dynamic className composition
- **Props**: `color`, `children` with default values
- **Styling**: CSS Modules with conditional class application

### Banner

**React Concepts**: Switch statements, conditional rendering, children prop

- **Implementation**: Icon selection logic with switch statement
- **Props**: `status`, `title`, `text`, `children`
- **Features**: Dynamic icon rendering and optional content sections

### Card

**React Concepts**: Default props, style object composition, component composition

- **Implementation**: Flexible card layout with prop-based customization
- **Props**: `icon`, `backgroundColor`, `title`, `text`, `children`
- **Styling**: Dynamic background colors and responsive design

### Testimonial

**React Concepts**: Custom hooks (useScreenSize), conditional logic, array methods

- **Implementation**: Responsive avatar selection using custom hook
- **Props**: `name`, `role`, `text`, `avatar`
- **Features**: Screen size detection and random image selection from arrays

### Tooltip & TooltipLight

**React Concepts**: useState for hover state, event handlers, conditional rendering

- **Implementation**: Hover state management with mouse events
- **Props**: `text`, `children`, `background`, `color`
- **Features**: Dynamic visibility and positioning based on user interaction

### Toast (Advanced)

**React Concepts**: useState, useEffect, useRef, React Portals, timer management, cleanup functions

- **Implementation**: Complex state management with multiple hooks and Portal rendering
- **useState**: Controls banner visibility (`active` state)
- **useRef**: Persistent timer reference (`timerRef.current`)
- **useEffect**: Auto-dismiss logic with dependency array `[active]`
- **React Portals**: Toast notifications render outside component tree using `createPortal`
- **DOM Targeting**: Portal renders to `#portal-root` or fallback to `document.body`
- **Positioning**: Fixed positioning (bottom-right) with high z-index for overlay behavior
- **Cleanup**: Proper timer cleanup in useEffect return function
- **Event Handling**: Toggle function with state updates
- **Conditional Rendering**: Dynamic button text and banner display
- **Memory Management**: Prevents memory leaks with proper timer cleanup
- **Separation of Concerns**: Control button in normal flow, notifications in portal

## 🛠️ Tech Stack & React Implementation

- **React**: 19.1.1 with modern functional components
- **Hooks Used**: useState, useEffect, useRef for comprehensive state management
- **Vite**: 7.1.2 (Build tool) with fast refresh for development
- **CSS Modules**: Scoped styling preventing style conflicts
- **ESLint**: Code quality and React best practices enforcement
- **Custom Hooks**: useScreenSize for responsive behavior detection

## 🚀 Getting Started

### Installation

```bash
# Clone the repository
git clone https://github.com/tayyab-dev-official/Components-Library.git

# Navigate to project directory
cd Components-Library

# Install dependencies
npm install

# Start development server
npm run dev
```

### Development Scripts

```bash
npm run dev      # Start development server
npm run build    # Build for production
npm run preview  # Preview production build
npm run lint     # Run ESLint
```



## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is open source and available under the MIT License.

## 📞 Contact

- GitHub: [@tayyab-dev-official](https://github.com/tayyab-dev-official)
- LinkedIn: [Mohammad Tayyab](https://www.linkedin.com/in/mohammad-tayyab-91ba5236b/)
- Email: tayyab.professional.official@gmail.com

---

Built with ❤️ using React + Vite
