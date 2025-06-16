import './App.css';
import Header from './components/Header';
import Calendar from './components/Calendar';
import Stats from './components/Stats';
import MoodModal from './components/MoodModal';
import { useState } from 'react';

const moods = ['😊', '😐', '😢', '😡', '😴'];

function App() {
  const today = new Date();
  const [currentMonth, setCurrentMonth] = useState(today.getMonth());
  const [currentYear, setCurrentYear] = useState(today.getFullYear());

  const [savedMoods, setSavedMoods] = useState(() => JSON.parse(localStorage.getItem('moodData') || '{}'));
  const [darkMode, setDarkMode] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const [activeDay, setActiveDay] = useState(null);

  const getDateKey = (day) => `${currentYear}-${currentMonth + 1}-${day}`;

  const openMoodModal = (day) => {
    setActiveDay(day);
    setModalOpen(true);
  };

  const saveMood = (mood) => {
    const dateKey = getDateKey(activeDay);
    const updatedMoods = { ...savedMoods, [dateKey]: mood };
    setSavedMoods(updatedMoods);
    localStorage.setItem('moodData', JSON.stringify(updatedMoods));
    setModalOpen(false);
  };

  const goToNextMonth = () => {
    if (currentMonth === 11) {
      setCurrentMonth(0);
      setCurrentYear(currentYear + 1);
    } else {
      setCurrentMonth(currentMonth + 1);
    }
  };

  const goToPrevMonth = () => {
    if (currentMonth === 0) {
      setCurrentMonth(11);
      setCurrentYear(currentYear - 1);
    } else {
      setCurrentMonth(currentMonth - 1);
    }
  };

  return (
    <div className={darkMode ? 'app dark' : 'app'}>
      <Header darkMode={darkMode} setDarkMode={setDarkMode} />
      <div className="container fade-in">
        <Calendar
          savedMoods={savedMoods}
          onMoodClick={openMoodModal}
          currentMonth={currentMonth}
          currentYear={currentYear}
          goToNextMonth={goToNextMonth}
          goToPrevMonth={goToPrevMonth}
        />
        <Stats savedMoods={savedMoods} moods={moods} />
        {modalOpen && <MoodModal moods={moods} onSelect={saveMood} onClose={() => setModalOpen(false)} />}
      </div>
    </div>
  );
}

export default App;
