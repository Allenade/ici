import MainHome from "./MainHome";
// import Data from "./data";
function HomePage() {
  // const dataCard = Data.map((item) => {
  //   return (
  //     <MainHome
  //       key={item.id}
  //       title={item.title}
  //       description={item.description}
  //     />
  //   );
  // });
  return (
    <div className="w-full">
      <MainHome />
    </div>
  );
}

export default HomePage;
