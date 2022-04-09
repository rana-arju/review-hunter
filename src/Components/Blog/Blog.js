import React from 'react';
import { Container } from 'react-bootstrap';

const Blog = () => {
    return (
        <Container>
            <h2>Three Importent Quetion and Answer</h2>
            <div>
                <h3>What is Context Api?</h3>
                <p>The React Context API is a way for a React app to effectively produce global variables that can be passed around. This is the alternative to "prop drilling" or moving props from grandparent to child to parent, and so on. React.createContext() is all you need. It returns a consumer and a provider. Provider is a component that as it's names suggests provides the state to its children. It will hold the "store" and be the parent of all the components that might need that store. Consumer as it so happens is a component that consumes and uses the state.</p>
                <hr />
                <h3>What is  Semantic Tag?</h3>
                <p>Semantic HTML tags provide information about the contents of those tags that goes beyond just how they look on a page. Text that is enclosed in the <code></code> tag is immediately recognized by the browser as some type of coding language.A semantic element clearly describes its meaning to both the browser and the developer. Examples of non-semantic elements: <div></div> and <span></span> - Tells nothing about its content.Examples of semantic elements: <form></form>, <table></table>, and <article></article> - Clearly defines its content. </p>
                <hr />
                <h3>Inline Block vs Inline Element?</h3>
                <p>Every HTML element has a default display value, depending on what type of element it is.
                    <br />
                    i) An inline element has no line break before or after it, and it tolerates HTML elements next to It.An inline element does not start on a new line. An inline element only takes up as much width as necessary.
                    <br />
                    ii) An inline-block element is placed as an inline element (on the same line as adjacent content), but it behaves as a block element.Displays an element as an inline-level block container. You CAN set height and width values.
                </p>
            </div>

        </Container>
    );
};

export default Blog;