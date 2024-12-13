import React, { useState } from "react";
import Navbar from "../../component/Navbar";
import { Link, Outlet } from "react-router";




const Service = () => {
  const [data, setData] = useState<string>();

  return (
    <div>
      <Navbar />
      <div style={{ display: "flex", flexDirection: "column" }}>
        <div style={styles.container}>
          <h1 style={styles.title}>Our Services</h1>
          <h3 style={styles.subtitle}>Type Something Below</h3>
          <div style={styles.inputContainer}>
            <input
              type="text"
              value={data}
              onChange={(e) => setData(e.target.value)}
              placeholder="Enter your text here"
              style={styles.input}
            />
          </div>
          <Link to={`details/${data}`} state={{ message: data }}>
            <button style={styles.button}>Send Data to Next Screen</button>
          </Link>
        </div>
        <Outlet />
      </div>
    </div>
  );
};

export default Service;


const styles: { [key: string]: React.CSSProperties } = {
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    height: "100vh",
    backgroundColor: "#f8f9fa",
    color: "#333",
    fontFamily: "'Poppins', sans-serif",
  },
  title: {
    fontSize: "2.5rem",
    fontWeight: "bold",
    marginBottom: "1rem",
    color: "#0056b3",
  },
  subtitle: {
    fontSize: "1.2rem",
    marginBottom: "1.5rem",
  },
  inputContainer: {
    width: "100%",
    maxWidth: "400px",
    marginBottom: "1.5rem",
  },
  input: {
    width: "100%",
    padding: "10px 15px",
    borderRadius: "8px",
    border: "1px solid #ccc",
    fontSize: "1rem",
    boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
    outline: "none",
    transition: "all 0.3s ease",
  },
  button: {
    padding: "10px 20px",
    fontSize: "1rem",
    fontWeight: "bold",
    color: "#fff",
    backgroundColor: "#0056b3",
    border: "none",
    borderRadius: "8px",
    cursor: "pointer",
    boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
    transition: "background-color 0.3s ease",
  },
};
