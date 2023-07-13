function Stats({ items }) {
  if (!items.length) {
    return (
      <p className="stats">
        <em>Start adding some work for the day.</em>
      </p>
    );
  }
  const numItems = items.length;
  const numPacked = items.filter((item) => item.packed).length;

  const percentage = Math.round((numPacked / numItems) * 100);

  return (
    <footer className="stats">
      <em>
        {percentage === 100
          ? " DONE FOR THE DAY"
          : `💼You have ${numItems} works on your list , and pending work 
          ${numPacked} (${percentage}%)`}
      </em>
    </footer>
  );
}

export default Stats;
