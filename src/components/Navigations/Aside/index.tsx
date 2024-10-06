"use client";

import theme from "@/theme";
import { Box, Grid, Typography } from "@mui/material";
import Link from "next/link";
import React from "react";

interface IProps {
  children: React.ReactNode;
  openAside: boolean;
}

const Aside: React.FC<IProps> = ({ children, openAside }) => {
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
          left: openAside ? "0" : "-200px",
          marginY: "0.5rem",
          height: "100vh",
          padding: "1rem",
          transition: "all 0.3s ease",
        }}
      >
        menu
      </Box>
      <Box
        sx={{
          marginLeft: openAside ? "200px" : "0",
          borderBottom: `1px solid ${theme.colorConstants?.borderColor}`,
          paddingX: "2rem",
          transition: "all 0.3s ease",
        }}
      >
        <Grid container spacing={1} sx={{}}>
          {navigationItems?.map((item, i) => {
            return (
              <Grid key={i} item xs={2.4}>
                <Link href={item?.link}>
                  <Typography
                    sx={{
                      textAlign: "center",
                      padding: "0.5rem",
                    }}
                  >
                    {item?.name}
                  </Typography>
                </Link>
              </Grid>
            );
          })}
        </Grid>
      </Box>
      <Box
        sx={{
          marginLeft: openAside ? "200px" : "0",
          transition: "all 0.3s ease",
        }}
      >
        {children}
      </Box>
    </Box>
  );
};

export default Aside;
