# Sakthi Dental Clinic – Client Website

**ShadowFox Internship – Intermediate Level**  
Role: Frontend Developer (Client Project)

A clean, modern, fully responsive multi-page website for **Sakthi Dental Clinic**, Hosur – specialized dental care for women, children & families.

---

## How I Understood the Requirement

The brief asked for a **client-style landing / multi-page website** that feels professional yet warm. Key goals:

1. **Reflect clinic identity** – Focus on women & children, trust, comfort, and modern care.
2. **User-centric design** – Clear navigation, prominent CTAs (“Fix an Appointment”), mobile-first layout suitable for all ages including seniors.
3. **Required sections** – Hero, Why Choose Us, Treatments preview + full list, Testimonials, Amenities, Contact form, About (doctor + team), FAQs, Privacy Policy, Footer.
4. **Tone** – Soft pastel palette (lavender / soft teal / white), generous whitespace, clean typography, minimalist cards.
5. **Functional expectations** – Responsive, form validation, FAQ accordion, sticky nav, hamburger menu, SEO-friendly structure, deployment-ready.

I interpreted the content as the single source of truth and mapped every provided text block (hero copy, treatment descriptions, testimonials, doctor bio, FAQs, privacy policy, contact details) into the corresponding pages without inventing extra marketing claims.

---

## Page Structure

| Page | Purpose | Key Sections |
|------|---------|--------------|
| `index.html` | Home / conversion focus | Hero + dual CTAs, Assurance banner, Why Choose Us (4 cards), Core Treatments (6 cards + “View Full List”), Testimonials, Amenities, CTA banner, Footer |
| `about.html` | Trust & credentials | Doctor bio, Vision & Mission, Team grid (9 doctors) |
| `treatments.html` | Full service catalog | All 15 treatments with detailed descriptions |
| `faqs.html` | Education & objection handling | 14 accordion FAQs |
| `contact.html` | Lead capture | Validated form + contact details + map placeholder |
| `privacy.html` | Legal compliance | Full privacy policy content |

Shared assets:
- `styles.css` – design system, layout, responsive breakpoints
- `script.js` – mobile nav, navbar scroll effect, FAQ accordion, contact form validation

---

## Design Decisions That Support Usability & Clarity

| Decision | Why it helps |
|----------|--------------|
| Soft lavender + teal palette | Healthcare-friendly, calm, professional yet approachable for women & children |
| Sticky navbar + clear “Fix an Appointment” CTA | Always-visible conversion path |
| Large touch targets & simple language | Works well for seniors and mobile users |
| Card-based layout with icons | Scannable content, reduces cognitive load |
| Mobile-first breakpoints (992 / 768 / 480) | Majority of clinic traffic is expected on phones |
| Client-side form validation with clear error states | Prevents incomplete submissions and builds trust |
| FAQ accordion | Keeps page short while still answering common questions |
| Semantic HTML + meta descriptions | Better SEO and accessibility foundation |
| Consistent footer on every page | Easy access to contact info and key links |

---

## Tech Stack

- **HTML5** – Semantic structure
- **CSS3** – Custom properties, Flexbox, Grid, media queries, smooth transitions
- **Vanilla JavaScript** – Navigation, accordion, form validation (no frameworks)
- **Font Awesome 6** – Icons
- **Google Fonts** – Inter + Poppins

---

## How to Run Locally

1. Download / open the `Sakthi_Dental_Clinic` folder
2. Open `index.html` in any modern browser  
   (or use Live Server in VS Code)

No build step required.

---

## Deployment Options

### GitHub Pages
1. Create a new repository
2. Upload all files
3. Settings → Pages → Deploy from `main` branch

### Netlify / Vercel
Drag-and-drop the folder or connect the repository.

---

## Project Structure

```
Sakthi_Dental_Clinic/
├── index.html          # Home
├── about.html          # About Us + Team
├── treatments.html     # Full treatments list
├── faqs.html           # FAQ accordion
├── contact.html        # Contact form + details
├── privacy.html        # Privacy Policy
├── styles.css          # Shared styles
├── script.js           # Shared interactivity
└── README.md           # This file
```

---

## Notes

- Images from the provided Google Drive link were not accessible in this environment; the design uses icon-based visual hierarchy and soft gradient cards so the site remains polished without external image dependencies. You can easily replace the icon circles / doctor photo placeholder with real photos later.
- All CTAs link to the Contact page (as requested – button actions handled by the web team).
- Form is frontend-only (shows success message after validation). Backend integration can be added later.

---

Built for **ShadowFox Internship – Intermediate Level** with focus on requirement interpretation, clear UI planning, and conversion-oriented frontend execution.
