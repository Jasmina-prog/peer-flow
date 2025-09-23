'use client';

import { useMemo, useState } from 'react';
import { Search, X, CalendarCheck, Clock, Globe } from 'lucide-react';
// If you use Clerk you can import this and it will auto-pick language from publicMetadata
// import { useUser } from '@clerk/nextjs';

const MOCK = (lang) => ([
  { n:'Nilufar', s:lang, l:'Intermediate', score:95, avail:'Mon–Thu evenings', bio:'Frontend-leaning full-stack learner.' },
  { n:'Jamshid', s:lang, l:'Beginner',    score:91, avail:'Evenings',          bio:'CS freshman building first apps.' },
  { n:'Aziz',    s:lang, l:'Advanced',    score:89, avail:'Weekends',          bio:'Backend focused; wants to mentor a bit.' },
]);

export default function FindPage() {
  // const { user } = useUser();
  // const userLang = (user?.publicMetadata?.language) || 'Python';
  const userLang = 'Python'; // keep it simple; wire to Clerk later if you like

  const [allowCrossLang, setAllowCrossLang] = useState(false);
  const [level, setLevel] = useState('Any');
  const [availability, setAvailability] = useState('Any');
  const [selected, setSelected] = useState(null);
  const [invited, setInvited] = useState(null);

  const results = useMemo(() => {
    let rows = [
      ...MOCK(userLang),
      // one cross-language example to show the toggle working
      { n:'Sara', s:'JavaScript', l:'Intermediate', score:84, avail:'Mornings', bio:'JS lover; wants accountability.' },
    ];
    if (!allowCrossLang) rows = rows.filter(r => r.s === userLang);
    if (level !== 'Any') rows = rows.filter(r => r.l === level);
    if (availability !== 'Any') rows = rows.filter(r => r.avail.includes(availability.split(' ')[0]));
    return rows;
  }, [allowCrossLang, level, availability, userLang]);

  function invite(m) {
    setInvited(m.n);
    setTimeout(() => setInvited(null), 1800);
  }

  return (
    <main className="mx-auto max-w-6xl px-4 py-10">
      <h1 className="text-2xl font-bold text-slate-800 dark:text-slate-200">Find a peer</h1>
      <p className="mt-2 text-slate-600 dark:text-slate-400">Language lock: <b>{userLang}</b>{allowCrossLang ? ' (cross-language allowed)' : ''}</p>

      {/* Filters */}
      <div className="mt-6 grid md:grid-cols-3 gap-6">
        <div className="md:col-span-1">
          <div className="rounded-2xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 p-6 sticky top-24">
            <h2 className="font-semibold text-slate-800 dark:text-slate-200">Your preferences</h2>
            <div className="mt-4 grid gap-4 text-sm">
              <label className="grid gap-1">
                <span className="text-slate-600 dark:text-slate-400">Programming language</span>
                <select className="rounded-xl border border-slate-200 dark:border-slate-600 bg-white dark:bg-slate-700 text-slate-800 dark:text-slate-200 px-3 py-2" disabled={!allowCrossLang} defaultValue={userLang}>
                  <option>Python</option><option>JavaScript</option><option>Java</option><option>Swift</option>
                </select>
                <span className="text-xs text-emerald-700 dark:text-emerald-400 mt-1">Language lock: {userLang}</span>
              </label>
              <label className="grid gap-1">
                <span className="text-slate-600 dark:text-slate-400">Level</span>
                <select className="rounded-xl border border-slate-200 dark:border-slate-600 bg-white dark:bg-slate-700 text-slate-800 dark:text-slate-200 px-3 py-2" value={level} onChange={e=>setLevel(e.target.value)}>
                  <option>Any</option><option>Beginner</option><option>Intermediate</option><option>Advanced</option>
                </select>
              </label>
              <label className="grid gap-1">
                <span className="text-slate-600 dark:text-slate-400">Availability</span>
                <select className="rounded-xl border border-slate-200 dark:border-slate-600 bg-white dark:bg-slate-700 text-slate-800 dark:text-slate-200 px-3 py-2" value={availability} onChange={e=>setAvailability(e.target.value)}>
                  <option>Any</option><option>Mornings</option><option>Evenings</option><option>Weekends</option>
                </select>
              </label>
              <label className="flex items-center gap-2 text-sm">
                <input type="checkbox" className="h-4 w-4" checked={allowCrossLang} onChange={(e)=>setAllowCrossLang(e.target.checked)} />
                <span className="text-slate-800 dark:text-slate-200">Allow cross-language pairing</span>
              </label>
              <button type="button" className="inline-flex items-center justify-center gap-2 rounded-xl bg-green-500 dark:bg-green-500 text-white px-4 py-2 hover:bg-green-700 dark:hover:bg-green-600">
                <Search className="h-4 w-4"/> See matches
              </button>
            </div>
          </div>
        </div>

        {/* Results */}
        <div className="md:col-span-2 grid gap-4">
          {results.map(m => (
            <div key={m.n} className="rounded-2xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 p-5 flex items-center justify-between">
              <div>
                <div className="font-semibold text-slate-800 dark:text-slate-200 flex items-center gap-2">
                  {m.n}
                  <span className="text-xs px-2 py-0.5 rounded-full bg-emerald-50 dark:bg-emerald-900/30 text-emerald-700 dark:text-emerald-400">
                    Compatibility {m.score}%
                  </span>
                </div>
                <div className="text-sm text-slate-600 dark:text-slate-400">{m.s} · {m.l}</div>
                <div className="mt-1 text-xs text-slate-500 dark:text-slate-400">Duo lock for 21 days</div>
              </div>
              <div className="flex items-center gap-3">
                <button className="rounded-xl border border-slate-200 dark:border-slate-600 bg-white dark:bg-slate-700 text-slate-800 dark:text-slate-200 px-3 py-2 hover:bg-slate-50 dark:hover:bg-slate-600" onClick={()=>setSelected(m)}>View profile</button>
                <button className="rounded-xl bg-emerald-600 dark:bg-emerald-500 text-white px-3 py-2 hover:bg-emerald-700 dark:hover:bg-emerald-600" onClick={()=>invite(m)}>Send invite</button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Profile modal */}
      {selected && (
        <div className="fixed inset-0 z-50 bg-black/50 dark:bg-black/60 flex items-center justify-center p-4">
          <div className="w-full max-w-2xl rounded-2xl bg-white dark:bg-slate-800 shadow-xl overflow-hidden">
            <div className="flex items-center justify-between px-5 py-4 border-b border-slate-200 dark:border-slate-700">
              <div className="font-semibold text-slate-800 dark:text-slate-200">{selected.n}</div>
              <button onClick={()=>setSelected(null)} className="rounded-xl p-2 hover:bg-slate-100 dark:hover:bg-slate-700"><X className="h-5 w-5"/></button>
            </div>
            <div className="p-5 grid sm:grid-cols-2 gap-5 text-sm">
              <div className="rounded-xl border border-slate-200 dark:border-slate-700 p-4">
                <div className="text-slate-600 dark:text-slate-400">{selected.s} · {selected.l}</div>
                <p className="mt-2 text-slate-700 dark:text-slate-200">{selected.bio}</p>
                <div className="mt-3 grid grid-cols-1 gap-2">
                  <div className="rounded-lg border border-slate-200 dark:border-slate-600 p-2"><Clock className="inline h-4 w-4 mr-2"/>{selected.avail}</div>
                </div>
              </div>
              <div className="rounded-xl border border-slate-200 dark:border-slate-700 p-4">
                <div className="font-semibold text-slate-800 dark:text-slate-200 flex items-center gap-2"><CalendarCheck className="h-4 w-4 text-emerald-600 dark:text-emerald-400"/> Schedule overlap</div>
                <ul className="mt-2 grid grid-cols-2 gap-2">
                  <li className="rounded-lg border border-slate-200 dark:border-slate-600 p-2">Mon 19:00–20:30</li>
                  <li className="rounded-lg border border-slate-200 dark:border-slate-600 p-2">Tue 19:00–20:30</li>
                  <li className="rounded-lg border border-slate-200 dark:border-slate-600 p-2">Wed 19:00–20:30</li>
                  <li className="rounded-lg border border-slate-200 dark:border-slate-600 p-2">Thu 19:00–20:30</li>
                </ul>
                <button
                  className="mt-3 w-full rounded-xl bg-emerald-600 dark:bg-emerald-500 text-white px-4 py-2 hover:bg-emerald-700 dark:hover:bg-emerald-600"
                  onClick={()=>{ invite(selected); setSelected(null); }}
                >
                  Send invite
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Invite toast */}
      {invited && (
        <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50">
          <div className="rounded-2xl bg-emerald-600 dark:bg-emerald-500 text-white px-4 py-3 shadow-lg">
            Invite sent to <b>{invited}</b>!
          </div>
        </div>
      )}
    </main>
  );
}