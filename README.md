# Profile Card (Responsive)

This is a small, responsive profile card demo built with plain **HTML**, **CSS**, and **JavaScript**. It also includes 2 new pages; Contact & About Me
This project contains two fully responsive and accessible pages:  
- **Contact Us Page** — A semantic form with client-side validation.  
- **About Me Page** — A reflective and structured biography page.

## Pages

### 1. Contact Us Page (`form.html`)

A simple contact form that validates user input and provides feedback through ARIA live regions.

#### **Required Fields**
| Field | `data-testid` |
|-------|----------------|
| Full Name | `test-contact-name` |
| Email | `test-contact-email` |
| Subject | `test-contact-subject` |
| Message | `test-contact-message` |
| Submit Button | `test-contact-submit` |
| Error Messages | `test-contact-error-<field>` (e.g., `test-contact-error-email`) |
| Success Message | `test-contact-success` |

#### **Validation Rules**
- All fields are **required**.  
- Email must be in a **valid format** (`name@example.com`).  
- Message must be **at least 10 characters**.  
- Upon successful submission, a **success message** appears (`Your message has been sent successfully!`).

#### **Accessibility**
- Every input is linked to a `<label>` using the `for` attribute.  
- Error messages are connected to their fields using `aria-describedby`.  
- Dynamic messages use `aria-live="polite"` for screen readers.  
- Entire form is keyboard-accessible.  

#### **Navigation**
At the bottom of the form:
- `Back to Profile` → Navigates to `index.html`  
- `Go to Bio` → Navigates to `about.html`  


### 2. About Me Page (`about.html`)

A semantic page that reflects on personal background, goals, and mindset during this program.

#### **Required Sections**
| Section | `data-testid` |
|----------|----------------|
| Bio | `test-about-bio` |
| Goals | `test-about-goals` |
| Areas of Low Confidence | `test-about-confidence` |
| Note to Future Self | `test-about-future-note` |
| Extra Thoughts | `test-about-extra` |

Each section uses semantic HTML elements:
- `<main data-testid="test-about-page">` wraps the entire content.
- Each section is contained within a `<section>` tag.
- Headings (`<h2>`) and paragraphs (`<p>`) are used for clear hierarchy and readability.

#### **Navigation**
At the bottom of the page:
- `Back to Profile` → Navigates to `index.html`  
- `Contact Me` → Navigates to `form.html`  


## Accessibility & Semantics

Both pages strictly follow semantic and accessible HTML:
- Proper heading structure.
- Clear `<label>` and `for` relationships.
- `aria-describedby` for error association.
- `aria-live="polite"` for non-intrusive updates.
- Keyboard and screen reader-friendly structure.


## Features

- Fully Responsive Design – Adapts seamlessly from mobile to desktop  
- Live Clock – Real-time date and time display that updates every second  
- Modern Layout – CSS Grid-based layout that transforms at different screen sizes  
- Contact Form – Accessible “Contact Us” form with validation and success message (`form.html`)  
- About Page – Simple “About Me” page with personal details and clean typography (`about.html`)  
- Semantic HTML – Accessible markup with proper ARIA labels  
- Zero Dependencies – Pure vanilla JavaScript, no frameworks needed  
- Clean Design – Professional styling with smooth transitions  


## Project Structure


├── index.html          # Main Profile Card page
├── about.html          # About page
├── form.html           # Contact Us form with validation
├── style.css           # Responsive, mobile-first styling
├── index.js            # Script for live time
├── images/
│   └── Michael-Omonedo-Image.jpg
└── README.md           # Project documentation

## Installation

Clone or download this repository:

bash
git clone https://github.com/Rukkyoo/HNGi13-Stage-1.git

## Add Your Profile Image

1. Create an `images` folder in the project root (if it doesn’t exist).
2. Add your profile photo as `Michael-Omonedo-Image.jpg`.
   *(Or update the image path inside `index.html`.)*

## How to Run

1. Install the Live Server extension in VS Code.
2. Right-click on `index.html`.
3. Select “Open with Live Server.”
4. Navigate between:

   * `/index.html` → Main Profile Card
   * `/about.html` → About Page
   * `/form.html` → Contact Us Form


## Responsive Breakpoints

| Device                      | Layout                          |
| :-------------------------- | :------------------------------ |
| Mobile (<768px)         | Single column, centered content |
| Tablet/Desktop (≥768px) | Two-column grid layout          |
| Large Desktop (≥1024px) | Enhanced spacing, larger avatar |

---

## Testing

Each component includes `data-testid` attributes for automated testing.

### Profile Card:

* `test-profile-card` – Main container
* `test-user-name` – Name heading
* `test-user-avatar` – Profile image
* `test-user-bio` – Biography text
* `test-user-time` – Live clock display
* `test-user-social-links` – Social links container
* `test-user-social-twitter` – Twitter link
* `test-user-social-linkedin` – LinkedIn link
* `test-user-social-github` – GitHub link
* `test-user-hobbies` – Hobbies section
* `test-user-dislikes` – Dislikes section

### Bio Page:

* `test-about-bio`, `test-about-goals`, `test-about-confidence`, `test-about-future-note`, `test-about-extra`

### Contact Form:

* `test-contact-name`, `test-contact-email`, `test-contact-subject`, `test-contact-message`
* `test-contact-submit` – Submit button
* `test-contact-error-*` – Error messages
* `test-contact-success` – Success message


## Browser Support

* Chrome (latest)
* Firefox (latest)
* Safari (latest)
* Edge (latest)
* Mobile browsers (iOS Safari, Chrome Mobile)


## Technologies Used

* HTML5 – Semantic markup
* CSS3 – Grid, Flexbox, Media Queries
* JavaScript (ES6) – DOM manipulation, Date API, and form validation


## License

This repository is a simple demo — adapt, reuse, and improve it as you see fit. :)
