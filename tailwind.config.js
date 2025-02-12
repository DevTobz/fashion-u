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
      backgroundImage:{
        "happy-girl": "url('/src/assets/images/herobg.png')",
        "happy-girl2": "url('/src/assets/images/secondbg.svg')",
        "first-icon": "url('/src/assets/images/h.m.svg')",
        "second-icon": "url('/src/assets/images/lacoste.png')",
        "third-icon": "url('/src/assets/images/levis.png')",
        "fourth-icon": "url('/src/assets/images/obey.png')",
        "fifth-icon": "url('/src/assets/images/shopify.png')",
        "sixth-icon": "url('/src/assets/images/amazon.png')",
        "girl1": "url('/src/assets/images/girl1.png')",
        "girl2": "url('/src/assets/images/girl2.png')",
        "girl3": "url('/src/assets/images/girl3.png')",
        "girl4": "url('/src/assets/images/footerbg.png')",
        "girl5": "url('/src/assets/images/footerbg2.png')",
        


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

