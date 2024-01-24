import { useState } from "react";
import Item from "./Item";

export default function PackingList({ initialItems, handleDeleteItem, handleToggleItem, handleClearList }) {

    const [sortBy, setSortBy] = useState('input');
  
    let sortedItems = [];
  
    if (sortBy === 'input') {
      sortedItems = initialItems;
    } else if (sortBy === 'description') {
      sortedItems = initialItems
        .slice()
        .sort((a, b) => a.desc.localeCompare(b.desc));
    } else {
      sortedItems = initialItems
        .slice()
        .sort((a, b) => a.packed === true ? 1 : -1);
    }
  
    return (
      <div className='list'>
        <ul>
          {sortedItems.length > 0 && sortedItems.map(item => <Item item={item} key={item.id} handleDeleteItem={handleDeleteItem} handleToggleItem={handleToggleItem} />)}
        </ul>
  
        {initialItems.length > 0 && <div className='actions' value={sortBy} onChange={e => setSortBy(e.target.value)}>
          <select>
            <option value="input" >Sort by input order</option>
            <option value="description" >Sort by description</option>
            <option value="packed" >Sort by packed status</option>
          </select>
          <button onClick={handleClearList}>Clear List</button>
        </div>
        }
  
      </div >
    )
  }