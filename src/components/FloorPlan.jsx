import React from 'react';
import Kitchen from './Kitchen.jsx';
import LivingRoom from './LivingRoom.jsx';
import Bedroom from './Bedroom.jsx';
import Bath from './Bath.jsx';

const FloorPlan = () => {
    return (
    <div className="floor-plan">
      <Bedroom bedNum={1} className="bedroom" />
      <LivingRoom className="living-room" />
      <Bedroom bedNum={2} className="bedroom" />
      <Bedroom bedNum={3} className="bedroom" />
      <Bath size="Full" className="bath" />
      <Bath size="Half" className="bath" />
      <Kitchen className="kitchen" />
    </div>
    );
};

export default FloorPlan;