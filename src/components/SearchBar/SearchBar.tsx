import {
  Box,
  Button,
  Grid,
  IconButton,
  MenuItem,
  TextField,
} from "@mui/material";
import { ChangeEvent, Dispatch, FormEvent, SetStateAction } from "react";
import SearchIcon from "@mui/icons-material/Search";

interface Props {
  searchQuery: string;
  maxResults: number;
  setSearchQuery: Dispatch<SetStateAction<string>>;
  setMaxResults: Dispatch<SetStateAction<number>>;
  onSubmit?: (e: FormEvent) => void;
}

function SearchBar(props: Props) {
  const { searchQuery, maxResults, setSearchQuery, setMaxResults, onSubmit } =
    props;

  const maxPageOptions = [5, 10, 15, 20, 25, 30, 35, 40];

  const handleMaxResultsChange = (e: ChangeEvent<HTMLInputElement>) => {
    const value = parseInt(e?.target.value);

    setMaxResults(value > 40 ? 40 : value);
  };

  return (
    <Box width={"80%"} mx="auto" component="form" onSubmit={onSubmit}>
      <Grid container columnGap={2} alignItems="flex-end">
        <Grid item sm={12} md={6}>
          <TextField
            label="Pesquisar"
            variant="standard"
            type="text"
            value={searchQuery}
            placeholder="Pesquisar"
            onChange={(e) => setSearchQuery(e.target.value)}
            fullWidth
            InputProps={{
              endAdornment: (
                <IconButton type="submit" aria-label="search">
                  <SearchIcon />
                </IconButton>
              ),
            }}
          />
        </Grid>
        <Grid item sm={12} md={2} lg={1}>
          <TextField
            variant="standard"
            select
            label="Máximo por página"
            type="number"
            value={maxResults}
            onChange={handleMaxResultsChange}
            fullWidth
          >
            {maxPageOptions.map((option) => (
              <MenuItem key={option} value={option}>
                {option}
              </MenuItem>
            ))}
          </TextField>
        </Grid>
        <Grid item sm={12} md={4}>
          <Button variant="outlined" color="primary" type="submit">
            Pesquisar
          </Button>
        </Grid>
      </Grid>
    </Box>
  );
}

export default SearchBar;
