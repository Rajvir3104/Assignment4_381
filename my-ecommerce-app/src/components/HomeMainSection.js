import React, {useEffect, useState} from "react";
import reviews from "../data/reviews.js";

function HomeMainSection(){
    const [random_reviews, set_reviews] = useState([]);

    useEffect(() => {
        const shuffled_reviews = reviews.sort(() => Math.random()- 0.5);
        const selected_reviews = shuffled_reviews.slice(0,2);
        set_reviews(selected_reviews);
        }, []);
    
    return(
        <main>
            <section className = "about-us">
                <h1>About Us</h1>
                <p>Welcome to our online store! We are passionate about high-quality products and exceptional customer service. Learn more about our story and commitment to your statisfaction.</p>
            </section>

            <section className = "shop-now">
                <button><a href="/Products">Shop Now</a></button>
            </section>

            <section className = "customer-reviews">
                <h1>Customer Reviews</h1>
                {random_reviews.map((review,index) => (
                    <div key={index} className="review">
                        <p>{review.custmerName}</p>
                        <p>{review.reviewContent}</p>
                        <p>Rating: {"★".repeat(review.stars)}</p>
                    </div>
                ))}
            </section>
        </main>
    );
}