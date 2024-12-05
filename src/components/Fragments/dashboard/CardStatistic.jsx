import { ExpensesStatistics } from "../../../data/expensesStatistics";
import BarsDataset from "../../Elements/BarChart";
import Card from "../../Elements/Card";

const CardStatistic = () => {
    // const expensesStatisticCard = expensesStatistics.map((expensesStatistic) => (<div key={expensesStatistic.id}>{expensesStatistic.date}</div>));

    return (
        <Card 
            variant="lg:col-span-2 min-h-max" 
            title="Statistics" 
            desc={
                <div className="h-72">
                    <select className="font-bold text-lg ring-0 focus:outline-none bg-transparent">
                        <option>Weekly Comparison</option>
                    </select>
                    <BarsDataset desc={ExpensesStatistics} />
                </div>
            } 
        />
    )
}

export default CardStatistic