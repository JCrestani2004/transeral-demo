import React from 'react';
import { motion } from 'framer-motion';
import { AreaChart, Area, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';
import { Truck, Navigation, Package, AlertCircle, TrendingUp } from 'lucide-react';

const DATA_VIAJES = [
  { name: 'Lun', viajes: 12 }, { name: 'Mar', viajes: 18 }, { name: 'Mie', viajes: 15 },
  { name: 'Jue', viajes: 22 }, { name: 'Vie', viajes: 30 }, { name: 'Sab', viajes: 10 },
];

const METRICAS = [
  { label: 'Viajes Hoy', value: '24', icon: Navigation, color: 'text-blue-600', bg: 'bg-blue-50' },
  { label: 'En Inventario', value: '1,290', icon: Package, color: 'text-orange-600', bg: 'bg-orange-50' },
  { label: 'Flota Activa', value: '18/20', icon: Truck, color: 'text-green-600', bg: 'bg-green-50' },
  { label: 'Alertas', value: '2', icon: AlertCircle, color: 'text-red-600', bg: 'bg-red-50' },
];

export default function DashboardHome() {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }} 
      animate={{ opacity: 1, y: 0 }} 
      className="p-4 md:p-8 space-y-6 md:space-y-8"
    >
      {/* Saludo y Título */}
      <header className="pt-12 lg:pt-0">
        <h2 className="text-2xl md:text-3xl font-black text-slate-800">Panel Operativo</h2>
        <p className="text-slate-500 text-sm font-medium">Estado actual de Transeral en tiempo real.</p>
      </header>

      {/* Tarjetas de Métricas (Grid Adaptativo) */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 md:gap-6">
        {METRICAS.map((m, i) => (
          <motion.div 
            key={i}
            whileHover={{ y: -5 }}
            className="bg-white p-4 md:p-6 rounded-3xl border border-slate-100 shadow-sm flex flex-col justify-between"
          >
            <div className={`p-3 rounded-2xl w-fit ${m.bg} ${m.color} mb-4`}>
              <m.icon size={20} />
            </div>
            <div>
              <p className="text-[10px] md:text-xs font-black text-slate-400 uppercase tracking-tighter">{m.label}</p>
              <p className="text-xl md:text-2xl font-black text-slate-800">{m.value}</p>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Gráfica de Rendimiento */}
      <div className="bg-white p-6 rounded-3xl border border-slate-100 shadow-sm">
        <div className="flex items-center justify-between mb-6">
          <h3 className="font-bold text-slate-700 flex items-center gap-2">
            <TrendingUp size={18} className="text-[#0033A0]" /> Actividad Semanal
          </h3>
          <span className="text-[10px] font-black bg-blue-50 text-[#0033A0] px-2 py-1 rounded-lg">MARZO 2026</span>
        </div>
        <div className="h-64 w-full">
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart data={DATA_VIAJES}>
              <defs>
                <linearGradient id="colorViajes" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#0033A0" stopOpacity={0.1}/>
                  <stop offset="95%" stopColor="#0033A0" stopOpacity={0}/>
                </linearGradient>
              </defs>
              <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{fontSize: 12, fill: '#94a3b8'}} />
              <Tooltip 
                contentStyle={{borderRadius: '16px', border: 'none', boxShadow: '0 10px 15px -3px rgba(0,0,0,0.1)'}} 
              />
              <Area type="monotone" dataKey="viajes" stroke="#0033A0" strokeWidth={3} fillOpacity={1} fill="url(#colorViajes)" />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </div>
    </motion.div>
  );
}