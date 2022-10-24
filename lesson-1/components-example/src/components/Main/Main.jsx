import Button from "../Button/Button";

import "./main.css"

const Main = () => {
    return (
        <main className="main">
            <p>Page content</p>
            <Button text="Click me" type="button" />
            {/* 
            const props = {
                text: "Click me",
                type: "button",
            }
            Button(props)
            */}

            <Button text="Press me" type="submit" />
        </main>
    )
}

export default Main;