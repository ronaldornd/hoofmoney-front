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
                <div className="flex w-max items-center gap-1">
                    <img src={logo} alt="" className="flex w-10 h-10 p-1" />
                    <p className="text-center font-bold text-2xl ">

                        HoofMoney
                    </p>
                </div>
                <div className="flex flex-row items-center p-2">
                    <div className="flex flex-col items-center text-center">
                        <div className="flex gap-2">
                            <p>Ola,</p>
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
                            <img src={user} alt="" />
                            Sair
                        </div>
                    </a>
                </div>
            </div>
        </>
    );
};
