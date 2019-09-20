import React from 'react';
import {Col,Row} from 'reactstrap'

// container for left and right pool 
const Pool=(props)=>{
    const item=[];
    let n =props.agents;
    for(let i=1;i<=n;i++){
      let agentid = "agent-"+i;
      item.push(<Col xs="4" sm= "4" md="4"><div className="ag" id={agentid}><img src={"./man.png"} alt="agent"/></div></Col>);
    }
 
    return (
        <Row>
          {item}
        </Row>
    )
}


export default Pool;
