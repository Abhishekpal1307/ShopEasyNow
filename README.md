# ShopEasy

ShopEasy is a premium e-commerce storefront built with React, Vite, Tailwind CSS, and Framer Motion. It demonstrates a polished shopping experience with product filtering, cart management, wishlist support, animated interface elements, and responsive design.

## Key Features

- Responsive React application powered by Vite.
- Product search, category filter, and sort functionality.
- Cart and wishlist management with dynamic quantity controls.
- Order confirmation modal and toast notifications.
- Animated interaction using Framer Motion.
- Light/Dark theme support and smooth page transitions.

## Technologies

- React
- Vite
- Tailwind CSS
- Framer Motion
- React Toastify
- React Icons

## Project Structure

- `src/App.jsx` – Application state, routing, and global event handlers.
- `src/components/Navbar.jsx` – Navigation header with cart and wishlist counters.
- `src/components/Hero.jsx` – Landing hero section with featured items and call-to-action.
- `src/components/ProductCard.jsx` – Individual product cards with add-to-cart and wishlist actions.
- `src/data/products.js` – Product catalog data used by the storefront.
- `tailwind.config.js` – Tailwind CSS configuration.

## Installation

1. Install dependencies:

```bash
npm install
```

2. Start the development server:

```bash
npm run dev
```

3. Open the local URL shown in the terminal to view the app.

## Production Build

Build the application for production:

```bash
npm run build
```

Preview the production build locally:

```bash
npm run preview
```

## Notes

- The application is designed for demonstration and user interface refinement.
- Styles are provided through Tailwind CSS utilities and custom theme extensions.
- The experience is optimized for desktop and mobile viewports.

## Contribution

If you wish to extend the project, focus on modular component design, state management improvements, and accessibility refinements.
