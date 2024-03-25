import useLocalStorage from "./useLocalStorage"
import './style.css'
export default function LightDarkMode(){
    const [theme,setTheme] = useLocalStorage('theme','light');

    function toggleThemechange(){
        setTheme(theme === 'light' ? 'dark' :'light')
    }

    
    return(
        <>
        <div className="light-dark-mode" data-theme={theme}>
        <div className="container">
            <p>Hello world</p>
            <button onClick={()=>{ toggleThemechange() }}>Change theme</button>
        </div>
        </div>
        </>
    )
}