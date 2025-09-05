import Superhero from "./components/Superheroes/Superhero/Superhero";
import Superheroes from "./components/Superheroes/Superheroes";
import captainAmerica from "./assets/captainAmerica.jpg";

export default function App() {
  return (
    <>
      <h1>Marvel</h1>
      <Superheroes>
        {/* superhero numéro 1 */}
        <Superhero
          img="data:image/jpeg;base64,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"
          alt="hulk"
          name="Hulk"
          description="Hulk is a fictional superhero appearing in American comic books
            published by Marvel Comics. Created by writer Stan Lee and artist
            Jack Kirby, the character first appeared in The Incredible Hulk #1
            (May 1962). The Hulk is the alter ego of Dr. Robert Bruce Banner, a
            physically weak, socially withdrawn, and emotionally reserved
            physicist who, after a gamma bomb test goes wrong, transforms into a
            raging green-skinned giant whenever he is subjected to emotional
            stress."
          films={["Avengers", "Age of Ultron", "Thor: Ragnarok"]}
        />

        {/* superhero numéro 2 */}
        <Superhero
          img={captainAmerica}
          alt="captain america"
          name="Captain America"
          description=" Captain America is a comic-strip superhero created by writer Joe
            Simon and artist Jack Kirby for Timely (later Marvel) Comics. The
            character debuted in March 1941 in Captain America Comics no. 1. The
            star-spangled super soldier would become one of Marvel’s most iconic
            and enduring characters."
        />

        {/* superhero numéro 3 */}
        <Superhero
          img="https://upload.wikimedia.org/wikipedia/en/3/35/Supermanflying.png"
          alt="superman"
          name="Superman"
          description=" Superman is a fictional superhero appearing in American comic books
            published by DC Comics. Created by writer Jerry Siegel and artist
            Joe Shuster, the character first appeared in Action Comics #1 (June
            1938). Superman is the alter ego of Clark Kent, a mild-mannered
            reporter for the Daily Planet in the city of Metropolis. Born on the
            planet Krypton as Kal-El, he was sent to Earth as an infant by his
            parents just before Krypton's destruction. Raised by a Kansas
            farming couple, he developed superhuman abilities under Earth's
            yellow sun, including super strength, flight, invulnerability, heat
            vision, x-ray vision, super speed, and enhanced senses."
        />
      </Superheroes>
    </>
  );
}
