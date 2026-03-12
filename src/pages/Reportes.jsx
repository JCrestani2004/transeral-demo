import React from 'react';
import { FileText, Download, FileSpreadsheet, FileClock, ChevronRight } from 'lucide-react';

export default function Reportes() {
  
  // Tu lógica original de reportes.js adaptada a React
  const descargarReporte = () => {
    let contenido = "REPORTE DE TRANSPORTES - TRANSERAL\n\n";
    contenido += "Fecha de generación: " + new Date().toLocaleDateString() + "\n";
    contenido += "------------------------------------------\n";
    contenido += "Vehiculo,Chofer,Destino,Estado\n";
    contenido += "Camión 12,Juan Pérez,Santo Domingo,En Ruta\n";
    contenido += "Camión 5,Pedro López,Santiago,Completado\n";
    contenido += "Camión 8,Miguel Sosa,Puerto Plata,Pendiente\n";

    const archivo = new Blob([contenido], { type: "text/plain" });
    const enlace = document.createElement("a");
    enlace.href = URL.createObjectURL(archivo);
    enlace.download = `reporte_transeral_${new Date().getTime()}.txt`;
    enlace.click();
  };

  const reportesRecientes = [
    { nombre: 'Cierre Mensual - Febrero', fecha: '2026-03-01', tipo: 'PDF' },
    { nombre: 'Inventario de Repuestos Q1', fecha: '2026-03-05', tipo: 'TXT' },
    { nombre: 'Historial de Mantenimiento', fecha: '2026-03-10', tipo: 'PDF' },
  ];

  return (
    <div className="p-8 space-y-6 animate-in fade-in duration-500">
      <div>
        <h1 className="text-2xl font-bold text-slate-800">Centro de Reportes</h1>
        <p className="text-slate-500 text-sm">Genera y descarga informes detallados de la operación.</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Generar Nuevo Reporte */}
        <div className="bg-white p-8 rounded-3xl border border-slate-100 shadow-sm flex flex-col items-center text-center space-y-4">
          <div className="w-20 h-20 bg-blue-50 text-[#0033A0] rounded-full flex items-center justify-center">
            <FileText size={40} />
          </div>
          <div>
            <h3 className="text-xl font-bold text-slate-800">Reporte General Diario</h3>
            <p className="text-slate-500 text-sm max-w-xs mx-auto mt-2">
              Incluye el estado de los viajes actuales, choferes en ruta y alertas de mantenimiento.
            </p>
          </div>
          <button 
            onClick={descargarReporte}
            className="mt-4 flex items-center gap-2 bg-[#0033A0] text-white px-8 py-3 rounded-2xl font-bold hover:bg-[#00267a] transition-all shadow-lg shadow-blue-900/20 active:scale-95"
          >
            <Download size={20} />
            Descargar .TXT
          </button>
        </div>

        {/* Historial de Reportes */}
        <div className="bg-white p-6 rounded-3xl border border-slate-100 shadow-sm">
          <h3 className="font-bold text-slate-700 mb-6 flex items-center gap-2">
            <FileClock size={20} className="text-slate-400" />
            Reportes Generados Recientemente
          </h3>
          <div className="space-y-3">
            {reportesRecientes.map((rep, i) => (
              <div key={i} className="flex items-center justify-between p-4 bg-slate-50 rounded-2xl hover:bg-slate-100 transition-colors cursor-pointer group">
                <div className="flex items-center gap-4">
                  <div className="p-2 bg-white rounded-xl shadow-sm text-slate-400">
                    {rep.tipo === 'PDF' ? <FileSpreadsheet size={18} /> : <FileText size={18} />}
                  </div>
                  <div>
                    <p className="text-sm font-bold text-slate-700">{rep.nombre}</p>
                    <p className="text-[11px] text-slate-400">{rep.fecha}</p>
                  </div>
                </div>
                <ChevronRight size={18} className="text-slate-300 group-hover:text-[#0033A0] transition-colors" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}