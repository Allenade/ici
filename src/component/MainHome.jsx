import Media from "./Media";
import Navbar from "./Navbar";
import Photo from "./Photo";

function MainHome() {
  const youtubeVideo = {
    video:
      "https://www.youtube.com/embed/wm0TYebjyHQ?enablejsapi=1&origin=https%3A%2F%2Fwww.icrc.org",
  };
  // const [Modal, setModal] = useState(false);
  return (
    <>
      <div className="relative min-h-screen bg-no-repeat bg-cover bg-hero">
        <Navbar />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="flex items-center justify-center w-6/12 mt-56 bg-black bg-opacity-75 h-44">
            <p className="text-2xl text-white">Your centered text goes here</p>
          </div>
        </div>
      </div>
      <section className="bg-[#000] w-full mx-auto py-16 ">
        <Photo />
        <div>
          <Media />
        </div>
      </section>
      <section className="bg-black">
        <div className="relative w-full text-white h-96">
          <iframe
            width="100%"
            height="100%"
            src={youtubeVideo.video}
            title="Embedded Video"
            frameBorder="0"
            allowFullScreen
          ></iframe>
          <div className="absolute inset-0 flex items-center justify-center">
            <h1 className="text-4xl font-bold">Your Content Goes Here</h1>
          </div>
        </div>
        ;
      </section>

      <section className="w-full bg-white ">
        <div className="flex w-4/5 mx-auto space-x-10">
          <div>
            <h1>Learn about us</h1>
            <p>
              We work around the world helping people affected by conflict and
              armed violence, and promoting the rules of war.
            </p>
          </div>
          <div>
            <h1>Work with us</h1>
            <p>
              Do you have a strong humanitarian motivation? Learn more about how
              to join the ICRC.
            </p>
          </div>
          <div>
            <h1>Support us</h1>
            <p>
              Help families and communities affected by armed conflict in
              conflict regions all over the world.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}

export default MainHome;

//  <div className="flex justify-center" onClick={() => setModal(true)}>
//    <p className="cursor-pointer">▶ Play</p>
//  </div>;
//  {
//    Modal && (
//      <div className="fixed top-0 left-0 flex items-center justify-center w-full h-full bg-black bg-opacity-70">
//        <div
//          className="w-full max-w-screen-md p-8 bg-white rounded-lg"
//          onClick={() => setModal(false)}
//        >
//          <iframe
//            width="100%"
//            height="100%"
//            src={youtubeVideo.video}
//            title="Embedded Video"
//            frameBorder="0"
//            allowFullScreen
//          ></iframe>
//        </div>
//      </div>
//    );
//  }
