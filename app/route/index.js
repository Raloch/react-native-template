import React from 'react'
import {View, Platform, Image} from 'react-native'
import {StackNavigator, TabNavigator} from 'react-navigation'
import Home from './Home'
import Nodeapplication from './Nodeapplication'
import Friends from './Friends'
import Settings from './Settings'
import Img from '../img'

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
        header: null,
        tabBarIcon: ({focused}) => (
          <Image resizeMode="contain" source={focused ? Img.tab_1_h : Img.tab_1} style={{width: 18, hieght: 18}} />
        )
      },
    },
    Nodeapplication: {
      screen: Nodeapplication,
      navigationOptions: {
        tabBarLabel: '节点申请',
        header: null,
        tabBarIcon: ({focused}) => (
          <Image resizeMode="contain" source={focused ? Img.tab_2_h : Img.tab_2} style={{width: 18, hieght: 18}} />
        )
      }
    },
    Friends: {
      screen: Friends,
      navigationOptions: {
        tabBarLabel: '我的好友',
        header: null,
        tabBarIcon: ({focused}) => (
          <Image resizeMode="contain" source={focused ? Img.tab_3_h : Img.tab_3} style={{width: 18, hieght: 18}} />
        )
      }
    },
    Settings: {
      screen: Settings,
      navigationOptions: {
        tabBarLabel: '设置',
        header: null,
        tabBarIcon: ({focused}) => (
          <Image resizeMode="contain" source={focused ? Img.tab_4_h : Img.tab_4} style={{width: 18, hieght: 18}} />
        )
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
      showLabel: true, // 显示导航栏文字
      upperCaseLabel: true, // 导航栏字母大写
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
    },
    Friends: {
      screen: Friends
    },
    Settings: {
      screen: Settings
    }
  }
)