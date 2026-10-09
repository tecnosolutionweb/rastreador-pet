import { useEffect } from 'react'
import Header from './components/Header.jsx'
import PetProfile from './components/PetProfile.jsx'
import MapAccess from './components/MapAccess.jsx'
import LastLocation from './components/LastLocation.jsx'
import PlaySoundGuide from './components/PlaySoundGuide.jsx'
import EmergencyPlan from './components/EmergencyPlan.jsx'
import Footer from './components/Footer.jsx'
import { useLocalStorage } from './hooks/useLocalStorage.js'

export default function App() {
  const [pet, setPet] = useLocalStorage('pet', {
    nome: '',
    raca: '',
    porte: '',
    sexo: '',
    idade: '',
    telefone: '',
    foto: '',
  })

  const [lastLocation, setLastLocation] = useLocalStorage('lastLocation', null)

  const [checklist, setChecklist] = useLocalStorage('checklist', [
    { id: 1, texto: 'Ligar para o veterinário de confiança', feito: false },
    { id: 2, texto: 'Avisar a família e os vizinhos', feito: false },
    { id: 3, texto: 'Publicar foto e dados em grupos de bairro e redes sociais', feito: false },
    { id: 4, texto: 'Imprimir cartazes com foto e telefone', feito: false },
    { id: 5, texto: 'Varrer a região com o mapa do Google e a função "tocar som"', feito: false },
    { id: 6, texto: 'Registrar o sumiço em ONGs e no canil municipal da região', feito: false },
  ])

  useEffect(() => {
    document.title = pet.nome
      ? `${pet.nome} 🐾 | Rastreador do Meu Pet`
      : 'Rastreador do Meu Pet 🐾'
  }, [pet.nome])

  return (
    <div className="min-h-screen bg-slate-950 pb-20 text-slate-100">
      <div className="mx-auto flex w-full max-w-lg flex-col gap-5 px-4">
        <Header petNome={pet.nome} />
        <PetProfile pet={pet} setPet={setPet} />
        <MapAccess />
        <LastLocation lastLocation={lastLocation} setLastLocation={setLastLocation} />
        <PlaySoundGuide />
        <EmergencyPlan pet={pet} checklist={checklist} setChecklist={setChecklist} />
        <Footer />
      </div>
    </div>
  )
}