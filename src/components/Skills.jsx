import '../App.css';
export default function Skills(){
    return(
        <section className='skills'>
            <div className='skills-about'>
                <h2>Technical Skills</h2>
                <p>Skilled in modern web technologies including HTML, CSS, JavaScript, and React, with a focus <br /> on creating responsive and user-friendly interfaces. Passionate about learning new <br />technologies and improving code quality through best practices.</p>

            </div>
            <div className='skills-col'>
                <div className='tab'>
                    <h3>Programming Languages</h3>
                    <p>C</p>
                    <p>C++</p>
                    <p>Python</p>
                    <p>Java</p>
                    </div>
            <div className='tab'>
                <h3>Frontend Development</h3>
                <p>HTML</p>
                <p>CSS</p>
                <p>JavaScript</p>
                <p>React.js</p>
            </div>
            <div className='tab'>
                <h3>UI/UX Design</h3>
                <p>Figma</p>
                <p>Adobe XD</p>
                <p>Sketch</p>
            </div>
            <div className='tab'>
                <h3>Tools and Technologies</h3>
                <p>GitHub</p>
                <p>Vs Code</p>
                <p>Git</p>
                <p>MySQL</p>
            </div>
            </div>
            <div className='skills-pro'>
                <div>
                    <h2>23+</h2>
                    <h4>Project Completed</h4>
                </div>
                <div>
                    <h2>12+</h2>
                    <h4>Project Pending</h4>
                </div>
            </div>
        </section>
    )
}
