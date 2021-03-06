/**
 *
 * ProjectItemsPage
 *
 */

import { compose } from 'redux';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { FormattedMessage } from 'react-intl';
import { Grid, Header as PageHeader, Label } from 'semantic-ui-react';
import { Helmet } from 'react-helmet';
import Promise from 'bluebird';
import PropTypes from 'prop-types';
import React from 'react';

import injectSaga from '~/utils/injectSaga';
import injectReducer from '~/utils/injectReducer';

import {
  makeSelectProjectsImportsProcessingData,
  makeSelectCurrentUser,
  makeSelectIsLoggedIn,
  makeSelectProjectsNextValues,
  makeSelectLocalSettings,
  makeSelectProjectImportsProcessingData,
} from '~/containers/App/selectors';

import {
  projectsItemsBindActions,
  logoutCurrentUser,
} from '~/containers/App/actions';

import {
  changeId,
  changeFilterTakeSkip,
  resetResult,
  changeFilterSortBy,
  changeFilterSortWay,
  changeFilterWhereSearch,
  changeFilterWhereType,
} from './actions';

import makeSelectProjectItemsPage, {
  makeSelectProject,
  makeSelectResult,
  makeSelectFilter,
  makeSelectProjectMoneyTypes,
  makeSelectProjectItemGradeTypes,
  makeSelectProjectWeaponTypes,
} from './selectors';

import reducer from './reducer';
import saga from './saga';
import messages from './messages';

import Header from '~/components/Header';
import Container from '~/components/Container';

import FullheightColumn, {
  FullheightThis,
} from '~/components/FullheightColumn';

import ProjectMenu from '~/components/ProjectMenu';
import Notification from '~/components/Notification';
import LoadingIndicator from '~/components/LoadingIndicator';
import InfiniteAutoSizeList from '~/components/InfiniteAutoSizeList';
import ProjectItemVirtualizedRow from '~/components/Project/ItemVirtualizedRow';
import ProjectItemsFilters from '~/components/Project/ItemsFilters';
import { IMMUTABLE_LIST, IMMUTABLE_MAP } from '~/containers/App/constants';

/* eslint-disable react/prefer-stateless-function */
export class ProjectItemsPage extends React.PureComponent {
  constructor(props) {
    super(props);
    this.isRowLoaded = this.isRowLoaded.bind(this);
    this.rowRenderer = this.rowRenderer.bind(this);
    this.loadMoreRows = this.loadMoreRows.bind(this);
    this.getActionsBindPayload = this.getActionsBindPayload.bind(this);
  }

  componentWillMount() {
    this.loadProjectIfIdChanged(this.props, { isMount: true });
    this.loadMoreRows({ startIndex: 0, stopIndex: 25 });
  }

  componentWillReceiveProps(nextProps) {
    this.loadProjectIfIdChanged(nextProps);
    const { result } = this.props;

    if (
      !result.get('items').count() !== nextProps.result.get('items').count() &&
      this.infiniteAutoSizeList
    ) {
      this.infiniteAutoSizeList.forceUpdateGrid();
    }
  }

  componentWillUnmount() {
    const { fnResetResult } = this.props;
    fnResetResult(); // clean state
  }

  loadProjectIfIdChanged(props, { isMount = false } = {}) {
    const { id } = props.projectItemsPage;
    const { match } = props;
    const { params } = match;

    const nextId = params.id;

    if (id !== nextId || isMount) {
      props.fnChangeId(nextId);
      props.fnResetResult(); // clean state
    }
  }

  getActionsBindPayload() {
    const { dispatch, match, currentProject } = this.props;
    const additionalData = (() => {
      if (!currentProject) {
        return {};
      }

      return {
        moneyTypes: currentProject.getIn(
          ['moneyTypes', 'items'],
          IMMUTABLE_LIST,
        ),
        itemGradeTypes: currentProject.getIn(
          ['itemGradeTypes', 'items'],
          IMMUTABLE_LIST,
        ),
        weaponTypes: currentProject.getIn(
          ['weaponTypes', 'items'],
          IMMUTABLE_LIST,
        ),
      };
    })();

    return {
      dispatch,
      projectId: match.params.id,
      additionalData,
    };
  }

  isRowLoaded({ index }) {
    const { result } = this.props;
    return !!result.get('items').get(index);
  }

  rowRenderer({ key, ...props }) {
    const {
      result,
      currentProject,
      projectsNextValues,
      localSettings,
    } = this.props;

    const actionsBindPayload = this.getActionsBindPayload();
    const {
      moneyTypes,
      itemGradeTypes,
      weaponTypes,
    } = actionsBindPayload.additionalData;

    const itemActions = projectsItemsBindActions(actionsBindPayload);
    const nextValues =
      currentProject &&
      projectsNextValues.get(currentProject.get('id'), IMMUTABLE_MAP);

    return (
      <ProjectItemVirtualizedRow
        {...props}
        key={key}
        items={result.get('items')}
        nextValues={nextValues}
        itemActions={itemActions}
        moneyTypes={moneyTypes}
        itemGradeTypes={itemGradeTypes}
        weaponTypes={weaponTypes}
        localSettings={localSettings}
      />
    );
  }

  loadMoreRows({ startIndex, stopIndex }) {
    const { fnChangeFilterTakeSkip } = this.props;
    fnChangeFilterTakeSkip(stopIndex - startIndex + 1, startIndex);
    return Promise.delay(150);
  }

  render() {
    const {
      isLoggedIn,
      currentUser,
      currentProject,
      projectItemsPage,
      projectsImportsProcessingData,
      result,
      filter,
      fnChangeFilterSortBy,
      fnChangeFilterSortWay,
      fnChangeFilterWhereSearch,
      fnChangeFilterWhereType,
      fnLogoutCurrentUser,
      projectImportsProcessingData,
    } = this.props;

    const {
      // project,
      isLoaded,
      isError,
      errorMessage,
      isLoading,
      id,
    } = projectItemsPage;

    return (
      <div>
        <Helmet>
          <title>ProjectItemsPage</title>
          <meta name="description" content="Description of ProjectItemsPage" />
        </Helmet>

        <Header
          currentProject={currentProject}
          currentUser={currentUser}
          isLoggedIn={isLoggedIn}
          projectsImportsProcessingData={projectsImportsProcessingData}
          onClickLogout={fnLogoutCurrentUser}
        />

        <Container>
          {isError && <Notification type="danger">{errorMessage}</Notification>}

          {isLoading && <LoadingIndicator />}

          {isLoaded && (
            <Grid columns={2}>
              <Grid.Column largeScreen={3} widescreen={2}>
                <ProjectMenu
                  isLoggedIn={isLoggedIn}
                  project={currentProject}
                  projectId={id}
                  currentUser={currentUser}
                  projectImportsProcessingData={projectImportsProcessingData}
                />
              </Grid.Column>
              <FullheightColumn largeScreen={13} widescreen={14}>
                <PageHeader>
                  <FormattedMessage
                    {...messages.header}
                    values={{
                      title: currentProject.get(
                        'title',
                        currentProject.get('name'),
                      ),
                      total: <Label circular>{result.get('total')}</Label>,
                    }}
                  />
                </PageHeader>

                <ProjectItemsFilters
                  sortBy={filter.get('sortBy')}
                  sortWay={filter.get('sortWay')}
                  whereSearch={filter.getIn(['where', 'search'])}
                  whereType={filter.getIn(['where', 'type'])}
                  onChangeSortBy={fnChangeFilterSortBy}
                  onChangeSortWay={fnChangeFilterSortWay}
                  onChangeWhereSearch={fnChangeFilterWhereSearch}
                  onChangeWhereType={fnChangeFilterWhereType}
                />

                <FullheightThis>
                  <InfiniteAutoSizeList
                    isRowLoaded={this.isRowLoaded}
                    loadMoreRows={this.loadMoreRows}
                    rowHeight={80}
                    rowRenderer={this.rowRenderer}
                    rowCount={result.get('total')}
                    ref={infiniteAutoSizeList => {
                      this.infiniteAutoSizeList = infiniteAutoSizeList;
                      return this.infiniteAutoSizeList;
                    }}
                  />
                </FullheightThis>
              </FullheightColumn>
            </Grid>
          )}
        </Container>
      </div>
    );
  }
}

ProjectItemsPage.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  projectItemsPage: makeSelectProjectItemsPage(),
  isLoggedIn: makeSelectIsLoggedIn(),
  currentProject: makeSelectProject(),
  projectMoneyTypes: makeSelectProjectMoneyTypes(),
  projectItemGradeTypes: makeSelectProjectItemGradeTypes(),
  projectWeaponTypes: makeSelectProjectWeaponTypes(),
  currentUser: makeSelectCurrentUser(),
  projectsImportsProcessingData: makeSelectProjectsImportsProcessingData(),
  projectsNextValues: makeSelectProjectsNextValues(),
  result: makeSelectResult(),
  filter: makeSelectFilter(),
  localSettings: makeSelectLocalSettings(),
  projectImportsProcessingData: (
    state,
    {
      match: {
        params: { id },
      },
    },
  ) => makeSelectProjectImportsProcessingData(id)(state),
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
    fnLogoutCurrentUser: () => dispatch(logoutCurrentUser()),
    fnChangeId: id => dispatch(changeId(id)),
    fnResetResult: () => dispatch(resetResult()),
    fnChangeFilterTakeSkip: (take, skip) =>
      dispatch(changeFilterTakeSkip(take, skip)),
    fnChangeFilterSortBy: sortBy => dispatch(changeFilterSortBy(sortBy)),
    fnChangeFilterSortWay: sortWay => dispatch(changeFilterSortWay(sortWay)),
    fnChangeFilterWhereSearch: whereSearch =>
      dispatch(changeFilterWhereSearch(whereSearch)),
    fnChangeFilterWhereType: whereType =>
      dispatch(changeFilterWhereType(whereType)),
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

const withReducer = injectReducer({ key: 'projectItemsPage', reducer });
const withSaga = injectSaga({ key: 'projectItemsPage', saga });

export default compose(
  withReducer,
  withSaga,
  withConnect,
)(ProjectItemsPage);
