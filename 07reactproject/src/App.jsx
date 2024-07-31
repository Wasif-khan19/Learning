// /* eslint-disable react-hooks/exhaustive-deps */
// import { useCallback, useEffect, useRef, useState } from "react";
// import "./App.css";

// function App() {
//   const [length, setLength] = useState(8);
//   const [numberAllowed, setNumberAllowed] = useState(false);
//   const [characterAllowed, setCharacterAllowed] = useState(false);
//   const [password, setPassword] = useState("");

//   const passwordRef = useRef(null)

//   const passGenerator = useCallback(() => {
//     let pass = "";
//     let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
//     if (numberAllowed) str += "0123456789";

//     if (characterAllowed) str += "`!@#$%^&*()[]{}:'>,</?=-+_/";

//     for (let i = 1; i <= length; i++) {
//       let char = Math.floor(Math.random() * str.length + 1);
//       pass += str.charAt(char);
//     }
//     setPassword(pass);
//   }, [length, numberAllowed, characterAllowed]);

//   const copyPassword =useCallback(()=>{
//     passwordRef.current?.select()
//     // passwordRef.current?.setSelectionRange(0,5) just for range selection like 1 to 3 and so on
//     window.navigator.clipboard.writeText(password)
//   }, [password])

//   useEffect(() => {
//     passGenerator();
//   }, [length, numberAllowed, characterAllowed, passGenerator]);

//   return (
//     <>
//       <div className="w-full max-w-md mx-auto shadow-sm rounded-lg px-4 my-8 bg-blue-500 text-white">
//         <h1 className="text-white text-center">Password Generator</h1>
//         <div>
//           <input
//             type="text"
//             value={password}
//             ref={passwordRef}
//             className="w-full py-1 px-3 text-black"
//             placeholder="password"
//             readOnly
//           />
//           <button onClick={copyPassword} className="bg-white text-black py-1 px-2 rounded-md mt-2 mb-1">
//             Copy
//           </button>
//         </div>
//         <div className="flex text-sm gap-x-2">
//           <div className="flex items-center gap-x-1">
//             <input
//               type="range"
//               min={8}
//               max={45}
//               value={length}
//               className="cursor-pointer"
//               onChange={(e) => {
//                 setLength(e.target.value);
//               }}
//             />
//             <label htmlFor="">Length: {length}</label>
//           </div>
//           <div className="flex items-center gap-x-1">
//             <input
//               type="checkbox"
//               defaultChecked={numberAllowed}
//               id="numberinput"
//               onChange={() => {
//                 setNumberAllowed((prev) => !prev);
//               }}
//             />
//             <label htmlFor="numberinput">Numbers</label>
//             <div className="flex items-center gap-x-1">
//               <input
//                 type="checkbox"
//                 defaultChecked={characterAllowed}
//                 id="characterInput"
//                 onChange={() => {
//                   setCharacterAllowed((prev) => !prev);
//                 }}
//               />
//               <label htmlFor="characterInput">Character</label>
//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// }

// export default App;



/* eslint-disable react-hooks/exhaustive-deps */
import { useCallback, useEffect, useRef, useState } from "react";
import "./App.css";

function App() {
  const [length, setLength] = useState(8);
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [characterAllowed, setCharacterAllowed] = useState(false);
  const [password, setPassword] = useState("");

  const passwordRef = useRef(null);

  const passGenerator = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    if (numberAllowed) str += "0123456789";

    if (characterAllowed) str += "`!@#$%^&*()[]{}:'>,</?=-+_/";

    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length + 1);
      pass += str.charAt(char);
    }
    setPassword(pass);
  }, [length, numberAllowed, characterAllowed]);

  const copyPassword = useCallback(() => {
    passwordRef.current?.select();
    window.navigator.clipboard.writeText(password);
  }, [password]);

  useEffect(() => {
    passGenerator();
  }, [length, numberAllowed, characterAllowed, passGenerator]);

  return (
    <>
      <div className="w-full max-w-md mx-auto shadow-lg rounded-lg px-6 py-8 mt-12 bg-gradient-to-r from-red-500 to-pink-600 text-white">
        <h1 className="text-2xl font-bold text-center mb-6">Password Generator</h1>
        <div className="mb-6">
          <input
            type="text"
            value={password}
            ref={passwordRef}
            className="w-full py-2 px-4 text-black rounded-md"
            placeholder="password"
            readOnly
          />
          <button
            onClick={copyPassword}
            className="bg-black text-white font-semibold py-2 px-4 rounded-md mt-2 hover:bg-white hover:text-black focus:outline-none focus:ring-2 focus:ring-black"
          >
            Copy Password
          </button>
        </div>
        <div className="flex flex-col space-y-4 text-sm">
          <div className="flex items-center justify-between">
            <label htmlFor="length" className="flex items-center">
              Length: <span className="ml-2 font-bold">{length}</span>
            </label>
            <input
              id="length"
              type="range"
              min={8}
              max={40}
              value={length}
              className="cursor-pointer"
              onChange={(e) => {
                setLength(e.target.value);
              }}
            />
          </div>
          <div className="flex items-center justify-between">
            <label htmlFor="numberinput" className="flex items-center">
              Include Numbers
            </label>
            <input
              id="numberinput"
              type="checkbox"
              defaultChecked={numberAllowed}
              className="cursor-pointer"
              onChange={() => {
                setNumberAllowed((prev) => !prev);
              }}
            />
          </div>
          <div className="flex items-center justify-between">
            <label htmlFor="characterInput" className="flex items-center">
              Include Special Characters
            </label>
            <input
              id="characterInput"
              type="checkbox"
              defaultChecked={characterAllowed}
              className="cursor-pointer"
              onChange={() => {
                setCharacterAllowed((prev) => !prev);
              }}
            />
          </div>v 
        </div>
      </div>
    </>
  );
}

export default App;
