import Card from "../components/Elements/Card";
import MainLayout from "../components/Layout/MainLayout";
import bills from "../data/bills";
// import expensesBreakdown from "../data/expensesBreakdown";
// import transactions from "../data/transactions";

const Dashboard = () => {
  const billCard = bills.map((bill) => (
    <div key={bill.id} className="lg:flex justify-between pt-3 pb-3">
      <div className="flex">
        <div className="bg-special-bg me-3 px-4 rounded-lg flex place-content-center flex-col">
          <span className="text-xs">{bill.month}</span>
          <span className="text-2xl font-bold">{bill.date}</span>
        </div>
        <div>
          <img className="h-6" src={`/images/${bill.logo}`} />
          <span className="font-bold">{bill.name}</span>
          <br />
          <span className="text-xs">Last Charge - {bill.lastCharge}</span>
        </div>
      </div>
      <div className="flex place-content-center flex-col">
        <span className="p-2 border rounded-lg font-bold text-center">
          ${bill.amount}
        </span>
      </div>
    </div>
  ));
  //const expenseCard = expensesBreakdown.map((expense) => <div key={expense.id}>{expense.name}</div>);
  //const transactionCard = transactions.map((transaction) => <div key={transaction.id}>{transaction.name}</div>);
  return (
    <MainLayout type="dashboard">
      {/* top content start*/}
      <div className="md:grid md:grid-cols-3 md:gap-x-6">
        <Card title="Total Balance" />
        <Card
          title="Goals"
          desc="Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore, omnis optio. Adipisci, eum ipsa eaque consequuntur dolorum recusandae, officia explicabo quos, sequi sunt corporis eos minima modi nam et id?"
        />
        <Card title="Upcoming Bills" desc={billCard} />
      </div>
      {/* top content end*/}
      {/* bottom content start*/}
      <div className="md:grid md:grid-cols-3 md:gap-x-6">
        <div className="md:col-span-1">
          <Card
            title="Recent Transaction"
            desc="Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore, omnis optio. Adipisci, eum ipsa eaque consequuntur dolorum recusandae, officia explicabo quos, sequi sunt corporis eos minima modi nam et id?"
          />
        </div>
        <div className="md:col-span-2 flex flex-col flex-1">
          <Card title="Statistics" />
          <Card title="Expenses Breakdown" />
        </div>
      </div>
      {/* bottom content end*/}
    </MainLayout>
  );
};

export default Dashboard;
