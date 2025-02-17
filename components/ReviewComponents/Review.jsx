"use client";

import { useState, useEffect } from "react";
import { Star, Edit2, Trash2 } from "lucide-react";

const RoomReviews = ({ roomId, userId }) => {
  const [reviews, setReviews] = useState([]);
  const [newReview, setNewReview] = useState("");
  const [rating, setRating] = useState(0);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [editingReview, setEditingReview] = useState(null);

  useEffect(() => {
    // Simular la carga de reseñas desde una API
    const fetchReviews = async () => {
      // Simular una llamada a la API
      await new Promise((resolve) => setTimeout(resolve, 1000));
      const mockReviews = [
        {
          id: 1,
          userId: "user1",
          text: "Excelente habitación, muy cómoda.",
          rating: 5,
          date: new Date(2023, 5, 15),
        },
        {
          id: 2,
          userId: "user2",
          text: "Buena habitación, pero el baño necesita mejoras.",
          rating: 4,
          date: new Date(2023, 5, 10),
        },
      ];
      setReviews(mockReviews);
    };
    fetchReviews();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setSuccess("");

    if (newReview.length > 300) {
      setError("Has superado la cantidad máxima de caracteres.");
      return;
    }

    if (rating === 0) {
      setError("Por favor, selecciona una calificación.");
      return;
    }

    // Simular verificación de estancia completada
    const hasCompletedStay = await checkCompletedStay(userId, roomId);
    if (!hasCompletedStay) {
      setError(
        "Solo puedes dejar una reseña después de completar tu estancia."
      );
      return;
    }

    // Simular envío de reseña a la API
    await new Promise((resolve) => setTimeout(resolve, 1000));

    const newReviewObj = {
      id: reviews.length + 1,
      userId,
      text: newReview,
      rating,
      date: new Date(),
    };

    setReviews([newReviewObj, ...reviews]);
    setNewReview("");
    setRating(0);
    setSuccess("Su reseña ha sido publicada con éxito.");
  };

  const handleEdit = (review) => {
    setEditingReview(review);
    setNewReview(review.text);
    setRating(review.rating);
  };

  const handleUpdate = async () => {
    if (newReview.length > 300) {
      setError("Has superado la cantidad máxima de caracteres.");
      return;
    }

    // Simular actualización de reseña en la API
    await new Promise((resolve) => setTimeout(resolve, 1000));

    const updatedReviews = reviews.map((r) =>
      r.id === editingReview.id
        ? {
            ...r,
            text: newReview,
            rating:
              editingReview.date >
              new Date(Date.now() - 30 * 24 * 60 * 60 * 1000)
                ? rating
                : r.rating,
          }
        : r
    );

    setReviews(updatedReviews);
    setEditingReview(null);
    setNewReview("");
    setRating(0);
    setSuccess("Su reseña ha sido actualizada con éxito.");
  };

  const handleDelete = async (reviewId) => {
    // Simular eliminación de reseña en la API
    await new Promise((resolve) => setTimeout(resolve, 1000));

    const updatedReviews = reviews.filter((r) => r.id !== reviewId);
    setReviews(updatedReviews);
    setSuccess("Su reseña ha sido eliminada con éxito.");
  };

  const checkCompletedStay = async (userId, roomId) => {
    // Simular verificación de estancia completada
    await new Promise((resolve) => setTimeout(resolve, 500));
    return true; // Simular que el usuario ha completado su estancia
  };

  return (
    <div className="max-w-2xl mx-auto mt-8">
      <h2 className="text-2xl font-bold mb-6">Reseñas de la habitación</h2>

      <form onSubmit={handleSubmit} className="mb-8">
        <div className="mb-4">
          <label
            htmlFor="review"
            className="block text-sm font-medium text-gray-700 mb-2"
          >
            Deja tu reseña (máximo 300 caracteres)
          </label>
          <textarea
            id="review"
            rows="4"
            className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 mt-1 block w-full sm:text-sm border border-gray-300 rounded-md"
            placeholder="Escribe tu reseña aquí..."
            value={newReview}
            onChange={(e) => setNewReview(e.target.value)}
          ></textarea>
          <p className="mt-2 text-sm text-gray-500">
            {newReview.length}/300 caracteres
          </p>
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Calificación
          </label>
          <div className="flex items-center">
            {[1, 2, 3, 4, 5].map((star) => (
              <Star
                key={star}
                className={`h-6 w-6 cursor-pointer ${
                  star <= rating
                    ? "text-yellow-400 fill-current"
                    : "text-gray-300"
                }`}
                onClick={() => setRating(star)}
              />
            ))}
          </div>
        </div>
        {error && <p className="text-red-500 mb-4">{error}</p>}
        {success && <p className="text-green-500 mb-4">{success}</p>}
        <button
          type="submit"
          className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        >
          {editingReview ? "Actualizar reseña" : "Publicar reseña"}
        </button>
      </form>

      <div>
        <h3 className="text-xl font-semibold mb-4">Reseñas previas</h3>
        {reviews.length === 0 ? (
          <p className="text-gray-500">Sin reseñas para mostrar.</p>
        ) : (
          reviews.map((review) => (
            <div key={review.id} className="border-b border-gray-200 py-4">
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star
                      key={star}
                      className={`h-5 w-5 ${
                        star <= review.rating
                          ? "text-yellow-400 fill-current"
                          : "text-gray-300"
                      }`}
                    />
                  ))}
                </div>
                <span className="text-sm text-gray-500">
                  {review.date.toLocaleDateString()}
                </span>
              </div>
              <p className="text-gray-700 mb-2">{review.text}</p>
              {review.userId === userId && (
                <div className="flex space-x-2">
                  <button
                    onClick={() => handleEdit(review)}
                    className="text-indigo-600 hover:text-indigo-800 flex items-center"
                  >
                    <Edit2 className="h-4 w-4 mr-1" />
                    Editar
                  </button>
                  <button
                    onClick={() => handleDelete(review.id)}
                    className="text-red-600 hover:text-red-800 flex items-center"
                  >
                    <Trash2 className="h-4 w-4 mr-1" />
                    Eliminar
                  </button>
                </div>
              )}
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default RoomReviews;
