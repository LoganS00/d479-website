import topimage from "../assets/manyhut.avif";
import ImageToggle2 from "../components/ImageToggle2";

import ImageToggle3 from "../components/ImageToggle3";
import { Parallax } from "react-parallax";
import "../styles/Lodging.css";
import ImageToggle from "../components/ImageToggle";

function Lodging() {
  return (
    <div className="lodging">
      <Parallax
        bgImage={topimage}
        strength={500}
        bgImageAlt="Many huts on a beach and on a dock"
        className="para1"
      >
        <div className="title">
          <h1>Lodging</h1>
        </div>
      </Parallax>
      <div className="image-text-row1">
        <div className="image1">
          <ImageToggle />
        </div>

        <div className="first-seg">
          <p>
            Renting a hut on the ocean offers a truly magical escape from the
            everyday hustle. Imagine waking up to the sound of gentle waves,
            with the sun rising over a horizon that stretches endlessly before
            you. Ocean huts provide a unique blend of simplicity and serenity,
            often surrounded by natural beauty and calming sea breezes. Whether
            you're lounging on a deck above crystal-clear water or enjoying
            fresh seafood steps from your door, it's an experience that
            rejuvenates the soul. Perfect for a peaceful retreat or a romantic
            getaway, staying in an ocean hut connects you with nature in a way
            few accommodations can.
          </p>
        </div>
      </div>
      <div className="image-text-row2">
        <div className="second-seg">
          <p>
            Staying in a hotel near the ocean on an island is a perfect blend of
            comfort and paradise. You get the convenience of modern amenities
            while being just steps away from sun-soaked beaches and the soothing
            rhythm of the waves. From your balcony, you can watch breathtaking
            sunsets over the water and wake up to the scent of salty sea air.
            Many island hotels offer local cuisine, tropical drinks, and
            activities like snorkeling or paddleboarding right outside your
            door. It’s an ideal setting for both adventure and relaxation,
            offering a luxurious yet laid-back way to enjoy island life at its
            best.
          </p>
        </div>
        <div className="image2">
          <ImageToggle2 />
        </div>
      </div>
      <div className="image-text-row3">
        <div className="image3">
          <ImageToggle3 />
        </div>
        <div className="third-seg">
          <p>
            Staying in an Airbnb on a Taniti offers a personalized and immersive
            way to experience paradise. Unlike traditional hotels, Airbnb
            rentals often provide unique, locally inspired spaces—from cozy
            beachfront bungalows to hillside villas with breathtaking ocean
            views. You can wake up to the sound of waves, sip coffee on a
            private deck surrounded by palm trees, and enjoy the freedom of
            living like a local. Many hosts offer insider tips on hidden
            beaches, island cuisine, and off-the-beaten-path adventures, making
            your stay feel more authentic and connected. It’s the perfect blend
            of comfort, character, and tropical charm.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Lodging;
