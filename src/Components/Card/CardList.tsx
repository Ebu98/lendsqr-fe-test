import Card from "./index";
import { First, Group, Paper, Stack } from "../../assests/icon"
import "./cardList.scss";

function CardList() {
  return (
    <div className="card-list">
      <Card icon={First} title="Users" amount="2,453" />
      <Card icon={Group} title="Active Users" amount="2,453" />
      <Card icon={Paper} title="Users with Loans" amount="12,453" />
      <Card icon={Stack} title="Users with Savings" amount="102,453" />
    </div>
  );
}

export default CardList;
