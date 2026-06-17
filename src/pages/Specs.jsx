import React from 'react';
import { Package, Cog, Ruler, Weight } from 'lucide-react';

const specs = [
  {
    category: "Double Folding Machines",
    items: [
      { model: "X-3200 Pro", thickness: "2.0 mm", length: "3200 mm", angle: "145°", weight: "4500 kg" },
      { model: "X-4000 Ultra", thickness: "2.5 mm", length: "4000 mm", angle: "145°", weight: "5800 kg" },
    ]
  },
  {
    category: "Sheet Metal Folders",
    items: [
      { model: "S-2500 Std", thickness: "1.5 mm", length: "2500 mm", angle: "135°", weight: "2800 kg" },
      { model: "S-3200 Std Plus", thickness: "1.5 mm", length: "3200 mm", angle: "135°", weight: "3100 kg" },
    ]
  },
  {
    category: "Industrial Metal Folders",
    items: [
      { model: "Z-4000 Heavy", thickness: "4.0 mm", length: "4000 mm", angle: "140°", weight: "8200 kg" },
      { model: "Z-6000 Giant", thickness: "4.0 mm", length: "6000 mm", angle: "140°", weight: "12500 kg" },
    ]
  }
];

export default function Specs() {
  return (
    <div className="min-h-screen bg-slate-50 py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-extra-bold text-slate-900 mb-4 uppercase tracking-tighter">Technical Specifications</h1>
          <p className="text-slate-600 max-w-2xl mx-auto">Detailed performance data for our entire fleet of metal forming machinery.</p>
        </div>

        <div className="grid gap-12">
          {specs.map((group, idx) => (
            <div key={idx} className="bg-white rounded-3xl border border-slate-200 overflow-hidden shadow-sm">
              <div className="bg-slate-900 px-8 py-5 text-white">
                <h2 className="text-xl font-bold uppercase tracking-wide">{group.category}</h2>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full text-left">
                  <thead>
                    <tr className="border-b border-slate-100 bg-slate-50/50">
                      <th className="px-8 py-4 text-xs font-bold text-slate-500 uppercase tracking-wider">Model</th>
                      <th className="px-8 py-4 text-xs font-bold text-slate-500 uppercase tracking-wider flex items-center gap-1.5"><Cog className="w-4 h-4" /> Max Thickness</th>
                      <th className="px-8 py-4 text-xs font-bold text-slate-500 uppercase tracking-wider items-center gap-1.5"><Ruler className="w-4 h-4 inline" /> Working Length</th>
                      <th className="px-8 py-4 text-xs font-bold text-slate-500 uppercase tracking-wider">Folding Angle</th>
                      <th className="px-8 py-4 text-xs font-bold text-slate-500 uppercase tracking-wider flex items-center gap-1.5"><Weight className="w-4 h-4" /> Weight</th>
                      <th className="px-8 py-4 text-xs font-bold text-slate-500 uppercase tracking-wider">Action</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100">
                    {group.items.map((item, i) => (
                      <tr key={i} className="hover:bg-slate-50 transition-colors">
                        <td className="px-8 py-5 font-bold text-slate-900">{item.model}</td>
                        <td className="px-8 py-5 text-sm font-medium text-slate-600">{item.thickness}</td>
                        <td className="px-8 py-5 text-sm font-medium text-slate-600">{item.length}</td>
                        <td className="px-8 py-5 text-sm font-medium text-slate-600">{item.angle}</td>
                        <td className="px-8 py-5 text-sm font-medium text-slate-600">{item.weight}</td>
                        <td className="px-8 py-5">
                          <button className="text-blue-600 text-xs font-bold uppercase tracking-widest hover:text-blue-700">Download Data</button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
