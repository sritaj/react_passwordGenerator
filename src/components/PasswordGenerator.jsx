const PasswordGenerator = () => {
  return (
    <div className="w-full h-screen bg-gradient-to-r from-cyan-50 to-cyan-100 flex justify-center">
      <div className="w-5/6 rounded-2xl border-2 border-white shadow m-80 p-12 bg-gradient-to-r from-blue-50 to-blue-100">
        <h1 className="text-center font-bold text-blue-700 font-mono">
          Password Generator
        </h1>
        <p className="text-xs text-center py-4 font-light font-mono">
          Generate a secure and random password
        </p>
        <div className="">
          <input
            className="text-sm rounded-2xl border border-gray-300 text-gray-900 h-8 w-full align-middle text-center ps-8 pe-8"
            readOnly={false}
          ></input>
        </div>
      </div>
    </div>
  );
};

export default PasswordGenerator;
