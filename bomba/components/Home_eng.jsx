import React from 'react';
import ReactDOM from 'react-dom';

export class HomePageEnglish extends React.Component{ 
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
                    // <Block_7 />
                    
                ],
                [

                    <Block_1 />,
                    <BLock_2_mobile />,
                    <Block_3 />,
                    <Block_4 />,
                    <Block_6 />,
                    // <Block_7 />

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
                            Our team aims to provide a tool for highly qualified staff of our clients, that will make their communication and decision-making more fruitful and concise.
                        </div>
                        <div className='Block-1-l-paragraph-2'>
                            We offer you a software product that will reduce decision making time and provide an opportunity to consider all the risks. All this is possible due to the combination of primary information from the well and the ability to make verification and design calculations online.
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

    render(){
        return(
            <div id='Block_2'>
                <img className = 'Block-2-graphic' src = '/graphic-1.svg' />
                <div id = 'hydraulics' className="Block">
                    <div className='Site-title' >
                        Calculations covered by <b style={{color:'var(--orange)'}}>Hydraulics</b>:
                    </div>
                    <div className="Flex-container-row">
                        <div className="Block-2-l">
                        <ul>
                            <li>Hydrostatic pressure and rock pressure.</li>
                            <li>
                                Hydrodynamic tool and annular space pressure.
                            </li>
                            <li>
                                Comprehensive pressure that applies to the well wall.
                            </li>
                            <li>
                                Hydrodynamic characteristics of the bit.
                            </li>
                            <li>
                                Transportation of mud. The section contains information about the resulting speed and time of movement of drilling cuttings of selected  parameters and the place of its concentration, considering the drilling mode.
                            </li>
                            <li>
                                The equivalent density of circulation as a measure of pressure and an indirect indicator of the amount of mud in annular space.
                            </li>
                            <li>
                                Well trajectory, spatial distortion angles and well distortion intensity.
                            </li>
                        </ul>
                    </div>
                        <img alt='logo' src='https://db3pap003files.storage.live.com/y4moNoEqQaWNTp82jkHtv1aVgTZ6dD4ZUbBHj3GkEFktoyd1S7eAq5rAUNr11dZcOG274gjKiCJOxSfmVvCk9OP5quYyOeO_l40ttvKllopzFA8D8OM2Veneh7c6kLnJlf1Eki-HQLoRYAGEFCqGbbhIpO-G8u_rIIboZmdu78fX8poUXmdQfFz2PqcPiyHTXzs?width=525&height=524&cropmode=none' />
                    </div>  
                </div>



                <div className = "Block-2-2" >
                    <div className = 'Wrapper'>
                        <div id = "Block-2-2" className="Block-2">
                            <div className='Site-title'>
                                What features<br />
                                does the application open
                            </div>
                            <div className="Block-2-1-desc">
                                <p>We recommend you to design the calculation at the end of the casing interval drilling.</p>
                                <p>
                                    Our application guides you on a logical way to create a project and reveals all possible nuances of this process. We recommend you to design the calculation at the end of the casing interval drilling. With the help of the solution implemented in the program, you can save a lot of time to design new and new situations.  
                                </p>
                                <p>
                                    If you have caverns, constriction, or you see signs of shedding the walls of the well, modified layout or drilling mode, you switch to another flushing fluid, or the influence of the temperature changed, you work using the throttle, you lose part of the layout or the nozzle, - you can change it in a few movements and check your suspicions. Adjust the position of the tool using the slider or specify its position to a millimeter in a special cell.
                                </p>
                            </div>  
                        </div>
                        <div id = 'Block-2-3' className="Block-2">
                            <p className = "Block-2-p">
                                All calculations consider the standard set of parameters and changes in the rheological properties of the flushing fluid by intervals depending on temperature and pressure, the actual pressure in the fluid depending on the cross section, the speed of rotation of the drill string, and the eccentricity. Auxiliary tools are also provided to determine the model and rheological parameters of the fluid, a tool for determining real rheology indicators in the interval and calculating the temperature of the circulating fluid in the well depending on the environment and performance of the drilling pumps.
                            </p>
                            
                            <img className='Block-2-img' alt="screens" src='https://db3pap003files.storage.live.com/y4mTp9W46JqS-V3GrsP6MqP8XtG9qJpiX_KSIgb5vkbcZs11KxIgxWZhFT_-I-f1pahkW-dUXBnJsWkAiRtl1P9acpiFd7pcs7nAlKNbeayGe_OpI7uE8vRd82dt3fo15g0F3eAj-2VoTNTuHZoEuDy358lYWkBF04Ul1q7sh35O0GReiCdkVnzxkpUMeBUcEg3?width=1920&height=1080&cropmode=none' />

                        </div>
                        <div id = 'Block-2-4' className="Block-2">
                            <div>
                                <span className="Site-title">Convenient graphics</span>
                                <p className = "Block-2-p">
                                    The results of calculations in tables and interactive graphs, quick scanning of data from any cross section of the well.  
                                </p>
                                <p className = "Block-2-p">
                                    For the convenience of the user, it is possible to save the necessary intervals, the data of which is transferred to the summary results table for further analysis by the user.
                                </p>
                            </div>
                            <img className='Block-2-img' alt="screens" src='https://db3pap003files.storage.live.com/y4mDXnuFIwmTMCJKLNwZa7GbWfsnN9elHKWVgBfKprslFz-5yAlErXwV9VMPi-RJSXqTsYifMVIau6bbtmauN561HVvoc3IBMxWFmpikJZMENHgWNOOOuziiMLlPuw8wdZSDvV8AZctq6hflyGuBq66MfVzy4cZQON1OKugLgjA6QQsQ1BZZdW4ZQpHF6nWC5ae?width=1920&height=1080&cropmode=none' />
                            

                        </div>
                        <div id = 'Block-2-6' className="Block-2">
                            <div>
                                <span className = "Site-title">Tools</span>
                                <p className = "Block-2-p">
                                Convenient table for modeling the change of rheological parameters of the flushing fluid in the annular space along the length of the well. 
                                </p>
                                <p className = "Block-2-p">
                                The presence of four main used fluid models for the most accurate calculations.</p>
                                <p className = "Block-2-p">
                                The program automatically analyzes the stresses that arise in the flushing fluid for each cross section. Based on the results of the analysis, the program selects the rheological parameters of your flushing fluid, which are valid for each cross section. 
                                </p>
                            </div>
                            <img className='Block-2-img' alt="screens" src='https://db3pap003files.storage.live.com/y4m9jK6qYXozDaYop6fjVu3G-r8KbKcqoFR-f1lcdxNgM6INqXrcOfWkDDvWl-n5uIi6X6LU1S9D7L-xpKhClnW5IYxS3UulZwozrh-pVzoj4FJLuKggVeA0LuT5cNkNMgWiDWUHdD6a7VG8EKZmpGxPez0U0qXUsqVTxswRyHIlZ-GnNnYa51vlPVGbNpv5HWP?width=1920&height=1080&cropmode=none' />

                        </div>
                        <div id = 'Block-2-7' className="Block-2">
                            <p className = "Block-2-p">
                            A comfortable and intuitive tool for modeling a drill column, taking into account all possible unique geometric sizes of your equipment. To improve the work, an additional special table was created for temporary storage of drill column elements.
                            </p>
                            <img className='Block-2-img' alt="screens" src='https://db3pap003files.storage.live.com/y4mZFxLy8ZIwTjfAPIXgE8m1iuJ8uF_V93FjetT4KwSkGOGFgrTXXiLAXewj56pJrjyNP076TAU9wvcFF-7zrvWuItSgR-18zbjeEUcR199aEGDAlpANKAbCvcwVLF8pzq548S_2M3mSB-iluYKppuY9THgv8Sw8qQt2t4r822UnKFVSTTDpkOtAtDsjwwEWRld?width=1920&height=1080&cropmode=none' />

                        </div>
                        <div id = 'Block-2-8' className="Block-2">
                            <div>
                            <span className="Site-title">Fast<br /> and simple</span>
                            <p className = "Block-2-p">
                                Comfortable and intuitive tool for modeling a drill string based on the unique geometric dimensions of your equipment. To improve performance , a special table has been set up for the temporary storage of elements of the drill string.
    
                            </p>
                            </div>
                            <img className='Block-2-img' alt="screens" src='https://db3pap003files.storage.live.com/y4ma1So-UJJhbA09TbOsd0V8E9_7jb8k2JyDxZ3-EWaB9mkagqewV0MiCXQA7IaPVgZCiMq_J96956W_EQF-QN7sVDFmB9yT3ZYWeb8a296VeY9isN1PWcUakdM4w5KSujottAadHgRMwGmVjnXu0e8IjZ70yFTogyNr4LQiG_wYsxd57eJCFwIJMA5T2xpe4eU?width=1920&height=1080&cropmode=none' />

                        </div>
                    
                    </div>
                </div>

                <div id = 'Block-2-10' className="Block-2-10">
                    <div className="Flex-container-row">
                        <div className="Block-2-10-l">
                            <span className="Site-title">All parameters<br /> is one table</span>
                            <p className = "Block-2-p">
                            Quick access to changes in basic parameters such as drilling modes, local pressure loss in the downhole equipment, characteristics of the mud and density of the flushing fluid in the annular space.
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
                    Calculations covered by <b style={{color:'var(--orange)'}}>Hydraulics</b>:
                </div>
                <div className="Flex-container-row">
                    <div className="Block-2-l">
                        <ul>
                            <li>Hydrostatic pressure and rock pressure.</li>
                            <li>
                                Hydrodynamic tool and annular space pressure.
                            </li>
                            <li>
                                Comprehensive pressure that applies to the well wall.
                            </li>
                            <li>
                                Hydrodynamic characteristics of the bit.
                            </li>
                            <li>
                                Transportation of mud. The section contains information about the resulting speed and time of movement of drilling cuttings of selected  parameters and the place of its concentration, considering the drilling mode.
                            </li>
                            <li>
                                The equivalent density of circulation as a measure of pressure and an indirect indicator of the amount of mud in annular space.
                            </li>
                            <li>
                                Well trajectory, spatial distortion angles and well distortion intensity.
                            </li>
                        </ul>
                    </div>                
                </div>  
            
                <div className = 'Block-2-mobile-2'>
                    <div style = {{margin:'20px'}} className='Site-title' >
                        What features does the application open
                    </div>
                    <p className = 'p-mobile'>
                    We recommend you to design the calculation at the end of the casing interval drilling. 
                    </p>
                    <p className = 'p-mobile'>
                    Our application guides you on a logical way to create a project and reveals all possible nuances of this process. We recommend you to design the calculation at the end of the casing interval drilling. With the help of the solution implemented in the program, you can save a lot of time to design new and new situations. 
                    </p>
                    <p className = 'p-mobile'>
                    If you have caverns, constriction, or you see signs of shedding the walls of the well, modified layout or drilling mode, you switch to another flushing fluid, or the influence of the temperature changed, you work using the throttle, you lose part of the layout or the nozzle, - you can change it in a few movements and check your suspicions. Adjust the position of the tool using the slider or specify its position to a millimeter in a special cell.
                    </p>
                </div>

                <div className = 'Block-2-mobile-3'>
                    <img className = 'Block-2-mobile-photo' alt = 'screen' src = 'https://db3pap003files.storage.live.com/y4mTp9W46JqS-V3GrsP6MqP8XtG9qJpiX_KSIgb5vkbcZs11KxIgxWZhFT_-I-f1pahkW-dUXBnJsWkAiRtl1P9acpiFd7pcs7nAlKNbeayGe_OpI7uE8vRd82dt3fo15g0F3eAj-2VoTNTuHZoEuDy358lYWkBF04Ul1q7sh35O0GReiCdkVnzxkpUMeBUcEg3?width=1920&height=1080&cropmode=none' />
                    <p className = 'p-mobile'>
                    All calculations consider the standard set of parameters and changes in the rheological properties of the flushing fluid by intervals depending on temperature and pressure, the actual pressure in the fluid depending on the cross section, the speed of rotation of the drill string, and the eccentricity. Auxiliary tools are also provided to determine the model and rheological parameters of the fluid, a tool for determining real rheology indicators in the interval and calculating the temperature of the circulating fluid in the well depending on the environment and performance of the drilling pumps.
                    </p>
                </div>

                <div className = 'Block-2-mobile-4'>
                    <div style = {{margin:'0 20px'}} className='Site-title' >
                    Convenient graphics
                    </div>
                    <img className = 'Block-2-mobile-photo' alt = 'screen' src = 'https://db3pap003files.storage.live.com/y4mDXnuFIwmTMCJKLNwZa7GbWfsnN9elHKWVgBfKprslFz-5yAlErXwV9VMPi-RJSXqTsYifMVIau6bbtmauN561HVvoc3IBMxWFmpikJZMENHgWNOOOuziiMLlPuw8wdZSDvV8AZctq6hflyGuBq66MfVzy4cZQON1OKugLgjA6QQsQ1BZZdW4ZQpHF6nWC5ae?width=1920&height=1080&cropmode=none' />
                    <p className = 'p-mobile'>
                    The results of calculations in tables and interactive graphs, quick scanning of data from any cross section of the well. 
                    </p>
                    <p className = 'p-mobile'>
                    For the convenience of the user, it is possible to save the necessary intervals, the data of which is transferred to the summary results table for further analysis by the user.
                    </p>
                </div>

                <div className = 'Block-2-mobile-6'>
                    <div style = {{margin:'0 20px'}} className='Site-title' >
                    Tools
                    </div>
                    <img className = 'Block-2-mobile-photo' alt = 'screen' src = 'https://db3pap003files.storage.live.com/y4m9jK6qYXozDaYop6fjVu3G-r8KbKcqoFR-f1lcdxNgM6INqXrcOfWkDDvWl-n5uIi6X6LU1S9D7L-xpKhClnW5IYxS3UulZwozrh-pVzoj4FJLuKggVeA0LuT5cNkNMgWiDWUHdD6a7VG8EKZmpGxPez0U0qXUsqVTxswRyHIlZ-GnNnYa51vlPVGbNpv5HWP?width=1920&height=1080&cropmode=none' />
                    <p className = 'p-mobile'>
                    Convenient table for modeling the change of rheological parameters of the flushing fluid in the annular space along the length of the well.
                    </p>
                    <p className = 'p-mobile'>
                    The presence of four main used fluid models for the most accurate calculations.
                    </p>
                    <p className = 'p-mobile'>
                    The program automatically analyzes the stresses that arise in the flushing fluid for each cross section. Based on the results of the analysis, the program selects the rheological parameters of your flushing fluid, which are valid for each cross section. 
                    </p>
                </div>

                <div className = 'Block-2-mobile-7'>
                    <img className = 'Block-2-mobile-photo' alt = 'screen' src = 'https://db3pap003files.storage.live.com/y4mZFxLy8ZIwTjfAPIXgE8m1iuJ8uF_V93FjetT4KwSkGOGFgrTXXiLAXewj56pJrjyNP076TAU9wvcFF-7zrvWuItSgR-18zbjeEUcR199aEGDAlpANKAbCvcwVLF8pzq548S_2M3mSB-iluYKppuY9THgv8Sw8qQt2t4r822UnKFVSTTDpkOtAtDsjwwEWRld?width=1920&height=1080&cropmode=none' />
                    <p className = 'p-mobile'>
                    A comfortable and intuitive tool for modeling a drill column, taking into account all possible unique geometric sizes of your equipment. To improve the work, an additional special table was created for temporary storage of drill column elements.
                    </p>
                </div>

                <div className = 'Block-2-mobile-8'>
                    <div style = {{margin:'0 20px'}} className='Site-title' >
                        Fast <br />
                        and simple
                    </div>
                    <img className = 'Block-2-mobile-photo' alt = 'screen-8' src = 'https://db3pap003files.storage.live.com/y4ma1So-UJJhbA09TbOsd0V8E9_7jb8k2JyDxZ3-EWaB9mkagqewV0MiCXQA7IaPVgZCiMq_J96956W_EQF-QN7sVDFmB9yT3ZYWeb8a296VeY9isN1PWcUakdM4w5KSujottAadHgRMwGmVjnXu0e8IjZ70yFTogyNr4LQiG_wYsxd57eJCFwIJMA5T2xpe4eU?width=1920&height=1080&cropmode=none' />
                    <p className = 'p-mobile'>
                    Comfortable and intuitive tool for modeling a drill string based on the unique geometric dimensions of your equipment. To improve performance , a special table has been set up for the temporary storage of elements of the drill string.
                    </p>
                </div>


                <div className = 'Block-2-mobile-10'>
                    <div style = {{margin:'0 20px'}} className='Site-title' >
                        All parameters <br />
                        in one table
                    </div>
                    <p className = 'p-mobile'>
                    Quick access to changes in basic parameters such as drilling modes, local pressure loss in the downhole equipment, characteristics of the mud and density of the flushing fluid in the annular space. 
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
                <div className = "Site-title">In the development</div>
                <div className = "Block-3-p">
                    <img alt = 'icon' src = 'https://db3pap003files.storage.live.com/y4mNOVgQMXj595F8kXiw1Il7YRieV-35Z6fHLe-db-pydBRgpaC2S6pXyEF91jofF1kqi9yaEPtWp0sR_s3vs_CJGQMCXG7gnDnc7GmCgRee5nsUnVd06FdPtemhov77KIsic0vuermsxQN5qpTjzdqmIHxua_3dpgqU_gPjIQkcMW4Xp3Ysi_r4N0LXsOgxPGG?width=115&height=115&cropmode=none' />
                    <p>
                    Cementing – extended version of "Hydraulics" with the capabilities of designing the cementing and fastening processes of the well.
                    </p>
                </div>
                <div className = "Block-3-p">
                    <img alt = 'icon' src = 'https://db3pap003files.storage.live.com/y4mi5QpKsX2pp6_FE8qJWdSD4E1jaO4fx2lI2P85Zjf6RAzrqEW2ragO_KZEHVjhpbNo4vV1BhhxZQfGx-DCB8cZEBnO7ShmeMlwWOU4pfk9-6zGb1b_HI-JLsiauAxS1Euw-7FM_4mkpRvoWEOaUvyudUpjdl66SA6FQf6RAsPz5u5-ef17k8HUb9mrub8E8eR?width=115&height=115&cropmode=none' />
                    <p>
                    Torque and Drag – program to calculate drill and casing string load, rigidity of bottom drill string layout or casing string and magnitude of the torques during rotation.
                    </p>
                </div>
                <div className = "Block-3-p">
                    <img alt = 'icon' src = 'https://db3pap003files.storage.live.com/y4mEAl2RXd7cvpZJPWGP83tbwSzP090QnTybLBwPIArYx5uuVT2nImDUu3eEvHdgAReE8QoWy_FTR5zbO5lJ5LiaAorlwCiO9X83GXny9p40tH50woykoYWqjwZDDDGbXSpTxncNFMnIjLoM9ZzYUuwEmdrgIADS2f94SzjzvPfRC35o2bkOUlprZ3WKx7D4miw?width=115&height=115&cropmode=none' />
                    <p>
                    Labs – a set of programs for convenient management inside company. The product is aimed at distancing heads of departments and increasing their efficiency. The software allows you to assign and control the tasks issued by the supervisor to their subordinate engineers and analyze their results. It contains forms, formulas and statistical analysis of results on topics: laboratory of drilling fluids and laboratory of grouting and technological fluids.
                    </p>
                </div>
                <div className = "Block-3-p">
                    <img alt = 'icon' src = 'https://db3pap003files.storage.live.com/y4m86GU2cYGbZYCrQ0NoWdMdJ1_83R_l2C305Wj9cAvErJE-pqHRTJJLrHyGkBTWp3Xp7Y5AcnOfQp17pa4oWfGp_9Z6EzY_eaLNJ4j4wrbs9EOp0N59MtzFMMOcN85W_aRmSOV2TC4sxAmO-2jqh3reDoYDUldHcStcdB2kmst9b3AEhxJDLiDvFf_84Ff0NnN?width=115&height=115&cropmode=none' />
                    <p>
                    Big Father - a large database is designed for drilling contractors and their customers. The product is an analogy of the drilling log, with advanced capabilities and implemented calculations for statistical analysis of the obtained data and modeling of future projects on the basis of the formed database. The program is executed in the form of a large field with zones of responsibility for each service or department that accompanies the construction of the well. Each field is filled by the responsible department, representative and combined into a daily and further general well report. The entire history of the well or multiple wells and implemented technological solutions/operations can be tracked and evaluated for their economic and technological effect. The application data is stored on the server and securely protected.
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
                <div className = 'Site-title'>About us</div>
                <div className = 'Flex-container-row'>
                    <img alt = 'logo' src='https://db3pap003files.storage.live.com/y4m8nB4NQ61rjW0MKhUR2dtX6Z3BUBgvqMkCP69CRdGMYaX5cfQKte_uvEM7Vv2D8rKFzaCOtiEnzanZENauVRKlEwtjbJ3sNuFYTED6RBpT_Xr4oQuucx4uzQMKDgZPwHLrEP7Aznt0atkX_TpD7AE7EzOn2uwJ-X1DzK0sq4w95YzdO7H5_1sBr3hKTTiqun3?width=479&height=479&cropmode=none' />
                    <div className = 'Block-4-container'>
                        <div className = 'Block-4-title'>SS. Software </div>
                        <p>
                        Creative approach to technology.
                        </p>
                        <p>
                        We have created a software product that can help drilling engineers quickly find the optimal solution to current problems by assembling a team of drilling engineers with field experience and great programmers.

                        </p>
                        <p>
                        We decided to start with a question regarding the hydraulic program. Our computer program is built in such a way that users can quickly and easily manage their input data and see the impact of data changes on pressures in any point of the well and tool, see the distribution of the mud along the length of the barrel, the quality of its transportation and the impact of changing rheological parameters from temperature along the entire length of the well.

                        </p>
                        <p>
                        The universality of this method is that it allows you to perform both design and actual (verification) calculations.
                
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

            validMessage1: "Name",
            validMessage2: 'Phone number'
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
                validMessage1: "Enter name correctly",
                validMessage2: 'Enter phone number correctly'
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
                <div className = 'Form-title'>Get a demo version<br /> or contact us</div>
                <div className = 'Block-6-form'>
                    <div className = 'Block-6-form-title'>Form</div>
                    <div className = 'Form-container'>
                        <div className = 'Block-6-form-inputs'>
                            <div className = 'Block-6-form-input-box'>
                                <div className = 'Block-6-form-input-box-text'>Work Place</div>
                                <input onFocus = {this.onFocus1 = this.onFocus1.bind(this)} onBlur = {this.onBlur1 = this.onBlur1.bind(this)} className = 'Block-6-form-inputs-i' onChange = {this.onChange1 = this.onChange1.bind(this)}  placeholder = 'Poltava' />
                                <span className = 'Form-error'>
                                    *This field is required
                                </span>
                            </div>

                            <div className = 'Block-6-form-input-box'>
                                <div className = 'Block-6-form-input-box-text'>Job</div>
                                <input onFocus = {this.onFocus2 = this.onFocus2.bind(this)} onBlur = {this.onBlur2 = this.onBlur2.bind(this)} className = 'Block-6-form-inputs-i' onChange = {this.onChange2 = this.onChange2.bind(this)}  placeholder = 'Engineer' />
                                <span className = 'Form-error'>*This field is required</span>
                            </div>

                            <div className = 'Block-6-form-input-box'>
                                <div className = 'Block-6-form-input-box-text'>{this.state.validMessage1}</div>
                                <input onFocus = {this.onFocus3 = this.onFocus3.bind(this)} onBlur = {this.onBlur3 = this.onBlur3.bind(this)} className = 'Block-6-form-inputs-i' onChange = {this.onChange3 = this.onChange3.bind(this)} name = 'name' type = 'text'  placeholder = 'Alex' />
                                <span className = 'Form-error'>*This field is required</span>
                            </div>                            
                            <div className = 'Block-6-form-input-box'>
                                
                                <div className = 'Block-6-form-input-box-text'>Email</div>
                                <input onFocus = {this.onFocus4 = this.onFocus4.bind(this)} onBlur = {this.onBlur4 = this.onBlur4.bind(this)} className = 'Block-6-form-inputs-i' onChange = {this.onChange5 = this.onChange5.bind(this)} name = 'email' type = 'email'  placeholder = 'example@gmail.com' />
                                <span className = 'Form-error-email'>**This field is required and must contain a symbol "@"</span>
                            </div>

                            <div className = 'Block-6-form-input-box'>
                                <div className = 'Block-6-form-input-box-text'>{this.state.validMessage2}</div>
                                <input onFocus = {this.onFocus5 = this.onFocus5.bind(this)} onBlur = {this.onBlur5 = this.onBlur5.bind(this)} className = 'Block-6-form-inputs-i' onChange = {this.onChange4 = this.onChange4.bind(this)} name = 'phone' type = 'tel'  placeholder = '0504447774' />
                                <span className = 'Form-error'>*This field is required</span>
                            </div>                        
                        </div>
                        <div>
                            <textarea resize = 'none' onChange = {this.onChange6 = this.onChange6.bind(this)} className = 'Block-6-form-message'  type = 'text' placeholder = 'Notes: (Leave a comment, suggestion or ask a question and we will contact you as soon as possible.)' />
                        </div>
                    </div>
                    <a onClick = {this.Submit = this.Submit.bind(this)} className = 'Block-6-form-button' href = '/'>Submit</a>
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
                <div className = 'Site-title'>Our Partners</div>
                <a target = '_blank' href = 'http://dpubs.com.ua/'>
                    <img className="Block-7-img" alt = 'Partner' src = '/object-1.svg' />
                </a>
            </div>
        )
    }
}