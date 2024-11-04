import Card from "../components/Elements/Card";
import MainLayout from "../components/Layout/MainLayout";

const Balance = () => {
  return (
    <MainLayout type="balance">
      {/* top content start*/}
      <div className="md:grid md:grid-cols-3 md:gap-x-6">
        <Card title="Balances" />
        <Card title="&nbsp;" />
        <Card 
          title="&nbsp;" 
          desc="Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore, omnis optio. Adipisci, eum ipsa eaque consequuntur dolorum recusandae, officia explicabo quos, sequi sunt corporis eos minima modi nam et id?"  
        /> 
      </div>
      {/*top content end*/}
      {/*botton content start*/}
      <div className="md:grid md:grid-cols-3 md:gap-6">
        <Card desc="Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore, omnis optio. Adipisci, eum ipsa eaque consequuntur dolorum recusandae, officia explicabo quos, sequi sunt corporis eos minima modi nam et id?"/>
        <Card />
        <Card />
      </div>
      {/* bottom content end*/}
    </MainLayout>
  );
};

export default Balance;