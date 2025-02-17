"use client";

import { useState } from "react";
import { useRouter } from "next/router";
import { Loader } from "lucide-react";

export default function PaymentPage() {
  const router = useRouter();
  const [paymentMethod, setPaymentMethod] = useState("card");
  const [cardDetails, setCardDetails] = useState({
    number: "",
    name: "",
    expiry: "",
    cvc: "",
  });
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);

  const reservationDetails = {
    roomType: "Deluxe Suite",
    nights: 3,
    basePrice: 300,
    taxes: 45,
    additionalServices: 50,
    discount: 30,
    cancellationFee: 100,
    total: 365,
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setCardDetails((prev) => ({ ...prev, [name]: value }));
  };

  const validateForm = () => {
    if (paymentMethod === "card") {
      if (
        !cardDetails.number ||
        !cardDetails.name ||
        !cardDetails.expiry ||
        !cardDetails.cvc
      ) {
        setError("Por favor, complete todos los campos de la tarjeta.");
        return false;
      }
    }
    return true;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setIsLoading(true);

    if (!validateForm()) {
      setIsLoading(false);
      return;
    }

    try {
      await new Promise((resolve) => setTimeout(resolve, 2000));

      if (Math.random() < 0.8) {
        setSuccess(true);
        console.log("Sending receipt email...");
      } else {
        throw new Error("Payment failed");
      }
    } catch (err) {
      setError("Algo salió mal con el pago, inténtelo de nuevo.");
    } finally {
      setIsLoading(false);
    }
  };

  const handleConfirmation = () => {
    router.push("/reservations");
  };

  if (success) {
    return (
      <div className="min-h-screen bg-gray-100 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
        <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
          <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
            <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
              El pago se realizó de manera exitosa
            </h2>
            <p className="mt-2 text-center text-sm text-gray-600">
              Se ha enviado un recibo a su correo electrónico.
            </p>
            <div className="mt-6">
              <button
                onClick={handleConfirmation}
                className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                Aceptar
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
          Pago de Reserva
        </h2>
      </div>

      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
        <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
          <div className="mb-6">
            <h3 className="text-lg font-medium text-gray-900">
              Resumen de la Reserva
            </h3>
            <dl className="mt-2 divide-y divide-gray-200">
              <div className="py-2 flex justify-between text-sm">
                <dt>Tipo de habitación:</dt>
                <dd className="font-medium">{reservationDetails.roomType}</dd>
              </div>
              <div className="py-2 flex justify-between text-sm">
                <dt>Noches:</dt>
                <dd className="font-medium">{reservationDetails.nights}</dd>
              </div>
              <div className="py-2 flex justify-between text-sm">
                <dt>Precio base:</dt>
                <dd className="font-medium">${reservationDetails.basePrice}</dd>
              </div>
              <div className="py-2 flex justify-between text-sm">
                <dt>Impuestos:</dt>
                <dd className="font-medium">${reservationDetails.taxes}</dd>
              </div>
              <div className="py-2 flex justify-between text-sm">
                <dt>Servicios adicionales:</dt>
                <dd className="font-medium">
                  ${reservationDetails.additionalServices}
                </dd>
              </div>
              <div className="py-2 flex justify-between text-sm">
                <dt>Descuento:</dt>
                <dd className="font-medium text-green-600">
                  -${reservationDetails.discount}
                </dd>
              </div>
              <div className="py-2 flex justify-between text-sm">
                <dt>Cuota por cancelación:</dt>
                <dd className="font-medium">
                  ${reservationDetails.cancellationFee}
                </dd>
              </div>
              <div className="py-2 flex justify-between text-sm font-bold">
                <dt>Total:</dt>
                <dd>${reservationDetails.total}</dd>
              </div>
            </dl>
          </div>

          <form className="space-y-6" onSubmit={handleSubmit}>
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Método de pago
              </label>
              <div className="mt-2 space-y-4 sm:flex sm:items-center sm:space-y-0 sm:space-x-10">
                <div className="flex items-center">
                  <input
                    id="card"
                    name="paymentMethod"
                    type="radio"
                    checked={paymentMethod === "card"}
                    onChange={() => setPaymentMethod("card")}
                    className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300"
                  />
                  <label
                    htmlFor="card"
                    className="ml-3 block text-sm font-medium text-gray-700"
                  >
                    Tarjeta de crédito/débito
                  </label>
                </div>
                <div className="flex items-center">
                  <input
                    id="paypal"
                    name="paymentMethod"
                    type="radio"
                    checked={paymentMethod === "paypal"}
                    onChange={() => setPaymentMethod("paypal")}
                    className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300"
                  />
                  <label
                    htmlFor="paypal"
                    className="ml-3 block text-sm font-medium text-gray-700"
                  >
                    PayPal
                  </label>
                </div>
              </div>
            </div>

            {paymentMethod === "card" && (
              <>
                <div>
                  <label
                    htmlFor="card-number"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Número de tarjeta
                  </label>
                  <div className="mt-1">
                    <input
                      type="text"
                      name="number"
                      id="card-number"
                      autoComplete="cc-number"
                      required
                      className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                      value={cardDetails.number}
                      onChange={handleInputChange}
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="card-name"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Nombre en la tarjeta
                  </label>
                  <div className="mt-1">
                    <input
                      type="text"
                      name="name"
                      id="card-name"
                      autoComplete="cc-name"
                      required
                      className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                      value={cardDetails.name}
                      onChange={handleInputChange}
                    />
                  </div>
                </div>

                <div className="flex space-x-4">
                  <div className="flex-1">
                    <label
                      htmlFor="card-expiry"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Fecha de expiración
                    </label>
                    <div className="mt-1">
                      <input
                        type="text"
                        name="expiry"
                        id="card-expiry"
                        autoComplete="cc-exp"
                        required
                        placeholder="MM/YY"
                        className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                        value={cardDetails.expiry}
                        onChange={handleInputChange}
                      />
                    </div>
                  </div>

                  <div className="flex-1">
                    <label
                      htmlFor="card-cvc"
                      className="block text-sm font-medium text-gray-700"
                    >
                      CVC
                    </label>
                    <div className="mt-1">
                      <input
                        type="text"
                        name="cvc"
                        id="card-cvc"
                        autoComplete="cc-csc"
                        required
                        className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                        value={cardDetails.cvc}
                        onChange={handleInputChange}
                      />
                    </div>
                  </div>
                </div>
              </>
            )}

            {paymentMethod === "paypal" && (
              <div className="text-sm text-gray-600">
                Serás redirigido a PayPal para completar el pago.
              </div>
            )}

            {error && <div className="text-red-600 text-sm">{error}</div>}

            <div>
              <button
                type="submit"
                className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                disabled={isLoading}
              >
                {isLoading ? (
                  <>
                    <Loader className="animate-spin h-5 w-5 mr-3" />
                    Procesando...
                  </>
                ) : (
                  "Confirmar Pago"
                )}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
