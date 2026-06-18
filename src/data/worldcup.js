// FIFA World Cup 2026 Data

export const tournament = {
  name: "FIFA World Cup 2026",
  edition: "23rd",
  hosts: ["United States", "Canada", "Mexico"],
  hostFlags: ["🇺🇸", "🇨🇦", "🇲🇽"],
  startDate: "2026-06-11",
  endDate: "2026-07-19",
  teams: 48,
  matches: 104,
  venues: 16,
  currentPhase: "Group Stage",
};

export const groups = [
  {
    id: "A",
    teams: [
      { name: "Mexico", flag: "🇲🇽", played: 2, won: 2, drawn: 0, lost: 0, gf: 5, ga: 1, pts: 6, form: ["W", "W"] },
      { name: "Poland", flag: "🇵🇱", played: 2, won: 1, drawn: 0, lost: 1, gf: 3, ga: 3, pts: 3, form: ["W", "L"] },
      { name: "Saudi Arabia", flag: "🇸🇦", played: 2, won: 1, drawn: 0, lost: 1, gf: 2, ga: 3, pts: 3, form: ["L", "W"] },
      { name: "Argentina", flag: "🇦🇷", played: 2, won: 0, drawn: 0, lost: 2, gf: 1, ga: 4, pts: 0, form: ["L", "L"] },
    ],
  },
  {
    id: "B",
    teams: [
      { name: "England", flag: "🏴󠁧󠁢󠁥󠁮󠁧󠁿", played: 2, won: 2, drawn: 0, lost: 0, gf: 6, ga: 2, pts: 6, form: ["W", "W"] },
      { name: "USA", flag: "🇺🇸", played: 2, won: 1, drawn: 1, lost: 0, gf: 3, ga: 2, pts: 4, form: ["D", "W"] },
      { name: "Iran", flag: "🇮🇷", played: 2, won: 0, drawn: 1, lost: 1, gf: 2, ga: 4, pts: 1, form: ["D", "L"] },
      { name: "Wales", flag: "🏴󠁧󠁢󠁷󠁬󠁳󠁿", played: 2, won: 0, drawn: 0, lost: 2, gf: 1, ga: 4, pts: 0, form: ["L", "L"] },
    ],
  },
  {
    id: "C",
    teams: [
      { name: "France", flag: "🇫🇷", played: 2, won: 2, drawn: 0, lost: 0, gf: 7, ga: 1, pts: 6, form: ["W", "W"] },
      { name: "Denmark", flag: "🇩🇰", played: 2, won: 1, drawn: 0, lost: 1, gf: 3, ga: 3, pts: 3, form: ["W", "L"] },
      { name: "Tunisia", flag: "🇹🇳", played: 2, won: 0, drawn: 1, lost: 1, gf: 1, ga: 3, pts: 1, form: ["D", "L"] },
      { name: "Australia", flag: "🇦🇺", played: 2, won: 0, drawn: 1, lost: 1, gf: 2, ga: 6, pts: 1, form: ["L", "D"] },
    ],
  },
  {
    id: "D",
    teams: [
      { name: "Brazil", flag: "🇧🇷", played: 2, won: 2, drawn: 0, lost: 0, gf: 5, ga: 0, pts: 6, form: ["W", "W"] },
      { name: "Switzerland", flag: "🇨🇭", played: 2, won: 1, drawn: 0, lost: 1, gf: 2, ga: 2, pts: 3, form: ["W", "L"] },
      { name: "Cameroon", flag: "🇨🇲", played: 2, won: 0, drawn: 1, lost: 1, gf: 1, ga: 2, pts: 1, form: ["D", "L"] },
      { name: "Serbia", flag: "🇷🇸", played: 2, won: 0, drawn: 1, lost: 1, gf: 2, ga: 6, pts: 1, form: ["L", "D"] },
    ],
  },
  {
    id: "E",
    teams: [
      { name: "Spain", flag: "🇪🇸", played: 2, won: 1, drawn: 1, lost: 0, gf: 4, ga: 2, pts: 4, form: ["W", "D"] },
      { name: "Germany", flag: "🇩🇪", played: 2, won: 1, drawn: 1, lost: 0, gf: 3, ga: 2, pts: 4, form: ["D", "W"] },
      { name: "Japan", flag: "🇯🇵", played: 2, won: 1, drawn: 0, lost: 1, gf: 3, ga: 3, pts: 3, form: ["W", "L"] },
      { name: "Costa Rica", flag: "🇨🇷", played: 2, won: 0, drawn: 0, lost: 2, gf: 0, ga: 3, pts: 0, form: ["L", "L"] },
    ],
  },
  {
    id: "F",
    teams: [
      { name: "Morocco", flag: "🇲🇦", played: 2, won: 2, drawn: 0, lost: 0, gf: 4, ga: 1, pts: 6, form: ["W", "W"] },
      { name: "Croatia", flag: "🇭🇷", played: 2, won: 1, drawn: 0, lost: 1, gf: 3, ga: 2, pts: 3, form: ["W", "L"] },
      { name: "Belgium", flag: "🇧🇪", played: 2, won: 1, drawn: 0, lost: 1, gf: 2, ga: 3, pts: 3, form: ["L", "W"] },
      { name: "Canada", flag: "🇨🇦", played: 2, won: 0, drawn: 0, lost: 2, gf: 1, ga: 4, pts: 0, form: ["L", "L"] },
    ],
  },
  {
    id: "G",
    teams: [
      { name: "Portugal", flag: "🇵🇹", played: 2, won: 2, drawn: 0, lost: 0, gf: 6, ga: 2, pts: 6, form: ["W", "W"] },
      { name: "Uruguay", flag: "🇺🇾", played: 2, won: 1, drawn: 0, lost: 1, gf: 3, ga: 3, pts: 3, form: ["W", "L"] },
      { name: "South Korea", flag: "🇰🇷", played: 2, won: 1, drawn: 0, lost: 1, gf: 3, ga: 4, pts: 3, form: ["L", "W"] },
      { name: "Ghana", flag: "🇬🇭", played: 2, won: 0, drawn: 0, lost: 2, gf: 2, ga: 5, pts: 0, form: ["L", "L"] },
    ],
  },
  {
    id: "H",
    teams: [
      { name: "Netherlands", flag: "🇳🇱", played: 2, won: 2, drawn: 0, lost: 0, gf: 5, ga: 1, pts: 6, form: ["W", "W"] },
      { name: "Senegal", flag: "🇸🇳", played: 2, won: 1, drawn: 0, lost: 1, gf: 3, ga: 3, pts: 3, form: ["L", "W"] },
      { name: "Ecuador", flag: "🇪🇨", played: 2, won: 1, drawn: 0, lost: 1, gf: 2, ga: 2, pts: 3, form: ["W", "L"] },
      { name: "Qatar", flag: "🇶🇦", played: 2, won: 0, drawn: 0, lost: 2, gf: 1, ga: 5, pts: 0, form: ["L", "L"] },
    ],
  },
];

export const matches = [
  // Group A
  { id: 1, group: "A", date: "2026-06-11", time: "18:00", home: "Mexico", homeFlag: "🇲🇽", away: "Poland", awayFlag: "🇵🇱", homeScore: 2, awayScore: 0, venue: "SoFi Stadium", city: "Los Angeles", status: "FT" },
  { id: 2, group: "A", date: "2026-06-12", time: "15:00", home: "Argentina", homeFlag: "🇦🇷", away: "Saudi Arabia", awayFlag: "🇸🇦", homeScore: 1, awayScore: 2, venue: "AT&T Stadium", city: "Dallas", status: "FT" },
  { id: 3, group: "A", date: "2026-06-16", time: "18:00", home: "Poland", homeFlag: "🇵🇱", away: "Saudi Arabia", awayFlag: "🇸🇦", homeScore: 2, awayScore: 0, venue: "MetLife Stadium", city: "New York", status: "FT" },
  { id: 4, group: "A", date: "2026-06-16", time: "21:00", home: "Mexico", homeFlag: "🇲🇽", away: "Argentina", awayFlag: "🇦🇷", homeScore: 3, awayScore: 1, venue: "Rose Bowl", city: "Pasadena", status: "FT" },
  // Group B
  { id: 5, group: "B", date: "2026-06-13", time: "15:00", home: "USA", homeFlag: "🇺🇸", away: "Wales", awayFlag: "🏴󠁧󠁢󠁷󠁬󠁳󠁿", homeScore: 1, awayScore: 1, venue: "Levi's Stadium", city: "San Francisco", status: "FT" },
  { id: 6, group: "B", date: "2026-06-13", time: "18:00", home: "England", homeFlag: "🏴󠁧󠁢󠁥󠁮󠁧󠁿", away: "Iran", awayFlag: "🇮🇷", homeScore: 3, awayScore: 1, venue: "Arrowhead Stadium", city: "Kansas City", status: "FT" },
  { id: 7, group: "B", date: "2026-06-17", time: "15:00", home: "USA", homeFlag: "🇺🇸", away: "England", awayFlag: "🏴󠁧󠁢󠁥󠁮󠁧󠁿", homeScore: 0, awayScore: 2, venue: "Gillette Stadium", city: "Boston", status: "FT" },
  { id: 8, group: "B", date: "2026-06-17", time: "18:00", home: "Iran", homeFlag: "🇮🇷", away: "Wales", awayFlag: "🏴󠁧󠁢󠁷󠁬󠁳󠁿", homeScore: 2, awayScore: 0, venue: "Lincoln Financial Field", city: "Philadelphia", status: "FT" },
  // Group C
  { id: 9, group: "C", date: "2026-06-14", time: "15:00", home: "France", homeFlag: "🇫🇷", away: "Australia", awayFlag: "🇦🇺", homeScore: 4, awayScore: 1, venue: "BC Place", city: "Vancouver", status: "FT" },
  { id: 10, group: "C", date: "2026-06-14", time: "18:00", home: "Denmark", homeFlag: "🇩🇰", away: "Tunisia", awayFlag: "🇹🇳", homeScore: 0, awayScore: 0, venue: "BMO Field", city: "Toronto", status: "FT" },
  { id: 11, group: "C", date: "2026-06-18", time: "15:00", home: "France", homeFlag: "🇫🇷", away: "Denmark", awayFlag: "🇩🇰", homeScore: 2, awayScore: 1, venue: "Estadio Azteca", city: "Mexico City", status: "FT" },
  { id: 12, group: "C", date: "2026-06-18", time: "18:00", home: "Tunisia", homeFlag: "🇹🇳", away: "Australia", awayFlag: "🇦🇺", homeScore: 1, awayScore: 1, venue: "Estadio BBVA", city: "Monterrey", status: "FT" },
  // Group D
  { id: 13, group: "D", date: "2026-06-14", time: "21:00", home: "Brazil", homeFlag: "🇧🇷", away: "Serbia", awayFlag: "🇷🇸", homeScore: 2, awayScore: 0, venue: "NRG Stadium", city: "Houston", status: "FT" },
  { id: 14, group: "D", date: "2026-06-15", time: "15:00", home: "Switzerland", homeFlag: "🇨🇭", away: "Cameroon", awayFlag: "🇨🇲", homeScore: 1, awayScore: 0, venue: "Allegiant Stadium", city: "Las Vegas", status: "FT" },
  { id: 15, group: "D", date: "2026-06-19", time: "15:00", home: "Brazil", homeFlag: "🇧🇷", away: "Switzerland", awayFlag: "🇨🇭", homeScore: 1, awayScore: 0, venue: "Hard Rock Stadium", city: "Miami", status: "FT" },
  { id: 16, group: "D", date: "2026-06-19", time: "18:00", home: "Cameroon", homeFlag: "🇨🇲", away: "Serbia", awayFlag: "🇷🇸", homeScore: 3, awayScore: 3, venue: "Bank of America Stadium", city: "Charlotte", status: "FT" },
  // Group E
  { id: 17, group: "E", date: "2026-06-15", time: "18:00", home: "Germany", homeFlag: "🇩🇪", away: "Japan", awayFlag: "🇯🇵", homeScore: 1, awayScore: 2, venue: "MetLife Stadium", city: "New York", status: "FT" },
  { id: 18, group: "E", date: "2026-06-15", time: "21:00", home: "Spain", homeFlag: "🇪🇸", away: "Costa Rica", awayFlag: "🇨🇷", homeScore: 3, awayScore: 0, venue: "SoFi Stadium", city: "Los Angeles", status: "FT" },
  { id: 19, group: "E", date: "2026-06-19", time: "21:00", home: "Spain", homeFlag: "🇪🇸", away: "Germany", awayFlag: "🇩🇪", homeScore: 1, awayScore: 1, venue: "AT&T Stadium", city: "Dallas", status: "FT" },
  { id: 20, group: "E", date: "2026-06-20", time: "15:00", home: "Japan", homeFlag: "🇯🇵", away: "Costa Rica", awayFlag: "🇨🇷", homeScore: 0, awayScore: 1, venue: "Levi's Stadium", city: "San Francisco", status: "FT" },
  // Group F
  { id: 21, group: "F", date: "2026-06-16", time: "15:00", home: "Morocco", homeFlag: "🇲🇦", away: "Croatia", awayFlag: "🇭🇷", homeScore: 0, awayScore: 0, venue: "Rose Bowl", city: "Pasadena", status: "FT" },
  { id: 22, group: "F", date: "2026-06-16", time: "18:00", home: "Belgium", homeFlag: "🇧🇪", away: "Canada", awayFlag: "🇨🇦", homeScore: 1, awayScore: 0, venue: "BC Place", city: "Vancouver", status: "FT" },
  { id: 23, group: "F", date: "2026-06-20", time: "18:00", home: "Morocco", homeFlag: "🇲🇦", away: "Belgium", awayFlag: "🇧🇪", homeScore: 2, awayScore: 0, venue: "BMO Field", city: "Toronto", status: "FT" },
  { id: 24, group: "F", date: "2026-06-20", time: "21:00", home: "Croatia", homeFlag: "🇭🇷", away: "Canada", awayFlag: "🇨🇦", homeScore: 4, awayScore: 1, venue: "Estadio Azteca", city: "Mexico City", status: "FT" },
  // Group G
  { id: 25, group: "G", date: "2026-06-17", time: "21:00", home: "Portugal", homeFlag: "🇵🇹", away: "Ghana", awayFlag: "🇬🇭", homeScore: 3, awayScore: 2, venue: "Estadio BBVA", city: "Monterrey", status: "FT" },
  { id: 26, group: "G", date: "2026-06-17", time: "18:00", home: "Uruguay", homeFlag: "🇺🇾", away: "South Korea", awayFlag: "🇰🇷", homeScore: 0, awayScore: 2, venue: "NRG Stadium", city: "Houston", status: "FT" },
  { id: 27, group: "G", date: "2026-06-21", time: "15:00", home: "Portugal", homeFlag: "🇵🇹", away: "Uruguay", awayFlag: "🇺🇾", homeScore: 2, awayScore: 0, venue: "Allegiant Stadium", city: "Las Vegas", status: "FT" },
  { id: 28, group: "G", date: "2026-06-21", time: "18:00", home: "South Korea", homeFlag: "🇰🇷", away: "Ghana", awayFlag: "🇬🇭", homeScore: 2, awayScore: 3, venue: "Hard Rock Stadium", city: "Miami", status: "FT" },
  // Group H
  { id: 29, group: "H", date: "2026-06-18", time: "21:00", home: "Netherlands", homeFlag: "🇳🇱", away: "Senegal", awayFlag: "🇸🇳", homeScore: 2, awayScore: 0, venue: "Bank of America Stadium", city: "Charlotte", status: "FT" },
  { id: 30, group: "H", date: "2026-06-18", time: "15:00", home: "Ecuador", homeFlag: "🇪🇨", away: "Qatar", awayFlag: "🇶🇦", homeScore: 2, awayScore: 0, venue: "Arrowhead Stadium", city: "Kansas City", status: "FT" },
  { id: 31, group: "H", date: "2026-06-22", time: "15:00", home: "Netherlands", homeFlag: "🇳🇱", away: "Ecuador", awayFlag: "🇪🇨", homeScore: 1, awayScore: 1, venue: "Gillette Stadium", city: "Boston", status: "FT" },
  { id: 32, group: "H", date: "2026-06-22", time: "18:00", home: "Senegal", homeFlag: "🇸🇳", away: "Qatar", awayFlag: "🇶🇦", homeScore: 3, awayScore: 1, venue: "Lincoln Financial Field", city: "Philadelphia", status: "FT" },
  // Round of 16 (upcoming)
  { id: 33, group: "R16", date: "2026-06-26", time: "18:00", home: "Mexico", homeFlag: "🇲🇽", away: "Netherlands", awayFlag: "🇳🇱", homeScore: null, awayScore: null, venue: "SoFi Stadium", city: "Los Angeles", status: "UPCOMING" },
  { id: 34, group: "R16", date: "2026-06-26", time: "21:00", home: "England", homeFlag: "🏴󠁧󠁢󠁥󠁮󠁧󠁿", away: "Senegal", awayFlag: "🇸🇳", homeScore: null, awayScore: null, venue: "AT&T Stadium", city: "Dallas", status: "UPCOMING" },
  { id: 35, group: "R16", date: "2026-06-27", time: "18:00", home: "France", homeFlag: "🇫🇷", away: "Poland", awayFlag: "🇵🇱", homeScore: null, awayScore: null, venue: "MetLife Stadium", city: "New York", status: "UPCOMING" },
  { id: 36, group: "R16", date: "2026-06-27", time: "21:00", home: "Brazil", homeFlag: "🇧🇷", away: "South Korea", awayFlag: "🇰🇷", homeScore: null, awayScore: null, venue: "Rose Bowl", city: "Pasadena", status: "UPCOMING" },
  { id: 37, group: "R16", date: "2026-06-28", time: "18:00", home: "Morocco", homeFlag: "🇲🇦", away: "Spain", awayFlag: "🇪🇸", homeScore: null, awayScore: null, venue: "Levi's Stadium", city: "San Francisco", status: "UPCOMING" },
  { id: 38, group: "R16", date: "2026-06-28", time: "21:00", home: "Portugal", homeFlag: "🇵🇹", away: "Switzerland", awayFlag: "🇨🇭", homeScore: null, awayScore: null, venue: "BC Place", city: "Vancouver", status: "UPCOMING" },
  { id: 39, group: "R16", date: "2026-06-29", time: "18:00", home: "Germany", homeFlag: "🇩🇪", away: "Croatia", awayFlag: "🇭🇷", homeScore: null, awayScore: null, venue: "BMO Field", city: "Toronto", status: "UPCOMING" },
  { id: 40, group: "R16", date: "2026-06-29", time: "21:00", home: "Netherlands", homeFlag: "🇳🇱", away: "USA", awayFlag: "🇺🇸", homeScore: null, awayScore: null, venue: "Estadio Azteca", city: "Mexico City", status: "UPCOMING" },
];

export const topScorers = [
  { rank: 1, name: "Kylian Mbappé", country: "France", flag: "🇫🇷", goals: 4, assists: 2, matches: 2 },
  { rank: 2, name: "Cristiano Ronaldo", country: "Portugal", flag: "🇵🇹", goals: 3, assists: 1, matches: 2 },
  { rank: 3, name: "Neymar Jr.", country: "Brazil", flag: "🇧🇷", goals: 3, assists: 0, matches: 2 },
  { rank: 4, name: "Harry Kane", country: "England", flag: "🏴󠁧󠁢󠁥󠁮󠁧󠁿", goals: 3, assists: 1, matches: 2 },
  { rank: 5, name: "Hirving Lozano", country: "Mexico", flag: "🇲🇽", goals: 2, assists: 2, matches: 2 },
  { rank: 6, name: "Romelu Lukaku", country: "Belgium", flag: "🇧🇪", goals: 2, assists: 0, matches: 2 },
  { rank: 7, name: "Cody Gakpo", country: "Netherlands", flag: "🇳🇱", goals: 2, assists: 1, matches: 2 },
  { rank: 8, name: "Richarlison", country: "Brazil", flag: "🇧🇷", goals: 2, assists: 0, matches: 2 },
  { rank: 9, name: "Enner Valencia", country: "Ecuador", flag: "🇪🇨", goals: 2, assists: 0, matches: 2 },
  { rank: 10, name: "Kaoru Mitoma", country: "Japan", flag: "🇯🇵", goals: 2, assists: 1, matches: 2 },
];

export const goalsByGroup = [
  { group: "A", goals: 11 },
  { group: "B", goals: 9 },
  { group: "C", goals: 9 },
  { group: "D", goals: 9 },
  { group: "E", goals: 8 },
  { group: "F", goals: 8 },
  { group: "G", goals: 12 },
  { group: "H", goals: 9 },
];

export const continentStats = [
  { continent: "Europe", teams: 16, wins: 18, goals: 42 },
  { continent: "South America", teams: 6, wins: 8, goals: 18 },
  { continent: "Africa", teams: 9, wins: 6, goals: 14 },
  { continent: "Asia", teams: 8, wins: 5, goals: 12 },
  { continent: "CONCACAF", teams: 6, wins: 5, goals: 11 },
  { continent: "Oceania", teams: 1, wins: 0, goals: 2 },
];

export const venues = [
  { name: "MetLife Stadium", city: "New York", capacity: 82500, country: "USA", matches: 8 },
  { name: "SoFi Stadium", city: "Los Angeles", capacity: 70240, country: "USA", matches: 8 },
  { name: "AT&T Stadium", city: "Dallas", capacity: 80000, country: "USA", matches: 7 },
  { name: "Rose Bowl", city: "Pasadena", capacity: 92542, country: "USA", matches: 6 },
  { name: "Estadio Azteca", city: "Mexico City", capacity: 87523, country: "Mexico", matches: 5 },
  { name: "BC Place", city: "Vancouver", capacity: 54500, country: "Canada", matches: 5 },
];
