import Button from "../Button/Button";
import Input from "../Field/Field";

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

            <Button text="Press me" />
            <form>
                <Input label="Book title" type="text" value="" placeholder="Book title" required name="title" id="book-title" onChange={()=> {}} />
            </form>
            
        </main>
    )
}

export default Main;