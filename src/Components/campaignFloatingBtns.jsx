import React, { useState } from "react";
import { Link } from "react-scroll";
import Share from "./shareComponent";
import DonateIcon from "./assets/donateIcon.png";
import styles from "./styles/floatingBtns.module.css";
import useHover from "../utills/useHover";

const FloatBtn = (props) => {
  let [ref, hovered] = useHover();
  const [showShare, setShowShare] = useState(false);

  const handleClick = () => {
    setShowShare(!showShare);
  };

  return (
    <React.Fragment>
      <div className={`${styles.container} ${styles.ShareIcon}`}>
        <div>
          {showShare && (
            <Share
              url={window.location.href}
              title={props.campaign.title}
              description={props.campaign.description}
            />
          )}
          <div
            className={`${styles.share} ${styles.btn}`}
            onClick={handleClick}
            style={{
              borderRadius: "50%",
              transition: "all 0.3s ease",
              backgroundColor: showShare ? "#ff4d4d" : "#4CAF50",
            }}
          >
            {!showShare ? (
              <i className="fa fa-share-alt" aria-hidden="true"></i>
            ) : (
              <i className="fa fa-times" aria-hidden="true"></i>
            )}
          </div>
        </div>
      </div>

      <div className={`${styles.container} ${styles.DonateIcon}`}>
        <Link
          to="DonateForm"
          activeClass="active"
          spy={true}
          smooth={true}
          offset={-100}
          duration={500}
        >
          <button
            className={`btn ${styles.btn}`}
            ref={ref}
            style={{
              backgroundColor: "#ff5722",
              borderRadius: "30px",
              color: "#fff",
              fontWeight: "bold",
              transition: "transform 0.3s ease",
            }}
            onMouseEnter={(e) => (e.target.style.transform = "scale(1.1)")}
            onMouseLeave={(e) => (e.target.style.transform = "scale(1)")}
          >
            <span style={{ marginRight: "10px" }}>Donate Now</span>
            <img className={styles.img} src={DonateIcon} alt="Donate Icon" />
          </button>
        </Link>
      </div>
    </React.Fragment>
  );
};

export default FloatBtn;
