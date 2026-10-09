export default function Header({ petNome }) {
  return (
    <header className="px-2 pt-8 text-center">
      <div className="text-5xl">🐾</div>
      <h1 className="mt-3 text-3xl font-extrabold tracking-tight text-slate-50">
        {petNome ? `${petNome} — Onde está?` : 'Rastreador do Meu Pet'}
      </h1>
      <p className="mt-2 text-sm text-slate-400">
        Painel para achar seu pet pela Sualio Tag Dual
      </p>
    </header>
  )
}