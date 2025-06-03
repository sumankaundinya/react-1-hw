import data from "/data/partnersData.json";
const OurPartners = () => {
  // TASK - React 1 week 1
  // Create the "Our Crew section"
  // Use the descriptions provided in /app/about_us/README.md
  // Use the pictures from /public/crew
  // Some inspiration ideas found in /data/inspiration_about_us
  return (
    <div>
      <p>{data.intro}</p>
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          gap: "36px",
          alignItems: "center",
        }}
      >
        {data.partners.map((partner, index) => (
          <img
            key={index}
            src={partner.image}
            alt={partner.name}
            style={{ width: "100px", height: "auto" }}
          />
        ))}
      </div>
    </div>
  );
};

export default OurPartners;
