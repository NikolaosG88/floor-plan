import React from 'react';
import Oven from './Oven.jsx';
import Sink from './Sink.jsx';


const Kitchen = () => {
    return (
    <div className="kitchen">
       <p>Kitchen</p>
       <div className="oven"><Oven/></div>
       <div className="sink"><Sink/></div>
    </div>
    );
};

export default Kitchen;