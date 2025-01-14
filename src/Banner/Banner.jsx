import bannerImage from "../assets/images/banner.png";

const Banner = () => {
  return (
    <div className="w-11/12 mx-auto mt-12">
      <div
        className="hero min-h-screen rounded-3xl overflow-hidden"
        style={{
          backgroundImage: `url(${bannerImage})`,
        }}
      >
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-5xl">
            <h1 className="mb-10 text-5xl font-bold font-Lexend text-white">
              Welcome to Calories Hub - Your Ultimate Destination for Healthy
              and Delicious Recipes!
            </h1>
            <p className="mb-10 font-Lexend">
              At Calories Hub, we believe in the power of wholesome ingredients
              and balanced nutrition. Explore our collection of mouthwatering
              recipes, crafted to satisfy your cravings while keeping your
              health in mind.
            </p>
            <div className="font-Lexend flex flex-col lg:flex-row justify-center gap-4">
              <button className="btn bg-[#0BE58A] text-[#150B2B] text-xl font-bold rounded-full lg:px-6 ">
                Explore Now
              </button>
              <button className="btn bg-transparent text-white text-xl font-bold rounded-full lg:px-6 ">
                Our Feedback
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
