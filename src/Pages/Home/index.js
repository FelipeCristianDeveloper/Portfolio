import React from 'react';
import './style.css'
import Header from '../../Components/Header';
import ImageLinkedin from '../../assets/icon-linkedin.png';
import ImageGitHub from '../../assets/icon-github.png';
import ImageWhatsapp from '../../assets/icon-whatsapp.png';
import { easeInOut, motion } from 'framer-motion';

export default function Home () {
    return (
        <div>
            <Header />
            <section>
                <div className='section-banner'>
                    <div className='section-banner-title'>
                        <motion.h3
                        initial={{ y:-100, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ ease: easeInOut, duration: 1.5}}
                        >
                            Olá, seja bem-vindo(a) ao meu Portfólio!
                        </motion.h3>

                        <motion.h1
                        initial={{ x:-100, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ ease: easeInOut, duration: 1.5}}
                        >
                            Felipe Cristian
                        </motion.h1>

                        <motion.p
                        initial={{ x: 200, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ ease: easeInOut, duration: 1.5}}
                        >
                            Programador Front-End
                        </motion.p>
                    </div>

                    <div className='section-banner-social-media'>
                         <a href='https://www.linkedin.com/in/felipe-cristian-silva-de-santana-998933289/' target='_blank'>
                            <motion.img src={ImageLinkedin} alt='ícone do linkedin' 
                            initial={{ x:-100, opacity: 0 }}
                            animate={{ x: 0, opacity: 1 }}
                            transition={{ ease: easeInOut, duration: 1.5, delay: 1.5}}
                            />
                        </a>

                        <a href='https://github.com/FelipeCristianDeveloper' target='_blank'>
                            <motion.img src={ImageGitHub} alt='ícone do github' 
                            initial={{ x:-100, opacity: 0 }}
                            animate={{ x: 0, opacity: 1 }}
                            transition={{ ease: easeInOut, duration: 1.5, delay: 2.5}}
                            />
                        </a>

                        <a href='https://wa.me/5579991388165' target='_blank'>
                            <motion.img src={ImageWhatsapp} alt='ícone do whatsapp' 
                            initial={{ x: -100, opacity: 0 }}
                            animate={{ x: 0, opacity: 1 }}
                            transition={{ ease: "easeInOut", duration: 1.5, delay: 3.5}}
                            />
                        </a>
                    </div>
                </div>
            </section>
        </div>
    )
}