<<<<<<< HEAD
// additional.js — edit profile (moved), explore (simplified no dup tweets), view stubs. Keeps script core tiny
// personal poll fully in script + template + vote handler. total JS <=500

// EDIT PROFILE (full, moved out of script.js for line budget)
const editProfileBtn = document.getElementById('editProfileBtn');
const editProfileOverlay = document.getElementById('editProfileOverlay');
const closeEditProfile = document.getElementById('closeEditProfile');
const saveEditProfile = document.getElementById('saveEditProfile');
const editName = document.getElementById('editName');
const editBioEl = document.getElementById('editBio');
const editLocation = document.getElementById('editLocation');
const editWebsite = document.getElementById('editWebsite');

if (editProfileBtn && editProfileOverlay) {
  editProfileBtn.addEventListener('click', () => {
    if (editName) editName.value = currentUser.name;
    if (editBioEl) editBioEl.value = currentUser.bio;
    if (editLocation) editLocation.value = currentUser.location;
    if (editWebsite) editWebsite.value = currentUser.website;
    editProfileOverlay.classList.remove('hidden');
  });
}
if (closeEditProfile && editProfileOverlay) {
  closeEditProfile.addEventListener('click', () => editProfileOverlay.classList.add('hidden'));
}
if (editProfileOverlay) {
  editProfileOverlay.addEventListener('click', (e) => { if (e.target === editProfileOverlay) editProfileOverlay.classList.add('hidden'); });
}
if (saveEditProfile) {
  saveEditProfile.addEventListener('click', () => {
    if (editName && editName.value) currentUser.name = editName.value;
    if (editBioEl) currentUser.bio = editBioEl.value;
    if (editLocation) currentUser.location = editLocation.value;
    if (editWebsite) currentUser.website = editWebsite.value;
    if (typeof updateProfileUI === 'function') updateProfileUI();
    if (typeof saveToStorage === 'function') saveToStorage();
    if (typeof renderFeed === 'function') renderFeed();
    editProfileOverlay.classList.add('hidden');
  });
}

// EXPLORE — simplified to trends/search only (no heavy duplicated tweet HTML for line budget + no broken interactions)
let activeFilter = 'all';
function renderExploreResults(filter = 'all', query = '') {
  const container = document.getElementById('exploreResults');
  if (!container) return;
  const q = (query || '').trim().toLowerCase();
  const filtered = trends.filter(t => {
    const cm = filter === 'all' || t.tag === filter;
    const qm = !q || t.name.toLowerCase().includes(q) || t.cat.toLowerCase().includes(q);
    return cm && qm;
  });
  let html = '';
  if (filtered.length) {
    html += '<h3 style="padding:8px 12px 4px;font-size:0.95rem;color:var(--text-dim)">Trends</h3>' +
      filtered.map(t => `<div class="trend-item" data-tag="${t.tag}"><span class="trend-cat">${t.cat}</span><span class="trend-name">${t.name}</span><span class="trend-count">${t.count}</span></div>`).join('');
  }
  container.innerHTML = html || (q ? '<div class="trend-item"><span class="trend-name">No matching trends</span></div>' : '<div class="trend-item"><span class="trend-name">Search or pick a category</span></div>');
}

document.querySelectorAll('.explore-tab').forEach(tab => {
  tab.addEventListener('click', () => {
    document.querySelectorAll('.explore-tab').forEach(t => t.classList.remove('active'));
    tab.classList.add('active');
    activeFilter = tab.dataset.filter || 'all';
    const si = document.getElementById('exploreSearch');
    renderExploreResults(activeFilter, si ? si.value : '');
  });
});
const exploreSearchEl = document.getElementById('exploreSearch');
if (exploreSearchEl) {
  exploreSearchEl.addEventListener('input', (e) => renderExploreResults(activeFilter, e.target.value));
}
function initExplore() { renderExploreResults('all', ''); }
initExplore();

// Extra: demo notifications when opened (makes view "work")
document.querySelectorAll('.nav-item[data-view="notifications"], .mobile-nav a[data-view="notifications"]').forEach(el => {
  el.addEventListener('click', () => {
    setTimeout(() => {
      const nl = document.getElementById('notificationsList');
      if (nl && !nl.innerHTML.trim()) {
        nl.innerHTML = '<div class="empty-note">No notifications yet.<br>Like and repost to see activity here (demo).</div>';
      }
    }, 80);
  });
});

// messages / lists / more are nav-only stubs (switch view, fallback to home content). Ok for assignment UX.
console.log('%c[additional] loaded — edit + explore + stubs ready (polls in core)', 'color:#555');
=======
// additional.js - Other features (manual + extra)
// This file contains features beyond the core Zaio base + Cursor features.
// Will be loaded after script.js

// ---------- MANUAL FEATURE: Interactive Polls (chilled & goofy comments) ----------
// yo this is my manual feature zone, no Cursor allowed here
// i built the idea while chilling on the couch with chips, super goofy vibes only
// "hey what if we add polls? sounds fun right? let's do it"
// STUDENT: replace this entire function + handlers with real poll creation UI + render logic
// (but keep the chill comments, they make it fun)

const inlinePollBtn = document.getElementById('inlinePollBtn');
const modalPollBtn = document.getElementById('modalPollBtn');

function stubPoll() {
  // yo this is my manual feature zone, no Cursor allowed here
  // i built the idea while chilling on the couch with chips, super goofy vibes only
  // "hey what if we add polls? sounds fun right? let's do it"
  // STUDENT: replace this entire function + handlers with real poll creation UI + render logic
  // (but keep the chill comments, they make it fun)
  alert('This is a stub for your manual feature.\n\nImplement "Add poll" here (question + options, post with poll data, interactive votes in feed).');
  // Example future shape when posting:
  // tweet.poll = { question: "Best JS framework?", options: [{text:"React", votes:12}, ...] }
  // lol imagine asking people to vote while you're just here for the memes
}

if (inlinePollBtn) inlinePollBtn.addEventListener('click', stubPoll);
if (modalPollBtn) modalPollBtn.addEventListener('click', stubPoll);

// ---------- BOOKMARKS (extra feature) ----------
function renderBookmarks(){
  const container = document.getElementById('bookmarksFeed');
  if (!container) return;
  const filtered = tweets.filter(t => bookmarked.has(t.id));
  container.innerHTML = filtered.length 
    ? filtered.map(tweetTemplate).join('') 
    : '<div style="padding:40px 20px; color:var(--text-dim); text-align:center;">No bookmarks yet.<br>Tap the bookmark icon on tweets to save them here.</div>';
}

// Bookmark handler (moved to additional)
document.getElementById('feed').addEventListener('click', (e) => {
  const article = e.target.closest('.tweet');
  if(!article) return;
  const id = Number(article.dataset.id);
  const tweet = tweets.find(t => t.id === id);

  if(e.target.closest('.bookmark-btn')){
    const bmId = id;
    if (bookmarked.has(bmId)) {
      bookmarked.delete(bmId);
    } else {
      bookmarked.add(bmId);
      showToast("Added to Bookmarks");
    }
    article.outerHTML = tweetTemplate(tweet);
    saveToStorage();
  }
});

// Delete handler (moved to additional)
document.getElementById('feed').addEventListener('click', (e) => {
  const article = e.target.closest('.tweet');
  if(!article) return;
  const id = Number(article.dataset.id);

  if(e.target.closest('.delete-btn')){
    if (confirm('Delete this post?')) {
      const idx = tweets.findIndex(tt => tt.id === id);
      if (idx > -1) {
        tweets.splice(idx, 1);
        renderFeed();
        if (homeTab === 'following') renderFeed(); // in case
        saveToStorage();
      }
    }
  }
});

// ---------- DELETE TWEET (extra) ----------
// Delete handler is currently in the main interaction listener.
// We can extract it here if wanted.

console.log('Additional features loaded (manual polls + extras)');
>>>>>>> 1a9351420fdda11bea65590c6eeede194eaec6d2
