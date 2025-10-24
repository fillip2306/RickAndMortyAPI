import type { ICharacter } from "../interfaces/ICharacter";
import CharacterItem from "./CharacterItem";


interface CharacterListProps {
  characters: ICharacter[];
}

function CharacterList({ characters } : CharacterListProps ) {
  if (characters.length === 0) {
    return <p>No characters available.</p>;   
  }

  return (

  
  <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">

    {
        characters.map((character) => (
          <CharacterItem 
          key={character.id} 
          {...character}
          />
        ))
      }
    </div>  
  )
}

export default CharacterList;
