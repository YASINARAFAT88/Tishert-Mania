import { useEffect, useState } from "react"

const useTishirt = () =>{
    const [tishirt, setTshirt] = useState([]);

    useEffect(()=>{
        fetch('tishirt.json')
        .then(res => res.json())
        .then(data => setTshirt(data))
    },[])
    return [tishirt, setTshirt];
}
export default useTishirt;