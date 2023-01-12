import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div className="App">
      <h8>status bar</h8>
      <h5>오븐</h5>
      뒤로가기이미지
      <br />
      레인지 상단/하단 유용한 기능
      <div className="mode">
        <h3>대기중</h3>
        <select name="mode" class="center">
          <option value="">모드선택</option>
          <option>요리 모드</option>
          <option>대기 모드</option>
          <option>절전 모드</option>
        </select>
        <div>
          <span>온도</span>
          <span>요리 시간</span>
        </div>
        <button>시작</button>
      </div>
      <div className="scan">
        <h3>Scan to Cook</h3>
        <h8>간편식 바코드를 스캔하여 손쉽게 요리해보세요.</h8>
        <button>바코드 스캔하기</button>
      </div>
      <div className="recipe">
        <h3>레시피</h3>
        <h8>원하는 레시피를 선택하여 오븐에 전송하세요.</h8>
      </div>
      <div className="prepare">
        <table>
          <ul>
            <li>재료</li>
            <hr />
            <li>무게</li>
            <hr />
            <li>출력</li>
            <hr />
            <li>스팀</li>
            <hr />
          </ul>
        </table>
      </div>
    </div>
  );
}

function Mode(){
  return(
    <div className="mode">
        <h3>대기중</h3>
        <select name="mode" class="center">
          <option value="">모드선택</option>
          <option>요리 모드</option>
          <option>대기 모드</option>
          <option>절전 모드</option>
        </select>
        <div>
          <span>온도</span>
          <span>요리 시간</span>
        </div>
        <button>시작</button>
      </div>
  )
}

function Scan(){
  return(
    <div className="scan">
        <h3>Scan to Cook</h3>
        <h8>간편식 바코드를 스캔하여 손쉽게 요리해보세요.</h8>
        <button>바코드 스캔하기</button>
      </div>
  )
}

function Recipe(){
  return(
    <div className="recipe">
    <h3>레시피</h3>
    <h8>원하는 레시피를 선택하여 오븐에 전송하세요.</h8>
  </div>
  )
}

function Prepare(){
  return(
    <div className="prepare">
        <table>
          <ul>
            <li>재료</li>
            <hr />
            <li>무게</li>
            <hr />
            <li>출력</li>
            <hr />
            <li>스팀</li>
            <hr />
          </ul>
        </table>
      </div>
  )
}
export default App;
