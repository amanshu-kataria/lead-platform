import React, { FC, ReactNode, useEffect } from "react";
import { useRouter } from "next/navigation";

interface AuthGuardProps {
  children: ReactNode;
}

export const AuthGuard: FC<AuthGuardProps> = ({ children }) => {
  const router = useRouter();
  const isAuthenticated = localStorage.getItem("isAuthenticated");

  useEffect(() => {
    if (!isAuthenticated) {
      router.push("/login");
    }
  }, []);

  if (!isAuthenticated) {
    return null;
  }

  return <>{children}</>;
};
