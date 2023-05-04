import React from 'react'

const footerYear = new Date().getFullYear()

function Footer() {
  return (
    <footer className='footer p-10 bg-gray-700 text-primary-content footer-center'>
<div>
    <p>Copy rights {footerYear} all rights reserved</p>
</div>
    </footer>
  )
}

export default Footer