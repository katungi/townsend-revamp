import { useDispatch, useSelecto } from 'react-redux';
import type { RootState, AppDispatch } from './store';

// use the RootState type for the useSelector hook
export const useAppDispatch = useDispatch<AppDispatch>();
export const useAppSelector = useSelector<RootState>;