# FakeTwitter (Chirp) — Zaio Solo Twitter Project

A vanilla HTML/CSS/JS Twitter/X timeline clone built for the Zaio Project Simulation assignment (100 marks).

## Features (current)
- Fully working Home timeline feed with seed + user posts
- Inline composer + modal compose (Post button)
- Live post updates (new chirps appear at top)
- Like, Retweet, Reply, Share interactions (with counts + visual states)
- Character counter (280) on both composers + warning state
- Left sidebar nav with icons (Home / Explore / Notifications / Profile)
- Right sidebar: Trending + Who to follow (follow toggles)
- Explore view with tabs + live search (over trends)
- View switching (no page reload)
- Mobile bottom nav + responsive (icon-only collapsed, full mobile)
- 4K / large screen friendly (wider max)
- Persistence via localStorage (your posts, likes, RTs survive refresh)
- Toast feedback
- Dark X-like theme

## Run locally
1. Open the folder in VS Code
2. Use Live Server extension (or any static server)
3. Or simply double-click `index.html` (some features like focus may be limited)

## Deploy to Netlify (assignment requirement)
- Easiest: Drag the entire folder onto https://app.netlify.com/drop
- Or connect Git repo → Netlify will build automatically (no build step)
- Submit the generated live URL

## Project structure
- `index.html` — markup + views
- `script.js` — all logic (feed, post, interactions, persistence, views)
- `style.css` — X-accurate dark theme + responsive

## Notes for Loom video
- Base (40) is complete and polished
- When you implement your manual custom feature, add a short comment block in the code and record yourself building/extending it live
- Show: post a tweet, like/RT, switch views, mobile emulation, refresh persistence

## Planned / custom (to be added)
See the implementation plan in the session notes. Recommended:
- Manual (15): Interactive polls (you code this)
- AI-assisted: Media attachments + Explore search results for real tweets

Built with ❤️ for high marks. Good luck with the Loom and deadline!
