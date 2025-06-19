import data from "/data/valuesData.json";
const OurValues = () => {
  // TASK - React 1 week 1
  // Create the "Our Values" section
  // Use the descriptions provided in /app/about_us/README.md
  // Some inspiration ideas found in /data/inspiration_about_us
  return (
    <div>
      {data.values.map((value) => (
        <div key={value.name}>
          <h3>{value.title}</h3>
          <p>{value.description}</p>
        </div>
      ))}
    </div>
  );
};

export default OurValues;
