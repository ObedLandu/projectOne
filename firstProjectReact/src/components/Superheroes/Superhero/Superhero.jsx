import "./Superhero.css";

export default function Superhero({
  name,
  description,
  films = ["Aucun film pour ce superHero"],
  img,
  alt,
}) {
  return (
    <div className="superhero">
      <img src={img} alt={alt} />
      <h2> {name} </h2>
      <p>{description}</p>
      <div>
        <b>Films :</b>
        <ul>
          {films.map((film, index) => (
            <li key={index}>{film}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}
