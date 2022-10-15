import Card from ".";
import { ReactComponent as First } from "../../assests/icon/users-card.svg";
import { ReactComponent as Group} from "../../assests/icon/group-card-icon.svg";
import { ReactComponent as Paper} from "../../assests/icon/paper-card-icon.svg";
import { ReactComponent as Stack} from "../../assests/icon/stark-card-icon.svg";
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
