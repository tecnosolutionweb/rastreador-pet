export default function Footer() {
  return (
    <footer className="px-2 pt-4 text-center text-xs leading-relaxed text-slate-500">
      <p>
        🐾 Seus dados ficam salvos <span className="font-semibold">apenas no seu navegador</span>{' '}
        (localStorage) — ninguém mais tem acesso.
      </p>
      <p className="mt-2">
        A localização remota da Sualio Tag Dual é exibida pela rede{' '}
        <span className="font-semibold">Find Hub do Google</span> e é criptografada de
        ponta a ponta por privacidade — por isso usamos o site oficial do Google para o
        mapa.
      </p>
    </footer>
  )
}