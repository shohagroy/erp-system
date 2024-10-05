"use client";

import theme from "@/theme";
import { Box, IconButton, Stack, Typography } from "@mui/material";
import React, { useState } from "react";

import MenuIcon from "@mui/icons-material/Menu";
import MenuOpenIcon from "@mui/icons-material/MenuOpen";
import AddIcon from "@mui/icons-material/Add";
import PersonIcon from "@mui/icons-material/Person";

import Image from "next/image";
import { images } from "@/assets/images";

interface IProps {
  none: string;
}

const Header: React.FC<IProps> = () => {
  const [openAside, setOpenAside] = useState(true);

  return (
    <Box sx={{ bgcolor: theme?.colorConstants?.primaryColor }}>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            padding: "0.5rem",
            position: "relative",
          }}
        >
          <Image
            src={images.imperialLogo}
            height={50}
            width={150}
            alt="logo"
            layout="intrinsic"
          />
          <Box
            marginX={"1rem"}
            sx={{
              bgcolor: theme?.colorConstants?.primaryColor,
              position: "absolute",
              width: "100%",
              height: "100%",
              left: openAside ? "150px" : "25px",
              top: 0,
              padding: "0.3rem",
              transition: "left 0.3s ease, width 0.3s ease",
            }}
          >
            <IconButton onClick={() => setOpenAside(!openAside)}>
              {openAside ? (
                <MenuOpenIcon
                  sx={{
                    color: "white",
                  }}
                />
              ) : (
                <MenuIcon
                  sx={{
                    color: "white",
                  }}
                />
              )}
            </IconButton>
          </Box>
        </Box>

        <Box
          sx={{
            padding: "0.5rem",
          }}
        >
          <Box>
            <Stack direction="row" gap={"1rem"}>
              <IconButton size="small">
                <AddIcon
                  sx={{
                    color: "white",
                  }}
                />
              </IconButton>

              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                }}
              >
                <IconButton size="small">
                  <PersonIcon
                    sx={{
                      color: "white",
                    }}
                  />
                </IconButton>

                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "end",
                    gap: "0.2rem",
                    marginLeft: "0.5rem",
                  }}
                >
                  <Typography
                    sx={{
                      fontSize: "0.7rem",
                      fontWeight: 600,
                      color: "white",
                      lineHeight: "0.5rem",
                    }}
                  >
                    Shohag
                  </Typography>
                  <Typography
                    sx={{
                      fontSize: "0.5rem",
                      fontWeight: 500,
                      color: "white",
                      lineHeight: "0.8rem",
                    }}
                  >
                    Admin
                  </Typography>
                </Box>
              </Box>
            </Stack>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Header;
