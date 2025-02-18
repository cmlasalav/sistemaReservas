"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import Button from "../ui/Button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../ui/Card";
import { Checkbox } from "../ui/Checkbox";
import Label from "../ui/Label";

const BookingPage = ({ roomId, basePrice }) => {
  const router = useRouter();
  const [totalPrice, setTotalPrice] = useState(basePrice);
  const [selectedServices, setSelectedServices] = useState([]);
  const [services] = useState([
    {
      id: 1,
      name: "Breakfast",
      description: "Daily breakfast buffet",
      price: 15,
    },
    {
      id: 2,
      name: "Airport Transfer",
      description: "Round-trip airport transfer",
      price: 50,
    },
    {
      id: 3,
      name: "Spa Access",
      description: "Daily access to spa facilities",
      price: 30,
    },
    {
      id: 4,
      name: "Late Check-out",
      description: "Check-out extended until 2 PM",
      price: 20,
    },
  ]);

  useEffect(() => {
    const servicesTotal = selectedServices.reduce(
      (total, service) => total + service.price,
      0
    );
    setTotalPrice(basePrice + servicesTotal);
  }, [selectedServices, basePrice]);

  const handleServiceToggle = (service) => {
    setSelectedServices((prev) =>
      prev.some((s) => s.id === service.id)
        ? prev.filter((s) => s.id !== service.id)
        : [...prev, service]
    );
  };

  const handleProceedToPayment = () => {
    router.push("/HU/3");
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Book Your Stay</h1>
      <Card className="mb-6">
        <CardHeader>
          <CardTitle>Additional Services</CardTitle>
          <CardDescription>
            Enhance your stay with our premium services
          </CardDescription>
        </CardHeader>
        <CardContent>
          {services.map((service) => (
            <div key={service.id} className="flex items-center space-x-2 mb-4">
              <Checkbox
                id={`service-${service.id}`}
                checked={selectedServices.some((s) => s.id === service.id)}
                onCheckedChange={() => handleServiceToggle(service)}
              />
              <div className="grid gap-1.5 leading-none">
                <Label htmlFor={`service-${service.id}`}>
                  {service.name} - ${service.price}
                </Label>
                <p className="text-sm text-muted-foreground">
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </CardContent>
      </Card>
      <Card>
        <CardFooter>
          <Button onClick={handleProceedToPayment} className="w-full">
            Proceed to Payment
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
};

export default BookingPage;
