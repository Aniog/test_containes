import { DataClient } from '@strikingly/sdk';
import { STRK_PROJECT_URL, STRK_PROJECT_ANON_KEY } from '@/config.jsx';

const client = new DataClient(STRK_PROJECT_URL, STRK_PROJECT_ANON_KEY);

const getRows = (response) => response?.data?.list ?? [];

export async function fetchTeams() {
  const { data: response, error } = await client
    .from('Teams')
    .select('*')
    .order('group', { ascending: true })
    .order('points', { ascending: false })
    .limit(50);

  if (error) throw error;
  return getRows(response).map((row) => row.data ? { id: row.id, ...row.data } : row);
}

export function groupTeamsByGroup(teams) {
  const grouped = {};
  teams.forEach((team) => {
    const g = team.group || 'A';
    if (!grouped[g]) grouped[g] = [];
    grouped[g].push(team);
  });

  return Object.keys(grouped)
    .sort()
    .map((groupId) => ({
      id: groupId,
      teams: grouped[groupId].sort((a, b) => {
        if (b.points !== a.points) return b.points - a.points;
        const gdA = (a.goals_for || 0) - (a.goals_against || 0);
        const gdB = (b.goals_for || 0) - (b.goals_against || 0);
        if (gdB !== gdA) return gdB - gdA;
        return (b.goals_for || 0) - (a.goals_for || 0);
      }),
    }));
}
