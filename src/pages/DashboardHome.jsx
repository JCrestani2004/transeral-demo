import React from 'react';
import { Truck, Route, AlertTriangle, CheckCircle, TrendingUp } from 'lucide-react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

// Datos basados en tu archivo dashboard.js original
const datosViajes = [
  { mes: 'Ene', viajes: 12 },
  { mes: 'Feb', viajes: 19 },
  { mes: 'Mar', viajes: 8 },
  { mes: 'Abr', viajes: 15 },
  { mes: 'May', viajes: 10 },
  { mes: 'Jun', viajes: 14 },
];

export default function DashboardHome() {
  const stats = [
    { label: 'Viajes Realizados', value: '78', icon: Route, color: 'text-blue-600', bg: 'bg-blue-50' },
    { label: 'Flota Activa', value: '14', icon: Truck, color: 'text-green-600', bg: 'bg-green-50' },
    { label: 'Mantenimiento', value: '3', icon: AlertTriangle, color: 'text-yellow-600', bg: 'bg-yellow-50' },
    { label: 'Estatus Entrega', value: '98%', icon: CheckCircle, color: 'text-purple-600', bg: 'bg-purple-50' },
  ];

  return (
    <div className="p-8 space-y-8 animate-in fade-in duration-500">
      {/* Bienvenida */}
      <div>
        <h1 className="text-2xl font-bold text-slate-800">Resumen Operativo</h1>
        <p className="text-slate-500 text-sm">Estado actual de la logística de Transeral.</p>
      </div>

      {/* Tarjetas de Indicadores (KPIs) */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, i) => (
          <div key={i} className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 flex items-center gap-4 hover:shadow-md transition-shadow">
            <div className={`p-3 rounded-xl ${stat.bg} ${stat.color}`}>
              <stat.icon size={24} />
            </div>
            <div>
              <p className="text-xs font-bold text-slate-400 uppercase tracking-wider">{stat.label}</p>
              <p className="text-2xl font-black text-slate-800">{stat.value}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Gráfico de Barras */}
        <div className="lg:col-span-2 bg-white p-6 rounded-2xl shadow-sm border border-slate-100">
          <div className="flex items-center justify-between mb-6">
            <h3 className="font-bold text-slate-700">Rendimiento Mensual (Viajes)</h3>
            <span className="flex items-center gap-1 text-xs font-bold text-green-500 bg-green-50 px-2 py-1 rounded-full">
              <TrendingUp size={14} /> +12% este mes
            </span>
          </div>
          <div className="h-72 w-full">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={datosViajes}>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f1f5f9" />
                <XAxis dataKey="mes" axisLine={false} tickLine={false} tick={{fill: '#94a3b8', fontSize: 12}} />
                <YAxis axisLine={false} tickLine={false} tick={{fill: '#94a3b8', fontSize: 12}} />
                <Tooltip 
                  cursor={{fill: '#f8fafc'}} 
                  contentStyle={{borderRadius: '12px', border: 'none', boxShadow: '0 10px 15px -3px rgba(0,0,0,0.1)'}}
                />
                <Bar dataKey="viajes" fill="#0033A0" radius={[6, 6, 0, 0]} barSize={40} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Alertas Rápidas (Basado en tu tabla de mantenimiento) */}
        <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100">
          <h3 className="font-bold text-slate-700 mb-4 text-sm uppercase tracking-tight">Atención Inmediata</h3>
          <div className="space-y-4">
            <div className="flex gap-3 p-3 bg-red-50 rounded-xl border border-red-100">
              <AlertTriangle className="text-red-600 shrink-0" size={18} />
              <div>
                <p className="text-xs font-bold text-red-800">Camión 3: Motor</p>
                <p className="text-[11px] text-red-600">Reportado como "Motor dañado". Requiere revisión.</p>
              </div>
            </div>
            <div className="flex gap-3 p-3 bg-blue-50 rounded-xl border border-blue-100">
              <Truck className="text-blue-600 shrink-0" size={18} />
              <div>
                <p className="text-xs font-bold text-blue-800">Mantenimiento Preventivo</p>
                <p className="text-[11px] text-blue-600">Camión 12: Cambio de aceite en 2 días.</p>
              </div>
            </div>
          </div>
          <button className="w-full mt-6 py-2 text-xs font-bold text-[#0033A0] bg-blue-50 rounded-lg hover:bg-[#0033A0] hover:text-white transition-colors">
            Ver Planificación Completa
          </button>
        </div>
      </div>
    </div>
  );
}