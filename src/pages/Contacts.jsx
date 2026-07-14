import React, { useState, useEffect } from 'react';
import { InboxIcon, Search, Calendar, User, Mail, MessageSquare } from 'lucide-react';
import { format } from 'date-fns';

const Contacts = () => {
  const [contacts, setContacts] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedContact, setSelectedContact] = useState(null);

  useEffect(() => {
    const savedContacts = localStorage.getItem('mock_contacts');
    if (savedContacts) {
      try {
        setContacts(JSON.parse(savedContacts).sort((a,b) => new Date(b.createdAt) - new Date(a.createdAt)));
      } catch (e) {
        console.error('Failed to parse contacts', e);
      }
    } else {
      const mockData = [
        {
          id: '1',
          name: 'Jane Doe',
          email: 'jane@example.com',
          subject: 'Question about pricing',
          message: 'Hi, I would like to know more about your enterprise pricing plans. Can someone reach out?',
          createdAt: new Date(Date.now() - 1000 * 60 * 60 * 2).toISOString(),
          status: 'new'
        },
        {
          id: '2',
          name: 'John Smith',
          email: 'john.smith@techcorp.com',
          subject: 'Partnership Opportunity',
          message: 'We are looking for a solution like yours to integrate into our platform. Let\'s schedule a call next week to discuss this further. Are you available on Tuesday?',
          createdAt: new Date(Date.now() - 1000 * 60 * 60 * 24 * 2).toISOString(),
          status: 'read'
        }
      ];
      setContacts(mockData);
      localStorage.setItem('mock_contacts', JSON.stringify(mockData));
    }
  }, []);

  const handleContactClick = (contact) => {
    setSelectedContact(contact);
    if (contact.status === 'new') {
      const updatedContacts = contacts.map(c => 
        c.id === contact.id ? { ...c, status: 'read' } : c
      );
      setContacts(updatedContacts);
      localStorage.setItem('mock_contacts', JSON.stringify(updatedContacts));
    }
  };

  const filteredContacts = contacts.filter(c => 
    c.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
    c.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
    c.subject.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="w-full bg-slate-50 min-h-[calc(100vh-140px)] flex flex-col">
      <div className="bg-white border-b px-6 py-4 flex items-center justify-between sticky top-[65px] z-40">
        <div>
          <h1 className="text-2xl font-bold text-slate-900 tracking-tight">Admin Dashboard</h1>
          <p className="text-sm text-slate-500">Manage your incoming contact requests</p>
        </div>
        <div className="bg-blue-50 text-blue-700 px-4 py-2 rounded-lg text-sm font-medium border border-blue-100 flex items-center gap-2">
          <InboxIcon className="w-4 h-4" />
          {contacts.filter(c => c.status === 'new').length} new messages
        </div>
      </div>
      
      <div className="flex flex-1 max-w-7xl mx-auto w-full p-4 md:p-6 gap-6 h-full overflow-hidden">
        <div className="w-full md:w-1/3 flex flex-col bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden h-[calc(100vh-210px)]">
          <div className="p-4 border-b">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
              <input 
                type="text" 
                placeholder="Search contacts..." 
                className="w-full pl-9 pr-4 py-2 bg-slate-50 border border-slate-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white transition-colors"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
          </div>
          
          <div className="flex-1 overflow-y-auto">
            {filteredContacts.length === 0 ? (
              <div className="p-8 text-center text-slate-500 flex flex-col items-center justify-center h-full">
                <InboxIcon className="w-10 h-10 mb-3 text-slate-300" />
                <p>No contacts found</p>
              </div>
            ) : (
              <ul className="divide-y divide-slate-100">
                {filteredContacts.map(contact => (
                  <li key={contact.id}>
                    <button 
                      onClick={() => handleContactClick(contact)}
                      className={`w-full text-left p-4 hover:bg-slate-50 transition-colors flex flex-col gap-1 relative ${selectedContact?.id === contact.id ? 'bg-blue-50/50' : ''}`}
                    >
                      {contact.status === 'new' && (
                        <span className="absolute top-4 right-4 w-2 h-2 rounded-full bg-blue-600"></span>
                      )}
                      <div className="flex justify-between items-baseline mb-1">
                        <span className={`font-medium ${contact.status === 'new' ? 'text-slate-900' : 'text-slate-700'}`}>
                          {contact.name}
                        </span>
                        <span className="text-xs text-slate-400">
                          {format(new Date(contact.createdAt), 'MMM d, h:mm a')}
                        </span>
                      </div>
                      <span className={`text-sm ${contact.status === 'new' ? 'text-slate-800 font-medium' : 'text-slate-600'} truncate`}>
                        {contact.subject}
                      </span>
                      <span className="text-xs text-slate-500 truncate mt-1">
                        {contact.message}
                      </span>
                    </button>
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>
        
        <div className="hidden md:flex md:w-2/3 flex-col bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden h-[calc(100vh-210px)] relative">
          {selectedContact ? (
            <div className="flex flex-col h-full overflow-y-auto">
              <div className="p-6 md:p-8 border-b bg-slate-50/50">
                <h2 className="text-2xl font-bold text-slate-900 mb-6">{selectedContact.subject}</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-blue-100 text-blue-700 flex items-center justify-center font-bold">
                      {selectedContact.name.charAt(0)}
                    </div>
                    <div>
                      <div className="font-medium text-slate-900">{selectedContact.name}</div>
                      <div className="text-sm text-slate-500">{selectedContact.email}</div>
                    </div>
                  </div>
                  <div className="flex flex-col justify-center items-end text-sm text-slate-500 gap-1">
                    <div className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      {format(new Date(selectedContact.createdAt), 'MMMM d, yyyy')}
                    </div>
                    <div>
                      {format(new Date(selectedContact.createdAt), 'h:mm a')}
                    </div>
                  </div>
                </div>
              </div>
              <div className="p-6 md:p-8 flex-1">
                <div className="prose prose-slate max-w-none space-y-4">
                  {selectedContact.message.split('\n').map((paragraph, i) => (
                    <p key={i} className="text-slate-700 leading-relaxed">{paragraph}</p>
                  ))}
                </div>
              </div>
              <div className="p-6 border-t bg-slate-50">
                <div className="flex gap-4">
                  <button className="flex-1 bg-white border border-slate-200 text-slate-700 px-4 py-2 rounded-lg hover:bg-slate-50 transition-colors font-medium flex items-center justify-center gap-2">
                    <Mail className="w-4 h-4" />
                    Reply via Email
                  </button>
                  <button className="flex-1 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors font-medium">
                    Mark as Resolved
                  </button>
                </div>
              </div>
            </div>
          ) : (
            <div className="flex flex-col items-center justify-center h-full text-slate-400 space-y-4">
              <MessageSquare className="w-16 h-16 text-slate-200" />
              <p className="text-lg">Select a message to read</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Contacts;