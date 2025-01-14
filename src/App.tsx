import Topbar from "./components/comps/Topbar";
import Sidebar from "./components/comps/Sidebar";
import UtilitySection from "./components/comps/UtilitySection";
import MainSection from "./components/comps/MainSection";

function App() {
  return (
    <main className="flex flex-col">
      <Topbar />
      <section className="flex">
        <Sidebar />
        <section className="w-full">
          <UtilitySection />
          <MainSection />
        </section>
      </section>
    </main>
  );
}

export default App;
