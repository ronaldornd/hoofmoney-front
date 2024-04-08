import user from "../../assets/user.png"

export default function Header() {
    return(
        <>
        <div className="flex flex-row w-ful justify-between bg-gradient-to-r from-70% from-green-600 to-white">
            <div>Menu</div>
            <div>HoofMoney</div>
            <div className="flex flex-row">
                <div>
                <div>Ola, User</div>
                <div>Seu Saldo:</div>
                </div>
                <div>
                    <img src={user} alt="" />
                </div>
            </div>
        </div>
        </>
    );
};
