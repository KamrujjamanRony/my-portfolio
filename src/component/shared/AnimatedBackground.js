import mainBg from "../../assets/images/main_bg.png";

const AnimatedBackground = () => {
    return (
        <div className="lm-animated-bg" style={{backgroundImage: `url(${mainBg})`, backgroundPosition: "calc(50% + 1.32419px) calc(50% + -10.5134px)"}}></div>
    );
};

export default AnimatedBackground;