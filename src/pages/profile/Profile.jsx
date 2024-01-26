import Post from "../../components/Post.jsx";
import {Link} from "react-router-dom";


function Profile() {
    return (
        <div className='flex h-full  bg-secondaryColor'>
            <aside className={'h-full  w-44'}>
                <Link to={`/profile${localStorage.getItem("currentUser")}/password`} className={''}>
                    <div className={'border-2 bg-mainColor text-baseColorHeader font-bold mt-4 rounded-full flex items-center h-12 w-full text-center  justify-center align-middle'}>
                        Şifre Değiştir
                    </div>

                </Link>
            </aside>
            <article className={'flex-1  w-full overflow-auto max-h-[800px]'}>
                <Post  />
            </article>

        </div>
    );
}

export default Profile;