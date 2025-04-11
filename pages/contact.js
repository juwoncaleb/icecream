import React from "react";
import Header from "./component/header";
import Footer from "./component/footer";

const ContactUs = () => {
  return (
    <div>
      <Header />
      <div style={styles.container}>
        <div style={styles.headerContainer}>
        <p className="peller_text">What Questions do you have ?</p>
        <p className="text-center">
            Got questions? Need ice cream suggestions? We're here to help! Drop
            us a message and we'll get back to you with all the sweet details.
          </p>
        </div>

        <form style={styles.form}>
          <div style={styles.formGroup}>
            <label style={styles.label}>Your Name:</label>
            <input
              type="text"
              style={styles.input}
              placeholder="Enter your name"
              required
            />
          </div>
          <div style={styles.formGroup}>
            <label style={styles.label}>Your Email:</label>
            <input
              type="email"
              style={styles.input}
              placeholder="Enter your email"
              required
            />
          </div>
          <div style={styles.formGroup}>
            <label style={styles.label}>Message:</label>
            <textarea
              style={styles.textarea}
              placeholder="Tell us what's on your mind..."
              required
            />
          </div>
          <button type="submit" style={styles.button}>
            Send Message
          </button>
        </form>

     
      </div>
      <Footer />
    </div>
  );
};

const styles = {
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    minHeight: "100vh",
    color: "#4A2C2A", // Chocolate brown text
    fontFamily: "'Lobster', sans-serif", // Fun font for the title
    padding: "40px",
  },
  headerContainer: {
    textAlign: "center",
    marginBottom: "30px",
  },
  title: {
    fontSize: "40px",
    fontWeight: "bold",
    marginBottom: "10px",
    color: "#F48FB1", // Light pink for title
    textShadow: "2px 2px 6px rgba(0, 0, 0, 0.3)", // Shadow for a pop effect
  },
  description: {
    fontSize: "18px",
    marginBottom: "20px",
    color: "#4A2C2A", // Dark chocolate color
    maxWidth: "600px",
  },
  form: {
    backgroundColor: "#FFFFFF", // Clean white background for the form
    borderRadius: "15px",
    boxShadow: "0 4px 15px rgba(0, 0, 0, 0.1)",
    padding: "25px",
    width: "100%",
    maxWidth: "650px",
    transition: "all 0.3s ease-in-out",
  },
  formGroup: {
    marginBottom: "20px",
  },
  label: {
    fontSize: "16px",
    marginBottom: "5px",
    display: "block",
    color: "#FF4081", // Vibrant pink for labels
  },
  input: {
    width: "100%",
    padding: "12px",
    fontSize: "16px",
    border: "2px solid #FF4081",
    borderRadius: "8px",
    outline: "none",
    transition: "0.3s ease-in-out",
    marginBottom: "10px",
  },
  textarea: {
    width: "100%",
    padding: "12px",
    fontSize: "16px",
    border: "2px solid #FF4081",
    borderRadius: "8px",
    outline: "none",
    height: "120px",
    transition: "0.3s ease-in-out",
    marginBottom: "10px",
  },
  button: {
    padding: "12px 20px",
    fontSize: "16px",
    backgroundColor: "#FF4081", // Vibrant pink for button
    color: "#FFFFFF",
    border: "none",
    borderRadius: "8px",
    cursor: "pointer",
    boxShadow: "0 4px 6px rgba(0, 0, 0, 0.2)",
    transition: "background-color 0.3s ease",
  },
  buttonHover: {
    backgroundColor: "#F50057", // Darker pink for hover
  },
  contactInfo: {
    marginTop: "40px",
    textAlign: "center",
    fontSize: "16px",
    color: "#4A2C2A", // Dark chocolate color
  },
  contactInfoTitle: {
    fontSize: "24px",
    fontWeight: "bold",
    marginBottom: "15px",
    color: "#FF4081", // Vibrant pink for title
  },
  contactInfoItem: {
    margin: "10px 0",
    fontSize: "16px",
  },
};

export default ContactUs;
