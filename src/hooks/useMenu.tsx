import { useAppDispatch, useAppSelector } from "../redux/hook";
import { setOpenMenu, setOpenSearch } from "../redux/features/appSettings";

export default function useMenu() {
  const { openMenu, openSearch } = useAppSelector((state) => state.appSettings);
  const dispatch = useAppDispatch();

  const handleOpenMenu = () => {
    dispatch(setOpenMenu());
  };

  const handleOpenSearch = () => {
    dispatch(setOpenSearch());
  };

  return { openMenu, openSearch, handleOpenMenu, handleOpenSearch };
}
