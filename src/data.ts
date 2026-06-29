// src/data.ts
// Dados extraídos de PASSWORD.txt. Tudo centralizado aqui de propósito (sem .env/back-end),
// conforme solicitado. ATENÇÃO: qualquer pessoa com acesso a este código vê estas senhas.

export interface AccessItem {
  id: string;
  nome: string; // nome em CAIXA ALTA exibido no botão principal
  url: string;
  usuario?: string;
  senha?: string;
  extra?: string; // campo livre (ex: CodATM, Contrato, Servidor, etc.)
}

export interface UrlItem {
  id: string;
  nome: string;
  url: string;
}

export const acessos: AccessItem[] = [
  {
    id: 'pamcard-samid-geovane',
    nome: 'PAMCARD1 (SAMID)',
    url: 'https://www.roadcard.com.br/sistemapamcard/?loadGaScript=load',
    usuario: 'geovane.samid',
    senha: 'Jolaz@27',
  },
  {
    id: 'pamcard-samid-tulio',
    nome: 'PAMCARD2 (SAMID)',
    url: 'https://www.roadcard.com.br/sistemapamcard/?loadGaScript=load',
    usuario: 'tulio.samid',
    senha: 'Expe@2028',
  },
  {
    id: 'pamcard-jolaz',
    nome: 'PAMCARD JOLAZ',
    url: 'https://www.roadcard.com.br/sistemapamcard/?loadGaScript=load',
    usuario: 'heron.jolaz',
    senha: 'jLZ@2027',
  },
  {
    id: 'Site-frete-agregado',
    nome: 'SITE DE FRETE AGREGADO',
    url: 'https://transportegest-production.up.railway.app/',
    usuario: 'Expedição',
    senha: '0000',
  },
  {
    id: 'calculadora-minino-antt',
    nome: 'CALCULADORA DE MINIMO ANTT',
    url: 'https://frete-antt-production.up.railway.app/',
    usuario: 'expedicao11@samidtransportes.com.br',
    senha: '0000',
  },
  {
    id: 'rh-batedor-ponto',
    nome: 'RH BATEDOR DE PONTO',
    url: 'https://www.rhid.com.br/v2/#/dashboard',
    usuario: 'talisson@samidtransportes.com.br',
    senha: '123456',
  },
  {
    id: 'usuario-rodopar-servidor',
    nome: 'USUARIO RODOPAR (SERVIDOR)',
    url: 'https://www.rhid.com.br/v2/#/dashboard',
    usuario: 'smd.tmatos@datapardc',
    senha: 'samid012345',
  },
  {
    id: 'app-rodopar',
    nome: 'APLICATIVO RODOPAR',
    url: 'https://www.rhid.com.br/v2/#/dashboard',
    usuario: 'TALISSON.MATOS',
    senha: 'Tlm@123',
  },
  {
    id: 'pasta-compartilhada',
    nome: 'PASTA COMPARTILHADA',
    url: '#',
    usuario: 'Joao Vitor',
    senha: 'Joao@',
  },
  {
    id: 'usuario-email-expedicao11',
    nome: 'USUÁRIO E-MAIL (EXPEDIÇÃO 11)',
    url: 'http://webmail.samidtransportes.com.br/?_task=mail&_mbox=INBOX',
    usuario: 'expedicao11@samidtransportes.com.br',
    senha: '123456',
  },
  {
    id: 'otnet-josimar',
    nome: 'OTNET',
    url: 'http://iptrc.com.br/default.asp',
    usuario: 'josimar.vergilio04',
    senha: 'josimar.vergilio04',
  },
 
  {
    id: 'repom',
    nome: 'REPOM',
    url: 'https://www.repom.com.br/Repom.Usuario.Web/Account/Logar',
    usuario: 'expedicao5@samidtransportes.com.br',
    senha: 'Sacode@123456789',
    extra: 'Selecionar: Contratante',
  },
  {
    id: 'trafeguss',
    nome: 'TRAFEGUSS',
    url: 'https://trescoracoes.trafegus.com.br/trafegusweb/public/login',
    usuario: 'TRES_SAMIDT',
    senha: 'ABC123',
  },
  {
    id: 'email-expedicao3',
    nome: 'E-MAIL (EXPEDIÇÃO 3)',
    url: 'http://webmail.samidtransportes.com.br/?_task=mail&_mbox=INBOX',
    usuario: 'expedicao3@samidtransportes.com.br',
    senha: 'b0z&C9@js3%Cg8092x05',
  },
  {
    id: 'email-jolaz',
    nome: 'E-MAIL JOLAZ',
    url: 'https://webmail-seguro.com.br/?_task=mail&_mbox=INBOX',
    usuario: 'contato@jolaz.com.br',
    senha: 'JlzCont000197@*',
  },
  {
    id: 'komando',
    nome: 'KOMANDO',
    url: 'http://vstrack.ddns.net/komando/?ReturnUrl=%2Fkomando%2FRastreamento%2FIndex',
    usuario: 'expedicao3@samidtransportes.com.br',
    senha: '123456',
  },
  {
    id: 'komando-jolaz',
    nome: 'KOMANDO JOLAZ',
    url: 'http://vstrack.ddns.net/komando/?ReturnUrl=%2Fkomando%2FRastreamento%2FIndex',
    usuario: 'contato@jolaz.com.br',
    senha: '123456',
  },
  {
    id: 'komando-expedicao11',
    nome: 'KOMANDO (EXPEDIÇÃO 11)',
    url: 'http://vstrack.ddns.net/komando/?ReturnUrl=%2Fkomando%2FRastreamento%2FIndex',
    usuario: 'expedicao11@samidtransportes.com.br',
    senha: '123456',
  },
  {
    id: 'buonny',
    nome: 'BUONNY',
    url: 'https://teleconsult.buonny.com.br/#/signin',
    usuario: '33091',
    senha: 'Expedicao@2029',
  },
  {
    id: 'skymark-samid',
    nome: 'SKYMARK SAMID',
    url: 'https://skylog.app',
    usuario: 'Tulio Amorim',
    senha: 'oydm1521',
    extra: 'Contrato: Samid',
  },
  {
    id: 'skymark-arcelor',
    nome: 'SKYMARK ARCELOR',
    url: 'https://skylog.app',
    usuario: 'Eudes Ribeiro',
    senha: 'vzql0223',
    extra: 'Contrato: Arcelormittal',
  },
  {
    id: 'unidocs-samid',
    nome: 'UNIDOCS SAMID',
    url: 'https://unidocs.ambev.com.br/#/list-cte',
    usuario: 'operacao.sp@samidtransportes.com.br',
    senha: 'samidDFL@@1',
  },
  {
    id: 'unidocs-multiagro',
    nome: 'UNIDOCS MULTIAGRO',
    url: 'https://unidocs.ambev.com.br',
    usuario: 'logistica@multiagrotransportes.com.br',
    senha: '@AmbeV@2023',
  },
  {
    id: 'multicte-hnk-mg',
    nome: 'MULTICTE HNK MG',
    url: 'https://heineken.multitransportador.com.br/login',
    usuario: '12059-MG',
    senha: 'Samid@2025',
  },
  {
    id: 'multicte-hnk-sp',
    nome: 'MULTICTE HNK SP',
    url: 'https://heineken.multitransportador.com.br/login',
    usuario: '12059-SP',
    senha: 'Samid@2025',
  },
  {
    id: 'b2b-nestle',
    nome: 'B2B NESTLE',
    url: 'https://www.nestle-parceiro.com.br/Portal/Login.aspx',
    usuario: 'jose.leonel@samidtransportes.com.br',
    senha: 'Samid@2026',
  },
  {
    id: 'danone-multicte',
    nome: 'DANONE MULTICTE',
    url: 'https://danone.multitransportador.com.br/Login#Home',
    usuario: '12059-MG',
    senha: 'Samid@2027',
  },
  {
    id: 'atm-averbacao-manual',
    nome: 'ATM – AVERBAÇÃO MANUAL',
    url: 'https://averba.com.br',
    usuario: 'samid',
    senha: 'DFL2015',
    extra: 'CodATM: 11363733',
  },
  {
    id: 'atm-jolaz',
    nome: 'ATM – JOLAZ',
    url: 'https://averba.com.br',
    usuario: 'JOLAZ TRANSPORT',
    senha: 'Samid2025',
    extra: 'CodATM: 11453965',
  },
  {
    id: 't4s-sascar',
    nome: 'T4S SASCAR',
    url: 'https://sascar.t4stecnologia.com.br/Account/Login',
    usuario: 'romelho.guimaraes@samidtransportes.com.br',
    senha: 'Samid@2026',
  },
  {
    id: 'sascar-localizacao',
    nome: 'SASCAR LOCALIZAÇÃO VEÍCULOS',
    url: 'https://sasweb.sascar.com.br/unificadoweb/site/login',
    usuario: 'samid746',
    senha: 'Samid@2010',
  },
  {
    id: 'sascar-espelhamento',
    nome: 'SASCAR ESPELHAMENTO',
    url: 'https://portalcliente.sascar.com.br/dashboard?loggedIn=true',
    usuario: 'samid746',
  },
  {
    id: 'otnet-www',
    nome: 'OTNET (WWW)',
    url: 'http://www.iptrc.com.br',
    usuario: 'josimar.vergilio04',
    senha: 'josimar.vergilio04',
  },
  {
    id: 'ldc-samid',
    nome: 'LDC SAMID',
    url: 'https://express.ldc.com/account/login',
    usuario: 'operacao.go@samidtransportes.com.br',
    senha: 'samid3',
  },
  {
    id: 'ldc-multiagro',
    nome: 'LDC MULTIAGRO',
    url: 'https://express.ldc.com/account/login',
    usuario: 'josimar.henriques@samidtransportes.com.br',
    senha: 'Multiagro2022',
  },
  {
    id: 'qualp',
    nome: 'QUALP',
    url: 'https://qualp.com.br',
    usuario: 'compras.adg2011@gmail.com',
    senha: '12345678',
  },
  {
    id: 'galileu-nestle-roberto',
    nome: 'GALILEU NESTLE – ROBERTO',
    url: 'https://nestle-br.galileulog.com.br/r103/?#/client/R2FsaWxldSBMb2dpc3RpY2EgfCBOZXN0bGUgQlIAYwBkZWZhdWx0',
    usuario: 'ROBERTO SAMID',
    senha: 'Samid4158$',
  },
  {
    id: 'galileu-nestle-fontanela',
    nome: 'GALILEU NESTLE – FONTANELA',
    url: 'https://nestle-br.g2.galileulog.com.br/login?entrypoint=home&module=processo%252Fembarque%252FEmbarqueGridPrincipal&ctx_raw=eyJsYWJlbCI6IkdlcmVuY2lhbWVudG8gZGUgVmlhZ2VtIn0%3D&v=Nestl%C3%A9%20BR%20%5Bv1.0.310%5D',
    usuario: 'RODRIGO.FONTANELA',
    senha: 'Samid@2028',
  },
];

export const urlsDeAcesso: UrlItem[] = [
  { id: 'url-unidocs', nome: 'UNIDOCS', url: 'https://unidocs.ambev.com.br/#/' },
  { id: 'url-komando', nome: 'KOMANDO', url: 'http://vstrack.ddns.net/komando' },
  { id: 'url-otnet', nome: 'OTNET', url: 'http://iptrc.com.br/default.asp' },
  { id: 'url-email', nome: 'E-MAIL', url: 'http://webmail.samidtransportes.com.br/?_task=mail&_mbox=INBOX' },
  { id: 'url-qualp', nome: 'QUALP', url: 'https://qualp.com.br/#/' },
  { id: 'url-gnre', nome: 'PORTAL GNRE', url: 'https://www.gnre.pe.gov.br:444/gnre/v/guia/index' },
  { id: 'url-gnre-sp', nome: 'GNRE SÃO PAULO', url: 'https://www4.fazenda.sp.gov.br/DareICMS/DareAvulso' },
  { id: 'url-guia-es', nome: 'GUIA ESPÍRITO SANTO', url: 'https://dfe-portal.svrs.rs.gov.br/NFE/CCC' },
  { id: 'url-antt', nome: 'CONSULTA ANTT', url: 'https://consultapublica.antt.gov.br/Site/ConsultaRNTRC.aspx/consultapublica' },
  { id: 'url-danfe', nome: 'CONSULTA DANFE', url: 'https://consultadanfe.com/' },
  { id: 'url-pamcard', nome: 'PAMCARD', url: 'https://www.roadcard.com.br/sistemapamcard/?loadGaScript=load' },
  { id: 'url-buonny', nome: 'BUONNY', url: 'https://teleconsult.buonny.com.br/#/signin' },
  { id: 'url-nestle-onedrive', nome: 'NESTLE (ONEDRIVE)', url: 'https://onedrive.live.com/edit?id=C777FDC6C08242DE!109&resid=C777FDC6C08242DE!109&ithint=file%2Cxlsx&authkey=!AA-iv5DA_zbMCVg&wdo=2&cid=c777fdc6c08242de' },
  { id: 'url-sintegra', nome: 'SINTEGRA', url: 'https://dfe-portal.svrs.rs.gov.br/NFE/CCC' },
  { id: 'url-ldc', nome: 'LDC', url: 'https://express.ldc.com/account/login' },
];
