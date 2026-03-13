import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ShieldCheck, FileUp, Calendar, Hash, Zap, AlertCircle } from 'lucide-react';

export default function Choferes() {
  const [scanning, setScanning] = useState(false);

  const simulateScan = () => {
    setScanning(true);
    setTimeout(() => setScanning(false), 2000);
  };

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="p-4 md:p-8 space-y-6">
      <header>
        <h1 className="text-2xl font-black text-slate-800">Documentación de Personal</h1>
        <p className="text-slate-500 text-sm">Control de seriales, QYZ y vencimientos legales.</p>
      </header>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Formulario de Registro Técnico */}
        <div className="lg:col-span-2 bg-white p-6 rounded-3xl border border-slate-100 shadow-sm space-y-6">
          <h3 className="font-bold text-slate-700 flex items-center gap-2">
            <ShieldCheck className="text-[#0033A0]" /> Datos de Seguridad
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-1">
              <label className="text-[10px] font-black text-slate-400 uppercase">Número de Serie</label>
              <div className="relative">
                <Hash className="absolute left-3 top-3 text-slate-300" size={16} />
                <input type="text" placeholder="SER-9920-X" className="w-full pl-10 p-3 bg-slate-50 rounded-xl border-none text-sm font-bold focus:ring-2 focus:ring-[#0033A0]/20" />
              </div>
            </div>

            <div className="space-y-1">
              <label className="text-[10px] font-black text-slate-400 uppercase">Código QYZ de Operación</label>
              <div className="relative">
                <Zap className="absolute left-3 top-3 text-amber-400" size={16} />
                <input type="text" placeholder="QYZ-882" className="w-full pl-10 p-3 bg-slate-50 rounded-xl border-none text-sm font-bold focus:ring-2 focus:ring-[#0033A0]/20" />
              </div>
            </div>

            <div className="space-y-1">
              <label className="text-[10px] font-black text-slate-400 uppercase">Fecha de Vencimiento</label>
              <div className="relative">
                <Calendar className="absolute left-3 top-3 text-slate-300" size={16} />
                <input type="date" className="w-full pl-10 p-3 bg-slate-50 rounded-xl border-none text-sm font-bold focus:ring-2 focus:ring-[#0033A0]/20" />
              </div>
            </div>

            <div className="space-y-1">
              <label className="text-[10px] font-black text-slate-400 uppercase">Adjuntar PDF (Opcional)</label>
              <label className="flex items-center justify-center gap-2 w-full p-3 bg-blue-50 border-2 border-dashed border-blue-200 rounded-xl cursor-pointer hover:bg-blue-100 transition-all">
                <FileUp size={18} className="text-[#0033A0]" />
                <span className="text-xs font-bold text-[#0033A0]">Subir Archivo</span>
                <input type="file" className="hidden" onChange={simulateScan} />
              </label>
            </div>
          </div>

          <AnimatePresence>
            {scanning && (
              <motion.div 
                initial={{ height: 0, opacity: 0 }} 
                animate={{ height: 'auto', opacity: 1 }} 
                exit={{ height: 0, opacity: 0 }}
                className="bg-slate-900 rounded-2xl p-4 overflow-hidden"
              >
                <div className="flex items-center gap-3 text-blue-400 mb-2">
                  <div className="w-2 h-2 bg-blue-400 rounded-full animate-ping" />
                  <span className="text-[10px] font-black uppercase tracking-widest">Escaneando metadatos PDF...</span>
                </div>
                <div className="h-1 bg-slate-800 rounded-full overflow-hidden">
                  <motion.div 
                    initial={{ width: 0 }} 
                    animate={{ width: '100%' }} 
                    transition={{ duration: 2 }}
                    className="h-full bg-blue-400" 
                  />
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Alertas de Vencimiento */}
        <div className="bg-red-50 p-6 rounded-3xl border border-red-100 space-y-4">
          <h4 className="text-red-600 font-black text-xs uppercase flex items-center gap-2">
            <AlertCircle size={16} /> Alertas Críticas
          </h4>
          <div className="bg-white p-4 rounded-2xl shadow-sm border-l-4 border-red-500">
            <p className="text-xs font-black text-slate-800">Licencia de Carga QYZ</p>
            <p className="text-[10px] text-red-500 font-bold">Vence en 3 días (Juan Pérez)</p>
          </div>
        </div>
      </div>
    </motion.div>
  );
}