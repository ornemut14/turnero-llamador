export default function TicketRow({ turno, mostrarPuesto, highlighted }) {
  return (
    <div className={`ticket-row${highlighted ? ' highlighted' : ''}`}>
      <span className="ticket-name">{turno.nombre}</span>
      {mostrarPuesto && turno.puesto && (
        <div className="ticket-puesto">
          <span className="puesto-num">{turno.puesto}</span>
          <span className="puesto-label">Puesto</span>
        </div>
      )}
    </div>
  )
}