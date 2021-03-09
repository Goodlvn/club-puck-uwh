import { useState } from "react"
import Link from "next/link";


export default function Nav() {

    const [hoverState, setHoverState] = useState({
        news: false,
        learn: false,
        youth: false,
        contact: false
    })

    return (
        <div className="navBtnContainer">
            <Link href="/news">
                <div className="navBtn news"
                    onMouseEnter={() => { setHoverState({ ...hoverState, news: true }) }}
                    onMouseLeave={() => { setHoverState({ ...hoverState, news: false }) }}
                >
                    <img
                        src={hoverState.news ? "./images/newsInv.svg" : "./images/news.svg"} className={"newsimg"} />
                    <p id="news" className="btnLabel">News</p>
                </div>
            </Link>
            <Link href="/learn">
                <div className="navBtn learn"
                    onMouseEnter={() => { setHoverState({ ...hoverState, learn: true }) }}
                    onMouseLeave={() => { setHoverState({ ...hoverState, learn: false }) }}
                >
                    <img src={hoverState.learn ? "./images/learnInv.svg" : "./images/learn.svg"} className="learnimg" />
                    <p id="learn" className="btnLabel">Learn More</p>
                </div>
            </Link>
            <Link href="/youth">
                <div className="navBtn youth"
                    onMouseEnter={() => { setHoverState({ ...hoverState, youth: true }) }}
                    onMouseLeave={() => { setHoverState({ ...hoverState, youth: false }) }}
                >
                    <img src={hoverState.youth ? "./images/youthInv.svg" : "./images/youth.svg"} className="youthimg" />
                    <p id="youth" className="btnLabel">Youth UWH</p>
                </div>
            </Link>
            <Link href="/contact">
                <div className="navBtn contact"
                    onMouseEnter={() => { setHoverState({ ...hoverState, contact: true }) }}
                    onMouseLeave={() => { setHoverState({ ...hoverState, contact: false }) }}
                >
                    <img src={hoverState.contact ? "./images/sendInv.svg" : "./images/send.svg"} className="sendimg" />
                    <p id="contact" className="btnLabel">Contact Us</p>
                </div>
            </Link>
        </div>
    )
}