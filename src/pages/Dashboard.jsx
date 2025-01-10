import { useState } from "react"
import Header from "../components/Header"
import Sidebar from "../components/Sidebar"
import "../styles/dashboard.scss"
import Notification from "../components/Dashboard/Notification"
import StatCard from "../components/Dashboard/StatCard"
import SectionTwo from "../components/Dashboard/SectionTwo"
import SectionThree from "../components/Dashboard/SectionThree"
import Marketing from "../components/Dashboard/Marketing"

const Dashboard = () => {
    const [showSidebar, setShowSidebar] = useState(true)
  return (
    <div className="dashboard-layout">
        <Sidebar show={showSidebar} setShow={setShowSidebar}/>
        <Header show={showSidebar} setShow={setShowSidebar}/>
        <main>
            <div className="side-one">
                <StatCard/>
                <SectionTwo/>
                <SectionThree/>
                <Marketing/>
            </div>
            <Notification/> 
        </main>
    </div>
  )
}

export default Dashboard;