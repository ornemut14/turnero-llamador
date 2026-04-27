import TicketRow from './TicketRow'

export default function PanelTurnos({ titulo, turnos, mostrarPuesto }) {
  return (
    <div className="panel-card">
      <div className="panel-title-bar">
        <h2>{titulo}</h2>
      </div>
      <div className="ticket-list">
        {turnos.map((t, i) => (
          <TicketRow
            key={t.id}
            turno={t}
            mostrarPuesto={mostrarPuesto}
            highlighted={i === 0}
          />
        ))}
      </div>
    </div>
  )
}