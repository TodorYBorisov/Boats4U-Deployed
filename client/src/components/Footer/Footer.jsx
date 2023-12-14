import styles from './Footer.module.css';
import { useEffect, useState } from 'react';

export default function Footer() {

    const [currentYear, setCurrentYear] = useState(null);
    useEffect(() => {
        setCurrentYear(new Date().getFullYear());
    }, []);

    return (
        <footer className={styles['footer']}>
            <p>Copyright &copy; {currentYear} Todor Borisov. All Rights Reserved. <span>Boats4U</span></p>

            <div className={styles['social-media-icons']}>
                <a href="https://github.com/TodorYBorisov/Boats4U-App-React"><i className="fa-brands fa-square-github"></i></a>
                <a href="https://www.linkedin.com/in/todor-borisov-92378131/"><i className="fa-brands fa-linkedin"></i></a>
            </div>
        </footer >
    );
}
