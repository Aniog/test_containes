// Entry point for /generators hub page.
//
// The page is rendered statically in index.html so it appears in the
// initial server-rendered source and remains fully usable with JavaScript
// disabled. App.jsx intentionally renders nothing. We deliberately avoid
// ReactDOM.createRoot() here because mounting React into any element
// (including document.body) would clear its existing children, wiping out
// the static page markup on first render.
//
// Instead we just no-op. If a future page needs real React rendering,
// mount into a fresh <div id="react-island"></div> that does not contain
// static content, or switch to ReactDOM.hydrateRoot against a server-
// rendered shell.

if (import.meta.env.DEV) {
  import("./visual-edit/index.js");
}

export default function mount() {
  // intentionally empty
}
