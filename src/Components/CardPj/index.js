import React from 'react';
import { motion } from 'framer-motion';
import './style.css'
import image1 from '../../assets/image1.jpg';
import image2 from '../../assets/image2.jpg';
import image3 from '../../assets/image3.jpg';
import image4 from '../../assets/image4.jpg';
import image5 from '../../assets/image5.jpg';

export default function CardPj () {
   
    return (
        <div className='card-projects'>
            <motion.div className='card-box'
             initial={{ x:-100, opacity: 0 }}
             animate={{ x: 0, opacity: 1 }}
             transition={{ ease: "easeInOut", duration: 1.5, delay: 1}}
            >
                <img src={image1} alt='image1'/>
                    
                <div className='card-content'>
                    <h3>Titulo</h3>
                    <div>
                        <button>
                            <a>Visitiar</a>
                        </button>

                        <button>
                            <a>Repositório</a>
                        </button>
                    </div>
                </div>
            </motion.div>

            <motion.div className='card-box'
            initial={{ x:-100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ ease: "easeInOut", duration: 1.5, delay: 2.}}>
                <img src={image2} alt='image2'/>
                    
                <div className='card-content'>
                    <h3>Titulo</h3>
                    <div>
                        <button>
                            <a>Visitiar</a>
                        </button>

                        <button>
                            <a>Repositório</a>
                        </button>
                    </div>
                </div>
            </motion.div>

            <motion.div className='card-box'
            initial={{ x: 100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ ease: "easeInOut", duration: 1.5, delay: 3}}
            >
                <img src={image3} alt='image3'/>
                    
                <div className='card-content'>
                    <h3>Titulo</h3>
                    <div>
                        <button>
                            <a>Visitiar</a>
                        </button>

                        <button>
                            <a>Repositório</a>
                        </button>
                    </div>
                </div>
            </motion.div>

            <motion.div className='card-box'
            initial={{ x: 100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ ease: "easeInOut", duration: 1.5, delay: 4}}
            >
                <img src={image4} alt='image4'/>
                    
                <div className='card-content'>
                    <h3>Titulo</h3>
                    <div>
                        <button>
                            <a>Visitiar</a>
                        </button>

                        <button>
                            <a>Repositório</a>
                        </button>
                    </div>
                </div>
            </motion.div>

            <motion.iv className='card-box'
            initial={{ x:-100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ ease: "easeInOut", duration: 1.5, delay: 5}}
            >
                <img src={image5} alt='image5'/>
                    
                <div className='card-content'>
                    <h3>Titulo</h3>
                    <div>
                        <button>
                            <a>Visitiar</a>
                        </button>

                        <button>
                            <a>Repositório</a>
                        </button>
                    </div>
                </div>
            </motion.iv>
        </div>
    )
};