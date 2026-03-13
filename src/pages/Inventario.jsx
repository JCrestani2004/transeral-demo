import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Box, MapPin, Hash, Search, Plus, Archive, ShieldAlert } from 'lucide-react';

const INITIAL_STOCK = [
  { id: 1, zte: 'ZTE-VEN-001', nombre: 'Contenedor Refrigerado 40ft', cantidad: 5, ubicacion: 'Patio B - Zona Norte' },
  { id: 2, zte: 'ZTE-LOG-882', nombre: 'Paletas de Aluminio Estándar', cantidad: 150, ubicacion: 'Almacén 1 - Estante C' },
  { id: 3, zte: 'ZTE-SEG-50', nombre: 'Kits de Amarre de Seguridad', cantidad: 45, ubicacion: 'Sede Caracas - Oficina Control' },
];

export default function Inventario() {
  const [activeTab, setActiveTab] = useState('lista');

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="p-4 md:p-8 space-y-6">
      <header className="pt-10 lg:pt-0">
        <h1 className="text-2xl font-black text-slate-800">Inventario de Activos</h1>
        <p className="text-slate-500 text-sm">Control de equipos por Código ZTE y ubicación física.</p>
      </header>

      {/* Tabs Animadas */}
      <div className="flex bg-slate-100 p-1.5 rounded-2xl w-fit gap-1">
        <button onClick={() => setActiveTab('lista')} className={`px-6 py-2 rounded-xl text-xs font-black uppercase transition-all ${activeTab === 'lista' ? 'bg-white text-[#0033A0] shadow-sm' : 'text-slate-400'}`}>Existencias</button>
        <button onClick={() => setActiveTab('registro')} className={`px-6 py-2 rounded-xl text-xs font-black uppercase transition-all ${activeTab === 'registro' ? 'bg-white text-[#0033A0] shadow-sm' : 'text-slate-400'}`}>+ Nuevo Item</button>
      </div>

      <AnimatePresence mode="wait">
        {activeTab === 'lista' ? (
          <motion.div key="lista" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {INITIAL_STOCK.map((item) => (
              <div key={item.id} className="bg-white p-5 rounded-3xl border border-slate-100 shadow-sm hover:shadow-md transition-all group">
                <div className="flex justify-between items-start mb-4">
                  <div className="p-3 bg-blue-50 text-[#0033A0] rounded-2xl group-hover:bg-[#0033A0] group-hover:text-white transition-colors">
                    <Box size={24} />
                  </div>
                  <span className="text-[10px] font-black bg-slate-100 text-slate-500 px-2 py-1 rounded-lg uppercase tracking-widest flex items-center gap-1">
                    <Hash size={10} /> {item.zte}
                  </span>
                </div>
                <h3 className="font-bold text-slate-800 text-lg mb-1">{item.nombre}</h3>
                <div className="space-y-2 mt-4">
                  <div className="flex items-center gap-2 text-xs text-slate-500 font-bold">
                    <Archive size={14} className="text-blue-400" /> Cantidad: {item.cantidad}
                  </div>
                  <div className="flex items-center gap-2 text-xs text-slate-500">
                    <MapPin size={14} className="text-red-400" /> {item.ubicacion}
                  </div>
                </div>
              </div>
            ))}
          </motion.div>
        ) : (
          <motion.div key="reg" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="bg-white p-6 rounded-3xl border border-slate-100 shadow-xl max-w-2xl">
            <h3 className="font-black text-[#0033A0] uppercase text-xs tracking-widest mb-6">Registro de Nuevo Activo</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input placeholder="Nombre del Equipo" className="p-3 bg-slate-50 rounded-2xl text-sm font-bold outline-none border border-transparent focus:border-blue-200 w-full" />
              <input placeholder="Código ZTE (Ej: ZTE-001)" className="p-3 bg-slate-50 rounded-2xl text-sm font-bold outline-none border border-transparent focus:border-blue-200 w-full" />
              <input placeholder="Cantidad Inicial" type="number" className="p-3 bg-slate-50 rounded-2xl text-sm font-bold outline-none border border-transparent focus:border-blue-200 w-full" />
              <input placeholder="Ubicación Física" className="p-3 bg-slate-50 rounded-2xl text-sm font-bold outline-none border border-transparent focus:border-blue-200 w-full" />
              <button className="md:col-span-2 bg-[#0033A0] text-white py-4 rounded-2xl font-black uppercase text-xs tracking-widest shadow-lg shadow-blue-900/20 active:scale-95 transition-all">Guardar en Base de Datos</button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}