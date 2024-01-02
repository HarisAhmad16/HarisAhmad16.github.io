import React from "react";
import '../styles/experience.css';
import Section from "./Section";
import ccs from '../images/ccs.jpg'
import article from '../images/article.jpg'

class Experience extends React.Component {
  render() {
    return (
      <div id="experience" className="experience">
        <div>
          <h2 className="exptitle">Work Experience</h2>
          <Section
            heading="COAST CAPITAL SAVINGS"
            subheading="Software Developer Intern"
            details="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer non ultrices felis. Suspendisse consectetur dignissim orci, ac faucibus felis viverra a. Proin vitae vestibulum quam. Maecenas sed dictum nisl. Nullam non nulla ac quam malesuada ullamcorper et quis ex. Ut pellentesque sit amet est in sodales. Maecenas efficitur, mi a blandit tincidunt, nisi mi interdum erat, in pellentesque ipsum dui sed ipsum. Aenean sit amet massa dui. Etiam a nisl id metus condimentum viverra. Phasellus mauris libero, pulvinar at dictum nec, maximus sit amet odio. Nam in convallis quam. Ut varius laoreet malesuada. Duis vehicula varius augue, efficitur aliquet nunc congue sit amet."
            imageUrl={ccs}
          />
          <Section
            heading="ARTICLE"
            subheading="Full Stack Software Engineer Intern"
            details="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer non ultrices felis. Suspendisse consectetur dignissim orci, ac faucibus felis viverra a. Proin vitae vestibulum quam. Maecenas sed dictum nisl. Nullam non nulla ac quam malesuada ullamcorper et quis ex. Ut pellentesque sit amet est in sodales. Maecenas efficitur, mi a blandit tincidunt, nisi mi interdum erat, in pellentesque ipsum dui sed ipsum. Aenean sit amet massa dui. Etiam a nisl id metus condimentum viverra. Phasellus mauris libero, pulvinar at dictum nec, maximus sit amet odio. Nam in convallis quam. Ut varius laoreet malesuada. Duis vehicula varius augue, efficitur aliquet nunc congue sit amet."
            imageUrl={article}
          />
        </div>
      </div>
    );
  }
}

export default Experience;
