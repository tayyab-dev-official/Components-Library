import {useState, useEffect, useRef} from 'react'
import Banner from '../Banner/Banner'

function Toasts(props){
    const [active, setActive] = useState(true)
    const timerRef = useRef(null)

    function toggle() {
        setActive(prevState => !prevState)
    }

    useEffect(() => {
        if (active) {
            
            if (timerRef.current) {
                clearTimeout(timerRef.current)
                console.log('cleared previous timer!')
            }
            
            console.log("setting timer and toggling....")
            timerRef.current = setTimeout(toggle, 3000)

        }
        return () => {
            clearTimeout(timerRef.current)
            console.log('removed timer and toggled state!')    
        }
    }, [active])

    return (
      <article {...props}>
        <h2>{props.children}</h2>
        <button 
            onClick={toggle}
            style={{
                background: "green",
                padding: "1em 1.5em",
                fontFamily: "Inter", 
                fontWeight: "500",
                color: "white",
                borderRadius: "12px",
                border: "none",
                boxShadow: "0px 0px 10px 10px gray"}}
            >
            {!active ? "Show" : "Hide"} Toast
        </button>
        {active && (
            <section >
                <Banner status="success" title="Course enrollment successful!" />
        
                <Banner status="warning" title="Payment reminder pending" />
        
                <Banner
                    status="error"
                    title="Unable to access course materials"
                />
        
                <Banner status="neutral" title="New course recommendations available" />
            </section>          
        )}
      </article>
    )
}

export default Toasts