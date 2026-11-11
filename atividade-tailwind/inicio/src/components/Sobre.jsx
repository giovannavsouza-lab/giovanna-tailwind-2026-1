const numeros = [
  { valor: '15', legenda: 'anos de história' },
  { valor: '12', legenda: 'produtores parceiros' },
  { valor: '+50 mil', legenda: 'xícaras por ano' },
]

// EXERCÍCIO 5: sobre nós
export default function Sobre() {
  return (
    <section id="sobre" className="stone-900 stone-100">
      <div>
        <img src="https://picsum.photos/seed/coffeeshop/800/600" alt="Interior da cafeteria" className="w-full md:w-1/2 rounded-2xl shadow-2xl" />
        <div className="max-w-6xl mx-auto px-4 py-16 flex flex-col md:flex-row items-center gap-10 md:w-1/2">
          <h2 className="text-3xl font-bold text-amber-400">Nossa história</h2>
          <p className="mt-4 leading-relaxed text-stone-300">
            Tudo começou com uma pequena máquina de espresso e o sonho de servir
            o melhor café do bairro.
          </p>
          <p className="mt-4 leading-relaxed text-stone-300">
            Hoje trabalhamos diretamente com produtores do sul de Minas,
            garantindo qualidade e um preço justo para quem planta.
          </p>
          <ul className="mt-8 grid grid-cols-3 gap-4 text-center">
            {numeros.map((item) => (
              <li key={item.legenda}>
                <strong className="block text-3xl font-extrabold text-amber-400">{item.valor}</strong> 
                <span className="text-sm text-stone-400">{item.legenda}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
