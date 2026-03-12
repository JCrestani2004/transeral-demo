import React from 'react';
import { UserRound, Phone, IdCard, Calendar, Mail, MoreHorizontal } from 'lucide-react';

const CHOFERES_DATA = [
  { id: 1, nombre: 'Juan Pérez', cedula: '001-0000000-1', telefono: '809-555-0123', status: 'Activo', inicio: '2023-05-10' },
  { id: 2, nombre: 'Pedro López', cedula: '001-0000000-2', telefono: '829-555-0199', status: 'En Viaje', inicio: '2024-01-15' },
  { id: 3, nombre: 'Miguel Sosa', cedula: '001-0000000-3', telefono: '849-555-0155', status: 'Descanso', inicio: '2022-11-20' },
];

export default function Choferes() {
  return (
    <div className="p-8 space-y-6 animate-in fade-in duration-500">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-bold text-slate-800">Gestión de Personal</h1>
          <p className="text-slate-500 text-sm">Registro y control de choferes autorizados.</p>
        </div>
        <button className="bg-[#0033A0] text-white px-5 py-2.5 rounded-xl font-bold text-sm shadow-lg hover:bg-[#00267a] transition-all">
          + Agregar Chofer
        </button>
      </div>

      <div className="grid grid-cols-1 xl:grid-cols-2 gap-4">
        {CHOFERES_DATA.map((chofer) => (
          <div key={chofer.id} className="bg-white p-5 rounded-2xl shadow-sm border border-slate-100 flex items-center gap-6 hover:shadow-md transition-all group">
            {/* Avatar con iniciales */}
            <div className="w-16 h-16 bg-blue-50 rounded-2xl flex items-center justify-center text-[#0033A0] shrink-0 group-hover:bg-[#0033A0] group-hover:text-white transition-colors">
              <UserRound size={32} />
            </div>

            {/* Información Principal */}
            <div className="flex-1 grid grid-cols-2 gap-y-2">
              <div className="col-span-2 flex justify-between">
                <h3 className="font-black text-slate-800 text-lg">{chofer.nombre}</h3>
                <span className={`px-2 py-0.5 rounded-md text-[10px] font-black uppercase h-fit ${
                  chofer.status === 'En Viaje' ? 'bg-blue-100 text-blue-600' : 'bg-green-100 text-green-600'
                }`}>
                  {chofer.status}
                </span>
              </div>
              
              <div className="flex items-center gap-2 text-xs text-slate-500 font-medium">
                <IdCard size={14} className="text-slate-400" />
                {chofer.cedula}
              </div>
              <div className="flex items-center gap-2 text-xs text-slate-500 font-medium">
                <Phone size={14} className="text-slate-400" />
                {chofer.telefono}
              </div>
              <div className="flex items-center gap-2 text-xs text-slate-500 font-medium">
                <Calendar size={14} className="text-slate-400" />
                Ingreso: {chofer.inicio}
              </div>
            </div>

            <button className="p-2 text-slate-300 hover:text-slate-600 rounded-lg">
              <MoreHorizontal size={20} />
            </button>
          </div>
        ))}
      </div>

      {/* Mini Formulario de Acción Rápida (Como el que tenías en index.html) */}
      <div className="mt-8 bg-slate-100/50 p-6 rounded-3xl border-2 border-dashed border-slate-200">
        <h3 className="text-sm font-bold text-slate-400 uppercase tracking-widest text-center mb-4">Registro Rápido de Documentación</h3>
        <div className="flex gap-4 max-w-2xl mx-auto">
          <input type="text" placeholder="Nombre completo" className="flex-1 px-4 py-2 rounded-xl border-none text-sm shadow-sm" />
          <input type="file" className="text-xs file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-xs file:font-semibold file:bg-blue-50 file:text-[#0033A0] hover:file:bg-blue-100" />
          <button className="bg-slate-800 text-white px-4 py-2 rounded-xl text-xs font-bold hover:bg-black transition-colors">Subir</button>
        </div>
      </div>
    </div>
  );
}