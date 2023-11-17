function Media() {
  const video = {
    video:
      "https://www.youtube.com/embed/wm0TYebjyHQ?enablejsapi=1&origin=https%3A%2F%2Fwww.icrc.org",
  };
  return (
    <>
      <div className="flex w-4/5 mx-auto gap-x-4">
        <div className="w-full col-span-1 text-center text-white ">
          <iframe
            width="100%"
            height="100%"
            src={video.video}
            title="Embedded Video"
            frameBorder="0"
            allowFullScreen
          ></iframe>
        </div>
        <div className="w-2/5 text-center text-white ">
          <div className="w-full bg-white h-60"></div>
          <div className="flex w-full mt-3 gap-x-4">
            <div className="w-1/2 h-40 bg-white ">house</div>
            <div className="w-1/2 h-40 bg-white ">house</div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Media;
