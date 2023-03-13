import { MainLayuot } from "../components/MainLayout";

import { HomePage } from '../components/Home'

export default function Home() {
  return (
    <MainLayuot 
      og_site = 'SS. SoftWare — Hydraulics'
      og_type = 'website'
      og_url = 'https://ss-software.in.ua/'
      og_title = 'Hydraulics'
      og_desc = 'Творчий підхід до технологій. Зібравши команду з інженерів буровиків з польовим досвідом та досвідчених програмістів, ми створили програмний продукт який здатний допомогти інженерам-буровикам швидко знайти оптимальне вирішення поточних задач.'

      title = "Hydraulics"
      desc = "Творчий підхід до технологій. Зібравши команду з інженерів буровиків з польовим досвідом та досвідчених програмістів, ми створили програмний продукт який здатний допомогти інженерам-буровикам швидко знайти оптимальне вирішення поточних задач."
      keywords = "Hydraulics, SS. SoftWare, ss-software"
      photo = "https://db3pap003files.storage.live.com/y4mR9Ns-qTzQPY4HbBxNodoTOJyng-T5lhkDaua_nqzQnFBwiAZd4ZcEbcpmRT0g1as9Oma8IlqVAGpcAknY9qGrfN4FeBZIlLrV5H1VUB91Twn4owQr5OPz2dqm5RTsdZAi58KMIPAZY8033IcVeNazI058iB9pWo3sYbz1E_lQYnuqctjqI-Nnu2Hkg1dbqg7?width=1200&height=630&cropmode=none"
    >
      <HomePage />
    </MainLayuot>
  )
}
