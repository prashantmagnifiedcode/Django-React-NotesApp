const auth = (state,action) => {
	switch(action.type){
		case "LOGOUT":
			return{
			 	...state,
			 	user:null,
			 	loading:false,
			 	isAuthenticated:false,
			}
		case "LOGIN":
			return{
				...state,
				user:action.payload,
				loading:false,
				isAuthenticated:true,
				WhichUser:action.payload.isFullAdmin

			}
		case "ERROR":
			return{
				...state,
				error:action.error,
				loading:false
			}
		default:
			return state
	}	
}

export default auth;