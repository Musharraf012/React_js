import axios from "axios";
import React, { useEffect, useState } from "react";
import "./Exam.css";

export default function Exam() {
  let [data, setData] = useState([]);
  const [srch, srchData] = useState("");
  useEffect(() => {
    axios.get("https://jsonplaceholder.typicode.com/posts").then((y) => {
      setData(y.data);
      console.log(y.data);
      console.log(data);
    });
  }, []);
  const handleSearch = () => {
    console.log("uu");
    const filtered = data.filter((v) => v.title.includes(srch));
    setData(filtered);
  };
  return (
    <div>
      <input
        type="text"
        // value={srch}
        onChange={(e) => srchData(e.target.value)}
      />
      <button onClick={handleSearch}>Search</button>
      {data.map((v) => {
        return (
          <table class="table">
            <thead>
              <tr>
                <th scope="col" className="cntr">
                  Id
                </th>
                <th scope="col" className="cntr">
                  userId
                </th>
                <th scope="col" className="cntr">
                  Title
                </th>
                <th scope="col" className="cntr">
                  Body
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row">{v.id}</th>
                <td>{v.userId}</td>
                <td>{v.title}</td>
                <td>{v.body}</td>
              </tr>
            </tbody>
          </table>
        );
      })}
    </div>
  );
}
