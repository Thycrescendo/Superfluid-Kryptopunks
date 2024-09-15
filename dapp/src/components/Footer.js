import React from 'react'
import { AiOutlineTwitter, AiOutlineGithub } from "react-icons/ai";
import { RiDiscordFill } from "react-icons/ri";

function Footer() {
    return (
        <div className='footer container'>
            <p>KryptoPunks&#169; All Right Reserved</p>
            <div className='social'>
                <a href='https://github.com/Thycrescendo' >
                    <AiOutlineGithub size={24} color="#000" />
                </a>
                <a href='https://x.com/Micholn2' >
                    <AiOutlineTwitter size={24} color="#000" />
                </a>
                <a href='https://discord.com/micholn#1700' >
                    <RiDiscordFill size={24} color="#000" />
                </a>
            </div>
        </div>
    )
}

export default Footer
