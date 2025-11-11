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
                            Вул. Героїв АТО 79,<br />
                            Полтавська область, 36000
                        </p>
                        <div className = 'Footer-social'>
                            <a href = 'https://www.instagram.com/ss_software.ua/' target="_blank"><img src = 'https://db3pap003files.storage.live.com/y4mlqFiLbMbB5il2HhsyJIt7iuNUrT4dCdS0HGjE-oCi-s9PRhWt3KhSZlE3IJVcQTQni4nYM9jN-Wy6lfWyqlTnCs-BWm2OSv_AWlJxaPkkx1xcxAq3Iir-UP9JjjVZJXPeij5Ex1wUNtOiZuh6KtSdn9im3iFDWlbPN3s5XUaV8fwu3M33o1wkKn6AVDPd8fa?width=48&height=48&cropmode=none' alt = 'instagram' /></a>
                            <a href='https://www.linkedin.com/in/%D1%82%D0%BE%D0%B2-success-steps-software-a87755261/' target="_blank"><img src = '/linkedin.png' alt = 'linkedin' /></a>
                            <a href='https://www.youtube.com/channel/UCuq6GR22hrG989lv_vee9rQ' target="_blank"><img src = '/youtube.png' alt = 'linkedin' /></a>
                        </div>
                        <p>
                            <a style = {{color:'white'}} target = "_blank" href = 'https://docs.google.com/document/d/1As7WHDfWGfcsNm3lyCh0JtAv6kte8w76/edit'>
                                (с) All rights reserved. SS. SoftWare 2021-2023.
                            </a>
                        </p>
                    </div>
                    <div>
                        <iframe className = 'Footer-map' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2587.3826877207593!2d34.505280576135185!3d49.57166987143767!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40d82f3228787f59%3A0xbc032ccded657966!2z0YPQuy4g0JPQtdGA0L7QuNCyINCQ0KLQniwgNzksINCf0L7Qu9GC0LDQstCwLCDQn9C-0LvRgtCw0LLRgdC60LDRjyDQvtCx0LvQsNGB0YLRjCwgMzYwMDA!5e0!3m2!1sru!2sua!4v1678741048722!5m2!1sru!2sua" style = {{border: '0'}} width="500" height="350" allowfullscreen="" loading="lazy" ></iframe>
                    </div>
                </div>
                {/* <div id = 'CoolRaccoons'>
                    <a href = 'https://coolraccoons.com.ua/'>Designed by Cool Raccoons</a>
                </div> */}
            </div>
        )
    }
}
export class FooterEnglish extends React.Component{
    constructor(){
        super()
    }

    render(){
        return(
            <div id = 'Footer'>
                <div className = 'Footer-container'>
                    <div className = 'Footer-l'>
                        <p>Contacts:</p>
                        <a style = {{color:'white'}} href ='tel:+380958264605'><p>+380 (95) 826 46 05</p></a>
                        <a style = {{color:'white'}} href ='mailto:ltd.successteps@gmail.com?subject=Запит SS. Software'>ltd.successteps@gmail.com</a>
                        <p>
                            st. Geroiv ATO, 79, Poltava,<br />
                            Poltava region, 36000
                        </p>
                        <div className = 'Footer-social'>
                            <a href='https://www.instagram.com/ss_software.ua/' target="_blank"><img src = 'https://db3pap003files.storage.live.com/y4mlqFiLbMbB5il2HhsyJIt7iuNUrT4dCdS0HGjE-oCi-s9PRhWt3KhSZlE3IJVcQTQni4nYM9jN-Wy6lfWyqlTnCs-BWm2OSv_AWlJxaPkkx1xcxAq3Iir-UP9JjjVZJXPeij5Ex1wUNtOiZuh6KtSdn9im3iFDWlbPN3s5XUaV8fwu3M33o1wkKn6AVDPd8fa?width=48&height=48&cropmode=none' alt = 'instagram' /></a>
                            <a href='https://www.linkedin.com/in/%D1%82%D0%BE%D0%B2-success-steps-software-a87755261/' target="_blank"><img src = '/linkedin.png' alt = 'linkedin' /></a>
                            <a href='https://www.youtube.com/channel/UCuq6GR22hrG989lv_vee9rQ' target="_blank"><img src = '/youtube.png' alt = 'linkedin' /></a>
                        </div>
                        <p>
                            <a style = {{color:'white'}} target = "_blank" href = 'https://docs.google.com/document/d/1As7WHDfWGfcsNm3lyCh0JtAv6kte8w76/edit'>
                                (с) All rights reserved. SS. SoftWare 2021-2023.
                            </a>
                        </p>
                    </div>
                    <div>
                        <iframe className = 'Footer-map' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2587.3826877207593!2d34.505280576135185!3d49.57166987143767!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40d82f3228787f59%3A0xbc032ccded657966!2z0YPQuy4g0JPQtdGA0L7QuNCyINCQ0KLQniwgNzksINCf0L7Qu9GC0LDQstCwLCDQn9C-0LvRgtCw0LLRgdC60LDRjyDQvtCx0LvQsNGB0YLRjCwgMzYwMDA!5e0!3m2!1sru!2sua!4v1678741048722!5m2!1sru!2sua" style = {{border: '0'}} width="500" height="350" allowfullscreen="" loading="lazy" ></iframe>
                    </div>
                </div>
                {/* <div id = 'CoolRaccoons'>
                    <a href = 'https://coolraccoons.com.ua/'>Designed by Cool Raccoons</a>
                </div> */}
            </div>
        )
    }
}