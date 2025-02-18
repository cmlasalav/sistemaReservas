"use client";

import { useState } from "react";
import Logo from "../../public/Image.jpg";
import { useRouter } from "next/router";
import Image from "next/image";
import Link from "next/link";
import Button  from "../ui/Button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../ui/Card";
import {
  Facebook,
  Instagram,
  Twitter,
  Phone,
  Mail,
  MapPin,
} from "lucide-react";

const HotelHomePage = ({ isLoggedIn }) => {
  const router = useRouter();
  const [rooms] = useState([
    {
      id: 1,
      name: "Deluxe Suite",
      description: "Spacious suite with city view",
      price: 250,
      image: Logo,
    },
    {
      id: 2,
      name: "Executive Room",
      description: "Elegant room for business travelers",
      price: 180,
      image: Logo,
    },
    {
      id: 3,
      name: "Family Suite",
      description: "Perfect for family vacations",
      price: 300,
      image: Logo,
    },
    {
      id: 4,
      name: "Ocean View Room",
      description: "Breathtaking views of the sea",
      price: 220,
      image: Logo,
    },
  ]);

  return (
    <div className="flex flex-col min-h-screen">
      <header className="bg-white shadow-md">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <Link href="/">
            <Image
              src={Logo}
              alt="Hotel Logo"
              width={150}
              height={50}
            />
          </Link>
          <nav>
            <Button
              variant="outline"
              className="mr-4"
              onClick={() => router.push("/HU/7")}
            >
              Search Room
            </Button>
            {isLoggedIn ? (
              <Button onClick={() => router.push("/HU/14")}>Profile</Button>
            ) : (
              <Button onClick={() => router.push("/HU/1")}>Register</Button>
            )}
          </nav>
        </div>
      </header>

      <main className="flex-grow container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold text-center mb-8 text-gray-800">
          Welcome to Our Luxury Hotel
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {rooms.map((room) => (
            <Card
              key={room.id}
              className="overflow-hidden hover:shadow-lg transition-shadow duration-300"
            >
              <Image
                src={room.image || "/placeholder.svg"}
                alt={room.name}
                width={300}
                height={200}
                className="w-full h-48 object-cover"
              />
              <CardHeader>
                <CardTitle>{room.name}</CardTitle>
                <CardDescription>{room.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-2xl font-bold text-green-600">
                  ${room.price} / night
                </p>
              </CardContent>
              <CardFooter>
                <Button
                  className="w-full"
                  onClick={() => router.push(`/room/${room.id}`)}
                >
                  View Details
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </main>

      <footer className="bg-gray-800 text-white py-8">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-xl font-semibold mb-4">Contact Us</h3>
              <p className="flex items-center mb-2">
                <Phone className="mr-2" size={18} /> +1 (555) 123-4567
              </p>
              <p className="flex items-center mb-2">
                <Mail className="mr-2" size={18} /> info@luxuryhotel.com
              </p>
              <p className="flex items-center">
                <MapPin className="mr-2" size={18} /> 123 Luxury Ave, Paradise
                City, 12345
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4">Follow Us</h3>
              <div className="flex space-x-4">
                <a href="#" className="hover:text-blue-400">
                  <Facebook size={24} />
                </a>
                <a href="#" className="hover:text-pink-400">
                  <Instagram size={24} />
                </a>
                <a href="#" className="hover:text-blue-300">
                  <Twitter size={24} />
                </a>
              </div>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4">Legal</h3>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="hover:underline">
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline">
                    Terms of Service
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="mt-8 text-center text-sm">
            <p>&copy; 2023 Luxury Hotel. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default HotelHomePage;
