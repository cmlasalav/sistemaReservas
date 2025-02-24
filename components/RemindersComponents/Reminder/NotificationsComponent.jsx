"use client";

import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import Logo from "../../../public/Image.jpg";

const EmailNotifications = () => {
  const [emailType, setEmailType] = useState("reminder");

  const nextEmail = () => {
    if (emailType === "reminder") setEmailType("change");
    else if (emailType === "change") setEmailType("cancellation");
    else if (emailType === "cancellation") setEmailType("review");
    else setEmailType("reminder");
  };

  const prevEmail = () => {
    if (emailType === "reminder") setEmailType("review");
    else if (emailType === "change") setEmailType("reminder");
    else if (emailType === "cancellation") setEmailType("change");
    else setEmailType("cancellation");
  };

  return (
    <div className="max-w-2xl mx-auto mt-8 p-6 bg-white rounded-lg shadow-md">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-2xl font-bold">
          Notificaciones por Correo Electrónico
        </h2>
        <div className="flex items-center space-x-2">
          <button
            onClick={prevEmail}
            className="p-2 rounded-full bg-gray-200 hover:bg-gray-300 transition-colors"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          <button
            onClick={nextEmail}
            className="p-2 rounded-full bg-gray-200 hover:bg-gray-300 transition-colors"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>
      </div>
      {emailType === "reminder" && <ReminderEmail />}
      {emailType === "change" && <ChangeEmail />}
      {emailType === "review" && <ReviewEmail />}
      {emailType === "cancellation" && <CancellationEmail />}
    </div>
  );
};

const ReminderEmail = () => (
  <div className="border rounded-lg p-4 bg-gray-50">
    <div className="bg-white p-6 rounded-lg shadow-sm">
      <div className="flex justify-between items-center mb-4">
        <Image
          src={Logo}
          alt="Hotel Logo"
          width={50}
          height={25}
          className="h-12"
        />
        <span className="text-sm text-gray-500">
          📅 Recordatorio de Reserva
        </span>
      </div>
      <h2 className="text-xl font-semibold mb-4">
        Recordatorio de tu Reserva #12 en Hotel Pichudo
      </h2>
      <p className="mb-4">Hola Juan,</p>
      <p className="mb-4">
        Este es un recordatorio de tu próxima estancia en Hotel Pichudo.
        ¡Estamos emocionados de recibirte! ✨
      </p>
      <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-4">
        <h3 className="font-semibold mb-2">🛏 Detalles de tu Reserva:</h3>
        <ul className="list-disc list-inside space-y-1">
          <li>Fecha de entrada: 15/07/2023</li>
          <li>Fecha de salida: 18/07/2023</li>
          <li>💰 Precio total: $450.00</li>
          <li>⏰ Check-In: A partir de 15:00</li>
          <li>⏳ Check-Out: Hasta 11:00</li>
          <li>📍 Dirección del hotel: Calle Principal 123, Ciudad Ejemplo</li>
          <li>📞 Contacto: +1 234 567 8900</li>
        </ul>
      </div>
      <p className="mb-4">
        Si tienes alguna pregunta o necesitas modificar tu reserva, haz clic
        aquí:
      </p>
      <Link
        href="/HU/6"
        className="inline-block bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 transition-colors"
      >
        🔗 Gestionar Reserva
      </Link>
      <p className="mt-4">¡Nos vemos pronto! 🚀</p>
      <p className="mt-4">
        Saludos,
        <br />
        Hotel Pichudo
      </p>
    </div>
  </div>
);

const CancellationEmail = () => (
  <div className="border rounded-lg p-4 bg-gray-50">
    <div className="bg-white p-6 rounded-lg shadow-sm">
      <div className="flex justify-between items-center mb-4">
        <Image
          src={Logo}
          alt="Hotel Logo"
          width={50}
          height={25}
          className="h-12"
        />
        <span className="text-sm text-gray-500">❌ Cancelación de Reserva</span>
      </div>
      <h2 className="text-xl font-semibold mb-4">
        Tu reserva en Hotel Ejemplo ha sido cancelada
      </h2>
      <p className="mb-4">Estimado/a Pedro,</p>
      <p className="mb-4">
        Lamentamos informarte que tu reserva en Hotel Ejemplo ha sido cancelada.
        A continuación, te proporcionamos los detalles de la cancelación:
      </p>
      <div className="bg-red-50 border border-red-200 rounded-lg p-4 mb-4">
        <h3 className="font-semibold mb-2">🚫 Detalles de la cancelación:</h3>
        <ul className="list-disc list-inside space-y-1">
          <li>Número de reserva: #34567</li>
          <li>Fecha de entrada original: 10/09/2023</li>
          <li>Fecha de salida original: 15/09/2023</li>
          <li>Motivo de la cancelación: Solicitud del cliente</li>
          <li>Fecha de cancelación: 01/08/2023</li>
        </ul>
      </div>
      <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 mb-4">
        <h3 className="font-semibold mb-2">💰 Información de reembolso:</h3>
        <p>
          De acuerdo con nuestra política de cancelación, se te reembolsará el
          80% del monto total de la reserva.
        </p>
        <ul className="list-disc list-inside space-y-1 mt-2">
          <li>Monto total de la reserva: $500.00</li>
          <li>Monto a reembolsar: $400.00</li>
          <li>El reembolso se procesará en los próximos 5-10 días hábiles.</li>
        </ul>
      </div>
      <p className="mb-4">
        Si tienes alguna pregunta sobre esta cancelación o necesitas asistencia
        adicional, por favor no dudes en contactarnos:
      </p>
      <a
        href="tel:+12345678901"
        className="inline-block bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 transition-colors mb-4"
      >
        📞 +1 234 567 8901
      </a>
      <p className="mb-4">
        Esperamos tener la oportunidad de recibirte en una futura ocasión.
      </p>
      <a
        href="#"
        className="inline-block bg-green-600 text-white py-2 px-4 rounded hover:bg-green-700 transition-colors"
      >
        🔗 Realizar una nueva reserva
      </a>
      <p className="mt-4">
        Atentamente,
        <br />
        Equipo de Hotel Pichudo
      </p>
    </div>
  </div>
);

const ChangeEmail = () => (
  <div className="border rounded-lg p-4 bg-gray-50">
    <div className="bg-white p-6 rounded-lg shadow-sm">
      <div className="flex justify-between items-center mb-4">
        <Image
          src={Logo}
          alt="Hotel Logo"
          width={50}
          height={25}
          className="h-12"
        />
        <span className="text-sm text-gray-500">
          ⚠️ Modificación de Reserva
        </span>
      </div>
      <h2 className="text-xl font-semibold mb-4">
        Tu reserva en Hotel Pichudo ha sido modificada
      </h2>
      <p className="mb-4">Hola María,</p>
      <p className="mb-4">
        Queremos informarte que se ha realizado un cambio en tu reserva en Hotel
        Ejemplo. Aquí están los detalles actualizados:
      </p>
      <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 mb-4">
        <h3 className="font-semibold mb-2">🔄 Modificaciones recientes:</h3>
        <ul className="list-disc list-inside space-y-1">
          <li>Nueva fecha de entrada: 20/08/2023</li>
          <li>Nueva fecha de salida: 25/08/2023</li>
          <li>Nuevo precio total: $750.00</li>
        </ul>
      </div>
      <p className="mb-4">
        Si no solicitaste esta modificación, por favor contacta a nuestro
        soporte de inmediato:
      </p>
      <a
        href="tel:+12345678901"
        className="inline-block bg-red-600 text-white py-2 px-4 rounded hover:bg-red-700 transition-colors mb-4"
      >
        📞 +1 234 567 8901
      </a>
      <p className="mb-4">Para ver los detalles completos de tu reserva:</p>
      <Link
        href="/HU/6"
        className="inline-block bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 transition-colors"
      >
        🔗 Gestionar Reserva
      </Link>
      <p className="mt-4">
        Saludos,
        <br />
        Hotel Pichudo
      </p>
    </div>
  </div>
);

// const ReviewEmail = () => (
//   <div className="border rounded-lg p-4 bg-gray-50">
//     <div className="bg-white p-6 rounded-lg shadow-sm">
//       <div className="flex justify-between items-center mb-4">
//         <Image
//           src={Logo}
//           width={50}
//           height={25}
//           alt="Hotel Logo"
//           className="h-12"
//         />
//         <span className="text-sm text-gray-500">💬 Respuesta a Reseña</span>
//       </div>
//       <h2 className="text-xl font-semibold mb-4">
//         Han respondido tu reseña en Hotel Pichudo
//       </h2>
//       <p className="mb-4">Hola Carlos,</p>
//       <p className="mb-4">
//         Alguien ha respondido tu reseña en Hotel Pichudo. ¡Nos encantaría que la
//         veas y sigas la conversación!
//       </p>
//       <div className="bg-gray-100 border border-gray-200 rounded-lg p-4 mb-4">
//         <h3 className="font-semibold mb-2">💬 Tu reseña:</h3>
//         <p className="italic mb-2">
//           "La habitación era cómoda, pero el servicio de limpieza podría
//           mejorar."
//         </p>
//         <h3 className="font-semibold mb-2">✍️ Respuesta:</h3>
//         <p className="italic">
//           "Gracias por tu comentario, Carlos. Lamentamos que el servicio de
//           limpieza no cumpliera con tus expectativas. Hemos tomado nota y
//           estamos trabajando para mejorar. Esperamos que nos des otra
//           oportunidad en tu próxima visita."
//         </p>
//       </div>
//       <p className="mb-4">
//         Para ver la respuesta completa y continuar la conversación, haz clic
//         aquí:
//       </p>
//       <Link
//         href="/HU/4"
//         className="inline-block bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 transition-colors"
//       >
//         🔗 Ver reseña
//       </Link>
//       <p className="mt-4">Gracias por compartir tu experiencia con nosotros.</p>
//       <p className="mt-4">
//         Saludos,
//         <br />
//         Hotel Pichudo
//       </p>
//     </div>
//   </div>
// );

export default EmailNotifications;
