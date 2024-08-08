/* eslint-disable react-refresh/only-export-components */
// import { useEffect, useState } from "react"

// function Github() {
//     const [data, setData] = useState([])
//     useEffect(() => {
//         fetch('https://api.github.com/users/Wasif-khan19')
//         .then(response => response.json())
//         .then(data=>{
//             console.log(data);
//             setData(data)
//         })
//     }, [])

//   return (
//     <div className="items-center justify-center text-center bg-blue-400 px-10 py-10 font-bold text-6xl">
//         <div>Name:{data.name}</div>
//         <div>Followers:{data.followers}</div>
//         <img className="" src={data.avatar_url} alt="img" width={200} height={200} />
//     </div>
//   )
// }

// export default Github

import { useLoaderData } from "react-router-dom";

function Github() {
  const data = useLoaderData();
  return (
    <div className="items-center justify-center text-center bg-blue-400 px-10 py-10 font-bold text-6xl">
      <div>Name:{data.name}</div>
      <div>Followers:{data.followers}</div>
      <img
        className=""
        src={data.avatar_url}
        alt="img"
        width={200}
        height={200}
      />
    </div>
  );
}

export default Github;

export const githubInfoLoader = async () => {
  const response = await fetch("https://api.github.com/users/Wasif-khan19");
  return response.json()
};
