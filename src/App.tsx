import { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import type { ICharacter } from "./interfaces/ICharacter";
import type { ILocation } from "./interfaces/ILocation";
import {
  HomePage,
  AboutUsPage,
  CharacterListPage,
  CharacterByIdPage,
  LocationsPage,
} from "./pages";
import RickAndMortyService from "./services/RickAndMortyService.ts";
import Navigation from "./shared/Navigation";

function App() {
  const [characters, setCharacters] = useState<ICharacter[]>([]);
  const [locations, setLocations] = useState<ILocation[]>([]);

  useEffect(() => {
    (async () => {
      const data = await RickAndMortyService.getCharacters();
      setCharacters(data);
    })();
  }, []);

  useEffect(() => {
    (async () => {
      const data = await RickAndMortyService.getLocations();
      setLocations(data);
    })();
  }, []);

  return (
    <BrowserRouter>
      <div className="min-h-screen">
        
        <Navigation />

        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutUsPage />} />
          <Route
            path="/characters"
            element={<CharacterListPage characters={characters} />}
          />
          <Route
            path="/characters/:id"
            element={<CharacterByIdPage characters={characters} />}
          />
          <Route
            path="/locations"
            element={<LocationsPage locations={locations} />}
          />
          <Route
            path="*"
            element={<p>Page not found! <a href="/">Back to the home page</a></p>}
          />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
