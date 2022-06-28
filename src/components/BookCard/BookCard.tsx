import {
  Button,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import { Book } from "../../types/Books";
import LinesEllipsis from "react-lines-ellipsis";
import bookFallbackImage from "../../assets/bookFallbackImage.png";
import { useNavigate } from "react-router-dom";
import StarIcon from '@mui/icons-material/Star';
import StarBorderIcon from '@mui/icons-material/StarBorder';

interface Props {
  book: Book;
  favorite: boolean;
  setFavorite: (id:string) => void
}

function BookCard({ book, favorite, setFavorite }: Props) {
  let navigate = useNavigate();

  const handleClick = () => navigate("/details/" + book.id);

  return (
    <Card
      sx={{
        width: 272,
        height: 475,
        margin: 2,
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
      }}
    >
      <CardActionArea onClick={handleClick}>
        <CardMedia
          component="img"
          height="272"
          sx={{ objectFit: "fill" }}
          image={
            book.volumeInfo?.imageLinks?.smallThumbnail ||
            book.volumeInfo?.imageLinks?.thumbnail ||
            bookFallbackImage
          }
          alt={book?.volumeInfo?.title}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            <LinesEllipsis
              text={book?.volumeInfo?.title}
              maxLine="1"
              ellipsis="..."
              trimRight
              basedOn="letters"
            />
          </Typography>
          <Typography variant="body2" color="text.secondary">
            <LinesEllipsis
              text={
                book?.volumeInfo?.subtitle ||
                book?.volumeInfo?.description ||
                "Não há descrição para esse livro"
              }
              maxLine="3"
              ellipsis="..."
              trimRight
              basedOn="letters"
            />
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions sx={{ display: "flex", alignItems: "flex-end" }}>
        <Button size="small" color="primary" onClick={() => setFavorite(book.id)}>
          {favorite ? <StarIcon/> : <StarBorderIcon/>}
        </Button>
      </CardActions>
    </Card>
  );
}

export default BookCard;
