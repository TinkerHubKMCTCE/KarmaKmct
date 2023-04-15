import { Link } from "react-router-dom";
import { motion } from "framer-motion";

import classes from "./EventCard.module.css";

import PrimaryBtn from "../Button/Button";

const EventCard = (props) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 100 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, delay: 1 }}
      className={classes.card}
    >
      <div className={classes.imgBox}>
        <img className={classes.img} src={props.imgSrc} alt="cultural event" />
      </div>
      <div className={classes.textBox}>
        <h3 className={classes.heading}>{props.heading}</h3>
        <Link to={props.redirectLink}>
          <PrimaryBtn text="View more" />
        </Link>
      </div>
    </motion.div>
  );
};

export default EventCard;
