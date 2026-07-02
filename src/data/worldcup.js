// FIFA World Cup 2026 Data
// Hosted by USA, Canada, Mexico

export const tournament = {
  name: 'FIFA World Cup 2026',
  edition: '23rd',
  hosts: ['United States', 'Canada', 'Mexico'],
  startDate: '2026-06-11',
  endDate: '2026-07-19',
  teams: 48,
  venues: 16,
  currentPhase: 'Group Stage',
};

export const groups = [
  {
    id: 'A',
    teams: [
      { name: 'Brazil', flag: '🇧🇷', played: 2, won: 2, drawn: 0, lost: 0, gf: 5, ga: 1, pts: 6 },
      { name: 'Mexico', flag: '🇲🇽', played: 2, won: 1, drawn: 1, lost: 0, gf: 3, ga: 2, pts: 4 },
      { name: 'Croatia', flag: '🇭🇷', played: 2, won: 0, drawn: 1, lost: 1, gf: 2, ga: 3, pts: 1 },
      { name: 'Cameroon', flag: '🇨🇲', played: 2, won: 0, drawn: 0, lost: 2, gf: 1, ga: 5, pts: 0 },
    ],
  },
  {
    id: 'B',
    teams: [
      { name: 'France', flag: '🇫🇷', played: 2, won: 2, drawn: 0, lost: 0, gf: 6, ga: 2, pts: 6 },
      { name: 'Argentina', flag: '🇦🇷', played: 2, won: 1, drawn: 0, lost: 1, gf: 4, ga: 3, pts: 3 },
      { name: 'Denmark', flag: '🇩🇰', played: 2, won: 1, drawn: 0, lost: 1, gf: 3, ga: 4, pts: 3 },
      { name: 'Tunisia', flag: '🇹🇳', played: 2, won: 0, drawn: 0, lost: 2, gf: 1, ga: 5, pts: 0 },
    ],
  },
  {
    id: 'C',
    teams: [
      { name: 'Spain', flag: '🇪🇸', played: 2, won: 2, drawn: 0, lost: 0, gf: 7, ga: 1, pts: 6 },
      { name: 'Germany', flag: '🇩🇪', played: 2, won: 1, drawn: 0, lost: 1, gf: 4, ga: 3, pts: 3 },
      { name: 'Japan', flag: '🇯🇵', played: 2, won: 1, drawn: 0, lost: 1, gf: 3, ga: 4, pts: 3 },
      { name: 'Costa Rica', flag: '🇨🇷', played: 2, won: 0, drawn: 0, lost: 2, gf: 0, ga: 6, pts: 0 },
    ],
  },
  {
    id: 'D',
    teams: [
      { name: 'England', flag: '🏴󠁧󠁢󠁥󠁮󠁧󠁿', played: 2, won: 1, drawn: 1, lost: 0, gf: 4, ga: 2, pts: 4 },
      { name: 'USA', flag: '🇺🇸', played: 2, won: 1, drawn: 1, lost: 0, gf: 3, ga: 2, pts: 4 },
      { name: 'Iran', flag: '🇮🇷', played: 2, won: 0, drawn: 1, lost: 1, gf: 2, ga: 4, pts: 1 },
      { name: 'Wales', flag: '🏴󠁧󠁢󠁷󠁬󠁳󠁿', played: 2, won: 0, drawn: 1, lost: 1, gf: 1, ga: 2, pts: 1 },
    ],
  },
  {
    id: 'E',
    teams: [
      { name: 'Portugal', flag: '🇵🇹', played: 2, won: 2, drawn: 0, lost: 0, gf: 5, ga: 1, pts: 6 },
      { name: 'Netherlands', flag: '🇳🇱', played: 2, won: 1, drawn: 0, lost: 1, gf: 3, ga: 3, pts: 3 },
      { name: 'Ecuador', flag: '🇪🇨', played: 2, won: 1, drawn: 0, lost: 1, gf: 3, ga: 3, pts: 3 },
      { name: 'Senegal', flag: '🇸🇳', played: 2, won: 0, drawn: 0, lost: 2, gf: 1, ga: 5, pts: 0 },
    ],
  },
  {
    id: 'F',
    teams: [
      { name: 'Morocco', flag: '🇲🇦', played: 2, won: 1, drawn: 1, lost: 0, gf: 3, ga: 1, pts: 4 },
      { name: 'Belgium', flag: '🇧🇪', played: 2, won: 1, drawn: 1, lost: 0, gf: 3, ga: 2, pts: 4 },
      { name: 'Canada', flag: '🇨🇦', played: 2, won: 0, drawn: 1, lost: 1, gf: 2, ga: 3, pts: 1 },
      { name: 'Croatia', flag: '🇭🇷', played: 2, won: 0, drawn: 1, lost: 1, gf: 1, ga: 3, pts: 1 },
    ],
  },
];

export const matches = [
  {
    id: 1,
    group: 'A',
    date: '2026-06-11',
    time: '18:00',
    homeTeam: { name: 'Brazil', flag: '🇧🇷' },
    awayTeam: { name: 'Mexico', flag: '🇲🇽' },
    homeScore: 2,
    awayScore: 1,
    status: 'finished',
    venue: 'SoFi Stadium, Los Angeles',
  },
  {
    id: 2,
    group: 'B',
    date: '2026-06-12',
    time: '15:00',
    homeTeam: { name: 'France', flag: '🇫🇷' },
    awayTeam: { name: 'Argentina', flag: '🇦🇷' },
    homeScore: 3,
    awayScore: 1,
    status: 'finished',
    venue: 'MetLife Stadium, New York',
  },
  {
    id: 3,
    group: 'C',
    date: '2026-06-13',
    time: '21:00',
    homeTeam: { name: 'Spain', flag: '🇪🇸' },
    awayTeam: { name: 'Germany', flag: '🇩🇪' },
    homeScore: 2,
    awayScore: 1,
    status: 'finished',
    venue: 'AT&T Stadium, Dallas',
  },
  {
    id: 4,
    group: 'D',
    date: '2026-06-14',
    time: '18:00',
    homeTeam: { name: 'England', flag: '🏴󠁧󠁢󠁥󠁮󠁧󠁿' },
    awayTeam: { name: 'USA', flag: '🇺🇸' },
    homeScore: 1,
    awayScore: 1,
    status: 'finished',
    venue: 'Levi\'s Stadium, San Francisco',
  },
  {
    id: 5,
    group: 'E',
    date: '2026-07-02',
    time: '20:00',
    homeTeam: { name: 'Portugal', flag: '🇵🇹' },
    awayTeam: { name: 'Netherlands', flag: '🇳🇱' },
    homeScore: 2,
    awayScore: 1,
    status: 'live',
    minute: 67,
    venue: 'Estadio Azteca, Mexico City',
  },
  {
    id: 6,
    group: 'F',
    date: '2026-07-02',
    time: '22:00',
    homeTeam: { name: 'Morocco', flag: '🇲🇦' },
    awayTeam: { name: 'Belgium', flag: '🇧🇪' },
    homeScore: null,
    awayScore: null,
    status: 'upcoming',
    venue: 'Estadio BBVA, Monterrey',
  },
  {
    id: 7,
    group: 'A',
    date: '2026-07-03',
    time: '18:00',
    homeTeam: { name: 'Brazil', flag: '🇧🇷' },
    awayTeam: { name: 'Cameroon', flag: '🇨🇲' },
    homeScore: null,
    awayScore: null,
    status: 'upcoming',
    venue: 'Rose Bowl, Pasadena',
  },
  {
    id: 8,
    group: 'B',
    date: '2026-07-03',
    time: '21:00',
    homeTeam: { name: 'France', flag: '🇫🇷' },
    awayTeam: { name: 'Denmark', flag: '🇩🇰' },
    homeScore: null,
    awayScore: null,
    status: 'upcoming',
    venue: 'Gillette Stadium, Boston',
  },
];

export const topScorers = [
  { rank: 1, name: 'Kylian Mbappé', team: 'France', flag: '🇫🇷', goals: 5, assists: 2, imgId: 'scorer-mbappe-a1b2c3' },
  { rank: 2, name: 'Vinicius Jr.', team: 'Brazil', flag: '🇧🇷', goals: 4, assists: 3, imgId: 'scorer-vinicius-d4e5f6' },
  { rank: 3, name: 'Cristiano Ronaldo', team: 'Portugal', flag: '🇵🇹', goals: 4, assists: 1, imgId: 'scorer-ronaldo-g7h8i9' },
  { rank: 4, name: 'Pedri', team: 'Spain', flag: '🇪🇸', goals: 3, assists: 4, imgId: 'scorer-pedri-j1k2l3' },
  { rank: 5, name: 'Erling Haaland', team: 'Norway', flag: '🇳🇴', goals: 3, assists: 1, imgId: 'scorer-haaland-m4n5o6' },
  { rank: 6, name: 'Harry Kane', team: 'England', flag: '🏴󠁧󠁢󠁥󠁮󠁧󠁿', goals: 3, assists: 0, imgId: 'scorer-kane-p7q8r9' },
];

export const venues = [
  { name: 'MetLife Stadium', city: 'New York', country: 'USA', capacity: 82500, imgId: 'venue-metlife-s1t2u3' },
  { name: 'SoFi Stadium', city: 'Los Angeles', country: 'USA', capacity: 70240, imgId: 'venue-sofi-v4w5x6' },
  { name: 'AT&T Stadium', city: 'Dallas', country: 'USA', capacity: 80000, imgId: 'venue-att-y7z8a9' },
  { name: 'Estadio Azteca', city: 'Mexico City', country: 'Mexico', capacity: 87523, imgId: 'venue-azteca-b1c2d3' },
  { name: 'BC Place', city: 'Vancouver', country: 'Canada', capacity: 54500, imgId: 'venue-bcplace-e4f5g6' },
  { name: 'BMO Field', city: 'Toronto', country: 'Canada', capacity: 45736, imgId: 'venue-bmo-h7i8j9' },
];

export const knockoutBracket = {
  roundOf16: [
    { home: { name: 'Brazil', flag: '🇧🇷' }, away: { name: 'Denmark', flag: '🇩🇰' }, homeScore: null, awayScore: null, date: '2026-07-05' },
    { home: { name: 'France', flag: '🇫🇷' }, away: { name: 'Japan', flag: '🇯🇵' }, homeScore: null, awayScore: null, date: '2026-07-05' },
    { home: { name: 'Spain', flag: '🇪🇸' }, away: { name: 'USA', flag: '🇺🇸' }, homeScore: null, awayScore: null, date: '2026-07-06' },
    { home: { name: 'England', flag: '🏴󠁧󠁢󠁥󠁮󠁧󠁿' }, away: { name: 'Morocco', flag: '🇲🇦' }, homeScore: null, awayScore: null, date: '2026-07-06' },
    { home: { name: 'Portugal', flag: '🇵🇹' }, away: { name: 'Argentina', flag: '🇦🇷' }, homeScore: null, awayScore: null, date: '2026-07-07' },
    { home: { name: 'Netherlands', flag: '🇳🇱' }, away: { name: 'Mexico', flag: '🇲🇽' }, homeScore: null, awayScore: null, date: '2026-07-07' },
    { home: { name: 'Germany', flag: '🇩🇪' }, away: { name: 'Belgium', flag: '🇧🇪' }, homeScore: null, awayScore: null, date: '2026-07-08' },
    { home: { name: 'Croatia', flag: '🇭🇷' }, away: { name: 'Canada', flag: '🇨🇦' }, homeScore: null, awayScore: null, date: '2026-07-08' },
  ],
  quarterFinals: [
    { home: { name: 'TBD', flag: '🏳️' }, away: { name: 'TBD', flag: '🏳️' }, homeScore: null, awayScore: null, date: '2026-07-11' },
    { home: { name: 'TBD', flag: '🏳️' }, away: { name: 'TBD', flag: '🏳️' }, homeScore: null, awayScore: null, date: '2026-07-11' },
    { home: { name: 'TBD', flag: '🏳️' }, away: { name: 'TBD', flag: '🏳️' }, homeScore: null, awayScore: null, date: '2026-07-12' },
    { home: { name: 'TBD', flag: '🏳️' }, away: { name: 'TBD', flag: '🏳️' }, homeScore: null, awayScore: null, date: '2026-07-12' },
  ],
  semiFinals: [
    { home: { name: 'TBD', flag: '🏳️' }, away: { name: 'TBD', flag: '🏳️' }, homeScore: null, awayScore: null, date: '2026-07-15' },
    { home: { name: 'TBD', flag: '🏳️' }, away: { name: 'TBD', flag: '🏳️' }, homeScore: null, awayScore: null, date: '2026-07-16' },
  ],
  final: { home: { name: 'TBD', flag: '🏳️' }, away: { name: 'TBD', flag: '🏳️' }, homeScore: null, awayScore: null, date: '2026-07-19' },
};
