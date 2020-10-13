import React, { Component } from 'react'

class Input extends Component{
    
    render(){
        return (
            <div>
                <label htmlFor={this.props.id}>{this.props.label}<br /></label>
                <input id={this.props.id} type="text" value={this.props.valor} placeholder={this.props.place} />
            </div>
            )
    }
}

export default Input;