import { Box, Button, Hidden } from "@mui/material";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";

interface Props {
  handlePage: (destinedPage: number) => void;
  page: number;
  totalPages: number;
}

function Paginator({ handlePage, page, totalPages }: Props) {
  const makePageButtons = () => {
    const arr = [];
    const responsiveArr = [];

    if (page > 5) {
      for (let x = page - 5; x < page + 6 && x <= totalPages; x++) {
        arr.push(x);
      }
    } else {
      for (let x = 1; x < 10; x++) {
        arr.push(x);
      }
    }

    if (page > 3) {
      for (let x = page - 1; x < page + 2 && x <= totalPages; x++) {
        responsiveArr.push(x);
      }
    } else {
      for (let x = 1; x < 5; x++) {
        responsiveArr.push(x);
      }
    }

    return { arr, responsiveArr };
  };
  return (
    <Box
      display={"flex"}
      alignItems="center"
      justifyContent={"center"}
      width="75%"
      mx="auto"
      color="GrayText"
    >
      <Button
        variant="text"
        color="primary"
        disabled={page <= 1}
        onClick={() => handlePage(page - 1)}
      >
        <ChevronLeftIcon />
      </Button>
      <Hidden mdDown>
        {makePageButtons().arr.map((x) => (
          <Button
            key={x}
            variant="text"
            color={x === page ? "primary" : "inherit"}
            onClick={() => handlePage(x)}
          >
            {x}
          </Button>
        ))}
      </Hidden>
      <Hidden mdUp>
        {makePageButtons().responsiveArr.map((x) => (
          <Button
            key={x}
            variant="text"
            color={x === page ? "primary" : "inherit"}
            onClick={() => handlePage(x)}
          >
            {x}
          </Button>
        ))}
      </Hidden>

      <Button
        disabled={page >= totalPages}
        variant="text"
        color="primary"
        onClick={() => handlePage(page + 1)}
      >
        <ChevronRightIcon />
      </Button>
    </Box>
  );
}

export default Paginator;
