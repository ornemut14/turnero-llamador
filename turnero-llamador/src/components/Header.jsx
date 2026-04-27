import { useState, useEffect } from 'react'

export default function Header() {
  const [hora, setHora] = useState('')

  useEffect(() => {
    const tick = () => {
      const now = new Date()
      const h = String(now.getHours()).padStart(2, '0')
      const m = String(now.getMinutes()).padStart(2, '0')
      const s = String(now.getSeconds()).padStart(2, '0')
      setHora(`${h}:${m}:${s}`)
    }
    tick()
    const id = setInterval(tick, 1000)
    return () => clearInterval(id)
  }, [])

  return (
    <header className="header">
      <div className="header-left">
        <div className="header-logo-circle">
          <svg width="26" height="26" viewBox="0 0 26 26" fill="none">
            <circle cx="13" cy="13" r="12" fill="white" opacity="0.9"/>
            <path d="M13 4 L20 10 L20 18 L13 22 L6 18 L6 10 Z" fill="#E86B1A" opacity="0.85"/>
            <circle cx="13" cy="13" r="4" fill="white"/>
          </svg>
        </div>
        <div className="header-org">
          <span className="org-main">San Juan</span>
          <span className="org-sub">Gobierno</span>
        </div>
      </div>

      <div className="header-center">
        <span className="header-sistema">Sistema de Atención al Ciudadano</span>
      </div>

      <div className="header-right">
        <div className="ciudadano-badge">
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#E86B1A" strokeWidth="1.8" strokeLinecap="round">
            <path d="M12 3C7 3 3 7 3 12"/>
            <path d="M12 3c5 0 9 4 9 9"/>
            <path d="M6 17c.9 1.8 2.7 3 5 3 3.3 0 6-2.7 6-6V12c0-1.4-.5-2.7-1.3-3.7"/>
            <path d="M8.5 9A3.5 3.5 0 0 1 12 7"/>
            <path d="M12 7a3.5 3.5 0 0 1 3.5 3.5V13"/>
            <path d="M9 12v2c0 1.7 1.3 3 3 3"/>
          </svg>
          <div className="badge-text">
            <span>Ciudadano</span>
            <span>Digital SJ</span>
          </div>
        </div>
        <div className="header-clock">{hora}</div>
      </div>
    </header>
  )
}