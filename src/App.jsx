import React from 'react';
import { 
  ArrowRight, 
  CheckCircle2, 
  Workflow, 
  Zap, 
  Shield, 
  Layout,
  Menu,
  X
} from 'lucide-react';

const App = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const features = [
    {
      title: "Efficient Workflow",
      description: "Optimize your team's productivity with our streamlined process management tools.",
      icon: <Workflow className="w-6 h-6 text-indigo-600" />
    },
    {
      title: "Lightning Fast",
      description: "Experience zero lag with our highly optimized, real-time sync technology.",
      icon: <Zap className="w-6 h-6 text-indigo-600" />
    },
    {
      title: "Enterprise Security",
      description: "Your data is protected with military-grade encryption and secure access controls.",
      icon: <Shield className="w-6 h-6 text-indigo-600" />
    },
    {
      title: "Responsive Design",
      description: "Access your dashboard from any device, anywhere, with our mobile-first approach.",
      icon: <Layout className="w-6 h-6 text-indigo-600" />
    }
  ];

  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-900">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16 items-center">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-indigo-600 rounded-lg flex items-center justify-center">
                <Workflow className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold tracking-tight text-slate-900">StrkFlow</span>
            </div>
            
            <div className="hidden md:flex items-center gap-8">
              <a href="#features" className="text-sm font-medium text-slate-600 hover:text-indigo-600 transition-colors">Features</a>
              <a href="#about" className="text-sm font-medium text-slate-600 hover:text-indigo-600 transition-colors">About</a>
              <button className="px-4 py-2 bg-indigo-600 text-white text-sm font-semibold rounded-md hover:bg-indigo-700 transition-colors">
                Get Started
              </button>
            </div>

            <div className="md:hidden">
              <button 
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="p-2 text-slate-600 hover:text-slate-900"
              >
                {isMenuOpen ? <X /> : <Menu />}
              </button>
            </div>
          </div>
        </div>
        
        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-b border-slate-200 px-4 py-4 space-y-4">
            <a href="#features" className="block text-base font-medium text-slate-600">Features</a>
            <a href="#about" className="block text-base font-medium text-slate-600">About</a>
            <button className="w-full px-4 py-2 bg-indigo-600 text-white font-semibold rounded-md">
              Get Started
            </button>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <header className="relative py-20 lg:py-32 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight text-slate-900 mb-6">
              Manage your work <br />
              <span className="text-indigo-600">with precision</span>
            </h1>
            <p className="max-w-2xl mx-auto text-lg sm:text-xl text-slate-500 mb-10 leading-relaxed">
              StrkFlow brings all your tasks, tools, and teams together. 
              Built for speed, security, and collaborative excellence.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <button className="px-8 py-3 bg-indigo-600 text-white font-semibold rounded-md hover:bg-indigo-700 transition-all flex items-center justify-center gap-2">
                Start for free <ArrowRight className="w-4 h-4" />
              </button>
              <button className="px-8 py-3 bg-white text-slate-700 border border-slate-200 font-semibold rounded-md hover:bg-slate-50 transition-all">
                Schedule Demo
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Features Section */}
      <section id="features" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-slate-900 sm:text-4xl mb-4 tracking-tight">
              Powerful features for modern teams
            </h2>
            <p className="text-slate-500 max-w-2xl mx-auto">
              Everything you need to manage your business workflows in one place.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="p-6 bg-slate-50 rounded-xl border border-slate-100 hover:border-indigo-100 transition-all group">
                <div className="mb-4 p-3 bg-white w-fit rounded-lg shadow-sm group-hover:shadow-md transition-all">
                  {feature.icon}
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-2">{feature.title}</h3>
                <p className="text-slate-600 text-sm leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-indigo-600 rounded-2xl p-8 lg:p-16 text-center text-white relative overflow-hidden shadow-2xl">
            <div className="relative z-10">
              <h2 className="text-3xl sm:text-4xl font-bold mb-6 tracking-tight">
                Ready to transform your workflow?
              </h2>
              <p className="text-indigo-100 text-lg mb-10 max-w-2xl mx-auto">
                Join thousands of teams already using StrkFlow to deliver faster results.
              </p>
              <button className="px-10 py-4 bg-white text-indigo-600 font-bold rounded-md hover:bg-indigo-50 transition-all shadow-lg">
                Get Started Now
              </button>
            </div>
            {/* Simple decoration */}
            <div className="absolute top-0 right-0 -mr-20 -mt-20 w-80 h-80 bg-white opacity-5 rounded-full" />
            <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-64 h-64 bg-white opacity-5 rounded-full" />
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white border-t border-slate-200 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6 text-slate-500 text-sm">
            <div className="flex items-center gap-2">
              <Workflow className="w-5 h-5 text-indigo-600" />
              <span className="font-bold text-slate-900">StrkFlow</span>
            </div>
            <div className="flex gap-8">
              <a href="#" className="hover:text-indigo-600 transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-indigo-600 transition-colors">Terms of Service</a>
              <a href="#" className="hover:text-indigo-600 transition-colors">Support</a>
            </div>
            <p>&copy; 2026 StrkFlow. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
