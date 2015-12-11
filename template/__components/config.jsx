import React from "react"
import {CardTitle,Card,CardText,TextField,FlatButton,CardActions} from "material-ui"
import request from "superagent"
export default class ConfigPage extends React.Component{
	constructor(props){
		super(props)
		this.state={}
		request.get("/db/config?key=target&value=index").end((err,res)=>{
			if(res.body.data.length==0)return
			this.setState({_id:res.body.data[0]._id})
			var data=res.body.data[0].data
			this.refs.bg.setValue(data.bg||"")
			this.refs.txt.setValue(data.txt||"")
		})
	}
	onFile(e,callback){
		var file = e.target.files[0]
		var reader = new FileReader();
		reader.readAsDataURL(file);
		reader.onload =(e)=>{
			callback(e.target.result)
		}
	}
	post(){
		var bg=this.refs.bg.getValue()
		var txt=this.refs.txt.getValue()
		var req=this.state._id?request.put("/db/config/"+this.state._id):request.post("/db/config")
		req.send({target:"index",data:{bg,txt}}).end((err,res)=>{
			(res.body||{}).ok||(res.body||{}).result.ok?alert("保存成功"):alert("保存失败")
		})
	}
	render(){return(
		<Card style={{width:600}}>
			<CardTitle title="首页设置"/>
			<CardText>
				<TextField floatingLabelText="背景图片(网址)" ref="bg" />
				<input type="file" style={{margin:"0 20px"}} onChange={e=>this.onFile(e,data=>this.refs.bg.setValue(data))} ref="bgfile" />
				<TextField fullWidth={true} floatingLabelText="中心文字" ref="txt" />
			</CardText>
			<CardActions>
				<FlatButton label="保存" onTouchTap={this.post.bind(this)} />
			</CardActions>
		</Card>
	)}
}