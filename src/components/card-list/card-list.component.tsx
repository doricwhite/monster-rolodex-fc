import { Monsters } from "../../App";

import Card from "../card/card.component";
import "./card-list.styles.css";

type CardListProps = {
  monsters: Monsters[];
};

const CardList = ({ monsters }: CardListProps) => {
  // const { monsters } = this.props;
  return (
    <div className="card-list">
      {monsters.map((monster) => {
        return <Card monster={monster} key={monster.id} />;
      })}
    </div>
  );
};

export default CardList;
