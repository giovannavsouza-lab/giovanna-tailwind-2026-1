import Header from './components/Header.jsx'
import Hero from './components/Hero.jsx'
import Cardapio from './components/Cardapio.jsx'
import Sobre from './components/Sobre.jsx'
import Contato from './components/Contato.jsx'
import Footer from './components/Footer.jsx'

export default function App() {
  return (
    // EXERCÍCIO 1: estilize esta div (ela faz o papel do <body>)
    <div  className='min-h-screen bg-stone-50 text-stone-800 font-sans antialiased '>
      <Header />
      <main>
        <Hero />
        <Cardapio />
        <Sobre />
        <Contato />
      </main>
      <Footer />
    </div>
  )
}
