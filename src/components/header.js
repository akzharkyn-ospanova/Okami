import React, { useState } from "react";
import { FaCartShopping } from "react-icons/fa6";
import Order from "./order";
import {Link} from "react-router-dom";

const showOrders = (props) => {
    let summa = 0
    props.orders.forEach(el => summa += Number.parseFloat(el.price))
    return (
        <div>
            {props.orders.map(el => (
                <Order onDelete={props.onDelete} key={el.id} item={el} />
            ))}
            <p className='summa'>Сумма: {new Intl.NumberFormat().format(summa)}$</p>
        </div>
    )
}

const showNothing = () => {
    return (
        <div className='empty'>
            <h2>Товаров нет</h2>
        </div>
    )
}

export default function Header(props) {
    let [cartOpen, setCartOpen] = useState(false);
    return (
        <header>
            <div>
                <span className='logo'>Okami</span>
                <ul className='nav'>
                    <li><Link to="/about">Про нас</Link></li>
                    <li><Link to="/category">Категории</Link></li>
                    <li><Link to="/items">Каталог</Link></li>
                    <li><Link to="/contactpage">Контакты</Link></li>
                </ul>
                <FaCartShopping onClick={() => setCartOpen(!cartOpen)}
                                className={`shop-cart-button ${cartOpen && 'active'}`}/>
                {cartOpen && (
                    <div className='shop-cart'>
                    {props.orders.length > 0 ? showOrders(props) : showNothing()}
                    </div>
                )}
            </div>
        </header>
    )
}
