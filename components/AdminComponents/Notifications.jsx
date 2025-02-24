import React from "react";
import { CheckCircle, XCircle } from "lucide-react";


export function Notification({ message, type, onClose }) {
  const bgColor = type === "success" ? "bg-green-50" : "bg-red-50";
  const textColor = type === "success" ? "text-green-800" : "text-red-800";
  const Icon = type === "success" ? CheckCircle : XCircle;

  React.useEffect(() => {
    const timer = setTimeout(onClose, 3000);
    return () => clearTimeout(timer);
  }, [onClose]);

  return (
    <div
      className={`fixed bottom-4 right-4 ${bgColor} p-4 rounded-lg shadow-lg max-w-sm`}
    >
      <div className="flex items-center">
        <Icon className={`h-5 w-5 ${textColor} mr-2`} />
        <p className={`${textColor} text-sm`}>{message}</p>
      </div>
    </div>
  );
}
