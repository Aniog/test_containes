import React from 'react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { TrendingUp, TrendingDown, DollarSign, Users, ShoppingCart, ArrowUpRight } from 'lucide-react';
import { LineChart, Line, AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const data = [
  { name: 'Jan', value: 4000, users: 2400 },
  { name: 'Feb', value: 3000, users: 1398 },
  { name: 'Mar', value: 2000, users: 9800 },
  { name: 'Apr', value: 2780, users: 3908 },
  { name: 'May', value: 1890, users: 4800 },
  { name: 'Jun', value: 2390, users: 3800 },
  { name: 'Jul', value: 3490, users: 4300 },
];

const Home = () => {
  return (
    <div className="space-y-8 max-w-7xl mx-auto">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 id="dashboard-title" className="text-3xl font-bold tracking-tight text-slate-900">Dashboard Overview</h1>
          <p id="dashboard-subtitle" className="text-slate-500 mt-1">Real-time performance metrics and insights.</p>
        </div>
        <div className="flex items-center gap-3">
          <Button variant="secondary" size="sm">Download Report</Button>
          <Button size="sm">Create New</Button>
        </div>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div className="w-12 h-12 bg-indigo-50 rounded-xl flex items-center justify-center text-indigo-600">
                <DollarSign className="w-6 h-6" />
              </div>
              <Badge variant="success" className="gap-1">
                <TrendingUp className="w-3 h-3" />
                12.5%
              </Badge>
            </div>
            <div className="mt-4">
              <p className="text-sm font-medium text-slate-500">Total Revenue</p>
              <h3 className="text-2xl font-bold text-slate-900">$45,231.89</h3>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div className="w-12 h-12 bg-emerald-50 rounded-xl flex items-center justify-center text-emerald-600">
                <Users className="w-6 h-6" />
              </div>
              <Badge variant="success" className="gap-1">
                <TrendingUp className="w-3 h-3" />
                8.2%
              </Badge>
            </div>
            <div className="mt-4">
              <p className="text-sm font-medium text-slate-500">Active Users</p>
              <h3 className="text-2xl font-bold text-slate-900">+2,350</h3>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div className="w-12 h-12 bg-amber-50 rounded-xl flex items-center justify-center text-amber-600">
                <ShoppingCart className="w-6 h-6" />
              </div>
              <Badge variant="success" className="gap-1">
                <TrendingUp className="w-3 h-3" />
                4.1%
              </Badge>
            </div>
            <div className="mt-4">
              <p className="text-sm font-medium text-slate-500">Total Orders</p>
              <h3 className="text-2xl font-bold text-slate-900">+12,234</h3>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div className="w-12 h-12 bg-rose-50 rounded-xl flex items-center justify-center text-rose-600">
                <TrendingUp className="w-6 h-6" />
              </div>
              <Badge variant="success" className="gap-1">
                <TrendingUp className="w-3 h-3" />
                2.4%
              </Badge>
            </div>
            <div className="mt-4">
              <p className="text-sm font-medium text-slate-500">Conversion Rate</p>
              <h3 className="text-2xl font-bold text-slate-900">4.3%</h3>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Charts Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <Card className="col-span-1 lg:col-span-2">
          <CardHeader>
            <div className="flex items-center justify-between">
              <div>
                <CardTitle>Revenue Analytics</CardTitle>
                <CardDescription>Monthly revenue growth and projections.</CardDescription>
              </div>
              <Button variant="ghost" size="sm" className="text-indigo-600 hover:text-indigo-700">
                View Details <ArrowUpRight className="ml-2 w-4 h-4" />
              </Button>
            </div>
          </CardHeader>
          <CardContent className="h-[400px]">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={data}>
                <defs>
                  <linearGradient id="colorValue" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#4f46e5" stopOpacity={0.1}/>
                    <stop offset="95%" stopColor="#4f46e5" stopOpacity={0}/>
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#e2e8f0" />
                <XAxis 
                  dataKey="name" 
                  axisLine={false} 
                  tickLine={false} 
                  tick={{ fill: '#64748b', fontSize: 12 }} 
                  dy={10}
                />
                <YAxis 
                  axisLine={false} 
                  tickLine={false} 
                  tick={{ fill: '#64748b', fontSize: 12 }} 
                />
                <Tooltip 
                  contentStyle={{ 
                    backgroundColor: '#fff', 
                    borderRadius: '8px', 
                    border: '1px solid #e2e8f0',
                    boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)'
                  }}
                />
                <Area 
                  type="monotone" 
                  dataKey="value" 
                  stroke="#4f46e5" 
                  strokeWidth={2}
                  fillOpacity={1} 
                  fill="url(#colorValue)" 
                />
              </AreaChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
      </div>

      {/* Featured Section with Stock Image */}
      <Card className="overflow-hidden">
        <div className="grid grid-cols-1 md:grid-cols-2">
          <div className="p-8 md:p-12 flex flex-col justify-center bg-slate-900 text-white">
            <h2 id="feature-title" className="text-3xl font-bold tracking-tight mb-4">Master Your Data Story</h2>
            <p id="feature-desc" className="text-slate-400 mb-8 leading-relaxed">
              Experience the next generation of business intelligence. Our intuitive platform transforms complex datasets into actionable visual narratives that drive growth and decision-making.
            </p>
            <div className="flex gap-4">
              <Button className="bg-white text-slate-900 hover:bg-slate-100">Get Started</Button>
              <Button variant="ghost" className="text-white hover:bg-slate-800">Learn More</Button>
            </div>
          </div>
          <div className="h-64 md:h-full relative bg-slate-200">
             <div
              data-strk-bg-id="feature-image-7b2a9c"
              data-strk-bg="[feature-desc] [feature-title] [dashboard-subtitle] [dashboard-title]"
              data-strk-bg-ratio="16x9"
              data-strk-bg-width="1200"
              className="absolute inset-0 bg-cover bg-center"
            />
          </div>
        </div>
      </Card>
    </div>
  );
};

export default Home;
