import React from "react";
import Navbar from "../../component/Navbar";
import { useLocation, useParams } from "react-router";

const Details = () => {
  const {id} = useParams();
//   const { id } = location.state

  return (
    <div>
      <Navbar />
      <div style={styles.container}>
        <h1 style={styles.title}>Details Screen</h1>
        <h3 style={styles.subtitle}>Received Data:</h3>
        <p style={styles.data}>{id || "No data provided."}</p>
      </div>
    </div>
  );
};

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
    fontSize: "2rem",
    fontWeight: "bold",
    marginBottom: "1rem",
    color: "#0056b3",
  },
  subtitle: {
    fontSize: "1.2rem",
    marginBottom: "1rem",
  },
  data: {
    fontSize: "1.5rem",
    color: "#333",
    padding: "10px 20px",
    backgroundColor: "#e9ecef",
    borderRadius: "8px",
    boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
  },
};

export default Details;
