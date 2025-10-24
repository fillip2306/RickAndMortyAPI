import styles from "./CharacterByIdPage.module.css";
import type { ICharacter } from "../interfaces/ICharacter";
import CharacterById from "../components/CharacterById";

interface CharacterByIdPageProps {
  characters: ICharacter[];
}


const CharacterByIdPage = ({ characters }: CharacterByIdPageProps) => {
  return (
    <div className={styles.container}>
      <CharacterById characters={characters} />
    </div>
  )
}

export default CharacterByIdPage;