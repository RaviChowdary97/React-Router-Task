import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";

export default function ALLtwo() {
  return (
    <Card sx={{ width: "100%" }}>
      <CardMedia
        component="img"
        height="194"
        image="https://www.guvi.in/blog/wp-content/uploads/2024/03/feature_image-1-4.webp"
        alt="Paella dish"
      />
      <CardContent>
        <Typography
          variant="body2"
          color="text.secondary"
          sx={{ fontWeight: "bold", color: "black", fontSize: "20px" }}
        >
          Apple’s Vision Pro: A Deep Dive into Tech Specs, Applications, &
          What’s Next [2024]
        </Typography>
        <Typography variant="body2" color="text.secondary">
          It is a fact that Apple is at the forefront of creating technological
          marvels year-to-year and they stayed loyal to the fact by introducing
          Apple’s Vision Pro this year. Vision Pro is an advanced VR/AR device
          that lets you immerse in the world of virtual reality and make your
          life more techno-friendly. But no innovation comes without drawbacks,
          want to learn more? To quench your thirst for knowledge of Vision Pro,
          we made this article explaining what Vision Pro is, its tech specs,
          applications, drawbacks, and how the future is going to be
          revolutionized.
        </Typography>
      </CardContent>
    </Card>
  );
}
