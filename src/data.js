import baseImg from '../base.jpg'
import sephoraImg from '../SEPHORA.jpg'

export const products = [
  { id: 1, name: 'Base Natural Finish', category: 'Rostro', price: 29.99, oldPrice: 36, image: baseImg, badge: 'Más vendido', description: 'Cobertura modulable y acabado luminoso hasta por 24 horas.', rating: 4.9 },
  { id: 2, name: 'Corrector Soft Focus', category: 'Rostro', price: 19.99, image: sephoraImg, badge: 'Nuevo', description: 'Corrige e ilumina sin marcar líneas de expresión.', rating: 4.7 },
  { id: 3, name: 'Labial Velvet Rose', category: 'Labios', price: 14.99, image: sephoraImg, badge: 'Favorito', description: 'Color intenso, textura aterciopelada y larga duración.', rating: 4.8 },
  { id: 4, name: 'Paleta Golden Hour', category: 'Ojos', price: 24.99, image: sephoraImg, badge: 'Edición limitada', description: 'Nueve tonos mates y brillantes de alta pigmentación.', rating: 4.9 },
  { id: 5, name: 'Rubor Peach Bloom', category: 'Rostro', price: 18.5, image: baseImg, badge: 'Tendencia', description: 'Rubor sedoso con un acabado natural y fresco.', rating: 4.6 },
  { id: 6, name: 'Máscara Infinite Lash', category: 'Ojos', price: 17.99, image: sephoraImg, badge: 'Nuevo', description: 'Define, alarga y eleva cada pestaña sin grumos.', rating: 4.7 },
]
export const money = (value) => `$${value.toFixed(2)}`
