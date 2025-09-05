export default function Superhero({
  name,
  description,
  films = ["Aucun film pour ce superHero"],
  ...props
}) {
  return (
    <div className="superhero">
      <h2> {name} </h2>
      <p>{description}</p>
      <div>
        <b>Films :</b>
        <ul>
          {films.map((film) => (
            <li>{film}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}
