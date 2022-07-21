import React, { Component } from 'react';
import Profile from './profile.jpg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';


export default class App extends Component {
  state = {
    fullName:'Amine Najlaoui',
    bio: 'I make a web site Application',
    profession: `I'am a web developer`,
    imgSrc: Profile,
    shows:false,
    count:0
  }

  componentDidMount(){
    setInterval(()=>this.setState({count:this.state.count+1 }),1000)
  }

  toggle =()=>{this.setState({shows:!this.state.shows})}
  render() {
    return (
      <div className='state'>
        <p>{this.state.count} seconds</p>
        {this.state.shows ? (
          <>
        <p style={{position:'absolute', left:450,top:100}}>Hi i'm <span style={{fontWeight:'bold'}}>{this.state.fullName}</span>, i {this.state.bio} so, <span style={{fontWeight:'bold'}}>{this.state.profession}</span></p>
        <img src={this.state.imgSrc} style={{width:200,height:200 ,borderRadius:"100%", position:'absolute' ,left: 580, top:160}} alt='mypic'/>
        </>
        ) : (<p style={{fontWeight:'bold', textAlign:'center', color:"royalblue"}}>My profile is hidden</p>)
        }
        <button class="btn btn-primary" style={{position: 'absolute', left: 650, top:400}} onClick={this.toggle}> {!this.state.shows ? "Shows" : "Hide"}</button>{' '}
      </div>
    
    ) 
  }
}