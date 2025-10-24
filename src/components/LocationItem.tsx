import type { ILocation } from "../interfaces/ILocation";

function LocationItem({ id, name, type, dimension }: ILocation ) {
  return (
    <article className="text-center bg-gray-200 p-4">
      <h3 className="font-bold">Id {id}: {name}</h3>
      <h3 className="font-bold">{type}</h3>
      <h3 className="font-bold">{dimension}</h3>
    </article>
  )
}

export default LocationItem;
