import { NavLink } from "react-router-dom"
import menuItems from "./menu"

export default function Sidebar() {
    return (
        <div style={{ background: "#a5bac9", minHeight: "100vh", width: "200px" }}>
            <div style={{
                padding: 12,
                textAlign: "center",
                fontWeight:"bold",
                borderBottom: "1px solid grey"
            }}>Admin Panel</div>

            {menuItems.map((item, i) => (
                <NavLink key={i} to={item.path} style={({isActive}) => ({
                    display: "block",
                    padding: "10px 20px",
                    color: isActive ? "white" : "black",
                    background: isActive ? "grey" : "transparent"
                })}>
                    {item.name}
                </NavLink>
            ))}
        </div>
    )
}