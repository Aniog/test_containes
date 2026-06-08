const LogoMark = ({ size = 80 }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 80 80"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
  >
    {/* Green large triangle */}
    <polygon points="8,72 72,72 8,8" fill="#22C55E" />
    {/* Purple/indigo small triangle overlay */}
    <polygon points="35,72 72,72 72,35" fill="#7C3AED" opacity="0.85" />
    {/* White diagonal stripe lines */}
    <line x1="8" y1="20" x2="32" y2="20" stroke="white" strokeWidth="3.5" strokeLinecap="round" />
    <line x1="8" y1="29" x2="26" y2="29" stroke="white" strokeWidth="3.5" strokeLinecap="round" />
    <line x1="8" y1="38" x2="20" y2="38" stroke="white" strokeWidth="3.5" strokeLinecap="round" />
  </svg>
);

export default LogoMark;
