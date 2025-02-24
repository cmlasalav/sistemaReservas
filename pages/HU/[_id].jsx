import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import RegisterForm from "@components/AuthComponents/register";
import LoginForm from "@components/AuthComponents/login";
import PayComponent from "@components/PayComponents/PayComponent";
import Review from "@components/ReviewComponents/Review";
import EmailNotifications from "@components/RemindersComponents/Reminder/NotificationsComponent";
import Reservation from "@components/ReservationComponents/Reservation";
import Page404 from "../404";
import RoomSearch from "../../components/RoomsComponents/RoomSearch";
import ProfilePage from "@components/ProfileComponent/Profile";
import Home from "@components/HomeComponents/Home";
import AdditionalServices from "@components/Services/AdditionalServices";
import AdminDashboard from "@components/AdminComponents/AdminDashboard";
import { Link } from "lucide-react";

export default function HUPage() {
  const router = useRouter();
  const [id, setId] = useState(null);
  const validIds = Array.from({ length: 17 }, (_, i) => (i + 1).toString());

  useEffect(() => {
    if (router.isReady) {
      setId(router.query._id);
    }
  }, [router.isReady, router.query._id]);

  if (id === "8") {
    router.push("/room/1");
  }

  if (!id) return <p>Cargando...</p>;

  if (!validIds.includes(id)) {
    return <Page404 />;
  }
  let idTitle;

  if (id === "10") {
    idTitle = "10 y 11";
  } else {
    idTitle = id;
  }

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Historia de Usuario {idTitle}</h1>
      {id === "1" && <RegisterForm />}
      {id === "2" && <LoginForm />}
      {id === "3" && <PayComponent />}
      {id === "4" && <Review />}
      {id === "5" && <EmailNotifications />}
      {id === "6" && <Reservation />}
      {id === "7" && <RoomSearch />}
      {id === "9" && <AdditionalServices />}
      {id === "10" && <AdminDashboard />}
      {id === "12" && <Home />}
      {id === "13" && <ProfilePage />}
    </div>
  );
}
