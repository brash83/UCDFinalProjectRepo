# Brian's Portfolio

Welcome to my personal portfolio website! This project is a showcase of my skills, projects, and experience as a front-end web developer. The site is built with modern web technologies and focuses on performance, accessibility, and responsiveness.

---

## 🌟 Features

### 🌓 Day/Night Mode

![Homepage Screenshot] (https://github.com/brash83/UCDFinalProjectRepo/blob/brian-branch-2/public/images/Homepage.JPG)

- **Technology**: JavaScript for DOM manipulation, CSS variables for theme styling.
- **Description**: A toggle button dynamically switches between light and dark modes, applying a consistent theme across all pages using `classList` and event listeners.

### 🖼️ Projects Section

![Project Screenshot](public/images/Projects.JPG)

- **Technology**: JavaScript for dynamic rendering, responsive CSS grid layout for styling. Lightbox for photos
- **Description**: Displays key projects with titles, descriptions, and associated media. Projects are sorted alphabetically using JavaScript.

### 📧 Contact Form

![Contact Screenshot](public/images/Contact.JPG)

- **Technology**: Bootstrap for styling, HTML form validation.
- **Description**: A functional form with required fields for name, email, and message. Placeholder logic for form submission allows future integration with a backend or email service.
  ![About Screenshot](public/images/About.JPG)

Embedded music

### 📄 Downloadable CV

- **Technology**: HTML `<a>` tag with `download` attribute.
- **Description**: A link in the navigation bar allows users to download a PDF copy of my CV directly.

---

## 🛠️ Technologies Used

![Tech used](public/images/Welcome.JPG)

### Core:

- **HTML5**: For semantic, accessible, and structured markup.
- **CSS3**: For responsive design and custom styles, including media queries and Bootstrap utilities.
- **JavaScript**: For interactive features such as theme switching and dynamic project rendering.

### Frameworks & Libraries:

- **Astro.js**: A modern framework for building fast, component-based static sites.
- **Bootstrap**: For prebuilt UI components and responsive layouts.

### Design:

- **CSS Grid & Flexbox**: Used extensively for layout design and alignment.
- **CSS Variables**: Simplified theme management for light and dark modes.

### File Management:

- **Public Directory**: Stores assets such as images and downloadable documents (e.g., CV PDF).
- **Global Styles**: Centralized in a `global.css` file to ensure consistent design throughout the site.

---

## 📂 File Structure

```plaintext
.
├── public/
│   ├── Docs/
│   │   └── FEWD Unit 1.pdf     # Downloadable CV
│   ├── images/                 # Image assets for projects and site branding
│   └── favicon.ico             # Website favicon
├── src/
│   ├── layouts/
│   │   └── Layout.astro        # Main layout component
│   ├── pages/
│   │   ├── index.astro         # Home page
│   │   ├── about.astro         # About page
│   │   ├── projects.astro      # Projects page
│   │   └── contact.astro       # Contact page
│   ├── styles/
│   │   └── global.css          # Centralized global styles
│   └── components/
│       └── Navbar.astro        # Navbar component
├── package.json                # Node.js dependencies and scripts
└── README.md                   # Documentation for the project
```

⚙️ How It Works
Dynamic Project Rendering
Sorting Logic: JavaScript reads a hardcoded array of projects, sorts them alphabetically by title, and generates HTML dynamically.
Implementation: Uses Array.sort() and innerHTML to update the DOM.
Day/Night Mode
CSS Variables: Define color schemes for light and dark themes.
JavaScript: Listens for button clicks, toggles a dark-mode class on the <body> tag, and applies the respective theme.
Responsive Design
Media Queries: Tailored layouts for screen widths below 768px (tablet) and 480px (mobile).
Flexbox and Grid: Ensure elements align neatly and scale appropriately.
🚀 How to Run Locally
Clone the Repository:

bash
Copy
Edit
git clone https://github.com/brash83/UCDFinalProjectRepo/tree/brian-branch-2
cd portfolio-site
Install Dependencies: Ensure Node.js is installed, then run:

bash
Copy
Edit
npm install
Run the Development Server:

bash
Copy
Edit
npm start
The site will be available at http://localhost:3000.

Build for Production: To generate static files for deployment, run:

bash
Copy
Edit
npm run build
🌐 Live Demo
You can view the live site here: Brian's Portfolio

🎯 Future Enhancements
Backend Integration: Use a service like Node.js, Firebase, or Formspree for handling contact form submissions.
Advanced Interactivity: Include animations using libraries like GSAP or AOS for an enhanced user experience.
Blog Section: Add a blog page to share personal insights and technical tutorials.
Progress Bars: Showcase skills with animated progress bars to visualize proficiency levels.
Accessibility Improvements: Conduct a full audit to ensure WCAG compliance.
📞 Contact Me
Feel free to connect with me:

Email: brian.cash@rte.ie
GitHub: (https://github.com/brash83/)
LinkedIn: (https://www.linkedin.com/in/brian-cash-1a845153/)
📜 License
This project is open-source and available under the MIT License.

Thank you for visiting my portfolio site! If you have any feedback or questions, don’t hesitate to reach out. 😊
