import React from "react";
import {
  Document,
  Page,
  Text,
  View,
  StyleSheet,
  pdf,
} from "@react-pdf/renderer";
import { format } from "date-fns";
import { es } from "date-fns/locale";

const styles = StyleSheet.create({
  page: {
    padding: 30,
    fontFamily: "Helvetica",
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
    textAlign: "center",
    color: "#334155",
  },
  subtitle: {
    fontSize: 14,
    marginBottom: 15,
    color: "#64748b",
  },
  table: {
    display: "table",
    width: "100%",
    marginBottom: 20,
  },
  tableRow: {
    flexDirection: "row",
    borderBottomWidth: 1,
    borderBottomColor: "#E5E7EB",
    borderBottomStyle: "solid",
    alignItems: "center",
    minHeight: 35,
    textAlign: "center",
  },
  tableHeader: {
    backgroundColor: "#F3F4F6",
  },
  tableCell: {
    flex: 1,
    padding: 8,
    fontSize: 10,
  },
  footer: {
    position: "absolute",
    bottom: 30,
    left: 30,
    right: 30,
    fontSize: 10,
    textAlign: "center",
    color: "#94a3b8",
  },
});

// Mock data for reservations
const mockReservations = [
  {
    id: "1",
    roomType: "Suite Deluxe",
    guestName: "Carlos Rodríguez",
    checkIn: new Date("2024-03-15"),
    checkOut: new Date("2024-03-20"),
    services: ["Desayuno buffet", "Spa", "Parking"],
    total: 1499.95,
  },
  {
    id: "2",
    roomType: "Habitación Ejecutiva",
    guestName: "Ana María López",
    checkIn: new Date("2024-03-18"),
    checkOut: new Date("2024-03-22"),
    services: ["Desayuno continental", "Wifi Premium"],
    total: 799.96,
  },
  {
    id: "3",
    roomType: "Suite Presidencial",
    guestName: "Roberto García",
    checkIn: new Date("2024-03-20"),
    checkOut: new Date("2024-03-25"),
    services: ["Servicio de habitaciones 24h", "Traslado al aeropuerto", "Spa"],
    total: 2499.95,
  },
  {
    id: "4",
    roomType: "Habitación Estándar",
    guestName: "Laura Martínez",
    checkIn: new Date("2024-03-21"),
    checkOut: new Date("2024-03-23"),
    services: ["Desayuno continental"],
    total: 299.98,
  },
];

const ReportDocument = () => (
  <Document>
    <Page size="A4" style={styles.page}>
      <Text style={styles.title}>Informe de Reservas del Hotel</Text>
      <Text style={styles.subtitle}>
        Generado el{" "}
        {format(new Date(), "d 'de' MMMM 'de' yyyy", { locale: es })}
      </Text>

      <View style={styles.table}>
        <View style={[styles.tableRow, styles.tableHeader]}>
          <Text style={styles.tableCell}>Habitación</Text>
          <Text style={styles.tableCell}>Huésped</Text>
          <Text style={styles.tableCell}>Check-in</Text>
          <Text style={styles.tableCell}>Check-out</Text>
          <Text style={styles.tableCell}>Servicios</Text>
          <Text style={styles.tableCell}>Total</Text>
        </View>

        {mockReservations.map((reservation) => (
          <View key={reservation.id} style={styles.tableRow}>
            <Text style={styles.tableCell}>{reservation.roomType}</Text>
            <Text style={styles.tableCell}>{reservation.guestName}</Text>
            <Text style={styles.tableCell}>
              {format(reservation.checkIn, "dd/MM/yyyy")}
            </Text>
            <Text style={styles.tableCell}>
              {format(reservation.checkOut, "dd/MM/yyyy")}
            </Text>
            <Text style={styles.tableCell}>
              {reservation.services.join(", ")}
            </Text>
            <Text style={styles.tableCell}>
              €{reservation.total.toFixed(2)}
            </Text>
          </View>
        ))}
      </View>

      <Text style={styles.footer}>
        Este informe es confidencial y para uso interno del hotel únicamente.
      </Text>
    </Page>
  </Document>
);

export const downloadPDF = async () => {
  const blob = await pdf(<ReportDocument />).toBlob();
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.download = `informe-reservas-${format(new Date(), "dd-MM-yyyy")}.pdf`;
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  URL.revokeObjectURL(url);
};
