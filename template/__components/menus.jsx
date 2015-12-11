import React from "react"
import {List,ListItem} from "material-ui"
import {connect} from "react-redux"

export default class Lists extends React.Component{
	render(){return(
		<List style={this.props.style}>{
			(this.props.user&&this.props.user.group=="admin"?
				["首页设置"]:
				["个人信息"]
			).map(item=>
				<ListItem primaryText={item} key={item} onTouchTap={()=>this.props.choose(item)} />
			)
		}</List>
	)}
}
export default connect(
	state=>({user:state.user}),
	dispatch=>({choose:(item)=>window.location.hash=item})
)(Lists)