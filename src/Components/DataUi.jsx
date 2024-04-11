import { useNavigate } from "react-router-dom";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";

function DataUi({ poster, title, name, date, time, detailPath }) {
  const navigate = useNavigate();

  const handleButtonClick = () => {
    navigate(`/datascience/${detailPath}`);
  };
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        height="194"
        image={poster}
        alt="Paella dish"
      />
      <CardContent>
        <Typography variant="body2" color="text.primary">
          {title}
        </Typography>
        <br />
        <Typography variant="body2" color="text.secondary">
          By {name}
        </Typography>
        <br />
        <Typography variant="body2" color="text.primary">
          {date}
        </Typography>
        <Typography
          variant="body2"
          color="text.primary"
          sx={{
            marginLeft: "240px",
          }}
        >
          {time}
        </Typography>
        <Button
          variant="contained"
          sx={{ marginLeft: "100px" }}
          onClick={handleButtonClick}
        >
          Read More
        </Button>
      </CardContent>
    </Card>
  );
}
export default DataUi;
