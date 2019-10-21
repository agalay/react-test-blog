import React from "react";
import { connect } from "react-redux";
import { ArticleList } from "../../../components";
import ArticleListActions from "../action";

class ArticleListContainer extends React.Component {
  componentDidMount() {
    const { fetchItems } = this.props;
    fetchItems();
  }

  render() {
    return <ArticleList items={this.props.items} />;
  }
}

const mapStateToProps = ({ articles }) => articles;
const mapDispatchToProps = ArticleListActions;

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ArticleListContainer);
