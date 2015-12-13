import $ from "jquery"
import "fullpage.js"
import "fullpage.js/jquery.fullPage.css"
import "jquery.transit"

$('#ui').fullpage({
	anchors:['1','2','3','4'],
	navigation:true,
	afterLoad:(link,index)=>{
		switch(index){
			case 1:
				$("#p1").find("img").transition({opacity:1,scale:1})
				break;
			case 2:
				$("#p2").find("img").transition({opacity:1,translate:[0,0]})
				break
			case 3:
				$("#p3").find("img").transition({opacity:1,translate:[0,0]})
				break
			case 4:
				$("#p4").find("img").transition({opacity:1,translate:[0,0]})
				break
		}
	},
	onLeave:(index,dir)=>{
		switch(index){
			case 1:
				$("#p1").find("img").transition({opacity:0,scale:0})
				break;
			case 2:
				$("#p2").find("img").transition({opacity:0,translate:[0,-100]})
				break
			case 3:
				$("#p3").find("img").transition({opacity:0,translate:[0,-100]})
				break
			case 4:
				$("#p4").find("img").transition({opacity:0,translate:[0,-100]})
				break
		}
	}
})
$("#p2").find("img").transition({opacity:0,translate:[0,-100]})
$("#p3").find("img").transition({opacity:0,translate:[0,-100]})
$("#p4").find("img").transition({opacity:0,translate:[0,-100]})