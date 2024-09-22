import { Stack } from "@mui/material";
import { category } from "../../constants";

const Category = () => {
  return (
    <Stack
      direction={"row"}
      alignItems={"center"}
      justifyContent={"space-between"}
      sx={{ overflowX: "scroll" }}
    >
      {category.map((item, index) => (
        <button key={index} className="category-btn">
          <span>{<item.icon />}</span>
          <span>{item.name}</span>
        </button>
      ))}
    </Stack>
  );
};

export default Category;
