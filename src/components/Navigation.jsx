import { Link } from "react-router-dom"
import "../Styles/NavBar.css"

export const Navigation=()=>{


    const links=[
        {
            title: "Home",
            link: "/"
          },
          {
            title:"Appointment",
            link:"/appointment"
          },
         
         
    ]

    return (
        <div className="navBar">
        <nav>
            <ul>
                {links.map((item)=>{
                    return <li><Link to={item.link} style={{textDecoration:"none"}}>{item.title}</Link></li>
                })}
            </ul>
        </nav>
         
        </div>
    )
}