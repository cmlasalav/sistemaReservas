import React, { useState, useEffect } from "react";
import { X } from "lucide-react";

export function EditModal({ room, isOpen, onClose, onSave }) {
  const [editedRoom, setEditedRoom] = useState();

  useEffect(() => {
    setEditedRoom(room);
  }, [room]);

  if (!isOpen || !editedRoom) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (editedRoom) {
      onSave(editedRoom);
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-lg max-w-md w-full p-6">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-semibold">Editar Habitación</h2>
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700"
          >
            <X className="h-6 w-6" />
          </button>
        </div>
        <form onSubmit={handleSubmit}>
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Tipo de Habitación
              </label>
              <input
                type="text"
                value={editedRoom.type}
                readOnly
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm bg-gray-50 px-3 py-2"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Disponibilidad
              </label>
              <input
                type="number"
                min="0"
                value={editedRoom.availability}
                onChange={(e) =>
                  setEditedRoom({
                    ...editedRoom,
                    availability: parseInt(e.target.value) || 0,
                  })
                }
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 px-3 py-2"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Precio por Noche
              </label>
              <input
                type="number"
                min="0"
                step="0.01"
                value={editedRoom.price}
                onChange={(e) =>
                  setEditedRoom({
                    ...editedRoom,
                    price: parseFloat(e.target.value) || 0,
                  })
                }
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 px-3 py-2"
              />
            </div>
          </div>
          <div className="mt-6 flex justify-end space-x-3">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 border border-gray-300 rounded-md text-sm font-medium text-gray-700 hover:bg-gray-50"
            >
              Cancelar
            </button>
            <button
              type="submit"
              className="px-4 py-2 bg-indigo-600 text-white rounded-md text-sm font-medium hover:bg-indigo-700"
            >
              Guardar Cambios
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
