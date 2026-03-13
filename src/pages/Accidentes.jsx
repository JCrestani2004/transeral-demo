import React from 'react';
import { motion } from 'framer-motion';
import { ShieldAlert, Calendar, Truck, User, MapPin, AlertTriangle, ChevronRight } from 'lucide-react';

const ACCIDENTES_DATA = [
  { id: 1, fecha: '2026-03-05', vehiculo: 'Camión 02', chofer: 'Ricardo Gomez', lugar: 'Autopista Regional del Centro', gravedad: 'Leve', descripcion: 'Roce lateral en peaje.' },
  { id: 2, fecha: '2026-02-28', vehiculo: 'Camión 12', chofer: 'Juan Pérez', lugar: 'Vía Valle de la Pascua', gravedad: 'Moderada', descripcion: 'Falla de frenos y salida de vía.' },
];

export default function Accidentes() {
  return (
    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="p-4 md:p-8 space-y-6">
      <header className="pt-12 lg:pt-0">
        <h2 className="text-2xl font-black text-slate-800">Control de Accidentes</h2>
        <p className="text-slate-500 text-sm font-medium">Registro oficial de incidentes y accidentes viales.</p>
      </header>

      {/* Formulario de Reporte Rápido */}
      <section className="bg-red-50 border border-red-100 p-6 rounded-3xl shadow-sm">
        <h3 className="text-red-600 font-black text-xs uppercase tracking-widest mb-4 flex items-center gap-2">
          <AlertTriangle size={18} /> Reportar Incidente Nuevo
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <input type="date" className="p-3 bg-white rounded-2xl text-sm font-bold border-none outline-none ring-1 ring-red-200" />
          <select className="p-3 bg-white rounded-2xl text-sm font-bold border-none outline-none ring-1 ring-red-200">
            <option>Seleccionar Camión...</option>
            <option>Camión 02</option>
            <option>Camión 12</option>
          </select>
          <input placeholder="Lugar del Suceso" className="p-3 bg-white rounded-2xl text-sm font-bold border-none outline-none ring-1 ring-red-200 md:col-span-2" />
          <textarea placeholder="Descripción breve del accidente..." className="p-3 bg-white rounded-2xl text-sm font-bold border-none outline-none ring-1 ring-red-200 md:col-span-4 h-20" />
          <button className="md:col-span-4 bg-red-600 text-white py-3 rounded-2xl font-black uppercase text-xs tracking-widest hover:bg-red-700 transition-all">
            Registrar Accidente en Sistema
          </button>
        </div>
      </section>

      {/* Historial Animado */}
      <div className="space-y-4">
        <h3 className="font-bold text-slate-700 ml-1">Historial de Incidentes</h3>
        <div className="grid grid-cols-1 gap-3">
          {ACCIDENTES_DATA.map((acc) => (
            <motion.div key={acc.id} whileHover={{ x: 5 }} className="bg-white p-4 rounded-3xl border border-slate-100 shadow-sm flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
              <div className="flex items-center gap-4">
                <div className={`p-3 rounded-2xl ${acc.gravedad === 'Moderada' ? 'bg-orange-100 text-orange-600' : 'bg-red-100 text-red-600'}`}>
                  <ShieldAlert size={24} />
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <span className="font-black text-slate-800">{acc.vehiculo}</span>
                    <span className={`text-[9px] font-black px-2 py-0.5 rounded-full uppercase ${acc.gravedad === 'Moderada' ? 'bg-orange-100 text-orange-600' : 'bg-red-100 text-red-600'}`}>
                      {acc.gravedad}
                    </span>
                  </div>
                  <p className="text-xs text-slate-500 font-bold">{acc.chofer} • {acc.fecha}</p>
                </div>
              </div>
              <div className="flex items-center gap-2 text-xs text-slate-400 font-medium italic">
                <MapPin size={12} /> {acc.lugar}
              </div>
              <button className="text-slate-300 hover:text-slate-600"><ChevronRight /></button>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
}