import {
  Storage,
  StorageFetchError,
  StorageUpdateError,
  StorageValue,
} from '../types/StorageProvider';

export class StorageProvider {
  constructor(private storage: Storage) {}

  fetch = async (key: string, onError?: (e: StorageFetchError) => void) => {
    try {
      return await this.storage.getItem(key);
    } catch (error) {
      onError?.({error, key});

      return null;
    }
  };

  update = async (
    key: string,
    value: StorageValue,
    onError?: (e: StorageUpdateError) => void,
  ) => {
    try {
      if (value) {
        await this.storage.setItem(key, value);
      } else {
        await this.storage.removeItem(key);
      }
    } catch (error) {
      onError?.({error, key, value});
    } finally {
      return value;
    }
  };
}
