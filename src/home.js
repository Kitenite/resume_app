import React from "react"
import ResumeView from "./resumeView"

const HOME_VIEW = 'homeView'
const USER_ID = '0'

export const Home = (props) => {
    const homeView = (
       <div className={HOME_VIEW}>
           <ResumeView id={USER_ID}/>
       </div>
    )
    return homeView
}