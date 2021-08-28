import React from 'react';
import ReactDOM from 'react-dom';

import Link from "next/link";

export class Footer extends React.Component{
    constructor(){
        super()
    }

    render(){
        return(
            <div id = 'Footer'>
                <div className = 'Footer-container'>
                    <div className = 'Footer-l'>
                        <p>Контакты:</p>
                        <a style = {{color:'white'}} href ='tel:+380958264605'><p>+380 (95) 826 46 05</p></a>
                        <a style = {{color:'white'}} href ='mailto:ltd.successteps@gmail.com?subject=Запит SS. Software'>ltd.successteps@gmail.com</a>
                        <p>
                            Вул. Заводська 12А, Полтава,<br />
                            Полтавська область, 36000
                        </p>
                        <div className = 'Footer-social'>
                            <a href = ''><img src = 'https://db3pap003files.storage.live.com/y4mlqFiLbMbB5il2HhsyJIt7iuNUrT4dCdS0HGjE-oCi-s9PRhWt3KhSZlE3IJVcQTQni4nYM9jN-Wy6lfWyqlTnCs-BWm2OSv_AWlJxaPkkx1xcxAq3Iir-UP9JjjVZJXPeij5Ex1wUNtOiZuh6KtSdn9im3iFDWlbPN3s5XUaV8fwu3M33o1wkKn6AVDPd8fa?width=48&height=48&cropmode=none' alt = 'instagram' /></a>
                            <a href = ''><img src = 'https://db3pap003files.storage.live.com/y4muyOM6zSD1oQ0iM-opqdIwTOjxdp10XW26v010_zSEKEO6BT_KlYAOS-I8Shex8hCuWmqOe3dD5zvCQ5c5yGqTErug_Jnnr3KK24T3hyuKb9IX9DdGXBb4E2h65Ct4s63hXT3PprMh60VAoI15kK1D2PXd1UuF6CSL9N7Yr9l8b_f_eIHB-XbQ_GHQfg-aBNj?width=58&height=43&cropmode=none' alt = 'youtube' /></a>
                        </div>
                        <p>
                            <a style = {{color:'white'}} target = "_blank" href = 'https://docs.google.com/document/d/1As7WHDfWGfcsNm3lyCh0JtAv6kte8w76/edit'>
                                (с) All rights reserved. SS. SoftWare 2021.
                            </a>
                        </p>
                    </div>
                    <div>
                        <iframe className = 'Footer-map' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1828.5772288081969!2d34.474084583270745!3d49.59777364564414!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40d82892208987bd%3A0x7f0dd5efd5b4d5a6!2z0JfQsNCy0L7QtNGB0LrQsNGPINGD0LsuLCAxMtCQLCDQn9C-0LvRgtCw0LLQsCwg0J_QvtC70YLQsNCy0YHQutCw0Y8g0L7QsdC70LDRgdGC0YwsIDM2MDAw!5e0!3m2!1sru!2sua!4v1623669196976!5m2!1sru!2sua" style = {{border: '0'}} width="500" height="350" allowfullscreen="" loading="lazy" ></iframe>
                    </div>
                </div>
                <div id = 'CoolRaccoons'>
                    <a href = 'https://coolraccoons.com.ua/'>Designed by Cool Raccoons</a>
                </div>
            </div>
        )
    }
}