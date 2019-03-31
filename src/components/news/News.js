import React, { Component } from 'react';
import './news.css';


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
    fetch('https://cdtbackend.herokuapp.com/news?page=1&limit=3').then(resp => resp.json()).then((result) => {
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
                height: 200, width: '60%', margin: 'auto', display: 'block'
              }}
              src={n.img}
              alt="Card"
            />
            <div className="card-body">
              <p className="card-text">{n.body}</p>
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
          <div style={{ opacity: 0.5, marginTop: '50%', marginBottom: '50%' }} className="jumbotron">
            <h1 style={{ opacity: 1 }} className="display-3">Good Morning!</h1>
            <p className="lead">Its time to start it will be an incredible day.</p>
            <hr className="my-4" />
            <p className="lead">
              <button type="button" style={{ width: 100 }} onClick={this.mostrar} className="btn btn-warning btn-lg">News</button>
            </p>
          </div>
        </blockquote>
        )}

        {this.state.show && (
        <div>
          {news}
          <a
            id='btnBack'
            href='#top'
            style={{
              width: 300, position: 'relative', left: '31%', marginTop: '15%',
              opacity: 0.7
            }}
            onClick={this.mostrar}
            className="btn btn-warning btn-lg">Back</a>
        </div>
        )}
      </div>
    );
  }
}
export default News;
