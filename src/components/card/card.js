import "./card.css";

export function Card({ foto, descricao, preco, sabor }) {
  return (
    <div className="card-component">
      <h2>{sabor}</h2>
      <section className="card-infos">
        <span className="card-span">Descricao:</span>
        <h3>{descricao}</h3>
      </section>
      <section className="card-infos">
        <span className="card-span">Foto:</span>
        <h3>{foto}</h3>
      </section>
      <section className="card-infos">
        <span className="card-span">Preco:</span>
        <h3>{preco}</h3>
      </section>
    </div>
  );
}
