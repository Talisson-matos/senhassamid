import { AccessItem } from './data'

interface AccessCardProps {
  item: AccessItem
  onCopy: (texto: string, label: string) => void
}

export default function AccessCard({ item, onCopy }: AccessCardProps) {
  const abrirSite = () => {
    if (!item.url || item.url === '#') return
    window.open(item.url, '_blank', 'noopener,noreferrer')
  }

  return (
    <div className="card">
      <button className="card__main-btn" onClick={abrirSite} title={item.url}>
        <span className="card__icon">🔗</span>
        <span className="card__title">{item.nome}</span>
      </button>

      <div className="card__row">
        {item.usuario && (
          <button
            className="card__sub-btn card__sub-btn--user"
            onClick={() => onCopy(item.usuario!, 'Usuário copiado!')}
          >
            👤 Usuário
          </button>
        )}
        {item.senha && (
          <button
            className="card__sub-btn card__sub-btn--pass"
            onClick={() => onCopy(item.senha!, 'Senha copiada!')}
          >
            🔒 Senha
          </button>
        )}
      </div>

      {item.extra && <div className="card__extra">{item.extra}</div>}
    </div>
  )
}
