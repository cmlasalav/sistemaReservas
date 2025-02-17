const ActiveReservations = ({ reservations, onEdit, onCancel }) => {
    if (reservations.length === 0) {
      return (
        <div className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Reservas Activas</h2>
          <p className="text-gray-500">Sin reservas que mostrar</p>
        </div>
      )
    }
  
    return (
      <div className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Reservas Activas</h2>
        {reservations.map((reservation) => (
          <div key={reservation.id} className="bg-white shadow-md rounded-lg p-6 mb-4">
            <h3 className="text-xl font-semibold mb-2">{reservation.roomName}</h3>
            <p className="mb-2">Check-in: {reservation.checkIn}</p>
            <p className="mb-2">Check-out: {reservation.checkOut}</p>
            <p className="mb-4">Precio: ${reservation.price}</p>
            <div className="flex space-x-4">
              <button
                onClick={() => onEdit(reservation)}
                className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
              >
                Editar Reserva
              </button>
              <button
                onClick={() => onCancel(reservation.id)}
                className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded"
              >
                Cancelar Reserva
              </button>
            </div>
          </div>
        ))}
      </div>
    )
  }
  
  export default ActiveReservations
  
  