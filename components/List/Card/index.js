import React  from "react";
import styles from './style.module.css'
import { motion } from "framer-motion";
import Quality from "../../Misc/Quality";

class Card extends React.Component{

    render() {
        const container = {
            hidden: { opacity: 1, scale: 0 },
            visible: {
              opacity: 1,
              scale: 1,
              transition: {
                delayChildren: 0.3,
                staggerChildren: 0.2
              }
            }
          };

          const item = {
            hidden: { y: 20, opacity: 0 },
            visible: {
              y: 0,
              opacity: 1
            }
          };

        const part = this.props.part;

        const quality_color = ["#F55600", "#D48E0B", "#EBCF00", "#84D40B", "#0CF731"];
        const quality_star = Array.from(Array(part.quality).keys())
        return (
            <article className={styles.content}>

                <p style={{textAlign: "center", marginBottom:"0", width:"100%"}} className={styles.text}>{part.name}</p>
                <p className={styles.subtext}>{part.type}</p>
                <div
                    className={styles.image}
                    style={{backgroundImage: `url(${part.image.replace(/(\r\n|\n|\r)/gm, "")})`}}
                />
                <div className={styles.quality}>
                    <p >Quality : </p>
                    <p style={{textAlign: "right"}} className={styles.text}>{part.price}</p>
                    <Quality note={part.quality}/>
                    <motion.ul className={styles.note}
                        variants={container}
                        initial="hidden"
                        animate="visible">

                            {quality_star.map((index) => (<motion.li key={index} style={{backgroundColor: quality_color[part.quality-1]}} className={styles.notum} variants={item}/>)
                            )}

                    </motion.ul>

                </div>
            </article>
        );
    }
}

export default Card