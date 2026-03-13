import React, { useState } from 'react';
import Sidebar from './components/Sidebar';
import Login from './pages/Login';
import DashboardHome from './pages/DashboardHome';
import Viajes from './pages/Viajes';
import Inventario from './pages/Inventario';
import Mantenimiento from './pages/Mantenimiento';
import Choferes from './pages/Choferes';
import Reportes from './pages/Reportes';
import Vehiculos from './pages/Vehiculos';
import Materiales from './pages/Materiales';

function App() {
  const [isAuth, setIsAuth] = useState(false);
  const [activeTab, setActiveTab] = useState('dashboard');

  // Si no está autenticado, mostramos la pantalla de Login
  if (!isAuth) {
    return <Login onLogin={() => setIsAuth(true)} />;
  }

  // Renderizado dinámico de las páginas
  const renderContent = () => {
    switch (activeTab) {
      case 'dashboard': return <DashboardHome />;
      case 'viajes': return <Viajes />;
      case 'choferes': return <Choferes />;
      case 'vehiculos': return <Vehiculos />;
      case 'inventario': return <Inventario />;
      case 'mantenimiento': return <Mantenimiento />;
      case 'reportes': return <Reportes />;
      case 'materiales': return <Materiales />;
      default: return <DashboardHome />;
    }
  };

  return (
    <div className="flex min-h-screen bg-slate-50">
      {/* Menú Lateral */}
      <Sidebar activeTab={activeTab} setActiveTab={setActiveTab} onLogout={() => setIsAuth(false)} />
      
      {/* Contenido Principal */}
      <main className="flex-1 flex flex-col overflow-hidden">
        {/* Encabezado */}
        <header className="h-16 bg-white border-b border-slate-100 flex items-center justify-between px-8 shadow-sm">
          <span className="text-slate-500 font-medium text-sm">
            Panel Transeral / <span className="text-slate-900 font-bold capitalize">{activeTab}</span>
          </span>
          <div className="flex items-center gap-3">
            <div className="text-right hidden sm:block">
              <p className="text-sm font-bold leading-none">Admin</p>
              <p className="text-[10px] text-slate-400 uppercase tracking-wider">Sesión Activa</p>
            </div>
            <div className="w-10 h-10 bg-[#0033A0] text-white rounded-full flex items-center justify-center font-bold">AD</div>
          </div>
        </header>

        {/* Área de Contenido */}
        <section className="flex-1 overflow-y-auto">
          {renderContent()}
        </section>
      </main>
    </div>
  );
}

export default App;