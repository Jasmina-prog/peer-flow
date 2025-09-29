export default function ProfilePage({ params, searchParams }) {
  const name = decodeURIComponent(params.name || "Peer");
  const language = searchParams.s || "Python";
  const level = searchParams.l || "Intermediate";
  const avail = searchParams.avail || "Evenings";
  const bio = searchParams.bio || "Passionate about learning and pairing regularly.";

  return (
    <main className="mx-auto max-w-3xl px-4 py-10">
      <div className="rounded-2xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 p-6">
        <div className="flex items-center gap-6">
          <img
            src="/peerlogo.png"
            alt={`${name} profile`}
            className="w-24 h-24 rounded-xl object-cover border border-slate-200 dark:border-slate-700"
          />
          <div>
            <h1 className="text-2xl font-bold text-slate-900 dark:text-slate-100">{name}</h1>
            <p className="text-slate-600 dark:text-slate-400">{language} · {level}</p>
            <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">Availability: {avail}</p>
          </div>
        </div>

        <div className="mt-6">
          <h2 className="font-semibold text-slate-900 dark:text-slate-100 mb-2">About</h2>
          <p className="text-slate-700 dark:text-slate-200">{bio}</p>
        </div>

        <div className="mt-6 grid sm:grid-cols-2 gap-4">
          <div className="rounded-xl border border-slate-200 dark:border-slate-700 p-4">
            <div className="text-sm text-slate-600 dark:text-slate-400">Goal</div>
            <div className="font-medium text-slate-900 dark:text-slate-100">Stay accountable for daily practice</div>
          </div>
          <div className="rounded-xl border border-slate-200 dark:border-slate-700 p-4">
            <div className="text-sm text-slate-600 dark:text-slate-400">Preferred session length</div>
            <div className="font-medium text-slate-900 dark:text-slate-100">60–90 minutes</div>
          </div>
        </div>
      </div>
    </main>
  );
}


