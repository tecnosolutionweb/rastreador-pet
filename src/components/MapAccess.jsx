const URL_FIND = 'https://www.google.com/android/find'

export default function MapAccess() {
  return (
    <section className="card border-emerald-800/60 bg-emerald-950/40">
      <h2>🎯 Ver no mapa agora</h2>
      <p>
        Abre o localizador oficial do Google (Find Hub) com a localização real da sua
        Sualio Tag Dual. É o único jeito de ver a posição — ela é criptografada e só
        aparece lá.
      </p>
      <a
        href={URL_FIND}
        target="_blank"
        rel="noreferrer"
        className="btn-primary bg-emerald-400 hover:bg-emerald-300"
      >
        📍 Acessar o mapa do Google
      </a>
      <p className="mt-3 rounded-xl bg-slate-900/70 p-3 text-xs leading-relaxed text-slate-400">
        💡 <span className="font-semibold text-slate-300">Como funciona:</span> o mapa
        atualiza quando algum celular Android com a rede ativada passa perto da tag.
        Se a tag estiver longe de gente, a posição pode demorar a atualizar — isso é
        normal.
      </p>
    </section>
  )
}