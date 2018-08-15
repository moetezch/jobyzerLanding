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
        this.state = {value: '',msg:''};
        this.handleChange = this.handleChange.bind(this);
      }
      handleChange(event) {
        this.setState({value: event.target.value});
      }

    _handleSubmit = async (e) => {
        e.preventDefault();
        
        if (!this.state.value) {
            this.setState({msg: 'Please provide your email'});
        }else if (this.state.value && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(this.state.value)) {
            this.setState({msg: 'Please provide a valid email'});
        }else{
            this.setState(() => ({ msg: '' }));
            const result = await addToMailchimp(this.state.value)
            console.log(result);
            if (result.result==="success") {
                this.setState({msg: result.msg});
            }
            else{
               
                this.setState({msg: 'You are already subscribed :) '});
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
                                Coming Soon
                             </h1>

                            <h2 className="subtitle has-text-white">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque incidunt porro, assumenda veniam harum ex minima, adipisci unde voluptatum ab expedita asperiores at facere maxime quod non mollitia fuga pariatur?
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
                        <br />
                        <div className="columns">
                            <div className="column is-one-third">
                                <p><img src={jobImage} alt="job" style={{ maxHeight: "180px", maxWidth: "180px" }} /></p>
                                <p className="title has-text-white">Organize</p>
                                <p className="subtitle has-text-white">Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium cumque eum exercitationem ipsum unde adipisci, consectetur, impedit ratione deserunt id facilis sequi? Repudiandae quas placeat expedita esse veniam ab tempora!</p>
                            </div>
                            <div classn="column is-one-third">
                                <p><img src={analyticImage} alt="job" style={{ maxHeight: "180px", maxWidth: "180px" }} /></p>
                                <p className="title has-text-white">Track</p>
                                <p className="subtitle has-text-white">Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium cumque eum exercitationem ipsum unde adipisci, consectetur, impedit ratione deserunt id facilis sequi? Repudiandae quas placeat expedita esse veniam ab tempora!</p>
                            </div>
                            <div className="column is-one-third">
                                <p><img src={bookmarkImage} alt="job" style={{ maxHeight: "180px", maxWidth: "180px" }} /></p>
                                <p className="title has-text-white">Bookmark</p>
                                <p className="subtitle has-text-white">Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium cumque eum exercitationem ipsum unde adipisci, consectetur, impedit ratione deserunt id facilis sequi? Repudiandae quas placeat expedita esse veniam ab tempora!</p>
                            </div>
                        </div>
                    </div>




                </div>


            </Layout>
        )
    }
}