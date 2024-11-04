import Card from "../components/Elements/Card";
import MainLayout from "../components/Layout/MainLayout";

const Dashboard = () => {
  return (
    <MainLayout type="dashboard">
      {/* top content start*/}
        <div className="md:grid md:grid-cols-3 md:gap-x-6">
            <Card title="Total Balance" />
            <Card 
                title="Goals" 
                desc="Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore, omnis optio. Adipisci, eum ipsa eaque consequuntur dolorum recusandae, officia explicabo quos, sequi sunt corporis eos minima modi nam et id?"
            />
            <Card title="Upcoming Bill" />
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