"use client";

import Aside from "@/components/Navigations/Aside";
import Header from "@/components/Navigations/Header";
import theme from "@/theme";
import { Box } from "@mui/material";
import React, { useState } from "react";

interface LayoutProps {
  children: React.ReactNode;
}
const MainLayout: React.FC<LayoutProps> = ({ children }) => {
  const [openAside, setOpenAside] = useState(true);

  return (
    <Box
      sx={{
        height: "100vh",
        width: "100vw",
        bgcolor: theme.colorConstants?.whitishGray,
        position: "relative",
      }}
    >
      <Header openAside={openAside} setOpenAside={setOpenAside} />
      <Aside openAside={openAside}>{children}</Aside>
    </Box>
  );
};

export default MainLayout;
