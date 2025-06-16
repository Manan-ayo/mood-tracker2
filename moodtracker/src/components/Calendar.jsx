const monthNames = [
  "January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"
];

const weekDays = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

function Calendar({ savedMoods, onMoodClick, currentMonth, currentYear, goToNextMonth, goToPrevMonth }) {
  const getDateKey = (day) => `${currentYear}-${currentMonth + 1}-${day}`;
  const firstDay = new Date(currentYear, currentMonth, 1).getDay();
  const daysInMonth = new Date(currentYear, currentMonth + 1, 0).getDate();
  const days = [];

  for (let i = 0; i < firstDay; i++) {
    days.push(<div key={`empty-${i}`} className="calendar-cell empty"></div>);
  }

  for (let d = 1; d <= daysInMonth; d++) {
    const dateKey = getDateKey(d);
    days.push(
      <div
        key={d}
        onClick={() => onMoodClick(d)}
        className="calendar-cell day zoom-in"
      >
        <span className="day-number">{d}</span>
        <span className="emoji">{savedMoods[dateKey] || '🔲'}</span>
      </div>
    );
  }

  return (
    <div className="calendar-wrapper">
      <div className="month-header">
        <button onClick={goToPrevMonth}>⬅</button>
        <h2>{monthNames[currentMonth]} {currentYear}</h2>
        <button onClick={goToNextMonth}>➡</button>
      </div>
      <div className="weekdays">
        {weekDays.map((day) => (
          <div key={day} className="calendar-cell weekday">{day}</div>
        ))}
      </div>
      <div className="calendar">{days}</div>
    </div>
  );
}
export default Calendar;
