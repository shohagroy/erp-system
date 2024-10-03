import { LinearProgress } from "@mui/material";
import React, { Suspense } from "react";

export const metadata = {
  title: "ERP-System | Login",
  description: "Login page",
};

interface LayoutProps {
  children: React.ReactNode;
}
const layout: React.FC<LayoutProps> = ({ children }) => {
  return <Suspense fallback={<LinearProgress />}>{children}</Suspense>;
};

export default layout;
