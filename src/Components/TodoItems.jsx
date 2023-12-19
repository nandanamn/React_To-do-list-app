import './CSS/TodoItems.css'
import not_tick from './Assets/not_tick.png';
import tick from './Assets/tick.png';
import './cross.png'
import './not_stick.png'
import './tick.png'


 const TodoItems = ({no,display,text,setTodos}) => {
  const deleteTodo = (no) =>{
    let data = JSON.parse(localStorage.getItem('todos'));
     data = data.filter((todos)=>todos.no!==no);
     setTodos(data); 


  }
  const toggle = (no) =>{
    let data = JSON.parse(localStorage.getItem('todos'));
    for(let i =0;i<data.length;i++)
    {
      if (data[i].no===no) {
        if (data[i].display==="") {
          data[i].display ='line-through';
          
        }
        else
        {
          data[i].display ='';

        }
        break;
        
      }
    }
    setTodos(data);
  }
  return (
    <div className='todoitems'>
        <div className={`todoitems-container${display}`} onAuxClick={()=>{toggle(no)}}>
           {display===""?<Image src={not_tick}alt='' />:<Image src={tick} alt='' />
} 
            <div className='todoitems-text'>{text}</div>
            

        </div>
        <img className='todoitems-cross-icon' onClick={()=>{deleteTodo(no)}} src={cross} alt='' />

    </div>
  )
}
export default TodoItems;
