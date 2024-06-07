import React, { useState, useEffect } from "react";
import "./name.css";

function App() {
  const [name, setName] = useState("");
  const [allNames, setAllNames] = useState([]);

  useEffect(() => {
    const storedNames = localStorage.getItem("savedNames");
    if (storedNames) {
      setAllNames(JSON.parse(storedNames));
    }
  }, []);

  const handleAddName = () => {
    const updatedNames = [...allNames, name];
    setAllNames(updatedNames);
    setName("");
    localStorage.setItem("savedNames", JSON.stringify(updatedNames));
  };

  const handleKeyPress = (e) => { // Здесь я создал функцию для того чтобы при нажатии на кнопкку Enter на клавитуре срабатывал кнопка ADD NAME.
    if (e.key === "Enter") {
      handleAddName();
    }
  };

  return (
    <div className="container">
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        onKeyPress={handleKeyPress} // Здесь я добавил обработчик события для клавиши Enter.
      />
      <button onClick={handleAddName}>ADD NAME</button>

      <div className="list_names">
        {allNames.map((savedName, index) => (
          <div key={index}>{savedName}</div>
        ))}
      </div>
    </div>
  );
}

export default App;
