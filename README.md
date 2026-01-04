# Andy Almeida - Personal Portfolio 🚀

A modern, terminal-inspired portfolio website featuring a dual-theme system (Green for light mode, Pink for dark mode) and a completely data-driven architecture.

## ✨ Features

- **🎨 Dual Theme System**: Light mode with green accents, dark mode with pink accents
- **📱 Fully Responsive**: Optimized for all devices from mobile to desktop
- **⚡ Performance Optimized**: Fast loading with lazy loading images and smooth animations
- **🔧 Easy to Update**: All content managed through a single `data.js` file
- **🎯 SEO Optimized**: Proper meta tags and semantic HTML
- **♿ Accessible**: ARIA labels and keyboard navigation support
- **💾 Theme Persistence**: Remembers your theme preference using localStorage

## 🗂️ Project Structure

```
Andy-Almeida.github.io/
├── index.html          # Main HTML structure
├── styles.css          # All styles with CSS custom properties
├── script.js           # Interactive functionality and component rendering
├── data.js            # ⭐ YOUR CONTENT GOES HERE - Edit this to update your portfolio
├── static/            # Images and assets
│   ├── andyalmeidabestselfie.PNG
│   ├── GithubIcon.png
│   ├── LinkedInIcon.png
│   ├── ResumeIcon.png
│   └── [project images]
└── README.md          # This file
```

## 🚀 How to Update Your Portfolio

### ⭐ The Easy Way: Edit `data.js`

**All your content lives in `data.js`!** You don't need to touch HTML or CSS to update your portfolio. Here's how:

1. **Open `data.js`**
2. **Find the section you want to update** (personal info, experience, projects, skills, etc.)
3. **Edit the values** following the existing format
4. **Save the file** - that's it!

### Adding a New Job

```javascript
// In data.js, find the experience array and add a new object:
{
  title: "Your Job Title",
  company: "Company Name",
  location: "City, State/Remote",
  date: "Month Year - Present/Month Year",
  type: "Full-time", // or "Part-time", "Contract", etc.
  description: "Brief description of the company or role",
  highlights: [
    "Achievement 1 with metrics",
    "Achievement 2 with impact",
    "Achievement 3 with results"
  ],
  skills: ["Skill1", "Skill2", "Skill3"],
  featured: true, // Set to true to highlight this role
  link: "https://company-website.com" // Optional
}
```

### Adding a New Project

```javascript
// In data.js, find the projects array and add:
{
  title: "Project Name",
  subtitle: "Optional subtitle", // Optional
  date: "Month Year",
  description: "Brief description of what the project does",
  details: "More detailed information about implementation", // Optional
  image: "/static/your-image.png",
  video: "https://youtube.com/embed/VIDEO_ID", // Use instead of image for videos
  skills: ["Technology1", "Technology2"],
  links: {
    github: "https://github.com/yourusername/repo", // Optional
    demo: "https://your-demo-url.com" // Optional
  },
  featured: true // Set to true to highlight this project
}
```

### Updating Your Personal Info

```javascript
// In data.js, update the personal object:
personal: {
  name: "Your Name",
  title: "Your Primary Title",
  tagline: "Your Professional Tagline",
  location: "Your Location 📍",
  description: "Your introduction paragraph",
  email: "your.email@example.com",
  phone: "+1 (XXX)XXX-XXXX",
  links: {
    github: "https://github.com/username",
    linkedin: "https://linkedin.com/in/username",
    resume: "https://link-to-resume",
    website: "https://yourwebsite.com"
  },
  image: "/static/your-photo.png"
}
```

### Adding New Skills

```javascript
// In data.js, find the skills object:
skills: {
  languages: [
    { name: "Python", level: "advanced" }, // "advanced", "intermediate", or "beginner"
    { name: "New Language", level: "intermediate" }
  ],
  frameworks: [
    { name: "React.js", level: "advanced" }
  ],
  technologies: [
    { name: "Docker", level: "beginner" }
  ],
  softSkills: [
    "New Soft Skill"
  ]
}
```

## 🎨 Theme Customization

The website features two themes:
- **Light Mode**: Green accents (#00ff00)
- **Dark Mode**: Pink accents (#ff1493)

### Want to change the accent colors?

Edit `styles.css` at the top:

```css
:root {
  /* Light Mode Colors - Change these */
  --accent-primary: #00ff00;    /* Your primary accent color */
  --accent-secondary: #00cc00;  /* Slightly darker shade */
}

[data-theme="dark"] {
  /* Dark Mode Colors - Change these */
  --accent-primary: #ff1493;    /* Your primary accent color */
  --accent-secondary: #ff69b4;  /* Slightly lighter shade */
}
```

## 📁 Adding Images

1. **Place your image** in the `static/` folder
2. **Reference it in data.js** using the path: `/static/your-image.png`
3. **Recommended sizes**:
   - Profile photo: 500x500px
   - Project images: 800x600px
   - Icons: 100x100px

## 🌐 Deploying to GitHub Pages

Your site is ready for GitHub Pages! Here's how to deploy:

1. **Push to GitHub**:
   ```bash
   git add .
   git commit -m "Updated portfolio with new design"
   git push origin main
   ```

2. **Enable GitHub Pages**:
   - Go to your repository settings
   - Find "Pages" in the sidebar
   - Set source to "main" branch
   - Your site will be live at `https://andy-almeida.github.io`

## 🔧 Customization Guide

### Terminal Prompts

The terminal-style prompts throughout the site can be customized in `index.html`:

```html
<!-- Change "andya@portfolio" to anything you want -->
<span class="terminal-prompt">yourname@portfolio:~$</span>
```

### Section Commands

Each section has a command prompt. Edit these in `index.html`:

```html
<!-- About section -->
<span class="command">cat about.md</span>

<!-- Experience section -->
<span class="command">ls -la experience/</span>

<!-- Projects section -->
<span class="command">tree projects/</span>

<!-- Skills section -->
<span class="command">cat skills.json</span>
```

### Animations

To disable fade-in animations, remove the `fade-in` class from elements, or disable the AnimationObserver in `script.js`:

```javascript
// Comment out these lines in script.js:
// const animationObserver = new AnimationObserver();
// animationObserver.observe();
```

### Typing Effect

Want your name to type out on load? Uncomment this in `script.js`:

```javascript
// Find these lines and uncomment them:
setTimeout(() => {
  const heroTitle = document.getElementById('heroTitle');
  const typingEffect = new TypingEffect(heroTitle, portfolioData.personal.name, 100);
  typingEffect.start();
}, 500);
```

## 🐛 Troubleshooting

### Theme not switching?
- Check browser console for errors
- Clear localStorage: `localStorage.clear()` in console
- Make sure `data.js` loads before `script.js` in HTML

### Content not showing?
- Check browser console for errors
- Verify `data.js` syntax (especially commas and quotes)
- Make sure all required fields are filled

### Images not loading?
- Check file paths are correct (`/static/image.png`)
- Ensure images exist in the static folder
- Check file extensions match (case-sensitive on GitHub Pages)

## 📝 Development Tips

### Testing Locally

Simply open `index.html` in your browser, or use a local server:

```bash
# Python 3
python -m http.server 8000

# Then visit http://localhost:8000
```

### Code Organization

- **HTML**: Structure only, no content
- **CSS**: All styles with CSS custom properties for theming
- **JavaScript**: Component rendering and interactions
- **data.js**: All your content

### Best Practices

1. **Always update data.js** instead of hardcoding in HTML
2. **Test both themes** when making changes
3. **Compress images** before adding to static folder
4. **Keep featured items** to 3-4 max for best impact
5. **Use descriptive commit messages** when pushing to GitHub

## 🎯 Future Enhancements

Want to add more features? Here are some ideas:

- **Contact Form**: Add a form with email service integration
- **Blog Section**: Create a blog with markdown posts
- **Analytics**: Add Google Analytics or Plausible
- **More Themes**: Add additional color schemes
- **Language Toggle**: Make it multilingual
- **Download Resume**: Add a PDF download button

## 📚 Technologies Used

- **HTML5**: Semantic markup
- **CSS3**: Custom properties, Grid, Flexbox
- **Vanilla JavaScript**: ES6+ classes and modules
- **Font Awesome**: Icons
- **No frameworks**: Pure web technologies for maximum performance

## 📄 License

Feel free to use this template for your own portfolio! Just update the content in `data.js` to make it yours.

## 🤝 Contributing

If you find bugs or have suggestions, feel free to open an issue or submit a pull request!

---

**Built with ❤️ by Andy Almeida**

*Last Updated: January 2026*
