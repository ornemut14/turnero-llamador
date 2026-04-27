import { useState, useEffect } from 'react'

const NOMBRES = [
  'ARIZA GALLARDO, ISABEL JAZMÍN',
  'TURCHETTI, ALFREDO EDUARDO',
  'OLAVARRÍA, INDALECIO EDGARDO',
  'OLIVERA, ARIEL SERGIO',
  'GARCÍA GUZMÁN, LUZMILA DEL CARMEN',
  'PIÑONES, CAMILA',
  'GALLARDO LEIVA, MARÍA CANDELARIA',
  'ZALAZAR, MARÍA MABEL',
  'OVIEDO, ROBERTO CARLOS',
  'LÓPEZ SISTERNA, ROSA',
  'MIRALLES, PABLO ANDRÉS',
  'HERRERA, DIANA BEATRIZ',
]

let counter = 0
function genId() { return ++counter }
function randNombre() { return NOMBRES[Math.floor(Math.random() * NOMBRES.length)] }
function randPuesto() { return Math.floor(Math.random() * 8) + 1 }

function buildProximos(n = 6) {
  return Array.from({ length: n }, () => ({
    id: genId(),
    nombre: randNombre(),
  }))
}

function buildAtendidos(n = 6) {
  return Array.from({ length: n }, () => ({
    id: genId(),
    nombre: randNombre(),
    puesto: randPuesto(),
  }))
}

export function useTurnos(intervaloMs = 4000) {
  const [proximos, setProximos] = useState(() => buildProximos())
  const [atendidos, setAtendidos] = useState(() => buildAtendidos())

  useEffect(() => {
    const id = setInterval(() => {
      setProximos(prev => {
        const siguiente = { id: genId(), nombre: randNombre() }
        return [siguiente, ...prev.slice(0, 5)]
      })
      setAtendidos(prev => {
        const nuevo = { id: genId(), nombre: randNombre(), puesto: randPuesto() }
        return [nuevo, ...prev.slice(0, 5)]
      })
    }, intervaloMs)
    return () => clearInterval(id)
  }, [intervaloMs])

  return { proximos, atendidos }
}