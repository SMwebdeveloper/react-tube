import { Stack, Box, Typography } from "@mui/material";
import { logo } from "../../constants";
import { colors } from "../../constants/colors";
import { Link } from "react-router-dom";
import { SearchBar } from "../";
const Navbar = () => {
  return (
    <Stack
      direction={"row"}
      alignItems={"center"}
      justifyContent={"space-between"}
      p={2}
      sx={{
        position: "sticky",
        top: 0,
        zIndex: 999,
        background: colors.primary,
      }}
    >
      <Link to="/">
        <Typography
          variant="h3"
          sx={{ fontSize: "26px", fontWeight: "medium", color: "gray" }}
        >
          Sammitube
        </Typography>
      </Link>
      <SearchBar />
      <Box />
      {/* <img src={logo} alt="logo" /> */}
    </Stack>
  );
};

export default Navbar;
