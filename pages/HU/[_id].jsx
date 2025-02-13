import { useRouter } from "next/router";
import RegisterForm from "../../components/AuthComponents/register";

export default function HUPage() {
  const router = useRouter();
  const { _id } = router.query;
  console.log(_id);

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Historia de Usuario {_id}</h1>
      {_id === "1" && <RegisterForm />}
      {_id !== "1" && <p>Contenido para HU_{_id} (por implementar)</p>}
    </div>
  );
}
