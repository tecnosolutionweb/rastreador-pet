const PASSOS = [
  {
    titulo: 'Abra o localizador',
    texto: (
      <>
        Toque em <span className="font-semibold text-emerald-400">Acessar o mapa do Google</span>{' '}
        (no card de cima) ou abra o app <span className="font-semibold text-emerald-400">Find Hub</span>{' '}
        (Encontre Meu Dispositivo) no seu celular.
      </>
    ),
  },
  {
    titulo: 'Confirme a conta',
    texto: 'Entre com a mesma conta Google que está no seu celular.',
  },
  {
    titulo: 'Selecione a Sualio Tag Dual',
    texto: 'Ela aparece na lista de dispositivos, junto com seu celular.',
  },
  {
    titulo: 'Toque em "Tocar"',
    texto: (
      <>
        A tag emite um som e o app mostra o <span className="font-semibold text-emerald-400">indicador de proximidade</span>{' '}
        (quanto mais perto, mais forte o sinal).
      </>
    ),
  },
  {
    titulo: 'Siga o som',
    texto: 'Use o volume do som e o indicador para chegar até o pet.',
  },
]

export default function PlaySoundGuide() {
  return (
    <section className="card">
      <h2>🔔 Fazer a tag tocar (perto)</h2>
      <p>Quando o pet estiver por perto (até ~50 m) e escondido, faça a tag tocar.</p>
      <ol className="mt-4 flex flex-col gap-4">
        {PASSOS.map((passo, i) => (
          <li key={passo.titulo} className="step">
            <span className="step-number">{i + 1}</span>
            <div>
              <p className="font-semibold text-slate-200">{passo.titulo}</p>
              <p className="step-text">{passo.texto}</p>
            </div>
          </li>
        ))}
      </ol>
      <p className="mt-4 rounded-xl bg-slate-800/80 p-3 text-xs leading-relaxed text-slate-400">
        ⚠️ A função "tocar" funciona perto da tag. Se ela estiver longe, use o mapa com
        a rede do Google e vá até a área antes de tocar o som.
      </p>
    </section>
  )
}