import food from "../../assets/img/restauranfood.jpg";
import "./hero.css";
export const Hero = () => {
    return (
         <section className="hero">
            <div>
                <article className="restaurant-card">
                    <div >
                        <div className="subtitle">Little Lemon</div>
                        <div className="leadtext">Chicago</div></div>
                    <div>We are a family owned Mediterranean restauran, focused in traditional recipes served wotj a modern twist</div>
                    <button className="primary-button">Reserve a table</button>
                </article>
                <div><img src={food} alt="Restaurant food" width="300px" /></div>
            </div>
            
        </section>
    );
};