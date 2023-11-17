/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        hero: "url('https://www.icrc.org/sites/default/files/styles/special_page_image/public/home_carousel_slide/image/ilot_surgery_2.jpg?itok=VCxLfO6-')",
        sick: "url https://www.icrc.org/sites/default/files/styles/home_story_main/public/document_new/image_thumbnail/dscf4273.jpg?itok=-3fROw_a')",
      },
    },
  },
  plugins: [],
};
