// Visuals helpers — warm gold-on-onyx gradient placeholders for stock images.
// Deterministic per-query so the same card always gets the same backdrop.

const GRADIENTS = [
  "linear-gradient(135deg, #1A1814 0%, #2A2620 55%, #5A4D42 110%)",
  "linear-gradient(135deg, #1A1814 0%, #3A2E1E 60%, #B8924C 140%)",
  "linear-gradient(160deg, #2A2620 0%, #1A1814 55%, #6B5841 120%)",
  "linear-gradient(135deg, #1F1B16 0%, #2A2620 50%, #B8924C 130%)",
  "linear-gradient(150deg, #1A1814 0%, #2A2620 50%, #3A2E1E 100%)",
  "linear-gradient(140deg, #15110D 0%, #2A2620 60%, #B8924C 110%)",
  "linear-gradient(160deg, #1A1814 0%, #2E2A22 60%, #C9A19A 140%)",
  "linear-gradient(135deg, #1A1814 0%, #2A2620 60%, #7E5E2C 130%)",
];

export function gradientFor(query) {
  const text = String(query || "");
  let hash = 0;
  for (let i = 0; i < text.length; i++) {
    hash = (hash * 31 + text.charCodeAt(i)) >>> 0;
  }
  return GRADIENTS[hash % GRADIENTS.length];
}
