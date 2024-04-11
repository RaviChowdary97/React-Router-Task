import CyberUi from "./CyberUi";

const Cyber = () => {
  const card = [
    {
      poster:
        "https://www.guvi.in/blog/wp-content/uploads/2023/12/Feature-image-Non-Coding-Jobs-in-Cybersecurity.webp",
      title: "Non-Coding Jobs in Cybersecurity: A Comprehensive Guide",
      name: "Kiran",
      date: "27 MAR,2024",
      time: "5 Min Read",
      detailPath: "one", // Detail path for the first item
    },
    {
      poster:
        "https://www.guvi.in/blog/wp-content/uploads/2022/12/Yellow-Blue-Illustration-Business-Blog-Banner-2048x1152.png",
      title: "Cybersecurity Vs Ethical Hacking: Top 10 Differences",
      name: "Mahesh",
      date: "29 MAR,2024",
      time: "6 Min Read",
      detailPath: "two", // Detail path for the second item
    },
    {
      poster:
        "https://www.guvi.in/blog/wp-content/uploads/2022/11/Teal-Illustration-Digital-Business-Blog-Banner-1-2048x1152.png",
      title: "8 Different Types of Cybersecurity and Threats Involved",
      name: "Mahesh",
      date: "29 MAR,2024",
      time: "6 Min Read",
      detailPath: "three", // Detail path for the second item
    },
  ];

  return (
    <div style={{ display: "flex", gap: "20px", margin: "20px" }}>
      {card.map((element, index) => (
        <CyberUi key={index} {...element} />
      ))}
    </div>
  );
};
export default Cyber;
