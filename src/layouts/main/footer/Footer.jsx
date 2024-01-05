import React from 'react'
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
function Footer() {
    return (
        <div className=' bottom-0 h-16 w-full flex align-middle justify-around items-center bg-gradient-to-r from-cyan-500 to-blue-500'>
            <div>
                <a className='m-2' href={'https://github.com/burhanbulut'} ><GitHubIcon  /></a>
                <a className='m-2' href={'https://www.linkedin.com/in/burhanbulut/'} ><LinkedInIcon /></a>

            </div>
            <div>
                <p className='text-xs text-gray-500'>Burhan Bulut © 2024</p>
            </div>
        </div>
    )
}

export default Footer
