import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";

export default function DATAthree() {
  return (
    <Card sx={{ width: "100%" }}>
      <CardMedia
        component="img"
        height="194"
        image="https://www.guvi.in/blog/wp-content/uploads/2022/06/5.-data-science-2048x1072.png"
        alt="Paella dish"
      />
      <CardContent>
        <Typography
          variant="body2"
          color="text.secondary"
          sx={{ fontWeight: "bold", color: "black", fontSize: "20px" }}
        >
          Can A Commerce Student Do Data Science?
        </Typography>
        <Typography variant="body2" color="text.secondary">
          When you give your resume to any potential recruiter, the first thing
          that they check apart from your education is the number of projects
          that you have done during your career. The aim of the project is not
          just to showcase your understanding of the subject but rather to
          showcase your interest in that subject that extends beyond academics
          Building a project is very important for individuals to gain practical
          knowledge of concepts. Since full-stack development is the most
          demanding job in the IT industry, hence, it’s very important for you
          to build some creative and amazing projects. The demand for full-stack
          developers is rising and will continue to rise in the coming years. In
          this blog, you’ll be reading about some of the best Full-Stack
          Development Project Ideas in 2024 which you must definitely try
          hands-on as these projects can really leverage your chances of
          standing out from the crowd.
        </Typography>
      </CardContent>
    </Card>
  );
}
