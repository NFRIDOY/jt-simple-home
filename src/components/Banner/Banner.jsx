import { Link } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import toast from "react-hot-toast";


const Banner = () => {

    const { user, logOut } = useAuth();
    const handleLogout = () => {
        logOut()
            .then(() => {
                toast.success("User logged out successfully");
            })
            .catch(() => {
                toast.error("User logged out Failed");
            })
    }
    return (
        <div className="object-cover h-48 w-full relative">
            {
                user ? <div>
                    <img className="object-cover h-[500px] w-full border-2 " src="https://images.unsplash.com/photo-1497005367839-6e852de72767?q=80&w=2067&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Banner" />
                </div> : null
            }
            {
                user ? <button
                    onClick={handleLogout}
                    className="trans btn btn-error hover:btn-warning font-bold text-white absolute top-[240px] right-[100px] md:right-[200px] lg:right-[350px]"
                >Logout</button> : <Link to={"/signin"}
                    className="trans btn btn-primary hover:btn-accent font-bold text-white absolute top-[240px] right-[100px] md:right-[200px] lg:right-[350px]">
                    <button >
                        Login
                    </button>
                </Link>

            }
        </div>
    );
};

export default Banner;