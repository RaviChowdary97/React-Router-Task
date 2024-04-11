import ALL from "./ALL";

function ALLList() {
  const card = [
    {
      poster:
        "https://www.guvi.in/blog/wp-content/uploads/2024/03/Feature-2.png",
      title:
        "The Influence of Chatbots on Customer Services: Benefits and Impact",
      name: "Kiran",
      date: "27 MAR,2024",
      time: "5 Min Read",
      detailPath: "one", // Detail path for the first item
    },
    {
      poster:
        "https://www.guvi.in/blog/wp-content/uploads/2024/03/feature_image-1-4.webp",
      title:
        "Apple’s Vision Pro: A Deep Dive into Tech Specs, Applications, & What’s Next [2024]",
      name: "Mahesh",
      date: "29 MAR,2024",
      time: "6 Min Read",
      detailPath: "two", // Detail path for the second item
    },
  ];

  return (
    <div style={{ display: "flex", gap: "20px", margin: "20px" }}>
      {card.map((element, index) => (
        <ALL key={index} {...element} />
      ))}
    </div>
  );
}

export default ALLList;
