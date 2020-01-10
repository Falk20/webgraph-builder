import React, { Component } from 'react';

export default class SiteHeader extends Component {
    render() {
        return (
            <header>
                <h1>Построение графа сайта</h1>
                <input type="text" className="site-addr" placeholder='Введите адрес сайта'/>
            </header>
        )
    }
}
