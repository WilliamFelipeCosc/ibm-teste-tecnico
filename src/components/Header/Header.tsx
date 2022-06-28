import { Box } from "@mui/material";

const Header = () => {
  return (
    <Box
      component={"header"}
      width="100%"
      height={64}
      display="flex"
      alignItems={"center"}
      justifyContent="center"
      borderBottom={"1px solid #ccc"}
      textAlign="center"
      fontWeight={500}
    >
      Teste Técnico Front-End IBM - Google Books API
    </Box>
  );
};

export default Header;
