// 没接墨世界杯 2026 数据

export const tournament = {
  name: '没接墨世界杯 2026',
  edition: '第一届',
  year: 2026,
  host: '没接墨联合王国',
  dates: '2026年6月1日 - 2026年7月15日',
  stadiums: 16,
  teams: 32,
  motto: '激情·荣耀·传奇',
};

export const groups = [
  {
    id: 'A',
    name: 'A组',
    teams: [
      { id: 1, name: '龙腾队', flag: '🐉', country: '东方龙国', group: 'A', played: 3, won: 3, drawn: 0, lost: 0, gf: 9, ga: 2, pts: 9 },
      { id: 2, name: '凤凰队', flag: '🦅', country: '南方凤凰国', group: 'A', played: 3, won: 2, drawn: 0, lost: 1, gf: 6, ga: 4, pts: 6 },
      { id: 3, name: '虎啸队', flag: '🐯', country: '北方虎国', group: 'A', played: 3, won: 1, drawn: 0, lost: 2, gf: 3, ga: 7, pts: 3 },
      { id: 4, name: '鹰翔队', flag: '🦁', country: '西方鹰国', group: 'A', played: 3, won: 0, drawn: 0, lost: 3, gf: 1, ga: 6, pts: 0 },
    ],
  },
  {
    id: 'B',
    name: 'B组',
    teams: [
      { id: 5, name: '星辰队', flag: '⭐', country: '星辰帝国', group: 'B', played: 3, won: 2, drawn: 1, lost: 0, gf: 7, ga: 3, pts: 7 },
      { id: 6, name: '月影队', flag: '🌙', country: '月影王国', group: 'B', played: 3, won: 2, drawn: 0, lost: 1, gf: 5, ga: 4, pts: 6 },
      { id: 7, name: '雷霆队', flag: '⚡', country: '雷霆共和国', group: 'B', played: 3, won: 1, drawn: 0, lost: 2, gf: 4, ga: 6, pts: 3 },
      { id: 8, name: '冰川队', flag: '❄️', country: '冰川联邦', group: 'B', played: 3, won: 0, drawn: 1, lost: 2, gf: 2, ga: 5, pts: 1 },
    ],
  },
  {
    id: 'C',
    name: 'C组',
    teams: [
      { id: 9, name: '烈焰队', flag: '🔥', country: '烈焰国', group: 'C', played: 3, won: 3, drawn: 0, lost: 0, gf: 10, ga: 1, pts: 9 },
      { id: 10, name: '海浪队', flag: '🌊', country: '海浪岛国', group: 'C', played: 3, won: 1, drawn: 1, lost: 1, gf: 4, ga: 5, pts: 4 },
      { id: 11, name: '风暴队', flag: '🌪️', country: '风暴大陆', group: 'C', played: 3, won: 1, drawn: 1, lost: 1, gf: 3, ga: 4, pts: 4 },
      { id: 12, name: '山岳队', flag: '⛰️', country: '山岳王国', group: 'C', played: 3, won: 0, drawn: 0, lost: 3, gf: 1, ga: 8, pts: 0 },
    ],
  },
  {
    id: 'D',
    name: 'D组',
    teams: [
      { id: 13, name: '黄金队', flag: '🏆', country: '黄金共和国', group: 'D', played: 3, won: 2, drawn: 1, lost: 0, gf: 8, ga: 2, pts: 7 },
      { id: 14, name: '银河队', flag: '🌌', country: '银河联盟', group: 'D', played: 3, won: 2, drawn: 0, lost: 1, gf: 6, ga: 4, pts: 6 },
      { id: 15, name: '翡翠队', flag: '💎', country: '翡翠国', group: 'D', played: 3, won: 0, drawn: 2, lost: 1, gf: 3, ga: 5, pts: 2 },
      { id: 16, name: '紫晶队', flag: '🔮', country: '紫晶帝国', group: 'D', played: 3, won: 0, drawn: 1, lost: 2, gf: 2, ga: 8, pts: 1 },
    ],
  },
];

export const allTeams = groups.flatMap(g => g.teams);

export const matches = [
  // 小组赛 A组
  { id: 1, stage: '小组赛', group: 'A', date: '2026-06-01', time: '18:00', home: '龙腾队', homeFlag: '🐉', away: '虎啸队', awayFlag: '🐯', homeScore: 3, awayScore: 1, status: 'finished', stadium: '龙腾体育场' },
  { id: 2, stage: '小组赛', group: 'A', date: '2026-06-01', time: '21:00', home: '凤凰队', homeFlag: '🦅', away: '鹰翔队', awayFlag: '🦁', homeScore: 2, awayScore: 0, status: 'finished', stadium: '凤凰竞技场' },
  { id: 3, stage: '小组赛', group: 'A', date: '2026-06-05', time: '18:00', home: '龙腾队', homeFlag: '🐉', away: '鹰翔队', awayFlag: '🦁', homeScore: 4, awayScore: 0, status: 'finished', stadium: '龙腾体育场' },
  { id: 4, stage: '小组赛', group: 'A', date: '2026-06-05', time: '21:00', home: '凤凰队', homeFlag: '🦅', away: '虎啸队', awayFlag: '🐯', homeScore: 2, awayScore: 1, status: 'finished', stadium: '凤凰竞技场' },
  { id: 5, stage: '小组赛', group: 'A', date: '2026-06-09', time: '20:00', home: '龙腾队', homeFlag: '🐉', away: '凤凰队', awayFlag: '🦅', homeScore: 2, awayScore: 1, status: 'finished', stadium: '中央体育场' },
  { id: 6, stage: '小组赛', group: 'A', date: '2026-06-09', time: '20:00', home: '虎啸队', homeFlag: '🐯', away: '鹰翔队', awayFlag: '🦁', homeScore: 1, awayScore: 1, status: 'finished', stadium: '北方竞技场' },

  // 小组赛 B组
  { id: 7, stage: '小组赛', group: 'B', date: '2026-06-02', time: '18:00', home: '星辰队', homeFlag: '⭐', away: '冰川队', awayFlag: '❄️', homeScore: 3, awayScore: 1, status: 'finished', stadium: '星辰体育场' },
  { id: 8, stage: '小组赛', group: 'B', date: '2026-06-02', time: '21:00', home: '月影队', homeFlag: '🌙', away: '雷霆队', awayFlag: '⚡', homeScore: 2, awayScore: 1, status: 'finished', stadium: '月影竞技场' },
  { id: 9, stage: '小组赛', group: 'B', date: '2026-06-06', time: '18:00', home: '星辰队', homeFlag: '⭐', away: '雷霆队', awayFlag: '⚡', homeScore: 2, awayScore: 2, status: 'finished', stadium: '星辰体育场' },
  { id: 10, stage: '小组赛', group: 'B', date: '2026-06-06', time: '21:00', home: '月影队', homeFlag: '🌙', away: '冰川队', awayFlag: '❄️', homeScore: 2, awayScore: 0, status: 'finished', stadium: '月影竞技场' },
  { id: 11, stage: '小组赛', group: 'B', date: '2026-06-10', time: '20:00', home: '星辰队', homeFlag: '⭐', away: '月影队', awayFlag: '🌙', homeScore: 2, awayScore: 1, status: 'finished', stadium: '中央体育场' },
  { id: 12, stage: '小组赛', group: 'B', date: '2026-06-10', time: '20:00', home: '雷霆队', homeFlag: '⚡', away: '冰川队', awayFlag: '❄️', homeScore: 1, awayScore: 1, status: 'finished', stadium: '南方竞技场' },

  // 小组赛 C组
  { id: 13, stage: '小组赛', group: 'C', date: '2026-06-03', time: '18:00', home: '烈焰队', homeFlag: '🔥', away: '山岳队', awayFlag: '⛰️', homeScore: 4, awayScore: 0, status: 'finished', stadium: '烈焰体育场' },
  { id: 14, stage: '小组赛', group: 'C', date: '2026-06-03', time: '21:00', home: '海浪队', homeFlag: '🌊', away: '风暴队', awayFlag: '🌪️', homeScore: 1, awayScore: 1, status: 'finished', stadium: '海浪竞技场' },
  { id: 15, stage: '小组赛', group: 'C', date: '2026-06-07', time: '18:00', home: '烈焰队', homeFlag: '🔥', away: '风暴队', awayFlag: '🌪️', homeScore: 3, awayScore: 1, status: 'finished', stadium: '烈焰体育场' },
  { id: 16, stage: '小组赛', group: 'C', date: '2026-06-07', time: '21:00', home: '海浪队', homeFlag: '🌊', away: '山岳队', awayFlag: '⛰️', homeScore: 2, awayScore: 1, status: 'finished', stadium: '海浪竞技场' },
  { id: 17, stage: '小组赛', group: 'C', date: '2026-06-11', time: '20:00', home: '烈焰队', homeFlag: '🔥', away: '海浪队', awayFlag: '🌊', homeScore: 3, awayScore: 1, status: 'finished', stadium: '中央体育场' },
  { id: 18, stage: '小组赛', group: 'C', date: '2026-06-11', time: '20:00', home: '风暴队', homeFlag: '🌪️', away: '山岳队', awayFlag: '⛰️', homeScore: 1, awayScore: 0, status: 'finished', stadium: '东方竞技场' },

  // 小组赛 D组
  { id: 19, stage: '小组赛', group: 'D', date: '2026-06-04', time: '18:00', home: '黄金队', homeFlag: '🏆', away: '紫晶队', awayFlag: '🔮', homeScore: 3, awayScore: 1, status: 'finished', stadium: '黄金体育场' },
  { id: 20, stage: '小组赛', group: 'D', date: '2026-06-04', time: '21:00', home: '银河队', homeFlag: '🌌', away: '翡翠队', awayFlag: '💎', homeScore: 2, awayScore: 1, status: 'finished', stadium: '银河竞技场' },
  { id: 21, stage: '小组赛', group: 'D', date: '2026-06-08', time: '18:00', home: '黄金队', homeFlag: '🏆', away: '翡翠队', awayFlag: '💎', homeScore: 2, awayScore: 2, status: 'finished', stadium: '黄金体育场' },
  { id: 22, stage: '小组赛', group: 'D', date: '2026-06-08', time: '21:00', home: '银河队', homeFlag: '🌌', away: '紫晶队', awayFlag: '🔮', homeScore: 3, awayScore: 0, status: 'finished', stadium: '银河竞技场' },
  { id: 23, stage: '小组赛', group: 'D', date: '2026-06-12', time: '20:00', home: '黄金队', homeFlag: '🏆', away: '银河队', awayFlag: '🌌', homeScore: 3, awayScore: 1, status: 'finished', stadium: '中央体育场' },
  { id: 24, stage: '小组赛', group: 'D', date: '2026-06-12', time: '20:00', home: '翡翠队', homeFlag: '💎', away: '紫晶队', awayFlag: '🔮', homeScore: 0, awayScore: 1, status: 'finished', stadium: '西方竞技场' },

  // 淘汰赛 - 八强
  { id: 25, stage: '八强', group: null, date: '2026-06-20', time: '20:00', home: '龙腾队', homeFlag: '🐉', away: '星辰队', awayFlag: '⭐', homeScore: 2, awayScore: 1, status: 'finished', stadium: '中央体育场' },
  { id: 26, stage: '八强', group: null, date: '2026-06-21', time: '20:00', home: '烈焰队', homeFlag: '🔥', away: '凤凰队', awayFlag: '🦅', homeScore: 3, awayScore: 2, status: 'finished', stadium: '中央体育场' },
  { id: 27, stage: '八强', group: null, date: '2026-06-22', time: '20:00', home: '黄金队', homeFlag: '🏆', away: '月影队', awayFlag: '🌙', homeScore: 1, awayScore: 0, status: 'finished', stadium: '中央体育场' },
  { id: 28, stage: '八强', group: null, date: '2026-06-23', time: '20:00', home: '银河队', homeFlag: '🌌', away: '海浪队', awayFlag: '🌊', homeScore: 2, awayScore: 0, status: 'finished', stadium: '中央体育场' },

  // 四强
  { id: 29, stage: '四强', group: null, date: '2026-06-28', time: '20:00', home: '龙腾队', homeFlag: '🐉', away: '烈焰队', awayFlag: '🔥', homeScore: 2, awayScore: 1, status: 'finished', stadium: '决赛体育场' },
  { id: 30, stage: '四强', group: null, date: '2026-06-29', time: '20:00', home: '黄金队', homeFlag: '🏆', away: '银河队', awayFlag: '🌌', homeScore: 3, awayScore: 2, status: 'finished', stadium: '决赛体育场' },

  // 三四名决赛
  { id: 31, stage: '三四名', group: null, date: '2026-07-12', time: '18:00', home: '烈焰队', homeFlag: '🔥', away: '银河队', awayFlag: '🌌', homeScore: null, awayScore: null, status: 'upcoming', stadium: '决赛体育场' },

  // 决赛
  { id: 32, stage: '决赛', group: null, date: '2026-07-15', time: '20:00', home: '龙腾队', homeFlag: '🐉', away: '黄金队', awayFlag: '🏆', homeScore: null, awayScore: null, status: 'upcoming', stadium: '大决赛体育场' },
];

export const topScorers = [
  { rank: 1, name: '龙飞', team: '龙腾队', flag: '🐉', goals: 7, assists: 3 },
  { rank: 2, name: '金炎', team: '烈焰队', flag: '🔥', goals: 6, assists: 2 },
  { rank: 3, name: '星耀', team: '星辰队', flag: '⭐', goals: 5, assists: 4 },
  { rank: 4, name: '黄金', team: '黄金队', flag: '🏆', goals: 5, assists: 1 },
  { rank: 5, name: '银河', team: '银河队', flag: '🌌', goals: 4, assists: 3 },
  { rank: 6, name: '凤舞', team: '凤凰队', flag: '🦅', goals: 4, assists: 2 },
  { rank: 7, name: '月明', team: '月影队', flag: '🌙', goals: 3, assists: 5 },
  { rank: 8, name: '海啸', team: '海浪队', flag: '🌊', goals: 3, assists: 1 },
];

export const knockoutBracket = {
  quarterFinals: [
    { home: '龙腾队', homeFlag: '🐉', away: '星辰队', awayFlag: '⭐', homeScore: 2, awayScore: 1, winner: '龙腾队' },
    { home: '烈焰队', homeFlag: '🔥', away: '凤凰队', awayFlag: '🦅', homeScore: 3, awayScore: 2, winner: '烈焰队' },
    { home: '黄金队', homeFlag: '🏆', away: '月影队', awayFlag: '🌙', homeScore: 1, awayScore: 0, winner: '黄金队' },
    { home: '银河队', homeFlag: '🌌', away: '海浪队', awayFlag: '🌊', homeScore: 2, awayScore: 0, winner: '银河队' },
  ],
  semiFinals: [
    { home: '龙腾队', homeFlag: '🐉', away: '烈焰队', awayFlag: '🔥', homeScore: 2, awayScore: 1, winner: '龙腾队' },
    { home: '黄金队', homeFlag: '🏆', away: '银河队', awayFlag: '🌌', homeScore: 3, awayScore: 2, winner: '黄金队' },
  ],
  final: { home: '龙腾队', homeFlag: '🐉', away: '黄金队', awayFlag: '🏆', homeScore: null, awayScore: null, winner: null },
  thirdPlace: { home: '烈焰队', homeFlag: '🔥', away: '银河队', awayFlag: '🌌', homeScore: null, awayScore: null, winner: null },
};
