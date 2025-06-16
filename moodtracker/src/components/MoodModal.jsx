function MoodModal({ moods, onSelect, onClose }) {
  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div className="modal" onClick={(e) => e.stopPropagation()}>
        <h3>Select Your Mood</h3>
        <div className="mood-options">
          {moods.map((mood) => (
            <button key={mood} className="mood-button" onClick={() => onSelect(mood)}>
              {mood}
            </button>
          ))}
        </div>
        <button onClick={onClose} className="close-btn">Cancel</button>
      </div>
    </div>
  );
}
export default MoodModal;
