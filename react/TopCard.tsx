import React from 'react';
import { Image } from 'vtex.store-components';
import ModelDetails from './ModelDetails';
const buttonStyle = {
    margin: '10px 0'
};

interface TopCardProps {
    label: string,
}

const TopCard: StorefrontFunctionComponent<TopCardProps> = ({ label }) => {
    console.log(label);
    //console.log(Image);
    return (
        <dl>
            <div style={{flexDirection: "row"}}>
                <div style={{flex: 1}}><Image alt="oops" src='https://www.jeep.com/mediaserver/iris?client=fcaus&market=U&brand=J&vehicle=2020_WK&paint=PAU&fabric=X9&sa=WKJH74,2TZ,2BZ,2BZ,A5,AD6,AJY,APA,CMQ,DFT,DLK,ERC,GNK,GWA,JAZ,JKV,JLN,JLP,JLW,JPM,JPR,JPU,JRC,LD1,LM2,LMS,LMZ,LNV,LSA,M1C,MCH,NHS,PAU,RC3,RDZ,RE8,RF5,RF7,RFD,RFL,RFP,RFV,RHC,RSD,RSK,RSM,RTB,RTF,RTQ,SDA,TLP,UAV,WHF,X9,X9E,X9M,X9N,XBM,XGD,XRB,Z6K&pov=fullfronthero&width=1540&height=866&bkgnd=&resp=jpg&cut='></Image>
                </div>
                <div style={{flex: 3}}>
                <ModelDetails price="90"></ModelDetails>
                </div>
            </div>
            <button
                className="btn btn-default"
                style={buttonStyle}
                onClick={(e) => { console.log("click " + e.movementX) }}
            >
                {label}
            </button>
        </dl>
    )
}

TopCard.schema = {
    properties: {
        label: {
            title: "I am a title",
            type: "string",
            default: "sample",
        },
    },
}
export default TopCard;