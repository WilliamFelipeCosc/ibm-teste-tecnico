import { Box } from "@mui/material";
import { memo, useState } from "react";
import BookCard from "../components/BookCard/BookCard";
import { BookApiReturn } from "../types/Books";

interface Props {
  books?: BookApiReturn;
}

function BooksCardList({ books }: Props) {
  const [favoriteBooks, setFavoriteBooks] = useState<string[]>([])

  const setFavorite = (id:string) => {
    if(favoriteBooks.some(x => x === id)){
      const fav = [...favoriteBooks].filter(x => x!== id)
      setFavoriteBooks(fav)
    }else{
      const fav = [...favoriteBooks, id]
      setFavoriteBooks(fav)
    }
   
  }

  return (
    <Box
      display={"flex"}
      flexWrap="wrap"
      alignItems={"center"}
      justifyContent="center"
    >
      {books?.items?.length &&
        books.items.map((book) => <BookCard favorite={favoriteBooks.some(x => x === book.id)} setFavorite={setFavorite} key={book.id} book={book} />)}
    </Box>
  );
}

export default memo(BooksCardList);
