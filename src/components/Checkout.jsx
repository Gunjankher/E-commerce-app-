import React from 'react'
import { Link } from 'react-router-dom'

function Checkout() {
  return (
    <Link to={"/checkout"}>
    <div>Checkout</div>
    </Link>
  )
}

export default Checkout