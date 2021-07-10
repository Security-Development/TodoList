import React, {useEffect, useState,Component} from 'react';
import Todo from './Todo';
import './css/AppCss.css';

const audio = new Audio('eventMusic.mp3');

const stop = () => {
  audio.pause();
  audio.currentTime = 0;
}

class App extends Component{
  constructor(props:any){
    super(props)
    this.onAdd = this.onAdd.bind(this);
    this.onRemove = this.onRemove.bind(this);
  }

  state = {
    arr: []
  };

  class_date() : Date{
    return new Date();
  }

  year: string = this.class_date().getFullYear().toString();
  month: string = (this.class_date().getMonth() + 1).toString();
  day: string = this.class_date().getDate().toString();

  text_date(year: string, month: string, day: string) : string{
    return year+'년 '+month+'월 '+day+'일';
  }

  onRemove(id: number) :void{
    this.setState({arr: this.state.arr.filter((dateData: any) => {
      return dateData.id !== id;
    })});
  }

  view() {
    var data;
    if (!this.state.arr.length){
      return <img className="Check-Img" src="notFound.png"/>
    } else{
      return (this.state.arr.map((dateData: any) => {
        return (
          <div>
          <li>
          <Todo form={this.text_date(this.year, this.month, this.day).toString()} todo={dateData.todo} id={dateData.id} onRemove={this.onRemove}/>
          </li>
          </div>)}));
    }
  }

  onAdd() :void{
      this.setState({arr: [
        ...this.state.arr,
        {year: "2021", month: "7", day: "21", todo: "할 일을 수정하세요.", id: Date.now()}
      ]});
  }

  onExit(){

  }

  render() {
    return(
      <div className="App">
      <div className="App-Sub">
      <ul>
      {this.view()}
      </ul>
      </div>
      <div className = "App-Sub">
      <div className="App-Img">
      <img onMouseLeave={() => stop()} onMouseOver={() => audio.play()} onClick={this.onAdd} className = "App-Add-Img" src="AddImg.png"/>
      </div>
      </div>
      </div>
    );
  }

}

export default App;
