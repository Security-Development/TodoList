import React,{useState} from 'react';
import './css/TodoCss.css';
import EditPopup from './EditPopup';
import SweetAlert from 'react-bootstrap-sweetalert';
type TodoPorps = {
  form: string;
  todo: string;
  id: number;
  onRemove: any;
}

const audio = new Audio('eventMusic.mp3');

const stop = () => {
  audio.pause();
  audio.currentTime = 0;
};

const Todo: React.FC<TodoPorps> = ({form, todo, id, onRemove}) => {
  const [option, setOption] = useState(false);
  const [check, setCheck] = useState(false);
  const [formData, setForm] = useState(form);
  const [todoData, setTodo] = useState(todo);
  const [bool, setBool] = useState(false);

  const change = (dateData: string, todoDatas: string) => {

    if(!dateData || !todoDatas)
    {
      setBool(true);
    }else{
      setForm(dateData);
      setTodo(todoDatas);
      setOption(false);
    }
  };

  return(
    <div>
    <main className='todo-list'>
    <img  onClick={() => setCheck(!check)} className="check-img" src={check ? "CheckOn.png" : "CheckOff.png"}/>
      <div className='title'>
      할 일 목록
      </div>
      <div className="list">
        <section className='forms'>
          날짜 : {formData}
        </section>


        <div className = "Todo-Edit">
          <img onClick={() => {setOption(!option)}} onMouseLeave={() => stop()} onMouseOver={() => audio.play()}  className = "Todo-Edit-Img" src = "EditImg.png"/>
        </div>

        <img onMouseLeave={() => stop()} onMouseOver={() => audio.play()} onClick={() => onRemove(id)} className = "Todo-Exit-Img" src="ExitImg.png"/>

        <section className='todos'>
           - 할 일 <br/><div className="todo-text">{todoData}</div>
        </section>
        <div className='popup' style={option ? {}: {display: "none"}}>
        <EditPopup onChange={setOption} change={change}/>
        </div>
      </div>
    </main>
    {bool && <SweetAlert style={{backgroundColor: "rgba(30, 30, 30)", opacity: "0.8", color: "white"}} error title="처리하는 도중 오류 발생" onConfirm={() => setBool(false)} >공백이 발견되었습니다.</SweetAlert>}
    </div>
  )
};

export default Todo;
