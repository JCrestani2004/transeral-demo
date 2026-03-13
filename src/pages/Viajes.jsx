import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  MapPin, Route, Truck, DollarSign, Package, 
  Plus, ChevronRight, CheckCircle2, Map, Navigation 
} from 'lucide-react';

export default function Viajes() {
  const [activeSubTab, setActiveSubTab] = useState('registro'); // 'registro', 'rutas', 'destinos'
  
  // Estados para simular Base de Datos
  const [destinos, setDestinos] = useState(['Caracas', 'Valencia', 'Barinas', 'Puerto Cabello']);
  const [rutas, setRutas] = useState([
    { id: 1, origen: 'Caracas', destino: 'Valle de la Pascua', material: 'Maíz', precio: 1200 },
    { id: 2, origen: 'Valencia', destino: 'Barinas', material: 'Aceites', precio: 850 }
  ]);
  const [viajesRealizados, setViajesRealizados] = useState([]);

  // Estado del Formulario de Viaje
  const [formViaje, setFormViaje] = useState({
    rutaId: '', origen: '', destino: '', material: '', precio: '', chofer: '', pagoCompleto: false
  });

  // Lógica de Autocompletado (pero editable)
  const handleSelectRuta = (id) => {
    if (!id) return;
    const rutaEncontrada = rutas.find(r => r.id === parseInt(id));
    if (rutaEncontrada) {
      setFormViaje({
        ...formViaje,
        rutaId: id,
        origen: rutaEncontrada.origen,
        destino: rutaEncontrada.destino,
        material: rutaEncontrada.material,
        precio: rutaEncontrada.precio
      });
    }
  };

  return (
    <motion.div 
      initial={{ opacity: 0 }} animate={{ opacity: 1 }} 
      className="p-4 md:p-8 space-y-6 pb-24 lg:pb-8"
    >
      <header className="pt-10 lg:pt-0">
        <h1 className="text-2xl font-black text-slate-800">Módulo de Logística</h1>
        <p className="text-slate-500 text-sm italic">Gestión de destinos, rutas y despachos.</p>
      </header>

      {/* TABS DE NAVEGACIÓN (Mobile Friendly) */}
      <div className="flex bg-slate-100 p-1.5 rounded-2xl gap-1">
        {[
          { id: 'registro', label: 'Despacho', icon: Truck },
          { id: 'rutas', label: 'Rutas', icon: Route },
          { id: 'destinos', label: 'Destinos', icon: MapPin }
        ].map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveSubTab(tab.id)}
            className={`flex-1 flex items-center justify-center gap-2 py-2.5 rounded-xl text-[11px] font-black uppercase tracking-tighter transition-all ${
              activeSubTab === tab.id ? 'bg-white text-[#0033A0] shadow-sm' : 'text-slate-400'
            }`}
          >
            <tab.icon size={14} />
            {tab.label}
          </button>
        ))}
      </div>

      <AnimatePresence mode="wait">
        {/* VISTA 1: REGISTRO DE VIAJES (OPERACIÓN) */}
        {activeSubTab === 'registro' && (
          <motion.div 
            key="registro" initial={{ y: 10, opacity: 0 }} animate={{ y: 0, opacity: 1 }} exit={{ y: -10, opacity: 0 }}
            className="space-y-6"
          >
            <section className="bg-white p-6 rounded-3xl border border-slate-100 shadow-xl shadow-slate-200/40">
              <h3 className="font-bold text-slate-700 mb-4 flex items-center gap-2 uppercase text-xs tracking-widest">
                <Navigation size={16} className="text-[#0033A0]" /> Nuevo Despacho
              </h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                {/* Selector de Ruta */}
                <div className="space-y-1">
                  <label className="text-[10px] font-black text-slate-400 uppercase">Cargar Ruta Predefinida</label>
                  <select 
                    className="w-full p-3 bg-slate-50 border-none rounded-2xl text-sm font-bold outline-none ring-1 ring-slate-200 focus:ring-2 focus:ring-[#0033A0]/20"
                    onChange={(e) => handleSelectRuta(e.target.value)}
                  >
                    <option value="">Manual / Sin Ruta...</option>
                    {rutas.map(r => <option key={r.id} value={r.id}>{r.origen} ➔ {r.destino}</option>)}
                  </select>
                </div>

                {/* Material (Autocompletado pero EDITABLE) */}
                <div className="space-y-1">
                  <label className="text-[10px] font-black text-slate-400 uppercase">Material de Carga</label>
                  <div className="relative">
                    <Package className="absolute left-3 top-3 text-slate-300" size={18} />
                    <input 
                      type="text" value={formViaje.material}
                      onChange={(e) => setFormViaje({...formViaje, material: e.target.value})}
                      placeholder="Ej: Maíz, Repuestos..."
                      className="w-full pl-10 p-3 bg-white border border-slate-200 rounded-2xl text-sm font-bold outline-none focus:border-[#0033A0]"
                    />
                  </div>
                </div>

                {/* Precio (Autocompletado pero EDITABLE) */}
                <div className="space-y-1">
                  <label className="text-[10px] font-black text-slate-400 uppercase">Precio del Viaje ($)</label>
                  <div className="relative">
                    <DollarSign className="absolute left-3 top-3 text-green-500" size={18} />
                    <input 
                      type="number" value={formViaje.precio}
                      onChange={(e) => setFormViaje({...formViaje, precio: e.target.value})}
                      placeholder="0.00"
                      className="w-full pl-10 p-3 bg-white border border-slate-200 rounded-2xl text-sm font-black outline-none focus:border-[#0033A0]"
                    />
                  </div>
                </div>

                <button className="lg:col-span-3 bg-[#0033A0] text-white py-4 rounded-2xl font-black uppercase text-xs tracking-widest shadow-lg shadow-blue-900/20 active:scale-95 transition-all">
                  Registrar Viaje Realizado
                </button>
              </div>
            </section>
          </motion.div>
        )}

        {/* VISTA 2: GESTIÓN DE RUTAS */}
        {activeSubTab === 'rutas' && (
          <motion.div 
            key="rutas" initial={{ y: 10, opacity: 0 }} animate={{ y: 0, opacity: 1 }} exit={{ y: -10, opacity: 0 }}
            className="space-y-4"
          >
            <div className="bg-white p-6 rounded-3xl border border-slate-100 shadow-sm">
              <h3 className="font-bold text-slate-700 mb-4 text-xs uppercase tracking-widest">Crear Nueva Ruta Maestra</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <select className="p-3 bg-slate-50 rounded-2xl text-sm font-bold border-none outline-none ring-1 ring-slate-100">
                  <option>Seleccione Salida...</option>
                  {destinos.map((d, i) => <option key={i}>{d}</option>)}
                </select>
                <select className="p-3 bg-slate-50 rounded-2xl text-sm font-bold border-none outline-none ring-1 ring-slate-100">
                  <option>Seleccione Destino...</option>
                  {destinos.map((d, i) => <option key={i}>{d}</option>)}
                </select>
                <input placeholder="Material base" className="p-3 bg-slate-50 rounded-2xl text-sm font-bold border-none outline-none ring-1 ring-slate-100" />
                <input placeholder="Precio base ($)" className="p-3 bg-slate-50 rounded-2xl text-sm font-bold border-none outline-none ring-1 ring-slate-100" />
                <button className="md:col-span-2 bg-slate-800 text-white p-3 rounded-2xl font-bold text-xs uppercase">+ Guardar Ruta</button>
              </div>
            </div>
          </motion.div>
        )}

        {/* VISTA 3: REGISTRO DE DESTINOS */}
        {activeSubTab === 'destinos' && (
          <motion.div 
            key="destinos" initial={{ y: 10, opacity: 0 }} animate={{ y: 0, opacity: 1 }} exit={{ y: -10, opacity: 0 }}
            className="space-y-4"
          >
            <div className="bg-white p-6 rounded-3xl border border-slate-100 shadow-sm flex gap-2">
              <input 
                placeholder="Nombre del nuevo destino (Ej: Maturín)" 
                className="flex-1 p-3 bg-slate-50 rounded-2xl text-sm font-bold border-none outline-none ring-1 ring-slate-100 focus:ring-[#0033A0]/30" 
              />
              <button className="bg-[#0033A0] text-white p-3 rounded-2xl"><Plus size={20}/></button>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
              {destinos.map((d, i) => (
                <div key={i} className="bg-white p-4 rounded-2xl border border-slate-100 flex items-center gap-3 shadow-sm">
                  <div className="p-2 bg-blue-50 text-[#0033A0] rounded-lg"><MapPin size={14}/></div>
                  <span className="text-sm font-bold text-slate-700">{d}</span>
                </div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}