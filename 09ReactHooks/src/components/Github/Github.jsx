import { useEffect, useState } from "react"


function Github() {
    const [data, setData] = useState([])
    useEffect(() => {
        fetch('https://api.github.com/users/Wasif-khan19')
        .then(response => response.json())
        .then(data=>{
            console.log(data);
            setData(data)
        })
    }, [])
    
  return (
    <div className="items-center justify-center text-center bg-blue-400 px-10 py-10 font-bold text-6xl">
        <div>Name:{data.name}</div>
        <div>Followers:{data.followers}</div>
        <img className="" src={data.avatar_url} alt="img" width={200} height={200} />
    </div>
  )
}

export default Github
