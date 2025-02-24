import React, { useState } from "react";
import { Hotel, Table2, FileText, Download } from "lucide-react";
import { RoomTable } from "./Rooms";
import { EditModal } from "./EditModal";
import { ConfirmationModal } from "./ConfirmModal";
import { Notification } from "./Notifications";
import { downloadPDF } from "./ReportComponents/ReportPDF";

// Mock initial data
const initialRooms = [
  { id: "1", type: "Suite Deluxe", availability: 5, price: 299.99 },
  {
    id: "2",
    type: "Habitación Ejecutiva",
    availability: 8,
    price: 199.99,
  },
  {
    id: "3",
    type: "Habitación Estándar",
    availability: 12,
    price: 149.99,
  },
  {
    id: "4",
    type: "Suite Presidencial",
    availability: 2,
    price: 499.99,
  },
];

function AdminDashboard() {
  const [rooms, setRooms] = useState(initialRooms);
  const [selectedRoom, setSelectedRoom] = useState(null);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [isConfirmModalOpen, setIsConfirmModalOpen] = useState(false);
  const [pendingChanges, setPendingChanges] = useState(null);
  const [notification, setNotification] = useState(null);
  const [activeView, setActiveView] = useState("rooms");

  const handleEdit = (roomId) => {
    const room = rooms.find((room) => room.id === roomId);
    setSelectedRoom(room);
    setIsEditModalOpen(true);
  };

  const handleSave = (updatedRoom) => {
    setPendingChanges(updatedRoom);
    setIsEditModalOpen(false);
    setIsConfirmModalOpen(true);
  };

  const confirmChanges = () => {
    if (pendingChanges) {
      try {
        setRooms(
          rooms.map((room) =>
            room.id === pendingChanges.id ? pendingChanges : room
          )
        );
        setNotification({
          message: "Su cambio se ha guardado con éxito",
          type: "success",
        });
      } catch (error) {
        setNotification({
          message: "Su cambio no pudo ser realizado. Inténtelo de nuevo",
          type: "error",
        });
      }
      setPendingChanges(null);
    }
  };

  const handleDownloadPDF = async () => {
    try {
      await downloadPDF();
      setNotification({
        message: "El informe se ha descargado correctamente",
        type: "success",
      });
    } catch (error) {
      setNotification({
        message: "Error al descargar el informe. Inténtelo de nuevo",
        type: "error",
      });
    }
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <header className="bg-white shadow">
        <div className="max-w-7xl mx-auto px-4 py-6 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <Hotel className="h-8 w-8 text-indigo-600 mr-3" />
              <h1 className="text-3xl font-bold text-gray-900">
                Panel de Administración de Hotel
              </h1>
            </div>
            <div className="flex items-center space-x-4">
              <button
                onClick={handleDownloadPDF}
                className="inline-flex items-center px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700 transition-colors"
              >
                <Download className="h-5 w-5 mr-2" />
                Descargar Informe PDF
              </button>
              <div className="flex space-x-4">
                <button
                  onClick={() => setActiveView("rooms")}
                  className={`inline-flex items-center px-4 py-2 rounded-md ${
                    activeView === "rooms"
                      ? "bg-indigo-600 text-white"
                      : "text-gray-600 hover:bg-gray-100"
                  }`}
                >
                  <Table2 className="h-5 w-5 mr-2" />
                  Habitaciones
                </button>
              </div>
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 py-6 sm:px-6 lg:px-8">
        {activeView === "rooms" ? (
          <div className="bg-white rounded-lg shadow p-6">
            <div className="mb-6">
              <h2 className="text-xl font-semibold text-gray-900">
                Gestión de Habitaciones
              </h2>
              <p className="mt-1 text-sm text-gray-600">
                Administre la disponibilidad y precios de las habitaciones
              </p>
            </div>

            <RoomTable rooms={rooms} onEdit={handleEdit} />
          </div>
        ) : (
          <ReportsView rooms={rooms} />
        )}

        <EditModal
          room={selectedRoom}
          isOpen={isEditModalOpen}
          onClose={() => setIsEditModalOpen(false)}
          onSave={handleSave}
        />

        <ConfirmationModal
          isOpen={isConfirmModalOpen}
          onClose={() => setIsConfirmModalOpen(false)}
          onConfirm={confirmChanges}
          message="¿Estás seguro de los cambios que quieres realizar?"
        />

        {notification && (
          <Notification
            message={notification.message}
            type={notification.type}
            onClose={() => setNotification(null)}
          />
        )}
      </main>
    </div>
  );
}

export default AdminDashboard;
