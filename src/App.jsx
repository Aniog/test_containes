import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './Layout.jsx';
import Home from './pages/Home.jsx';
import Contacts from './pages/Contacts.jsx';
import { useContacts } from './hooks/useContacts.js';
import './App.css';

function App() {
  const { contacts, addContact, deleteContact } = useContacts();

  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home onAddContact={addContact} />} />
          <Route path="/contacts" element={<Contacts contacts={contacts} onDelete={deleteContact} />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
