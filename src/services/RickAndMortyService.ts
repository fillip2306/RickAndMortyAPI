import axios from "axios";
import type { ICharacter } from "../interfaces/ICharacter";
import type { ILocation } from "../interfaces/ILocation";

const endpoints = {
  characters: "https://rickandmortyapi.com/api/character",
  locations: "https://rickandmortyapi.com/api/location",
  episodes: "https://rickandmortyapi.com/api/episode",
};

async function getCharacters() : Promise<ICharacter[]> {
  try {
    const response = await axios.get<{ results: ICharacter[] }>(endpoints.characters);
    return response.data.results;
  } catch (error) {
    console.error("Failed to fetch characters:", error);
    return [];
  }
}

async function getLocations() : Promise<ILocation[]> { 
  try {
    const response = await axios.get<{ results: ILocation[] }>(endpoints.locations);
    return response.data.results;
  } catch (error) {
    console.error("Failed to fetch locations:", error);
    return [];
  } 
}

const RickAndMortyService = { getCharacters, getLocations };

export default RickAndMortyService;