import React from 'react';
import Content from '../Components/Content';
import Hero from '../Components/Hero';

function AboutPage(props) {

    return (
        <div>
            <Hero title={props.title} />

            <Content>
                <p>
                I am a passionate, enthusiastic web developer. I have completed a variety of web development
                 courses covering front end to back. I am active both as a freelance website developer and 
                 sales manager, utilizing both my soft and hard skills to delight customers. I am seeking my 
                 first full time opportunity as a web developer. I really enjoy development, and am excited to
                 expand my knowledge while helping a business create great technology!
                </p>
            </Content>
        </div>
    );

}

export default AboutPage;