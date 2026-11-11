const links = [
  { href: '#inicio', texto: 'Início' },
  { href: '#cardapio', texto: 'Cardápio' },
  { href: '#sobre', texto: 'Sobre' },
  { href: '#contato', texto: 'Contato' },
]

// EXERCÍCIO 2: barra de navegação
export default function Header() {
  return (
    <header className="sticky shadow-2xl top-0 z-10 bg-white">
      <nav className="max-w-6xl mx-auto flex justify-between items-center px-4 py-4">
        <a href="#" className="text-2xl font-bold text-amber-700">☕ Grão Dourado</a>
        <ul className="flex space gap-6">
          {links.map((link) => (
            <li key={link.href} className="font-medium hover text-amber-700 transition-colors">
              <a href={link.href}className="font-medium hover text-amber-700 transition-colors">{link.texto}</a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  )
}

