import React from 'react'
import './SideNav.css'
import { Link, useLocation } from 'react-router-dom'

function SideNav() {
  const slug = useLocation()

  return (
    <div className='SideNav'>
      <Link
        to='/todos'
        className={`SideNav-list-items ${
          slug.pathname === '/todos' && 'SideNav-list-items--active'
        }`}
      >
        Todo
      </Link>
      <Link
        to='/accomplishments'
        className={`SideNav-list-items ${
          slug.pathname === '/accomplishments' && 'SideNav-list-items--active'
        }`}
      >
        Accomplishments
      </Link>
      {/*<Link
        to='/rewards'
        className={`SideNav-list-items ${
          slug.pathname === '/rewards' && 'SideNav-list-items--active'
        }`}
      >
        Rewards
      </Link>*/}
    </div>
  )
}

export default SideNav
