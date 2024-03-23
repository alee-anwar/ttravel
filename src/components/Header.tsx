"use client";

import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import AdbIcon from "@mui/icons-material/Adb";
import Stack from "@mui/material/Stack";
import Logo from "../../public/T-TRAVEL.png";

const pages = ["All Services", "Support", "Partner Login", "Language", "T KZT"];

function ResponsiveAppBar() {
  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(
    null
  );
  const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(
    null
  );

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <AppBar
      position="static"
      sx={{
        bgcolor: "transparent",
        color: "#4d4d4d",
        py: 2,
        boxShadow: "none",
      }}
    >
      <Container maxWidth="lg">
        <Toolbar disableGutters>
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="#app-bar-with-responsive-menu"
            sx={{
              mr: 2,
              display: { xs: "none", md: "flex" },
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
            }}
          >
            <Box
              component="img"
              sx={{ height: 54 }}
              alt="Logo"
              src={"/T-TRAVEL.png"}
            />
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
              }}
            >
              {pages.map((page) => (
                <MenuItem key={page} onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">{page}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>

          {/* <AdbIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} /> */}

          <Typography
            variant="h5"
            noWrap
            component="a"
            href="#app-bar-with-responsive-menu"
            sx={{
              mr: 2,
              display: { xs: "flex", md: "none" },
              flexGrow: 1,
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
            }}
          >
            Ttravel
          </Typography>

          <Box
            sx={{
              flexGrow: 1,
              display: { xs: "none", md: "flex" },
              justifyContent: "center",
              gap: 5,
            }}
          >
            {pages.map((page) => (
              <Button
                key={page}
                onClick={handleCloseNavMenu}
                sx={{
                  my: 2,
                  display: "block",
                  color: "#4d4d4d",
                }}
              >
                {page === "Language" ? (
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      gap: 1,
                    }}
                  >
                    <svg
                      width="15"
                      height="16"
                      viewBox="0 0 15 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M7.5 0.6875C6.05373 0.6875 4.63993 1.11637 3.4374 1.91988C2.23486 2.72339 1.2976 3.86544 0.744134 5.20163C0.190668 6.53781 0.0458565 8.00811 0.328011 9.4266C0.610165 10.8451 1.30661 12.148 2.32928 13.1707C3.35196 14.1934 4.65492 14.8898 6.07341 15.172C7.49189 15.4541 8.96219 15.3093 10.2984 14.7559C11.6346 14.2024 12.7766 13.2651 13.5801 12.0626C14.3836 10.8601 14.8125 9.44628 14.8125 8C14.8105 6.06123 14.0394 4.20246 12.6685 2.83154C11.2975 1.46063 9.43877 0.689547 7.5 0.6875ZM13.6615 7.4375H10.8609C10.7618 5.43641 10.1388 3.53727 9.09469 2.02344C10.3176 2.35175 11.4107 3.04652 12.227 4.01437C13.0434 4.98222 13.544 6.17677 13.6615 7.4375ZM7.5 14.1798C6.18305 12.7545 5.3843 10.7345 5.26618 8.5625H9.73383C9.61571 10.733 8.81696 12.7545 7.5 14.1798ZM5.26618 7.4375C5.3843 5.26695 6.18024 3.24547 7.5 1.82023C8.81696 3.24547 9.61571 5.26555 9.73383 7.4375H5.26618ZM5.90532 2.02344C4.86118 3.53727 4.23821 5.43641 4.13907 7.4375H1.33852C1.456 6.17677 1.95657 4.98222 2.77296 4.01437C3.58935 3.04652 4.68243 2.35175 5.90532 2.02344ZM1.33852 8.5625H4.13907C4.23821 10.5636 4.86118 12.4627 5.90532 13.9766C4.68243 13.6483 3.58935 12.9535 2.77296 11.9856C1.95657 11.0178 1.456 9.82323 1.33852 8.5625ZM9.09469 13.9766C10.1388 12.4606 10.7618 10.5615 10.8609 8.5625H13.6615C13.544 9.82323 13.0434 11.0178 12.227 11.9856C11.4107 12.9535 10.3176 13.6483 9.09469 13.9766Z"
                        fill="#4D4D4D"
                      ></path>
                    </svg>
                    {page}
                  </Box>
                ) : page === "T KZT" ? (
                  <Box>
                    <Box
                      component="span"
                      sx={{
                        textDecoration: "overline",
                        fontSize: 12,
                        textDecorationThickness: 0,
                        textUnderlineOffset: 2,
                      }}
                    >
                      T
                    </Box>{" "}
                    KZT
                  </Box>
                ) : (
                  page
                )}
              </Button>
            ))}
          </Box>

          <Stack direction="row" spacing={2}>
            <Button variant="outlined">Login</Button>
            <Button variant="contained">Signup</Button>
          </Stack>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default ResponsiveAppBar;
