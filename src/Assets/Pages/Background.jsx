import background from "../Media/background.mp4";

const Background = () => {
  return (
    <div className="background-img">
      <video autoPlay loop muted playsInline className="video">
        <source src={background} type="video/mp4" />
      </video>
    </div>
  );
};

export default Background;
