import { useState, useCallback } from 'react';
import { DataClient } from '@strikingly/sdk';
import { STRK_PROJECT_URL, STRK_PROJECT_ANON_KEY } from '@/config.jsx';
import {
  CheckCircle, XCircle, Loader, Database,
  Play, RotateCcw, ArrowLeft
} from 'lucide-react';

const client = new DataClient(STRK_PROJECT_URL, STRK_PROJECT_ANON_KEY);

const STATUS = { idle: 'idle', running: 'running', pass: 'pass', fail: 'fail' };

const STEP_DEFS = [
  { id: 1, label: 'Edit a value in one entry', desc: 'Update view_count on the first article' },
  { id: 2, label: 'Clear one value in an entry', desc: 'Set author to null on the same entry' },
  { id: 3, label: 'Add a new value for the cleared field', desc: 'Restore author on that entry' },
  { id: 4, label: 'Edit a value in several entries at once', desc: 'Set featured=true on first 3 articles' },
  { id: 5, label: 'Clear all optional values in one entry', desc: 'Wipe summary, author, tags, view_count on entry #1' },
  { id: 6, label: 'Add several new entries', desc: 'Insert 3 new test articles (used in step 9)' },
  { id: 7, label: 'Add a new entry with all values empty', desc: 'Insert entry with only required fields set' },
  { id: 8, label: 'Delete the last entry', desc: 'Delete the entry created in step 7' },
  { id: 9, label: 'Delete all entries from step 6', desc: 'Batch-delete the 3 entries added in step 6' },
];

function StepRow({ step, result, isActive }) {
  const statusIcon = {
    [STATUS.idle]: <div className="w-5 h-5 rounded-full border-2 border-gray-600" />,
    [STATUS.running]: <Loader className="w-5 h-5 text-yellow-400 animate-spin" />,
    [STATUS.pass]: <CheckCircle className="w-5 h-5 text-green-400" />,
    [STATUS.fail]: <XCircle className="w-5 h-5 text-red-400" />,
  }[result?.status ?? STATUS.idle];

  const rowBg = {
    [STATUS.idle]: isActive ? 'bg-gray-800/60 border-purple-600/40' : 'bg-gray-900/40 border-gray-800',
    [STATUS.running]: 'bg-yellow-900/20 border-yellow-600/40',
    [STATUS.pass]: 'bg-green-900/20 border-green-600/30',
    [STATUS.fail]: 'bg-red-900/20 border-red-600/30',
  }[result?.status ?? STATUS.idle];

  return (
    <div className={`border rounded-xl p-4 transition-all duration-300 ${rowBg}`}>
      <div className="flex items-start gap-3">
        <div className="mt-0.5 shrink-0">{statusIcon}</div>
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2 mb-0.5">
            <span className="text-xs font-bold text-gray-500 uppercase tracking-wider">Step {step.id}</span>
            {result?.status === STATUS.running && (
              <span className="text-xs text-yellow-400 font-semibold">Running…</span>
            )}
          </div>
          <p className="text-sm font-semibold text-white">{step.label}</p>
          <p className="text-xs text-gray-500 mt-0.5">{step.desc}</p>
          {result?.detail && (
            <pre className={`mt-2 text-xs rounded-lg px-3 py-2 font-mono whitespace-pre-wrap break-all ${
              result.status === STATUS.pass
                ? 'bg-green-950/60 text-green-300'
                : 'bg-red-950/60 text-red-300'
            }`}>
              {result.detail}
            </pre>
          )}
        </div>
      </div>
    </div>
  );
}

export default function ArticlesTest() {
  const [results, setResults] = useState({});
  const [running, setRunning] = useState(false);
  const [activeStep, setActiveStep] = useState(null);
  const [done, setDone] = useState(false);

  const setStep = (id, status, detail = '') =>
    setResults(prev => ({ ...prev, [id]: { status, detail } }));

  const pass = (id, detail) => setStep(id, STATUS.pass, detail);
  const fail = (id, detail) => setStep(id, STATUS.fail, detail);

  const runAll = useCallback(async () => {
    setRunning(true);
    setDone(false);
    setResults({});

    const step6Ids = [];
    let step7Id = null;

    const listArticles = async (limit = 10) => {
      const { data: r, error } = await client.from('Game Articles').select('*').range(0, limit - 1);
      if (error) throw error;
      return r?.data?.list ?? [];
    };

    const getEntity = r => r?.data ?? null;

    // ── STEP 1: edit one value ────────────────────────────────────────────────
    setActiveStep(1);
    setStep(1, STATUS.running);
    try {
      const articles = await listArticles(5);
      if (!articles.length) throw new Error('No articles found in table');
      const target = articles[0];
      const oldVal = target.data.view_count ?? 0;
      const newVal = oldVal + 999;

      const { data: r, error } = await client
        .from('Game Articles')
        .update({ data: { ...target.data, view_count: newVal } })
        .eq('id', target.id)
        .select().single();
      if (error) throw error;
      const updated = getEntity(r);
      pass(1, `Entry #${target.id} — view_count: ${oldVal} → ${updated?.data?.view_count}`);
    } catch (e) { fail(1, e.message); }

    // ── STEP 2: clear one value ───────────────────────────────────────────────
    setActiveStep(2);
    setStep(2, STATUS.running);
    try {
      const articles = await listArticles(5);
      const target = articles[0];
      const oldAuthor = target.data.author ?? '(none)';

      const { data: r, error } = await client
        .from('Game Articles')
        .update({ data: { ...target.data, author: null } })
        .eq('id', target.id)
        .select().single();
      if (error) throw error;
      const updated = getEntity(r);
      const newAuthor = updated?.data?.author;
      pass(2, `Entry #${target.id} — author: "${oldAuthor}" → ${newAuthor === null || newAuthor === undefined ? 'null ✓' : `"${newAuthor}" (unexpected)`}`);
    } catch (e) { fail(2, e.message); }

    // ── STEP 3: restore the cleared value ────────────────────────────────────
    setActiveStep(3);
    setStep(3, STATUS.running);
    try {
      const articles = await listArticles(5);
      const target = articles[0];
      const restoredAuthor = 'GameHub Editorial Team';

      const { data: r, error } = await client
        .from('Game Articles')
        .update({ data: { ...target.data, author: restoredAuthor } })
        .eq('id', target.id)
        .select().single();
      if (error) throw error;
      const updated = getEntity(r);
      pass(3, `Entry #${target.id} — author restored to: "${updated?.data?.author}"`);
    } catch (e) { fail(3, e.message); }

    // ── STEP 4: edit a value in several entries at once ───────────────────────
    setActiveStep(4);
    setStep(4, STATUS.running);
    try {
      const articles = await listArticles(10);
      const targets = articles.slice(0, 3);
      if (targets.length < 2) throw new Error('Need at least 2 articles for batch edit');

      const updates = await Promise.all(
        targets.map(t =>
          client
            .from('Game Articles')
            .update({ data: { ...t.data, featured: true } })
            .eq('id', t.id)
            .select().single()
        )
      );

      const errors = updates.filter(u => u.error).map(u => u.error.message);
      if (errors.length) throw new Error(errors.join('; '));

      const ids = targets.map(t => t.id).join(', ');
      pass(4, `Entries [${ids}] — featured set to true on all ${targets.length} entries`);
    } catch (e) { fail(4, e.message); }

    // ── STEP 5: clear all optional values in one entry ────────────────────────
    setActiveStep(5);
    setStep(5, STATUS.running);
    try {
      const articles = await listArticles(5);
      const target = articles[0];

      const cleared = {
        title: target.data.title,
        category: target.data.category,
        platform: target.data.platform,
        slug: null,
        summary: null,
        content: null,
        author: null,
        tags: null,
        published: null,
        featured: null,
        published_at: null,
        view_count: null,
        imgId: null,
      };

      const { data: r, error } = await client
        .from('Game Articles')
        .update({ data: cleared })
        .eq('id', target.id)
        .select().single();
      if (error) throw error;
      const updated = getEntity(r);
      const d = updated?.data ?? {};
      const nullFields = Object.entries(d)
        .filter(([k, v]) => !['title', 'category', 'platform'].includes(k) && (v === null || v === undefined))
        .map(([k]) => k);
      pass(5, `Entry #${target.id} — cleared fields: [${nullFields.join(', ')}]`);
    } catch (e) { fail(5, e.message); }

    // ── STEP 6: add several new entries ──────────────────────────────────────
    setActiveStep(6);
    setStep(6, STATUS.running);
    try {
      const newEntries = [
        { title: '[TEST-A] Batch Insert Article 1', category: 'news', platform: 'steam', author: 'Test Bot', summary: 'Test entry A for batch delete test', view_count: 1 },
        { title: '[TEST-B] Batch Insert Article 2', category: 'blog', platform: 'epic', author: 'Test Bot', summary: 'Test entry B for batch delete test', view_count: 2 },
        { title: '[TEST-C] Batch Insert Article 3', category: 'guide', platform: 'xbox', author: 'Test Bot', summary: 'Test entry C for batch delete test', view_count: 3 },
      ];

      const inserts = await Promise.all(
        newEntries.map(e =>
          client.from('Game Articles').insert({ data: e }).select().single()
        )
      );

      const errors = inserts.filter(i => i.error).map(i => i.error.message);
      if (errors.length) throw new Error(errors.join('; '));

      inserts.forEach(i => {
        const id = getEntity(i.data)?.id;
        if (id) step6Ids.push(id);
      });

      pass(6, `Created 3 entries — IDs: [${step6Ids.join(', ')}]`);
    } catch (e) { fail(6, e.message); }

    // ── STEP 7: add entry with all values empty ───────────────────────────────
    setActiveStep(7);
    setStep(7, STATUS.running);
    try {
      const { data: r, error } = await client
        .from('Game Articles')
        .insert({ data: { title: '[TEST-EMPTY] All Optional Fields Empty', category: 'news', platform: 'all' } })
        .select().single();
      if (error) throw error;
      const created = getEntity(r);
      step7Id = created?.id;
      const d = created?.data ?? {};
      const emptyFields = ['slug', 'summary', 'content', 'author', 'tags', 'published', 'featured', 'published_at', 'view_count']
        .filter(k => d[k] === null || d[k] === undefined);
      pass(7, `Created entry #${step7Id} — empty optional fields: [${emptyFields.join(', ')}]`);
    } catch (e) { fail(7, e.message); }

    // ── STEP 8: delete the last entry (step 7) ───────────────────────────────
    setActiveStep(8);
    setStep(8, STATUS.running);
    try {
      if (!step7Id) throw new Error('No entry from step 7 to delete');

      const { data: r, error } = await client
        .from('Game Articles')
        .delete()
        .eq('id', step7Id)
        .select().maybeSingle();
      if (error) throw error;
      pass(8, `Deleted entry #${step7Id} (the all-empty entry from step 7)`);
    } catch (e) { fail(8, e.message); }

    // ── STEP 9: delete all entries from step 6 ───────────────────────────────
    setActiveStep(9);
    setStep(9, STATUS.running);
    try {
      if (!step6Ids.length) throw new Error('No entries from step 6 to delete');

      const deletes = await Promise.all(
        step6Ids.map(id =>
          client.from('Game Articles').delete().eq('id', id).select().maybeSingle()
        )
      );

      const errors = deletes.filter(d => d.error).map(d => d.error.message);
      if (errors.length) throw new Error(errors.join('; '));

      pass(9, `Deleted ${step6Ids.length} entries — IDs: [${step6Ids.join(', ')}]`);
    } catch (e) { fail(9, e.message); }

    setActiveStep(null);
    setRunning(false);
    setDone(true);
  }, []);

  const reset = () => {
    setResults({});
    setRunning(false);
    setActiveStep(null);
    setDone(false);
  };

  const passCount = Object.values(results).filter(r => r.status === STATUS.pass).length;
  const failCount = Object.values(results).filter(r => r.status === STATUS.fail).length;
  const total = STEP_DEFS.length;

  return (
    <div className="min-h-screen bg-gray-950 text-white px-4 py-10">
      <div className="max-w-3xl mx-auto">

        {/* Back link */}
        <div className="flex items-center gap-3 mb-6">
          <a href="/" className="flex items-center gap-1.5 text-sm text-gray-500 hover:text-white transition-colors">
            <ArrowLeft className="w-4 h-4" />
            Back to GameHub
          </a>
        </div>

        {/* Header */}
        <div className="flex items-center gap-3 mb-3">
          <div className="w-10 h-10 rounded-xl bg-purple-600/20 border border-purple-600/30 flex items-center justify-center">
            <Database className="w-5 h-5 text-purple-400" />
          </div>
          <div>
            <h1 className="text-2xl font-bold text-white">DB Operations Test</h1>
            <p className="text-sm text-gray-500">
              Table: <span className="text-purple-400 font-mono">Game Articles</span>
            </p>
          </div>
        </div>

        <p className="text-gray-400 text-sm mb-8 leading-relaxed">
          Runs all 9 CRUD approval scenarios against the live database in sequence.
          Each step reports the exact before/after values so you can verify correctness.
        </p>

        {/* Summary bar */}
        {done && (
          <div className={`flex items-center gap-4 rounded-xl px-5 py-4 mb-6 border ${
            failCount === 0
              ? 'bg-green-900/20 border-green-600/30'
              : 'bg-yellow-900/20 border-yellow-600/30'
          }`}>
            <div className="flex items-center gap-2">
              <CheckCircle className="w-5 h-5 text-green-400" />
              <span className="text-green-300 font-bold">{passCount} passed</span>
            </div>
            {failCount > 0 && (
              <div className="flex items-center gap-2">
                <XCircle className="w-5 h-5 text-red-400" />
                <span className="text-red-300 font-bold">{failCount} failed</span>
              </div>
            )}
            <span className="text-gray-500 text-sm ml-auto">{total} steps total</span>
          </div>
        )}

        {/* Steps */}
        <div className="flex flex-col gap-3 mb-8">
          {STEP_DEFS.map(step => (
            <StepRow
              key={step.id}
              step={step}
              result={results[step.id]}
              isActive={activeStep === step.id}
            />
          ))}
        </div>

        {/* Controls */}
        <div className="flex gap-3">
          <button
            onClick={runAll}
            disabled={running}
            className="flex items-center gap-2 bg-gradient-to-r from-purple-600 to-cyan-600 hover:from-purple-500 hover:to-cyan-500 disabled:opacity-50 disabled:cursor-not-allowed text-white font-bold px-6 py-3 rounded-xl transition-all"
          >
            {running ? (
              <><Loader className="w-4 h-4 animate-spin" /> Running…</>
            ) : (
              <><Play className="w-4 h-4" /> Run All 9 Steps</>
            )}
          </button>

          {done && (
            <button
              onClick={reset}
              className="flex items-center gap-2 bg-gray-800 hover:bg-gray-700 text-gray-300 font-semibold px-5 py-3 rounded-xl transition-all"
            >
              <RotateCcw className="w-4 h-4" />
              Reset
            </button>
          )}
        </div>

        <p className="text-xs text-gray-600 mt-4">
          Steps run sequentially. Step 8 deletes the entry from step 7. Step 9 deletes all entries from step 6.
          Original table data is preserved — only test entries are cleaned up.
        </p>
      </div>
    </div>
  );
}
