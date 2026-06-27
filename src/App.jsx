import GeneratorsPage from './pages/GeneratorsPage';

function App() {
  // If the static HTML already rendered the full page, do not mount a duplicate.
  if (typeof window !== 'undefined' && document.querySelector('.generators-page')) {
    return null;
  }
  return <GeneratorsPage />;
}

export default App;
