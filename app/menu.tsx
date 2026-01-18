// components/Menu.tsx
"use client"
import CardMenu from "./components/cardMenu"
import { MENU_DATA } from "../data/menu"
import { useState } from "react"


export default function Menu() {
  // 1. Definimos el estado. 'burgers' es el valor inicial.
  const [categoriaActiva, setCategoriaActiva] = useState('burgers');

  // 2. Filtramos la base de datos según el estado
  const productosFiltrados = MENU_DATA.filter(item => item.categoria === categoriaActiva);

  return (
    <section className="relative min-h-screen bg-[#0a0a0a] text-white py-20">
      {/* Decoración: Tomate o Chile flotando (Opcional) */}
      <div className="absolute top-20 right-10 opacity-20 animate-bounce pointer-events-none">
          <img src="./tomate.png" alt="decor" className="w-24" />
      </div>

      <div className="max-w-7xl mx-auto px-6">
        {/* Título */}
        <div className="mb-16">
          <h2 className="text-red-500 font-bold uppercase tracking-tighter mb-2">Carta Selecta</h2>
          <h1 className="text-7xl font-serif font-black">MENU</h1>
        </div>

        {/* Categorías (Scrollable en móvil) */}
        <div className="flex gap-4 overflow-x-auto pb-10 no-scrollbar items-center">
          <button 
            onClick={() => setCategoriaActiva('entrantes')}
            className={`px-8 py-2 rounded-full font-bold transition-all whitespace-nowrap ${
              categoriaActiva === 'entrantes' 
                ? "bg-red-600 text-white shadow-[0_0_20px_rgba(220,38,38,0.5)] scale-110" 
                : "bg-white/5 text-white/60 hover:bg-white/10 border border-white/5"
            }`}
          >
            Starters
          </button>
          <button 
            onClick={() => setCategoriaActiva('burgers')}
            className={`px-8 py-2 rounded-full font-bold transition-all whitespace-nowrap ${
              categoriaActiva === 'burgers' 
                ? "bg-red-600 text-white shadow-[0_0_20px_rgba(220,38,38,0.5)] scale-110" 
                : "bg-white/5 text-white/60 hover:bg-white/10 border border-white/5"
            }`}
          >
            Burgers
          </button>
          <button 
            onClick={() => setCategoriaActiva('ensaladas')}
            className={`px-8 py-2 rounded-full font-bold transition-all whitespace-nowrap ${
              categoriaActiva === 'ensaladas' 
                ? "bg-red-600 text-white shadow-[0_0_20px_rgba(220,38,38,0.5)] scale-110" 
                : "bg-white/5 text-white/60 hover:bg-white/10 border border-white/5"
            }`}
          >
            Salads
          </button>
          <button 
            onClick={() => setCategoriaActiva('bebidas')}
            className={`px-8 py-2 rounded-full font-bold transition-all whitespace-nowrap ${
              categoriaActiva === 'bebidas' 
                ? "bg-red-600 text-white shadow-[0_0_20px_rgba(220,38,38,0.5)] scale-110" 
                : "bg-white/5 text-white/60 hover:bg-white/10 border border-white/5"
            }`}
          >
            Drinks
          </button>
          <button 
            onClick={() => setCategoriaActiva('postres')}
            className={`px-8 py-2 rounded-full font-bold transition-all whitespace-nowrap ${
              categoriaActiva === 'postres' 
                ? "bg-red-600 text-white shadow-[0_0_20px_rgba(220,38,38,0.5)] scale-110" 
                : "bg-white/5 text-white/60 hover:bg-white/10 border border-white/5"
            }`}
          >
            Desserts
          </button>
        </div>

        {/* Grid de Productos */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {productosFiltrados.map((producto) => (
            <CardMenu 
              key={producto.id}
              nombre={producto.nombre}
              precio={producto.precio}
              descripcion={producto.descripcion}
              imagen={producto.imagen}
            />
          ))}
        </div>

        {/* Botón Ver Más */}
        <div className="mt-16 text-center">
          <button className="border border-white/20 px-10 py-3 rounded-full hover:bg-white hover:text-black transition-all font-bold">
            VER CARTA COMPLETA
          </button>
        </div>
      </div>
    </section>
  )
}