"use client";

import { useState } from "react";
import { useRouter } from "next/router";
import SearchForm from "./SearchForm";
import SearchResults from "./SearchResults";
import Logo from "../../public/Image.jpg";

const RoomSearch = () => {
  const [searchResults, setSearchResults] = useState([]);
  const [noResults, setNoResults] = useState(false);
  const router = useRouter();

  const handleSearch = async (searchCriteria) => {
    // Simular una llamada a la API para buscar habitaciones
    await new Promise((resolve) => setTimeout(resolve, 1000));

    // Datos de ejemplo
    const mockRooms = [
      {
        id: 1,
        type: "Individual",
        price: 100,
        image: Logo,
      },
      {
        id: 2,
        type: "Doble",
        price: 150,
        image: Logo,
      },
      {
        id: 3,
        type: "Suite",
        price: 250,
        image: Logo,
      },
    ];

    // Filtrar habitaciones basadas en los criterios de búsqueda
    const filteredRooms = mockRooms.filter((room) => {
      const priceInRange =
        room.price >= searchCriteria.minPrice &&
        room.price <= searchCriteria.maxPrice;
      const typeMatch =
        searchCriteria.roomType === "all" ||
        room.type.toLowerCase() === searchCriteria.roomType;
      return priceInRange && typeMatch;
    });

    if (filteredRooms.length === 0) {
      setNoResults(true);
      setSearchResults([]);
    } else {
      setNoResults(false);
      setSearchResults(filteredRooms);
    }
  };

  const handleSelectRoom = (roomId) => {
    // Simular redirección a la página de reserva de habitación
    router.push(`/room/${roomId}`);
    // router.push("/404");
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Búsqueda de Habitaciones</h1>
      <SearchForm onSearch={handleSearch} />
      {noResults ? (
        <p className="text-red-500 mt-4">
          No hay disponibilidad de habitaciones con los parámetros indicados.
        </p>
      ) : (
        <SearchResults
          results={searchResults}
          onSelectRoom={handleSelectRoom}
        />
      )}
    </div>
  );
};

export default RoomSearch;
