import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import GeneratorsHub from './pages/GeneratorsHub-test';
import './App.css'

function App() {
  console.log("App is rendering");
  return <GeneratorsHub />;
}

export default App
