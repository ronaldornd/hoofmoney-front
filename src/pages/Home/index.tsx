import construct from "../../assets/construct.png";
import Header from "../Header";

export default function Home() {
    return(
        <>
        <div><Header/></div>
        <div className="flex flex-col w-screen h-screen items-center">
            <img src={construct} className="w-96 h-96"/>
            <p>Em Construção</p>
        </div>
        </>
    );
};
