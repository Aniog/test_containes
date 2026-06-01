import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import HomePage from '@/pages/HomePage';
import MonstersPage from '@/pages/MonstersPage';
import MonsterDetailPage from '@/pages/MonsterDetailPage';
import QuizPage from '@/pages/QuizPage';
import AdoptPage from '@/pages/AdoptPage';
import StoriesPage from '@/pages/StoriesPage';
import CommunityPage from '@/pages/CommunityPage';
import EducationPage from '@/pages/EducationPage';
import AccountPage from '@/pages/AccountPage';

export default function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/monsters" element={<MonstersPage />} />
            <Route path="/monsters/:id" element={<MonsterDetailPage />} />
            <Route path="/quiz" element={<QuizPage />} />
            <Route path="/adopt" element={<AdoptPage />} />
            <Route path="/stories" element={<StoriesPage />} />
            <Route path="/community" element={<CommunityPage />} />
            <Route path="/education" element={<EducationPage />} />
            <Route path="/account" element={<AccountPage />} />
            <Route path="/donate" element={<EducationPage />} />
            <Route path="*" element={<HomePage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
}
