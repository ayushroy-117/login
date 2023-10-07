import React, { useState } from "react";
import { auth, provider } from "../../firebase";
import { signInWithPopup } from "firebase/auth";
import { Link } from "react-router-dom";
import 'boxicons';
import styles from "./Home.module.css";

function Home(props) {
    const [value, setValue] = useState('');

    const handleClick = () => {
        signInWithPopup(auth, provider).then((data) => {
            setValue(data.user.email);
            localStorage.setItem("email", data.user.email);
        });
    }

    return (
        <div className={styles.container}>
            <div className={styles.main_container}>
                <a className={`${styles.nav__link} ${styles['nav-1']} ${styles['data-text']}`}>&nbsp;&nbsp;Talks&nbsp;&nbsp;</a>
                <div className={styles.innercontainer}>
                    <button className={styles['glow-on-hover']}><a href="/login">Login</a></button>
                    <button className={`${styles['glow-on-hover']} ${styles.glow}`}><a href="/signup">Signup</a></button>
                    <div className={styles['google-btn']}>
                        <div className={styles['google-icon-wrapper']} onClick={handleClick}>
                            <img className={styles['google-icon']} src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg" alt="logo" />
                        </div>
                        <p className={styles['btn-text']}><b>Sign in with google</b></p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Home;
