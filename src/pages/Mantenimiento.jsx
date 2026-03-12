import React from 'react';
import { Wrench, AlertCircle, Clock, CheckCircle2 } from 'lucide-react';

const REPARACIONES = [
  { id: 1, unidad: 'Unidad 03', falla: 'Falla en el motor / Calentamiento', prioridad: 'Crítica', fecha: '2026-03-12', estado: 'En Taller' },
  { id: 2, unidad: 'Unidad 12', falla: 'Cambio de aceite y filtros', prioridad: 'Normal', fecha: '2026-03-15', estado: 'Programado' },
  { id: 3, unidad: 'Unidad 07', falla: 'Revisión de frenos', prioridad: 'Alta', fecha: '2026-03-13', estado: 'Pendiente' },
];

export default function Mantenimiento() {
  return (
    <div className="p-8 space-y-6 animate-in fade-in duration-500">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-bold text-slate-800">Mantenimiento de Flota</h1>
          <p className="text-slate-500 text-sm">Registro de averías y servicios preventivos.</p>
        </div>
        <button className="bg-red-600 text-white px-5 py-2 rounded-xl font-bold text-sm shadow-lg hover:bg-red-700 transition-all flex items-center gap-2">
          <AlertCircle size={18} /> Reportar Falla
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {REPARACIONES.map((rep) => (
          <div key={rep.id} className="bg-white rounded-2xl p-6 shadow-sm border border-slate-100 hover:shadow-md transition-all relative overflow-hidden group">
            {/* Indicador de prioridad lateral */}
            <div className={`absolute left-0 top-0 bottom-0 w-1.5 ${
              rep.prioridad === 'Crítica' ? 'bg-red-500' : rep.prioridad === 'Alta' ? 'bg-amber-500' : 'bg-blue-500'
            }`}></div>

            <div className="flex justify-between items-start mb-4">
              <div className="flex items-center gap-2">
                <div className="p-2 bg-slate-100 rounded-lg text-slate-600">
                  <Wrench size={18} />
                </div>
                <span className="font-black text-slate-800">{rep.unidad}</span>
              </div>
              <span className={`text-[10px] font-black uppercase px-2 py-1 rounded-md ${
                rep.prioridad === 'Crítica' ? 'bg-red-100 text-red-600' : 'bg-slate-100 text-slate-600'
              }`}>
                {rep.prioridad}
              </span>
            </div>

            <h3 className="text-sm font-bold text-slate-700 mb-1">{rep.falla}</h3>
            
            <div className="flex items-center gap-4 mt-6 pt-4 border-t border-slate-50">
              <div className="flex items-center gap-1 text-xs text-slate-400 font-medium">
                <Clock size={14} />
                {rep.fecha}
              </div>
              <div className={`ml-auto flex items-center gap-1 text-xs font-bold ${
                rep.estado === 'En Taller' ? 'text-amber-600' : 'text-blue-600'
              }`}>
                <div className={`w-2 h-2 rounded-full animate-pulse ${
                  rep.estado === 'En Taller' ? 'bg-amber-500' : 'bg-blue-500'
                }`}></div>
                {rep.estado}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}