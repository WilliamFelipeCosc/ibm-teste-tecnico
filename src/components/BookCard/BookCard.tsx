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

interface Props {
  book: Book;
}

function BookCard({ book }: Props) {
  return (
    <Card sx={{ width: 272, height: 475, margin: 2, display:'flex', flexDirection:'column', justifyContent: 'space-between' }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="312"
          sx={{ objectFit: 'fill'}}
          image={
            book.volumeInfo?.imageLinks?.smallThumbnail ||
            book.volumeInfo?.imageLinks?.thumbnail
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
              text={book?.volumeInfo?.subtitle || book?.volumeInfo?.description}
              maxLine="3"
              ellipsis="..."
              trimRight
              basedOn="letters"
            />
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions sx={{display:'flex', alignItems:'flex-end'}}>
        <Button size="small" color="primary">
          Favoritar
        </Button>
      </CardActions>
    </Card>
  );
}

export default BookCard;