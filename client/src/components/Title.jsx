import React from 'react';
import github from '../img/github.svg'
import linkedin from '../img/linkedin.svg'
import twitter from '../img/twitter.svg'

class Title extends React.Component {
    render() {
        return(
            <div>
                <h1 className="title-container__title">ClimApp</h1>
                <h3 className="title-container__subtitle">Find out the weather in your neck of the woods</h3>

                {/* Add lets connect and links to github, Linkedin, and Twitter */}
                <div>
                <a href ="https://github.com/malcolmc10/ClimApp" target="_blank"><img src={github} className="github"  /></a>
                <a href ="https://www.linkedin.com/in/colinpmalcolm/" target="_blank"><img src={linkedin} className="linkedin"  /></a>
                <a href ="https://twitter.com/Themalcolmmind" target="_blank"><img src={twitter} className="github"  /></a>
                </div>
            </div>
        )
    }

}

export default Title