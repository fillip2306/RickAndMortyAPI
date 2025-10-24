import type { ILocation } from "../interfaces/ILocation";
import LocationItem from "./LocationItem";

interface LocationListProps {
  locations: ILocation[];
}

function LocationList({ locations } : LocationListProps ) {
  if (locations.length === 0) {
    return <p>No locations available.</p>;   
  }

  return (

  <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">

    {
        locations.map((location) => (
          <LocationItem 
          key={location.id} 
          {...location}
          />
        ))
      }
    </div>  
  )
}

export default LocationList;