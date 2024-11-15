const Header = () =>{
    return (
        <div className=" absolute py-2 px-8 z-10 flex justify-between">
            <img className="w-44" src="https://images.ladepeche.fr/api/v1/images/view/5ef4c376d286c26b7e37c5c8/large/image.jpg?v=1" alt="logo"/>

            <div>
                <img className="w-12" alt="usericon" src="https://wallpapers.com/images/high/netflix-profile-pictures-1000-x-1000-88wkdmjrorckekha.webp"/>
            </div>
            <button>Sign Out</button>
        </div>
    )
}
export default Header;