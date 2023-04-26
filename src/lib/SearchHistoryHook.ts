import AsyncStorage from '@react-native-async-storage/async-storage';
import {proxy} from 'valtio';

import {SearchHistory} from './SearchHistoryModel';
import {StorageProvider} from './StorageProvider';

const storageProvider = new StorageProvider(AsyncStorage);

const searchHistory = new SearchHistory(storageProvider, 5);

export const currentSearchHistory = proxy(searchHistory);
