import React, { Component } from 'react';

export default class SiteHeader extends Component {
    render() {
        return (
            <header>
                <h1>Построение графа сайта</h1>
                <div className="form__group field">
                    <input type="text" name="site-addr" className="site-addr form__field" placeholder='Введите адрес сайта' />
                    <label htmlFor="site-addr" className="form__label">Введите адрес сайта</label>
                </div>
            </header>
        )
    }
}
