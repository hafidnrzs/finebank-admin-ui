import { expensesStatistics } from "../../../data/expensesBreakdown";
import BarsDataset from "../../Elements/BarChart/Index";
import Card from "../../Elements/Card";

const CardStatistic = () => {
    const expensesStatisticCard = expensesStatistics.map((expensesStatistic) => (<div key={expensesStatistic.id}>{expensesStatistic.date}</div>));

    return (
        <Card 
            variant="lg:col-span-2 min-h-max" 
            title="Statistics" 
            desc=<BarsDataset desc={expensesStatisticCard} /> 
        />
    )
}

export default CardStatistic