import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCopy, faLock } from "@fortawesome/free-solid-svg-icons";
import SettingsMenu from "./SettingsMenu";
import Slider from "./Slider";
import Reset from "./Reset";

const PasswordGenerator = () => {
  return (
    <div className="w-full h-screen bg-gradient-to-r from-cyan-50 to-cyan-100 flex justify-center items-center">
      <div className="w-5/6 h-fit rounded-2xl border-2 border-white shadow p-12 bg-gradient-to-r from-blue-50 to-blue-100">
        <h1 className="text-center font-bold text-blue-700 font-mono">
          Password Generator
        </h1>
        <p className="text-xs text-center py-4 font-light font-mono">
          Generate a secure and random password
        </p>
        <div className="relative">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center cursor-pointer">
            <FontAwesomeIcon icon={faLock} style={{ color: "#38997c" }} />
          </div>
          <input
            className="text-sm rounded-2xl border border-gray-300 text-gray-900 h-8 w-full align-middle text-center ps-8 pe-8"
            readOnly={false}
          ></input>
          <div className="absolute inset-y-0 right-0 pr-3 flex items-center cursor-pointer">
            <FontAwesomeIcon icon={faCopy} style={{ color: "#dbdbdb" }} />
          </div>
        </div>
        <div className="pt-4">
          <label className="text-xs font-bold font-serif">Settings</label>

          <div className="flex flex-row">
            <SettingsMenu id="id" checkboxName="Uppercase" />
            <SettingsMenu id="lowercase" checkboxName="Lowercase" />
            <SettingsMenu id="symbols" checkboxName="Symbols" />
            <SettingsMenu id="numbers" checkboxName="Numbers" />
          </div>
        </div>
        <Slider />
        <Reset />
      </div>
    </div>
  );
};

export default PasswordGenerator;
