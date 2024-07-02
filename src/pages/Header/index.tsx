import user from "../../assets/user.png"
import cash from "../../assets/cash.png"
import menu from "../../assets/menu.png"

export default function Header() {
    return (
        <>
            <div className="flex flex-row w-ful justify-between bg-gradient-to-r from-70% from-green-600 to-white">
                <div><img src={menu} alt="" /></div>
                <div className="w-screen absolute mt-2">
                    <p className="text-center font-bold font text-2xl">

                        HoofMoney
                    </p>
                </div>
                <div className="flex flex-row">
                    <div className="flex flex-col items-center text-center">
                        <div className="flex gap-2">
                            <p>Ola,</p>
                            <p>Ronaldo Barbosa</p>
                        </div>
                        <div className="flex flex-row gap-1 m-1">
                            <img src={cash} alt="" />
                            <p>Seu Saldo: R$</p>
                            <p>1,500 </p>
                        </div>
                    </div>
                    <div>
                        <img src={user} alt="" />
                    </div>
                </div>
            </div>
        </>
    );
};
