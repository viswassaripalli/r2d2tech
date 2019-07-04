import React from "react";
import "./MovieCard.css";
class MovieRow extends React.Component {
  viewMovie() {
    const url = "https://www.themoviedb.org/movie/" + this.props.movie.id;
    window.location.href = url;
  }

  render() {
    return (
      // <table key={this.props.movie.id} style={{ border: "2px solidblack" }}>
      //   <tbody>
      //     <tr>
      //       <td>
      //         <img alt="poster" width="120" src={this.props.movie.poster_src} />
      //         <br />
      //         <span id="avg">{this.props.movie.vote_average * 10}%</span>
      //       </td>
      //       <td style={{ textAlign: "center" }}>
      //         <h3>{this.props.movie.title} </h3>

      //         <p>{this.props.movie.overview}</p>
      //         <input
      //           id="view"
      //           type="button"
      //           onClick={this.viewMovie.bind(this)}
      //           value="View"
      //         />
      //       </td>
      //     </tr>
      //   </tbody>
      // </table>
      <div className="container">
        <div className="moviecard">
          <div id="poster_div">
            <img
              id="poster"
              alt="poster"
              width="120"
              src={this.props.movie.poster_src}
            />
          </div>
          <div className="content">
            <h1 style={{ marginLeft: "10%", fontWeight: "bold" }}>
              {this.props.movie.title}
            </h1>
            <span className="circle">
              {this.props.movie.vote_average * 10}%
            </span>
            <br />
            <h3>overview</h3>
            <p>{this.props.movie.overview}</p>
          </div>
        </div>
      </div>
    );
  }
}

export default MovieRow;
