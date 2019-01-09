import React, { Component } from "react";
import { Dimensions } from "react-native";
import { TabView, SceneMap } from "react-native-tab-view";

import Conversas from "./Conversas";
import Contatos from "./Contatos";
import TabBarMenu from "./TabBarMenu";

export default class Principal extends Component {
  state = {
    index: 0,
    routes: [
      { key: "first", title: "Conversas" },
      { key: "second", title: "Contatos" }
    ]
  };

  _handleChangeTab = index => this.setState({ index });

  _renderHeader = props => <TabBarMenu {...props} />;

  _renderScene = SceneMap({
    first: Conversas,
    second: Contatos
  });

  render() {
    return (
      <TabView
        navigationState={this.state}
        renderScene={this._renderScene.bind(this)}
        onIndexChange={this._handleChangeTab}
        renderTabBar={this._renderHeader}
        initialLayout={{ width: Dimensions.get("window").width }}
      />
    );
  }
}
