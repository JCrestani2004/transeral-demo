import React, { useState } from 'react';
import { Lock, User, AlertCircle } from 'lucide-react';

export default function Login({ onLogin }) {
  const [user, setUser] = useState('');
  const [pass, setPass] = useState('');
  const [error, setError] = useState(false);

  const handleAuth = (e) => {
    e.preventDefault();
    if (user === 'admin' && pass === '1234') {
      onLogin(); // Llama a la función que cambia el estado en App.jsx
    } else {
      setError(true);
    }
  };

  return (
    <div className="min-h-screen bg-[#0033A0] flex items-center justify-center p-4">
      <div className="bg-white p-8 rounded-3xl shadow-2xl w-full max-w-sm animate-in zoom-in duration-300">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-black text-[#0033A0] tracking-tighter">TRANSERAL</h1>
          <p className="text-slate-400 text-sm font-medium">Panel de Gestión Operativa</p>
        </div>

        <form onSubmit={handleAuth} className="space-y-4">
          <div className="relative">
            <User className="absolute left-3 top-3 text-slate-400" size={18} />
            <input 
              type="text" 
              placeholder="Usuario" 
              className="w-full pl-10 pr-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:ring-2 focus:ring-[#0033A0]/20 outline-none"
              onChange={(e) => setUser(e.target.value)}
            />
          </div>
          <div className="relative">
            <Lock className="absolute left-3 top-3 text-slate-400" size={18} />
            <input 
              type="password" 
              placeholder="Contraseña" 
              className="w-full pl-10 pr-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:ring-2 focus:ring-[#0033A0]/20 outline-none"
              onChange={(e) => setPass(e.target.value)}
            />
          </div>
          
          {error && (
            <div className="flex items-center gap-2 text-red-500 text-xs font-bold justify-center">
              <AlertCircle size={14} /> Credenciales incorrectas
            </div>
          )}

          <button className="w-full bg-[#0033A0] text-white py-3 rounded-xl font-bold hover:bg-[#00267a] transition-all shadow-lg shadow-blue-900/20">
            Entrar al Sistema
          </button>
        </form>
      </div>
    </div>
  );
}