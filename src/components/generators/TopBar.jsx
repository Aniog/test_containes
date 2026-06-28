// Strikingly AI logo SVG — inline, decorative
const StrikinglyLogo = () => (
  <svg
    aria-hidden="true"
    focusable="false"
    width="140"
    height="28"
    viewBox="0 0 140 28"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    {/* Lightning bolt mark */}
    <path
      d="M10 2L4 14h6l-2 12 12-16h-7l3-8H10z"
      fill="url(#logo-grad)"
    />
    {/* Wordmark */}
    <text
      x="26"
      y="20"
      fontFamily="'Josefin Sans', 'Poppins', sans-serif"
      fontWeight="700"
      fontSize="15"
      fill="#2E2E2F"
      letterSpacing="0.5"
    >
      strikingly
    </text>
    <text
      x="100"
      y="20"
      fontFamily="'Josefin Sans', 'Poppins', sans-serif"
      fontWeight="700"
      fontSize="11"
      fill="url(#logo-grad)"
      letterSpacing="0.3"
    >
      AI
    </text>
    <defs>
      <linearGradient id="logo-grad" x1="0" y1="0" x2="1" y2="0">
        <stop offset="0%" stopColor="#7671FF" />
        <stop offset="100%" stopColor="#CB0C9F" />
      </linearGradient>
    </defs>
  </svg>
);

export default function TopBar() {
  return (
    <header
      style={{
        background: "#ffffff",
        borderBottom: "1px solid #E2E4E7",
        position: "sticky",
        top: 0,
        zIndex: 100,
      }}
    >
      <div className="content-wrap" style={{ paddingBlock: "12px" }}>
        <a
          href="/"
          aria-label="Strikingly home"
          style={{ display: "inline-flex", alignItems: "center" }}
        >
          <StrikinglyLogo />
        </a>
      </div>
    </header>
  );
}
