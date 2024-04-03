import Link from "next/link";
import styles from "../../styles/logo/logo.module.scss"

const Logo = () => {
    return (
        <Link href={'/'}>
            <img src="/img/logo.png" alt="logo" className={styles.logo}/>
        </Link>
    );
};

export default Logo;