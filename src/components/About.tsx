import React from 'react';
import styles from '../styles/about.module.scss';

const About: React.FC = () => {
    return (
        <div className={styles.about}>
            <img src="https://i.ibb.co/pdcVSCY/avatar.jpg" alt="avatar"/>
            <div>
                <h1>Привет, меня зовут Станислав</h1>
                <p>Итак, мне 31 и последние 8 лет я занимаюсь разработкой, увы, не связанной с IT :)
                В моей текущей компетенции то, что позже взлетит в небо в составе авиационной техники и да, это может
                    казаться чем то очень интересным, но лично для меня больший интерес последнее время (около 2 лет)
                представляет программирование, начавшееся как хобби из серии "а что, если..". К настоящему времени
                в мой стек входят: javascript, typescript(начал не так давно) html5, css3, react, redux, nodejs,
                    express и более мелкие библиотеки вроде axios, redux-thunk и т.д. В моих планах освоение apollo,
                    socket.IO, postgreSQL, разработка PWA приложений. В вопросе написания логики или верстки
                предпочту первое. p.s.: когда-нибудь хочу научиться программировать дронов.</p>
            </div>

        </div>
    );
};

export default About;