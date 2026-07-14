import { useState, useEffect, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import { format } from 'date-fns';
import { ArrowLeft, Trash2, Mail, Phone, User, MessageSquare, Search, Clock, Loader2 } from 'lucide-react';
import { fetchContacts, deleteContact } from '../api/contacts.js';

export default function Contacts() {
  const navigate = useNavigate();
  const [contacts, setContacts] = useState([]);
  const [search, setSearch] = useState('');
  const [selectedId, setSelectedId] = useState(null);
  const [loading, setLoading] = useState(true);

  const loadContacts = useCallback(async () => {
    try {
      const data = await fetchContacts();
      setContacts(data);
    } catch {
      // silent
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    loadContacts();
  }, [loadContacts]);

  async function handleDelete(id) {
    try {
      await deleteContact(id);
    } catch {
      // silent
    }
    const updated = contacts.filter((c) => c.id !== id);
    setContacts(updated);
    if (selectedId === id) setSelectedId(null);
  }

  const filtered = contacts.filter(
    (c) => {
      const fields = c.data || {};
      return (
        (fields.name || '').toLowerCase().includes(search.toLowerCase()) ||
        (fields.email || '').toLowerCase().includes(search.toLowerCase()) ||
        (fields.message || '').toLowerCase().includes(search.toLowerCase())
      );
    }
  );

  const selected = contacts.find((c) => c.id === selectedId);
  const selectedFields = selected?.data || {};

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white border-b border-gray-100">
        <div className="max-w-4xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <button
              onClick={() => navigate('/')}
              className="inline-flex items-center gap-1.5 text-sm text-gray-500 hover:text-gray-900 transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Home
            </button>
          </div>
          <h1 className="text-lg font-semibold text-gray-900">Contacts</h1>
          <div className="w-[100px]" />
        </div>
      </header>

      <div className="max-w-4xl mx-auto px-6 py-8">
        {contacts.length === 0 ? (
          <div className="text-center py-20">
            <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <User className="w-8 h-8 text-gray-400" />
            </div>
            <h2 className="text-xl font-semibold text-gray-900">No contacts yet</h2>
            <p className="mt-2 text-gray-500">
              When someone fills out the contact form, their information will appear here.
            </p>
            <button
              onClick={() => navigate('/')}
              className="mt-6 px-5 py-2.5 bg-indigo-600 text-white font-medium rounded-lg hover:bg-indigo-700 transition-colors"
            >
              Go to Contact Form
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* List */}
            <div className="lg:col-span-1 space-y-4">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search contacts..."
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  className="w-full pl-10 pr-4 py-2.5 rounded-lg border border-gray-200 bg-white text-gray-900 placeholder-gray-400 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none transition text-sm"
                />
              </div>

              {filtered.length === 0 ? (
                <p className="text-sm text-gray-500 text-center py-8">No matching contacts.</p>
              ) : (
                <div className="space-y-2">
                  {filtered.map((c) => {
                    const fields = c.data || {};
                    return (
                    <button
                      key={c.id}
                      onClick={() => setSelectedId(c.id)}
                      className={`w-full text-left p-4 rounded-lg border transition-colors ${
                        selectedId === c.id
                          ? 'border-indigo-300 bg-indigo-50'
                          : 'border-gray-100 bg-white hover:border-gray-200'
                      }`}
                    >
                      <p className="font-medium text-gray-900 truncate">{fields.name}</p>
                      <p className="text-sm text-gray-500 truncate mt-0.5">{fields.email}</p>
                      <p className="text-xs text-gray-400 mt-1">
                        {c.created_at ? format(new Date(c.created_at), 'MMM d, yyyy') : '—'}
                      </p>
                    </button>
                    );
                  })}
                </div>
              )}
            </div>

            {/* Detail */}
            <div className="lg:col-span-2">
              {selected ? (
                <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 md:p-8">
                  <div className="flex items-start justify-between mb-6">
                    <div>
                      <h2 className="text-xl font-bold text-gray-900">{selectedFields.name}</h2>
                      <p className="flex items-center gap-1.5 text-sm text-gray-500 mt-1">
                        <Clock className="w-3.5 h-3.5" />
                        {selected.created_at
                          ? format(new Date(selected.created_at), 'MMMM d, yyyy — h:mm a')
                          : '—'}
                      </p>
                    </div>
                    <button
                      onClick={() => handleDelete(selected.id)}
                      className="p-2 text-gray-400 hover:text-red-500 hover:bg-red-50 rounded-lg transition-colors"
                      title="Delete contact"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>

                  <div className="space-y-4">
                    <div className="flex items-center gap-3">
                      <Mail className="w-4 h-4 text-gray-400 shrink-0" />
                      <div>
                        <p className="text-xs text-gray-400 uppercase tracking-wide">Email</p>
                        <p className="text-gray-900">{selectedFields.email}</p>
                      </div>
                    </div>
                    {selectedFields.phone && (
                      <div className="flex items-center gap-3">
                        <Phone className="w-4 h-4 text-gray-400 shrink-0" />
                        <div>
                          <p className="text-xs text-gray-400 uppercase tracking-wide">Phone</p>
                          <p className="text-gray-900">{selectedFields.phone}</p>
                        </div>
                      </div>
                    )}
                    <div className="flex items-start gap-3">
                      <MessageSquare className="w-4 h-4 text-gray-400 shrink-0 mt-0.5" />
                      <div>
                        <p className="text-xs text-gray-400 uppercase tracking-wide">Message</p>
                        <p className="text-gray-900 whitespace-pre-wrap mt-1">{selectedFields.message}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ) : (
                <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-12 flex flex-col items-center justify-center text-center h-full min-h-[300px]">
                  <User className="w-10 h-10 text-gray-300 mb-3" />
                  <p className="text-gray-500">Select a contact from the list to view details.</p>
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}