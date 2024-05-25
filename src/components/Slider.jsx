const Slider = () => {
  return (
    <div className="pt-4">
      <label htmlFor="range" className="text-xs font-bold font-serif">
        Length
      </label>
      <div className="flex pt-2">
        <input
          id="slider_range"
          className="w-6 bg-slate-400 border-gray-300 text-center mr-2 text-sm text-orange-700"
          readOnly={true}
        ></input>
        <input
          id="range"
          type="range"
          minLength={8}
          maxLength={64}
          step={1}
          //   value={8}
          onChange={() => console.log("changing")}
          className="w-full rounded-lg cursor-pointer bg-gray-100"
        ></input>
      </div>
    </div>
  );
};

export default Slider;
