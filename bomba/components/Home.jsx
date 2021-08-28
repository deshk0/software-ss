import React from 'react';
import ReactDOM from 'react-dom';

import Link from "next/link";

export class HomePage extends React.Component{ 
    constructor(){
        super()

        this.state = {
            view: [
                [

                    <Block_1 />,
                    <Block_2 />,
                    <Block_3 />,
                    <Block_4 />,
                    <Block_6 />,
                    <Block_7 />
                    
                ],
                [

                    <Block_1 />,
                    <BLock_2_mobile />,
                    <Block_3 />,
                    <Block_4 />,
                    <Block_6 />,
                    <Block_7 />

                ]
            ],
            index: 0

        }
    }
    componentDidMount(){
        let root = document.getElementsByClassName('Block-2-2')
        let options = {
            root: null,
            rootMargin: '0px',
            threshold: 0.5
        }
        
        // функция обратного вызова
        let callback = function(entries, observer){
            console.log(entries)
            if(entries){
                let photo = document.getElementsByClassName('Block-2-img')

                console.log('hi')
                photo[0].style.opacity = `1`

            }else{
                console.log('(')

            }
            

        }
        
        // наблюдатель
        let observer = new IntersectionObserver((entries, observer) => {
            entries.forEach(
                entry => {
                    if(entry.isIntersecting){
                        let photo = document.getElementsByClassName('Block-2-img')
                        console.log(entry)

                        console.log('hi')
                        entry.target.style.animation = `animation 0.8s forwards ease-out`

                    }if(!entry.isIntersecting){
                        let photo = document.getElementsByClassName('Block-2-img')

                        console.log('(')
                        entry.target.style.animation = `animation_gone 0.8s forwards ease-out`

                    }
                }
            )
        }, options)
        let observer_2 = new IntersectionObserver((entries, observer) => {
            entries.forEach(
                entry => {
                    if(entry.intersectionRatio > 0){
                        let photo = document.getElementsByClassName('Block-2-10-l')
                        console.log(entry)

                        console.log('hi')

                        photo[0].style.display = `flex`
                        photo[0].style.animation = `animation 0.8s forwards ease-out`

                    }if(!entry.isIntersecting){
                        let photo = document.getElementsByClassName('Block-2-10-l')

                        console.log('(')

                        photo[0].style.display = `none`
                        photo[0].style.animation = `animation_gone 0.8s forwards ease-out`

                    }
                }
            )
        }, {threshold: 0.3})
        let observer_3 = new IntersectionObserver((entries, observer) => {
            entries.forEach(
                entry => {
                    if(entry.isIntersecting){
                        let photo = document.getElementsByClassName('Block-2-10-l')
                        console.log(entry)

                        console.log('hi')

                        photo[0].style.display = `none`
                        photo[0].style.animation = `animation_gone 0.8s forwards ease-out`

                    }
                }
            )
        }, {threshold: 0.1})
        //отслеживаемый обьект
        let target_1 = document.getElementById('Block-2-3')
        let target_2 = document.getElementById('Block-2-4')
        let target_3 = document.getElementById('Block-2-5')
        let target_4 = document.getElementById('Block-2-6')
        let target_5 = document.getElementById('Block-2-7')
        let target_6 = document.getElementById('Block-2-8')
        let target_7 = document.getElementById('Block-2-9')
        let target_8 = document.getElementById('Block-2-10')
        let target_9 = document.getElementById('others')




        observer.observe(target_1)
        observer.observe(target_2)
        //observer.observe(target_3)
        observer.observe(target_4)
        observer.observe(target_5)
        observer.observe(target_6)
        //observer.observe(target_7)
        observer_2.observe(target_8)
        observer_3.observe(target_9)






        if(document.body.clientWidth < 1300){
            this.setState({
                index: 1
            })
        }else{
            this.setState({
                index: 0
            })
        }
        window.addEventListener('resize', () => {
            console.log('its working')
            if(document.body.clientWidth < 1300){
                this.setState({
                    index: 1
                })
            }else{
                this.setState({
                    index: 0
                })
            }
        })
    }

    render(){
        return(
            <>
                {this.state.view[this.state.index]}
            </>
        )
    }
}

class Block_1 extends React.Component{
    constructor(){
        super()

        this.state = {
            index: 0
        }

        this.photos = [
            'https://db3pap003files.storage.live.com/y4mTp9W46JqS-V3GrsP6MqP8XtG9qJpiX_KSIgb5vkbcZs11KxIgxWZhFT_-I-f1pahkW-dUXBnJsWkAiRtl1P9acpiFd7pcs7nAlKNbeayGe_OpI7uE8vRd82dt3fo15g0F3eAj-2VoTNTuHZoEuDy358lYWkBF04Ul1q7sh35O0GReiCdkVnzxkpUMeBUcEg3?width=1920&height=1080&cropmode=none',
            'https://db3pap003files.storage.live.com/y4mwHjbRW-m1oJvbuqclesf52ijBY6S4HqdGY1Wt37mZZ4Hnp9AeghhT4TppbbAkJb8ED4uy32TWRElN8tnxbG0gK7Ymz6vXqHnQ5tsUHgoI6kUEMI_gdS69bxGuR6KtA43Twxh_JNz5qeihsL9Yg9huNlzaf0_302Q8gp1z7xBrucusMf_hKXJHnS8Ft2R8UHq?width=1920&height=1080&cropmode=none',
            'https://db3pap003files.storage.live.com/y4mWwrg5Maw4pvMgeO6lE7Nfy4Wzuq8j29RYwCzNjjw6oVQG_j7w2-z1l-tGAxSBZ3XlTpPwmv_2HxiwTCjl9oIxsSKqqj2NTKLnA0qBWS8K31RmHbJ43FSEC9ZOrhPTrta2BhqiDyNKvlYiuXVoyroXZDXGKY0nNY-A8vj_v6TZNpVbaTindQxIYnWMiFTjD0N?width=1920&height=1080&cropmode=none',
            'https://db3pap003files.storage.live.com/y4mVLxdYBD-fBMbAUzJ3rotK_ImvLHPNds0BWDxS68zDwLGnkNwtDps_mRXeN1h-5XQ45tSpw5znHlz__DAx9z9eBwEtW_rd1kclYoX-VOyqO3oNjpPz_DQBox8wbfI7PVumr-sw4pe-3JpcSZ0_FGNoQmAtCAnN97273CpfrRS0m6uT9FLK0bEh2gxSYvPCpD6?width=1920&height=1080&cropmode=none',
        ]
    }

    

    componentDidMount(){
        let dots = document.getElementsByClassName('Block-1-r-dot')
        let photo = document.getElementsByClassName('Block-1-r-photo')
        
        photo[0].addEventListener('touchstart', () =>{
            console.log('hi')
            this.setState({index: 0})

        })

        dots[0].addEventListener('click', (e) =>{
            e.preventDefault()

            this.setState({index: 0})

        })
        dots[1].addEventListener('click', (e) =>{
            e.preventDefault()

            this.setState({index: 1})

        })
        dots[2].addEventListener('click', (e) =>{
            e.preventDefault()

            this.setState({index: 2})

        })
        dots[3].addEventListener('click', (e) =>{
            e.preventDefault()

            this.setState({index: 3})

        })

    }
    
    Next(){
        if(this.state.index <= 2){

            this.setState({index: this.state.index + 1})
            console.log('Next') 

        }
    }
    Prev(){
        if(this.state.index > 0){

            this.setState({index: this.state.index - 1})
            console.log('Prev') 

        }
    }
    render(){
        return(
            <div className = "Block">
                <div className='Flex-container-row'>
                    <div className="Block-1-l">
                        <h1 className="Site-title">SUCCESS STEPS. SOFTWARE</h1>
                        <div className='Block-1-l-paragraph-1'>
                            Наша команда має за мету надати інструмент для висококваліфікованого персоналу наших клієнтів,за допомогою якого їхнє спілкування та прийняття рішень стане плідним та лаконічним.
                        </div>
                        <div className='Block-1-l-paragraph-2'>
                        Ми пропонуємо Вам програмний продукт, що зменшить витрати часу на прийняття рішення та надасть можливість врахувати всі ризики. Все це можливо завдяки поєднанню в собі первинної інформації із свердловини та можливістю робити перевірочні та проектувальні розрахунки в режимі онлайн.
                        </div>
                    </div>
                    <div className="Block-1-r">
                        <img className="Block-1-r-photo" alt="photos" src={this.photos[this.state.index]} />
                        <div className="Block-1-r-dots">
                            <a href = '' style = {{backgroundColor: `${this.state.index === 0 ? 'var(--orange)' : 'white'}`}} className="Block-1-r-dot"></a>
                            <a href = '' style = {{backgroundColor: `${this.state.index === 1 ? 'var(--orange)' : 'white'}`}} className="Block-1-r-dot"></a>
                            <a href = '' style = {{backgroundColor: `${this.state.index === 2 ? 'var(--orange)' : 'white'}`}} className="Block-1-r-dot"></a>
                            <a href = '' style = {{backgroundColor: `${this.state.index === 3 ? 'var(--orange)' : 'white'}`}} className="Block-1-r-dot"></a>
                        </div>
                        <div className = 'BLock-1-mobile-buttons'>
                            <div onClick = {this.Prev = this.Prev.bind(this)} className = 'BLock-1-mobile-buttons-button'>
                                ←
                            </div>
                            <div onClick = {this.Next = this.Next.bind(this)} className = 'BLock-1-mobile-buttons-button'>
                                →
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

class Block_2 extends React.Component{
    constructor(){
        super()
        this.state = {
            index: 0
        }
        this.photos = [
            'https://db3pap003files.storage.live.com/y4mirGx0AZXcjBPIHsmNDkVqdcUC7x60N9kFDszJzm3u9mufdZ3k7iTABzps7Z9jfbvNS3XjeFmWFPXk3bb_59kR_EbeUYEKToLqbMVqOu7LZ_FKaOUvwHMJzSTgJtKkiYn2ha3iVFd3RkFZ59igAUu5TvitHen2eDMdvKXcj-asB-v7Qm5b9IqpNzNhfLdYH0Y?width=660&height=426&cropmode=none',
            'https://db3pap003files.storage.live.com/y4m7KvHZ9rzDHIgF9A04EXWhwFsDYRi777N0U0h7gcdXVkP-wdU9waB8qtNk6ea32l9V74RsvtthIsLFd_M_T1GiqfUUTYehNKExUcJLY4pePpOnRUGo4ZHk3tGp0WOaaobwBhNuiu4NJ7ywhzSVmE-JuPkFnECKhedYAjbdKIdI-BuiQznwzYfo7jgU8j5dDWS?width=660&height=427&cropmode=none',
            'https://db3pap003files.storage.live.com/y4mWwv76nnl7QzsTT8ibW5fdcCmJKqW7OJs_qK1tpgkEatNcohNwimgOT-G2wwNqbJ3a2Ac2xLsRwDC-Tlpsb2IQfvX8bsBmLj9xRfmJ2k6QotRdu30xH1GiDK8sp6CCAfXkLT8iZepPJ9PxwjQjJpK3nQBDTMiyyJ62zPiEhxA6GjZ3R2Guiy1TX4Dfl5SikFy?width=660&height=427&cropmode=none',
            'https://db3pap003files.storage.live.com/y4mczU5TsRXYctyV45p_TtEwfqh5h_1YRwnYuiz1-CA6UHiOwWYX2Har14cQz7-UYMetWYhflZAsrDhxOnixDLQlfNW6LNv43_-n4hE3TUE1iaiSrh2P1bzLki2anhRy08HWU4Z8yS-Xhwd489LN8FzEijgTvvtHvMYrZ2dH_d3VmaVXCqE5I28UcJhUiEPpj6C?width=660&height=427&cropmode=none',
            'https://db3pap003files.storage.live.com/y4mh9B4OpCJ_LZSoE8rLxXFu8cSlIgnlR4COF9Posl-qHO3tf6scGTtPYl2bZIWiMo1MQsiTHe4eD5VRLCGKUYlic22cVX6IxXjGX9JoEleXUZSy4__DjZxhrm2JTeTJAgfuGsODP8p3vXbVg-UKtkUFgHDKobI7E6Isavq20RQo7A8uQCvPueRrIHEyOg9ykef?width=660&height=427&cropmode=none',
            'https://db3pap003files.storage.live.com/y4mHQrYPwo-7NRR9rGHD87ocjwz9-Uvu6vwiRwXpzQ--jxTwVtNCcVAHZTseKgGh_CeooqeuxWytCkXDdXwhKZpSMHVXltMRgh1UYd-a3JOY3eKXC7C5PUThHXL1SwFbhRAcN42I8crEXUNyC0HVK0LHQWjXTH9QhacfjjRHiiIWyyoZLYCh46959-512vYTOJ_?width=660&height=427&cropmode=none',
        ]
    }

    onWheel1(){
        //document.body.style.overflow = 'hidden'
        console.log('Da')
        window.scrollTo(0, 2040)
        //scroolToTop()

        //function scroolToTop(){
        //    let scrolled = window.pageYOffset
        //    let timer = setTimeout(scroolToTop, 1);
//
        //    if(scrolled < 2020){
        //        console.log('pognal')
    //
        //        let scrolled = window.pageYOffset
        //        scrolled = scrolled + 2
    //
        //        window.scrollTo(0, scrolled)
        //        timer
//
        //    }else{
        //        clearTimeout(timer)
        //        console.log('vse')
        //    }
        //}

    }

    render(){
        return(
            <div id='Block_2'>
                <img className = 'Block-2-graphic' src = '/graphic-1.svg' />
                <div id = 'hydraulics' className="Block">
                    <div className='Site-title' >
                        Розрахунки які охоплює <b style={{color:'var(--orange)'}}>Hydraulics</b>:
                    </div>
                    <div className="Flex-container-row">
                        <div className="Block-2-l">
                        <ul>
                            <li>Гідростатичний тиск та гірський тиск</li>
                            <li>
                                Гідродинамічний тиск по інструменту
                                та у кільцевому просторі.
                            </li>
                            <li>
                                Результуючий тиск, що діє на стінку свердловини.
                            </li>
                            <li>
                                Гідродинамічні характеристики долота.
                            </li>
                            <li>
                                Транспортування шламу. Розділ містить інформацію  
                                про результуючу швидкість та час переміщення 
                                частинок вибуреної породи заданих параметрів та 
                                місця їх концентрації з врахуванням режиму буріння.
                            </li>
                            <li>
                                Еквівалента густина циркуляції як міра тиску так і 
                                непрямий показник кількості шламу у 
                                кільцевому просторі.
                            </li>
                            <li>
                                Траєкторія свердловини, просторові кути 
                                викривлення та інтенсивності викривлення 
                                свердловини.
                            </li>
                        </ul>
                    </div>
                        <img alt='logo' src='https://db3pap003files.storage.live.com/y4moNoEqQaWNTp82jkHtv1aVgTZ6dD4ZUbBHj3GkEFktoyd1S7eAq5rAUNr11dZcOG274gjKiCJOxSfmVvCk9OP5quYyOeO_l40ttvKllopzFA8D8OM2Veneh7c6kLnJlf1Eki-HQLoRYAGEFCqGbbhIpO-G8u_rIIboZmdu78fX8poUXmdQfFz2PqcPiyHTXzs?width=525&height=524&cropmode=none' />
                    </div>  
                </div>



                <div className = "Block-2-2" >
                    <div className = 'Wrapper'>
                        <div onClick = {this.onWheel1 = this.onWheel1.bind(this)} id = "Block-2-2" className="Block-2">
                            <div className='Site-title'>
                                Які можливості<br />
                                відкриває додаток
                            </div>
                            <div className="Block-2-1-desc">
                                <p>Рекомендуємо Вам проектувати розрахунок на кінець буріння інтервалу під колону.</p>
                                <p>
                                    Наш додаток веде Вас по логічному шляху до створення проекту та розкриває усі можливі нюанси даного процесу. Рекомендуємо Вам проектувати розрахунок на кінець буріння інтервалу під колону. З допомогою реалізованого у програмі рішення, Ви  можете заощадити багато часу на проектування нових і нових ситуацій. 
                                </p>
                                <p>
                                Якщо у вас з’явились каверни, звуження,або Ви бачите ознаки осипів стінок свердловини, змінилась компоновка чи режим буріння, промивання свердловини, перейшли на іншу промивальну рідину чи просто змінився вплив температури, працюєте через дросель, втратили частину компоновки або насадку -  Ви можете змінити це у декілька рухів та перевірити Ваші підозри.                                        Регулюйте положення інструменту за допомогою повзунка чи визначайте його положення до міліметру у спеціальній комірці.
                                </p>
                            </div>  
                        </div>
                        <div id = 'Block-2-3' className="Block-2">
                            <p className = "Block-2-p">
                            Усі розрахунки враховують стандартний набір параметрів та зміну реологічних властивостей промивальної рідини поінтервально в залежності від температури та тиску, дійсні напруження в рідині залежно від поперечного перерізу, швидкість обертання бурильної колони, та ексцентриситет. Також надаються допоміжні інструменти для визначення моделі та реологічних параметрів рідини, інструмент для визначення реальних показників реології в інтервалі та розрахунок температури циркулюємої рідини в свердловині залежно від середовища та продуктивності бурових насосів.
                            </p>
                            
                            <img className='Block-2-img' alt="screens" src='https://db3pap003files.storage.live.com/y4mTp9W46JqS-V3GrsP6MqP8XtG9qJpiX_KSIgb5vkbcZs11KxIgxWZhFT_-I-f1pahkW-dUXBnJsWkAiRtl1P9acpiFd7pcs7nAlKNbeayGe_OpI7uE8vRd82dt3fo15g0F3eAj-2VoTNTuHZoEuDy358lYWkBF04Ul1q7sh35O0GReiCdkVnzxkpUMeBUcEg3?width=1920&height=1080&cropmode=none' />

                        </div>
                        <div id = 'Block-2-4' className="Block-2">
                            <div>
                                <span className="Site-title">Зручні графіки</span>
                                <p className = "Block-2-p">
                                Результати розрахунків у графіках та таблицях з інтерактивною взаємодією на графіках, швидке зчитування даних з будь-якого перерізу по свердловині. 
                                </p>
                                <p className = "Block-2-p">
                                Для зручності користувача є можливість зберегти необхідні інтервали, дані яких передаються у зведену таблицю результатів для подальшого аналізу користувачем.
                                </p>
                            </div>
                            <img className='Block-2-img' alt="screens" src='https://db3pap003files.storage.live.com/y4mDXnuFIwmTMCJKLNwZa7GbWfsnN9elHKWVgBfKprslFz-5yAlErXwV9VMPi-RJSXqTsYifMVIau6bbtmauN561HVvoc3IBMxWFmpikJZMENHgWNOOOuziiMLlPuw8wdZSDvV8AZctq6hflyGuBq66MfVzy4cZQON1OKugLgjA6QQsQ1BZZdW4ZQpHF6nWC5ae?width=1920&height=1080&cropmode=none' />
                            

                        </div>
                        {/* 
                        <div id = 'Block-2-5' className="Block-2">
                            <div>
                                <p className = "Block-2-p">
                                    Наш додаток веде Вас по логічному
                                    шляху до створення проекту
                                    та розкриває усі можливі нюанси
                                    даного процесу.
                                </p>
                                <p className = "Block-2-p">
                                    Візуалізація даних змодельованих 
                                    у інструменті для побудови 
                                    просторових свердловин. 
                                </p>
                            </div>
                            <img className='Block-2-img' alt="screens" src='https://db3pap003files.storage.live.com/y4mrCfUgZA6FV2rNQ5kR9N9HQENskS01FcJ9AJohGTOaz17auKKNSaTu0qMxY12yPCUh0xy8iB5P2o8SjplzIo2kKkswFdFP1O5JyFuMwSWp3uVMPQYNbn8TA6IbpDgrlpsYYKTj0L4EutV6T6ewndIqToK6J_Eg6fqfwVHcZjNBx8uN9Y--B_7_G3vmlPQ-c7h?width=1920&height=1080&cropmode=none' />

                        </div>
                        */}
                        <div id = 'Block-2-6' className="Block-2">
                            <div>
                                <span className = "Site-title">Інструменти</span>
                                <p className = "Block-2-p">
                                    Зручна таблиця для моделювання зміни реологічних параметрів промивальної рідини у кільцевому просторі по довжині свердловини. 
                                </p>
                                <p className = "Block-2-p">
                                    Наявність чотирьох основних використовуваних моделей рідини для найточніших розрахунків.                                 </p>
                                <p className = "Block-2-p">
                                    Програма автоматично аналізує напруження які виникають у промивальній рідині для кожного з перерізів. По результатам аналізу програма обирає реологічні параметри Вашої промивальної рідини,що є дійсними для кожного перерізу.
                                </p>
                            </div>
                            <img className='Block-2-img' alt="screens" src='https://db3pap003files.storage.live.com/y4m9jK6qYXozDaYop6fjVu3G-r8KbKcqoFR-f1lcdxNgM6INqXrcOfWkDDvWl-n5uIi6X6LU1S9D7L-xpKhClnW5IYxS3UulZwozrh-pVzoj4FJLuKggVeA0LuT5cNkNMgWiDWUHdD6a7VG8EKZmpGxPez0U0qXUsqVTxswRyHIlZ-GnNnYa51vlPVGbNpv5HWP?width=1920&height=1080&cropmode=none' />

                        </div>
                        <div id = 'Block-2-7' className="Block-2">
                            <p className = "Block-2-p">
                            Комфортний та інтуїтивний у користуванні інструмент для моделювання бурильної колони з врахуванням усіх можливих унікальних геометричних розмірів Вашого обладнання. Для покращення роботи було створено додатково спеціальну таблицю для тимчасового зберігання елементів бурильної колони.
                            </p>
                            <img className='Block-2-img' alt="screens" src='https://db3pap003files.storage.live.com/y4mZFxLy8ZIwTjfAPIXgE8m1iuJ8uF_V93FjetT4KwSkGOGFgrTXXiLAXewj56pJrjyNP076TAU9wvcFF-7zrvWuItSgR-18zbjeEUcR199aEGDAlpANKAbCvcwVLF8pzq548S_2M3mSB-iluYKppuY9THgv8Sw8qQt2t4r822UnKFVSTTDpkOtAtDsjwwEWRld?width=1920&height=1080&cropmode=none' />

                        </div>
                        <div id = 'Block-2-8' className="Block-2">
                            <div>
                            <span className="Site-title">Швидко<br /> та просто</span>
                            <p className = "Block-2-p">
                                Забудьте про купу незручних таблиць та складний підхід до формування проекту, ми подбали про ваш час.
                                Зручні у заповнені та лаконічні модальні вікна де ми вимагаємо від Вас лише найнеобхіднішу інформацію для розрахунку  вашого проекту.
                            </p>
                            </div>
                            <img className='Block-2-img' alt="screens" src='https://db3pap003files.storage.live.com/y4ma1So-UJJhbA09TbOsd0V8E9_7jb8k2JyDxZ3-EWaB9mkagqewV0MiCXQA7IaPVgZCiMq_J96956W_EQF-QN7sVDFmB9yT3ZYWeb8a296VeY9isN1PWcUakdM4w5KSujottAadHgRMwGmVjnXu0e8IjZ70yFTogyNr4LQiG_wYsxd57eJCFwIJMA5T2xpe4eU?width=1920&height=1080&cropmode=none' />

                        </div>
                        {/* 
                        <div id = 'Block-2-9' className="Block-2">
                            <div>
                                <span className="Site-title">Швидко<br /> та просто</span>
                                <p className = "Block-2-p">
                                    Забудьте про купу незручних таблиць
                                    та складний підхід до формування проекту,
                                    ми подбали про ваш час. 
                                </p>
                                <p className = "Block-2-p">
                                    Зручні у заповнені та лаконічні модальні
                                    вікна де ми вимагаємо від Вас лише
                                    найнеобхіднішу інформацію для побудови вашого проекту.
                                </p>
                            </div>
                            <img alt="screens" src={this.photos[0]} />

                        </div>
                        */}

                        {/*<img className = "Block-2-photo" alt="screens" src={this.photos[this.state.index]} />*/}
                    </div>
                </div>

                <div id = 'Block-2-10' className="Block-2-10">
                    <div className="Flex-container-row">
                        <div className="Block-2-10-l">
                            <span className="Site-title">Всі параметри<br /> в одній таблиці</span>
                            <p className = "Block-2-p">
                                Швидкий доступ до зміни основних параметрів, таких як
                                режими буріння, місцеві втрати тиску у вибійному обладнанні,
                                характеристики шламу та густини промивальної рідини у кільцевому просторі
                            </p>
                        </div>
                        <img className='Block-2-10-l-img' alt="screen" src='https://db3pap003files.storage.live.com/y4mlcaL1OMbyqTuIJO911cZ53n-kXyM3CLR3a8kHTKD0_frVeHQ0g6VT-EGI3eGlSw0Cb26wPME4l9gKFpPNdeWxJyNHv1KoFauGFUkLuiVcoCs-QFQOjakN15MjWaLOT8RR889CK8HUpByzpzE7Pv-jIrHMUaIRTje6wGES0ZWz_XamEb1n6BvtY1urrOoSar_?width=472&height=1634&cropmode=none' />
                    </div>
                </div>

            </div>
        )
    }
}

class BLock_2_mobile extends React.Component{
    constructor(){
        super()
    }

    render(){
        return(
            <div className = "Block">
                <div style = {{margin:'0 20px'}} className='Site-title' >
                    Розрахунки які охоплює <b style={{color:'var(--orange)'}}>Hydraulics</b>:
                </div>
                <div className="Flex-container-row">
                    <div className="Block-2-l">
                        <ul>
                            <li>Гідростатичний тиск та гірський тиск</li>
                            <li>
                                Гідродинамічний тиск по інструменту
                                та у кільцевому просторі.
                            </li>
                            <li>
                                Результуючий тиск, що діє на стінку свердловини.
                            </li>
                            <li>
                                Гідродинамічні характеристики долота.
                            </li>
                            <li>
                                Транспортування шламу. Розділ містить інформацію  
                                про результуючу швидкість та час переміщення 
                                частинок вибуреної породи заданих параметрів та 
                                місця їх концентрації з врахуванням режиму буріння.
                            </li>
                            <li>
                                Еквівалента густина циркуляції як міра тиску так і 
                                непрямий показник кількості шламу у 
                                кільцевому просторі.
                            </li>
                            <li>
                                Траєкторія свердловини, просторові кути 
                                викривлення та інтенсивності викривлення 
                                свердловини.
                            </li>
                        </ul>
                    </div>                
                </div>  
            
                <div className = 'Block-2-mobile-2'>
                    <div style = {{margin:'20px'}} className='Site-title' >
                        Які можливості
                        відкриває додаток
                    </div>
                    <p className = 'p-mobile'>
                    Рекомендуємо Вам проектувати розрахунок на кінець буріння інтервалу під колону.
                    </p>
                    <p className = 'p-mobile'>
                    Наш додаток веде Вас по логічному шляху до створення проекту та розкриває усі можливі нюанси даного процесу. Рекомендуємо Вам проектувати розрахунок на кінець буріння інтервалу під колону. З допомогою реалізованого у програмі рішення, Ви можете заощадити багато часу на проектування нових і нових ситуацій.                    </p>
                    <p className = 'p-mobile'>
                    Якщо у вас з’явились каверни, звуження,або Ви бачите ознаки осипів стінок свердловини, змінилась компоновка чи режим буріння, промивання свердловини, перейшли на іншу промивальну рідину чи просто змінився вплив температури, працюєте через дросель, втратили частину компоновки або насадку - Ви можете змінити це у декілька рухів та перевірити Ваші підозри. Регулюйте положення інструменту за допомогою повзунка чи визначайте його положення до міліметру у спеціальній комірці.                    </p>
                </div>

                <div className = 'Block-2-mobile-3'>
                    <img className = 'Block-2-mobile-photo' alt = 'screen' src = 'https://db3pap003files.storage.live.com/y4mTp9W46JqS-V3GrsP6MqP8XtG9qJpiX_KSIgb5vkbcZs11KxIgxWZhFT_-I-f1pahkW-dUXBnJsWkAiRtl1P9acpiFd7pcs7nAlKNbeayGe_OpI7uE8vRd82dt3fo15g0F3eAj-2VoTNTuHZoEuDy358lYWkBF04Ul1q7sh35O0GReiCdkVnzxkpUMeBUcEg3?width=1920&height=1080&cropmode=none' />
                    <p className = 'p-mobile'>
                    Усі розрахунки враховують стандартний набір параметрів та зміну реологічних властивостей промивальної рідини поінтервально в залежності від температури та тиску, дійсні напруження в рідині залежно від поперечного перерізу, швидкість обертання бурильної колони, та ексцентриситет. Також надаються допоміжні інструменти для визначення моделі та реологічних параметрів рідини, інструмент для визначення реальних показників реології в інтервалі та розрахунок температури циркулюємої рідини в свердловині залежно від середовища та продуктивності бурових насосів.                    </p>
                </div>

                <div className = 'Block-2-mobile-4'>
                    <div style = {{margin:'0 20px'}} className='Site-title' >
                        Зручні графіки
                    </div>
                    <img className = 'Block-2-mobile-photo' alt = 'screen' src = 'https://db3pap003files.storage.live.com/y4mDXnuFIwmTMCJKLNwZa7GbWfsnN9elHKWVgBfKprslFz-5yAlErXwV9VMPi-RJSXqTsYifMVIau6bbtmauN561HVvoc3IBMxWFmpikJZMENHgWNOOOuziiMLlPuw8wdZSDvV8AZctq6hflyGuBq66MfVzy4cZQON1OKugLgjA6QQsQ1BZZdW4ZQpHF6nWC5ae?width=1920&height=1080&cropmode=none' />
                    <p className = 'p-mobile'>
                    Результати розрахунків у графіках та таблицях з інтерактивною взаємодією на графіках, швидке зчитування даних з будь-якого перерізу по свердловині.
                    </p>
                    <p className = 'p-mobile'>
                    Для зручності користувача є можливість зберегти необхідні інтервали, дані яких передаються у зведену таблицю результатів для подальшого аналізу користувачем.
                    </p>
                </div>
                {/* 
                <div className = 'Block-2-mobile-5'>
                    <img className = 'Block-2-mobile-photo' alt = 'screen' src = 'https://db3pap003files.storage.live.com/y4mrCfUgZA6FV2rNQ5kR9N9HQENskS01FcJ9AJohGTOaz17auKKNSaTu0qMxY12yPCUh0xy8iB5P2o8SjplzIo2kKkswFdFP1O5JyFuMwSWp3uVMPQYNbn8TA6IbpDgrlpsYYKTj0L4EutV6T6ewndIqToK6J_Eg6fqfwVHcZjNBx8uN9Y--B_7_G3vmlPQ-c7h?width=1920&height=1080&cropmode=none' />
                    <p className = 'p-mobile'>
                        Наш додаток веде Вас по логічному шляху до створення проекту та розкриває усі можливі нюанси даного процесу.
                    </p>
                    <p className = 'p-mobile'>
                        Візуалізація даних змодельованих у інструменті для побудови просторових свердловин. 
                    </p>
                </div>
                */}

                <div className = 'Block-2-mobile-6'>
                    <div style = {{margin:'0 20px'}} className='Site-title' >
                        Інструменти
                    </div>
                    <img className = 'Block-2-mobile-photo' alt = 'screen' src = 'https://db3pap003files.storage.live.com/y4m9jK6qYXozDaYop6fjVu3G-r8KbKcqoFR-f1lcdxNgM6INqXrcOfWkDDvWl-n5uIi6X6LU1S9D7L-xpKhClnW5IYxS3UulZwozrh-pVzoj4FJLuKggVeA0LuT5cNkNMgWiDWUHdD6a7VG8EKZmpGxPez0U0qXUsqVTxswRyHIlZ-GnNnYa51vlPVGbNpv5HWP?width=1920&height=1080&cropmode=none' />
                    <p className = 'p-mobile'>
                    Зручна таблиця для моделювання зміни реологічних параметрів промивальної рідини у кільцевому просторі по довжині свердловини.
                    </p>
                    <p className = 'p-mobile'>
                    Наявність чотирьох основних використовуваних моделей рідини для найточніших розрахунків.
                    </p>
                    <p className = 'p-mobile'>
                    Програма автоматично аналізує напруження які виникають у промивальній рідині для кожного з перерізів. По результатам аналізу програма обирає реологічні параметри Вашої промивальної рідини,що є дійсними для кожного перерізу.
                    </p>
                </div>

                <div className = 'Block-2-mobile-7'>
                    <img className = 'Block-2-mobile-photo' alt = 'screen' src = 'https://db3pap003files.storage.live.com/y4mZFxLy8ZIwTjfAPIXgE8m1iuJ8uF_V93FjetT4KwSkGOGFgrTXXiLAXewj56pJrjyNP076TAU9wvcFF-7zrvWuItSgR-18zbjeEUcR199aEGDAlpANKAbCvcwVLF8pzq548S_2M3mSB-iluYKppuY9THgv8Sw8qQt2t4r822UnKFVSTTDpkOtAtDsjwwEWRld?width=1920&height=1080&cropmode=none' />
                    <p className = 'p-mobile'>
                    Комфортний та інтуїтивний у користуванні інструмент для моделювання бурильної колони з врахуванням усіх можливих унікальних геометричних розмірів Вашого обладнання. Для покращення роботи було створено додатково спеціальну таблицю для тимчасового зберігання елементів бурильної колони.
                    </p>
                </div>

                <div className = 'Block-2-mobile-8'>
                    <div style = {{margin:'0 20px'}} className='Site-title' >
                        Швидко <br />
                        та просто
                    </div>
                    <img className = 'Block-2-mobile-photo' alt = 'screen-8' src = 'https://db3pap003files.storage.live.com/y4ma1So-UJJhbA09TbOsd0V8E9_7jb8k2JyDxZ3-EWaB9mkagqewV0MiCXQA7IaPVgZCiMq_J96956W_EQF-QN7sVDFmB9yT3ZYWeb8a296VeY9isN1PWcUakdM4w5KSujottAadHgRMwGmVjnXu0e8IjZ70yFTogyNr4LQiG_wYsxd57eJCFwIJMA5T2xpe4eU?width=1920&height=1080&cropmode=none' />
                    <p className = 'p-mobile'>
                        Комфортний та інтуїтивний у користуванні інструмент для моделювання бурильної колони з врахуванням усіх можливих унікальних геометричних розмірів Вашого обладнання. Для покращення роботи було створено додатково спеціальну таблицю для тимчасового зберігання елементів бурильної колони.
                    </p>
                </div>


                <div className = 'Block-2-mobile-10'>
                    <div style = {{margin:'0 20px'}} className='Site-title' >
                        Всі параметри <br />
                        в одній таблиці
                    </div>
                    <p className = 'p-mobile'>
                        Швидкий доступ до зміни основних параметрів, таких як режими буріння, місцеві втрати тиску у вибійному обладнанні, характеристики шламу та густини промивальної рідини у кільцевому просторі. 
                    </p>
                    <img className = 'Block-2-mobile-photo-10' alt = 'screen' src = 'https://db3pap003files.storage.live.com/y4mlcaL1OMbyqTuIJO911cZ53n-kXyM3CLR3a8kHTKD0_frVeHQ0g6VT-EGI3eGlSw0Cb26wPME4l9gKFpPNdeWxJyNHv1KoFauGFUkLuiVcoCs-QFQOjakN15MjWaLOT8RR889CK8HUpByzpzE7Pv-jIrHMUaIRTje6wGES0ZWz_XamEb1n6BvtY1urrOoSar_?width=472&height=1634&cropmode=none' />
                </div>


            </div>
        )
    }
}
class Block_3 extends React.Component{
    constructor(){
        super()
    }


    render(){
        return(
            <div id = 'others' className = "Block-3">
                <div className = "Site-title">В розробці</div>
                <div className = "Block-3-p">
                    <img alt = 'icon' src = 'https://db3pap003files.storage.live.com/y4mNOVgQMXj595F8kXiw1Il7YRieV-35Z6fHLe-db-pydBRgpaC2S6pXyEF91jofF1kqi9yaEPtWp0sR_s3vs_CJGQMCXG7gnDnc7GmCgRee5nsUnVd06FdPtemhov77KIsic0vuermsxQN5qpTjzdqmIHxua_3dpgqU_gPjIQkcMW4Xp3Ysi_r4N0LXsOgxPGG?width=115&height=115&cropmode=none' />
                    <p>
                        Cementing – розширена версія «Hydraulics» з можливостями проектування процесів
                        цементування та кріплення свердловини.
                    </p>
                </div>
                <div className = "Block-3-p">
                    <img alt = 'icon' src = 'https://db3pap003files.storage.live.com/y4mi5QpKsX2pp6_FE8qJWdSD4E1jaO4fx2lI2P85Zjf6RAzrqEW2ragO_KZEHVjhpbNo4vV1BhhxZQfGx-DCB8cZEBnO7ShmeMlwWOU4pfk9-6zGb1b_HI-JLsiauAxS1Euw-7FM_4mkpRvoWEOaUvyudUpjdl66SA6FQf6RAsPz5u5-ef17k8HUb9mrub8E8eR?width=115&height=115&cropmode=none' />
                    <p>
                        Torque and Drag – програма для розрахунку навантажень, що діють на бурильну
                        чи обсадну колону під буріння та спуску, жорсткість КНБК чи ОК та величини крутних
                        моментів під час обертання.
                    </p>
                </div>
                <div className = "Block-3-p">
                    <img alt = 'icon' src = 'https://db3pap003files.storage.live.com/y4mEAl2RXd7cvpZJPWGP83tbwSzP090QnTybLBwPIArYx5uuVT2nImDUu3eEvHdgAReE8QoWy_FTR5zbO5lJ5LiaAorlwCiO9X83GXny9p40tH50woykoYWqjwZDDDGbXSpTxncNFMnIjLoM9ZzYUuwEmdrgIADS2f94SzjzvPfRC35o2bkOUlprZ3WKx7D4miw?width=115&height=115&cropmode=none' />
                    <p>
                        Labs – комплект програм для зручного менеджменту в середині компанії. Продукт
                        спрямований на дистанціонування керівників відділів і збільшення їх  ефективності.
                        Програма дозволяє давати та контролювати завдання видані керівником своїм
                        підлеглим інженерам та аналізувати їх результати. Вона містить форми,формули
                        та статистичний аналіз результатів на теми : лабораторія бурових промивальних рідин
                        та лабораторія з тампонажних і технологічних рідин. 
                    </p>
                </div>
                <div className = "Block-3-p">
                    <img alt = 'icon' src = 'https://db3pap003files.storage.live.com/y4m86GU2cYGbZYCrQ0NoWdMdJ1_83R_l2C305Wj9cAvErJE-pqHRTJJLrHyGkBTWp3Xp7Y5AcnOfQp17pa4oWfGp_9Z6EzY_eaLNJ4j4wrbs9EOp0N59MtzFMMOcN85W_aRmSOV2TC4sxAmO-2jqh3reDoYDUldHcStcdB2kmst9b3AEhxJDLiDvFf_84Ff0NnN?width=115&height=115&cropmode=none' />
                    <p>
                        Big Father - велика база даних розроблена для бурових підрядників та їх замовників.
                        Продукт є аналогією бурового журналу,з розширеними можливостями
                        та впровадженими розрахунками для статистичного аналізу отриманих даних
                        і моделювання майбутніх проектів на підставі сформованої бази даних. 
                        Програма виконана у вигляді великого поля із зонами відповідальності для кожного сервісу
                        або відділу що супроводжує будівництво свердловини. Кожне поле заповнюється
                        відповідальним відділом, представником та об`єднується у добовий та в подальшому
                        загальний звіт по свердловині. 
                        Всю історію свердловини або декількох свердловин та впроваджувані технологічні
                        рішення/операції можна відслідкувати та оцінити їх економічний та технологічний
                        ефект. Дані, що знаходяться у програмі зберігаються на сервері і надійно захищені.
                    </p>
                </div>
            </div>
        )
    }
}
class Block_4 extends React.Component{
    constructor(){
        super()
    }


    render(){
        return(
            <div id = 'aboutus' className="Block-4">
                <div className = 'Site-title'>Про нас</div>
                <div className = 'Flex-container-row'>
                    <img alt = 'logo' src='https://db3pap003files.storage.live.com/y4m8nB4NQ61rjW0MKhUR2dtX6Z3BUBgvqMkCP69CRdGMYaX5cfQKte_uvEM7Vv2D8rKFzaCOtiEnzanZENauVRKlEwtjbJ3sNuFYTED6RBpT_Xr4oQuucx4uzQMKDgZPwHLrEP7Aznt0atkX_TpD7AE7EzOn2uwJ-X1DzK0sq4w95YzdO7H5_1sBr3hKTTiqun3?width=479&height=479&cropmode=none' />
                    <div className = 'Block-4-container'>
                        <div className = 'Block-4-title'>SS. Software </div>
                        <p>
                            Творчий підхід до технологій. 
                        </p>
                        <p>
                            Зібравши команду з інженерів буровиків з польовим досвідом та досвідчених програмістів, ми створили програмний продукт який здатний допомогти інженерам-буровикам швидко знайти оптимальне вирішення поточних задач.
                        </p>
                        <p>
                            Ми вирішили почати із питання що стосується гідравлічної програми. Наша комп‘ютерна програма побудована таким чином,що користувачі можуть швидко та легко керувати своїми вхідними даними та бачити вплив зміни даних на тиски в любій точці свердловини та інструменті, бачити розподіл шламу по довжині ствола, якість його транспортування та вплив зміни реологічних параметрів від температури по усій довжині свердловини.
                        </p>
                        <p>
                            Універсальність данного методу полягає в тому що він дозволяє виконувати як проєктувальні розрахунки так і фактичні (перевірочні).                
                        </p>
                    </div>
                </div>
            </div>
        )
    }
}
class Block_5 extends React.Component{
    constructor(){
        super()
    }


    render(){
        return(
            <div className="Block-5">
                <div className = 'Site-title'>Учасник товариства</div>
                <p>
                    Антон: « Побачивши які можливості надає ринок програм для інженерів буровиків,
                    я зрозумів чого саме бракує усім виконавцям та вирішив побудувати дійсно приємний
                    для користування конструктор та прозорий у розумінні технологічних процесів
                    та етапів розрахунку софт який би дозволив мені і моїм колегам швидко та ефективно
                    приймати та аргументувати свої рішення та заощаджувати в часі своєї роботи.
                </p>
            </div>
        )
    }
}

class Block_6 extends React.Component{
    constructor(){
        super()

        this.state = {
            workplace: '',
            workplace_Valid: '',

            job: '',
            job_Valid: '',


            name: '',
            name_Valid: '',

            phone: '',
            phone_Valid: '',

            email: '',
            email_Valid: '',


            message: '',

            validMessage1: "Ім'я",
            validMessage2: 'Номер телефону'
        }
    }

    componentDidUpdate(){
        console.log('Update')
    }

    onChange1(event){

        const value = event.target.value
        console.log(value);
        this.setState({
            workplace: value,
            workplace_Valid: 'ok'
        })

        if(value.length === 0 ){
            console.log('Net')
        }else{
            console.log('Ne')

        }
        
    }
    onChange2(event){

        const value = event.target.value
        console.log(value);
        this.setState({
            job: value
        })
        
    }
    onChange3(event){

        const value = event.target.value
        console.log(value);
        this.setState({
            name: value
        })
        
    }
    onChange4(event){

        const value = event.target.value
        console.log(value);
        this.setState({
            phone: value
        })
        
    }
    onChange5(event){

        const value = event.target.value
        console.log(value);
        this.setState({
            email: value
        })
        
    }
    onChange6(event){

        const value = event.target.value
        console.log(value);
        this.setState({
            message: value
        })
        
    }
    Submit(e){
        e.preventDefault()

        console.log(this.state.workplace)
        console.log(this.state.phone)
        console.log(this.state.name)
        console.log(this.state.job)
        console.log(this.state.email)

        if(
            this.state.name.length >= 2 && 
            this.state.phone.length >= 10 &&
            this.state.email.length !== 0 && 
            this.state.email.search('@') !== -1 &&
            this.state.workplace.length !== 0 && 
            this.state.job.length !== 0
            
        ){
            let name = this.state.name
            let phone = this.state.phone
            let workplace = this.state.workplace
            let job = this.state.job
            let email = this.state.email
            let mail = this.state.message
            
            let message = 
            `
            Имя: ${name}
            Номер: ${phone}

            Место работы: ${workplace}
            Должность: ${job}

            email: ${email}
            сообщение: ${mail}

            `

            const token = '1850590871:AAEhwHadiSCWoXY9TswhAcsTns5F036wnq0'
            const id = '-405601472'
            let url = `https://api.telegram.org/bot${token}/sendMessage?chat_id=${id}&parse_mode=html&text=`
    
            let xhttp = new XMLHttpRequest()
            xhttp.open("GET", url + message, true)
            xhttp.send()

            /*
            const inputs = document.getElementsByClassName("Block-6-form-inputs-i")
            const valid = "Block-6-form-inputs-i_novalid"

            inputs[2].classList.add(valid)
            inputs[4].classList.add(valid)
            */
            this.setState({
                validMessage1: 'Готово ваша заявка отправлена!',
                validMessage2: 'Готово ваша заявка отправлена!'
            })
            const inputs = document.getElementsByClassName("Block-6-form-inputs-i")

            inputs[0].style.borderBottom = 'solid 1px green'
            inputs[1].style.borderBottom = 'solid 1px green'
            inputs[2].style.borderBottom = 'solid 1px green'
            inputs[3].style.borderBottom = 'solid 1px green'
            inputs[4].style.borderBottom = 'solid 1px green'

            const error = document.getElementsByClassName('Form-error')
            const error_email = document.getElementsByClassName('Form-error-email')

            error[0].style.display = 'none'
            error[1].style.display = 'none'
            error[2].style.display = 'none'
            error[3].style.display = 'none'
            error_email[0].style.display = 'none'
            alert('Ваша заявка отправлена')

        }else{
            this.state.email.search('@')
            console.log(this.state.email.search('@'))

            const error = document.getElementsByClassName('Form-error')
            const error_email = document.getElementsByClassName('Form-error-email')

            const inputs = document.getElementsByClassName("Block-6-form-inputs-i")

            if(this.state.workplace.length === 0){

                error[0].style.display = 'flex'
                inputs[0].style.borderBottom = 'solid 1px red'

            }else if(this.state.workplace.length !== 0){
                error[0].style.display = 'none'
                inputs[0].style.borderBottom = 'solid 1px green'
            }

            if(this.state.job.length === 0){

                error[1].style.display = 'flex'
                inputs[1].style.borderBottom = 'solid 1px red'

            }else if(this.state.job.length !== 0){
                error[1].style.display = 'none'
                inputs[1].style.borderBottom = 'solid 1px green'
            }

            if(this.state.name.length === 0){

                error[2].style.display = 'flex'
                inputs[2].style.borderBottom = 'solid 1px red'

            }else if(this.state.name.length !== 0){
                error[2].style.display = 'none'
                inputs[2].style.borderBottom = 'solid 1px green'
            }

            if(this.state.email.length === 0 || this.state.email.search('@') === -1 ){

                error_email[0].style.display = 'flex'
                inputs[3].style.borderBottom = 'solid 1px red'

            }else if(this.state.email.length !== 0 && this.state.email.search('@') !== -1){
                error_email[0].style.display = 'none'
                inputs[3].style.borderBottom = 'solid 1px green'
            }

            if(this.state.phone.length === 0){

                error[3].style.display = 'flex'
                inputs[4].style.borderBottom = 'solid 1px red'

            }else if(this.state.phone.length !== 0){
                error[3].style.display = 'none'
                inputs[4].style.borderBottom = 'solid 1px green'
            }



            this.setState({
                validMessage1: "Введіть ім'я коректно",
                validMessage2: 'Введіть номер коректно'
            })

        }
    }

    onBlur1(){
        if(this.state.workplace.length === 0){
            const error = document.getElementsByClassName('Form-error')

            error[0].style.display = 'flex'

        }
        if(this.state.workplace.length === 0){
            let text = document.getElementsByClassName('Block-6-form-input-box-text')
            let input = document.getElementsByClassName('Block-6-form-inputs-i')

            input[0].style.borderBottom = 'solid 1px rgba(112, 112, 112, 0.25)'
            text[0].style.fontSize = '1em'

            text[0].classList.remove('Block-6-form-input-box-text_on')

    
            console.log('onBlur1')
        }

    }
    onFocus1(){

        let text = document.getElementsByClassName('Block-6-form-input-box-text')
        let input = document.getElementsByClassName('Block-6-form-inputs-i')

        input[0].style.borderBottom = 'solid 1px #ffb469'
        text[0].style.fontSize = '0.8em'

        text[0].classList.add('Block-6-form-input-box-text_on')

        console.log('onFocus1')
    }
    onBlur2(){
        if(this.state.job.length === 0){
            const error = document.getElementsByClassName('Form-error')

            error[1].style.display = 'flex'

        }
        if(this.state.job.length === 0){
            let text = document.getElementsByClassName('Block-6-form-input-box-text')
            let input = document.getElementsByClassName('Block-6-form-inputs-i')

            input[1].style.borderBottom = 'solid 1px rgba(112, 112, 112, 0.25)'
            text[1].style.fontSize = '1em'
    
            text[1].classList.remove('Block-6-form-input-box-text_on')

            console.log('onBlur1')
        }

    }
    onFocus2(){
        let text = document.getElementsByClassName('Block-6-form-input-box-text')
        let input = document.getElementsByClassName('Block-6-form-inputs-i')

        input[1].style.borderBottom = 'solid 1px #ffb469'
        text[1].style.fontSize = '0.8em'

        text[1].classList.add('Block-6-form-input-box-text_on')

        console.log('onFocus1')
    }
        
    onBlur3(){
        if(this.state.name.length === 0){
            const error = document.getElementsByClassName('Form-error')

            error[2].style.display = 'flex'

        }
        if(this.state.name.length === 0){
            
            let text = document.getElementsByClassName('Block-6-form-input-box-text')
            let input = document.getElementsByClassName('Block-6-form-inputs-i')

            input[2].style.borderBottom = 'solid 1px rgba(112, 112, 112, 0.25)'
            text[2].style.fontSize = '1em'
            text[2].classList.remove('Block-6-form-input-box-text_on')
    
    
            console.log('onBlur1')
        }

    }
    onFocus3(){
        let text = document.getElementsByClassName('Block-6-form-input-box-text')
        let input = document.getElementsByClassName('Block-6-form-inputs-i')

        input[2].style.borderBottom = 'solid 1px #ffb469'
        text[2].style.fontSize = '0.8em'
        text[2].classList.add('Block-6-form-input-box-text_on')

        console.log('onFocus1')
    }
    onBlur4(){
        if(this.state.email.length === 0){
            const error = document.getElementsByClassName('Form-error')

            error[3].style.display = 'flex'

        }
        if(this.state.email.length === 0){
            let text = document.getElementsByClassName('Block-6-form-input-box-text')
            let input = document.getElementsByClassName('Block-6-form-inputs-i')

            input[3].style.borderBottom = 'solid 1px rgba(112, 112, 112, 0.25)'
            text[3].style.fontSize = '1em'
            text[3].classList.remove('Block-6-form-input-box-text_on')
    
    
            console.log('onBlur1')
        }

    }
    onFocus4(){
        let text = document.getElementsByClassName('Block-6-form-input-box-text')
        let input = document.getElementsByClassName('Block-6-form-inputs-i')

        input[3].style.borderBottom = 'solid 1px #ffb469'
        text[3].style.fontSize = '0.8em'
        text[3].classList.add('Block-6-form-input-box-text_on')

        console.log('onFocus1')
    }
    onBlur5(){
        if(this.state.phone.length === 0){
            const error = document.getElementsByClassName('Form-error')

            error[3].style.display = 'flex'

        }
        if(this.state.phone.length === 0){
            let text = document.getElementsByClassName('Block-6-form-input-box-text')
            let input = document.getElementsByClassName('Block-6-form-inputs-i')

            input[4].style.borderBottom = 'solid 1px rgba(112, 112, 112, 0.25)'
            text[4].style.fontSize = '1em'
            text[4].classList.remove('Block-6-form-input-box-text_on')
    
    
            console.log('onBlur1')
        }

    }
    onFocus5(){
        let text = document.getElementsByClassName('Block-6-form-input-box-text')
        let input = document.getElementsByClassName('Block-6-form-inputs-i')

        input[4].style.borderBottom = 'solid 1px #ffb469'
        text[4].style.fontSize = '0.8em'
        text[4].classList.add('Block-6-form-input-box-text_on')

        console.log('onFocus1')
    }
    render(){
        return(
            <div id = 'download' className="Block-6">
                <div className = 'Form-title'>Отримайте пробну версію<br /> чи зв’яжіться з нами</div>
                <div className = 'Block-6-form'>
                    <div className = 'Block-6-form-title'>Створити запит</div>
                    <div className = 'Form-container'>
                        <div className = 'Block-6-form-inputs'>
                            <div className = 'Block-6-form-input-box'>
                                <div className = 'Block-6-form-input-box-text'>Місце роботи</div>
                                <input onFocus = {this.onFocus1 = this.onFocus1.bind(this)} onBlur = {this.onBlur1 = this.onBlur1.bind(this)} className = 'Block-6-form-inputs-i' onChange = {this.onChange1 = this.onChange1.bind(this)}  placeholder = 'Полтава' />
                                <span className = 'Form-error'>
                                    *Це поле обов'язкове до заповнювання
                                </span>
                            </div>

                            <div className = 'Block-6-form-input-box'>
                                <div className = 'Block-6-form-input-box-text'>Посада</div>
                                <input onFocus = {this.onFocus2 = this.onFocus2.bind(this)} onBlur = {this.onBlur2 = this.onBlur2.bind(this)} className = 'Block-6-form-inputs-i' onChange = {this.onChange2 = this.onChange2.bind(this)}  placeholder = 'інженер' />
                                <span className = 'Form-error'>*Це поле обов'язкове до заповнювання</span>
                            </div>

                            <div className = 'Block-6-form-input-box'>
                                <div className = 'Block-6-form-input-box-text'>{this.state.validMessage1}</div>
                                <input onFocus = {this.onFocus3 = this.onFocus3.bind(this)} onBlur = {this.onBlur3 = this.onBlur3.bind(this)} className = 'Block-6-form-inputs-i' onChange = {this.onChange3 = this.onChange3.bind(this)} name = 'name' type = 'text'  placeholder = 'Віктор' />
                                <span className = 'Form-error'>*Це поле обов'язкове до заповнювання</span>
                            </div>                            
                            <div className = 'Block-6-form-input-box'>
                                
                                <div className = 'Block-6-form-input-box-text'>Електронна адреса</div>
                                <input onFocus = {this.onFocus4 = this.onFocus4.bind(this)} onBlur = {this.onBlur4 = this.onBlur4.bind(this)} className = 'Block-6-form-inputs-i' onChange = {this.onChange5 = this.onChange5.bind(this)} name = 'email' type = 'email'  placeholder = 'example@gmail.com' />
                                <span className = 'Form-error-email'>*Це поле обов'язкове до заповнювання та має містити символ "@"</span>
                            </div>

                            <div className = 'Block-6-form-input-box'>
                                <div className = 'Block-6-form-input-box-text'>{this.state.validMessage2}</div>
                                <input onFocus = {this.onFocus5 = this.onFocus5.bind(this)} onBlur = {this.onBlur5 = this.onBlur5.bind(this)} className = 'Block-6-form-inputs-i' onChange = {this.onChange4 = this.onChange4.bind(this)} name = 'phone' type = 'tel'  placeholder = '0504447774' />
                                <span className = 'Form-error'>*Це поле обов'язкове до заповнювання</span>
                            </div>                        
                        </div>
                        <div>
                            <textarea resize = 'none' onChange = {this.onChange6 = this.onChange6.bind(this)} className = 'Block-6-form-message'  type = 'text' placeholder = 'Примітки: (Залиште коментар, пропозицію чи задайте запитання, і ми з Вами зв’яжемося в найкоротші терміни.)' />
                        </div>
                    </div>
                    <a onClick = {this.Submit = this.Submit.bind(this)} className = 'Block-6-form-button' href = '/'>Надіслати запит</a>
                </div>
            </div>
        )
    }
}

class Block_7 extends React.Component{
    constructor(){
        super()
    }


    render(){
        return(
            <div className="Block">
                <div className = 'Site-title'>Наші партнери</div>
                <a target = '_blank' href = 'http://dpubs.com.ua/'>
                    <img className="Block-7-img" alt = 'Partner' src = 'object-1.svg' />
                </a>
            </div>
        )
    }
}