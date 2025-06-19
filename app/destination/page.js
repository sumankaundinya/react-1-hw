"use client";

import { useState } from "react";
import styles from "@/components/destination/destination.module.css";
import { PlanetWishlistItem } from "@/components/destination/PlanetWishlistItem";
import { AddWishlistItem } from "@/components/destination/AddWishlistItem";
import { PlanetCard } from "@/components/destination/PlanetCard";

export const Destinations = () => {
  const [selectedPlanets, setSelectedPlanets] = useState([]);

  const planetData = [
    {
      name: "Europa",
      thumbnail: "/destination/image-europa.png",
    },
    {
      name: "Moon",
      thumbnail: "/destination/image-moon.png",
    },
    {
      name: "Mars",
      thumbnail: "/destination/image-mars.png",
    },
    {
      name: "Titan",
      thumbnail: "/destination/image-titan.png",
    },
  ];

  const onAddWishlistItem = (name, thumbnail) => {
    setSelectedPlanets((prev) => [...prev, { name, thumbnail }]);
  };

  const onAddOrRemovePlanet = (name) => {
    setSelectedPlanets((prev) => {
      const alreadyAdded = prev.some((p) => p.name === name);

      if (alreadyAdded) {
        return prev.filter((p) => p.name !== name);
      }

      const fromDefaults = planetData.find((p) => p.name === name);
      if (fromDefaults) {
        return [...prev, fromDefaults];
      }

      return prev;
    });
  };

  const isSelected = (name) => selectedPlanets.some((p) => p.name === name);

  const numberOfPlanets = selectedPlanets.length;

  return (
    <div className="fullBGpicture">
      <main className="mainContent">
        <h1>Travel destinations</h1>

        <section className="card">
          <h2>Wishlist</h2>
          <AddWishlistItem onAddWishlistItem={onAddWishlistItem} />

          {numberOfPlanets === 0 ? (
            <p>No planets in wishlist :(</p>
          ) : (
            <>
              <p>You have {numberOfPlanets} planet(s) in your wishlist</p>
              <div className={styles.wishlistList}>
                {selectedPlanets.map((planet) => (
                  <PlanetWishlistItem
                    key={planet.name}
                    name={planet.name}
                    thumbnail={planet.thumbnail}
                    onRemove={() => onAddOrRemovePlanet(planet.name)}
                  />
                ))}
              </div>
            </>
          )}
        </section>

        <section className="card">
          <h2>Possible destinations</h2>

          {planetData.map((planet) => (
            <PlanetCard
              key={planet.name}
              name={planet.name}
              description={
                {
                  Europa:
                    "Europa, one of Jupiter’s moons, is an icy world with a hidden ocean beneath its surface. This mysterious moon is a prime candidate for the search for extraterrestrial life, making it a thrilling destination for space explorers.",
                  Moon: "Our closest celestial neighbor, the Moon, is a silent witness to Earth's history. With its stunning craters and desolate landscapes, the Moon offers a unique glimpse into space exploration's past and future, making it a perfect destination for lunar adventurers.",
                  Mars: "Mars, the Red Planet, is a barren yet fascinating world with vast deserts, towering volcanoes, and the deepest canyon in the solar system. As humanity’s next frontier, Mars invites us to dream of colonization and the possibilities of life beyond Earth.",
                  Titan:
                    "Titan, Saturn's largest moon, is a world of dense atmosphere and liquid methane lakes. This enigmatic moon is shrouded in a thick orange haze, concealing a landscape that is both alien and strangely familiar, beckoning explorers to uncover its secrets.",
                }[planet.name]
              }
              thumbnail={planet.thumbnail}
              isSelected={isSelected(planet.name)}
              onAddOrRemovePlanet={() => onAddOrRemovePlanet(planet.name)}
            />
          ))}
        </section>
      </main>
    </div>
  );
};

export default Destinations;
