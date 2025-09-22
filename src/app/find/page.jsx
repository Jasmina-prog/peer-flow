'use client';

import { useState, useEffect } from 'react';
import { Search, X, CalendarCheck, Clock, Globe } from 'lucide-react';

// Mock data
const MOCK = (lang) => ([
  { n:'Nilufar', s:lang, l:'Intermediate', score:95, avail:'Mon–Thu evenings', bio:'Frontend-leaning full-stack learner.' },
  { n:'Jamshid', s:lang, l:'Beginner',    score:91, avail:'Evenings',          bio:'CS freshman building first apps.' },
  { n:'Aziz',    s:lang, l:'Advanced',    score:89, avail:'Weekends',          bio:'Backend focused; wants to mentor a bit.' },
  { n:'Sara',    s:'JavaScript', l:'Intermediate', score:84, avail:'Mornings', bio:'JS lover; wants accountability.' },
  { n:'Akmal',   s:lang, l:'Intermediate', score:87, avail:'Mornings',         bio:'Data science enthusiast exploring ML.' },
  { n:'Dilnoza', s:lang, l:'Beginner',    score:82, avail:'Weekends',          bio:'New to coding, eager to learn Python.' },
  { n:'Bobur',   s:lang, l:'Advanced',    score:93, avail:'Evenings',          bio:'Senior developer mentoring beginners.' },
  { n:'Malika',  s:'JavaScript', l:'Beginner', score:78, avail:'Mornings',     bio:'Web development student, loves React.' },
  { n:'Javlon',  s:lang, l:'Intermediate', score:88, avail:'Mon–Fri evenings', bio:'Building mobile apps with Python.' },
  { n:'Zarina',  s:'JavaScript', l:'Advanced', score:91, avail:'Weekends',     bio:'Full-stack developer, open source contributor.' },
]);

export default function FindPage() {
  const userLang = 'Python';
  const [level, setLevel] = useState('Any');
  const [availability, setAvailability] = useState('Any');
  const [allowCrossLang, setAllowCrossLang] = useState(false);
  const [results, setResults] = useState([]);
  const [selectedProfile, setSelectedProfile] = useState(null);
  const [invitedName, setInvitedName] = useState('');
  const [showToast, setShowToast] = useState(false);

  // Filter results based on current filters
  useEffect(() => {
    let filtered = MOCK(userLang);

    // Filter by cross-language pairing
    if (!allowCrossLang) {
      filtered = filtered.filter(r => r.s === userLang);
    }

    // Filter by level
    if (level !== 'Any') {
      filtered = filtered.filter(r => r.l === level);
    }

    // Filter by availability
    if (availability !== 'Any') {
      const availKeyword = availability.toLowerCase();
      filtered = filtered.filter(r => 
        r.avail.toLowerCase().includes(availKeyword.slice(0, -1)) // Remove 's' from "Mornings", "Evenings", etc.
      );
    }

    setResults(filtered);
  }, [level, availability, allowCrossLang]);

  const handleSendInvite = (name) => {
    setInvitedName(name);
    setShowToast(true);
    setSelectedProfile(null);
    
    // Auto-hide toast after 1.8s
    setTimeout(() => {
      setShowToast(false);
    }, 1800);
  };

  const openProfile = (profile) => {
    setSelectedProfile(profile);
  };

  const closeModal = () => {
    setSelectedProfile(null);
  };

  return (
    <div className="mx-auto max-w-6xl px-4 py-10">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-slate-800 dark:text-slate-200 mb-2">Find a peer</h1>
        <p className="text-emerald-700 dark:text-emerald-400 font-medium">Language lock: {userLang}</p>
      </div>

      {/* Main Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Filter Card */}
        <div className="lg:col-span-1">
          <div className="rounded-2xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 p-6 sticky top-24">
            <h2 className="text-lg font-semibold text-slate-800 dark:text-slate-200 mb-6">Your preferences</h2>
            
            {/* Programming Language */}
            <div className="mb-4">
              <label className="block text-sm font-medium text-slate-800 dark:text-slate-200 mb-2">
                Programming language
              </label>
              <select 
                disabled 
                className="w-full rounded-xl border border-slate-200 dark:border-slate-600 bg-gray-50 dark:bg-slate-700 px-3 py-2 text-slate-500 dark:text-slate-400"
                value={userLang}
              >
                <option value={userLang}>{userLang}</option>
              </select>
              <p className="text-xs text-emerald-700 dark:text-emerald-400 font-medium mt-1">Language lock: {userLang}</p>
            </div>

            {/* Level */}
            <div className="mb-4">
              <label className="block text-sm font-medium text-slate-800 dark:text-slate-200 mb-2">
                Level
              </label>
              <select 
                value={level}
                onChange={(e) => setLevel(e.target.value)}
                className="w-full rounded-xl border border-slate-200 dark:border-slate-600 bg-white dark:bg-slate-700 text-slate-800 dark:text-slate-200 px-3 py-2 focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
              >
                <option value="Any">Any</option>
                <option value="Beginner">Beginner</option>
                <option value="Intermediate">Intermediate</option>
                <option value="Advanced">Advanced</option>
              </select>
            </div>

            {/* Availability */}
            <div className="mb-4">
              <label className="block text-sm font-medium text-slate-800 dark:text-slate-200 mb-2">
                Availability
              </label>
              <select 
                value={availability}
                onChange={(e) => setAvailability(e.target.value)}
                className="w-full rounded-xl border border-slate-200 dark:border-slate-600 bg-white dark:bg-slate-700 text-slate-800 dark:text-slate-200 px-3 py-2 focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
              >
                <option value="Any">Any</option>
                <option value="Mornings">Mornings</option>
                <option value="Evenings">Evenings</option>
                <option value="Weekends">Weekends</option>
              </select>
            </div>

            {/* Cross-language checkbox */}
            <div className="mb-6">
              <label className="flex items-center">
                <input 
                  type="checkbox" 
                  checked={allowCrossLang}
                  onChange={(e) => setAllowCrossLang(e.target.checked)}
                  className="rounded border-slate-200 text-emerald-600 focus:ring-emerald-500"
                />
                <span className="ml-2 text-sm text-slate-800 dark:text-slate-200">Allow cross-language pairing</span>
              </label>
            </div>

            {/* See matches button */}
            <button className="w-full rounded-xl bg-emerald-600 dark:bg-emerald-500 text-white px-3 py-2 hover:bg-emerald-700 dark:hover:bg-emerald-600 flex items-center justify-center gap-2">
              <Search className="w-4 h-4" />
              See matches
            </button>
          </div>
        </div>

        {/* Results */}
        <div className="lg:col-span-2">
          <div className="space-y-4">
            {results.map((result, index) => (
              <div key={index} className="rounded-2xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 p-5 flex items-center justify-between">
                {/* Left side - User info */}
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-1">
                    <h3 className="font-bold text-slate-800 dark:text-slate-200">{result.n}</h3>
                    <span className="text-xs px-2 py-0.5 rounded-full bg-emerald-50 dark:bg-emerald-900/30 text-emerald-700 dark:text-emerald-400">
                      Compatibility {result.score}%
                    </span>
                  </div>
                  <p className="text-sm text-slate-600 dark:text-slate-400 mb-1">
                    {result.s} · {result.l}
                  </p>
                </div>

                {/* Right side - Action buttons */}
                <div className="flex gap-2">
                  <button 
                    onClick={() => openProfile(result)}
                    className="rounded-xl border border-slate-200 dark:border-slate-600 bg-white dark:bg-slate-700 text-slate-800 dark:text-slate-200 px-3 py-2 hover:bg-slate-50 dark:hover:bg-slate-600 text-sm"
                  >
                    View profile
                  </button>
                  <button 
                    onClick={() => handleSendInvite(result.n)}
                    className="rounded-xl bg-emerald-600 dark:bg-emerald-500 text-white px-3 py-2 hover:bg-emerald-700 dark:hover:bg-emerald-600 text-sm"
                  >
                    Send invite
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Profile Modal */}
      {selectedProfile && (
        <div className="fixed inset-0 z-50 bg-black/50 flex items-center justify-center p-4">
          <div className="w-full max-w-2xl rounded-2xl bg-white dark:bg-slate-800 shadow-xl overflow-hidden">
            {/* Modal Header */}
            <div className="flex items-center justify-between p-6 border-b">
              <h2 className="text-xl font-semibold text-slate-800 dark:text-slate-200">Profile</h2>
              <button 
                onClick={closeModal}
                className="p-2 hover:bg-slate-100 dark:hover:bg-slate-700 rounded-lg"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Modal Content */}
            <div className="p-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Left Column */}
                <div>
                  {/* Avatar placeholder */}
                  <div className="w-16 h-16 bg-gray-200 dark:bg-slate-600 rounded-full mb-4 flex items-center justify-center">
                    <span className="text-xl font-semibold text-slate-600 dark:text-slate-300">
                      {selectedProfile.n.charAt(0)}
                    </span>
                  </div>
                  
                  <h3 className="text-xl font-bold text-slate-800 dark:text-slate-200 mb-2">{selectedProfile.n}</h3>
                  <p className="text-slate-600 dark:text-slate-400 mb-4">{selectedProfile.s} · {selectedProfile.l}</p>
                  <p className="text-slate-800 dark:text-slate-200 mb-6">{selectedProfile.bio}</p>

                  {/* Info boxes */}
                  <div className="space-y-3">
                    <div className="flex items-center gap-2 text-sm text-slate-600 dark:text-slate-400">
                      <Clock className="w-4 h-4" />
                      <span>{selectedProfile.avail}</span>
                    </div>
                  </div>
                </div>

                {/* Right Column */}
                <div>
                  <h4 className="font-semibold text-slate-800 dark:text-slate-200 mb-3">Schedule overlap</h4>
                  <div className="flex flex-wrap gap-2">
                    {['Mon', 'Tue', 'Wed', 'Thu'].map((day) => (
                      <span 
                        key={day}
                        className="px-3 py-1 bg-gray-100 dark:bg-slate-700 text-slate-800 dark:text-slate-200 rounded-lg text-sm"
                      >
                        {day} 19:00–20:30
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Send invite button */}
              <button 
                onClick={() => handleSendInvite(selectedProfile.n)}
                className="w-full mt-6 rounded-xl bg-emerald-600 dark:bg-emerald-500 text-white px-3 py-2 hover:bg-emerald-700 dark:hover:bg-emerald-600"
              >
                Send invite
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Toast */}
      {showToast && (
        <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 rounded-2xl bg-emerald-600 dark:bg-emerald-500 text-white px-4 py-3 shadow-lg">
          Invite sent to {invitedName}!
        </div>
      )}
    </div>
  );
}
