//Import some code we need
var React = require('react-native');
var Text = React.Text;
var StyleSheet = React.StyleSheet;


//Create a component
var DayItem = React.createClass({
	render: function(){
		return <Text style={this.style()}>
			{this.props.day}
		</Text>
	},
	style: function(){
		return {
			color: this.color()
			fontWeight:
			fontSize:
			lineHeight:
		}
	},
	color: function() {
		var opacity = 1 / this.props.daysUntil;
		
	}
});

//Style the component
// var styles = StyleSheet.create({
// 	day: {
// 		fontSize: 18,
// 		color: '#0000FF'
// 	}
// });


//Make this code available elsewhere
module.exports =DayItem;
