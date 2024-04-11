import DataUi from "./DataUi";

const Datascience = () => {
  const card = [
    {
      poster:
        "https://www.guvi.in/blog/wp-content/uploads/2023/07/Real-World-Data-Science-Examples-2048x1072.webp",
      title: "12 Real-World Data Science Examples: Power Of Data Science",
      name: "Kiran",
      date: "27 MAR,2024",
      time: "5 Min Read",
      detailPath: "one", // Detail path for the first item
    },
    {
      poster:
        "https://www.guvi.in/blog/wp-content/uploads/2023/11/Feature-image-Top-High-Paying-Non-Coding-Jobs-in-Data-Science.webp",
      title: "Top 10 High Paying Non-Coding Jobs in Data Science in 2024",
      name: "Mahesh",
      date: "29 MAR,2024",
      time: "6 Min Read",
      detailPath: "two", // Detail path for the second item
    },
    {
      poster:
        "https://www.guvi.in/blog/wp-content/uploads/2022/06/5.-data-science-2048x1072.png",
      title: "Can A Commerce Student Do Data Science?",
      name: "Mahesh",
      date: "29 MAR,2024",
      time: "6 Min Read",
      detailPath: "three", // Detail path for the second item
    },
  ];

  return (
    <div style={{ display: "flex", gap: "20px", margin: "20px" }}>
      {card.map((element, index) => (
        <DataUi key={index} {...element} />
      ))}
    </div>
  );
};
export default Datascience;
