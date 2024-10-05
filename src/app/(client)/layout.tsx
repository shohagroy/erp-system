import Aside from "@/components/Navigations/Aside";
import Header from "@/components/Navigations/Header";
import theme from "@/theme";
import { Box } from "@mui/material";
import React from "react";

interface LayoutProps {
  children: React.ReactNode;
}
const MainLayout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <Box
      sx={{
        height: "100vh",
        width: "100vw",
        bgcolor: theme.colorConstants?.whitishGray,
      }}
    >
      <Header />
      <Box
        sx={{
          display: "flex",
        }}
      >
        <Aside />
        <Box>{children}</Box>
      </Box>
    </Box>
  );
};

export default MainLayout;
