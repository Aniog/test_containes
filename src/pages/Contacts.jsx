import { useState, useEffect, useCallback } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Users, Trash2, Search, Mail, Building2, Calendar, MessageSquare, Loader2 } from 'lucide-react';
import { format, parseISO } from 'date-fns';
import { DataClient } from '@strikingly/sdk';
import { STRK_PROJECT_URL, STRK_PROJECT_ANON_KEY } from '@/config.jsx';

const client = new DataClient(STRK_PROJECT_URL, STRK_PROJECT_ANON_KEY);

const getRows = (response) => response?.data?.list ?? [];

async function fetchContacts() {
  const { data: response, error } = await client
    .from('Contact Form Responses')
    .select('*')
    .order('created_at', { ascending: false });
  if (error) throw error;
  console.log('Contacts fetched:', getRows(response).length);
  return getRows(response);
}

export default function Contacts() {
  const [contacts, setContacts] = useState([]);
  const [search, setSearch] = useState('');
  const [expanded, setExpanded] = useState(null);
  const [loading, setLoading] = useState(true);
  const [loadError, setLoadError] = useState(null);

  const refresh = useCallback(async () => {
    setLoading(true);
    setLoadError(null);
    try {
      setContacts(await fetchContacts());
    } catch (err) {
      console.error('Failed to load contacts:', err);
      setLoadError(err.message || 'Failed to load contacts.');
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => { refresh(); }, [refresh]);

  const filtered = contacts.filter((c) => {
    const q = search.toLowerCase();
    const d = c.data || {};
    return (
      (d.name || '').toLowerCase().includes(q) ||
      (d.email || '').toLowerCase().includes(q) ||
      (d.company || '').toLowerCase().includes(q)
    );
  });

  function handleExpand(id) {
    setExpanded(expanded === id ? null : id);
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white border-b border-gray-200 sticky top-0 z-10">
        <div className="max-w-4xl mx-auto px-4 h-16 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Link
              to="/"
              className="flex items-center gap-1.5 text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to site
            </Link>
            <span className="text-gray-300">|</span>
            <div className="flex items-center gap-2 font-semibold text-gray-900">
              <Users className="w-5 h-5 text-indigo-600" />
              Saved Contacts
            </div>
          </div>
          <span className="text-sm text-gray-500">
            {contacts.length} {contacts.length === 1 ? 'contact' : 'contacts'}
          </span>
        </div>
      </header>

      <main className="max-w-4xl mx-auto px-4 py-10">
        {loading ? (
          <div className="flex items-center justify-center py-24 gap-3 text-gray-500">
            <Loader2 className="w-5 h-5 animate-spin text-indigo-500" />
            Loading contacts…
          </div>
        ) : loadError ? (
          <div className="flex flex-col items-center justify-center py-24 gap-4 text-center">
            <p className="text-red-600 font-medium">{loadError}</p>
            <button
              onClick={refresh}
              className="text-sm text-indigo-600 hover:underline font-medium"
            >
              Try again
            </button>
          </div>
        ) : contacts.length === 0 ? (
          <div className="flex flex-col items-center justify-center py-24 text-center gap-4">
            <div className="w-16 h-16 rounded-full bg-gray-100 flex items-center justify-center">
              <Users className="w-8 h-8 text-gray-400" />
            </div>
            <h2 className="text-xl font-semibold text-gray-900">No contacts yet</h2>
            <p className="text-gray-500 max-w-sm">
              When someone fills out the contact form on your landing page, they'll appear here.
            </p>
            <Link
              to="/#contact"
              className="mt-2 inline-flex items-center gap-2 bg-indigo-600 hover:bg-indigo-700 text-white font-semibold px-6 py-2.5 rounded-lg transition-colors text-sm"
            >
              Go to contact form
            </Link>
          </div>
        ) : (
          <>
            <div className="mb-6">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search by name, email, or company…"
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  className="w-full pl-9 pr-4 py-2.5 rounded-lg border border-gray-300 bg-white text-gray-900 placeholder-gray-400 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition"
                />
              </div>
            </div>

            {filtered.length === 0 ? (
              <div className="text-center py-16 text-gray-500">
                No contacts match your search.
              </div>
            ) : (
              <div className="flex flex-col gap-3">
                {filtered.map((contact) => {
                  const d = contact.data || {};
                  const createdAt = contact.created_at;
                  return (
                    <div
                      key={contact.id}
                      className="bg-white rounded-2xl border border-gray-200 shadow-sm overflow-hidden"
                    >
                      <div
                        className="flex items-center justify-between px-6 py-4 cursor-pointer hover:bg-gray-50 transition-colors"
                        onClick={() => handleExpand(contact.id)}
                      >
                        <div className="flex items-center gap-4 min-w-0">
                          <div className="w-10 h-10 rounded-full bg-indigo-100 flex items-center justify-center flex-shrink-0">
                            <span className="text-indigo-700 font-semibold text-sm">
                              {(d.name || '?').charAt(0).toUpperCase()}
                            </span>
                          </div>
                          <div className="min-w-0">
                            <p className="font-semibold text-gray-900 truncate">{d.name}</p>
                            <p className="text-sm text-gray-500 truncate">{d.email}</p>
                          </div>
                        </div>
                        <div className="flex items-center gap-4 flex-shrink-0 ml-4">
                          {d.company && (
                            <span className="hidden sm:inline-flex items-center gap-1.5 text-xs text-gray-500 bg-gray-100 px-2.5 py-1 rounded-full">
                              <Building2 className="w-3 h-3" />
                              {d.company}
                            </span>
                          )}
                          {createdAt && (
                            <span className="hidden md:flex items-center gap-1.5 text-xs text-gray-400">
                              <Calendar className="w-3 h-3" />
                              {format(parseISO(createdAt), 'MMM d, yyyy')}
                            </span>
                          )}
                        </div>
                      </div>

                      {expanded === contact.id && (
                        <div className="border-t border-gray-100 px-6 py-5 bg-gray-50 grid grid-cols-1 sm:grid-cols-2 gap-4">
                          <div className="flex items-start gap-3">
                            <Mail className="w-4 h-4 text-indigo-500 mt-0.5 flex-shrink-0" />
                            <div>
                              <p className="text-xs font-medium text-gray-500 mb-0.5">Email</p>
                              <a
                                href={`mailto:${d.email}`}
                                className="text-sm text-indigo-600 hover:underline"
                              >
                                {d.email}
                              </a>
                            </div>
                          </div>

                          {d.company && (
                            <div className="flex items-start gap-3">
                              <Building2 className="w-4 h-4 text-indigo-500 mt-0.5 flex-shrink-0" />
                              <div>
                                <p className="text-xs font-medium text-gray-500 mb-0.5">Company</p>
                                <p className="text-sm text-gray-900">{d.company}</p>
                              </div>
                            </div>
                          )}

                          {createdAt && (
                            <div className="flex items-start gap-3">
                              <Calendar className="w-4 h-4 text-indigo-500 mt-0.5 flex-shrink-0" />
                              <div>
                                <p className="text-xs font-medium text-gray-500 mb-0.5">Submitted</p>
                                <p className="text-sm text-gray-900">
                                  {format(parseISO(createdAt), 'PPPp')}
                                </p>
                              </div>
                            </div>
                          )}

                          <div className="flex items-start gap-3 sm:col-span-2">
                            <MessageSquare className="w-4 h-4 text-indigo-500 mt-0.5 flex-shrink-0" />
                            <div>
                              <p className="text-xs font-medium text-gray-500 mb-0.5">Message</p>
                              <p className="text-sm text-gray-900 leading-relaxed whitespace-pre-wrap">
                                {d.message}
                              </p>
                            </div>
                          </div>
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            )}
          </>
        )}
      </main>
    </div>
  );
}
