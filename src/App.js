import Header from "./components/header";
import Cart from "./components/cart";
import Main from "./components/main";

import { Container } from "./style";


function App() {
  return (
    <Container>
      <Header />
      <Main />
      <Cart />
    </Container>
     
  );
}

export default App;
