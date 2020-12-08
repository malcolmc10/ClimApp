import React from 'react';

class Title extends React.Component {
    render() {
        return(
            <div>
                <h1 className="title-container__title">ClimApp</h1>
                <h3 className="title-container__subtitle">Find out the weather in your neck of the woods</h3>

                {/* Add lets connect and links to github, Linkedin, and Twitter */}
                <div>
                    {/* <p>Links</p> */}
                </div>
            </div>
        )
    }

}

export default Title