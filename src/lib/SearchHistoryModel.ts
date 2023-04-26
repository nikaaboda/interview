import {StorageProvider} from './StorageProvider';

export class SearchHistory {
  constructor(
    private storageProvider: StorageProvider,
    public queueSize: number,
  ) {}
}

/**
Create a SearchHistory model

- Uses asyncStorage to persist
- Keeps a FIFO queue of entries (strings)
- Size of the queue is configurable through the constructor

Exposes initialize method
  - Loads the entries from storage

Exposes add method
  - Adds a new entry to the queue
  - If the resulting collection exceeds the size, oldest element is removed
  - If the new entry is already in the queue, don't add it again
  - Updates state and storage

Exposes clear method
  - Removes all entries from the queue
  - Updates state and storage

Note: - StorageProvider is an interface that abstracts away the storage implementation
        In this case it's AsyncStorage, so it works like async storage.
      - Don't worry about SearchHistoryHook.ts, it's just here to show you how the model can be used
*/
