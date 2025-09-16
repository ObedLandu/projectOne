import { useState } from "react";
import "./Superhero.css";

export default function Superhero({
  name,
  description = "Aucune description pour ce superHero",
  films = ["Aucun film pour ce superHero"],
  img = "data:image/png;base64,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",
  alt,
  estLeFavori,
  details = "Aucun détail pour ce superHero",
  superheroClique = () => {},
}) {
  const [afficherDetails, setAfficherDetails] = useState(false);
  const [afficherModale, setAfficherModale] = useState(false);

  const afficherInfos = (e) => {
    e.stopPropagation();
    setAfficherModale(true);
  };

  return (
    <div
      className={`superhero ${estLeFavori ? "superhero-favori" : ""}`}
      onClick={() => superheroClique(name)}
      style={{ position: "relative" }}
    >
      {afficherModale && (
        <div
          style={{
            background: "rgba(0, 0, 0, 0.9)",
            position: "absolute",
            bottom: 0,
            right: 0,
            top: 0,
            left: 0,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <div style={{ padding: 30, background: "white" }}>
            <b>Informations</b>
            <ul>
              <li>Taille : 1,85</li>
              <li>Couleur des cheveux : Noirs</li>
              <li>Couleur des yeux : Bleus</li>
            </ul>
          </div>
        </div>
      )}
      <img src={img} alt={alt} />
      <h2 onClick={afficherInfos}> {name} </h2>
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
