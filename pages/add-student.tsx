import { useState } from "react";
import api from "../utils/api";

export default function AddStudent() {
  const [form, setForm] = useState({ name: "", age: "", roll: "", grade: "" });

  const handleAdd = async () => {
    await api.post("/students", form);
    alert("Student added!");
  };

  return (
    <div className="p-6 max-w-md mx-auto">
      <h1 className="text-xl font-bold mb-4">➕ Add Student</h1>
      <input
        className="border p-2 mb-2 w-full"
        placeholder="Name"
        onChange={(e) => setForm({ ...form, name: e.target.value })}
      />
      <input
        className="border p-2 mb-2 w-full"
        placeholder="Age"
        onChange={(e) => setForm({ ...form, age: e.target.value })}
      />
      <input
        className="border p-2 mb-2 w-full"
        placeholder="Roll"
        onChange={(e) => setForm({ ...form, roll: e.target.value })}
      />
      <input
        className="border p-2 mb-2 w-full"
        placeholder="Grade"
        onChange={(e) => setForm({ ...form, grade: e.target.value })}
      />
      <button className="bg-green-600 text-white px-4 py-2" onClick={handleAdd}>
        Save
      </button>
    </div>
  );
}
