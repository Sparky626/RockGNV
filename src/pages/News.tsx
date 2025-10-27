export default function News() {
  const items = [
    {
      id: 1,
      title: "New venue opens downtown",
      body: "A new DIY venue just opened — check their calendar for local shows.",
    },
    {
      id: 2,
      title: "Merch drop",
      body: "Limited edition shirts available at the next show.",
    },
  ];

  return (
    <div className="app-container">
      <div className="card">
        <h3>LATEST NEWS</h3>
        <ul style={{ listStyle: "none", padding: 0 }}>
          {items.map((n) => (
            <li key={n.id} style={{ margin: "1rem 0", color: "#000" }}>
              <strong style={{ fontSize: "50px" }}>{n.title}</strong>
              <p
                style={{
                  margin: "0.25rem 0 0",
                  fontSize: "4 0px",
                  fontFamily: "HitMePunk2",
                }}
              >
                {n.body}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
