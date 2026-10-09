import { useState } from 'react'

export default function EmergencyPlan({ pet, checklist, setChecklist }) {
  const [mensagemPronta, setMensagemPronta] = useState('')
  const [copiado, setCopiado] = useState(false)

  function alternar(id) {
    setChecklist(
      checklist.map((item) =>
        item.id === id ? { ...item, feito: !item.feito } : item,
      ),
    )
  }

  function montarMensagem() {
    const nome = pet.nome || 'meu pet'
    const dados = [
      pet.raca && `Raça: ${pet.raca}`,
      pet.sexo && `Sexo: ${pet.sexo}`,
      pet.porte && `Porte: ${pet.porte}`,
      pet.idade && `Idade: ${pet.idade}`,
    ].filter(Boolean).join(' · ')

    const telefone = pet.telefone || 'SEU_TELEFONE'
    const partes = [
      '🐾 PROCURA-SE 🐾',
      '',
      `Perdi meu pet: ${nome}${dados ? ` (${dados})` : ''}.`,
      '',
      '👀 Se você viu ou sabe onde está, me chame no WhatsApp:',
      telefone,
      '',
      '🙏 Compartilhe para me ajudar a encontrá-lo!',
    ]
    return partes.join('\n')
  }

  async function copiarMensagem() {
    const mensagem = montarMensagem()
    setMensagemPronta(mensagem)
    try {
      await navigator.clipboard.writeText(mensagem)
      setCopiado(true)
      setTimeout(() => setCopiado(false), 2500)
    } catch {
      // Sem permissão de clipboard: a mensagem já fica visível para copiar manualmente
    }
  }

  const feitos = checklist.filter((item) => item.feito).length

  return (
    <section className="card border-red-900/50">
      <h2>🚨 Plano de emergência</h2>
      <p>Se o pet sumir, siga esta lista. Marque o que já fez.</p>

      <div className="mt-4 flex flex-col gap-1">
        {checklist.map((item) => (
          <label
            key={item.id}
            className="flex cursor-pointer items-start gap-3 rounded-xl px-2 py-2 transition hover:bg-slate-800/60"
          >
            <input
              type="checkbox"
              checked={item.feito}
              onChange={() => alternar(item.id)}
              className="mt-1 h-5 w-5 accent-emerald-500"
            />
            <span
              className={`text-sm ${
                item.feito ? 'text-slate-500 line-through' : 'text-slate-200'
              }`}
            >
              {item.texto}
            </span>
          </label>
        ))}
      </div>
      <p className="mt-2 text-xs text-slate-500">
        {feitos} de {checklist.length} passos concluídos
      </p>

      <div className="mt-4 border-t border-slate-800 pt-4">
        <button type="button" onClick={copiarMensagem} className="btn-secondary">
          {copiado ? '✅ Copiada!' : '📋 Copiar mensagem pronta (WhatsApp/grupos)'}
        </button>
        {mensagemPronta && (
          <textarea
            readOnly
            value={mensagemPronta}
            className="input mt-3 h-44 resize-none font-mono text-xs leading-relaxed"
            onFocus={(e) => e.target.select()}
          />
        )}
      </div>
    </section>
  )
}