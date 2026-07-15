const placeholder = (w, h, text, bg = '1E1A17', fg = 'CBAF87') =>
  `https://placehold.co/${w}x${h}/${bg}/${fg}?text=${encodeURIComponent(text)}`;

export const ugcReels = [
  {
    id: 'reel-1',
    caption: 'Morning light + gold huggies',
    image: placeholder(540, 960, 'Ear Stack Reel'),
  },
  {
    id: 'reel-2',
    caption: 'Layered necklaces for date night',
    image: placeholder(540, 960, 'Necklace Layering'),
  },
  {
    id: 'reel-3',
    caption: 'The ear cuff everyone asks about',
    image: placeholder(540, 960, 'Ear Cuff Close Up'),
  },
  {
    id: 'reel-4',
    caption: 'Self-gifted, well deserved',
    image: placeholder(540, 960, 'Unboxing Moment'),
  },
  {
    id: 'reel-5',
    caption: 'Minimal but never boring',
    image: placeholder(540, 960, 'Daily Gold Stack'),
  },
];
