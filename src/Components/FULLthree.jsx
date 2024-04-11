import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";

export default function FULLthree() {
  return (
    <Card sx={{ width: "100%" }}>
      <CardMedia
        component="img"
        height="194"
        image="https://www.guvi.in/blog/wp-content/uploads/2023/02/1_6rDcIgFJQldloIERiUSmzw.png"
        alt="Paella dish"
      />
      <CardContent>
        <Typography
          variant="body2"
          color="text.secondary"
          sx={{ fontWeight: "bold", color: "black", fontSize: "20px" }}
        >
          How does Apache work? A detailed introduction to Apache
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Have you ever wondered how much time it would take to become a skilled
          Full Stack Developer, capable of creating awesome websites and web
          applications? Whether you’re already familiar with coding or just
          starting, you might be curious about the learning process and how long
          it’ll take to reach your goals. In this blog, we’ll find out the time
          and effort needed to master Full Stack Development. We’ll explore what
          it includes, where you can learn, and the challenges you might face.
          So, get ready to discover how long it would take to learn Full Stack
          Development and get started on your exciting web development journey!
          Let’s go!
        </Typography>
      </CardContent>
    </Card>
  );
}
