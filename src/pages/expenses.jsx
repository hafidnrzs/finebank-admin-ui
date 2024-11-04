import Card from "../components/Elements/Card";
import MainLayout from "../components/Layout/MainLayout";

const Expenses = () => {
  return (
    <MainLayout type="balance">
      {/* top content start*/}
      <div className="md:col-span-2 flex flex-col flex-1 ">
        <Card 
            title="Expenses Comparison" 
            desc="Lorem ipsum dolor sit amet consectetur"
        />
      </div>
      {/*top content end*/}
      {/*botton content start*/}
      <div className="md:grid md:grid-cols-3 md:gap-x-6">
        <Card title="Expenses Breakdown" />
        <Card title="&nbsp;" />
        <Card 
          title="&nbsp;" 
          desc="Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore, omnis optio. Adipisci, eum ipsa eaque consequuntur dolorum recusandae, officia explicabo quos, sequi sunt corporis eos minima modi nam et id?"  
        /> 
      </div>
      <div className="md:grid md:grid-cols-3 md:gap-x-6">
        <Card 
            desc="Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore, omnis optio. Adipisci, eum ipsa eaque consequuntur dolorum recusandae, officia explicabo quos, sequi sunt corporis eos minima modi nam et id?"
        /> 
        <Card
            desc="Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore, omnis optio. Adipisci, eum ipsa eaque consequuntur dolorum recusandae, officia explicabo quos, sequi sunt corporis eos minima modi nam et id?"
        />
        <Card 
            desc="Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore, omnis optio. Adipisci, eum ipsa eaque consequuntur dolorum recusandae, officia explicabo quos, sequi sunt corporis eos minima modi nam et id?"
        />
      </div>
      {/* bottom content end*/}
    </MainLayout>
  );
};

export default Expenses;