import React, {Component} from "react";
import {FaTrash} from "react-icons/fa";

export class Order extends Component {
    render() {
        return (
            <div className='item'>
                <img src={this.props.item.img} alt=""/>
                <h2>{this.props.item.title}</h2>
                <p>{this.props.item.price}$</p>
                <FaTrash className='delete-icon' onClick={() => this.props.onDelete(this.props.item.id)}/>
            </div>
        )
    }
}

export default Order