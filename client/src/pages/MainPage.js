import React from 'react'
import Navigation from "../components/common/navigation";
import States from '../components/pagination/states'
import Footer from '../components/common/footer'



export const MainPage = () => {
    return (
        <div>
            <Navigation/>

    <States/>

        <Footer/>
        </div>
    )
}
