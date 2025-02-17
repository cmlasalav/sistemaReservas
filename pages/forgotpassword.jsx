"use client"

import { useState } from "react"
import { useRouter } from "next/router"
import Link from "next/link"
import { Loader } from "lucide-react"

export default function ForgotPassword() {
  const [email, setEmail] = useState("")
  const [message, setMessage] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const router = useRouter()

  const handleSubmit = async (e) => {
    e.preventDefault()
    setMessage("")
    setIsLoading(true)

    // Validar el formato del correo electrónico
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      setMessage("Por favor, ingrese un correo electrónico válido.")
      setIsLoading(false)
      return
    }

    try {
      // Aquí iría la llamada real a tu API para verificar el correo y enviar el enlace de recuperación
      await new Promise((resolve) => setTimeout(resolve, 2000)) // Simula una demora de 2 segundos

      // Simular que el correo existe en el sistema
      if (email === "usuario@ejemplo.com") {
        setMessage("Se ha enviado un enlace de recuperación a su correo electrónico.")
        router.push("/resetpassword")
      } else {
        setMessage("No existe una cuenta asociada a este correo electrónico.")
      }
    } catch (err) {
      setMessage("Ocurrió un error. Por favor, intente nuevamente.")
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">Recuperar contraseña</h2>
      </div>

      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
        <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
          <form className="space-y-6" onSubmit={handleSubmit}>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                Correo electrónico
              </label>
              <div className="mt-1">
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
            </div>

            {message && (
              <div className={`text-sm ${message.includes("error") ? "text-red-600" : "text-green-600"}`}>
                {message}
              </div>
            )}

            <div>
              <button
                type="submit"
                className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                disabled={isLoading}
              >
                {isLoading ? <Loader className="animate-spin h-5 w-5 mr-3" /> : "Enviar enlace de recuperación"}
              </button>
            </div>
          </form>

          <div className="mt-6">
            <Link href="/HU/2">
              <div className="font-medium text-indigo-600 hover:text-indigo-500">Volver al inicio de sesión</div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

