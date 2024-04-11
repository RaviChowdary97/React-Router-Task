import FullStackUi from "./FullStackUi";

const FullStack = () => {
  const card = [
    {
      poster:
        "https://www.guvi.in/blog/wp-content/uploads/2023/07/person-front-computer-working-html-768x513.jpg",
      title: "Best Full-Stack Development Project Ideas in 2024",
      name: "Kiran",
      date: "27 MAR,2024",
      time: "5 Min Read",
      detailPath: "one", // Detail path for the first item
    },
    {
      poster:
        "https://www.guvi.in/blog/wp-content/uploads/2023/07/how-long-it-would-it-take-to-learn-full-stack-development_-2048x1072.webp",
      title: "How Long Would It Take to Be a Full Stack Developer?",
      name: "Mahesh",
      date: "29 MAR,2024",
      time: "6 Min Read",
      detailPath: "two", // Detail path for the second item
    },
    {
      poster:
        "https://www.guvi.in/blog/wp-content/uploads/2023/02/1_6rDcIgFJQldloIERiUSmzw.png",
      title: "How does Apache work? A detailed introduction to Apache",
      name: "Mahesh",
      date: "29 MAR,2024",
      time: "6 Min Read",
      detailPath: "three", // Detail path for the second item
    },
  ];

  return (
    <div style={{ display: "flex", gap: "20px", margin: "20px" }}>
      {card.map((element, index) => (
        <FullStackUi key={index} {...element} />
      ))}
    </div>
  );
};
export default FullStack;
