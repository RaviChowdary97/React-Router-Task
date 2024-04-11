import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";

export default function ALLone() {
  return (
    <Card sx={{ width: "100%" }}>
      <CardMedia
        component="img"
        height="194"
        image="https://www.guvi.in/blog/wp-content/uploads/2024/03/Feature-2.png"
        alt="Paella dish"
      />
      <CardContent>
        <Typography
          variant="body2"
          color="text.secondary"
          sx={{ fontWeight: "bold", color: "black", fontSize: "20px" }}
        >
          The Influence of Chatbots on Customer Services: Benefits and Impact
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Chatbots have emerged as key players in revolutionizing customer
          service in an era where instant gratification is the norm. These
          AI-driven assistants offer round-the-clock support, handling
          everything from basic inquiries to complex issues with efficiency and
          ease. This leap in technology not only elevates customer experience
          but also opens new avenues for businesses to engage with their
          clientele. In this blog, we’ll explore their impact on customer
          service—highlighting the benefits, addressing the challenges, and
          peeking into the future of digital customer interactions. Let’s
          understand how chatbots are transforming customer service, making it
          more accessible, personalized, and efficient than ever before.
        </Typography>
      </CardContent>
    </Card>
  );
}
