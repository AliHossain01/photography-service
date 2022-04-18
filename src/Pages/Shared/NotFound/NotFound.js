import React from 'react';
import './NotFound.css'

const NotFound = () => {
    return (
        <div>
            <section class="notFound">
                <div class="img">
                    <img src="https://assets.codepen.io/5647096/backToTheHomepage.png" alt="Back to the Homepage" />
                    <img src="https://assets.codepen.io/5647096/Delorean.png" alt="El Delorean, El Doc y Marti McFly" />
                </div>
                <div class="text">
                    <h1>404</h1>
                    <h2>PAGE NOT FOUND</h2>
                    <h3>BACK TO HOME?</h3>
                    <a href="https://photography-services-e857d.web.app/" class="yes">YES</a>
                    <a href="https://photography-services-e857d.web.app/">NO</a>
                </div>
            </section>
        </div>
    );
};

export default NotFound;