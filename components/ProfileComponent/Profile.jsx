"use client";

import { useState } from "react";
import Link from "next/link";
import Logo from "../../public/Image.jpg";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/Avatar";
import Button from "../ui/Button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../ui/Card";
import Input from "../ui/Input";
import Label from "../ui/Label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../ui/Tabs";
import { User, Mail, Phone, Key } from "lucide-react";
import { useRouter } from "next/router";
import ReservationManagement from "../ReservationComponents/Reservation";

const UserProfile = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [userData, setUserData] = useState({
    name: "Ana García",
    email: "ana.garcia@example.com",
    phone: "+34 123 456 789",
    avatarUrl: Logo,
    memberSince: "Enero 2022",
  });
  const { router } = useRouter();

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleSave = () => {
    // Aquí iría la lógica para guardar los cambios en el backend
    setIsEditing(false);
  };

  const handleClick = () => {
    router.push("/resetpassword");
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <Card className="max-w-4xl mx-auto">
        <CardHeader className="flex flex-col sm:flex-row items-center justify-between">
          <div className="flex flex-col sm:flex-row items-center">
            <Avatar className="w-24 h-24 mb-4 sm:mb-0 sm:mr-4">
              <AvatarImage src={userData.avatarUrl} alt={userData.name} />
              <AvatarFallback>{userData.name.charAt(0)}</AvatarFallback>
            </Avatar>
            <div className="text-center sm:text-left">
              <CardTitle className="text-2xl font-bold">
                {userData.name}
              </CardTitle>
              <CardDescription>
                Miembro desde {userData.memberSince}
              </CardDescription>
            </div>
          </div>
          {!isEditing && (
            <Button onClick={handleEdit} className="mt-4 sm:mt-0">
              Editar Perfil
            </Button>
          )}
        </CardHeader>
        <CardContent>
          <Tabs defaultValue="personal-info" className="w-full">
            <TabsList className="grid w-full grid-cols-2">
              <TabsTrigger value="personal-info">
                Información Personal
              </TabsTrigger>
              <TabsTrigger value="reservations">
                Gestión de Reservas
              </TabsTrigger>
            </TabsList>
            <TabsContent value="personal-info">
              <form className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="name">Nombre</Label>
                  <div className="flex items-center">
                    <User className="w-5 h-5 text-gray-500 mr-2" />
                    <Input
                      id="name"
                      name="name"
                      value={userData.name}
                      onChange={handleChange}
                      disabled={!isEditing}
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Correo Electrónico</Label>
                  <div className="flex items-center">
                    <Mail className="w-5 h-5 text-gray-500 mr-2" />
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={userData.email}
                      onChange={handleChange}
                      disabled={!isEditing}
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="phone">Número de Teléfono</Label>
                  <div className="flex items-center">
                    <Phone className="w-5 h-5 text-gray-500 mr-2" />
                    <Input
                      id="phone"
                      name="phone"
                      value={userData.phone}
                      onChange={handleChange}
                      disabled={!isEditing}
                    />
                  </div>
                </div>
                {isEditing && (
                  <Button onClick={handleSave} className="w-full">
                    Guardar Cambios
                  </Button>
                )}
              </form>
              <div className="mt-6">
                <Link href="/resetpassword">
                  <Button
                    variant="outline"
                    className="w-full flex items-center justify-center"
                  >
                    <Key className="w-5 h-5 mr-2" />
                    Cambiar Contraseña
                  </Button>
                </Link>
              </div>
            </TabsContent>
            <TabsContent value="reservations">
              <ReservationManagement />
            </TabsContent>
          </Tabs>
        </CardContent>
      </Card>
    </div>
  );
};

export default UserProfile;
