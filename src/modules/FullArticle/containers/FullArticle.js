import React from "react";
import { FullArticle } from "../../../components";
import { connect } from "react-redux";
import { withRouter } from "react-router";
import ArticleListActions from "../../ArticleList/action";

class FullArticleContainer extends React.Component {
  componentDidMount() {
    const {
      article,
      articleId,
      fetchItem,
      fetchComments,
      comments
    } = this.props;

    if (!article) {
      fetchItem(articleId);
    }

    if (!comments) {
      fetchComments(articleId);
    }
  }

  render() {
    const { article, comments } = this.props;

    return !article ? (
      "Loading..."
    ) : (
      <FullArticle
        title={article.title}
        text={article && article.text}
        createdAt={article && article.createdAt}
        comments={comments}
      />
    );
  }
}

const mapStateToProps = function({ articles, comments }, { match }) {
  return {
    article:
      articles.items &&
      articles.items.filter(article => article._id === match.params.id)[0],
    articleId: match.params.id,
    comments: comments.items
  };
};

export default withRouter(
  connect(
    mapStateToProps,
    ArticleListActions
  )(FullArticleContainer)
);
