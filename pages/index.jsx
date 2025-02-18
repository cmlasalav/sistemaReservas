import { useRouter } from "next/router";
import Link from "next/link";

export default function HUPage() {
  const router = useRouter();
  const { _id } = router.query;

  const huButtons = Array.from({ length: 14 }, (_, i) => i + 1);
  const huNames = [
    "HU_Registro de usuario",
    "HU_Iniciar sesión y Recuperación de contraseña",
    "HU_Pago en línea",
    "HU_Reseñas y califaciones",
    "HU_Notificaciones y Recordatorios",
    "HU_Gestion de Reservas",
    "HU_Busqueda y Seleccion de habitaciones",
    "HU_Reservas de habitaciones",
    "HU_Servicios Adicionales",
    "HU_Panel de administradores",
    "HU_Informes",
    "HU_Recomendaciones",
    "HU_HomePage",
    "HU_Perfil",
  ]

  return (
    <div className="min-h-screen bg-gray-100 p-4">
      <div className="grid grid-cols-4 gap-4 mb-8">
        {huButtons.map((num, index) => (
          <Link href={`/HU/${num}`} key={num}>
            <div
              className={`text-white font-bold py-2 px-4 rounded text-center ${
                num === Number.parseInt(_id)
                  ? "bg-blue-700"
                  : "bg-blue-500 hover:bg-blue-700"
              }`}
            >
             
             {huNames[index]}
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
