# Design Principles

## Visual Style
The application follows a clean, modern, and accessible design inspired by shadcn/ui and Tailwind CSS. It uses a slate-based color palette with a primary blue accent for highlights and actions.

## Typography
- **Font Family:** Inter (Google Fonts)
- **Base Font Size:** 16px
- **Headings:** Bold with tight tracking (`tracking-tight`)

## Colors
- **Background:** White (`#ffffff`) for light mode, Slate-950 (`#020617`) for dark mode.
- **Primary:** Blue-600 (`#2563eb`)
- **Destructive:** Red-600 (`#dc2626`)
- **Muted:** Slate-500 (`#64748b`)

## UI Components
- **Cards:** Rounded corners (`rounded-xl`), subtle borders (`border`), and soft shadows (`shadow`).
- **Buttons:** Clearly defined variants (default, outline, ghost, destructive) with consistent padding and hover transitions.
- **Inputs:** Focused state with a primary-colored ring (`ring-1 ring-ring`).
- **Checkboxes:** Thematic primary color when checked.

## Spacing and Alignment
- **Containers:** Content is centered with a max-width and responsive padding.
- **Gaps:** Generous use of `gap` and `space-y` for clarity and breathability.

## Responsiveness
- **Mobile First:** All layouts are designed to be mobile-friendly.
- **Desktop:** Scales gracefully using max-width constraints on card containers.
