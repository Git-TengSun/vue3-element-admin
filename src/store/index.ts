// store/index.ts

import { createStore } from 'vuex';
import settingModule, { SettingState } from './modules/settings';

// 定义根状态类型
export interface RootState {
  setting: SettingState;
}

// 创建Vuex store实例
export default createStore<RootState>({
  modules: {
    setting: settingModule
  }
});
