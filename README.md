# Y8 Pitch Prep — Static Website

A standalone, no-backend web tool for Year 8 Chinese students preparing for the **Family Charity Auction** (Task 2, Term 2 2026, St Augustine's College Sydney).

## What's inside

| File | Purpose |
|------|---------|
| `index.html` | Landing page with 4 feature cards |
| `pitch-builder.html` | 8-step form with chip-style word banks and live pitch preview |
| `flashcards.html` | Click-to-flip + match game across 5 vocab decks |
| `sentence-builder.html` | Tap pinyin words in correct order (10 sentences with distractors) |
| `reference.html` | Quick reference — 8 steps, golden rules, deadly errors, all word banks |
| `style.css` | Shared styles (navy/coral, mobile-first responsive) |
| `app.js` | Shared vocab data, localStorage helpers, header navigation |

## How to test locally

Just open `index.html` in any browser. No build step, no server needed.

```bash
cd Y8_PitchPrep_Website
open index.html       # macOS
# or just double-click the file
```

## How to deploy to GitHub Pages (free public URL)

You'll get a URL like `https://YOUR-USERNAME.github.io/y8-pitch-prep/` that works on any device.

### One-time setup (15 min)

1. **Create a GitHub account** at https://github.com if you don't have one. Use your school email.
2. Once logged in, click the **+** icon (top right) → **New repository**.
3. Repository name: `y8-pitch-prep` (lowercase, dashes — this becomes part of the URL).
4. Set it to **Public**. Tick **Add a README file**. Click **Create repository**.

### Upload the site

5. On the repo page, click **Add file** → **Upload files**.
6. Drag the **contents** of this `Y8_PitchPrep_Website` folder into the upload area:
   - `index.html`
   - `pitch-builder.html`
   - `flashcards.html`
   - `sentence-builder.html`
   - `reference.html`
   - `style.css`
   - `app.js`
   - `README.md`
   (Drag the files themselves — not the folder.)
7. Scroll down. Type a commit message like `initial site`. Click **Commit changes**.

### Turn on Pages

8. In your repo, click **Settings** (top tab) → **Pages** (left sidebar).
9. Under **Build and deployment** → **Source**, choose **Deploy from a branch**.
10. **Branch**: `main`, folder: `/ (root)`. Click **Save**.
11. Wait ~30 seconds. The page will show: *Your site is live at https://YOUR-USERNAME.github.io/y8-pitch-prep/*
12. Click that URL to test it. Bookmark it. Share with your classes.

### Updating later

To change a file (e.g. add more sentences), edit it locally, then drag the updated file back into the GitHub repo via **Add file** → **Upload files** (it will overwrite). The site auto-rebuilds in ~30 seconds.

## Features at a glance

- **Pitch Builder** — Tap chips to fill in each step. Live preview rebuilds the full pitch as you go. Word count + spoken-time estimate. Family Member 1 / Family Member 2 toggle. Print Cue Cards button (uses browser print).
- **Flashcards** — 5 decks (family, appearance, personality, nationalities, cities). Flip mode shows English → tap → reveals pinyin + character. Match mode picks 6 random pairs and times the student.
- **Sentence Builder** — 10 target sentences. Pinyin chips shuffled with 1–2 distractors. Tap chips into the build zone in correct order. Score tracker.
- **Reference** — One-page cheat sheet of all 8 steps, the 6 deadly errors, full vocab banks, and the marking criteria.
- **Auto-save** — All progress in Pitch Builder persists in `localStorage` (per-browser, per-device).
- **Print-friendly** — Hit `Cmd/Ctrl + P` on the Pitch Builder page to print just the pitch and steps (the live preview, nav, and buttons are hidden in print).

## Tech notes

- Pure HTML / CSS / vanilla JS. No frameworks, no build step, no backend, no analytics, no cookies.
- localStorage key: `y8pitchprep.v1`
- Tested on Chrome, Safari, Edge (desktop + mobile).
- All assets self-contained — no external CDN dependencies, so it works offline once loaded.

## Customising

- **Add more vocab**: edit the `VOCAB` object at the top of `app.js`.
- **Add more sentences**: edit the `SENTENCES` array in `app.js`.
- **Change colours**: edit the `:root` variables at the top of `style.css`.
- **Change school name / year**: edit the footer text in `index.html`.
