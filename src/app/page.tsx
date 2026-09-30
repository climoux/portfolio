import Image from "next/image";
import styles from "@/css/page.module.css";

export default function Home() {
    return (
        <div className={styles.page}>
            <main className={styles.main}>
                <div className={styles.intro}>
                    <h1>Clément Menguy</h1>
                    <p>Étudiant en BTS SIO</p>
                </div>
                <div className={styles.ctas}>
                    
                </div>
            </main>
        </div>
    );
}
