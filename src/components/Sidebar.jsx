import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  LayoutDashboard, Route, UserRound, Truck, 
  Wrench, FileText, Box, LogOut, Package, Menu, X, ShieldAlert
} from 'lucide-react';

const menuItems = [
  { id: 'dashboard', label: 'Dashboard', icon: LayoutDashboard },
  { id: 'viajes', label: 'Viajes', icon: Route },
  { id: 'materiales', label: 'Materiales', icon: Package },
  { id: 'choferes', label: 'Choferes', icon: UserRound },
  { id: 'vehiculos', label: 'Vehículos', icon: Truck },
  { id: 'inventario', label: 'Inventario', icon: Box },
  { id: 'accidentes', label: 'Accidentes', icon: ShieldAlert },
  { id: 'mantenimiento', label: 'Mantenimiento', icon: Wrench },
  { id: 'reportes', label: 'Reportes', icon: FileText },
];

export default function Sidebar({ activeTab, setActiveTab, onLogout }) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  const NavContent = () => (
    <div className="flex flex-col h-full py-6">
      <div className="px-6 mb-8">
        <h1 className="text-2xl font-black tracking-tighter text-white">TRANSERAL</h1>
        <p className="text-[10px] text-white/40 font-bold uppercase tracking-widest">Logística Venezuela</p>
      </div>

      <nav className="flex-1 px-3 space-y-1">
        {menuItems.map((item) => (
          <button
            key={item.id}
            onClick={() => { setActiveTab(item.id); setIsOpen(false); }}
            className={`w-full flex items-center gap-3 px-4 py-3 rounded-2xl transition-all duration-300 ${
              activeTab === item.id 
              ? 'bg-white text-[#0033A0] shadow-lg shadow-black/20 font-bold scale-[1.02]' 
              : 'text-white/60 hover:bg-white/10 hover:text-white'
            }`}
          >
            <item.icon size={20} />
            <span className="text-sm">{item.label}</span>
          </button>
        ))}
      </nav>

      <div className="px-3 mt-auto pt-4 border-t border-white/10">
        <button onClick={onLogout} className="w-full flex items-center gap-3 px-4 py-3 text-white/40 hover:text-red-400 hover:bg-red-400/10 rounded-2xl transition-all">
          <LogOut size={20} />
          <span className="text-sm font-bold">Salir</span>
        </button>
      </div>
    </div>
  );

  return (
    <>
      {/* Botón flotante para Móvil */}
      <div className="lg:hidden fixed top-4 left-4 z-50">
        <button onClick={toggleMenu} className="p-3 bg-[#0033A0] text-white rounded-2xl shadow-xl">
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Sidebar para Escritorio (Fijo) */}
      <aside className="hidden lg:flex flex-col w-72 bg-[#0033A0] min-h-screen sticky top-0 shadow-2xl shadow-blue-900/40">
        <NavContent />
      </aside>

      {/* Sidebar para Móvil (Overlay) */}
      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div 
              initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
              onClick={toggleMenu}
              className="fixed inset-0 bg-slate-900/60 backdrop-blur-sm z-40 lg:hidden"
            />
            <motion.aside 
              initial={{ x: '-100%' }} animate={{ x: 0 }} exit={{ x: '-100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="fixed top-0 left-0 bottom-0 w-72 bg-[#0033A0] z-50 lg:hidden shadow-2xl"
            >
              <NavContent />
            </motion.aside>
          </>
        )}
      </AnimatePresence>
    </>
  );
}