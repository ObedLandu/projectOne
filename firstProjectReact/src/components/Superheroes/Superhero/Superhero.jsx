import { useState } from "react";
import "./Superhero.css";

export default function Superhero({
  name,
  description,
  films = ["Aucun film pour ce superHero"],
  img,
  alt,
  estLeFavori,
  details = "Aucun détail pour ce superHero",
  superheroClique
}) {
  const [afficherDetails, setAfficherDetails] = useState(false);
  return (
    <div className={`superhero ${estLeFavori ? "superhero-favori" : ""}`} onClick={ () => superheroClique(name) }>
      <img src={img} alt={alt} />
      <h2> {name} </h2>
      <p>{description}</p>
      <div
        className="more-details"
        onClick={() => setAfficherDetails((statePrecedent) => !statePrecedent)}
      >
        {afficherDetails ? "Cacher les détails" : "Afficher les détails"}
      </div>
      {afficherDetails && <div className="details"> {details}</div>}
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
