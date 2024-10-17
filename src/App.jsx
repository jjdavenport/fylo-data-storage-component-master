import Footer from "./components/footer";
import Header from "./components/header";
import Card from "./components/card";

function App() {
  return (
    <>
      <div className="md:bg-half flex h-full min-h-screen flex-col bg-mobile bg-cover bg-no-repeat font-custom text-sm font-normal md:bg-veryDarkBlue md:bg-desktop md:bg-bottom">
        <div className="flex flex-1 flex-col justify-center gap-4 p-4 md:min-h-96 md:flex-row md:items-center">
          <div className="flex flex-1 flex-col justify-center gap-4 md:flex-row md:items-end">
            <Header />
            <Card />
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
}

export default App;
