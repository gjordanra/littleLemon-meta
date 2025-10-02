import food from "../../assets/img/restauranfood.jpg";
import "./hero.css";
export const Hero = () => {
    return (
         <section className="hero">
            <div>
                <article className="restaurant-card">Little Lemon Chicago<span>description</span><button>Reserve a table</button></article><div><img src={food} alt="Restaurant food" width="300px" /></div>
            </div>
            
        </section>
    );
};