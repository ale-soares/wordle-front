import { useDispatch, useSelector } from "react-redux";

import type { RootState } from "./types/RootState";
import type { AppDispatch } from "./types/AppDispatch";

export const useAppDispatch = useDispatch.withTypes<AppDispatch>();
export const useAppSelector = useSelector.withTypes<RootState>();
