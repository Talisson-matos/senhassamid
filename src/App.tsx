import { useMemo, useState } from 'react'
import { acessos, urlsDeAcesso } from './data'
import AccessCard from './AccessCard'
import Toast from './Toast'
import { gerarConteudoTxt, baixarArquivoTxt } from './exportTxt'

function App() {
  const [busca, setBusca] = useState('')
  const [toastVisivel, setToastVisivel] = useState(false)
  const [toastMsg, setToastMsg] = useState('')

  const acessosFiltrados = useMemo(() => {
    const termo = busca.trim().toLowerCase()
    if (!termo) return acessos
    return acessos.filter((item) => item.nome.toLowerCase().includes(termo))
  }, [busca])

  const urlsFiltradas = useMemo(() => {
    const termo = busca.trim().toLowerCase()
    if (!termo) return urlsDeAcesso
    return urlsDeAcesso.filter((item) => item.nome.toLowerCase().includes(termo))
  }, [busca])

  const copiarParaClipboard = async (texto: string, mensagem: string) => {
    try {
      await navigator.clipboard.writeText(texto)
    } catch {
      // fallback caso clipboard API não esteja disponível
      const textarea = document.createElement('textarea')
      textarea.value = texto
      document.body.appendChild(textarea)
      textarea.select()
      document.execCommand('copy')
      document.body.removeChild(textarea)
    }
    setToastMsg(mensagem)
    setToastVisivel(true)
  }

  const handleGerarTxt = () => {
    const conteudo = gerarConteudoTxt(acessos, urlsDeAcesso)
    baixarArquivoTxt(conteudo, 'senhas-cadastrais-samid.txt')
    setToastMsg('Arquivo .txt gerado!')
    setToastVisivel(true)
  }

  const nenhumResultado =
    acessosFiltrados.length === 0 && urlsFiltradas.length === 0

  return (
    <div className="app">
      <header className="header">
        <div className="header__brand">
          <span className="header__logo">🗄️</span>
          <div>
            <h1>Cofre de Acessos</h1>
            <p>Samid Transportes / Jolaz — logins, senhas e sites</p>
          </div>
        </div>
      </header>

      <main className="main">
        <div className="search-wrapper">
          <input
            type="text"
            className="search-input"
            placeholder="🔍 Buscar por nome do acesso..."
            value={busca}
            onChange={(e) => setBusca(e.target.value)}
          />
          {busca && (
            <button className="search-clear" onClick={() => setBusca('')}>
              ✕
            </button>
          )}
        </div>

        {nenhumResultado && (
          <p className="empty-state">Nenhum resultado encontrado para "{busca}".</p>
        )}

        {acessosFiltrados.length > 0 && (
          <section className="section">
            <h2 className="section__title">Acessos</h2>
            <div className="grid">
              {acessosFiltrados.map((item) => (
                <AccessCard key={item.id} item={item} onCopy={copiarParaClipboard} />
              ))}
            </div>
          </section>
        )}

        {urlsFiltradas.length > 0 && (
          <section className="section">
            <h2 className="section__title">URLs de acesso</h2>
            <div className="grid grid--urls">
              {urlsFiltradas.map((item) => (
                <button
                  key={item.id}
                  className="url-btn"
                  onClick={() => window.open(item.url, '_blank', 'noopener,noreferrer')}
                  title={item.url}
                >
                  <span className="card__icon">🌐</span>
                  {item.nome}
                </button>
              ))}
            </div>
          </section>
        )}

        <div className="export-wrapper">
          <button className="export-btn" onClick={handleGerarTxt}>
            📄 Gerar Arquivo .txt
          </button>
        </div>
      </main>

      <footer className="footer">
        <p>
          ⚠️ Uso interno e restrito. Não compartilhe este link ou estas
          informações fora da equipe autorizada.
        </p>
      </footer>

      <Toast
        message={toastMsg}
        visible={toastVisivel}
        onClose={() => setToastVisivel(false)}
      />
    </div>
  )
}

export default App
