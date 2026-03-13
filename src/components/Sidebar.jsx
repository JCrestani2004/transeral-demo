import React from 'react';
import { 
  LayoutDashboard, 
  Route, 
  UserRound, // Cambiado de UserTie a UserRound
  Truck, 
  Wrench, 
  FileText, 
  Box, 
  LogOut,
  Package 
} from 'lucide-react';

const menuItems = [
  { id: 'dashboard', label: 'Dashboard', icon: LayoutDashboard },
  { id: 'viajes', label: 'Viajes', icon: Route },
  { id: 'materiales', label: 'Materiales', icon: Package },
  { id: 'choferes', label: 'Choferes', icon: UserRound }, // Cambiado aquí también
  { id: 'vehiculos', label: 'Vehículos', icon: Truck },
  { id: 'inventario', label: 'Inventario', icon: Box },
  { id: 'mantenimiento', label: 'Mantenimiento', icon: Wrench },
  { id: 'reportes', label: 'Reportes', icon: FileText },
];

export default function Sidebar({ activeTab, setActiveTab, onLogout }) {
  return (
    <aside className="w-64 bg-[#0033A0] text-white flex flex-col h-screen sticky top-0 shadow-xl">
      <div className="p-8">
        <h1 className="text-2xl font-black tracking-tighter text-[#FFD700]">TRANSERAL</h1>
        <p className="text-[10px] uppercase tracking-widest opacity-60 font-bold">Logística & Control</p>
      </div>
      
      <nav className="flex-1 px-4 space-y-1">
        {menuItems.map((item) => (
          <button
            key={item.id}
            onClick={() => setActiveTab(item.id)}
            className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-200 ${
              activeTab === item.id 
                ? 'bg-[#FFD700] text-[#0033A0] font-bold shadow-lg' 
                : 'hover:bg-white/10 text-white/80 hover:text-white'
            }`}
          >
            <item.icon size={20} strokeWidth={activeTab === item.id ? 2.5 : 2} />
            <span className="text-sm">{item.label}</span>
          </button>
        ))}
      </nav>

      <div className="p-4 border-t border-white/10">
        <button className="flex items-center gap-3 px-4 py-3 w-full hover:bg-red-500/20 hover:text-red-400 rounded-xl transition-colors text-white/60"
        onClick={onLogout}
        >
          <LogOut size={20} />
          <span className="text-sm font-medium">Cerrar Sesión</span>
        </button>
      </div>
    </aside>
  );
}