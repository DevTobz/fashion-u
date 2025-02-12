/** @type {import('tailwindcss').Config} */
export default {
  content: [   "./src/**/*.{js,jsx,ts,tsx}",
    "./node_modules/flowbite/**/*.js"],
  theme: {
    extend: {
      backgroundColor:{
        "brandash" :"#F4F6F5",
        "iconyellow" : "#EBD96B",
        "iconbg" : "#F9DF56",
        "fashionash":"#8E8E8E",
        "exploreash":"#E7E6E6",
        "shoppingyellow":"#E5C643",
      },
      backgroundImage: {
        "happy-girl": "url('/images/herobg.png')",
        "happy-girl2": "url('/images/secondbg.svg')",
        "first-icon": "url('/images/h.m.svg')",
        "second-icon": "url('/images/lacoste.png')",
        "third-icon": "url('/images/levis.png')",
        "fourth-icon": "url('/images/obey.png')",
        "fifth-icon": "url('/images/shopify.png')",
        "sixth-icon": "url('/images/amazon.png')",
        "girl1": "url('/images/girl1.png')",
        "girl2": "url('/images/girl2.png')",
        "girl3": "url('/images/girl3.png')",
        "girl4": "url('/images/footerbg.png')",
        "girl5": "url('/images/footerbg2.png')",
      }
      
    },
    screens: {
      'sm': '640px',
      // => @media (min-width: 640px) { ... }

      'md': '768px',
      // => @media (min-width: 768px) { ... }

      'lg': '1024px',
      // => @media (min-width: 1024px) { ... }

      'xl': '1280px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1536px',
      // => @media (min-width: 1536px) { ... }
    },
  },
  
  plugins: [],
}

