import ReactDOM from 'react-dom';
import React, {useState} from 'react';
import './css/EditPopupCss.css';

type EditProp = {
  onChange: Function,
  change: Function
}

const audio = new Audio('eventMusic.mp3');

const stop = () => {
  audio.pause();
  audio.currentTime = 0;
};

const EditPopup: React.FC<EditProp> = ({onChange, change}) =>{
  const [dateData, setDate] = useState('');
  const [todo, setTodo] = useState('');
  const dateSplit = dateData.split('-');
  const dateStr = (dateSplit[0] || dateSplit[1] || dateSplit[2] ) ? dateSplit[0]+'년 '+dateSplit[1]+'월 '+dateSplit[2]+'일' : '';

    return (
        <div className='popup-inner'>

        <div className="popup-title">
          편집
        </div>

        <div className="popup-date">
          날 짜  <input className='date' onChange={(e) => setDate(e.target.value)} type='date'/> <br/>
          </div>

        <div className="popup-text">
          할 일  <input className='text' onChange={(e) => setTodo(e.target.value)} type='text'/> <br/>
        </div>

        <div className="popup-button">
        <button onMouseLeave={() => stop()} onMouseOver={() => audio.play()} className="popup-submit" onClick={() => {change(dateStr, todo)}}>변경</button>
        </div>

        <div className="popup-img-main">
          <button onMouseLeave={() => stop()} onMouseOver={() => audio.play()} onClick={() => onChange(false)} className="popup-img" />
        </div>

        </div>
    );
}
export default EditPopup;
