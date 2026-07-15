import React from 'react';
import { Sparkles } from 'lucide-react';
import './App.css';

function App() {
  return (
    <div className="min-h-screen bg-slate-50 flex flex-col items-center justify-center p-4">
      <div className="max-w-md w-full bg-white rounded-2xl shadow-xl p-8 text-center space-y-6">
        <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 text-blue-600 rounded-full mb-4">
          <Sparkles size={32} />
        </div>
        <h1 className="text-3xl font-bold text-slate-900 tracking-tight">
          Ready to Build
        </h1>
        <p className="text-slate-600 leading-relaxed">
          I've set up the project environment. Please tell me what you'd like to create!
        </p>
        <div className="pt-4">
          <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg transition duration-200">
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
