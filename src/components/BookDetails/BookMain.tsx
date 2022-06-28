import { Box, Button, Divider, Grid, Typography } from "@mui/material";
import { SaleInfo, VolumeInfo } from "../../types/Books";
import ParsedDate from "../ParsedDate/ParsedDate";

interface Props {
  volumeInfo?: VolumeInfo;
  saleInfo?: SaleInfo;
}

function BookMain({ volumeInfo, saleInfo }: Props) {
  return (
    <Box>
      <Grid container>
        <Grid item sm={12} md={6}>
          <Typography variant="h2">{volumeInfo?.title}</Typography>
          {volumeInfo?.subtitle && (
            <Typography variant="subtitle1">{volumeInfo?.subtitle}</Typography>
          )}
          <Typography variant="h5">
            Por{" "}
            {volumeInfo?.authors.map(
              (author, i) => `${author} ${i > 0 ? ", " : ""}`
            )}
          </Typography>
          <Box mt={2}>
            Lançado em{" "}
            <ParsedDate date={new Date(volumeInfo?.publishedDate!)} />
          </Box>
          <Box mt={9} pl={1}>
            Preço: {saleInfo?.listPrice?.amount}{" "}
            {saleInfo?.listPrice?.currencyCode}
          </Box>
          <Box mt={1}>
            <Button
              onClick={() =>
                window.open(saleInfo?.buyLink ?? "", "_blank")?.focus()
              }
            >
              Comprar
            </Button>
          </Box>
        </Grid>
        <Grid item sm={12} md={6}>
          <Box
            component="img"
            sx={{
              height: 272,
              width: 350,
              mx: "auto",
              display: "block",
              mt: { sm: 2, md: 0 },
              maxHeight: { xs: 272, md: 272 },
              maxWidth: { xs: 224, md: 250 },
            }}
            alt={volumeInfo?.title}
            src={volumeInfo?.imageLinks.thumbnail}
          />
        </Grid>
      </Grid>
      <Divider sx={{ mt: 3 }} />
    </Box>
  );
}

export default BookMain;
