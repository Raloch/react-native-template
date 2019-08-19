import React from 'react'
import {View, Platform} from 'react-native'
import {StackNavigator, TabNavigator} from 'react-navigation'
import Home from './Home'
import Nodeapplication from './Nodeapplication'

export default class Route extends React.Component {
  constructor(props) {
    super(props)
  }
  static navigationOptions = {
    title: '',
    header: null
  }
  render() {
    return (
      <View style={{flex: 1}}>
        <Nav />
      </View>
    )
  }
}

let TabContainer = TabNavigator(
  {
    Home: {
      screen: Home,
      navigationOptions: {
        tabBarLabel: '首页',
        header: null
      },
    },
    Nodeapplication: {
      screen: Nodeapplication,
      navigationOptions: {
        header: null,
        tabBarLabel: '节点申请'
      }
    }
  },
  {
    initialRouteName: 'Home', // 默认页面组件
    tabBarPosition: 'bottom', // 显示在底端，android 默认是显示在页面顶端的
    swipeEnabled: false, // 是否可以左右滑动切换tab
    animationEnabled: false, // 切换页面时是否有动画效果
    tabBarOptions: {
      activeTintColor: '#FFFFFF', // 文字和图片选中颜色
      inactiveTintColor: '#727272', // 文字和图片未选中颜色
      showIcon: true, // android 默认不显示 icon, 需要设置为 true 才会显示
      showLabel: true,
      upperCaseLabel: false,
      style: { // TabBar
        height: 50,
        backgroundColor: '#11111B', // tab背景色
        borderBottomWidth: 0,
        padding: (Platform.OS == 'ios') ? 0 : 3,
      },
      labelStyle: { // 文字
        fontSize: 10,
        margin: 0,
      },
      indicatorStyle: { // 如TabBar下面显示有一条线，可以设高度为0后隐藏
        opacity: 0
      },
      tabStyle: {
        padding: 0,
        margin: 0,
        paddingTop: (Platform.OS == 'ios') ? 4 : 2,
        paddingBottom: (Platform.OS == 'ios') ? 4 : 2,
      }
    }
  }
)

const Nav = StackNavigator(
  {
    Home: {
      screen: TabContainer
    },
    Nodeapplication: {
      screen: Nodeapplication
    }
  }
)