import { useState } from "react";
import MetersToCentimeters from "./component/MetersToCentimeters";
import NotesToKilometers from "./component/NotesToKilometers";
import PoundsToKilograms from "./component/PoundsToKilograms";

function App() {
  const [option, setOption] = useState("xx");
  function handleChange(e) {
    setOption(e.target.value);
  }
  return (
    <div className="App">
      <header>
        <h1>단위 환산 앱</h1>
      </header>
      <main>
        <div
          style={{
            backgroundColor: "lightgray",
            padding: "1rem 0",
            textAlign: "center",
          }}
        >
          <select onChange={handleChange} style={{ outline: "none" , padding: '.250rem'}}>
            <option value="xx" defaultValue={"xx"}>
              ==단위==
            </option>
            <option value="0">길이</option>
            <option value="1">속도</option>
            <option value="2">질량</option>
          </select>
        </div>
        {/* 선택 값에 따라서 컴포넌트를 제각각 렌더링 */}
        {option === "xx" ? (
          <p className="text-center">변환하고자 하는 단위를 선택하세요</p>
        ) : null}
        {option === "0" ? <MetersToCentimeters /> : null}
        {option === "1" ? <NotesToKilometers /> : null}
        {option === "2" ? <PoundsToKilograms /> : null}
      </main>
      <footer>
        <p>&copy; seon. build by React.js</p>
      </footer>
    </div>
  );
}

export default App;
