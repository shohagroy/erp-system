import { LinearProgress } from "@mui/material";
import React, { Suspense } from "react";

interface LayoutProps {
  children: React.ReactNode;
}
const PageLayout: React.FC<LayoutProps> = ({ children }) => {
  return <Suspense fallback={<LinearProgress />}>{children}</Suspense>;
};

export default PageLayout;
