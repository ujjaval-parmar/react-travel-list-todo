import { useState } from "react";

export default function Form({ handleAddItems }) {

    const [desc, setDesc] = useState('');
    const [quantity, setQuantity] = useState(1);
  
  
    const optionValues = Array.from({ length: 20 }, (_, i) => i + 1);
  
    function handleSubmit(e) {
      e.preventDefault();
  
      if (desc === '') {
        return alert('Plz enter valid value!');
      }
      const newItem = {
        desc,
        quantity,
        packed: false,
        id: Math.floor(Math.random() * 1000 + 1)
      }
  
      handleAddItems(newItem);
  
      setDesc(() => '');
      setQuantity(() => 1);
  
    }
  
    return (
      <form className='add-form' onSubmit={handleSubmit}>
        <h3>What do you  need for your 😍 trip?</h3>
        <select value={quantity} onChange={(e) => setQuantity(() => Number(e.target.value))}>
          {optionValues.map(val => {
            return <option value={val} key={val} >{val} </option>
          })}
        </select>
        <input type="text" placeholder='Item...' value={desc} onChange={(e) => setDesc(() => e.target.value)} />
        <button>Add</button>
      </form>
    )
  }