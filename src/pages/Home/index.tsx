import upArrow from "../../assets/up-arrow.png";
import downArrow from "../../assets/down-arrow.png";
import home from "../../assets/home.png";
import Header from "../Header";
import { Chart as ChartJS, ArcElement, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend, Chart } from 'chart.js';
import { Doughnut, Line } from 'react-chartjs-2';
import { Button } from "@/components/ui/button";

// Registrando os componentes necessários
Chart.register(
    ArcElement,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
);
function LineChart() {
    const dataLine = {
        labels: [
            'jan',
            'fev',
            'mar',
            'abr',
            'mai',
            'jun',
            'jul'
        ],
        datasets: [
            {
                label: 'Receitas', // Nova linha
                data: [85, 69, 90, 91, 76, 91, 50], // Dados fictícios para a nova linha
                fill: true,
                borderColor: 'rgb(125, 218, 88)',
                tension: 0.4
            }, {
                label: 'Despesas',
                data: [65, 59, 80, 81, 56, 55, 40],
                fill: true,
                borderColor: 'rgb(210, 1, 3)', // Cor diferente para a nova linha
                tension: 0.4
            }
        ]
    };
    const options = {
        responsive: true,
        maintainAspectRatio: false, // Isso permite que o gráfico se estique para preencher a div
        scales: {
            y: {
                beginAtZero: true,
            },
        },
    };
    return (
        <div>
            <Line data={dataLine} options={options} />
        </div>
    );
}
function DoughnutChart() {
    const data = {
        labels: [
            'Moradia',
            'Alimentação',
            'Transporte',
            'Lazer',
            'Outros',
            'Disponivel'
        ],
        datasets: [{
            label: 'Limite de Gastos',
            data: [30, 15, 10, 20, 20, 5],
            backgroundColor: [
                'rgba(236, 255, 0, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(0, 255, 0, 0.2)',
            ],
            borderColor: [
                'rgba(255, 255, 0, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(0, 255, 0, 1)',
            ],
            borderWidth: 1
        }],
    };
    const options = {
        borderRadius: 7,
        spacing: 10,
        responsive: true,
        maintainAspectRatio: true,
        cutout: '85%', // Isso permite que o gráfico se estique para preencher a div
        plugins: {
            legend: {
                display: false
            }
        },
    };
    return (
        <div>
            <Doughnut data={data} options={options} />
        </div>
    );
}


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
                                    <div className="flex w-full h-full justify-center items-center p-5">
                                        <div className="w-48">
                                            <DoughnutChart />
                                        </div>
                                        <div className="absolute">
                                            <h1>Limite de Gastos</h1>
                                            <h1>R$ 1.500,00</h1>
                                            <button className="px-3 bg-green-500 rounded">Editar</button>
                                        </div>
                                    </div>
                                    <div className="flex flex-col text-center w-full h-max">
                                        <p>Limite Disponivel:</p>
                                        <p>R$ 900,00</p>
                                    </div>
                                </div>
                                <div className="flex flex-col h-full w-full justify-center items-center mx-3">
                                    <h1 className="flex h-max">

                                        Dados
                                    </h1>
                                    <div className="flex flex-col gap-2 h-fit w-max content-between items-center">
                                        <div className="flex flex-row bg-yellow-100 border-yellow-400 border rounded w-full p-1" >Moradia (30%) </div>
                                        <div className="flex flex-row bg-blue-100 border-blue-400 border rounded w-full p-1" >Alimentação (15%)</div>
                                        <div className="flex flex-row bg-orange-100 border-orange-400 border rounded w-full p-1" >Transporte (10%)</div>
                                        <div className="flex flex-row bg-cyan-100 border-cyan-400 border rounded w-full p-1" >Lazer (20%)</div>
                                        <div className="flex flex-row bg-purple-100 border-purple-400 border rounded w-full p-1" >Outros (20%)</div>
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
                        <div className="flex flex-col gap-1 p-2 h-full w-full border rounded border-black">
                            <div className="flex flex-col h-max w-full items-center rounded">
                                <h1 className="flex w-max">Historico mensal</h1>
                                <div className="w-full h-full">
                                    <LineChart />

                                </div>
                            </div>
                            <div className="flex flex-row gap-2 h-max w-full p-2">
                                <div className="flex flex-col h-max w-full border rounded border-green-500 bg-green-100 items-center">
                                    <h1 className="absolute m-2">Ultimas Receitas</h1>
                                    <div className="flex flex-col mt-8 w-full h-full items-center p-2">
                                        <div className="flex flex-row w-full justify-between ">
                                            <p className="">Tesouro Direto</p>
                                            <p className="">R$ 500,00</p>
                                        </div>
                                        <div className="flex flex-row w-full justify-between ">
                                            <p className="">CDB</p>
                                            <p className="">R$ 500,00</p>
                                        </div>
                                        <div className="flex flex-row w-full justify-between ">
                                            <p className="">Salário</p>
                                            <p className="">R$ 2.500,00</p>
                                        </div>
                                        <div className="flex flex-row w-full justify-between ">
                                            <p className="">Freelancer</p>
                                            <p className="">R$  500,00</p>
                                        </div>
                                        <div className="flex flex-row w-full justify-between ">
                                            <p className="text-9">Renda de Aluguel</p>
                                            <p className="text-1-0">R$ 1.000,00</p>
                                        </div>
                                    </div>
                                    <Button type="submit" className="w-max px-5 m-2 text-lg border-2 border-green-500 bg-green-300 text-black">Nova Receita</Button>

                                </div>
                                <div className="flex flex-col h-max w-full border rounded border-red-500 bg-red-100 items-center">
                                    <h1 className="absolute m-2">Ultimas Despesas</h1>

                                    <div className="flex flex-col mt-8 w-full h-full items-center p-2">
                                        <div className="flex flex-row w-full justify-between ">
                                            <p className="">Aluguel</p>
                                            <p className="">R$ 800,00</p>
                                        </div>
                                        <div className="flex flex-row w-full justify-between ">
                                            <p className="">Condomínio: </p>
                                            <p className="">R$ 200,00</p>
                                        </div>
                                        <div className="flex flex-row w-full justify-between ">
                                            <p className="">Luz: </p>
                                            <p className="">R$ 100,00</p>
                                        </div>
                                        <div className="flex flex-row w-full justify-between ">
                                            <p className="">Água: </p>
                                            <p className="">R$ 50,00</p>
                                        </div>
                                        <div className="flex flex-row w-full justify-between ">
                                            <p className="">Internet: </p>
                                            <p className="">R$ 100,00</p>
                                        </div>
                                    </div>
                                    <Button type="submit" className="w-max px-5 m-2 text-lg border-2 border-red-500 bg-red-300 hover:bg-red-500 text-black">Nova Despesa</Button>

                                </div>

                            </div>

                        </div>

                    </div>
                </div>
            </div >
        </>
    );
};
