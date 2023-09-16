import React from 'react';
import { motion } from 'framer-motion';
import './style.css'
import Header from '../../Components/Header';
import Html from '../../assets/icon-html.png';
import Css from '../../assets/icon-css.png';
import Javascript from '../../assets/icon-javascript.png';
import ReactJs from '../../assets/icon-react.png';

export default function Skills () {
    return (
        <div>
            <Header />
            <section className='section-skills'>
                <div className='skills-content'>
                    <div className='box-hardSkills'>
                        <h2>Hard Skills</h2>

                        <div className='cards-HardSkills'>
                            <motion.div className='card-tech'
                            initial={{ x:-100, opacity:0 }}
                            animate={{ x:0, opacity:1 }} 
                            transition={{ ease:"easeInOut", duration:1 }}   
                            >
                                <img src={Html} alt='logo do HTML'/>
                                <p>HTML5</p>
                            </motion.div>

                            <motion.div className='card-tech'
                            initial={{ y:100, opacity:0 }}
                            animate={{ y:0, opacity:1 }} 
                            transition={{ ease:"easeInOut", duration:1, delay:0.5 }}
                            >
                                <img src={Css} alt='logo do CSS3'/>
                                <p>CSS3</p>
                            </motion.div>

                            <motion.div className='card-tech'
                            initial={{ y:-100, opacity:0 }}
                            animate={{ y:0, opacity:1 }} 
                            transition={{ ease:"easeInOut", duration:1, delay: 1 }}
                            >
                                <img src={Javascript} alt='logo do JAVASCRIPT'/>
                                <p>JAVASCRIPT</p>
                            </motion.div>

                            <motion.div className='card-tech'
                            initial={{ x:100, opacity:0 }}
                            animate={{ x:0, opacity:1 }} 
                            transition={{ ease:"easeInOut", duration:1, delay:1.5 }}   
                            >
                                <img src={ReactJs} alt='logo do HTML'/>
                                <p>REACT JS</p>
                            </motion.div>
                        </div>
                    </div>

                    <motion.div className='box-SoftSkills'
                    initial={{ scaleX: 0, opacity: 0 }}
                    animate={{ scaleX: 1, opacity: 1 }}
                    transition={{ ease: "easeInOut", duration: 1}}
                    >
                        <h2>Soft Skills</h2>

                        <ul>
                            <motion.li
                            initial={{ x: 100, opacity: 0 }}
                            animate={{ x: 0, opacity: 1 }}
                            transition={{ ease: "easeInOut", duration: 1, delay: 1}}
                            >
                                Comunicação
                            </motion.li>
                            
                            <motion.li
                            initial={{ x: 100, opacity: 0 }}
                            animate={{ x: 0, opacity: 1 }}
                            transition={{ ease: "easeInOut", duration: 1, delay: 2}}
                            >
                                Liderança
                            </motion.li>
                            
                            <motion.li
                            initial={{ x: 100, opacity: 0 }}
                            animate={{ x: 0, opacity: 1 }}
                            transition={{ ease: "easeInOut", duration: 1, delay: 3}}
                            >
                                Criatividade
                            </motion.li>

                            <motion.li
                            initial={{ x: 100, opacity: 0 }}
                            animate={{ x: 0, opacity: 1 }}
                            transition={{ ease: "easeInOut", duration: 1, delay: 4}}
                            >
                                Inteligência Emocional
                            </motion.li>

                            <motion.li
                            initial={{ x: 100, opacity: 0 }}
                            animate={{ x: 0, opacity: 1 }}
                            transition={{ ease: "easeInOut", duration: 1, delay: 5}}
                            >
                                Colaboração
                            </motion.li>

                            <motion.li
                            initial={{ x: 100, opacity: 0 }}
                            animate={{ x: 0, opacity: 1 }}
                            transition={{ ease: "easeInOut", duration: 1, delay: 6}}
                            >
                                Pensamento Crítico
                            </motion.li>

                            <motion.li
                            initial={{ x: 100, opacity: 0 }}
                            animate={{ x: 0, opacity: 1 }}
                            transition={{ ease: "easeInOut", duration: 1, delay: 7}}
                            >
                                Aprender a aprender
                            </motion.li>
                        </ul>
                    </motion.div>
                </div>
            </section>
        </div>
    )
}