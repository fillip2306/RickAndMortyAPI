import type { ICharacter } from "../interfaces/ICharacter";

function CharacterItem({ id, name, status, species, image }: ICharacter) {
  return (
    <article className="text-center bg-gray-200 ">
      <img
        src={image}
        alt={name}
        className="w-full h-auto rounded mb-3 object-cover"
      />
      <h3 className="font-bold">Id {id}: {name}</h3>
      <p className={status ? "text-green-600" : "text-red-600"}>
        {status ? "Living" : "Dead"}
      </p>
      <p>{species}</p>
    </article>
  )
}

export default CharacterItem;


//   background-color: #f4f4f4;
