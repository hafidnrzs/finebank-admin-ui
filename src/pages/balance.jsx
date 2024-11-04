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
          desc="Lorem ipsum dolor"  
        /> 
      </div>
      {/*top content end*/}
      {/*botton content start*/}
      <div className="md:grid md:grid-cols-3 md:gap-6">
        <Card desc="Lorem ipsum dolor"/>
        <Card />
        <Card />
      </div>
      {/* bottom content end*/}
    </MainLayout>
  );
};

export default Balance;