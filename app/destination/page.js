"use client";

import { useState } from "react";
import styles from "@/components/destination/destination.module.css";
import { PlanetWishlistItem } from "@/components/destination/PlanetWishlistItem";
import { PlanetCard } from "@/components/destination/PlanetCard";

export const Destinations = () => {
  const [selectedPlanets, setSelectedPlanets] = useState([]);

  const numberOfPlanets = selectedPlanets.length;

  const onAddOrRemovePlanet = (name, index) => {
    console.log(`Selected planet: ${name}, index: ${index}`);
    if (selectedPlanets.includes(name)) {
      setSelectedPlanets(selectedPlanets.filter((p) => p !== name));
    } else {
      setSelectedPlanets([...selectedPlanets, name]);
    }
  };

  const isSelected = (name) => selectedPlanets.includes(name);

  return (
    <div className="fullBGpicture">
      <main className="mainContent">
        <h1>Travel destinations</h1>

        <section className="card">
          <h2>Wishlist</h2>
          {numberOfPlanets === 0 ? (
            <p>No planets in wishlist :(</p>
          ) : (
            <p>You have {numberOfPlanets} in your wishlist</p>
          )}
          <b>List coming soon after lesson 3!</b>
        </section>

        <section className="card">
          <h2>Possible destinations</h2>

          <PlanetCard
            name="Europa"
            description="Europa, one of Jupiter’s moons, is an icy world with a hidden ocean beneath its surface. This mysterious moon is a prime candidate for the search for extraterrestrial life, making it a thrilling destination for space explorers."
            thumbnail="/destination/image-europa.png"
            isSelected={isSelected("Europa")}
            onAddOrRemovePlanet={() => onAddOrRemovePlanet("Europa", 0)}
          />

          <PlanetCard
            name="Moon"
            description="Our closest celestial neighbor, the Moon, is a silent witness to Earth's history. With its stunning craters and desolate landscapes, the Moon offers a unique glimpse into space exploration's past and future, making it a perfect destination for lunar adventurers."
            thumbnail="/destination/image-moon.png"
            isSelected={isSelected("Moon")}
            onAddOrRemovePlanet={() => onAddOrRemovePlanet("Moon", 1)}
          />

          <PlanetCard
            name="Mars"
            description="Mars, the Red Planet, is a barren yet fascinating world with vast deserts, towering volcanoes, and the deepest canyon in the solar system. As humanity’s next frontier, Mars invites us to dream of colonization and the possibilities of life beyond Earth."
            thumbnail="/destination/image-mars.png"
            isSelected={isSelected("Mars")}
            onAddOrRemovePlanet={() => onAddOrRemovePlanet("Mars", 2)}
          />

          <PlanetCard
            name="Titan"
            description="Titan, Saturn's largest moon, is a world of dense atmosphere and liquid methane lakes. This enigmatic moon is shrouded in a thick orange haze, concealing a landscape that is both alien and strangely familiar, beckoning explorers to uncover its secrets."
            thumbnail="/destination/image-titan.png"
            isSelected={isSelected("Titan")}
            onAddOrRemovePlanet={() => onAddOrRemovePlanet("Titan", 3)}
          />
        </section>
      </main>
    </div>
  );
};

export default Destinations;
