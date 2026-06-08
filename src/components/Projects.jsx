import '../App.css';
import Hospital from '../assets/hospital.webp';
import Airport from '../assets/airport.png'
export default function Projects(){
    return(
        <section className="pro-aca">
            <div>
                <h2>Academic & Personal Projects</h2>
                <p>I have worked on various academic and personal projects that helped me strengthen <br /> my problem-solving and development skills. These projects reflect my ability to apply <br /> theoretical knowledge into practical, real-world solutions.</p>
            </div>
            <div className='pro-item'>
                <div className='pro-card'>
                    <img src={Hospital} alt="" />
                    <h3>Hospital Management System</h3>
                    <p>A system designed to manage patient records, appointments, and hospital operations efficiently in a centralized platform.</p>
                    <div className='card-item'>
                        <h5>Used Language:</h5>
                        <li>JavaScript</li>
                        <li>React.js</li>
                    </div>
                </div>
                <div className='pro-card'>
                    <img src={Airport} alt="" />
                    <h3>Airport Management System</h3>
                    <p>A system that streamlines airport operations by managing flight schedules, passenger data, ticketing, and airport resources efficiently.</p>
                    <h5>Used Language:</h5>
                    <div className='card-item'>
                        <li>Java</li>
                        <li>Python</li>
                    </div>
                </div>
            </div>
        </section>
    )
}