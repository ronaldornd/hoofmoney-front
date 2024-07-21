import about from "../../../assets/about.png";
import contact from "../../../assets/contact.png";
import instagram from "../../../assets/instagram.png";
import logo from "../../../assets/logo.png";

export default function About() {
    return (
        <>
            <div className="flex flex-col p-4 gap-6 w-full h-max justify-center items-center">
                <div className='flex flex-col gap-1 items-center justify-between w-30 h-max'>
                    <img src={logo} alt="logo da empresa Hoof Money" className=" w-28 h-full md:w-96 md:h-96 md:m-2" />
                    <h1 className="font-semibold text-xl text-center w-full h-max">“Gerenciando seu futuro financeiro”</h1>
                </div>
                <div className="flex flex-row w-full md:h-max gap-3 text-center items-center justify-center">
                    <a className='flex flex-col w-max items-center h-max gap-1'>
                        <img className='h-8 w-8' src={instagram} alt="Logo do Instagram" />
                        <p>Siga-nos</p>
                    </a>
                    <a className='flex flex-col w-max items-center h-max gap-1'>
                        <img className='h-8 w-8' src={contact} alt="Logo do Instagram" />
                        <p>Contate-nos</p>
                    </a>
                    <a className='flex flex-col w-max items-center h-max gap-1'>
                        <img className='h-8 w-8' src={about} alt="Logo do Instagram" />
                        <p>Sobre nós</p>
                    </a>
                </div>
            </div>
        </>
    );
}