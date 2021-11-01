import React from 'react';
import { connect } from 'react-redux';
import { authMe } from '../../api/api';
import { setAuthUserData } from '../../Redux/authReduser';
import Header from './Header';
class HeaderContainer extends React.Component {

	componentDidMount() {
		
		authMe().then(data => {
			if (data.resultCode === 0) {
				let {id, login, email} = data.data
				this.props.setAuthUserData(id, login, email)
			} else alert(data.messages)
		})
	}


	render() {
		return (
			<Header {...this.props}/>
		)
	}
}

const mapStateToProps = (state) => ({
	isAuth: state.auth.isAuth,
	login: state.auth.login
})


export default connect (mapStateToProps,{setAuthUserData}) (HeaderContainer)
