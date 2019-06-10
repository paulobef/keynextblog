import React from 'react';

const Jumbo = props => {
    return (
            <div class="jumbotron p-3 mt-5 p-md-5 text-white rounded bg-dark">
                <div class="col-md-6 px-0">
                    <h1 class="display-4 font-italic">{props.title}</h1>
                    <p class="lead my-3">{props.lead}</p>
                    <p class="lead mb-0"><a href={props.link} class="text-white font-weight-bold">{props.linkText}</a></p>
                </div>
            </div>
    )
}

export default Jumbo;