import Image from "next/image";

const SearchResults = ({ results, onSelectRoom }) => {
  if (results.length === 0) {
    return null;
  }


  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-8">
      {results.map((room) => (
        <div
          key={room.id}
          className="bg-white shadow-md rounded-lg overflow-hidden"
        >
          <Image
            src={room.image || "../../public/Image.jpg"}
            alt={`${room.type} room`}
            width={300}
            height={200}
            className="w-full"
          />
          <div className="p-4">
            <h3 className="font-bold text-xl mb-2">{room.type}</h3>
            <p className="text-gray-700 text-base mb-4">
              Precio por noche: ${room.price}
            </p>
            <button
              onClick={() => onSelectRoom(room.id)}
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            >
              Seleccionar
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default SearchResults;
