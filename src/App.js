import "./App.css";
import { personData } from "./data/poplesData";
import { getTodayBirthday } from "./helper-functions/helperFunctions";
import Person from "./components/Person";
import { useState } from "react";

function App() {
  console.log(personData);
  // filtering today birthday data
  const todayBirthdays = getTodayBirthday(personData);
  const [data, setData] = useState(personData);
  const totalData = data.length;
  const clearBirthday = () => {
    setData([]);
  };
  return (
    <div className="App">
      <section className="person-wrapper">
        <h1> {totalData + " Birthday today!!!"} </h1>
        {data.map((singlePerson) => {
          return <Person key={singlePerson.id} {...singlePerson} />;
        })}

        <button onClick={clearBirthday} className="clear-all">
          Clear All
        </button>
      </section>
    </div>
  );
}

export default App;
