import Footer from "./components/footer";
import Header from "./components/header";
import Card from "./components/card";

function App() {
  return (
    <>
      <div className="font-custom bg-mobile md:bg-desktop md:bg-veryDarkBlue flex h-full min-h-screen flex-col bg-cover bg-no-repeat text-sm font-normal md:bg-contain md:bg-bottom">
        <div className="flex flex-1 flex-col justify-center gap-4 p-4">
          <Header />
          <Card />
        </div>
        <Footer />
      </div>
    </>
  );
}

export default App;
