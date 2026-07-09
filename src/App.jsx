import { useState } from 'react'
import { Users, Building2, Plus } from 'lucide-react'
import ProfilesPage from './pages/Profiles.jsx'
import EnterprisesPage from './pages/Enterprises.jsx'

const TABS = [
  { id: 'profiles',    label: '用户信息', icon: Users,     desc: '收集并管理用户个人信息' },
  { id: 'enterprises', label: '企业信息', icon: Building2, desc: '收集并管理企业/组织信息' },
]

function App() {
  const [activeTab, setActiveTab] = useState('profiles')
  const [triggerAdd, setTriggerAdd] = useState(0)

  const currentTab = TABS.find((t) => t.id === activeTab)
  const Icon = currentTab.icon

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col">
      {/* Unified Header */}
      <header className="bg-white border-b border-slate-200 sticky top-0 z-30">
        <div className="max-w-7xl mx-auto px-4 md:px-8 py-4 flex items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-indigo-500 flex items-center justify-center">
              <Icon className="w-5 h-5 text-white" />
            </div>
            <div>
              <h1 className="text-lg font-bold text-slate-900 leading-tight">{currentTab.label}</h1>
              <p className="text-xs text-slate-400 hidden sm:block">{currentTab.desc}</p>
            </div>
          </div>
          <button
            onClick={() => setTriggerAdd((n) => n + 1)}
            className="flex items-center gap-2 px-4 py-2 rounded-lg bg-indigo-500 hover:bg-indigo-600 text-white text-sm font-medium transition"
          >
            <Plus className="w-4 h-4" />
            <span className="hidden sm:inline">
              {activeTab === 'profiles' ? '添加用户' : '添加企业'}
            </span>
            <span className="sm:hidden">添加</span>
          </button>
        </div>

        {/* Tab Bar */}
        <div className="max-w-7xl mx-auto px-4 md:px-8 flex gap-1 border-t border-slate-100">
          {TABS.map((tab) => {
            const TabIcon = tab.icon
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center gap-2 px-4 py-3 text-sm font-medium border-b-2 transition -mb-px ${
                  activeTab === tab.id
                    ? 'border-indigo-500 text-indigo-600'
                    : 'border-transparent text-slate-500 hover:text-slate-700 hover:border-slate-300'
                }`}
              >
                <TabIcon className="w-4 h-4" />
                {tab.label}
              </button>
            )
          })}
        </div>
      </header>

      {/* Page Content */}
      {activeTab === 'profiles'    && <ProfilesPage    triggerAdd={triggerAdd} />}
      {activeTab === 'enterprises' && <EnterprisesPage triggerAdd={triggerAdd} />}
    </div>
  )
}

export default App

