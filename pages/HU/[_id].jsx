import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import RegisterForm from "@components/AuthComponents/register";
import LoginForm from "@components/AuthComponents/login";
import Page404 from "../404";

export default function HUPage() {
  const router = useRouter();
  const [id, setId] = useState(null);
  const validIds = Array.from({ length: 17 }, (_, i) => (i + 1).toString());

  useEffect(() => {
    if (router.isReady) {
      setId(router.query._id);
    }
  }, [router.isReady, router.query._id]);

  if (!id) return <p>Cargando...</p>;

  if (!validIds.includes(id)) {
    return <Page404 />;
  }

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Historia de Usuario {id}</h1>
      {id === "1" && <RegisterForm />}
      {id === "2" && <LoginForm />}
    </div>
  );
}
