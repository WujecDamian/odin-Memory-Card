export default function Card(props) {
  const cards = props.cardsObjects;
  const cardDivs = cards.map((card) => (
    <div
      className="card"
      key={crypto.randomUUID()}
      onClick={(e) => {
        props.handleOnClick(card);
      }}
    >
      <img src={card.imageUrl} alt="Disney character" className="card--img" />
      <h3 className="card--name">{card.name}</h3>
    </div>
  ));
  return <section className="cards">{cardDivs}</section>;
}
