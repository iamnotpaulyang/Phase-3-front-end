import React, { useState } from "react";
import DemonCards from "./DemonCards";

function Home({ demons, addNewDemon }) {
  const [name, setName] = useState("");
  const [demonImg, setDemonImg] = useState("");
  const [classification, setClassification] = useState("");

  const newDemonObj = {
    name: name,
    demon_img: demonImg,
    classification: classification,
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    fetch("http://localhost:9292/demons", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newDemonObj),
    })
      .then((r) => r.json())
      .then((newDemonObj) => addNewDemon(newDemonObj));
  };

  return (
    <div className="home">
      <div className="about">
        <div className="about-box">
          <h2 className="about-app">About The Underworld</h2>
          <h4 className="about-app">
            <u>Tartarus:</u> is the region of the Underworld where the
            primordial Titans are imprisoned and the souls of the unrighteous
            are given ironic punishments for eternity. This is the region where
            the death-cheating king Sisyphus is forced to push a boulder uphill
            for all eternity. Environmentally, the maps of Tartarus are dark and
            gloomy, filled with spike traps, the souls of the damned, and where
            Megaera awaits her next victim.
          </h4>
          <h4 className="about-app">
            <u>Asphodel:</u> is where virtuous souls who lived peaceful lives
            spend eternity in a verdant meadow... or at least, that's how it was
            in the original Greek myths. In-game, an overflowing river of lava
            transformed Asphodel into a scorched volcanic landscape, with a
            hydra at its heart.{" "}
          </h4>
          <h4 className="about-app">
            <u>Elysium:</u> is a paradise for souls who died heroic deaths. The
            game depicts Hades as a cool, soothing location filled with moss and
            crystals, and many of the enemies therein are the spirits of
            warriors seeking to relive their glory days. Famous heroes of Greek
            Myth such as Patroclus, Theseus, and the Mintotaur Asterius can be
            found here.
          </h4>
          <h4 className="about-app">
            <u>Temple of Styx:</u> or the River Styx, the body of water which
            separates the Underworld from the surface. This realm of the
            Underworld has the look of a grimy basement dungeon, and escaping it
            leads to the final map of the game (a snow-covered ruin) and the
            current final boss of the game, Lord Hades himself.
          </h4>
          <h4 className="about-app">
            <u>Hades</u>, the Greek god of the underworld and main antagonist
            of Hades, the Action RPG, is an emotionally distant workaholic god
            who treats his son Zagreus with cold, barely concealed disdain.
            Hades however, is not the Greek equivalent of the Christian Devil
            contrary to what movies like Disney’s Hercules or Clash of the
            Titans suggest. Given that Hades is no longer with his siblings on
            Olympus, he is no longer considered an Olympian God, despite the
            fact that Zeus, Poseidon, Hera, Demeter, and Hestia all remain
            deities of the Olympian pantheon. As the legend goes, the three
            brothers Zeus, Poseidon, and Hades were each to take a realm: Zeus
            took the sky and air, Poseidon took the sea and water, and Hades was
            left with the Underworld, making an outcast of him eternally. In
            both classic mythology and this game, Hades is a stoic,
            even-handed god who focuses on professionally carrying out the
            divine duties, contrary to the decadent depravities of other gods
            like Zeus or Poseidon. Indeed, whenever Zagreus falls in combat, he
            can visit Hades at his desk, where the Lord of the Underworld is
            constantly occupied filling out paperwork and sorting the souls of
            the dead into their rightful afterlives.
          </h4>
        </div>
      </div>
      <div id="demon-cards" className="cards">
        {demons.map((demon) => {
          return <DemonCards demon={demon} key={demon.id} />;
        })}
      </div>
      <div className="demon-form">
        <form className="new-demon-form" onSubmit={handleSubmit}>
          <h3>New Demon:</h3>
          <input
            className="form-input"
            value={name}
            onChange={(e) => setName(e.target.value)}
            name="name"
            type="text"
            placeholder="Demon name"
          />
          <br />
          <input
            className="form-input"
            value={demonImg}
            onChange={(e) => setDemonImg(e.target.value)}
            type="text"
            name="demon_img"
            placeholder="Image URL"
          />
          <br />
          <input
            className="form-input"
            value={classification}
            onChange={(e) => setClassification(e.target.value)}
            type="text"
            classification="classfication"
            placeholder="Demon classification"
          />
          <br />
          <button className="demon-btn" type="submit">
            Add Demon
          </button>
        </form>
      </div>
    </div>
  );
}

export default Home;
