import React, {Component} from 'react';
import axios from "axios";
import Card from '../../components/ProjectCard/ProjectCard';
import "../../styles.css";
import "./Projects.css";

export default class Projects extends Component {

    constructor(props) {
        super(props);
        this.state = { userdata: null, loading: false };
    }

    async componentDidMount() {
        this.setState({loading: true})
        await axios.get("https://api.esarnb.com/github/repos").then((res) => {
            let data = res.data;
            data.sort((a,b) => b.lastRepoUpdate.localeCompare(a.lastRepoUpdate))
            this.setState({ userdata: data, loading: false })
        })
    }

    render() {
        let { loading, userdata} = this.state;
        return (
            <div>
                
                { loading ? <h1 className="centerVert">
                    Loading . . . 
                </h1> : <div>
                    <h2 className="center pageTitle">Github Repository - Hourly Update</h2>
                    <div id="cardContainer">
                        {userdata && userdata.length ? [...userdata.map((x,i) => <Card info={x} key={`PC-${i}`}/>)] : null}
                    </div>
                </div> }

            </div>
        )
    }

}