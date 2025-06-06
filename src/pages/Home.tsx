import ImageOne from "../components/ImageOne";
import ImageTwo from "../components/ImageTwo";
import ImageThree from "../components/ImageThree";
import "../styles/Home.css";

function Home() {
  return (
    <div>
      <div className="para">
        <ImageOne />

        <div className="text-box">
          <p className="text">
            Taniti is a lush, tropical island paradise nestled in the heart of
            the South Pacific. Known for its crystal-clear turquoise waters,
            vibrant coral reefs, and dense rainforests teeming with exotic
            wildlife, Taniti offers a perfect escape for nature lovers and
            adventure seekers alike. Visitors can explore ancient volcanic
            caves, relax on pristine white-sand beaches, or immerse themselves
            in the island's rich cultural heritage through traditional dance
            performances and local cuisine. With its friendly locals,
            eco-friendly resorts, and breathtaking natural beauty, Taniti
            promises an unforgettable getaway for travelers looking to
            experience the untouched magic of a hidden island gem.
          </p>
        </div>

        <ImageTwo />
        <div className="text-box">
          <p className="text">
            A tropical island is the perfect destination for all ages, offering
            something for everyone to enjoy. Children can build sandcastles on
            soft, white beaches and splash in the gentle waves, while teens and
            adults can snorkel, kayak, or try exciting water sports like
            parasailing. Older visitors will appreciate the relaxing atmosphere,
            stunning sunsets, and leisurely walks through lush tropical gardens.
            With a mix of adventure, relaxation, and natural beauty, tropical
            islands provide the ideal setting for families, couples, and solo
            travelers alike to unwind and create lasting memories together.
          </p>
        </div>
        <ImageThree />
      </div>
      <div className="text-box">
        <p className="text">
          Visiting the island of Taniti was truly one of the most unforgettable
          experiences of my life! From the moment I arrived, I was struck by the
          island’s stunning natural beauty—lush green landscapes, crystal-clear
          waters, and breathtaking beaches that looked like they came straight
          out of a postcard. The locals were incredibly warm and welcoming,
          always ready with a smile and eager to share their culture. Whether I
          was hiking through the tropical rainforest, snorkeling among colorful
          coral reefs, or enjoying fresh, delicious island cuisine, every moment
          felt like paradise. Taniti offers the perfect mix of adventure and
          relaxation, making it an ideal destination for anyone looking to
          escape and recharge. I can’t wait to come back! --Trip Advisor Agent
        </p>
      </div>
    </div>
  );
}

export default Home;
