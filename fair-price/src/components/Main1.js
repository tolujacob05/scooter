import "./css/Main1.css";
import vec2 from "../img/vec2.png";
import vec3 from "../img/vec3.png";

function Main1() {
  return (
    <div>
      <section className="main-1">
        <div className="main1-img">
          <img src={vec2} alt="" />
        </div>

        <div className="main1-text">
          <p>Fair price ride</p>
          <h1>
            Rent our <span>Scooter</span>
          </h1>
        </div>

        <div className="main1-p">
          <p>
            Lorem Ipsum has been the industry's standard dummy text ever since
            the 1500s, when an unknown printer took a galley of type and
            scrambled it to make a type specimen book.{" "}
          </p>
        </div>

        <div className="main1-inputs">
          <div className="inputs">
            <input type="text" placeholder="name" />
            <div className="main1-line"></div>
            <input type="text" placeholder="pickup date" />
            <div className="main1-line"></div>
            <input type="text" placeholder="Kilometers" />
          </div>

          <div className="main1-btn">
            <button>Book Scooter</button>
          </div>
        </div>

        <div className="main1-last">
          <img src={vec3} alt="" />
        </div>
      </section>
    </div>
  );
}

export default Main1;
