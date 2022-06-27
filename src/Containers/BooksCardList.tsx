import { Box } from "@mui/material";
import { memo } from "react";
import BookCard from "../components/BookCard/BookCard";
import { BookApiReturn } from "../types/Books";

interface Props {
  books?: BookApiReturn ;
}

function BooksCardList({ books }: Props) {
  
  return (
    <Box
      display={"flex"}
      flexWrap="wrap"
      alignItems={"center"}
      justifyContent="center"
    >
      {books?.items?.length &&
        books.items.map((book) => <BookCard key={book.id} book={book} />)}
    </Box>
  );
}

export default memo(BooksCardList);
