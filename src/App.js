import { Link } from 'react-router-dom';

import './App.css';

function App() {
  return (
    <div className="app_container">
      <div className="app_links">
        <div>
          <Link
            to="/sensor"
            style={{
              textDecoration: 'none',
              fontWeight: 'bolder',
              color: '#000000',
            }}
          >
            1. 센서 목록 화면으로 이동
          </Link>
        </div>
        <div>
          <Link
            to="/graph"
            style={{
              textDecoration: 'none',
              fontWeight: 'bolder',
              color: '#000000',
            }}
          >
            2. 데이터 그래프 대시보드 화면으로 이동
          </Link>
        </div>
      </div>
    </div>
  );
}

export default App;
