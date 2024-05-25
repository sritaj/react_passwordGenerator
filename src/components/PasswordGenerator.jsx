import SettingsMenu from "./SettingsMenu";
import Slider from "./Slider";
import Reset from "./Reset";
import { useEffect, useState } from "react";
import PasswordDisplay from "./PasswordDisplay";

const PasswordGenerator = () => {
  const [password, setPassword] = useState("");
  const [range, setRange] = useState(8);
  const [uppercase, setUppercase] = useState(true);
  const [lowercase, setLowercase] = useState(true);
  const [symbols, setSymbols] = useState(true);
  const [numbers, setNumbers] = useState(true);

  const updateSlider = (e) => {
    setRange(e.target.value);
  };

  return (
    <div className="w-full h-screen bg-gradient-to-r from-cyan-50 to-cyan-100 flex justify-center items-center">
      <div className="w-3/5 h-fit rounded-2xl border-2 border-white shadow p-12 bg-gradient-to-r from-blue-50 to-blue-100">
        <h1 className="text-center font-bold text-blue-700 font-mono">
          Password Generator
        </h1>
        <p className="text-xs text-center py-4 font-light font-mono">
          Generate a secure and random password
        </p>
        <PasswordDisplay />
        <div className="pt-4">
          <label className="text-xs font-bold font-serif">Settings</label>

          <div className="flex flex-row">
            <SettingsMenu
              id="id"
              checkboxName="Uppercase"
              defaultChecked={uppercase}
            />
            <SettingsMenu
              id="lowercase"
              checkboxName="Lowercase"
              defaultChecked={lowercase}
            />
            <SettingsMenu
              id="symbols"
              checkboxName="Symbols"
              defaultChecked={symbols}
            />
            <SettingsMenu
              id="numbers"
              checkboxName="Numbers"
              defaultChecked={numbers}
            />
          </div>
        </div>
        <Slider range={range} updateSlider={updateSlider} />
        <Reset />
      </div>
    </div>
  );
};

export default PasswordGenerator;
