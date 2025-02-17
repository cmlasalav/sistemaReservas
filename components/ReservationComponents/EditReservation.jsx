"use client"

import { useState } from "react"

const EditReservation = ({ reservation, onSave, onCancel }) => {
  const [editedReservation, setEditedReservation] = useState(reservation)
  const [error, setError] = useState("")

  const handleChange = (e) => {
    const { name, value } = e.target
    setEditedReservation((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setError("")

    const isAvailable = await checkAvailability(editedReservation)
    if (!isAvailable) {
      setError("Las fechas o la habitación seleccionada no están disponibles")
      return
    }

    // Simular recálculo del precio
    const newPrice = calculateNewPrice(editedReservation)
    const updatedReservation = { ...editedReservation, price: newPrice }

    onSave(updatedReservation)
  }

  // Función simulada para verificar disponibilidad
  const checkAvailability = async (reservation) => {

    await new Promise((resolve) => setTimeout(resolve, 1000))
 
    return Math.random() > 0.5
  }

  // Función simulada para recalcular el precio
  const calculateNewPrice = (reservation) => {
    // Lógica simple de ejemplo para recalcular el precio
    const basePrice = 100
    const nights = (new Date(reservation.checkOut) - new Date(reservation.checkIn)) / (1000 * 60 * 60 * 24)
    return basePrice * nights
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-2xl font-semibold mb-4">Editar Reserva</h2>
      {error && <p className="text-red-500 mb-4">{error}</p>}
      <form onSubmit={handleSubmit} className="bg-white shadow-md rounded-lg p-6">
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="checkIn">
            Fecha de entrada
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="checkIn"
            type="date"
            name="checkIn"
            value={editedReservation.checkIn}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="checkOut">
            Fecha de salida
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="checkOut"
            type="date"
            name="checkOut"
            value={editedReservation.checkOut}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="roomName">
            Habitación
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="roomName"
            type="text"
            name="roomName"
            value={editedReservation.roomName}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-6">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="price">
            Precio pagado
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="price"
            type="number"
            name="price"
            value={editedReservation.price}
            readOnly
          />
        </div>
        <div className="flex items-center justify-between">
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="submit"
          >
            Realizar cambios
          </button>
          <button
            className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="button"
            onClick={onCancel}
          >
            Cancelar
          </button>
        </div>
      </form>
      <div className="mt-6">
        <h3 className="text-xl font-semibold mb-2">Políticas de cancelación</h3>
        <p className="text-gray-700">
          Las cancelaciones realizadas con más de 48 horas de antelación recibirán un reembolso completo. Las
          cancelaciones realizadas dentro de las 48 horas previas a la fecha de check-in estarán sujetas a un cargo del
          50% del total de la reserva. No se realizarán reembolsos por cancelaciones el día del check-in o por no
          presentarse.
        </p>
      </div>
    </div>
  )
}

export default EditReservation

