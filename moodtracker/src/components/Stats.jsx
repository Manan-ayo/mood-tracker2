function Stats({ savedMoods, moods }) {
  const moodCounts = moods.reduce((acc, m) => ({ ...acc, [m]: 0 }), {});
  Object.values(savedMoods).forEach((m) => {
    if (moods.includes(m)) moodCounts[m]++;
  });

  return (
    <>
      <h2 className="stats-title">Mood Stats</h2>
      <div className="stats fade-in">
        {moods.map((m) => (
          <div key={m} className="stat-item">
            <span className="emoji">{m}</span>
            <span>{moodCounts[m]} day(s)</span>
          </div>
        ))}
      </div>
    </>
  );
}
export default Stats;
