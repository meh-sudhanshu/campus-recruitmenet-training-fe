import { useRef } from "react";
import styles from "./Login.module.css";

export default function Login() {

    const usernameRef = useRef("test@gmail.com")
    const passwordRef = useRef("null")


    const loginHandler = (e) => {
        e.preventDefault()
        const loginData = {
            username: usernameRef.current.value,
            password: passwordRef.current.value
        }
        console.log(loginData)
        usernameRef.current.value=""
        passwordRef.current.value=""
    }


    return (
        <div className={styles.container}>
            <div className={styles.card}>
                <h2 className={styles.title}>Login</h2>

                <input
                    name="username"
                    type="text"
                    placeholder="Username"
                    className={styles.input}
                    ref={usernameRef}
                    value={usernameRef.current.value}
                />

                <input
                    name="password"
                    type="password"
                    placeholder="Password"
                    className={styles.input}
                    ref={passwordRef}
                    value={passwordRef.current.value}
                />

                <button className={styles.button} onClick={loginHandler}>Login</button>
            </div>
        </div>
    );
}
