import { useState } from 'react'
import QRcode from 'react-qr-code'


export default function QRcodeGenerator(){
    const [qrCode,setQrcode] = useState('')
    const [input,setInput] = useState('');
    function handleGenerateQrcode(){
        setQrcode(input)
        setInput(' ')
    }
    return(
        <div style={{textAlign:'center'}}>
            <h1>QR code generator</h1>
            <div>
                <input value={input} onChange={(e)=>{setInput(e.target.value)}} type="text" name="qr-code" placeholder="enter your value here" />
                <button disabled={input && input.trim() != ''?false:true} onClick={handleGenerateQrcode}>Generate</button>
            </div>
            <div>
                <QRcode 
                    id="qr-code-value"
                    value={qrCode}
                    size={400}
                    bgColor="#fff"
                />
            </div>
        </div>
    )
}