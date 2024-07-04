import grafico from "../../assets/grafico.png";
import upArrow from "../../assets/up-arrow.png";
import downArrow from "../../assets/down-arrow.png";
import home from "../../assets/home.png";
import internet from "../../assets/internet.png";
import Header from "../Header";

export default function Home() {
    return (
        <>
            <div>

                <div><Header /></div>
                <div className="grid grid-flow-col grid-cols-1 grid-rows-4 row-auto lg:grid-flow-row lg:grid-cols-3 lg:grid-rows-2 p-2 gap-2 w-full h-full content-center">
                    <div className="flex flex-row gap-2 lg:col-span-3">
                        <div className="row-span-1 flex flex-col text-center h-full w-full border rounded border-black">
                            <h1 className="w-full">Estatisticas de Gastos</h1>
                            <div className="flex flex-row w-full h-full items-center">
                                <div className="flex flex-col h-full w-max">
                                    <div>
                                        <div className="flex w-max justify-center items-center p-2">
                                            <img src={grafico} className="flex" alt="" />
                                            <div className="absolute ">
                                                <h1>Limite de Gastos</h1>
                                                <h1>R$ 1.500,00</h1>
                                                <button className="px-3 bg-green-500 rounded">Editar</button>
                                            </div>
                                        </div>
                                        <div className="flex flex-col text-center w-full">
                                            <p>Limite Disponivel:</p>
                                            <p>R$ 900,00</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="flex flex-col h-full w-full justify-center items-center mx-3">
                                    <h1 className="flex h-max">

                                        Dados
                                    </h1>
                                    <div className="flex flex-col gap-2 h-fit w-max content-between items-center">
                                        <div className="flex flex-row bg-slate-400 rounded w-full" >Moradia (30%) </div>
                                        <div className="flex flex-row bg-slate-400 rounded w-full" >Alimentação (15%)</div>
                                        <div className="flex flex-row bg-slate-400 rounded w-full" >Transporte (10%)</div>
                                        <div className="flex flex-row bg-slate-400 rounded w-full" >Lazer (20%)</div>
                                        <div className="flex flex-row bg-slate-400 rounded w-full" >Outros (20%)</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row-span-1 flex flex-col text-center h-full lg:w-max border rounded border-black">
                            <div>
                                <h1 className="w-full">Gastos Programados</h1>
                            </div>
                            <div className="flex flex-col h-full gap-2 items-center justify-between">
                                <div className="flex flex-row w-max gap-14 h-max justify-between px-2">
                                    <div><img src={home} alt="" /></div>
                                    <div>descrição</div>
                                    <div>valor</div>
                                </div>
                                <div className="flex flex-row w-full h-max justify-between px-2">
                                    <div><img src={home} alt="" /></div>
                                    <div>descrição</div>
                                    <div>valor</div>
                                </div>
                                <div className="flex flex-row w-full h-max justify-between px-2">
                                    <div><img src={home} alt="" /></div>
                                    <div>descrição</div>
                                    <div>valor</div>
                                </div>
                                <div className="flex flex-row w-full h-max justify-between px-2">
                                    <div><img src={home} alt="" /></div>
                                    <div>descrição</div>
                                    <div>valor</div>
                                </div>
                                <div className="flex flex-row w-full h-max justify-between px-2">
                                    <div><img src={home} alt="" /></div>
                                    <div>descrição</div>
                                    <div>valor</div>
                                </div>
                                <div className="flex flex-row w-full h-max justify-between px-2">
                                    <div><img src={home} alt="" /></div>
                                    <div>descrição</div>
                                    <div>valor</div>
                                </div>
                                <div className="flex flex-row w-full h-max justify-between px-2">
                                    <div><img src={home} alt="" /></div>
                                    <div>descrição</div>
                                    <div>valor</div>
                                </div>
                            </div>
                        </div>
                        <div className="row-span-1 flex flex-col text-center h-full lg:w-max border rounded border-black">
                            <h1 className="">Investimentos</h1>
                            <div className="flex flex-row p-1 gap-2 w-max h-full justify-between">
                                <div className="flex flex-col justify-between px-2">
                                    <p className="flex flex-row gap-2 justify-center"><img src={upArrow} alt="" />Alta</p>
                                    <div className="flex flex-row justify-between gap-3 w-full" >
                                        <h1 className="w-max">
                                            DOHL3:
                                        </h1>
                                        <div className="flex flex-row gap-1 w-max">
                                            <p className="text-green-500">
                                                +99,411%
                                            </p>
                                        </div>
                                    </div>
                                    <div className="flex flex-row justify-between gap-3 w-full" >
                                        <h1 className="w-max">

                                            AMBP3:
                                        </h1>
                                        <div className="flex flex-row gap-1 w-max">
                                            <p className="text-green-500">
                                                +59,26%
                                            </p>
                                        </div>
                                    </div>
                                    <div className="flex flex-row justify-between gap-3 w-full" >
                                        <h1 className="w-max">
                                            CEEB6:
                                        </h1>
                                        <div className="flex flex-row gap-1 w-max">
                                            <p className="text-green-500">
                                                +31,31%
                                            </p>
                                        </div>
                                    </div>
                                    <div className="flex flex-row justify-between gap-3 w-full" >
                                        <h1 className="w-max">
                                            ZAMP3:
                                        </h1>
                                        <div className="flex flex-row gap-1 w-max">
                                            <p className="text-green-500">
                                                +21,82%
                                            </p>
                                        </div>
                                    </div>
                                    <div className="flex flex-row justify-between gap-3 w-full" >
                                        <h1 className="w-max">
                                            SMTO3:
                                        </h1>
                                        <div className="flex flex-row gap-1 w-max">
                                            <p className="text-green-500">
                                                +20,55%
                                            </p>
                                        </div>
                                    </div>
                                    <div className="flex flex-row justify-between gap-3 w-full" >
                                        <h1 className="w-max">
                                            BRFS3:
                                        </h1>
                                        <div className="flex flex-row gap-1 w-max">
                                            <p className="text-green-500">
                                                +19,07%
                                            </p>
                                        </div>
                                    </div>
                                    <div className="flex flex-row justify-between gap-3 w-full" >
                                        <h1 className="w-max">
                                            SUZB3:
                                        </h1>
                                        <div className="flex flex-row gap-1 w-max">
                                            <p className="text-green-500">
                                                +15,69%
                                            </p>
                                        </div>
                                    </div>
                                    <div className="flex flex-row justify-between gap-3 w-full" >
                                        <h1 className="w-max">
                                            STBP3:
                                        </h1>
                                        <div className="flex flex-row gap-1 w-max">
                                            <p className="text-green-500">
                                                +13,94%
                                            </p>
                                        </div>
                                    </div>
                                    <div className="flex flex-row justify-between gap-3 w-full" >
                                        <h1 className="w-max">
                                            VSTE3:
                                        </h1>
                                        <div className="flex flex-row gap-1 w-max">
                                            <p className="text-green-500">
                                                +13,55%
                                            </p>
                                        </div>
                                    </div>

                                </div>
                                <div className="flex flex-col justify-between px-2">
                                    <p className="flex flex-row gap-2 justify-center">Queda<img src={downArrow} alt="" /></p>
                                    <div className="flex flex-row justify-between gap-3 w-full" >
                                        <h1 className="w-max">
                                            DOHL3:
                                        </h1>
                                        <div className="flex flex-row gap-1 w-max">
                                            <p className="text-red-500">
                                                +99,411%
                                            </p>
                                        </div>
                                    </div>
                                    <div className="flex flex-row justify-between gap-3 w-full" >
                                        <h1 className="w-max">

                                            AMBP3:
                                        </h1>
                                        <div className="flex flex-row gap-1 w-max">
                                            <p className="text-red-500">
                                                +59,26%
                                            </p>
                                        </div>
                                    </div>
                                    <div className="flex flex-row justify-between gap-3 w-full" >
                                        <h1 className="w-max">
                                            CEEB6:
                                        </h1>
                                        <div className="flex flex-row gap-1 w-max">
                                            <p className="text-red-500">
                                                +31,31%
                                            </p>
                                        </div>
                                    </div>
                                    <div className="flex flex-row justify-between gap-3 w-full" >
                                        <h1 className="w-max">
                                            ZAMP3:
                                        </h1>
                                        <div className="flex flex-row gap-1 w-max">
                                            <p className="text-red-500">
                                                +21,82%
                                            </p>
                                        </div>
                                    </div>
                                    <div className="flex flex-row justify-between gap-3 w-full" >
                                        <h1 className="w-max">
                                            SMTO3:
                                        </h1>
                                        <div className="flex flex-row gap-1 w-max">
                                            <p className="text-red-500">
                                                +20,55%
                                            </p>
                                        </div>
                                    </div>
                                    <div className="flex flex-row justify-between gap-3 w-full" >
                                        <h1 className="w-max">
                                            BRFS3:
                                        </h1>
                                        <div className="flex flex-row gap-1 w-max">
                                            <p className="text-red-500">
                                                +19,07%
                                            </p>
                                        </div>
                                    </div>
                                    <div className="flex flex-row justify-between gap-3 w-full" >
                                        <h1 className="w-max">
                                            SUZB3:
                                        </h1>
                                        <div className="flex flex-row gap-1 w-max">
                                            <p className="text-red-500">
                                                +15,69%
                                            </p>
                                        </div>
                                    </div>
                                    <div className="flex flex-row justify-between gap-3 w-full" >
                                        <h1 className="w-max">
                                            STBP3:
                                        </h1>
                                        <div className="flex flex-row gap-1 w-max">
                                            <p className="text-red-500">
                                                +13,94%
                                            </p>
                                        </div>
                                    </div>
                                    <div className="flex flex-row justify-between gap-3 w-full" >
                                        <h1 className="w-max">
                                            VSTE3:
                                        </h1>
                                        <div className="flex flex-row gap-1 w-max">
                                            <p className="text-red-500">
                                                +13,55%
                                            </p>
                                        </div>
                                    </div>

                                </div>


                            </div>
                        </div>
                    </div>
                    <div className="flex flex-row col-span-1 lg:col-span-3 w-full h-full">
                        <div className="flex flex-col gap-2 h-full w-full border rounded border-black">
                            <div className="flex h-2 w-full  rounded"></div>
                            <div className="flex flex-row gap-2 h-max w-full p-2">
                                <div className="h-10 w-full border rounded border-green-500"></div>
                                <div className="h-10 w-full border rounded border-red-500"></div>

                            </div>

                        </div>

                    </div>
                </div>
            </div>
        </>
    );
};
