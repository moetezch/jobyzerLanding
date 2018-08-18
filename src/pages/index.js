import React, { Component } from 'react'
import logo from "../images/jobyzerlogo.png"
import jobImage from '../images/icons8-briefcase-480.png'
import analyticImage from '../images/analytic.svg'
import bookmarkImage from '../images/bookmark.svg'
import Layout from '../components/layout'
import addToMailchimp from 'gatsby-plugin-mailchimp'


export default class IndexPage extends Component {
    constructor(props) {
        super(props);
        this.state = { value: '', msg: '' };
        this.handleChange = this.handleChange.bind(this);
    }
    handleChange(event) {
        this.setState({ value: event.target.value });
    }

    _handleSubmit = async (e) => {
        e.preventDefault();

        if (!this.state.value) {
            this.setState({ msg: 'Please provide your email' });
        } else if (this.state.value && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(this.state.value)) {
            this.setState({ msg: 'Please provide a valid email' });
        } else {
            this.setState(() => ({ msg: '' }));
            const result = await addToMailchimp(this.state.value)
            console.log(result);
            if (result.result === "success") {
                this.setState({ msg: result.msg });
            }
            else {

                this.setState({ msg: 'You are already subscribed :) ' });
            }
        }
    }
    render() {
        return (

            <Layout>
                <div className="hero-body">
                    <div className="container has-text-centered  ">
                        <div className="column is-6 is-offset-3">
                            <img src={logo} alt="jobyzer" />
                            <h1 className="title has-text-white">
                                Launching Soon!
                             </h1>

                            <h2 className="subtitle has-text-white">
                                Organize, Track and Analyze your job search. <br/>
                                Leave your email and we'll let you know once the site goes live.
                            </h2>
                            <div className="box">
                                <form onSubmit={this._handleSubmit}>


                                    <div className="field is-grouped">
                                        <p className="control is-expanded">
                                            <input className="input" type="text" placeholder="Enter your email" value={this.state.value} onChange={this.handleChange} />
                                        </p>
                                        <p className="control">
                                            <button className="button is-info">
                                                Notify Me
                                            </button>
                                        </p>
                                    </div>
                                </form>
                                <p>{this.state.msg}</p>
                            </div>
                        </div>
                        <br />
                        <div>
                        <h2 className="subtitle has-text-white">
                        You are already hunting your dream job ? Try out our <a className="button is-white is-outlined" href="https://beta.jobyzer.com" target='_blanc' >                <span className="icon">
                        <i className="fa fa-flask  fa-2x"></i>
                    </span>
                    <span>Beta</span></a>
                    </h2>
                        </div>
                        <br />
                        <br />
                        <div className="columns">
                            <div className="column is-one-third">
                                <p><img src={jobImage} alt="Organize" style={{ maxHeight: "180px", maxWidth: "180px" }} /></p>
                                <p className="title has-text-white">Organize</p>
                                <p className="subtitle has-text-white">Replace your spreadsheet with an elegant and intuitive web-based tracker.</p>
                            </div>
                            <div className="column is-one-third">
                                <p><img src={analyticImage} alt="Track" style={{ maxHeight: "180px", maxWidth: "180px" }} /></p>
                                <p className="title has-text-white">Track</p>
                                <p className="subtitle has-text-white">View different metrics on how your job hunt is going. Track the number of applications, replies and interviews over time. </p>
                            </div>
                            <div className="column is-one-third">
                                <p><img src={bookmarkImage} alt="Bookmark" style={{ maxHeight: "180px", maxWidth: "180px" }} /></p>
                                <p className="title has-text-white">Bookmark</p>
                                <p className="subtitle has-text-white">Find a job while browsing the web? Bookmark it and return later to apply.</p>
                            </div>
                        </div>
                    </div>




                </div>


            </Layout>
        )
    }
}