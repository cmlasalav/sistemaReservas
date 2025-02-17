"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import ActiveReservations from "./ActiveReservations";
import CompletedReservations from "./CompletedReservations";
import CanceledReservations from "./CanceledReservations";
import EditReservation from "./EditReservation";

const ReservationManagement = () => {
  const [activeReservations, setActiveReservations] = useState([]);
  const [completedReservations, setCompletedReservations] = useState([]);
  const [canceledReservations, setCanceledReservations] = useState([]);
  const [isEditing, setIsEditing] = useState(false);
  const [editingReservation, setEditingReservation] = useState(null);
  const [error, setError] = useState("");
  const router = useRouter();

  useEffect(() => {
    // Simular la carga de reservas desde una API
    const fetchReservations = async () => {
      try {
        // Simular una llamada a la API
        await new Promise((resolve) => setTimeout(resolve, 1000));

        // Datos de ejemplo
        const mockActiveReservations = [
          {
            id: 1,
            roomName: "Suite Deluxe",
            checkIn: "2023-08-15",
            checkOut: "2023-08-20",
            price: 500,
          },
          {
            id: 2,
            roomName: "Habitación Estándar",
            checkIn: "2023-09-01",
            checkOut: "2023-09-05",
            price: 300,
          },
        ];
        const mockCompletedReservations = [
          {
            id: 3,
            roomName: "Suite Junior",
            checkIn: "2023-07-10",
            checkOut: "2023-07-15",
            price: 400,
          },
        ];
        const mockCanceledReservations = [
          {
            id: 4,
            roomName: "Habitación Familiar",
            checkIn: "2023-08-01",
            checkOut: "2023-08-07",
            price: 600,
          },
        ];

        setActiveReservations(mockActiveReservations);
        setCompletedReservations(mockCompletedReservations);
        setCanceledReservations(mockCanceledReservations);
      } catch (error) {
        setError(
          "Error al cargar las reservas. Por favor, intente de nuevo más tarde."
        );
      }
    };

    fetchReservations();
  }, []);

  const handleEdit = (reservation) => {
    const now = new Date();
    const checkIn = new Date(reservation.checkIn);
    const timeDifference = checkIn.getTime() - now.getTime();
    const hoursDifference = timeDifference / (1000 * 3600);

    if (hoursDifference < 48) {
      setError(
        "La edición solo está permitida 48 horas antes de la fecha de entrada."
      );
      return;
    }

    setIsEditing(true);
    setEditingReservation(reservation);
  };

  const handleCancelReservation = (reservationId) => {
    const reservation = activeReservations.find((r) => r.id === reservationId);
    const now = new Date();
    const checkIn = new Date(reservation.checkIn);
    const timeDifference = checkIn.getTime() - now.getTime();
    const hoursDifference = timeDifference / (1000 * 3600);

    if (hoursDifference < 48) {
      setError(
        "La cancelación solo está permitida 48 horas antes de la fecha de entrada."
      );
      return;
    }

    if (
      window.confirm(
        "¿Estás seguro de que deseas cancelar la reserva? Se realizará un cargo adicional a tu tarjeta por la cancelación. Revisar las políticas de cancelación para más información."
      )
    ) {
      // Simular redirección a la página de pagos
      router.push("/payments");
    }
  };

  const handleSaveChanges = async (updatedReservation) => {
    try {
      // Simular una llamada a la API para guardar los cambios
      await new Promise((resolve) => setTimeout(resolve, 1000));

      // Actualizar la reserva en el estado local
      const updatedActiveReservations = activeReservations.map((r) =>
        r.id === updatedReservation.id ? updatedReservation : r
      );
      setActiveReservations(updatedActiveReservations);

      setIsEditing(false);
      setEditingReservation(null);

      // Simular redirección a la página de pagos
      router.push("/payments");
    } catch (error) {
      setError("Lo sentimos, ocurrió un error. Inténtelo de nuevo más tarde.");
    }
  };

  if (isEditing && editingReservation) {
    return (
      <EditReservation
        reservation={editingReservation}
        onSave={handleSaveChanges}
        onCancel={() => setIsEditing(false)}
      />
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Gestión de Reservas</h1>
      {error && <p className="text-red-500 mb-4">{error}</p>}
      <ActiveReservations
        reservations={activeReservations}
        onEdit={handleEdit}
        onCancel={handleCancelReservation}
      />
      <CompletedReservations reservations={completedReservations} />
      <CanceledReservations reservations={canceledReservations} />
    </div>
  );
};

export default ReservationManagement;
