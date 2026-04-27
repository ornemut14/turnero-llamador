import Header from './components/Header'
import PanelTurnos from './components/PanelTurnos'
import CidiMascot from './components/CidiMascot'
import { useTurnos } from './hooks/useTurnos'

export default function App() {
  const { proximos, atendidos } = useTurnos()

  return (
    <div className="screen">
      <Header />
      <main className="content">
        <div className="panel-wrapper">
          <PanelTurnos
            titulo="Próximos Turnos"
            turnos={proximos}
            mostrarPuesto={false}
          />
        </div>
        <div className="panel-wrapper">
          <PanelTurnos
            titulo="Turnos Atendidos"
            turnos={atendidos}
            mostrarPuesto={true}
          />
        </div>
        <div className="mascot-area">
          <CidiMascot />
        </div>
      </main>
      <div className="online-indicator">
        <div className="online-dot" />
        <span>En línea</span>
      </div>
    </div>
  )
}