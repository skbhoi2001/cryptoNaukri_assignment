import { useEffect, useState } from "react";
import Form from "./Component/Form";
import {v4 as uuid} from "uuid"
import { FormDisplay } from "./Component/FormDisplay";
function App() {
  const [data, setData] = useState([]);

  const getData = () => {
    fetch(
      `https://masai-react-assignment.herokuapp.com/formDetails`
    )
      .then((res) => res.json())
      .then((res) => {
        setData([...res]);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  useEffect(() => {
    getData();
  }, []);

  const handleTask = async ({
    name,
    description,
    date
  }) => {
    const payload = {
      id:uuid(),
      name: name,
      description: description,
      date:date,
      status:false
    };

    const config = {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(payload)
    };
    await fetch(
      `https://masai-react-assignment.herokuapp.com/formDetails`,
      config
    );
  };

  const handleDelete = async (id) => {
    try {
      await fetch(
        `https://masai-react-assignment.herokuapp.com/formDetails/${id}`,
        {
          method: "DELETE"
        }
      );
    } catch (err) {
      console.log(err);
    }
  };
  const handleToggle = (id)=>{
    const update = data.map((item) =>
      item.id === id ? { ...item, status: !item.status } : item
    );
    setData(update);
  }
  return (
    <div className="App">
      <h1 style={{textAlign:"center"}} >Task Manager</h1>
      <Form onTaskCreate={handleTask} />
      <FormDisplay 
      handleDelete={handleDelete}
      handleToggle={handleToggle}
      data={data}  
      />
    </div>
  );
}

export default App;
