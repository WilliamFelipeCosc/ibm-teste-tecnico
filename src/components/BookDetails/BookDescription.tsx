import { Box, Typography } from "@mui/material";
import { VolumeInfo, SaleInfo } from "../../types/Books";

interface Props {
  volumeInfo?: VolumeInfo;
  saleInfo?: SaleInfo;
}

function BookDescription({ volumeInfo, saleInfo }: Props) {
  return (
    <Box mt={4}>
      <Typography>
        Categorias:{" "}
        {volumeInfo?.categories.map((cat, i) => `${cat} ${i > 0 ? " ," : ""}`)}
      </Typography>
      <Box mt={1}>
        <Typography>Páginas: {volumeInfo?.pageCount}</Typography>
      </Box>
      <Box mt={1}>
        <Typography>Idioma: {volumeInfo?.language}</Typography>
      </Box>
      <Box mt={2}>
        <Typography variant="h6">Descrição</Typography>
        <Typography sx={{ mt: 0.5 }}>{volumeInfo?.description}</Typography>
      </Box>
    </Box>
  );
}

export default BookDescription;
