"use client";

import theme from "@/theme";
import { Box, Grid, Typography } from "@mui/material";
import Link from "next/link";
import { usePathname } from "next/navigation";

import React from "react";
import AsideNavigation from "./components/AsideNavigation";

interface IProps {
  children: React.ReactNode;
  openAside: boolean;
}

const Aside: React.FC<IProps> = ({ children, openAside }) => {
  const pathName = usePathname();

  const navigationItems = [
    {
      name: "Sales",
      icon: null,
      link: "/sales",
    },
    {
      name: "Purchase",
      icon: null,
      link: "/purchase",
    },
    {
      name: "Item & Inventory",
      icon: null,
      link: "/inventory",
    },
    {
      name: "Banking & Ledger",
      icon: null,
      link: "/ledger",
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
          width: "200px",
          position: "fixed",
          left: openAside ? "0" : "-200px",
          height: "100vh",
          transition: "all 0.3s ease",
        }}
      >
        <AsideNavigation path={pathName} />
      </Box>
      <Box
        sx={{
          marginLeft: openAside ? "200px" : "0",
          borderBottom: `1px solid ${theme.colorConstants?.borderColor}`,
          transition: "all 0.3s ease",
        }}
      >
        <Grid container>
          {navigationItems?.map((item, i) => {
            return (
              <Grid key={i} item xs={2.4}>
                <Link
                  href={item?.link}
                  style={{
                    textDecoration: "none",
                  }}
                >
                  <Typography
                    sx={{
                      textAlign: "center",
                      padding: "0.5rem",
                      transition: "all 0.3s ease",
                      bgcolor:
                        pathName === item?.link
                          ? theme?.colorConstants?.darkGray
                          : "transparent",
                      fontWeight: pathName === item?.link ? "600" : "500",
                      color:
                        pathName === item?.link
                          ? "white"
                          : theme?.colorConstants?.darkGray,

                      "&:hover": {
                        bgcolor: theme?.colorConstants?.darkGray,
                        fontWeight: "600",
                        color: "white",
                      },
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
