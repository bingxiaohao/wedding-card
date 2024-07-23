import React, { useState, useEffect } from 'react';
import './GreetingCard.css';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const GreetingCard = () => {
    const [showMessage, setShowMessage] = useState(false);

    useEffect(() => {
        gsap.fromTo('.greeting-card', { opacity: 0, y: -50 }, { opacity: 1, y: 0, duration: 1.5 });
    }, []);

    const handleClick = () => {
        setShowMessage(true);
        gsap.fromTo('.message', { opacity: 0, y: -50 }, { opacity: 1, y: 0, duration: 1 });
    };

    return (
        <div className="greeting-card">
            <h1>恭喜结婚!</h1>
            <p>愿你们的婚姻充满爱与幸福。</p>
            <button onClick={handleClick}>点击查看祝福</button>
            {showMessage && (
                <div className="message">
                    <h2>亲爱的陈晨老师,</h2>
                    <p>愿你们的婚姻充满喜悦、爱和无尽的幸福。祝贺你们踏上这美妙的旅程!</p>
                    <img src={`${process.env.PUBLIC_URL}/images/wedding.jpg`} alt="婚礼" />
                    <div className="scrolling-messages">
                        <p>愿爱与欢笑永远伴随!</p>
                        <p>祝你们拥有一个美好的未来!</p>
                        <p>恭喜你们踏上新的冒险之旅!</p>
                        <p>愿你们的爱一天比一天更深!</p>
                    </div>
                </div>
            )}
            <audio controls autoPlay loop>
                <source src={`${process.env.PUBLIC_URL}/music/wedding-march.mp3`} type="audio/mp3" />
                您的浏览器不支持音频元素。
            </audio>
        </div>
    );
};

export default GreetingCard;
