import React from 'react';
import { motion } from 'framer-motion';
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, Cell, PieChart, Pie } from 'recharts';
import { Package, TrendingUp, Anchor, Database } from 'lucide-react';

const DATA_VOLUMEN = [
  { name: 'Maíz en Grano', valor: 45 },
  { name: 'Repuestos', valor: 25 },
  { name: 'Contenedores', valor: 30 },
];

const COLORS = ['#0033A0', '#475569', '#94a3b8'];

export default function Materiales() {
  return (
    <motion.div 
      initial={{ opacity: 0 }} 
      animate={{ opacity: 1 }} 
      className="p-4 md:p-8 space-y-8"
    >
      <header>
        <h1 className="text-2xl font-black text-slate-800">Analítica de Carga</h1>
        <p className="text-slate-500 text-sm">Distribución de materiales según rutas activas en Venezuela.</p>
      </header>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Gráfico de Distribución */}
        <div className="lg:col-span-2 bg-white p-6 rounded-3xl border border-slate-100 shadow-sm">
          <div className="flex items-center justify-between mb-6">
            <h3 className="font-bold text-slate-700">Flujo de Materiales (%)</h3>
            <Database size={20} className="text-slate-300" />
          </div>
          <div className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={DATA_VOLUMEN} margin={{ top: 20 }}>
                <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{fontSize: 12, fontWeight: 'bold'}} />
                <Tooltip cursor={{fill: 'transparent'}} contentStyle={{borderRadius: '15px', border: 'none', boxShadow: '0 10px 15px -3px rgba(0,0,0,0.1)'}} />
                <Bar dataKey="valor" radius={[10, 10, 0, 0]} barSize={50}>
                  {DATA_VOLUMEN.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* KPI de Material Líder */}
        <div className="space-y-6">
          <motion.div 
            whileHover={{ y: -5 }}
            className="bg-[#0033A0] p-6 rounded-3xl text-white shadow-xl shadow-blue-900/20 relative overflow-hidden"
          >
            <TrendingUp size={80} className="absolute -right-4 -bottom-4 opacity-10" />
            <p className="text-[10px] font-black uppercase opacity-60 tracking-widest">Material Predominante</p>
            <h2 className="text-3xl font-black mt-2 italic">Maíz en Grano</h2>
            <p className="text-xs mt-4 font-medium">+12% respecto al mes anterior</p>
          </motion.div>

          <div className="bg-white p-6 rounded-3xl border border-slate-100 flex items-center gap-4 shadow-sm">
            <div className="p-3 bg-slate-50 text-slate-400 rounded-2xl"><Anchor size={24} /></div>
            <div>
              <p className="text-[10px] font-black text-slate-400 uppercase">Puerto de Mayor Carga</p>
              <p className="text-lg font-bold text-slate-800">Puerto Cabello</p>
            </div>
          </div>
        </div>
      </div>

      {/* Tabla Mobile-Ready de Materiales */}
      <div className="bg-white rounded-3xl border border-slate-100 overflow-hidden shadow-sm">
        <div className="p-5 border-b border-slate-50">
          <h3 className="font-bold text-slate-700">Listado de Carga por Ruta</h3>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <thead className="bg-slate-50 text-[10px] font-black uppercase text-slate-400">
              <tr>
                <th className="px-6 py-4">Insumo</th>
                <th className="px-6 py-4">Frecuencia</th>
                <th className="px-6 py-4">Ruta Principal</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              <tr className="hover:bg-slate-50/50">
                <td className="px-6 py-4 font-bold text-slate-700 italic">Maíz en Grano</td>
                <td className="px-6 py-4">
                  <div className="w-full bg-slate-100 h-1.5 rounded-full overflow-hidden">
                    <div className="bg-[#0033A0] h-full w-[80%]" />
                  </div>
                </td>
                <td className="px-6 py-4 text-xs font-medium text-slate-500">V. de la Pascua</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </motion.div>
  );
}