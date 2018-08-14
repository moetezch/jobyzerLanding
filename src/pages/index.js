import React from 'react'
import logo from "../images/jobyzerlogo.png"
import jobImage from '../images/icons8-briefcase-480.png'
import analyticImage from '../images/analytic.svg'
import bookmarkImage from '../images/bookmark.svg'
import Layout from '../components/layout'

const IndexPage = () => (
  <Layout>
      <div className="hero-body">
          <div className="container has-text-centered  ">
              <div className="column is-6 is-offset-3">
              <img src={logo} alt="jobyzer"/>
                  <h1 className="title has-text-white">
                      Coming Soon
                  </h1>

                  <h2 className="subtitle has-text-white">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque incidunt porro, assumenda veniam harum ex minima, adipisci unde voluptatum ab expedita asperiores at facere maxime quod non mollitia fuga pariatur?
                  </h2>
                  <div className="box">
                      <div className="field is-grouped">
                          <p className="control is-expanded">
                              <input className="input" type="text" placeholder="Enter your email"/>
                          </p>
                          <p className="control">
                              <a className="button is-info">
                                  Notify Me
                              </a>
                          </p>
                      </div>
                  </div>
              </div>
              <br/>
              <br/>
              <div class="columns">
              <div class="column is-one-third">
                <p><img src={jobImage} alt="job" style={{maxHeight:"180px",maxWidth:"180px"}}/></p>
                <p className="title has-text-white">Organize</p>
                <p className="subtitle has-text-white">Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium cumque eum exercitationem ipsum unde adipisci, consectetur, impedit ratione deserunt id facilis sequi? Repudiandae quas placeat expedita esse veniam ab tempora!</p>
              </div>
              <div class="column is-one-third">
                <p><img src={analyticImage} alt="job" style={{maxHeight:"180px",maxWidth:"180px"}}/></p>
                <p className="title has-text-white">Track</p>
                <p className="subtitle has-text-white">Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium cumque eum exercitationem ipsum unde adipisci, consectetur, impedit ratione deserunt id facilis sequi? Repudiandae quas placeat expedita esse veniam ab tempora!</p>
              </div>
              <div class="column is-one-third">
              <p><img src={bookmarkImage} alt="job" style={{maxHeight:"180px",maxWidth:"180px"}}/></p>
              <p className="title has-text-white">Bookmark</p>
              <p className="subtitle has-text-white">Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium cumque eum exercitationem ipsum unde adipisci, consectetur, impedit ratione deserunt id facilis sequi? Repudiandae quas placeat expedita esse veniam ab tempora!</p>
            </div>
            </div>
          </div>




      </div>


  </Layout>
)

export default IndexPage
