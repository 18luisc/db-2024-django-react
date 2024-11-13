import {
  Routes, Route, BrowserRouter as Router
} from 'react-router-dom';

import { Home, Customer } from '../pages';

const Approutes = () => {
  return (
    <div>
      <Router>
          <Routes>
            <Route path="/" element={<Home/>}></Route>
            <Route path="/customer" element={<Customer/>}></Route>
          </Routes>
      </Router>
    </div>
  )
}
export default Approutes;
