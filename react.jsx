function ColorPickerApp() {
  const [selectedColor, setSelectedColor] = useState('#f4f4f4');
  // Palette and backend logic...

  function handleColorChange(color) {
    setSelectedColor(color);
    // fetch call to PHP or Node server
  }
  return (
    <>
      <ColorBox color="yellow" onClick={handleColorChange} />
      <input type="color" value={selectedColor} onChange={e => handleColorChange(e.target.value)} />
      <PaletteHistory palette={palette} onClick={handleColorChange}/>
      <button onClick={() => setSelectedColor('#f4f4f4')}>Reset</button>
    </>
  );
}
