# 🐾 Rastreador do Meu Pet (Sualio Tag Dual)

Painel web para você achar seu pet usando a **Sualio Tag Dual** e a rede
**Find Hub do Google** (Encontre Meu Dispositivo).

## O que o painel faz

| Seção | Função |
|---|---|
| 🐶 Meu pet | Foto, nome, raça e contato (salvo no navegador) |
| 🎯 Ver no mapa | 1 clique abre o *google.com/android/find* — a localização real da tag |
| 📍 Última localização | Registra sua posição (GPS) ou um endereço, com data/hora |
| 🔔 Tocar som | Passo a passo para fazer a tag apitar quando o pet está perto |
| 🚨 Plano de emergência | Checklist para pet perdido + mensagem pronta para WhatsApp |

## Como rodar no seu PC

```bash
npm install        # só na primeira vez
npm run dev        # abre em http://localhost:5173
```

## Como abrir no celular

1. No PC, rode `npm run dev` (o IP da rede já aparece no terminal, ex: `http://192.168.x.x:5173`).
2. No celular, abra esse endereço no navegador.
3. O botão **"Pegar minha posição"** usa o GPS do celular (permita a localização).

> 📱 Para usar a localização (GPS), abra pelo celular — no PC o navegador também funciona.

## Para publicar na internet (opcional, de graça)

```bash
npm run build        # gera a pasta dist/
```

Depois é só arrastar o conteúdo da pasta `dist/` para um serviço gratuito
como **Netlify Drop** (netlify.com/drop) ou **GitHub Pages**. Aí você abre de
qualquer lugar.

## Personalizar

- **Foto do pet**: botão "Adicionar foto" no painel (a foto fica salva no navegador).
- **Dados do pet**: basta digitar nos campos — tudo é salvo automaticamente.

## Importante (limitação técnica)

A Sualio Tag **não tem GPS próprio**. A localização **remota** aparece quando um
celular Android com a rede Find Hub passa perto dela, e ela só pode ser vista no
site/app **oficial do Google** (criptografada de ponta a ponta — não existe API
pública). Por isso o painel abre o mapa oficial com 1 clique. Já para **proximidade**
(até ~50 m), a função **"tocar som"** resolve.

Feito com React + Tailwind CSS + Vite.