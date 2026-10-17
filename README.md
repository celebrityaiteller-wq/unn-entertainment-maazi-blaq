# UNN Entertainment — Maazi Blaq Hub

A responsive, mobile-first starter experience for **UNN Entertainment**, powered by **Maazi Blaq Hub**. Brand line: **“Bringing your imaginations to life.”**

## What's included
- Responsive landing page for desktop and mobile
- Black, gold and charcoal cinematic visual identity
- Sections for campus trends, movies, music, events and talent discovery
- Mobile navigation and a demo waitlist form
- Basic PWA manifest and service worker for installable/offline shell support

## Run locally
Open `index.html` in a browser. For service-worker/PWA testing, serve the folder over localhost or deploy it to HTTPS.

## Publish with GitHub Pages
1. Create a new repository on GitHub named `unn-entertainment-maazi-blaq`.
2. Upload all files in this folder to the repository's root.
3. In the repository, open **Settings → Pages**.
4. Under **Build and deployment**, choose **Deploy from a branch**, select `main` and `/ (root)`, then save.
5. Wait for GitHub Pages to publish the site; its URL will appear in that settings section.

## Important: prototype vs production app
This is a front-end prototype, not yet a complete streaming/social platform. The waitlist form is a demo and does not store or email addresses. Before public launch, connect a backend for:
- user accounts and profiles
- video/music hosting or streaming integrations
- creator uploads and moderation
- event submissions and ticketing
- likes, comments, reporting and admin tools
- privacy policy, terms, security and data protection

Recommended next stage: add a managed backend such as Supabase or Firebase, define moderator/admin permissions, and use a dedicated media host for video/audio rather than storing large media files in GitHub.
