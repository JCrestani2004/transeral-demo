import React from 'react';
import { Truck, Gauge, Fuel, Calendar, ShieldCheck, MapPin } from 'lucide-react';

const FLOTA_DATA = [
  { id: 1, placa: 'L452901', modelo: 'Freightliner M2', año: 2022, km: '125,400 km', combustible: 'Diesel', estado: 'Disponible' },
  { id: 2, placa: 'L883012', modelo: 'Isuzu Forward', año: 2021, km: '89,200 km', combustible: 'Diesel', estado: 'En Ruta' },
  { id: 3, placa: 'L102933', modelo: 'Hino 500', año: 2023, km: '45,000 km', combustible: 'Diesel', estado: 'Mantenimiento' },
  { id: 4, placa: 'L772019', modelo: 'Mack Granite', año: 2020, km: '210,150 km', combustible: 'Diesel', estado: 'Disponible' },
];

export default function Vehiculos() {
  return (
    <div className="p-8 space-y-6 animate-in fade-in duration-500">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-bold text-slate-800">Control de Flota</h1>
          <p className="text-slate-500 text-sm">Estado técnico y operativo de las unidades.</p>
        </div>
        <button className="bg-[#0033A0] text-white px-5 py-2.5 rounded-xl font-bold text-sm shadow-lg hover:bg-[#00267a] transition-all">
          + Registrar Vehículo
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {FLOTA_DATA.map((v) => (
          <div key={v.id} className="bg-white rounded-3xl border border-slate-100 shadow-sm overflow-hidden flex flex-col sm:flex-row hover:shadow-md transition-all">
            {/* Parte Visual del Camión */}
            <div className={`sm:w-40 flex flex-col items-center justify-center p-6 ${
              v.estado === 'En Ruta' ? 'bg-blue-50 text-blue-600' : 
              v.estado === 'Mantenimiento' ? 'bg-red-50 text-red-600' : 'bg-green-50 text-green-600'
            }`}>
              <Truck size={48} strokeWidth={1.5} />
              <span className="mt-2 text-[10px] font-black uppercase tracking-tighter">{v.estado}</span>
            </div>

            {/* Información Detallada */}
            <div className="flex-1 p-6 space-y-4">
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="font-black text-slate-800 text-lg">{v.modelo}</h3>
                  <p className="text-xs text-slate-400 font-bold tracking-widest uppercase">PLACA: {v.placa}</p>
                </div>
                <div className="flex items-center gap-1 bg-slate-100 px-2 py-1 rounded-lg text-slate-600">
                  <Calendar size={14} />
                  <span className="text-xs font-bold">{v.año}</span>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="flex items-center gap-2 text-slate-500">
                  <Gauge size={16} className="text-slate-400" />
                  <span className="text-sm font-medium">{v.km}</span>
                </div>
                <div className="flex items-center gap-2 text-slate-500">
                  <Fuel size={16} className="text-slate-400" />
                  <span className="text-sm font-medium">{v.combustible}</span>
                </div>
                <div className="flex items-center gap-2 text-slate-500">
                  <ShieldCheck size={16} className="text-slate-400" />
                  <span className="text-sm font-medium text-green-600">Seguro Al Día</span>
                </div>
                <div className="flex items-center gap-2 text-slate-500">
                  <MapPin size={16} className="text-slate-400" />
                  <span className="text-sm font-medium">Sede Principal</span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}