import styles from "./LocationsPage.module.css";
import type { ILocation } from "../interfaces/ILocation";
import CharacterList from "../components/LocationList";

interface LocationsPageProps {
  locations: ILocation[];
}

const LocationsPage = ({ locations }: LocationsPageProps) => {
  return (
    <div className={styles.container}>
      <CharacterList locations={locations} />
    </div>
  );
};


export default LocationsPage;
