# Abhijeet Gym — Premium Fitness Website
**Developed by NextStep Digital**

A high-end, responsive, modern fitness brand website designed and engineered for **Abhijeet Gym**, Kolhapur's premier strength training destination.

---

## 🌟 Highlights & Features

1. **Brand Aesthetic:**
   - Bold international gym aesthetic: deep charcoal/black background (`#080809`), crisp white typography, and vibrant athletic red (`#ef4444`) accents.
   - High-contrast typography with Montserrat and Inter.
   - Dark athletic overlay backgrounds with subtle glow lighting.

2. **Verified Business & Google Maps Integration:**
   - **Google Maps Location:** [https://maps.app.goo.gl/4RdxbvDNZ6oRDGfC9](https://maps.app.goo.gl/4RdxbvDNZ6oRDGfC9)
   - **Main Branch:** Suvarna Plaza, Sangar Galli, Near Padmaraje Girls High School, Mangalwar Peth, Kolhapur 416012.
   - **Second Branch:** Jetvan, Salokhe Nagar Road, Near Apte Nagar Panyachi Taaki, Kolhapur 416007.
   - **Verified Phone:** `+91 90962 85228`
   - **Operating Hours:** Mon – Sat: 5:30 AM – 9:30 PM (Morning & Evening sessions) | Sunday: Closed.

3. **Complete Section Roster:**
   - **Hero:** Full-width gym background, animated badge, headline *"BUILD YOUR STRONGER SELF"*, supporting text *"Train harder. Get stronger. Become your best"*, dual CTAs ("Join Now", "Explore Programs"), and athletic trust ticker.
   - **About:** Gym philosophy, environment, and the 4 Pillars (*Strength & Power, Consistency & Drive, Discipline & Form, Community & Brotherhood*).
   - **Fitness Programs (6 Disciplines):** Weight Training & Strength, Weight Loss & Fat Loss, Muscle Building & Body Transformation, 1-on-1 Personal Training, Cardio & Conditioning, General Fitness for Beginners.
   - **Membership Plans:** Monthly, Quarterly, Half-Yearly, and Annual tiers with clearly marked editable placeholders and plan enquiry triggers.
   - **Trainers & Coaching Staff:** Editable templates for Chief Strength Coach, Fat Loss Specialist, and Senior Personal Trainer.
   - **Transformations & Facility Gallery:** Highlight cards and interactive photo gallery with category filter and lightbox preview.
   - **Testimonials:** Interactive slider for verified member reviews.
   - **Contact & Location:** Dual-branch cards, interactive embedded Google Maps, direct map launcher, and contact form with client-side validation.

4. **Complete WhatsApp Integration:**
   - Single source of truth in `src/config/gymConfig.ts` (`whatsappNumber: "919096285228"`).
   - Floating WhatsApp button on every screen with 1-tap quick enquiry actions.
   - Every "Join Now", "Choose Plan", and "Enquire" button opens WhatsApp with pre-composed, URL-encoded messages.
   - Interactive WhatsApp Confirmation Modal (`WhatsAppModal.tsx`) providing user clarity on click-to-chat delivery.

---

## 🛠️ Configuration & Maintenance Guide (For NextStep Digital)

All gym details, prices, contact numbers, and copy are kept separate from UI components in `src/config/gymConfig.ts`.

### 1. How to Update the WhatsApp Number
Open `src/config/gymConfig.ts` and edit:
```ts
whatsappNumber: "919096285228", // International format without '+' or spaces
displayPhone: "+91 90962 85228",
```

### 2. How to Update Membership Pricing
In `src/config/gymConfig.ts`, modify the `MEMBERSHIP_PLANS` array:
```ts
{
  id: "quarterly",
  name: "Quarterly Transformation",
  duration: "3 Months",
  price: "₹3,200", // Update with confirmed pricing
  originalPrice: "₹3,600",
  ...
}
```

### 3. How to Update Trainers or Testimonials
In `src/config/gymConfig.ts`, update `TRAINERS_DATA` and `TESTIMONIALS_DATA` with the client's confirmed staff and real member reviews.

---

## 🚀 Development & Deployment

### Run Locally:
```bash
npm install
npm run dev
```

### Production Build:
```bash
npm run build
```
The production bundle will be generated in `dist/`.

### Netlify Deployment:
- **Build command:** `npm run build`
- **Publish directory:** `dist`
- A `netlify.toml` and `public/_redirects` file are included for automatic zero-configuration deployment.
