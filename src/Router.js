import { BrowserRouter, Route, Routes } from 'react-router-dom';

import App from './App';
import Calendar from './Pages/Calendar/Calendar';
import Graph from './Pages/Graph/Graph';
import Sensor from './Pages/Sensor/Sensor';

import GlobalStyles from './Styles/GlobalStyles';

function Router() {
  return (
    <BrowserRouter>
      <GlobalStyles />
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/sensor" element={<Sensor />} />
        <Route path="/calendar" element={<Calendar />} />
        <Route path="/graph" element={<Graph />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
