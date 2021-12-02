import Link from "next/link";
import styles from "../styles/Header.module.css";
import { useRouter } from "next/router";

const Header = () => {
  const { locale } = useRouter();

  return (
    <nav className={styles.headerNav}>
      <ul>
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/products">Products</Link>
        </li>
        <li>
          <Link href="/products-fallback">Products Fallback</Link>
        </li>
      </ul>
      {locale && <p>Locale: {locale.toUpperCase()}</p>}
    </nav>
  );
};

export default Header;
