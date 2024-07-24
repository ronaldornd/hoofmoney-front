import cash from "../../assets/cash.png";
import logo from "../../assets/logo-light.png";
import user from "../../assets/user.png";

export default function Header() {
    const handleLogout = () => {
        localStorage.removeItem('token');
        window.location.reload();
    };
    return (
        <>
            <div className="flex flex-row w-ful justify-between bg-gradient-to-r from-70% from-green-600 to-white">
                <div className="flex w-max items-center gap-1 mx-2">
                    <img src={logo} alt="Logo da empresa HoofMoney" className="flex w-14 h-14 p-1" />
                    <h1 className="text-xl 2xl:text-2xl font-bold leading-tight p-1 w-full">
                        HoofMoney
                    </h1>
                </div>
                <div className="flex flex-row items-center p-2">
                    <div className="flex flex-col items-center text-center text-sm md:text-sm xl:text-sm 2xl:text-xl">
                        <div className="flex gap-2">
                        <p className="text-sm md:text-sm xl:text-sm 2xl:text-xl w-max flex flex-row gap-2 justify-center">

                            Ola,</p>
                            <p>Ronaldo Barbosa</p>
                        </div>
                        <div className="flex flex-row w-max gap-1 items-center p-1">
                            <img src={cash} alt="" />
                            <p>Seu Saldo: R$</p>
                            <p>1,500 </p>
                        </div>
                    </div>
                    {/*link para logout*/}
                    <a onClick={handleLogout}>
                        <div className="flex flex-col items-center">
                            <img src={user} alt="Imagem do usuário" className="w-10 h-10"/>
                            Sair
                        </div>
                    </a>
                </div>
            </div>
        </>
    );
};
