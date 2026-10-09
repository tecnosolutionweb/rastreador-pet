import { useEffect, useState } from 'react'

/**
 * Estado do React que é salvo automaticamente no navegador (localStorage).
 * Assim os dados continuam lá mesmo fechando e abrindo a página.
 */
export function useLocalStorage(key, initialValue) {
  const [value, setValue] = useState(() => {
    try {
      const stored = window.localStorage.getItem(key)
      return stored !== null ? JSON.parse(stored) : initialValue
    } catch {
      return initialValue
    }
  })

  useEffect(() => {
    try {
      window.localStorage.setItem(key, JSON.stringify(value))
    } catch {
      // Sem espaço ou bloqueado: ignora silenciosamente
    }
  }, [key, value])

  return [value, setValue]
}