import React from 'react'
import {Link} from 'react-router-dom'
import Expensify from './Expensify';
import Indecision from './Indecision';
import BoilerPlate from './BoilerPlate';

const Portfolio = (props) => {
    return (
        <div className="portfolio">
            <div className="container">
                <div className="portfolio__header">
                    <h1 className="portfolio__title">Portfolio</h1>
                    <p className="portfolio__subtitle">Please select from the following</p>
                </div>

                <div className="portfolio__item">
                <a href="http://www.expensify.tk" className="portfolio__item"><Expensify/></a>
                <a href="https://indecision-app-jv.herokuapp.com/dashboard" className="portfolio__item"><Indecision/></a>
                </div>
                <div  className="portfolio__item">
                <a href="https://github.com/JoshuaVerburg/react-boilerplate" className="portfolio__item"><BoilerPlate/></a>
                    <Expensify/>
                </div>
            </div>
        </div>

    );
};

export default Portfolio