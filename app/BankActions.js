import AppDispatcher from './AppDispatcher';
import bankConstants from './constants';

let BankActions = {
	/**
	Create an account with a empty value
	*/
	createAccout() {
		AppDispatcher.dispatch({
			type: bankConstants.CREATED_ACCOUNT,
			ammount: 0
		});
	},

	/**
	* {number} ammount to whithdraw
	*/
	depositIntoAccount(ammount){
		AppDispatcher.dispatch({
			type: bankConstants.DEPOSITD_INTO_ACCOUNT,
			ammount: ammount
		});
	},

	whithdrawFromAccount(ammount) {
		AppDispatcher.dispatch({
			type:bankConstants.WHITHDRAW_FROM_ACCOUNT,
			ammount: ammount
		});
	}


}
export default BankActions;