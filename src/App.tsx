import { Routes, Route } from 'react-router-dom';
import { ShoppingCartProvider } from './context/shoppingcartcontext';
import { Container } from 'react-bootstrap';
import { Home } from './pages/home'
import { Store } from './pages/store'
import { About } from './pages/about'
import { Navbar } from './components/navbar'

export default function App() {
  return <ShoppingCartProvider>
    <Navbar />
    <Container className="mb-4">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/store" element={<Store />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </Container>
  </ShoppingCartProvider>
}
