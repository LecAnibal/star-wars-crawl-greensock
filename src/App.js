import React, {Component} from "react";
import CrawlIntro from "./components/intro/CrawlIntro";

class App extends Component {
    constructor(props){
        super(props)
        this.state = {
            skip:false
        }
    }

    onSkip(){
        this.setState({skip: true})
    }

    render() {
        return (
            <React.Fragment>
                {
                    !this.state.skip?
                    <CrawlIntro onClickSkip={()=>{this.onSkip()}} />
                        :<p>hola</p>

                }
            </React.Fragment>
        );
    }
}

export default App;
