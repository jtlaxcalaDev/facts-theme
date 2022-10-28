import React from 'react'
import './Main.css'

export default function Main(props) {
  return (
    <main className={props.darkMode ? "dark" : ""} >
      <h1 className='main--title'>Fun facts about React</h1>
      <ul className='facts--list'>
        <li className='fact--item'>Was first released in 2013</li>
        <li className='fact--item'>Was originally created by Jordan Walke</li>
        <li className='fact--item'>Has well over 100K stars on GitHub</li>
        <li className='fact--item'>Is maintained by Facebook</li>
        <li className='fact--item'>Powers thousands of enterprise apps, including mobile apps</li>
      </ul> 
    </main>
    
  )
}