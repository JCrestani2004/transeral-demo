import React from 'react';
import { Search, Filter, MoreVertical, MapPin, Calendar, Truck, ExternalLink } from 'lucide-react';

const VIAJES_DATA = [
  { id: 1, vehiculo: 'Camión 12', chofer: 'Juan Pérez', destino: 'Valle de la Pascua', fecha: '2026-03-12', estado: 'En Ruta' },
  { id: 2, vehiculo: 'Camión 05', chofer: 'Pedro López', destino: 'Barinas', fecha: '2026-03-11', estado: 'Completado' },
  { id: 3, vehiculo: 'Camión 08', chofer: 'Miguel Sosa', destino: 'San Juan de los Morros', fecha: '2026-03-12', estado: 'Pendiente' },
  { id: 4, vehiculo: 'Camión 02', chofer: 'Ricardo Gomez', destino: 'Caracas', fecha: '2026-03-10', estado: 'Completado' },
];

export default function Viajes() {
  const getStatusStyle = (estado) => {
    switch (estado) {
      case 'En Ruta': return 'bg-blue-100 text-blue-700 border-blue-200';
      case 'Completado': return 'bg-green-100 text-green-700 border-green-200';
      case 'Pendiente': return 'bg-amber-100 text-amber-700 border-amber-200';
      default: return 'bg-slate-100 text-slate-700';
    }
  };

  return (
    <div className="p-8 space-y-6 animate-in fade-in duration-500">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-slate-800">Control de Viajes - Transeral</h1>
          <p className="text-slate-500 text-sm">Monitoreo de rutas y entregas en territorio nacional.</p>
        </div>
        <button className="bg-[#0033A0] text-white px-6 py-2.5 rounded-xl font-bold text-sm shadow-lg hover:bg-[#00267a] transition-all">
          + Nuevo Viaje
        </button>
      </div>

      {/* Tabla Estilizada */}
      <div className="bg-white rounded-2xl shadow-sm border border-slate-100 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-slate-50 border-b border-slate-100">
                <th className="px-6 py-4 text-xs font-bold text-slate-400 uppercase tracking-wider">Vehículo</th>
                <th className="px-6 py-4 text-xs font-bold text-slate-400 uppercase tracking-wider">Chofer</th>
                <th className="px-6 py-4 text-xs font-bold text-slate-400 uppercase tracking-wider">Ruta (Origen a Destino)</th>
                <th className="px-6 py-4 text-xs font-bold text-slate-400 uppercase tracking-wider">Estado</th>
                <th className="px-6 py-4 text-xs font-bold text-slate-400 uppercase tracking-wider text-right">Acción</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {VIAJES_DATA.map((viaje) => (
                <tr key={viaje.id} className="hover:bg-slate-50/50 transition-colors">
                  <td className="px-6 py-4 font-bold text-slate-700 flex items-center gap-3">
                    <Truck size={16} className="text-[#0033A0]" />
                    {viaje.vehiculo}
                  </td>
                  <td className="px-6 py-4 text-sm text-slate-600 font-medium">{viaje.chofer}</td>
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-2 text-sm text-slate-600">
                      <MapPin size={14} className="text-slate-400" />
                      <span>Sede Principal ➔ {viaje.destino}</span>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <span className={`px-3 py-1 rounded-full text-[11px] font-bold border ${getStatusStyle(viaje.estado)}`}>
                      {viaje.estado}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-right">
                    <a 
                      href={`https://www.google.com/maps/dir/?api=1&destination=${viaje.destino},+Venezuela`} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-[#0033A0] font-bold text-xs hover:underline"
                    >
                      Maps <ExternalLink size={12} />
                    </a>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}