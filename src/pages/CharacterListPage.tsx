import styles from "./CharacterListPage.module.css";
import CharacterList from "../components/CharacterList";
import type { ICharacter } from "../interfaces/ICharacter";

interface CharacterListPageProps {
  characters: ICharacter[];
}

const CharacterListPage = ({ characters }: CharacterListPageProps) => {
  return (
    <div className={styles.container}>
      <CharacterList characters={characters} />
    </div>
  );
};

export default CharacterListPage;
