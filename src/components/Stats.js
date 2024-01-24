
export default function Stats({ initialItems }) {


    if (initialItems.length <= 0) {
      return (
        <footer className='stats'>
          <em>
            <p>Start Adding some items to your paking list!</p>
          </em>
        </footer>
      )
    }
  
    const pakedItems = initialItems.filter(item => item.packed === true);
    let packPer = (pakedItems.length * 100 / initialItems.length);
    packPer = Number.isInteger(packPer) ? packPer : packPer.toFixed(2);
  
    return (
      <footer className='stats'>
        <em>
          {packPer === 100 ? 'You got everything! Ready to go ✈' :
            `🚗 You have ${initialItems.length} items on your list, and you already packed ${pakedItems.length} (${initialItems.length > 0 ? packPer : 0}%)`}
        </em>
      </footer>
    )
  }