// import { ArrowRight } from "@mui/material";
import Card from "../components/Elements/Card";
import MainLayout from "../components/Layout/MainLayout";
import bills from "../data/bills";
import expensesBreakdown from "../data/expensesBreakdown";
import transactions from "../data/transactions";

const Dashboard = () => {
  const tabs = ["All", "Revenue", "Expense"];

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
  const expenseCard = expensesBreakdown.map((expense) => (
    <div key={expense.id} className="flex pb-4 justify-between">
      <div className="flex">
        <div className="bg-special-bg px-3 rounded-lg flex flex-col place-content-center">
          {/* {expense.icon} */}
        </div>
        <div className="ms-4">
          <span className="text-gray-02">{expense.category}</span>
          <br />
          <span className="font-bold text-lg">${expense.amount}</span>
          <div className="flex">
            <span className="text-gray-02">{expense.percentage}%</span>{" "}
            {/* {expense.arrow} */}
          </div>
        </div>
      </div>
      <div className="flex place-content-center flex-col me-8">
        {/* <Icon.ArrowRight /> */}
      </div>
    </div>
  ));
  const transactionCard = transactions.map((transaction) => (
    <div key={transaction.id} className="flex justify-between my-6">
      <div className="flex">
        <div className="bg-special-bg px-3 rounded-lg flex flex-col place-content-center">
          {/* {transaction.icon} */}
        </div>
        <div className="ms-4">
          <span className="text-xl font-bold">
            {transaction.transactionName}
          </span>
          <br />
          <span className="text-gray-02">{transaction.shopName}</span>
        </div>
      </div>
      <div className="text-right">
        <span className="text-xl font-bold text-gray-02">
          ${transaction.amount}
        </span>
        <br />
        <span className="text-gray-02">{transaction.date}</span>
      </div>
    </div>
  ));
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
            variant="md:col-span-1 md:row-span-2"
            title="Recent Transaction"
            desc={
              <div>
                <div className="mb-4">
                  {tabs.map((tab) => (
                    <button
                      className="px-4 font-bold text-gray-01"
                      key={tab}
                      value={tab}
                    >
                      {tab}
                    </button>
                  ))}
                </div>
                {transactionCard}
              </div>
            }
          />
        </div>
        <div className="md:col-span-2 flex flex-col flex-1">
          <Card variant="md:col-span-2" title="Statistics" />
          <Card
            variant="md:col-span-2"
            title="Expenses Breakdown"
            desc={<div className="lg:grid lg:grid-cols-3">{expenseCard}</div>}
          />
        </div>
      </div>
      {/* bottom content end*/}
    </MainLayout>
  );
};

export default Dashboard;
