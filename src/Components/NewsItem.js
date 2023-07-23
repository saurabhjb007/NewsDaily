import React from "react";

const NewsItem = (props) => {
  let { title, description, imageUrl, newsUrl, author, date, source } = props;
  return (
    <div className="my-3">
      <div className="card">
        <div
          className="container"
          style={{
            display: "flex",
            position: "absolute",
            justifyContent: "flex-end",
          }}
        >
          <span className="badge rounded-pill bg-danger">{source}</span>
        </div>
        <img
          src={
            !imageUrl
              ? "https://icon-library.com/images/no-picture-available-icon/no-picture-available-icon-7.jpg"
              : imageUrl
          }
          className="card-img-top"
          alt="error"
        />
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <p className="card-text">{description}</p>
          <p className="card-text">
            <small className="text-muted">
              By {author ? author : "Unknown"} on {new Date(date).toGMTString()}{" "}
            </small>
          </p>

          <a
            rel="noreferrer"
            href={newsUrl}
            target="_blank"
            className="btn btn-sm btn-dark"
          >
            read more
          </a>
        </div>
      </div>
    </div>
  );
};

export default NewsItem;
