import { useState, useEffect } from 'react';
import { DataClient } from '@strikingly/sdk';
import { STRK_PROJECT_URL, STRK_PROJECT_ANON_KEY } from '@/config.jsx';

/**
 * User Records page
 *
 * ID column   → record.id  (FormEntity top-level id, NOT from schema properties)
 * User ID col → Users.localId  (resolved by frontend mapping; NOT the internal user ID
 *               stored in entity.data.userid)
 *
 * Why frontend mapping is required:
 *   entity.data.userid = Internal User ID (e.g. 245358)
 *   x-foreignKey: "users.id" only declares the relation — the API does NOT
 *   automatically project this to localId.  We must fetch Users and build
 *   an internalId → localId map ourselves.
 */

const client = new DataClient(STRK_PROJECT_URL, STRK_PROJECT_ANON_KEY);

const STATUS = {
  IDLE: 'idle',
  LOADING: 'loading',
  READY: 'ready',
  ERROR: 'error',
};

export default function UserRecords() {
  const [records, setRecords] = useState([]);
  // Map<internalUserId, localId>  e.g. { 245358: 16, 245357: 15 }
  const [internalToLocalId, setInternalToLocalId] = useState({});
  const [status, setStatus] = useState(STATUS.IDLE);
  const [error, setError] = useState(null);
  // Honest note about how localId resolution was achieved (or why it failed)
  const [resolutionNote, setResolutionNote] = useState('');

  useEffect(() => {
    let cancelled = false;

    async function load() {
      setStatus(STATUS.LOADING);
      setError(null);

      // ── Step 1: fetch User Records entities ──────────────────────────────
      const { data: entitiesResp, error: entitiesErr } = await client
        .from('User Records')
        .select('*')
        .order('id', { ascending: true });

      if (cancelled) return;

      if (entitiesErr) {
        setError(entitiesErr.message || 'Failed to load User Records');
        setStatus(STATUS.ERROR);
        return;
      }

      const rows = entitiesResp?.data?.list ?? [];
      setRecords(rows);

      // ── Step 2: resolve internalId → localId ─────────────────────────────
      // entity.data.userid holds the INTERNAL user ID (e.g. 245358).
      // We need to query Users and build the mapping.
      try {
        const { data: usersResp, error: usersErr } = await client
          .from('Users')
          .select('*');

        if (cancelled) return;

        if (usersErr) throw new Error(usersErr.message);

        const userList = usersResp?.data?.list ?? [];

        if (userList.length > 0) {
          // Build internalId → localId map
          const map = {};
          userList.forEach((u) => {
            if (u.id != null && u.localId != null) {
              map[u.id] = u.localId;
            }
          });
          setInternalToLocalId(map);
          setResolutionNote(
            `✅ localId resolved via Users table (${userList.length} users fetched). ` +
            `entity.data.userid = Internal User ID → mapped to Users.localId on the frontend.`
          );
        } else {
          // Users table returned empty — backend may not expose it to this client
          setResolutionNote(
            '⚠️ Backend limitation: Users table returned 0 rows via DataClient. ' +
            'localId cannot be resolved automatically. ' +
            'Showing internal user ID as fallback. ' +
            'A backend projection endpoint (e.g. GET /users?ids=...) would be needed to fix this properly.'
          );
        }
      } catch (e) {
        if (cancelled) return;
        // Users table is not queryable via DataClient — this is a backend projection gap
        setResolutionNote(
          `⚠️ Backend limitation: Users table is not queryable via DataClient (${e.message}). ` +
          'x-foreignKey declares the relation but does NOT auto-project to localId. ' +
          'Showing internal user ID as fallback. ' +
          'To display localId, a dedicated user-lookup API is required.'
        );
      }

      if (!cancelled) setStatus(STATUS.READY);
    }

    load();
    return () => { cancelled = true; };
  }, []);

  // Helper: given entity.data.userid (internal ID), return localId or fallback label
  function resolveLocalId(internalId) {
    if (internalToLocalId[internalId] !== undefined) {
      return internalToLocalId[internalId];
    }
    // Honest fallback — make it obvious this is NOT localId
    return (
      <span className="text-amber-600 font-mono text-xs">
        internal:{internalId}
      </span>
    );
  }

  return (
    <div className="min-h-screen bg-slate-50 py-12 px-4">
      <div className="max-w-4xl mx-auto">

        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-slate-900 mb-1">User Records</h1>
          <p className="text-slate-500 text-sm">
            Table: <code className="bg-slate-100 px-1 rounded">User Records</code> (form_id 1616)
          </p>
        </div>

        {/* ID rules explanation */}
        <div className="bg-blue-50 border border-blue-200 rounded-xl p-5 mb-6 text-sm text-blue-900 space-y-1">
          <p className="font-semibold">Column mapping rules</p>
          <p>
            <span className="font-mono bg-blue-100 px-1 rounded">ID</span>
            {' '}→ <code>record.id</code> — FormEntity top-level system field.
            Not stored in <code>schema.properties</code> or <code>entity.data</code>.
          </p>
          <p>
            <span className="font-mono bg-blue-100 px-1 rounded">User ID</span>
            {' '}→ <code>Users.localId</code> — resolved by frontend mapping.
            The DB stores <code>entity.data.userid = Internal User ID</code>.
            <code>x-foreignKey: "users.id"</code> declares the relation only;
            it does <strong>not</strong> auto-project to localId.
          </p>
        </div>

        {/* Resolution status */}
        {resolutionNote && (
          <div className={`rounded-xl p-4 mb-6 text-sm border ${
            resolutionNote.startsWith('✅')
              ? 'bg-green-50 border-green-200 text-green-800'
              : 'bg-amber-50 border-amber-200 text-amber-800'
          }`}>
            {resolutionNote}
          </div>
        )}

        {/* Loading */}
        {status === STATUS.LOADING && (
          <div className="text-slate-500 py-12 text-center">Loading…</div>
        )}

        {/* Error */}
        {status === STATUS.ERROR && (
          <div className="bg-red-50 border border-red-200 text-red-700 rounded-xl p-5">
            {error}
          </div>
        )}

        {/* Table */}
        {status === STATUS.READY && (
          <div className="bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-slate-50 border-b border-slate-200">
                  <th className="text-left px-5 py-3 font-semibold text-slate-700 w-28">
                    ID
                    <span className="block text-xs font-normal text-slate-400">FormEntity.id</span>
                  </th>
                  <th className="text-left px-5 py-3 font-semibold text-slate-700 w-32">
                    User ID
                    <span className="block text-xs font-normal text-slate-400">Users.localId</span>
                  </th>
                  <th className="text-left px-5 py-3 font-semibold text-slate-700">
                    Note
                  </th>
                  <th className="text-left px-5 py-3 font-semibold text-slate-400 w-40 text-xs">
                    Raw userid
                    <span className="block font-normal">(entity.data.userid)</span>
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {records.length === 0 && (
                  <tr>
                    <td colSpan={4} className="px-5 py-8 text-center text-slate-400">
                      No records found.
                    </td>
                  </tr>
                )}
                {records.map((record) => (
                  <tr key={record.id} className="hover:bg-slate-50 transition-colors">
                    {/* ID = FormEntity.id (top-level system field) */}
                    <td className="px-5 py-4 font-mono font-semibold text-slate-900">
                      {record.id}
                    </td>
                    {/* User ID = resolved localId (NOT internal user ID) */}
                    <td className="px-5 py-4 font-semibold text-brand-blue">
                      {resolveLocalId(record.data.userid)}
                    </td>
                    {/* Note */}
                    <td className="px-5 py-4 text-slate-600">
                      {record.data.note ?? '—'}
                    </td>
                    {/* Raw internal user ID — shown for transparency */}
                    <td className="px-5 py-4 font-mono text-xs text-slate-400">
                      {record.data.userid}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}

        {/* Legend */}
        {status === STATUS.READY && (
          <div className="mt-6 text-xs text-slate-400 space-y-1">
            <p>
              <strong>ID</strong>: auto-generated by Bobcat as <code>FormEntity.id</code>.
              Never written to <code>entity.data</code>.
            </p>
            <p>
              <strong>User ID</strong>: displayed as <code>Users.localId</code> after frontend mapping.
              Stored in DB as <code>entity.data.userid = Internal User ID</code>.
            </p>
            <p>
              <strong>Raw userid</strong>: the actual value stored in the database.
              Shown here for transparency to confirm the mapping is working correctly.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
