// Slim announcement strip — fixed-height, low contrast, editable
// from a single array. Intentionally short; one line, centered.
const MESSAGES = [
  "Complimentary worldwide shipping on orders over $75",
  "Now shipping: the Royal Heirloom Set, limited release",
  "30-day returns on every order, no questions asked",
];

export default function Announcement() {
  return (
    <div className="bg-ink-950 text-ink-300">
      <div className="mx-auto flex h-9 max-w-wide items-center justify-center px-6">
        <p className="font-sans text-[10px] font-medium uppercase tracking-widest2 text-ink-300">
          {MESSAGES[0]}
        </p>
      </div>
    </div>
  );
}
