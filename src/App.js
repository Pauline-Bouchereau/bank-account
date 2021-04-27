import "./App.css";

import Header from "./Components/Header";
import Accounts from "./Components/Accounts";
import Footer from "./Components/Footer";

import transactions from "./transactions.json";

function App() {
  return (
    <div>
      <Header />
      <main>
        {transactions.map((elem, index) => {
          return (
            <Accounts
              key={index}
              name={elem.name}
              balance={elem.balance}
              color={elem.color}
              operations={elem.operations}
            />
          );
        })}
      </main>
      <Footer />
    </div>
  );
}

export default App;
