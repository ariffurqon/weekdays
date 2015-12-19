//Import some code we need
var React = require('react-native');
var Moment = require('moment');
var AppRegistry = React.AppRegistry;
var Text = React.Text;
var View = React.View;
var StyleSheet = React.StyleSheet;
var DayItem = require('./src/day-item');

//create a react component
var Weekdays = React.createClass({
  render: function(){
    return <View style={styles.container}>
        {this.days()}
    </View>
  },
  days: function(){ 
    var daysItems = [];

    for (var i = 0; i < 7; i++) {
      var day = Moment().add(i, 'days').format('dddd');
      daysItems.push(
          <DayItem day={day} daysUntil={i} />
        )
    }
    return daysItems
   } 
});

//style the react component
var styles = StyleSheet.create({
  container: {
    flex: 1,
    // flexDirection: 'column', // 'row'
    justifyContent: 'center',//flex-start, //operate height wise
    alignItems: 'center' //flex-end // operate witdh wise
  }
});

//show the react component on the screen
AppRegistry.registerComponent('weekdays', function(){
  return Weekdays
});