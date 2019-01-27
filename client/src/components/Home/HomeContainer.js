import React from 'react'
import HomeView from 'components/Home/HomeView'
import { loadData } from 'actions/appActions'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'

class HomeContainer extends React.Component {
  componentDidMount() {
    this.props.loadData()
  }

  render() {
    const { currentlySending, data, errorMessage, username } = this.props
    return <HomeView username={username} currentlySending={currentlySending} data={data} errorMessage={errorMessage} />
  }
}

const mapStateToProps = state => ({
  username: state.formState.email,
  data: state.data.home,
  currentlySending: state.currentlySending,
  errorMessage: state.errorMessage
})

const mapDispatchToProps = dispatch => ({
  loadData: () => dispatch(loadData('/', 'home'))
})

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(HomeContainer))
