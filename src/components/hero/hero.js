import food from "../../assets/img/restauranfood.jpg";
import "./hero.css";
export const Hero = () => {
    return (
         <section className="hero">
            <div>
                <article className="restaurant-card">
                    <div>
                        <div className="restaurantcardtitle">Little Lemon</div>
                        <div className="subtitle">Chicago</div>
                    </div>
                    <div className="restaurantcarddetails">We are a family owned Meditarrean restaurant, focused on traditional recipes served with a modern twist.</div>
                    <button className="primary-button">Reserve a table</button>
                </article>
                <div><img src={food} alt="Restaurant food"/></div>
            </div>
            
        </section>
    );
};