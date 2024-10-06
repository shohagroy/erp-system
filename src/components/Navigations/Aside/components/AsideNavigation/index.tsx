import theme from "@/theme";
import { Box, Button, Typography } from "@mui/material";
import React from "react";
import SwapVertIcon from "@mui/icons-material/SwapVert";
import ManageSearchIcon from "@mui/icons-material/ManageSearch";
import ManageHistoryIcon from "@mui/icons-material/ManageHistory";
import EditNoteIcon from "@mui/icons-material/EditNote";
import GroupAddIcon from "@mui/icons-material/GroupAdd";
import DifferenceIcon from "@mui/icons-material/Difference";

interface IProps {
  path: string;
}

interface ILink {
  label: string;
  link: string;
  icon?: string;
}

interface INavigationItem {
  path: string;
  label: string;
  items: {
    label: string;
    links: ILink[];
  }[];
}
const AsideNavigation: React.FC<IProps> = ({ path }) => {
  const navigationIcons: Record<string, React.ReactNode> = {
    swap: (
      <SwapVertIcon
        sx={{
          rotate: "90deg",
        }}
      />
    ),
    search: <ManageSearchIcon />,
    setting: <ManageHistoryIcon />,
    edit: <EditNoteIcon />,
    user: <GroupAddIcon />,
    difference: <DifferenceIcon />,
  };

  const navigationLinks: INavigationItem[] = [
    {
      path: "/sales",
      label: "Sales Transactions",
      items: [
        {
          label: "Transactions",
          links: [
            { label: "Sales Quotation Entry", link: "/", icon: "swap" },
            { label: "Sales Order Entry", link: "/", icon: "swap" },
            { label: "Direct Delivery", link: "/", icon: "swap" },
            { label: "Direct Invoice", link: "/", icon: "swap" },
            { label: "Customer Payments", link: "/", icon: "swap" },
            { label: "Customer Credit Notes", link: "/", icon: "swap" },
          ],
        },
        {
          label: " Inquiries and Reports",
          links: [
            { label: "Sales Quotation Inquiry", link: "/", icon: "search" },
            { label: "Sales Order Inquiry", link: "/", icon: "search" },
            { label: "Transaction Inquiry", link: "/", icon: "search" },
            { label: "Sales Reports", link: "/", icon: "search" },
          ],
        },
        {
          label: "Maintenance",
          links: [{ label: "Manage Customers", link: "/", icon: "setting" }],
        },
      ],
    },
    {
      path: "/purchase",
      label: "Purchase Transactions",
      items: [
        {
          label: "Transactions",
          links: [
            { label: "Purchase Order Entry", link: "/", icon: "swap" },
            { label: "Direct Invoice", link: "/", icon: "swap" },
            { label: "Supplier Payments", link: "/", icon: "swap" },
            { label: "Supplier Credit Notes", link: "/", icon: "swap" },
          ],
        },
        {
          label: " Inquiries and Reports",
          links: [
            { label: "Supplier Order Inquiry", link: "/", icon: "search" },
            { label: "Transaction Inquiry", link: "/", icon: "search" },
            { label: "Purchase Reports", link: "/", icon: "search" },
          ],
        },
        {
          label: "Maintenance",
          links: [{ label: "Manage Supplier", link: "/", icon: "setting" }],
        },
      ],
    },
    {
      path: "/inventory",
      label: "Item & Inventory",
      items: [
        {
          label: "Transactions",
          links: [{ label: "Inventory Adjustments", link: "/", icon: "swap" }],
        },
        {
          label: "Inquiries and Reports",
          links: [
            { label: "Inventory Item Status", link: "/", icon: "search" },
            { label: "Inventory Reports", link: "/", icon: "search" },
          ],
        },
        {
          label: "Maintenance",
          links: [{ label: "Manage Items", link: "/", icon: "setting" }],
        },
      ],
    },
    {
      path: "/ledger",
      label: "Banking & Ledger",
      items: [
        {
          label: "Transactions",
          links: [
            { label: "Payments", link: "/", icon: "swap" },
            { label: "Deposits", link: "/", icon: "swap" },
            {
              label: "Bank Account Transfers",
              link: "/",
              icon: "swap",
            },
            { label: "Budget Entry", link: "/", icon: "swap" },
          ],
        },
        {
          label: " Inquiries and Reports",
          links: [
            { label: "Banking Reports", link: "/", icon: "search" },
            { label: "General Ledger Reports", link: "/", icon: "search" },
          ],
        },
        {
          label: "Maintenance",
          links: [{ label: "Manage Bank Account", link: "/", icon: "setting" }],
        },
      ],
    },
    {
      path: "/setup",
      label: "Settings",
      items: [
        {
          label: "Company Setup",
          links: [
            { label: "Company Setup", link: "/", icon: "difference" },
            { label: "User Accounts Setup", link: "/", icon: "user" },
            { label: "Access Setup", link: "/", icon: "swap" },
            { label: "Fiscal Years", link: "/", icon: "edit" },
          ],
        },
      ],
    },
  ];

  const selectedLinks =
    navigationLinks?.find((item) => item?.path === path) ?? navigationLinks[0];

  return (
    <Box>
      <Box
        sx={{
          padding: "0.5rem",
          borderBottom: `1px solid ${theme?.colorConstants?.borderColor}`,
        }}
      >
        <Typography
          sx={{
            fontSize: "1rem",
            fontWeight: "600",
            textAlign: "center",
          }}
        >
          {selectedLinks?.label}
        </Typography>
      </Box>

      <Box
        sx={{
          width: "100%",
          height: "90vh",
          bgcolor: theme?.colorConstants?.borderedGray,
        }}
      >
        {selectedLinks?.items?.map((item, i) => {
          return (
            <Box key={i}>
              <Typography
                sx={{
                  color: theme?.colorConstants?.black,
                  paddingX: "0.5rem",
                  borderTop:
                    i !== 0 ? `1px solid ${theme?.colorConstants?.black}` : "",
                  fontSize: "0.8rem",
                  lineHeight: "28px",
                }}
              >
                {item?.label}
              </Typography>

              {item?.links?.map((link, i) => {
                return (
                  <Button
                    key={i}
                    size="small"
                    startIcon={navigationIcons[link?.icon as string]}
                    sx={{
                      textTransform: "none",
                      width: "100%",
                      color: theme?.colorConstants?.darkGray,
                      fontSize: "0.7rem",
                      display: "flex",
                      justifyContent: "flex-start",
                      alignItems: "center",
                      paddingX: "1rem",
                    }}
                  >
                    {link?.label.slice(0, 25)}
                  </Button>
                );
              })}
            </Box>
          );
        })}
      </Box>
    </Box>
  );
};

export default AsideNavigation;
