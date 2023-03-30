import { useState, useEffect } from 'react';

function SearchBox() { 
    
const [data, setData] = useState([]);
useEffect(() => {
  fetch('https://countriesnow.space/api/v0.1/countries/capital')
  .then(res => res.json())
  .then(data => setData(data.data))
},[])
// console.log(data);
  const [filteredData, setFilteredData] = useState([]);
  const [searchCountry, setSearchCountry] = useState('');

  const handleInputChange = (event) => {
    setSearchCountry(event.target.value);
   let filtered = data.filter(val => val.name.toLowerCase().includes(event.target.value.toLowerCase()));
    console.log(filtered)
    setFilteredData(filtered);
  };
  
  return (
    <div className="wrapper">
      <input type="text" placeholder="Search..." value={searchCountry} onChange={handleInputChange} />
      {filteredData.map((val, key) => {
        return <div key={key}>{val.name}</div>;
      })}
    </div>
  );
}
export default SearchBox;


