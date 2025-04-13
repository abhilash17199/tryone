import { useState } from "react";

export default function App() {
  const [hobbies, setHobbies] = useState(["Reading", "Hiking", "Playing guitar"]);
  const [newHobby, setNewHobby] = useState("");

  const addHobby = () => {
    if (newHobby.trim()) {
      setHobbies([...hobbies, newHobby.trim()]);
      setNewHobby("");
    }
  };

  const removeHobby = (hobbyToRemove) => {
    setHobbies(hobbies.filter((hobby) => hobby !== hobbyToRemove));
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-orange-50 p-4">
      <div className="bg-white p-6 rounded-2xl shadow-lg max-w-sm w-full text-center">
        <img
          src="./src/assets/Abhilash passport.png"
          alt="Profile"
          className="w-24 h-24 mx-auto rounded-full mb-4"
        />
        <h1 className="text-2xl font-bold text-gray-10000">Abhilash Rout</h1>
        <p className="text-gray-800 mt-2 mb-4">
          I'm a frontend developer who enjoys building clean, user-friendly interfaces.
          Passionate about learning new tech and creating useful tools.
        </p>

        <h2 className="text-lg font-semibold text-gray-10000 mb-2">Hobbies</h2>
        <ul className="list-disc list-inside text-gray-600 text-left mx-auto max-w-xs mb-4 cursor-pointer">
          {hobbies.map((hobby, index) => (
            <li
              key={index}
              onClick={() => removeHobby(hobby)}
              className="hover:text-red-500 transition-colors"
              title="Click to remove"
            >
              {hobby}
            </li>
          ))}
        </ul>

        <div className="flex gap-2">
          <input
            type="text"
            placeholder="Add hobby"
            value={newHobby}
            onChange={(e) => setNewHobby(e.target.value)}
            className="flex-1 border border-gray-300 rounded-lg px-2 py-1 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button
            onClick={addHobby}
            className="bg-blue-500 text-white px-3 py-1 rounded-lg text-sm hover:bg-blue-600"
          >
            Add
          </button>
        </div>
      </div>
    </div>
  );
}

///  =======================================



