import { BrowserRouter, Routes, Route } from "react-router-dom";
import GeneratorsPage from "./pages/Generators";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="*" element={<GeneratorsPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
