// Client-side enhancements for the /generators hub page.
// Vanilla JS only — no React hydration. The SSR'd HTML is the source
// of truth; this module just loads the styles and the progressive-
// enhancement script. The page is fully usable without this file.

import './styles/generators.css';
import './components/generators/client.js';
