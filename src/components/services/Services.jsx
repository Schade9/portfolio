import React from 'react'
import './services.css'
import { BiCheck } from 'react-icons/bi'

const Services = () => {
    return (
        <section id='services'>
            {/* <h5>What I Offer</h5> */}
            <br /><br />
            <h2>Services</h2>

            <div className="container services__container">
                <article className="service">
                    <div className="service__head">
                        <h3><strong>Data analysis</strong></h3>
                    </div>

                    <ul className="service__list">
                        <li>Development tech stack</li>
                        <li>
                            <BiCheck className='service__list-icon' />
                            <p>Python</p>
                        </li>
                        <li>
                            <BiCheck className='service__list-icon' />
                            <p>Pandas</p>
                        </li>
                        <li>
                            <BiCheck className='service__list-icon' />
                            <p>Jupyter Notebook</p>
                        </li>
                    </ul>
                </article>
                {/* END OF UI/UX */}

                <article className="service">
                    <div className="service__head">
                        <h3><strong>Web Development</strong></h3>
                    </div>

                    <ul className="service__list">
                        <li>Development tech stack</li>
                        <li>
                            <BiCheck className='service__list-icon' />
                            <p>Django</p>
                        </li>
                        <li>
                            <BiCheck className='service__list-icon' />
                            <p>Flask</p>
                        </li>
                        <li>
                            <BiCheck className='service__list-icon' />
                            <p>Postgresql</p>
                        </li>
                        <li>
                            <BiCheck className='service__list-icon' />
                            <p>MySQL</p>
                        </li>
                        <li>
                            <BiCheck className='service__list-icon' />
                            <p>React</p>
                        </li>
                    </ul>
                </article>
                {/* END OF WEB DEVELOPMENT */}

                <article className="service">
                    <div className="service__head">
                        <h3><strong>App Development</strong></h3>
                    </div>

                    <ul className="service__list">
                        <li>Development tech stack</li>
                        <li>
                            <BiCheck className='service__list-icon' />
                            <p>Flutter</p>
                        </li>
                        <li>
                            <BiCheck className='service__list-icon' />
                            <p>Dart</p>
                        </li>
                        <li>
                            <BiCheck className='service__list-icon' />
                            <p>Firebase</p>
                        </li>
                    </ul>
                </article>
                {/* END OF CONTENT CREATION */}
            </div>
        </section>
    )
}

export default Services