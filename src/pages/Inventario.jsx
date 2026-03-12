import React, { useState, useEffect } from 'react';
import { Box, Plus, Trash2, Package } from 'lucide-react';

export default function Inventario() {
  const [materiales, setMateriales] = useState(() => {
    const guardado = localStorage.getItem('inventario_transeral');
    return guardado ? JSON.parse(guardado) : ['Llantas R22', 'Aceite Motor 15W40', 'Filtros de Aire'];
  });
  const [nuevoMaterial, setNuevoMaterial] = useState('');

  useEffect(() => {
    localStorage.setItem('inventario_transeral', JSON.stringify(materiales));
  }, [materiales]);

  const agregarMaterial = (e) => {
    e.preventDefault();
    if (!nuevoMaterial.trim()) return;
    setMateriales([...materiales, nuevoMaterial]);
    setNuevoMaterial('');
  };

  const eliminarMaterial = (index) => {
    setMateriales(materiales.filter((_, i) => i !== index));
  };

  return (
    <div className="p-8 space-y-6 animate-in fade-in duration-500">
      <div>
        <h1 className="text-2xl font-bold text-slate-800">Inventario de Repuestos</h1>
        <p className="text-slate-500 text-sm">Gestión de insumos para la flota.</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Formulario de Entrada */}
        <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 h-fit">
          <h3 className="font-bold text-slate-700 mb-4 flex items-center gap-2">
            <Plus size={18} className="text-[#0033A0]" />
            Registrar Insumo
          </h3>
          <form onSubmit={agregarMaterial} className="space-y-4">
            <input 
              type="text" 
              value={nuevoMaterial}
              onChange={(e) => setNuevoMaterial(e.target.value)}
              placeholder="Nombre del material..."
              className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-[#0033A0]/20"
            />
            <button className="w-full py-2.5 bg-[#0033A0] text-white rounded-xl font-bold text-sm hover:bg-[#00267a] transition-all">
              Añadir al Stock
            </button>
          </form>
        </div>

        {/* Lista de Materiales */}
        <div className="lg:col-span-2 space-y-3">
          {materiales.length === 0 ? (
            <div className="text-center py-12 bg-white rounded-2xl border-2 border-dashed border-slate-200">
              <Package className="mx-auto text-slate-300 mb-2" size={40} />
              <p className="text-slate-400 font-medium">No hay materiales registrados</p>
            </div>
          ) : (
            materiales.map((mat, index) => (
              <div key={index} className="bg-white p-4 rounded-xl shadow-sm border border-slate-100 flex items-center justify-between group hover:border-[#0033A0]/30 transition-all">
                <div className="flex items-center gap-4">
                  <div className="p-2 bg-blue-50 text-[#0033A0] rounded-lg">
                    <Box size={20} />
                  </div>
                  <span className="font-semibold text-slate-700">{mat}</span>
                </div>
                <button 
                  onClick={() => eliminarMaterial(index)}
                  className="p-2 text-slate-300 hover:text-red-500 hover:bg-red-50 rounded-lg transition-all"
                >
                  <Trash2 size={18} />
                </button>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
}