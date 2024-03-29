import { connect } from 'react-redux';
import { compose } from 'redux';
import HocWrappers from './../HocWrappers';
import Menu from './Component';

const mapStateToProps=(state)=>{
  const {
    page,
    pageSize,
    totalArticle,
    dataArticles,
    loading,
  } = state.Content;
  return {
    ...state,
    page,
    pageSize,
    totalArticle,
    dataArticles,
    loading
  };
}

const mapDispatchToProps=(dispatch)=>{
  return { dispatch:dispatch };
}

export default compose(
  connect(
    mapStateToProps,
    mapDispatchToProps
  ),
  HocWrappers
)(Menu);