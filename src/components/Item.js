
export default function Item({ item, handleDeleteItem, handleToggleItem }) {

    const style = {
      textDecoration: item.packed ? 'line-through' : ''
    }
  
    return (
      <li style={style}>
        <input type='checkbox' value={item.packed} onChange={() => handleToggleItem(item.id)} />
        <span>
          {item.quantity} {item.desc}
          <button onClick={() => handleDeleteItem(item.id)}>❌</button>
        </span>
      </li>
    )
  
  }