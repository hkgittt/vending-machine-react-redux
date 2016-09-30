import React from 'react'
// import { IndexLink, Link } from 'react-router'
import './Header.scss'

export const Header = () => (
  <div>
    <div className='bg-washed-red ma0 pa3-ns pa2 ph4-ns ph3'>
      <h1 className='tl f1 mid-gray avenir tracked-tight mv3 fw6'>Vending Machine</h1>
      <p className='f4 avenir mid-gray'>an exercise.</p>
    </div>
  </div>
)

export default Header

/*
    <IndexLink to='/' activeClassName='route--active'>
      Home
    </IndexLink>
    {' · '}
    <Link to='/counter' activeClassName='route--active'>
      Counter
    </Link>
*/
