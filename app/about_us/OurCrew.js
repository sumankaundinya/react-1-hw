import data from "/data/crewData.json";
const OurCrew = () => {
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
          gap: "2rem",
          justifyContent: "center",
          margin: "2rem 0",
          flexWrap: "wrap",
        }}
      >
        {data.crew
          .filter((member) => member.image)
          .map((member, index) => (
            <div key={index} style={{ textAlign: "center" }}>
              <img
                src={member.image}
                alt={member.name}
                style={{
                  width: "120px",
                  height: "180px",
                  objectFit: "cover",
                  borderRadius: "8px",
                }}
              />
              <h3 style={{ marginTop: "0.5rem" }}>{member.name}</h3>
            </div>
          ))}
      </div>

      {data.crew.map((member, index) => (
        <div key={index}>
          <h3>{member.name}</h3>
          <p>{member.bio}</p>
        </div>
      ))}
    </div>
  );
};

export default OurCrew;
