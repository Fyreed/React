import React from "react"
import { Redirect } from "react-router"
import { connect } from 'react-redux';

debugger

let mapStateToPropsForRedirect = (state) => ({
	auth: state.auth.isAuth
})

export const withAuthRedirect = (Component) => {

	class RedirectComponent extends React.Component{

		render () {
			if (!this.props.auth) return <Redirect to={'/login'} />

			return <Component {...this.props} />
		}
	}

	let ConnectedAuthRedirectComponent = connect (mapStateToPropsForRedirect) (RedirectComponent)

	return ConnectedAuthRedirectComponent
}