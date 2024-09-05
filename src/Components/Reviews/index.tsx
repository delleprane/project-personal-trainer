import { FaQuoteLeft, FaQuoteRight } from 'react-icons/fa';

import "./Reviews.css"
import CarouselReviews from '../CarouselReviews';
import {buttonTitleFreeClass, messageFreeClass} from "../../Utils/Messages"
import { Button } from '../Button';


export function Reviews() {
    return (
        <div id="reviews" className="reviews">
            <div className="reviews-container">
                <div className="quotes-left">
                <FaQuoteLeft style={{color:"#B22222" }}/>
                </div>
                <div className="carousel-review">
                <CarouselReviews/>
                </div>
                <div className="quotes-right">
                <FaQuoteRight style={{color:"#B22222"}}/>
                </div>
                <div className="video">
                <iframe width= "800px" height= "473px" src="https://www.youtube.com/embed/j3nf41XRu4Q" title="YouTube video player" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" ></iframe>
                </div>
                <Button content={buttonTitleFreeClass} message={messageFreeClass}/>
            </div>
        </div>
    )
}