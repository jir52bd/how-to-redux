import Footer from "./components/Footer";
import Head from "./components/Head";
import Navbar from "./components/Navbar";
import TodoList from "./components/TodoList";

function App() {
  return (
    <div
    class="grid place-items-center bg-blue-100 h-screen px-6 font-sans"
>

    <Navbar />

    <div class="w-full max-w-3xl shadow-lg rounded-lg p-6 bg-white">
       
        <Head />

        <hr class="mt-4" />

        <TodoList />

        <hr class="mt-4" />

        <Footer />
        
    </div>
</div>
  );
}

export default App;
