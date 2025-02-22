import React from "react";
import logo from "./assets/RotaractIcon.png";
import styles from "./styles/footer.module.css";

const Footer = () => {
  return (
    <footer className={`mb-0 p-4 ${styles.footer}`} style={{ backgroundColor: "#222", color: "#fff" }}>
      <div className="row">
        <div className={`col-12 col-sm-6 col-md-4 ${styles.left}`}>
          <a href="/">
            <img
              className={`${styles.logo}`}
              src={logo}
              alt="ROTARACT LOGO"
              style={{ filter: "brightness(0) invert(1)" }}
            />
          </a>
          <p className={`${styles.caption}`}>
            <b>Rotaract Club</b> <br /> IIITM Gwalior
          </p>
        </div>
        <div className={`col-12 col-sm-6 col-md-4 ${styles.middle}`}>
          <p><b>Follow us on</b></p>
          <a className={`${styles.facebook}`} href="https://www.facebook.com/rotaractiiitm/" target="_blank" rel="noreferrer">
            <i className="fa fa-facebook" style={{ fontSize: "24px", marginRight: "10px" }}></i>
          </a>
          <a className={`${styles.linkedin}`} href="https://in.linkedin.com/company/rotaract-club-abv-iiitm" target="_blank" rel="noreferrer">
            <i className="fa fa-linkedin" style={{ fontSize: "24px" }}></i>
          </a>
        </div>
        <div className={`col-12 col-sm-12 col-md-4 ${styles.right}`}>
          <p className={`${styles.names}`}><b>Developed By</b></p>
          <p>Swatik Paul, Vivek Kamboj, Manish Mavi</p>
          <p>Contact: <b>rotaract@iiitm.ac.in</b></p>
        </div>
      </div>
      <div className={`${styles.footerBottom}`}>
        <hr className={`${styles.line}`} />
        <p style={{ textAlign: "center", fontSize: "14px" }}>
          Copyright &copy; 2024 ROTARACT CLUB IIITM. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
