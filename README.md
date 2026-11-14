# Aimfit Dermaluxe — Pure React Appointment Website

## Included
- Responsive clinic website landing page
- Dr. Radha Rai profile section
- Treatment/service overview
- Appointment request form with date and time selection
- Booking reference generation
- Admin dashboard with search, status updates and CSV export
- Browser localStorage persistence
- Phone and Google Maps links

## Run locally
1. Install Node.js (LTS).
2. Extract this folder.
3. Open a terminal inside the project folder.
4. Run `npm install`
5. Run `npm start`
6. Open `http://localhost:3000`

## Admin demo
- Open the Admin link in the navigation.
- Demo PIN: `1234`
- Change `PIN` in `src/components/Admin/Admin.js` before any deployment.

## Important production note
This is a **pure React front-end starter**. Appointment records are stored in the browser's localStorage. That means records are visible only in the same browser/device where they were submitted. Admin login is a demo gate, not secure authentication.

For real clinic operations (patient and admin on different devices), connect a backend such as Firebase Firestore or a secure API, add proper admin authentication and server-side slot availability checks. Do not collect or store sensitive medical information until suitable privacy and security controls are in place.

## Clinic details used
- Aimfit Dermaluxe Noida
- Dr. Radha Rai
- K-12, near Redtape, Baraula, Sector 49, Noida, Uttar Pradesh – 201301
- 092660 84538

Please verify clinic spelling, doctor credentials, services, opening hours, and phone number with the clinic before publishing. Service names are editable placeholders and do not assert that a particular procedure is offered.


## Premium visual refresh
- Refined responsive typography, spacing, color tokens, buttons, cards, forms, footer and admin dashboard.
- Sticky desktop navigation and collapsible mobile navigation.
- Six independent image carousels remain in the home page.
- The doctor card uses a representative stock portrait only; it is **not a verified photograph of Dr. Radha Rai**. Replace it with a clinic-approved portrait before presenting it as the doctor.
- Appointment storage and admin access remain browser-local demo functionality, not a live multi-device booking backend.
