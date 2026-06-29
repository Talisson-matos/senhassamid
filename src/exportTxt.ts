import { AccessItem, UrlItem } from './data'

export function gerarConteudoTxt(acessos: AccessItem[], urls: UrlItem[]): string {
  const linhaDivisoria = '-'.repeat(90)
  const dataGeracao = new Date().toLocaleString('pt-BR')

  let conteudo = ''
  conteudo += '='.repeat(90) + '\n'
  conteudo += '                     SENHAS CADASTRAIS DIVERSAS - SAMID/JOLAZ\n'
  conteudo += `                     Gerado em: ${dataGeracao}\n`
  conteudo += '='.repeat(90) + '\n\n'

  acessos.forEach((item) => {
    conteudo += `${item.nome}\n`
    conteudo += `Site: ${item.url && item.url !== '#' ? item.url : '(sem link)'}\n`
    if (item.usuario) conteudo += `Usuário: ${item.usuario}\n`
    if (item.senha) conteudo += `Senha: ${item.senha}\n`
    if (item.extra) conteudo += `${item.extra}\n`
    conteudo += linhaDivisoria + '\n\n'
  })

  conteudo += '\n' + '='.repeat(90) + '\n'
  conteudo += '                                URLS DE ACESSO\n'
  conteudo += '='.repeat(90) + '\n\n'

  urls.forEach((u) => {
    conteudo += `${u.nome}: ${u.url}\n`
  })

  conteudo += '\n' + '='.repeat(90) + '\n'

  return conteudo
}

export function baixarArquivoTxt(conteudo: string, nomeArquivo: string) {
  const blob = new Blob([conteudo], { type: 'text/plain;charset=utf-8' })
  const url = URL.createObjectURL(blob)
  const link = document.createElement('a')
  link.href = url
  link.download = nomeArquivo
  document.body.appendChild(link)
  link.click()
  document.body.removeChild(link)
  URL.revokeObjectURL(url)
}
