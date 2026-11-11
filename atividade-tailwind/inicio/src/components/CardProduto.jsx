// EXERCÍCIO 4 (parte 2): card de um produto
export default function CardProduto({ nome, preco, descricao, imagem }) {
  return (
    <article className="rounded-2xl shadow-md overflow-hidden hover:shadow-xl hover:-translate-y-1 transition duration-300">
      <img src={imagem} alt={nome} className="w-full h-48 object-cover" />
      <div className="p-5">
        <div>
          <h3>{nome}</h3>
          <span>{preco}</span>
        </div>
        <p>{descricao}</p>
      </div>
    </article>
  )
}
