import React from 'react';
import { Component } from "react";
import ReactDOM  from "react-dom";
import './Avatar.css';
import 'tachyons';
import Avatarlist from './Avatarlist';

class Avatar extends Component{

    constructor(){
        super();
        this.state = {
            name: "An illustrated Avatar for Developers"
        }
    }
    namechange(){
        this.setState({
            name: "It's My First React Js Project"
        })
    }

    render(){
        const avatarlistarray = [
            {
                id:1,
                name:"Chetan",
                work:"Reactjs Developer"
            },
            {
                id:2,
                name:"William",
                work:"Frontend Developer"
            },
            {
                id:3,
                name:"Mike",
                work:"Backend Developer"
            },
            {
                id:4,
                name:"Sophia",
                work:"Software Developer"
            }
        ];

        
        const avatarcard = avatarlistarray.map((avatarcardarry, i) => {
            return <Avatarlist key={i} id={avatarlistarray[i].id} 
                                name={avatarlistarray[i].name} 
                                work={avatarlistarray[i].work}/>
        });

        

        return (
            <div className="mainpage">
            <h1> {this.state.name} </h1>
           
            <div className="avatar"> {avatarcard}</div>
                
           <button className="bg-dark-blue" onClick = {  () => this.namechange()} title="Click here to change Title">Subscribe</button>
           <h4>Created by <a href="https://www.linkedin.com/in/chetannada/" target="_blank" rel="noreferrer">Chetan Nada</a></h4>
            </div>
            );
    }
}

export default Avatar;

