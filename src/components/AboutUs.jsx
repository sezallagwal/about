const About = () => {
  return (
    <div className="grid grid-cols-[45%_55%] py-8 w-[50%] mx-auto h-screen">
      <div className="flex flex-col">
        <div className="first-left">
          <h2 className="text-3xl font-bold text-gray-800">About Us</h2>
          <p className="text-orange-500 mt-1">
            Compassion in Action, Change in Motion
          </p>
          <p className="text-sm text-gray-600 max-w-2xl mx-auto mt-4">
            A Reach to Care Foundation Trust, we are committed to transforming
            lives through impactful initiatives in healthcare, education, and
            social welfare.
          </p>
          <button className="mt-4 px-6 py-2 bg-teal-700 text-white rounded-full hover:bg-teal-800 mb-4">
            Read more
          </button>
        </div>

        {/* Blue Box */}
        <div
          className="second-left h-full bg-contain bg-no-repeat bg-center"
          style={{
            backgroundImage: "url('/assets/boy.jpg')",
          }}
        >
          <div className="flex flex-col items-start justify-center text-white px-4 text-sm bg-teal-500 bg-opacity-50 h-full">
            <h3 className="text-xl font-semibold">
              Helping Hands, Changing Lives
            </h3>
            <p className="mt-2">
              Our mission is to uplift underprivileged communities through
              humanitarian aid, skill development, and social welfare
              initiatives.
            </p>
            <button className="mt-4 px-8 py-2 text-white border border-white rounded-full">
              Join Us
            </button>
          </div>
        </div>
      </div>

      {/* Right Side */}
      <div className="flex h-full flex-col items-center">
        <div
          className="bg-cover h-[120%] w-[50%]"
          style={{
            backgroundImage: "url('/assets/intersect.jpg')",
          }}
        ></div>

        {/* Green Box */}
        <div
          className="h-full bg-cover bg-center"
          style={{
            backgroundImage: "url('/assets/forest.jpg')",
          }}
        >
          <div className="flex flex-col items-start justify-center h-full text-white px-4 text-sm bg-green-700 bg-opacity-50">
            <h3 className="text-xl font-semibold">
              Sustaining Nature, Sustaining the Future
            </h3>
            <p className="mt-2">
              Our mission is to uplift underprivileged communities through
              humanitarian aid, skill development, and social welfare
              initiatives.
            </p>
            <button className="mt-4 px-8 py-2 text-white border border-white rounded-full">
              Join Us
            </button>
          </div>
        </div>

        {/* Orange Box */}
        <div
          className="h-full bg-cover bg-center"
          style={{
            backgroundImage: "url('/assets/boy2.jpg')",
          }}
        >
          <div className="flex flex-col items-start justify-center h-full text-white px-4 text-sm bg-orange-500 bg-opacity-50">
            <h3 className="text-xl font-semibold">
              Bringing Hope in Times of Crisis
            </h3>
            <p className="mt-2">
              We stand with communities affected by disaster, providing urgent
              relief and long-term support.
            </p>
            <button className="mt-4 px-8 py-2 text-white border border-white rounded-full">
              Join Us
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
