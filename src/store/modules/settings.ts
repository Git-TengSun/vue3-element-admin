// store/modules/settings.ts

import setting from '../../settings';
import { Module } from 'vuex';

// 定义设置模块的状态类型
export interface SettingState {
  sidebarClosed: boolean;
  asideWidth: number;
  headerHeight: number;
  footerHeight: number;
  title: string;
}

// 创建设置模块的 Vuex store
const settingModule: Module<SettingState, any> = {
  state: {
    sidebarClosed: setting.sidebarClosed,
    asideWidth: setting.asideWidth,
    headerHeight: setting.headerHeight,
    footerHeight: setting.footerHeight,
    title: setting.title
  },
  mutations: {
    // 修改 sidebarClosed 状态
    toggleSidebar(state: SettingState) {
      state.sidebarClosed = !state.sidebarClosed;
    },
    // 修改 asideWidth 状态
    setAsideWidth(state: SettingState, width: number) {
      state.asideWidth = width;
    },
    // 修改 headerHeight 状态
    setHeaderHeight(state: SettingState, height: number) {
      state.headerHeight = height;
    },
    // 修改 footerHeight 状态
    setFooterHeight(state: SettingState, height: number) {
      state.footerHeight = height;
    },
    // 修改 title
    setTitle(state: SettingState, title: string) {
      state.title = title;
    }
  },
  actions: {
    // 触发 toggleSidebar mutation
    toggleSidebar({ commit }) {
      commit('toggleSidebar');
    },
    // 触发 setAsideWidth mutation
    setAsideWidth({ commit }, width: number) {
      commit('setAsideWidth', width);
    },
    // 触发 setHeaderHeight mutation
    setHeaderHeight({ commit }, height: number) {
      commit('setHeaderHeight', height);
    },
    // 触发 setFooterHeight mutation
    setFooterHeight({ commit }, height: number) {
      commit('setFooterHeight', height);
    },
    // 触发 setTitle mutation
    setTitle({ commit }, title: string) {
      commit('setTitle', title);
    }
  }
};

export default settingModule;
