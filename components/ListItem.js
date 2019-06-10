import React from 'react';
import Link from 'next/link';

const listItem = props => {

    const image = "url(" + props.image + ")";

    const cardStyle = {
        width: "100%",
        height: "300px",
        backgroundImage: image,
        backgroundSize: "100%",
        backgroundPosition: "center" 
      };
    return (
        <Link as={`/post/${props.slug}`} href={`/post?id=${props._id}`} >
                <div className='card col-sm-6 p-3 border-0  '>
                    <div className='card-img-top' style={ cardStyle }></div>
                    <div className='footer mt-3'>
                        <h2 className='card-title'>{props.title}</h2>
                        <div className='card-text' dangerouslySetInnerHTML={{__html: props.content}}></div>
                    </div>
                </div>
        </Link>
    )
}

export default listItem;