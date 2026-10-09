import { useState } from 'react'

function formatarData(ts) {
  return new Date(ts).toLocaleString('pt-BR', {
    day: '2-digit',
    month: '2-digit',
    year: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
  })
}

export default function LastLocation({ lastLocation, setLastLocation }) {
  const [buscando, setBuscando] = useState(false)
  const [endereco, setEndereco] = useState('')
  const [erro, setErro] = useState('')
  const [salvo, setSalvo] = useState('')

  function pegarPosicao() {
    if (!navigator.geolocation) {
      setErro('Seu navegador não tem suporte a localização.')
      return
    }
    setBuscando(true)
    setErro('')
    setSalvo('')
    navigator.geolocation.getCurrentPosition(
      (pos) => {
        setLastLocation({
          lat: pos.coords.latitude,
          lng: pos.coords.longitude,
          timestamp: Date.now(),
          descricao: endereco.trim(),
        })
        setBuscando(false)
        setSalvo('Posição salva! 🎉')
      },
      () => {
        setErro('Não consegui pegar sua posição. Verifique a permissão de localização do navegador.')
        setBuscando(false)
      },
      { enableHighAccuracy: true, timeout: 15000 },
    )
  }

  function salvarEndereco(e) {
    e.preventDefault()
    if (!endereco.trim()) return
    setLastLocation({
      lat: null,
      lng: null,
      timestamp: Date.now(),
      descricao: endereco.trim(),
    })
    setEndereco('')
    setErro('')
    setSalvo('Endereço salvo! 🎉')
  }

  function linkMapa() {
    if (!lastLocation) return null
    if (lastLocation.lat != null && lastLocation.lng != null) {
      return `https://www.google.com/maps?q=${lastLocation.lat},${lastLocation.lng}`
    }
    if (lastLocation.descricao) {
      return `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(lastLocation.descricao)}`
    }
    return null
  }

  const mapa = linkMapa()

  return (
    <section className="card">
      <h2>📍 Última localização</h2>
      <p>
        Registre onde você viu o pet por último — um recurso valioso num sumiço.
      </p>

      <button
        type="button"
        onClick={pegarPosicao}
        disabled={buscando}
        className="btn-secondary disabled:opacity-60"
      >
        {buscando ? '🛰️ Buscando sinal...' : '📡 Pegar minha posição atual'}
      </button>

      <form onSubmit={salvarEndereco} className="mt-3">
        <input
          className="input"
          placeholder="Ou digite um endereço descritivo (ex: perto da praça X)"
          value={endereco}
          onChange={(e) => setEndereco(e.target.value)}
        />
        <button type="submit" className="btn-secondary mt-2">
          💾 Salvar endereço
        </button>
      </form>

      {erro && <p className="mt-3 text-sm text-red-400">{erro}</p>}
      {salvo && <p className="mt-3 text-sm text-emerald-400">{salvo}</p>}

      {lastLocation && (
        <div className="mt-4 rounded-xl border border-slate-700 bg-slate-800 p-3">
          <p className="text-xs text-slate-400">
            Atualizado em {formatarData(lastLocation.timestamp)}
          </p>
          {lastLocation.lat != null ? (
            <p className="mt-1 break-all font-mono text-sm text-slate-200">
              {lastLocation.lat.toFixed(5)}, {lastLocation.lng.toFixed(5)}
            </p>
          ) : (
            <p className="mt-1 text-sm text-slate-200">{lastLocation.descricao}</p>
          )}
          {lastLocation.descricao && lastLocation.lat != null && (
            <p className="mt-1 text-xs text-slate-400">📝 {lastLocation.descricao}</p>
          )}
          {mapa && (
            <a
              href={mapa}
              target="_blank"
              rel="noreferrer"
              className="btn-primary mt-3"
            >
              🗺️ Abrir no Google Maps
            </a>
          )}
          <button
            type="button"
            onClick={() => setLastLocation(null)}
            className="mt-2 block w-full text-center text-xs text-slate-500 underline"
          >
            limpar registro
          </button>
        </div>
      )}
    </section>
  )
}