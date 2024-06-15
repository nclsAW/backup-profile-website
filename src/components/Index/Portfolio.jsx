import Portfolio_1 from './../../assets/Portfolio-1.png'
import './../../style.css'

export default function Portfolio() {
    return (
        <>
            <section className="portfolio container" id="portfolio">
                <h2>My Portfolio</h2>
                <div className="portfolio-group">
                    <img src={Portfolio_1} alt="Portfolio-1" />
                    <img src={Portfolio_1} alt="Portfolio-1" />
                    <img src={Portfolio_1} alt="Portfolio-1" />
                </div>
            </section>
        </>
    )
}