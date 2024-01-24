import { useState } from 'react';
import './App.css';
import Logo from './components/Logo';
import Form from './components/Form';
import PackingList from './components/PakingList';
import Stats from './components/Stats';



function App() {



  const [initialItems, setInitialItems] = useState([]);

  function handleAddItems(newItem) {
    setInitialItems(curVal => [...curVal, newItem]);
  }

  function handleDeleteItem(itemId) {
    setInitialItems(curVal => curVal.filter(item => item.id !== itemId));
  }

  function handleToggleItem(itemId) {
    setInitialItems(curVal => curVal.map(item => {
      if (itemId === item.id) return { ...item, packed: !item.packed };
      return item;
    }))
  }

  function handleClearList() {
    const confirm = window.confirm('Confirm to delete all items!');
    if(confirm) setInitialItems(() => []);
    
  }

  return (
    <div className='app'>

      <Logo />

      <Form handleAddItems={handleAddItems} />

      <PackingList initialItems={initialItems} handleDeleteItem={handleDeleteItem} handleToggleItem={handleToggleItem}
        handleClearList={handleClearList} />

      <Stats initialItems={initialItems} />


    </div>
  );
}

export default App;












