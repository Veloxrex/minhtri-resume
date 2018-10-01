import React, {Component} from 'react'
import "./work.css"
import Swiper from 'react-id-swiper'

export default class WorkingScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    onSlideChange = () => {
        const activeIndex = this.swiper.activeIndex;
        const {currentIndex} = this.state;
        if (currentIndex !== activeIndex) {
            this.setState({currentIndex: activeIndex})
        }
    };

    render() {
        const params = {
            effect: 'cube',
            grabCursor: true,
            cubeEffect: {
                shadow: true,
                slideShadows: true,
                shadowOffset: 20,
                shadowScale: 0.94,
            },
            pagination: {
                el: '.swiper-pagination',
                type: 'bullets',
                clickable: true
            },
            on: {
                slideChange: this.onSlideChange
            },
            spaceBetween: 30
        }
        const {currentIndex} = this.state
        return (
            <div className="working_container">
                <div className="pageNumber-container">
                    <div className="pageNumber">03</div>
                    <div className="line-number"/>
                    <div className="pageName">EXPERIENCE</div>
                </div>
                <div className="working_container_content">
                    <div className="title">
                        WORKING EXPERIENCE
                    </div>
                    <div className="content_title_line"/>
                    <Swiper {...params} ref={el => el ? this.swiper = el.swiper : null}>
                        <div className="swiper-slide">
                            <div className="content">
                                SmartFun Studio
                                <br/>
                                <div className="date">From Apr 2017</div>
                                Working in production team.
                                <br/>
                                Building an various product.
                                <br/>
                                Learn how to estimating work as well as scheduling your work.
                                <br/>
                                Responsible for what I had done.
                                <br/>
                                Work on time
                            </div>
                        </div>
                        <div className="swiper-slide">
                            <div className="content">
                                Kaizen IT Solution - Kaizen Asia
                                <br/>
                                <div className="date">From Feb 2018</div>
                                Working in production team.
                                <br/>
                                Building an various product.
                                <br/>
                                Learn how to estimating work as well as scheduling your work.
                                <br/>
                                Responsible for what I had done.
                                <br/>
                                Work on time
                            </div>
                        </div>
                    </Swiper>
                </div>
                <div className="working_container_image">
                    <div className="working_image">
                        {currentIndex === 0 || !currentIndex ? <div className="swiper-slide">
                            <img src={process.env.PUBLIC_URL + "/assets/images/sf.png"} alt="sf"/>
                            </div> : <img src={process.env.PUBLIC_URL + "/assets/images/logo_kaizen.png" } alt="kz"/>

                        }
                    </div>
                </div>
            </div>
        )
    }
}
