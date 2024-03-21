import { useEffect, useState } from "react"

export default function RandomColor() {
    const [typeofColor, setTypeofcolor] = useState('hex')
    const [color, setColor] = useState('#000000');

    function randomColorutility(length) {
        return Math.floor(Math.random() * length)
    }

    function handleCreateHexRandomColor() {
        const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"]
        let hexColor = "#"
        for (let i = 0; i < 6; i++) {
            hexColor += hex[randomColorutility(hex.length)]
        }
        console.log(hexColor)
        setColor(hexColor)
    }
    function handleCreateRgbRandomColor() {
        const r = randomColorutility(255);
        const g = randomColorutility(255);
        const b = randomColorutility(255);
        setColor(`rgb(${r},${g},${b})`);
    }

    useEffect(() => {
        if (typeofColor === 'hex') handleCreateHexRandomColor()
        else handleCreateRgbRandomColor()
    }, [typeofColor])
    return (
        <>
            <div className="container" style={{ height: '100vh', width: '100%', backgroundColor: `${color}` }}>
                <button onClick={() => { setTypeofcolor('hex') }}>Create HEX Color</button>
                <button onClick={() => { setTypeofcolor('rgb') }}>Create RGB Color</button>
                <button onClick={typeofColor === 'hex' ? handleCreateHexRandomColor : handleCreateRgbRandomColor}>Generate Random Color</button>
                <div style={{ display: 'flex', justifyContent: "center", alignItems: "center", fontSize: "50px", color: "white" }}>
                    <h1>{color}</h1>
                </div>
            </div>
        </>
    )
}