import React from "react";
import config from "../config.js";
import styles from "./styles/donateform.module.css";

const DonateForm = (props) => {
  const send_to = config.donateTo(props.id);

  return (
    <React.Fragment>
      <form className="row" method="POST" action={send_to}>
        <div className="form-group col-7">
          <span className={styles.rupeeInput}>
            <i className="fa fa-inr" aria-hidden="true"></i>{" "}
            <input
              className={styles.input}
              name="amount"
              placeholder="Enter Amount"
              disabled={!props.isActivated}
              required
              value={props.amount}
              onChange={props.onAmountChange}
              style={{
                borderRadius: "10px",
                padding: "10px",
                fontSize: "16px",
                border: "1px solid #ddd",
                transition: "border 0.3s ease",
              }}
              onFocus={(e) => (e.target.style.border = "1px solid #4CAF50")}
              onBlur={(e) => (e.target.style.border = "1px solid #ddd")}
            />
          </span>
        </div>
        <div className={`col-5 ${styles.submit}`}>
          <button
            type="submit"
            disabled={!props.isActivated}
            className={`btn col-12 ${styles.btn} ${
              props.isActivated === false
                ? `btn-secondary ${styles.disabled}`
                : `btn-success ${styles.active}`
            }`}
            style={{
              borderRadius: "10px",
              fontWeight: "bold",
              transition: "all 0.3s ease",
              padding: "12px",
            }}
          >
            Donate Now <i className="fa fa-arrow-right" aria-hidden="true"></i>
          </button>
        </div>
      </form>
    </React.Fragment>
  );
};

export default DonateForm;
