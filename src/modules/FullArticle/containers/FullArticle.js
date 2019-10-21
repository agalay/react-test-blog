import React from "react";
import { FullArticle } from "../../../components";
import { connect } from "react-redux";
import { withRouter } from "react-router";
import ArticleListActions from "../../ArticleList/action";

class FullArticleContainer extends React.Component {
  componentDidMount() {
    const { article, articleId, fetchItem } = this.props;
    if (!article) {
      fetchItem(articleId);
    }
  }

  render() {
    const { article, comments } = this.props;

    return !article ? (
      "Loading..."
    ) : (
      <FullArticle
        comments={comments}
        title={article.title}
        text={article && article.text}
        createdAt={article && article.createdAt}
      />
    );
  }
}

const mapStateToProps = function({ articles }, { match }) {
  return {
    article:
      articles.items &&
      articles.items.filter(article => article._id === match.params.id)[0],
    articleId: match.params.id,
    comments: articles.comments
  };
};

export default withRouter(
  connect(
    mapStateToProps,
    ArticleListActions
  )(FullArticleContainer)
);
