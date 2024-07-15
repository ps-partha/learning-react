import React from 'react';
import { v4 as uuidv4 } from 'uuid';
import { useState } from 'react';
import Card from './components/Card/Card';
import AddNewData from './components/Card/AddNewData';
const initialData = [
  {
    id: uuidv4(),
    title: "this is demo title",
    description: "this is demo description"
  }
];

function App() {
  const [data, setData] = useState(initialData);

  const handleNewData = (newData) => {
    const newDataEntry = {
      title: newData.title,
      description: newData.description,
      id: uuidv4()
    };
    setData((prevData) => [
      ...prevData,
      newDataEntry
  ]);
  };

  return (
    <div className="App">
      <header className='Form-contenar'>
        <AddNewData handleNewData={handleNewData} />
      </header>
      <header className="card-header">
        {data.map((item) => (
          <Card key={item.id} {...item} />
        ))}
      </header>
    </div>
  );
}

export default App;
