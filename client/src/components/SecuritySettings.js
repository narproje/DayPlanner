import React, { Component } from 'react';

export default class SecuritySettings extends Component {
	state = {
		currentPassword: '',
		newPassword: '',
		newPasswordAgain: '',
		newEmail: '',
	};

	currentPasswordChange = e => {
		this.setState({ currentPassword: e.target.value });
	};
	newPasswordChange = e => {
		this.setState({ newPassword: e.target.value });
	};
	newPasswordAgainChange = e => {
		this.setState({ newPasswordAgain: e.target.value });
	};

	newEmailChange = e => {
		this.setState({ newEmail: e.target.value });
	};

	changePasswordSubmitHandle = () => {
		console.log(this.state.currentPassword);
		console.log(this.state.newPassword);
		console.log(this.state.newPasswordAgain);
	};

	render() {
		return (
			<div className="mt-3">
				<div className="row p-3">
					<div className="col-6">
						<form action="#" onSubmit={this.changePasswordSubmitHandle}>
							<legend>Change your password</legend>
							<hr />
							<div className="form-group">
								<label for="exampleInputPassword1">Current password</label>
								<input
									type="password"
									className="form-control"
									id="exampleInputPassword1"
									placeholder="Password"
									value={this.state.currentPassword}
									onChange={this.currentPasswordChange}
								/>
							</div>
							<div className="form-group">
								<label for="exampleInputPassword2">New password</label>
								<input
									type="password"
									className="form-control"
									id="exampleInputPassword2"
									placeholder="New password"
									value={this.state.newPassword}
									onChange={this.newPasswordChange}
								/>
							</div>
							<div className="form-group">
								<label for="exampleInputPassword3">New password again</label>
								<input
									type="password"
									className="form-control"
									id="exampleInputPassword3"
									placeholder="New password again"
									value={this.state.newPasswordAgain}
									onChange={this.newPasswordAgainChange}
								/>
							</div>
							<button type="submit" className="btn btn-primary">
								Submit
							</button>
						</form>
					</div>
					<div className="col-6">
						<form>
							<legend>Change your email</legend>
							<hr />
							<div className="form-group">
								<label for="exampleInputEmail1">New email address</label>
								<input
									type="email"
									className="form-control"
									id="exampleInputEmail1"
									aria-describedby="emailHelp"
									placeholder="Enter email"
									value={this.state.newEmail}
									onChange={this.newEmailChange}
								/>
							</div>
						</form>
					</div>
				</div>
			</div>
		);
	}
}
