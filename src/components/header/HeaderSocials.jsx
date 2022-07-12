import React from 'react'
import { BsLinkedin } from 'react-icons/bs'
import { FaGithub } from 'react-icons/fa'
import { BsInstagram } from 'react-icons/bs'

const HeaderSocials = () => {
  return (
    <div className='header__socials'>
        <a href="https://www.linkedin.com/in/ssemakula-charles-derrick-53aa6a1b9/" target="_blank"><BsLinkedin /></a>
        <a href="https://github.com/Schade9" target="_blank"><FaGithub /></a>
        <a href="https://instagram.com" target="_blank"><BsInstagram /></a>
    </div>
  )
}

export default HeaderSocials