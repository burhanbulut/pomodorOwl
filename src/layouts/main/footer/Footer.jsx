import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

function Footer() {
    return (
        <div
            className=' bottom-0 h-16 w-full flex align-middle justify-around items-center bg-gradient-to-r from-baseColorHeader to-secondaryColorHeader z-30'>
            <div>
                <a className='m-2 text-white' href={'https://github.com/burhanbulut'}><GitHubIcon/></a>
                <a className='m-2 text-white' href={'https://www.linkedin.com/in/burhanbulut/'}><LinkedInIcon/></a>

            </div>
            <div>
                <p className='text-xs '>Burhan Bulut © 2024</p>
            </div>
        </div>
    )
}

export default Footer
