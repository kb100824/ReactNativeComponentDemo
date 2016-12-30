import React,{Component} from 'react';
import{

  DatePickerIOS,
  StyleSheet,
  View,
  TextInput,
  Text,
}from 'react-native';



class DatePickerExample extends Component {

  static defaultProps={
    date:new Date(),
    timeZoneOffsetInHours:(-1)*(new Date()).getTimezoneOffset()/60,
  };

  state={
    date:this.props.date,
    timeZoneOffsetInHours: this.props.timeZoneOffsetInHours,
  };

  onDateChange=(date)=>{
     this.setState({date:date});
  };

  onTimeZoneChange=(event)=>{
    var offset = parseInt(event.nativeEvent.text,10);
    if (isNaN(offset)) {
      return;
    }
    this.setState({timeZoneOffsetInHours:offset});
  };
   render(){
     return(
       <View>
       <WithLabel label="当前具体时间">
       <Text>
       {
         this.state.date.toLocaleDateString()+' '+this.state.date.toLocaleTimeString()
       }
       </Text>
       </WithLabel>

       <WithLabel label="时区">
          <TextInput onChange={this.onTimeZoneChange} style={datePickerStyle.textinput}
          value={this.state.timeZoneOffsetInHours.toString()}/>
          <Text> hours from utc</Text>
       </WithLabel>

       <Heading label="日期和时间选择器"/>

       <DatePickerIOS date={this.state.date}
       mode="datetime" timeZoneOffsetInMinutes={this.timeZoneOffsetInHours*60}
       onDateChange={this.onDateChange}/>

           <Heading label="日期选择器" />
               <DatePickerIOS
                 date={this.state.date}
                 mode="date"
                 timeZoneOffsetInMinutes={this.state.timeZoneOffsetInHours * 60}
                 onDateChange={this.onDateChange}
               />

               <Heading label="时间选择间隔10分钟" />

               <DatePickerIOS
                 date={this.state.date}
                 mode="time"
                 timeZoneOffsetInMinutes={this.state.timeZoneOffsetInHours * 60}
                 onDateChange={this.onDateChange}
                 minuteInterval={10}
               />
       </View>



     );
   }


}
class WithLabel extends Component {
    render(){
      return (
        <View style={datePickerStyle.labelContainer}>
          <View style={datePickerStyle.labelView}>
          <Text style={datePickerStyle.label}>
          {
            this.props.label
          }
          </Text>
          </View>
          {this.props.children}
        </View>
      );
    }
}
class Heading extends Component {

  render(){
    return(
      <View style={datePickerStyle.headingContainer}>
      <Text style={datePickerStyle.heading}>
      {
        this.props.label
      }
      </Text>
      </View>
    );
  }
}
exports.displayName = (undefined: ?string);
exports.title = '<DatePickerIOS>';
exports.description = 'Select dates and times using the native UIDatePicker.';
exports.DatePickerModel = [
{
  title: '日期选择器',
  render(): React.Element<any> {
    return <DatePickerExample />;
  },
}];
var datePickerStyle = StyleSheet.create({
  textinput: {
      height: 26,
      width: 50,
      borderWidth: 0.5,
      borderColor: '#0f0f0f',
      padding: 4,
      fontSize: 13,
    },
    labelContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      marginVertical: 2,
    },
    labelView: {
      marginRight: 10,
      paddingVertical: 2,
    },
    label: {
      fontWeight: '500',
    },
    headingContainer: {
      padding: 4,
      backgroundColor: '#f6f7f8',
    },
    heading: {
      fontWeight: '500',
      fontSize: 14,
    },
});
