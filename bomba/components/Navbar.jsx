import React from 'react';
import ReactDOM from 'react-dom';

import Link from "next/link";

export class Navbar extends React.Component{
    constructor(){
        super()
    } 

    onClick(){
        console.log('open')

        let menu = document.querySelectorAll('.Navbar-mobile-menu')
        let open = 'Navbar-mobile-menu_open'

        menu[0].classList.toggle(open)
    }

    onBlur(){
        console.log('close')
        let menu = document.querySelectorAll('.Navbar-mobile-menu')
        let open = 'Navbar-mobile-menu_open'

        menu[0].classList.remove(open)
    }

    render(){
        return(
            <nav id = 'Navbar'>
                <Link href={'/'}><a href=""><img alt="Logo" src="/Logo.svg" /></a></Link>
                <div className = "Navbar-buttons">
                    <a className = "Navbar-button" href = "#aboutus" >Про нас</a>
                    <a className = "Navbar-button" href = "#Footer" >Контакти</a>
                    <a className = "Navbar-button" href = "#Block_2" >Hydraulics</a>
                    <a className = "Navbar-button-d" href = "#download" >Створити запит</a>
                </div>
                <button onBlur={this.onBlur = this.onBlur.bind(this)} onClick={this.onClick = this.onClick.bind(this)} className = 'Navbar-mobile-button'>Меню</button>
                <div className = 'Navbar-mobile-menu'>
                    <a className = "Navbar-mobile-menu-button" href = "#aboutus" >Про нас</a>
                    <span className = 'Navbar-mobile-menu-button-line'></span>
                    <a className = "Navbar-mobile-menu-button" href = "#Footer" >Контакти</a>
                    <span className = 'Navbar-mobile-menu-button-line'></span>
                    <a className = "Navbar-mobile-menu-button" href = "#others" >Hydraulics</a>
                    <span className = 'Navbar-mobile-menu-button-line'></span>
                    <a className = "Navbar-mobile-menu-button-d" href = "#download" >Створити запит</a>
                </div>
            </nav>
        )
    }
}