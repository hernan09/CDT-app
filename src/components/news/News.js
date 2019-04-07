import React, { Component } from 'react';
import { Tabs } from 'antd';

import Tarea from '../tarea/Tarea';

import './news.css';

const { TabPane } = Tabs;

class News extends Component {
  constructor(props) {
    super(props);
    this.state = {
      news: [],
      show: false,
      hide: true
    };
    this.mostrar = this.mostrar.bind(this);
  }

  componentDidMount() {
    fetch('https://cdtbackend.herokuapp.com/news?page=1&limit=4').then(resp => resp.json()).then((result) => {
      this.setState({
        news: result.news
      });
    });
  }

  mostrar() {
    this.setState({
      show: !this.state.show,
      hide: !this.state.hide
    });
  }

  render() {
    const news = this.state.news.map((n) => {
      const fecha = n.date.split('');
      const fecha2 = fecha.slice(0, 10);
      return (
        <div key={n.id} id="noticias">
          <div className="card mb-3">
            <h3 className="card-header">{n.title}</h3>
            <div className="card-body">
              <h5 className="card-title">{n.autor}</h5>
              <h6 className="card-subtitle text-muted">{n.source}</h6>
            </div>
            <img
              id='imgen'
              style={{
                height: 200
              }}
              src={n.img}
              alt="Card"
            />
            <div className="card-body">
              <p id="cuerpo" className="card-text">{n.body}</p>
            </div>
            <ul className="list-group list-group-flush">
              <li className="list-group-item">{fecha2}</li>
            </ul>
          </div>
        </div>
      );
    });
    return (
      <div id="contenedor">
        {this.state.hide && (
          <blockquote id='blockCont' className="blockquote text-center">
            <div className="jumbotron">
              <h1 style={{ opacity: 1 }} className="display-3">Good Morning!</h1>
              <p className="lead">Its time to start it will be an incredible day.</p>
              <hr className="my-4" />
              <p className="lead">
                <button type="button" style={{ width: 100 }} onClick={this.mostrar} className="btn btn-warning btn-lg">News</button>
              </p>
            </div>
            <Tabs id="taba" style={{ color: 'white', width: '80%', margin: 'auto' }} defaultActiveKey="1">
              <TabPane tab="HOME" key="1"><div style={{ backgroundColor: 'black' }} className="jumbotron">
                <h1 style={{ color: 'white' }} className="display-3"><strong style={{color: 'orange' }}>W</strong>orks</h1>
               <Tarea></Tarea>
              </div>
              </TabPane>
              <TabPane tab="ABOUT" key="2"><div style={{ backgroundColor: 'black' }} className="jumbotron">
                <h1 style={{ color: 'white' }} className="display-3">Hello, world2!</h1>
                <p className="lead">This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information.</p>
                <hr className="my-4" /><p>It uses utility classes for typography and spacing to space content out within the larger container.</p>
                <p className="lead">
                  <a className="btn btn-warning btn-lg" href="#top" role="button">Learn more</a>
                </p>
              </div>
              </TabPane>
              <TabPane tab="CONTACT" key="3"><div style={{ backgroundColor: 'black' }} className="jumbotron">
                <h1 style={{ color: 'white' }} className="display-3">Hello, world3!</h1>
                <p className="lead">This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information.</p>
                <hr className="my-4" /> <p>It uses utility classes for typography and spacing to space content out within the larger container.</p>
                <p className="lead">
                  <a className="btn btn-warning btn-lg" href="#top" role="button">Learn more</a>
                </p>
              </div>
              </TabPane>
            </Tabs>
          </blockquote>
        )}

        {this.state.show && (
          <div>
            {news}
            <a
              id='btnBack'
              href='#top'
              style={{
                width: 300,
                position: 'relative',
                left: '28%',
                marginTop: '5%',
                marginBottom: '5%',
                opacity: 0.7
              }}
              onClick={this.mostrar}
              className="btn btn-warning btn-lg"
            >
              Back
          </a>
          </div>
        )}
      </div>
    );
  }
}
export default News;
