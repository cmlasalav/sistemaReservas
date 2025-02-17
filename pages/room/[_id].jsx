"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import Image from "next/image";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Calendar, Info } from "lucide-react";
import RoomReviews from "@components/ReviewComponents/Review";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Logo from "../../public/Image.jpg";

const RoomDetails = () => {
  const router = useRouter();
  const { _id } = router.query;
  const [room, setRoom] = useState(null);
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  const [unavailableDates, setUnavailableDates] = useState([]);

  useEffect(() => {
    if (_id) {
      // Simular una llamada a la API para obtener los detalles de la habitación
      const fetchRoomDetails = async () => {
        // En una aplicación real, aquí harías una llamada a tu API
        await new Promise((resolve) => setTimeout(resolve, 1000));

        // Datos de ejemplo
        const mockRoom = {
          id: _id,
          name: "Suite Deluxe",
          price: 250,
          size: "40 m²",
          capacity: "2 adultos",
          beds: "1 cama king-size",
          images: [Logo, Logo, Logo],
          description: "Espaciosa suite con vistas panorámicas a la ciudad.",
          amenities: [
            "Wi-Fi gratis",
            "TV de pantalla plana",
            "Minibar",
            "Cafetera",
            "Caja fuerte",
            "Aire acondicionado",
          ],
          policies: [
            "No se permite fumar",
            "No se admiten mascotas",
            "Check-in a partir de las 15:00",
            "Check-out antes de las 11:00",
          ],
          additionalServices: [
            { name: "Desayuno buffet", price: 20 },
            { name: "Acceso al spa", price: 50 },
            { name: "Servicio de habitaciones 24/7", price: 10 },
          ],
        };
        setRoom(mockRoom);

        // Simular fechas no disponibles
        const unavailable = [
          new Date(2023, 6, 10),
          new Date(2023, 6, 11),
          new Date(2023, 6, 12),
          new Date(2023, 7, 5),
          new Date(2023, 7, 6),
        ];
        setUnavailableDates(unavailable);
      };

      fetchRoomDetails();
    }
  }, [_id]);

  const handleDateChange = (dates) => {
    const [start, end] = dates;
    setStartDate(start);
    setEndDate(end);
  };

  const handleReserve = () => {
    if (!startDate || !endDate) {
      alert("Por favor, selecciona las fechas de entrada y salida.");
      return;
    }
    // Aquí iría la lógica para procesar la reserva
    console.log("Reserva realizada:", { roomId: _id, startDate, endDate });
    // Redirigir a la página de confirmación o proceso de pago
    // router.push('/booking/confirm')
  };

  const handleBack = () => {
    router.push("/");
  };

  if (!room) {
    return <div className="container mx-auto px-4 py-8">Cargando...</div>;
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">{room.name}</h1>
      <button
        onClick={handleBack}
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded w-full md:w-auto mb-2"
      >
        Regresar
      </button>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <Carousel showThumbs={false} showStatus={false}>
            {room.images.map((img, index) => (
              <div key={index}>
                <Image
                  src={img || "/placeholder.svg"}
                  alt={`${room.name} - Imagen ${index + 1}`}
                  width={600}
                  height={400}
                  className="rounded-lg"
                />
              </div>
            ))}
          </Carousel>
        </div>
        <div>
          <p className="text-2xl font-semibold mb-4">${room.price} / noche</p>
          <div className="mb-4">
            <h2 className="text-xl font-semibold mb-2">Características:</h2>
            <ul className="list-disc list-inside">
              <li>Tamaño: {room.size}</li>
              <li>Capacidad: {room.capacity}</li>
              <li>Camas: {room.beds}</li>
            </ul>
          </div>
          <p className="mb-4">{room.description}</p>
          <div className="mb-4">
            <h2 className="text-xl font-semibold mb-2">Servicios incluidos:</h2>
            <ul className="list-disc list-inside">
              {room.amenities.map((amenity, index) => (
                <li key={index}>{amenity}</li>
              ))}
            </ul>
          </div>
          <div className="mb-4">
            <h2 className="text-xl font-semibold mb-2">
              Políticas de la habitación:
            </h2>
            <ul className="list-disc list-inside">
              {room.policies.map((policy, index) => (
                <li key={index}>{policy}</li>
              ))}
            </ul>
          </div>
          <div className="mb-4">
            <h2 className="text-xl font-semibold mb-2">
              Servicios adicionales:
            </h2>
            <ul>
              {room.additionalServices.map((service, index) => (
                <li
                  key={index}
                  className="flex justify-between items-center mb-2"
                >
                  <span>{service.name}</span>
                  <span className="font-semibold">${service.price}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      <div className="mt-8">
        <h2 className="text-2xl font-semibold mb-4">Selecciona tus fechas</h2>
        <div className="flex items-center space-x-4 mb-4">
          <Calendar className="text-gray-500" />
          <DatePicker
            selected={startDate}
            onChange={handleDateChange}
            startDate={startDate}
            endDate={endDate}
            excludeDates={unavailableDates}
            selectsRange
            inline
          />
        </div>
        {unavailableDates.length > 0 && (
          <p className="text-sm text-gray-500 mb-4 flex items-center">
            <Info className="w-4 h-4 mr-2" />
            Las fechas marcadas en rojo no están disponibles.
          </p>
        )}
        <button
          onClick={handleReserve}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded w-full md:w-auto"
        >
          Reservar ahora
        </button>
      </div>
      <div className="mt-12">
        <h2 className="text-2xl font-bold mb-4">Reseñas</h2>
        <RoomReviews roomId={_id} userId="user123" />
      </div>
    </div>
  );
};

export default RoomDetails;
