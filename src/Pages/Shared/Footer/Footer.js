import React from 'react';

const Footer = () => {
    const today = new Date();
    const year = today.getFullYear();
    return (
        <footer className='text-center text-dark mt-5'>
            <p><small>All Rights Reserved By &copy; A's Click | {year} </small></p>
        </footer>

    );
};

export default Footer;