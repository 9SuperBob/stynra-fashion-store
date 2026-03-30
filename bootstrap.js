const isGitHubPages = window.location.hostname.endsWith("github.io");

if (isGitHubPages) {
  const base = "/stynra-fashion-store/";
  const stylesheet = document.createElement("link");
  stylesheet.rel = "stylesheet";
  stylesheet.href = `${base}assets/site.css`;
  document.head.appendChild(stylesheet);
  import(`${base}assets/site.js`);
} else {
  import("/src/main.jsx");
}
