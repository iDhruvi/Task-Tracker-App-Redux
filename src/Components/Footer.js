import { Link } from "react-router-dom";
export default function Footer(){
    return (
        <footer>
            <p>Copyright &copy; rights reserved 2021</p>
            <Link to="./About">About</Link>
        </footer>
    );
}