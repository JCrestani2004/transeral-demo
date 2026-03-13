import React from 'react';
import { Package, BarChart3, TrendingUp, Filter } from 'lucide-react';
import { ResponsiveContainer, BarChart, Bar, XAxis, YAxis, Tooltip, Cell } from 'recharts';

const MATERIALES_DATA = [
  { nombre: 'Aceite Motor', volumen: 450, unidad: 'Litros' },
  { nombre: 'Llantas R22', volumen: 320, unidad: 'Unidades' },
  { nombre: 'Filtros Aire', volumen: 280, unidad: 'Unidades' },
  { nombre: 'Baterías', volumen: 150, unidad: 'Unidades' },
  { nombre: 'Pastillas Freno', volumen: 90, unidad: 'Sets' },
];

export default function Materiales() {
  return (
    <div className="p-8 space-y-8 animate-in fade-in duration-500">
      <div>
        <h1 className="text-2xl font-bold text-slate-800">Control de Materiales</h1>
        <p className="text-slate-500 text-sm">Resumen de carga transportada por la flota.</p>
      </div>

      {/* Gráfico y KPIs */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 bg-white p-6 rounded-3xl shadow-sm border border-slate-100">
          <h3 className="font-bold text-slate-700 mb-6">Volumen por Insumo</h3>
          <div className="h-64 w-full">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={MATERIALES_DATA}>
                <XAxis dataKey="nombre" axisLine={false} tickLine={false} tick={{fontSize: 11}} />
                <YAxis axisLine={false} tickLine={false} />
                <Tooltip cursor={{fill: '#f8fafc'}} />
                <Bar dataKey="volumen" radius={[8, 8, 0, 0]} barSize={40}>
                  {MATERIALES_DATA.map((entry, index) => (
                    <Cell key={index} fill={index === 0 ? '#0033A0' : '#cbd5e1'} />
                  ))}
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Resumen rápido */}
        <div className="space-y-4">
          <div className="bg-[#0033A0] p-6 rounded-3xl text-white shadow-lg shadow-blue-900/20">
            <TrendingUp size={32} className="mb-4 opacity-80" />
            <p className="text-xs uppercase font-bold opacity-60">Material Líder</p>
            <p className="text-2xl font-black">Aceite Motor</p>
          </div>
          <div className="bg-white p-6 rounded-3xl border border-slate-100">
            <p className="text-xs uppercase font-bold text-slate-400">Total Materiales</p>
            <p className="text-3xl font-black text-slate-800">1,290</p>
          </div>
        </div>
      </div>

      {/* TABLA DETALLADA */}
      <div className="bg-white rounded-3xl shadow-sm border border-slate-100 overflow-hidden">
        <div className="p-6 border-b border-slate-50 flex justify-between items-center">
          <h3 className="font-bold text-slate-700">Detalle de Materiales Transportados</h3>
          <button className="flex items-center gap-2 text-xs font-bold text-slate-500 hover:text-[#0033A0]">
            <Filter size={14} /> Filtrar Reporte
          </button>
        </div>
        <table className="w-full text-left">
          <thead className="bg-slate-50">
            <tr>
              <th className="px-6 py-4 text-[11px] font-bold text-slate-400 uppercase">Nombre del Material</th>
              <th className="px-6 py-4 text-[11px] font-bold text-slate-400 uppercase">Cantidad</th>
              <th className="px-6 py-4 text-[11px] font-bold text-slate-400 uppercase">Unidad</th>
              <th className="px-6 py-4 text-[11px] font-bold text-slate-400 uppercase">Estado</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100">
            {MATERIALES_DATA.map((m, i) => (
              <tr key={i} className="hover:bg-slate-50/50">
                <td className="px-6 py-4 font-bold text-slate-700 flex items-center gap-3">
                  <div className="p-2 bg-blue-50 text-[#0033A0] rounded-lg">
                    <Package size={14} />
                  </div>
                  {m.nombre}
                </td>
                <td className="px-6 py-4 font-mono font-bold text-slate-600">{m.volumen}</td>
                <td className="px-6 py-4 text-sm text-slate-500">{m.unidad}</td>
                <td className="px-6 py-4">
                  <span className="px-2 py-1 rounded-md bg-green-50 text-green-600 text-[10px] font-bold uppercase">Distribuido</span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}