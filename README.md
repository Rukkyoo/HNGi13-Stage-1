Profile Card (Responsive)

This is a small, responsive profile card demo built with plain HTML, CSS and JavaScript. It is designed to look good on mobile, tablet, and desktop. The layout stacks content on small screens and places the avatar to the left of the text on wider screens.

Features

- Fully Responsive Design - Adapts seamlessly from mobile to desktop
- Live Clock - Real-time date and time display that updates every second
- Modern Layout - CSS Grid-based layout that transforms at different screen sizes
- Semantic HTML - Accessible markup with proper ARIA labels
- Zero Dependencies - Pure vanilla JavaScript, no frameworks needed
- Clean Design - Professional styling with smooth transitions

Project Structure

- `index.html` — the page markup
- `style.css` — responsive, robust CSS; mobile-first
- `index.js` — small script for bio toggle and live time
- `images/` — contains the avatar image
- `README.md` — This file

Installation

Clone or download this repository

   git clone https://github.com/Rukkyoo/HNGi13-Stage-0.git

Add your profile image

- Create an images folder in the project root
- Add your profile photo as Michael-Omonedo-Image.jpg (or update the path in index.html)

How to run

- Install the "Live Server" extension
- Right-click on index.html
- Select "Open with Live Server"

 Responsive Breakpoints

- Mobile (< 768px): Single column layout, centered content
- Tablet/Desktop (≥ 768px): Two-column grid with sidebar
- Large Desktop (≥ 1024px): Enhanced spacing and larger avatar

Testing

The component includes data-testid attributes for automated testing:
- test-profile-card - Main container
- test-user-name - Name heading
- test-user-avatar - Profile image
- test-user-bio - Biography text
- test-user-time - Live clock display
- test-user-social-links - Social links container
- test-user-social-twitter - Twitter link
- test-user-social-linkedin - LinkedIn link
- test-user-social-github - GitHub link
- test-user-hobbies - Hobbies section
- test-user-dislikes - Dislikes section

Browser support

Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

Technologies Used

- HTML5 - Semantic markup
- CSS3 - Grid, Flexbox, Media Queries
- JavaScript (ES6) - DOM manipulation, Date API

License
This repository is a simple demo — adapt and reuse as you see fit. :)
