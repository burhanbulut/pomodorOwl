import Post from "../../components/Post.jsx";


function Profile() {
    return (
        <div className='flex h-full '>
            <aside className={'h-full border-2 w-44'}>
                <ul className={'flex flex-col  h-full'}>
                    <li className={'h-16 w-full border-2 flex justify-center items-center'}>Home</li>
                    <li className={'h-16 w-full border-2 flex justify-center items-center'}>Profile</li>
                    <li className={'h-16 w-full border-2 flex justify-center items-center'}>Settings</li>
                    <li className={'h-16 w-full border-2 flex justify-center items-center'}>About</li>
                    <li className={'h-16 w-full border-2 flex justify-center items-center'}>Logout</li>
                </ul>
            </aside>
            <article className={'flex-1'}>
                <Post  />
            </article>

        </div>
    );
}

export default Profile;