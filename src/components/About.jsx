import "../App.css";
import Photo from "../assets/photo.jpeg";
export default function About(){
    return(
        
        <section className="hero-sec">
            <div className="main-hero">
                <h1>About Myself</h1>
                <p>I am Sayma Islam, a passionate learner and aspiring web <br /> developer. I enjoy creating simple and clean web designs <br /> while continuously improving my coding skills.</p>
                <div className="btn">
                    <button className="btn-hero">Hire me</button>
                    <button className="btn-hero">Contact me</button>
                </div>
            </div>
            <div className="image-hero">
                <img src={Photo} alt="picture" />
            </div>
        </section>
        

    )
}