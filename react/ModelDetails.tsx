import React from 'react';

interface ModelProps{
    price: string
}

const ModelDetails: StorefrontFunctionComponent<ModelProps> = ({ price }) => {
    return (
    <div>{price}</div>
    )
}

ModelDetails.schema ={
    properties: {
        price: {
            title: "I am a title",
            type: "string",
            default: 0,
        },
    },
}

export default ModelDetails;