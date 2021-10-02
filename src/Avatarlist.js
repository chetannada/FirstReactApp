import React from 'react';
import ReactDOM from 'react-dom';
import { Component } from 'react';
import './Avatar.css';
import 'tachyons';



class Avatarlist extends Component{
    constructor(){
        super();
        this.state = {
            name: Math.random()
        }
    }
    namechange(){
        this.setState({
            name: Math.random()
        })
    }

    render(){
        return(
            <div className="Avatarstyle ma4 bg-dark-blue dib grow shadow-hover pa2 tc">
                <img onClick = {  () => this.namechange()} src={`https://joeschmoe.io/api/v1/${this.state.name}`} width="200" height="200" alt="Avatar" title="Click here to change Avatar"/>
                <h1 className="sans-serif fw7"> {this.props.name} </h1>
                <p className="serif fw3"> {this.props.work} </p>
            </div>
        )
    }
}


export default Avatarlist;
