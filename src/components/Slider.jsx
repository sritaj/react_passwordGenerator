const Slider = () => {
  return (
    <div className="pt-4">
      <label htmlFor="range" className="text-xs font-bold font-serif">
        Length
      </label>
      <input
        id="range"
        type="range"
        minLength={8}
        maxLength={64}
        step={1}
        value={8}
        onChange={() => console.log("changing")}
        className="w-full rounded-lg cursor-pointer bg-gray-100"
      ></input>
    </div>
  );
};

export default Slider;
