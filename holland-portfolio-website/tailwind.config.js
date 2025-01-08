/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      animation: {
        skating: "skating 1s infinite linear", // Define the skating animation
      },
      keyframes: {
        skating: {
          "0%, 100%": { transform: "translateY(0)" }, // No vertical movement
          "50%": { transform: "translateY(-10px)" },  // Moves up slightly
        },
      },
      fontFamily: {
        'source-code-pro': ['Source Code Pro', 'monospace'], // Add Source Code Pro font
      },
    },
  },
  plugins: [],
};
