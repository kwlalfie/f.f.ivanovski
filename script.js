// Loads Instagram's embed script so any instagram-media blockquotes
// on the page render as real embedded posts.
// Required whenever you replace an .insta-embed-slot with real embed code.

(function loadInstagramEmbed() {
  const script = document.createElement('script');
  script.async = true;
  script.src = '//www.instagram.com/embed.js';
  document.body.appendChild(script);
})();
