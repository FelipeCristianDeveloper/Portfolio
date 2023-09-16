import React from 'react';
import { motion } from 'framer-motion';
import './style.css'
import Header from '../../Components/Header';
import ImagePerfil from '../../assets/image-perfil.png'

export default function About () {
    return (
        <div>
            <Header />
            <section className='section-about'>
                <motion.div className='section-about-content'
                initial={{ x: 200 }}
                animate={{ x: 50}}
                transition={{ ease: "easeInOut", duration: 1.5}}
                >
                    <div className='box-content-title'>
                        <h2>Sobre Mim</h2>
                    </div>

                    <div className='box-content-description'>
                        <p>
                            Olá, mais uma vez, seja bem-vindo(a) ao meu portfólio.
                        </p>
                        <p>
                            Sou <span>Programador Front-End</span>, tenho 29 anos e estou cursando Ciência da Computação.
                            Atualmente, estou buscando uma transição de carreira. Sempre fui <span>apaixonado por tecnologia</span> e, hoje busco a minha primeira vaga de trabalho na área da Programação.
                        </p>
                    </div>
                </motion.div>

                <motion.img className='image-perfil' src={ImagePerfil} alt='Imagem de Felipe Cristian'
                initial={{ x:-100 }}
                animate={{ x: 50}}
                transition={{ ease: "easeInOut", duration: 1.5}}
                />
            </section>
        </div>
    )
}