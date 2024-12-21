# Alliance Website

## Overview

This project is a **Alliance website** designed with a fantasy-inspired UI. It incorporates features for **alliance members** such as **tools** and **player data tracking**, all presented in a visually stunning interface featuring dark mode, magical effects, and animated elements.

## Features

1. **Interactive Animations** - Powered by **GSAP** for smooth animations and transitions.
2. **Alliance Tools Section** - Exclusive tools for alliance mates, aiding collaboration and strategy.
3. **Player Data Tracking** - AI-powered analytics for performance optimization and resource management.
4. **Dynamic Backgrounds** - Custom illustrations and designs integrated with Tailwind CSS.
5. **Authentication System** - PIN-protected access to restricted sections.
6. **Media Integration** - Video elements and animations enhance the immersive experience.
7. **Responsive Design** - Fully responsive and adaptable across devices.

## Tech Stack

- **Frontend Framework:** React.js
- **Styling:** Tailwind CSS
- **Animations:** GSAP (GreenSock Animation Platform)
- **Media Handling:** Videos and Custom Illustrations
- **State Management:** Zustand (for global state management)

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/your-repo-name.git
   cd your-repo-name
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the development server:
   ```bash
   npm start
   ```

## Folder Structure

```
src/
  assets/               # Images, videos, and background assets
  components/           # Reusable components
  pages/                # Main application pages
  store/                # Global state management files
  styles/               # Tailwind CSS configuration
  App.js                # Main application component
  index.js              # Entry point
```

## Usage

1. Navigate to the **Alliance Tools** tab to access exclusive tools.
2. Visit the **Player Data** section to track performance and analytics (PIN-protected).
3. Use the **interactive animations** to explore the site visually.

## Dependencies

- **React.js**
- **GSAP**
- **Tailwind CSS**
- **React Icons**
- **Zustand**
- **React Modal**

## Customization

- Replace images and videos in the `assets/` folder.
- Update the PIN logic in the `useAuthStore.js` file.
- Modify animations in the `TopHome.jsx` and `Home.jsx` components.

## Deployment

1. Build the project:
   ```
   npm run build
   ```
2. Deploy the contents of the `build/` folder to your hosting service.

## Contributing

Pull requests are welcome. For significant changes, please open an issue first to discuss what you’d like to change.

## Contact

For questions or suggestions, please contact [yraj20081999@gmail.com].
