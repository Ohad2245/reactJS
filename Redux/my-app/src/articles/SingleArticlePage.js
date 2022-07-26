import React from "react";
import { useSelector } from "react-redux";
// 1. import link
import { Link, useParams } from "react-router-dom";

export const SingleArticlePage = () => {
  // React Router will pass in a match object as a prop that contains the URL information we're looking for.
  const { articleId } = useParams();

  const article = useSelector((state) =>
    state.articles.find((article) => article.id === articleId)
  );

  if (!article) {
    return (
      <section>
        <h2>article not found!</h2>
      </section>
    );
  }

  return (
    <section>
      <article className="card">
        <h2>{article.title}</h2>
        <p className="card-text">{article.content}</p>
        {/* Add link */}
        <Link to={`/editArticle/${article.id}`} className='btn btn-success'>Edit article</Link>
      </article>
    </section>
  );
};