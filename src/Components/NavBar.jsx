import AppBar from "@mui/material/AppBar";
import { useNavigate } from "react-router-dom";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";
function NavBar() {
  const navigate = useNavigate();
  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar
        component="nav"
        sx={{ alignItems: "center", justifyContent: "center" }}
      >
        <Toolbar>
          <Box
            sx={{
              display: { xs: "none", sm: "block" },
            }}
          >
            <Button sx={{ color: "#fff" }} onClick={() => navigate("/")}>
              ALL
            </Button>
            <Button sx={{ color: "#fff" }} onClick={() => navigate("/ai")}>
              AI & ML
            </Button>
            <Button
              sx={{ color: "#fff" }}
              onClick={() => navigate("/fullstack")}
            >
              FULL STACK DEVELOPMENT
            </Button>
            <Button
              sx={{ color: "#fff" }}
              onClick={() => navigate("/datascience")}
            >
              DATA SCIENCE
            </Button>

            <Button sx={{ color: "#fff" }} onClick={() => navigate("/Cyber")}>
              CYBER SECURITY
            </Button>
          </Box>
        </Toolbar>
      </AppBar>

      <Box component="main" sx={{ p: 3 }}></Box>
    </Box>
  );
}

export default NavBar;
