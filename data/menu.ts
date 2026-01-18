// data/menu.ts
export interface Burger {
  id: number;
  nombre: string;
  precio: string;
  descripcion: string;
  imagen: string;
  categoria: 'burgers' | 'entrantes' | 'bebidas';
}

export const MENU_DATA: Burger[] = [
  {
    id: 1,
    nombre: "D1 Especial",
    precio: "12.50€",
    descripcion: "Doble smash burger con queso cheddar y salsa secreta.",
    imagen: "/hamburguesa1.webp",
    categoria: 'burgers'
  },
  {
    id: 2,
    nombre: "Nachos Distrito",
    precio: "8.90€",
    descripcion: "Nachos caseros con guacamole y carne picada.",
    imagen: "/hamburguesa1.webp",
    categoria: 'entrantes'
  },
  // Añade aquí todas las que quieras...
];