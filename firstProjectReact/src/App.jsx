import "./App.css";
import Superhero from "./components/Superhero/Superhero";

export default function App() {
  return (
    <main>
      <h1>Marvel</h1>
      <div className="superheroes">
        {/* superhero numéro 1 */}
        <Superhero />

        {/* superhero numéro 2 */}
        <div className="superhero">
          <h2>Captain America</h2>
          <p>
            Captain America is a comic-strip superhero created by writer Joe
            Simon and artist Jack Kirby for Timely (later Marvel) Comics. The
            character debuted in March 1941 in Captain America Comics no. 1. The
            star-spangled super soldier would become one of Marvel’s most iconic
            and enduring characters.
          </p>
        </div>

        {/* superhero numéro 3 */}
        <div className="superhero">
          <h2>Superman</h2>
          <p>
            Superman is a fictional superhero appearing in American comic books
            published by DC Comics. Created by writer Jerry Siegel and artist
            Joe Shuster, the character first appeared in Action Comics #1 (June
            1938). Superman is the alter ego of Clark Kent, a mild-mannered
            reporter for the Daily Planet in the city of Metropolis. Born on the
            planet Krypton as Kal-El, he was sent to Earth as an infant by his
            parents just before Krypton's destruction. Raised by a Kansas
            farming couple, he developed superhuman abilities under Earth's
            yellow sun, including super strength, flight, invulnerability, heat
            vision, x-ray vision, super speed, and enhanced senses.
          </p>
        </div>
      </div>
    </main>
  );
}
