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