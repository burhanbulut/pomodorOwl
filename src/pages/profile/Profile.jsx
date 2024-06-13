import Post from "../../components/Post.jsx";



function Profile() {
    return (
        <div className='flex h-full  bg-secondaryColor'>           
            <article className={'  w-full overflow-auto max-h-[800px]'}>
                <Post  />
            </article>

        </div>
    );
}

export default Profile;