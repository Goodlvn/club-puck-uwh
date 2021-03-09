import { useState } from "react";
import { useRouter } from "next/router";
import Link from "next/link";


export default function Nav() {

    const router = useRouter();

    const [hoverState, setHoverState] = useState({
        news: false,
        learn: false,
        youth: false,
        contact: false
    })

    console.log(router.pathname);

    const toInvertOut = () => {
        setHoverState({ ...hoverState, news: false })
    }

    const toInvertIn = () => {
        setHoverState({ ...hoverState, news: true })
    }

    return (
        <div className="navBtnContainer">

            <div className="btnWrapper">
                <p id="news" className="btnLabel" style={hoverState.news ? { opacity: "1" } : { opacity: "0" }}>News</p>
                <Link href="/news">
                    <div className="navBtn news"
                        onMouseEnter={() => toInvertIn()}
                        onMouseLeave={() => toInvertOut()}
                    >
                        <img
                            src={(hoverState.news) ? "./images/newsInv.svg" : "./images/news.svg"} className={"newsimg"} />
                    </div>
                </Link>
            </div>

            <div className="btnWrapper">
                <p id="learn" className="btnLabel" style={hoverState.learn ? { opacity: "1" } : { opacity: "0" }}>Learn More</p>
                <Link href="/learn">
                    <div className="navBtn learn"
                        onMouseEnter={() => { setHoverState({ ...hoverState, learn: true }) }}
                        onMouseLeave={() => { setHoverState({ ...hoverState, learn: false }) }}
                    >
                        <img src={hoverState.learn ? "./images/learnInv.svg" : "./images/learn.svg"} className="learnimg" />
                    </div>
                </Link>
            </div>

            <div className="btnWrapper">
                <p id="youth" className="btnLabel" style={hoverState.youth ? { opacity: "1" } : { opacity: "0" }}>Youth UWH</p>
                <Link href="/youth">
                    <div className="navBtn youth"
                        onMouseEnter={() => { setHoverState({ ...hoverState, youth: true }) }}
                        onMouseLeave={() => { setHoverState({ ...hoverState, youth: false }) }}
                    >
                        <img src={hoverState.youth ? "./images/youthInv.svg" : "./images/youth.svg"} className="youthimg" />
                    </div>
                </Link>
            </div>

            <div className="btnWrapper">
                <p id="contact" className="btnLabel" style={hoverState.contact ? { opacity: "1" } : { opacity: "0" }}>Contact Us</p>
                <Link href="/contact">
                    <div className="navBtn contact"
                        onMouseEnter={() => { setHoverState({ ...hoverState, contact: true }) }}
                        onMouseLeave={() => { setHoverState({ ...hoverState, contact: false }) }}
                    >
                        <img src={hoverState.contact ? "./images/sendInv.svg" : "./images/send.svg"} className="sendimg" />
                    </div>
                </Link>
            </div>
        </div>
    )
}