import React from "react";
import { ReactNode } from "react";

type AlertType = "success" | "error" | "info";

interface Props {
  children: ReactNode;
  title: String;
  type: AlertType;
}

const alertStyles: Record<AlertType, string> = {
  success: "bg-green-100 text-green-800 border-green-300",
  error: "bg-red-100 text-red-800 border-red-300",
  info: "bg-blue-100 text-blue-800 border-blue-300",
};

const Alert = ({ children, title, type }: Props) => {
  return (
    <div
      className={`border-l-4 p-4 ${alertStyles[type]} rounded-md`}
      role="alert"
    >
      <h4 className="text-lg font-semibold">{title}</h4>
      <p className="mt-1 text-sm">{children}</p>
    </div>
  );
};

export default Alert;
