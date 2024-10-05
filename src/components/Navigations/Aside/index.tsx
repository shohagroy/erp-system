"use client";

import theme from "@/theme";
import { Box, Paper } from "@mui/material";
import Link from "next/link";
import React from "react";

interface IProps {
  children: React.ReactNode;
}

const Aside: React.FC<IProps> = ({ children }) => {
  const navigationItems = [
    {
      name: "Sales",
      icon: null,
      link: "/sales",
    },
    {
      name: "Item & Inventory",
      icon: null,
      link: "/inventory",
    },
    {
      name: "Purchase",
      icon: null,
      link: "/purchase",
    },
    {
      name: "Banking & Ledger",
      icon: null,
      link: "/sales",
    },
    {
      name: "Setup",
      icon: null,
      link: "/setup",
    },
  ];

  return (
    <Box>
      <Box
        sx={{
          bgcolor: "blue",
          width: "200px",
          position: "fixed",
          height: "100vh",
          padding: "1rem",
        }}
      >
        menu
      </Box>
      <Box
        sx={{
          marginLeft: "200px",
          padding: "1rem",
          borderBottom: `1px solid ${theme.colorConstants?.borderColor}`,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {navigationItems?.map((item, i) => {
          return (
            <Link href={item?.link} key={i}>
              <Paper sx={{ padding: "0.5rem", margin: "0 0.5rem" }}>
                {item?.name}
              </Paper>
            </Link>
          );
        })}
      </Box>
      <Box
        sx={{
          marginLeft: "200px",
        }}
      >
        {children}
      </Box>
    </Box>
  );
};

export default Aside;
