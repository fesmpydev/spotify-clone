import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  openMenu: false,
  openSearch: false,
  openMiniPlayer: false,
  fullScreenMiniPlayer: false,
};

export const appSettings = createSlice({
  name: "appSettings",
  initialState,
  reducers: {
    setOpenMenu(state) {
      state.openMenu = !state.openMenu;
    },

    setOpenSearch(state) {
      state.openSearch = !state.openSearch;
    },

    setOpenMiniPlayer(state) {
      state.openMiniPlayer = !state.openMiniPlayer;
    },

    setFullScreenMiniPlayer(state) {
      state.fullScreenMiniPlayer = !state.fullScreenMiniPlayer;
    },
  },
});

export const {
  setOpenMenu,
  setOpenSearch,
  setOpenMiniPlayer,
  setFullScreenMiniPlayer,
} = appSettings.actions;
export default appSettings.reducer;
