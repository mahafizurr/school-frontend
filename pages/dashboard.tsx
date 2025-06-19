import { useEffect, useState } from "react";
import api from "../utils/api";

export default function Dashboard() {
  const [students, setStudents] = useState([]);

  useEffect(() => {
    api
      .get("/students")
      .then((res) => setStudents(res.data))
      .catch(() => alert("Unauthorized or error"));
  }, []);

  return (
    <div className="p-6">
      <h1 className="text-xl font-bold">🎓 Student List</h1>
      <ul className="mt-4">
        {students.map((s: any) => (
          <li key={s.id} className="border p-2 my-2">
            {s.name} - Roll: {s.roll} - Grade: {s.grade}
          </li>
        ))}
      </ul>
    </div>
  );
}
