import React from "react";
import styles from "../style";
import { clients } from "../constants";

const Clients = () => {
  return (
    <section id="clients" className={`${styles.flexCenter} my-4`}>
      <div className={`${styles.flexCenter} flex-wrap w-full`}>
        {clients.map((item) => (
          <div className={`flex-1 ${styles.flexCenter} sm:min-w-[192px] min-w-[120px]`} key={item.id}>
            <img src={item.logo} alt="Client Logo" className="sm:w-[192px] w-[100px] object-contain" />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Clients;
