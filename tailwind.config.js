/** @type {import('tailwindcss').Config} */
export const content = [
  "./src/**/*.{js,jsx,ts,tsx}",
];
export const theme = {
  extend: {
    screens: {
        'custom-450': '450px',
      },
  },
};
export const plugins = [];
