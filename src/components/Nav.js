import Link from "next/link";


export default function Nav() {


    return (
        <div className="navBtnContainer">
            <Link href="/news">
                <div className="navBtn">News</div>
            </Link>
            <Link href="/learn">
                <div className="navBtn">Learn</div>
            </Link>
            <Link href="/youth">
                <div className="navBtn">Youth </div>
            </Link>
            <Link href="/contact">
                <div className="navBtn">Contact</div>
            </Link>
        </div>
    )
}