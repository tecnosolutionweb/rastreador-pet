import { useRef } from 'react'

const PORTES = ['', 'Pequeno', 'Médio', 'Grande']
const SEXOS = ['', 'Macho', 'Fêmea']

export default function PetProfile({ pet, setPet }) {
  const fileRef = useRef(null)

  const update = (campo) => (evento) =>
    setPet({ ...pet, [campo]: evento.target.value })

  function handleFoto(evento) {
    const arquivo = evento.target.files?.[0]
    if (!arquivo) return
    const leitor = new FileReader()
    leitor.onload = () => setPet({ ...pet, foto: leitor.result })
    leitor.readAsDataURL(arquivo)
    evento.target.value = ''
  }

  function limparFoto() {
    setPet({ ...pet, foto: '' })
  }

  return (
    <section className="card">
      <h2>🐶 Meu pet</h2>
      <p>Preencha para deixar tudo pronto no dia de precisar.</p>

      <div className="mt-4 flex items-center gap-4">
        {pet.foto ? (
          <img
            src={pet.foto}
            alt="Foto do pet"
            className="h-20 w-20 rounded-full border-2 border-emerald-500 object-cover"
          />
        ) : (
          <div className="flex h-20 w-20 items-center justify-center rounded-full border-2 border-dashed border-slate-600 bg-slate-800 text-3xl">
            🐕
          </div>
        )}
        <div className="flex flex-col gap-2">
          <button
            type="button"
            onClick={() => fileRef.current?.click()}
            className="rounded-lg bg-slate-800 px-3 py-2 text-sm font-semibold text-slate-100 transition hover:bg-slate-700"
          >
            📷 {pet.foto ? 'Trocar foto' : 'Adicionar foto'}
          </button>
          {pet.foto && (
            <button
              type="button"
              onClick={limparFoto}
              className="text-xs text-slate-500 underline"
            >
              remover foto
            </button>
          )}
          <input ref={fileRef} type="file" accept="image/*" hidden onChange={handleFoto} />
        </div>
      </div>

      <div className="mt-4 grid grid-cols-2 gap-3">
        <div className="col-span-2">
          <label className="label" htmlFor="nome">Nome*</label>
          <input
            id="nome"
            className="input"
            placeholder="Ex: Rex"
            value={pet.nome}
            onChange={update('nome')}
          />
        </div>
        <div className="col-span-2">
          <label className="label" htmlFor="raca">Raça</label>
          <input
            id="raca"
            className="input"
            placeholder="Ex: Labrador"
            value={pet.raca}
            onChange={update('raca')}
          />
        </div>
        <div>
          <label className="label" htmlFor="porte">Porte</label>
          <select id="porte" className="input" value={pet.porte} onChange={update('porte')}>
            {PORTES.map((p) => (
              <option key={p || 'vazio'} value={p}>
                {p || 'Escolher...'}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label className="label" htmlFor="sexo">Sexo</label>
          <select id="sexo" className="input" value={pet.sexo} onChange={update('sexo')}>
            {SEXOS.map((s) => (
              <option key={s || 'vazio'} value={s}>
                {s || 'Escolher...'}
              </option>
            ))}
          </select>
        </div>
        <div className="col-span-2">
          <label className="label" htmlFor="idade">Idade</label>
          <input
            id="idade"
            className="input"
            placeholder="Ex: 3 anos"
            value={pet.idade}
            onChange={update('idade')}
          />
        </div>
        <div className="col-span-2">
          <label className="label" htmlFor="telefone">Telefone para contato (WhatsApp)</label>
          <input
            id="telefone"
            className="input"
            placeholder="Ex: (11) 99999-9999"
            value={pet.telefone}
            onChange={update('telefone')}
          />
        </div>
      </div>
    </section>
  )
}