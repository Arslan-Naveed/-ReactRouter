import { useLocation, Link } from "react-router";

const Navbar = () => {
  const location = useLocation();

  return (
    <nav style={styles.navbar}>
      <Link
        style={{
          ...styles.link,
          ...(location.pathname === "/" ? styles.activeLink : {}),
        }}
        to="/"
      >
        Home
      </Link>
      <Link
        style={{
          ...styles.link,
          ...(location.pathname === "/blog" ? styles.activeLink : {}),
        }}
        to="/blog"
      >
        Blog
      </Link>
      <Link
        style={{
          ...styles.link,
          ...(location.pathname === "/service" ? styles.activeLink : {}),
        }}
        to="/service"
      >
        Service
      </Link>
      <Link
        style={{
          ...styles.link,
          ...(location.pathname === "/about" ? styles.activeLink : {}),
        }}
        to="/about"
      >
        About
      </Link>
    </nav>
  );
};

const styles: { [key: string]: React.CSSProperties } = {
  navbar: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#0056b3",
    padding: "10px 20px",
    boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
  },
  link: {
    textDecoration: "none",
    color: "#ffffff",
    padding: "10px 15px",
    margin: "0 10px",
    fontSize: "1.2rem",
    fontWeight: "bold",
    transition: "color 0.3s ease, background-color 0.3s ease",
    borderRadius: "8px",
  },
  activeLink: {
    backgroundColor: "#ffffff",
    color: "#0056b3",
    boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
  },
};

export default Navbar;
