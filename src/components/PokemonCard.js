import React, { useState } from "react";
import { Card } from "semantic-ui-react";

function PokemonCard({ pokemon }) {
  const [isFrontSprite, setIsFrontSprite] = useState(true);
  const {
    name,
    hp,
    sprites: { front, back },
  } = pokemon;

  function handleSpriteToggle() {
    setIsFrontSprite((prevState) => !prevState);
  }

  return (
    <Card>
      <div onClick={handleSpriteToggle}>
        <div className="image">
          {isFrontSprite ? (
            <img src={front} alt={name} />
          ) : (
            <img src={back} alt={name} />
          )}
        </div>
        <div className="content">
          <div className="header">{name}</div>
        </div>
        <div className="extra content">
          <span>
            <i className="icon heartbeat red" />
            {hp}
          </span>
        </div>
      </div>
    </Card>
  );
}

export default PokemonCard;
