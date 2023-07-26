import './App.css';
import 'bootstrap/dist/css/bootstrap.css';

import Header from './header/Header'
import Form from './inputs/Form';
import { BrowserRouter, Switch, Route, Routes } from 'react-router-dom';
import BudgetPage from './budget_page/BudgetPage';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Header />
        <Routes>
          <Route path="/" element={<Form/>}>
          </Route>
          <Route path="/budget" element={<BudgetPage/>}>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
